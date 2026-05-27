import { execSync } from "node:child_process";
import * as http from "node:http";
import * as path from "node:path";
import * as puppeteer from "puppeteer";
import { pdfPage } from "puppeteer-report";
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
          res.end("Not Found");
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
    // Next.js 16 export uses flat .html files
    // /resume → resume.html, /applications/X/resume → applications/X/resume.html
    const htmlExt = (p: string) => {
      const candidates = [
        path.join(distDir, p + ".html"),
        path.join(distDir, p, "index.html"),
      ];
      for (const c of candidates) {
        if (fs.existsSync(c)) return c;
      }
      return null;
    };

    const resumeHtmlPath = htmlExt("resume");

    if (!resumeHtmlPath) {
      throw new Error(`Resume HTML not found (tried resume.html, resume/index.html)`);
    }

    console.log(`Found resume at: ${resumeHtmlPath}`);

    console.log("Starting local server...");
    server = await createStaticServer(distDir);
    const address = server.address() as { port: number };
    const baseUrl = `http://127.0.0.1:${address.port}`;

    console.log("Launching browser...");
    browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();
    // A4 at 2x for sharp text — 794 x 1122 is ~210mm x 297mm at 96dpi
    await page.setViewport({ width: 794, height: 1122, deviceScaleFactor: 2 });

    console.log("Opening Resume page...");
    await page.goto(`${baseUrl}/resume/`, {
      waitUntil: "networkidle0",
    });

    // Remove screen-only elements before capture
    await page.evaluate(() => {
      document.querySelectorAll(".no-print").forEach((el) => el.remove());
    });

    console.log("Generating Resume PDF (ATS-friendly)...");
    await pdfPage(page, {
      path: path.join(__dirname, "..", "public", "resume.pdf"),
      format: "A4",
      printBackground: true,
      margin: { top: "12mm", right: "12mm", bottom: "12mm", left: "12mm" },
    });

    console.log("✅ Resume PDF generated: public/resume.pdf");

    await browser.close();
    browser = null;

    server.close();
    server = null;

    process.exit(0);
  } catch (error) {
    console.error("Error generating resume PDF:", error);

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
