import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;

const backgroundSvg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="blue" cx="20%" cy="15%" r="60%">
      <stop offset="0%" stop-color="#2f6fff" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#2f6fff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="violet" cx="85%" cy="20%" r="55%">
      <stop offset="0%" stop-color="#8b3df0" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#8b3df0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="magenta" cx="75%" cy="95%" r="55%">
      <stop offset="0%" stop-color="#e934c5" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#e934c5" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="text" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2f6fff"/>
      <stop offset="55%" stop-color="#8b3df0"/>
      <stop offset="100%" stop-color="#e934c5"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#05060b"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#blue)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#violet)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#magenta)"/>
  <g opacity="0.05" stroke="#f5f7ff">
    ${Array.from({ length: 17 }, (_, i) => `<line x1="${i * 75}" y1="0" x2="${i * 75}" y2="${HEIGHT}"/>`).join("")}
    ${Array.from({ length: 9 }, (_, i) => `<line x1="0" y1="${i * 79}" x2="${WIDTH}" y2="${i * 79}"/>`).join("")}
  </g>
  <text x="270" y="345" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="700" letter-spacing="2" fill="#f5f7ff">ADVANTA</text>
  <text x="270" y="395" font-family="Arial, Helvetica, sans-serif" font-size="26" letter-spacing="1" fill="#9198b0">Digital experiences that move businesses forward.</text>
</svg>
`;

const markSize = 160;
const mark = await sharp(path.join(root, "public/brand/advanta-mark-512.png"))
  .resize(markSize, markSize)
  .toBuffer();

await sharp(Buffer.from(backgroundSvg))
  .composite([{ input: mark, left: 80, top: (HEIGHT - markSize) / 2 - 20 }])
  .png()
  .toFile(path.join(root, "public/og.png"));

console.log("Generated public/og.png");
