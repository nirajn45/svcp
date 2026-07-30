import fs from 'fs';
import path from 'path';
import { normalizeCategoryFolder } from '@/lib/activityImageUtils';

export function getLocalActivityGalleryImages(categorySlug: string, activitySlug: string): string[] {
  const folder = normalizeCategoryFolder(categorySlug);
  const galleryDir = path.join(process.cwd(), 'public', 'activity-images', folder, activitySlug, 'detail', 'gallery');

  if (!fs.existsSync(galleryDir)) {
    return [];
  }

  const files = fs.readdirSync(galleryDir, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name)
    .filter((file) => /\.(jpe?g|png|webp|svg)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  return files.map((file) => `/activity-images/${folder}/${activitySlug}/detail/gallery/${file}`);
}
