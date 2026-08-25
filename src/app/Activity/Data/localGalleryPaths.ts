import fs from 'fs';
import path from 'path';
import { normalizeCategoryFolder, getActivityFolderCandidates } from '@/lib/activityImageUtils';

export function getLocalActivityGalleryImages(categorySlug: string, activitySlug: string): string[] {
  const folder = normalizeCategoryFolder(categorySlug);
  const folderCandidates = getActivityFolderCandidates(categorySlug, activitySlug);
  const gallerySubfolders = ['detail/gallery', 'detail/gallary', 'detail/gallry', 'gallery', 'gallary', 'gallry'];

  const baseCategoryDir = path.join(process.cwd(), 'public', 'activity-images', folder);
  if (!fs.existsSync(baseCategoryDir)) {
    return [];
  }

  for (const actFolder of folderCandidates) {
    for (const sub of gallerySubfolders) {
      const galleryDir = path.join(baseCategoryDir, actFolder, ...sub.split('/'));
      if (fs.existsSync(galleryDir)) {
        const files = fs
          .readdirSync(galleryDir, { withFileTypes: true })
          .filter((dirent) => dirent.isFile())
          .map((dirent) => dirent.name)
          .filter((file) => !file.startsWith('.') && /\.(jpe?g|png|webp|svg)$/i.test(file))
          .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

        if (files.length > 0) {
          return files.map((file) => `/activity-images/${folder}/${actFolder}/${sub}/${file}`);
        }
      }
    }
  }

  return [];
}

