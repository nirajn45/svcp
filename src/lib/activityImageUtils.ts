export function normalizeCategoryFolder(categorySlug: string): string {
  const mapping: Record<string, string> = {
    culturalActivities: 'cultural-activities',
    CulturalActivities: 'cultural-activities',
    cultural: 'cultural-activities',
    'cultural-activities': 'cultural-activities',
    curricular: 'curricular',
    curricularActivities: 'curricular',
    Nss: 'nss',
    nss: 'nss',
    Ncc: 'ncc',
    ncc: 'ncc',
    outreach: 'outreach',
    OutreachActivities: 'outreach',
    'national-days': 'national-days',
    nationalActivities: 'national-days',
    'industrial-visits': 'industrial-visits',
    'Industrial-Visit': 'industrial-visits',
    seminars: 'seminars',
    alumni: 'alumni',
    AlumniActivities: 'alumni',
  };

  if (mapping[categorySlug]) {
    return mapping[categorySlug];
  }

  if (categorySlug.includes('-')) {
    return categorySlug.toLowerCase();
  }

  return categorySlug
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

/**
 * Returns deterministic local browser paths for a Category Cover Image.
 * Primary location: public/activity-images/{category-folder}/_category/cover.jpg
 */
export function getLocalCategoryCover(categorySlug: string): string[] {
  const folder = normalizeCategoryFolder(categorySlug);
  return [
    `/activity-images/${folder}/_category/cover.jpg`,
    `/activity-images/${folder}/_category/cover.jpeg`,
    `/activity-images/${folder}/_category/cover.png`,
    `/activity-images/${folder}/_category/cover.webp`,
    `/activity-images/${folder}/_category/${folder}-cover.jpg`,
  ];
}

/**
 * Returns deterministic local browser paths for an Activity Listing / Card Image.
 * Primary location: public/activity-images/{category-folder}/{activity-slug}/listing/cover.jpg
 */
export function getLocalActivityListingCover(categorySlug: string, activitySlug: string): string[] {
  const folder = normalizeCategoryFolder(categorySlug);
  return [
    `/activity-images/${folder}/${activitySlug}/listing/cover.jpg`,
    `/activity-images/${folder}/${activitySlug}/listing/cover.jpeg`,
    `/activity-images/${folder}/${activitySlug}/listing/cover.png`,
    `/activity-images/${folder}/${activitySlug}/listing/cover.webp`,
    `/activity-images/${folder}/${activitySlug}/cover.jpg`,
    `/activity-images/${folder}/${activitySlug}/cover.jpeg`,
  ];
}

/**
 * Returns deterministic local browser paths for an Activity Detail Hero Image.
 * Primary location: public/activity-images/{category-folder}/{activity-slug}/detail/hero.jpg
 */
export function getLocalActivityDetailHero(categorySlug: string, activitySlug: string): string[] {
  const folder = normalizeCategoryFolder(categorySlug);
  return [
    `/activity-images/${folder}/${activitySlug}/detail/hero.jpg`,
    `/activity-images/${folder}/${activitySlug}/detail/hero.jpeg`,
    `/activity-images/${folder}/${activitySlug}/detail/hero.png`,
    `/activity-images/${folder}/${activitySlug}/detail/hero.webp`,
    `/activity-images/${folder}/${activitySlug}/hero.jpg`,
    `/activity-images/${folder}/${activitySlug}/hero.jpeg`,
  ];
}

/**
 * Returns deterministic local browser paths for Activity Detail Gallery Images.
 * Primary location: public/activity-images/{category-folder}/{activity-slug}/detail/gallery/01.jpg, 02.jpg...
 */
export function getLocalActivityGalleryCandidates(categorySlug: string, activitySlug: string, count: number): string[][] {
  const folder = normalizeCategoryFolder(categorySlug);
  return Array.from({ length: Math.max(count, 4) }, (_, index) => {
    const num = String(index + 1).padStart(2, '0');
    return [
      `/activity-images/${folder}/${activitySlug}/detail/gallery/${num}.jpg`,
      `/activity-images/${folder}/${activitySlug}/detail/gallery/${num}.png`,
      `/activity-images/${folder}/${activitySlug}/detail/gallery/${num}.jpeg`,
      `/activity-images/${folder}/${activitySlug}/detail/gallery/${num}.webp`,
    ];
  });
}
