// tmp-pdf-elitez.mjs - Generate PDFs for ONE application from the live deployed site
import puppeteer from "puppeteer";
import * as path from "node:path";
import * as fs from "node:fs";

const slug = "elitez-indonesia-recruitment-consultant";
const base = "https://biotama.cv";
const outDir = path.join(process.cwd(), "public", "applications", slug);

// Wait for deployment: poll the resume URL until it returns 200 with the right title
async function waitForDeploy() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`${base}/applications/${slug}/resume/`, { redirect: "follow" });
      const html = await res.text();
      if (res.ok && html.includes("Technology Talent")) {
        console.log("Deploy confirmed after", i * 5, "seconds");
        return;
      }
    } catch (e) {}
    await new Promise((r) => setTimeout(r, 5000));
  }
  throw new Error("Deployment not detected after 5 minutes");
}

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  await waitForDeploy();
  fs.mkdirSync(outDir, { recursive: true });

  for (const [name, p] of [
    ["resume", `/applications/${slug}/resume/`],
    ["cover-letter", `/applications/${slug}/cover-letter/`],
  ]) {
    const page = await browser.newPage();
    await page.setViewport({ width: 794, height: 1122, deviceScaleFactor: 2 });
    await page.goto(`${base}${p}`, { waitUntil: "networkidle0", timeout: 60000 });
    await page.evaluate(() => {
      document.querySelectorAll(".no-print").forEach((el) => el.remove());
    });
    const out = path.join(outDir, `${name}.pdf`);
    await page.pdf({
      path: out,
      format: "A4",
      printBackground: true,
      margin: { top: "12mm", right: "12mm", bottom: "12mm", left: "12mm" },
    });
    console.log("OK", out, fs.statSync(out).size, "bytes");
    await page.close();
  }
} finally {
  await browser.close();
}
