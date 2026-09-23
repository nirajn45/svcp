// ─── Gallery Image Utility ─────────────────────────────────────────────────────
// SERVER-SIDE ONLY. Uses Node fs/path to discover images in public/gallery/<slug>/.
// Completely independent from activityImageUtils.ts — DO NOT import from it.
//
// Usage (Server Component or API route):
//   import { getGalleryImages } from '@/lib/gallery/galleryImageUtils';
//   const images = getGalleryImages('campus-building');
//   // returns: ['/gallery/campus-building/1.jpg', '/gallery/campus-building/2.jpg', ...]

import fs from 'fs';
import path from 'path';

const SUPPORTED_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.JPG',
  '.JPEG',
  '.PNG',
  '.WEBP',
]);

/**
 * Scan public/gallery/<slug>/ and return all image URLs as public-accessible paths.
 * Images are sorted using natural-numeric ordering (1.jpg, 2.jpg, 3.jpg, 10.jpg — not lexicographic).
 * Returns [] when the folder does not exist or contains no supported images.
 */
export function getGalleryImages(slug: string): string[] {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery', slug);

  if (!fs.existsSync(galleryDir)) {
    return [];
  }

  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(galleryDir, { withFileTypes: true });
  } catch {
    return [];
  }

  const imageFiles = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => {
      const ext = path.extname(name);
      return SUPPORTED_EXTENSIONS.has(ext) && !name.startsWith('.');
    })
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    );

  return imageFiles.map((file) => `/gallery/${slug}/${file}`);
}
