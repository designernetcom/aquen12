import fs from "node:fs";
import { createCanvas, loadImage } from "./pdf-tools/node_modules/@napi-rs/canvas/index.js";

const assets = [
  {
    input: "tmp/pdfs/mbbr-1.png",
    output: "public/stp-mbbr-technology-reference-01.png",
    crop: { x: 0, y: 402, width: 1071, height: 703 },
  },
  {
    input: "tmp/pdfs/mbbr-2.png",
    output: "public/stp-mbbr-technology-reference-02.png",
    crop: { x: 0, y: 402, width: 1071, height: 713 },
  },
  {
    input: "tmp/pdfs/mbr-1.png",
    output: "public/stp-mbr-technology-reference-01.png",
    crop: { x: 0, y: 402, width: 1071, height: 703 },
  },
  {
    input: "tmp/pdfs/mbr-2.png",
    output: "public/stp-mbr-technology-reference-02.png",
    crop: { x: 0, y: 402, width: 1071, height: 713 },
  },
  {
    input: "tmp/pdfs/mbbr-1.png",
    output: "public/stp-mbbr-technology-hero.png",
    crop: { x: 0, y: 520, width: 635, height: 205 },
    size: { width: 1000, height: 620 },
  },
  {
    input: "tmp/pdfs/mbr-1.png",
    output: "public/stp-mbr-technology-hero.png",
    crop: { x: 0, y: 520, width: 635, height: 205 },
    size: { width: 1000, height: 620 },
  },
];

for (const asset of assets) {
  const source = await loadImage(asset.input);
  const size = asset.size ?? { width: asset.crop.width, height: asset.crop.height };
  const canvas = createCanvas(size.width, size.height);
  const context = canvas.getContext("2d");
  context.drawImage(
    source,
    asset.crop.x,
    asset.crop.y,
    asset.crop.width,
    asset.crop.height,
    0,
    0,
    size.width,
    size.height,
  );
  fs.writeFileSync(asset.output, canvas.toBuffer("image/png"));
  console.log(`${asset.output} (${size.width}x${size.height})`);
}
