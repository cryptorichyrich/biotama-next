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

    // Read all application slugs from the built output
    // Next.js 16 export uses flat .html files
    // Applications: applications/slug.html, tailored resume: applications/slug/resume.html, etc.
    const applicationsDir = path.join(distDir, "applications");
    const slugs: string[] = [];

    if (fs.existsSync(applicationsDir)) {
      const entries = fs.readdirSync(applicationsDir);
      for (const entry of entries) {
        // Match "something.html" (not resume or cover-letter subfiles)
        if (entry.endsWith(".html") && !entry.includes("/") && entry !== "index.html") {
          const slug = entry.replace(/\.html$/, "");
          slugs.push(slug);
        }
      }
    }

    if (slugs.length === 0) {
      console.log("No applications found. Skipping PDF generation.");
      process.exit(0);
    }

    console.log(`Found ${slugs.length} application(s): ${slugs.join(", ")}`);

    console.log("Starting local server...");
    server = await createStaticServer(distDir);
    const address = server.address() as { port: number };
    const baseUrl = `http://127.0.0.1:${address.port}`;

    browser = await puppeteer.launch({ headless: true });
    const publicDir = path.join(__dirname, "..", "public");

    for (const slug of slugs) {
      const page = await browser.newPage();
      await page.setViewport({ width: 794, height: 1122, deviceScaleFactor: 2 });

      // Generate Tailored Resume PDF
      const resumeUrl = `${baseUrl}/applications/${slug}/resume/`;
      console.log(`Generating resume PDF for "${slug}"...`);
      await page.goto(resumeUrl, { waitUntil: "networkidle0" });
      await page.evaluate(() => {
        document.querySelectorAll(".no-print").forEach((el) => el.remove());
      });

      const appDir = path.join(publicDir, "applications", slug);
      fs.mkdirSync(appDir, { recursive: true });

      await pdfPage(page, {
        path: path.join(appDir, "resume.pdf"),
        format: "A4",
        printBackground: true,
        margin: { top: "12mm", right: "12mm", bottom: "12mm", left: "12mm" },
      });
      console.log(`  ✅ Resume PDF: applications/${slug}/resume.pdf`);

      // Generate Cover Letter PDF
      const coverUrl = `${baseUrl}/applications/${slug}/cover-letter/`;
      console.log(`Generating cover letter PDF for "${slug}"...`);
      await page.goto(coverUrl, { waitUntil: "networkidle0" });
      await page.evaluate(() => {
        document.querySelectorAll(".no-print").forEach((el) => el.remove());
      });

      await pdfPage(page, {
        path: path.join(appDir, "cover-letter.pdf"),
        format: "A4",
        printBackground: true,
        margin: { top: "20mm", right: "20mm", bottom: "20mm", left: "20mm" },
      });
      console.log(`  ✅ Cover Letter PDF: applications/${slug}/cover-letter.pdf`);

      await page.close();
    }

    console.log("\n✅ All application PDFs generated successfully!");

    await browser.close();
    browser = null;

    server.close();
    server = null;

    process.exit(0);
  } catch (error) {
    console.error("Error generating application PDFs:", error);

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
