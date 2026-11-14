import * as puppeteer from "puppeteer";
import * as path from "node:path";
import * as fs from "node:fs";

const ROOT = path.join(__dirname, "..");
const HTML = path.join(ROOT, "public", "resume-starvo.html");
const OUT = path.join(ROOT, "public", "resume-starvo.pdf");

const main = async () => {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 794, height: 1122, deviceScaleFactor: 2 });
    await page.goto("file://" + HTML.replace(/\\/g, "/"), { waitUntil: "networkidle0" });

    // ponytail: raw CDP, page.pdf() crashes with ProtocolError on this Windows host
    const cdp = await page.createCDPSession();
    const { data } = await cdp.send("Page.printToPDF", {
      printBackground: true,
      paperWidth: 8.27,
      paperHeight: 11.69,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      transferMode: "ReturnAsBase64",
    });
    fs.writeFileSync(OUT, Buffer.from(data, "base64"));
    console.log("OK", OUT, fs.statSync(OUT).size, "bytes");
  } finally {
    await browser.close();
  }
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
