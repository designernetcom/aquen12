import fs from "node:fs";
import path from "node:path";
import * as pdfjsLib from "./pdf-tools/node_modules/pdfjs-dist/legacy/build/pdf.mjs";
import { createCanvas } from "./pdf-tools/node_modules/@napi-rs/canvas/index.js";

const outputs = [
  { input: "D:/Downloads/STP MBR TECHNOLOGY.pdf", prefix: "F:/main-aquen/tmp/pdfs/mbr" },
  { input: "D:/Downloads/Aquen STP MBBR TECHNOLOGY.pdf", prefix: "F:/main-aquen/tmp/pdfs/mbbr" },
];

fs.mkdirSync("F:/main-aquen/tmp/pdfs", { recursive: true });

for (const { input, prefix } of outputs) {
  const data = new Uint8Array(fs.readFileSync(input));
  const document = await pdfjsLib.getDocument({ data, disableWorker: true }).promise;
  console.log(`${path.basename(input)}: ${document.numPages} pages`);
  for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
    const page = await document.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1.8 });
    const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
    await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
    const output = `${prefix}-${pageNumber}.png`;
    fs.writeFileSync(output, canvas.toBuffer("image/png"));
    console.log(output);
  }
}
