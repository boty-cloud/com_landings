import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "logos", "Auren", "team");

// Auren brand palette
const RED = "#e2231a";
const GRAY = "#262729";

const avatars = [
  { file: "micaela.jpg", initials: "MP", bg: RED, fg: "#ffffff" },
  { file: "ayelen.jpg", initials: "AC", bg: GRAY, fg: "#ffffff" },
];

const SIZE = 600;

function svg({ initials, bg, fg }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="100%" stop-color="${bg}" stop-opacity="0.82"/>
    </linearGradient>
  </defs>
  <rect width="${SIZE}" height="${SIZE}" fill="url(#g)"/>
  <text x="50%" y="50%" dy="0.35em" text-anchor="middle"
    font-family="Verdana, Geneva, sans-serif" font-size="260" font-weight="700"
    fill="${fg}" letter-spacing="6">${initials}</text>
</svg>`;
}

for (const a of avatars) {
  const out = path.join(outDir, a.file);
  await sharp(Buffer.from(svg(a)))
    .jpeg({ quality: 90 })
    .toFile(out);
  console.log("✅ wrote", out);
}
