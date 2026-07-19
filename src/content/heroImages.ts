import fs from "node:fs";
import path from "node:path";

const NUMBERED_IMAGE_RE = /^\d+\.(png|jpe?g|webp|avif)$/i;

export function getHeroImages(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "courses", slug);
  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return files
    .filter((f) => NUMBERED_IMAGE_RE.test(f))
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
    )
    .map((f) => `/courses/${slug}/${f}`);
}
