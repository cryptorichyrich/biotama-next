import { execSync } from "node:child_process";
import * as http from "node:http";
import * as path from "node:path";
import * as puppeteer from "puppeteer";
import * as fs from "node:fs";
import type { Server } from "node:http";

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
};

const createStaticServer = (rootDir: string): Promise<Server> => {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = req.url?.split("?")[0] || "/";
      const filePath = path.join(rootDir, urlPath);

      if (!filePath.startsWith(rootDir)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || "application/octet-stream";
        res.writeHead(200, { "Content-Type": contentType });
        fs.createReadStream(filePath).pipe(res);
      } else if (fs.existsSync(filePath + ".html")) {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(filePath + ".html").pipe(res);
      } else if (fs.existsSync(path.join(filePath, "index.html"))) {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(path.join(filePath, "index.html")).pipe(res);
      } else {
        const fallback = path.join(rootDir, "404.html");
        if (fs.existsSync(fallback)) {
          res.writeHead(200, { "Content-Type": "text/html" });
          fs.createReadStream(fallback).pipe(res);
        } else {
          res.writeHead(404);
          res.end("Not found");
        }
      }
    });

    server.listen(0, "127.0.0.1", () => resolve(server));
  });
};

const main = async () => {
  let browser: puppeteer.Browser | null = null;
  let server: Server | null = null;

  try {
    console.log("Building project...");
    execSync("npm run build", { stdio: "inherit", cwd: path.join(__dirname, "..") });

    const distDir = path.join(__dirname, "..", "out");
    const candidates = [
      path.join(distDir, "rate-card.html"),
      path.join(distDir, "rate-card", "index.html"),
    ];
    const rateCardHtmlPath = candidates.find((c) => fs.existsSync(c));
    if (!rateCardHtmlPath) {
      throw new Error("Rate card HTML not found in dist");
    }

    console.log(`Found rate card at: ${rateCardHtmlPath}`);

    console.log("Starting local server...");
    server = await createStaticServer(distDir);
    const address = server.address() as { port: number };
    const baseUrl = `http://127.0.0.1:${address.port}`;

    console.log("Launching browser...");
    browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();
    await page.setViewport({ width: 794, height: 1122, deviceScaleFactor: 2 });

    console.log("Opening Rate Card page...");
    await page.goto(`${baseUrl}/rate-card/`, {
      waitUntil: "networkidle0",
    });

    await page.evaluate(() => {
      document.querySelectorAll(".no-print").forEach((el) => el.remove());
    });

    console.log("Generating Rate Card PDF...");
    // ponytail: raw CDP with ReturnAsBase64. page.pdf() crashes with
    // "Protocol error (IO.read)" on this Windows setup; base64 avoids the stream.
    const cdp = await page.createCDPSession();
    const { data } = await cdp.send("Page.printToPDF", {
      printBackground: true,
      paperWidth: 8.27,
      paperHeight: 11.69,
      marginTop: 0.4724,
      marginBottom: 0.4724,
      marginLeft: 0.4724,
      marginRight: 0.4724,
      transferMode: "ReturnAsBase64",
    });
    fs.writeFileSync(
      path.join(__dirname, "..", "public", "rate-card.pdf"),
      Buffer.from(data, "base64")
    );

    console.log("✅ Rate Card PDF generated: public/rate-card.pdf");

    await browser.close();
    browser = null;

    server.close();
    server = null;

    process.exit(0);
  } catch (error) {
    console.error("Error generating rate card PDF:", error);

    if (browser) {
      await browser.close().catch(() => {});
    }
    if (server) {
      server.close();
    }

    process.exit(1);
  }
};

main();
