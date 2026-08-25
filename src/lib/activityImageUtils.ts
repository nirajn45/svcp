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
 * Centralized mapping for activity slugs whose physical directory on disk
 * differs in casing, spaces, punctuation, or naming from the activity slug.
 */
export const ACTIVITY_FOLDER_MAP: Record<string, string[]> = {
  'spontania-2026': ['Spontania 2026'],
  'inkspire-1-0': ['Inkspire 1.0'],
  'sportiva-faculty-sports-meet': [
    'sportiva-faculty-sports-meet',
    'SPORTIVA \u2013 Faculty Sports Meet',
    'SPORTIVA - Faculty Sports Meet',
  ],
  '77th-republic-day-celebration': [
    '77th  Republic Day Celebration',
    '77th Republic Day Celebration',
    '77th-republic-day-celebration',
  ],
  'lohri-celebration': ['Lohri-Celebration2026', 'lohri-celebration'],
  'christmas-day-celebration-2025': [
    'Christmas-Day-Celebration',
    'Christmas-day2025',
    'christmas-day-celebration-2025',
  ],
  'garba-night': ['garba-night'],
  'prerna-2025-teachers-day': ['Prerna2025', 'prerna-2025-teachers-day'],
  'music-workshop-2025': ['Music-workshop', 'music-workshop-2025'],
  'spontaina-youth-festival': [
    'Spontania-2025',
    'spontaina2025',
    'spontaina-youth-festival',
  ],
  'quest-for-talent-2025': ['Quest-for-talent', 'quest-for-talent-2025'],
  'basant-panchmi-2025': ['Basant-panchmi', 'basant-panchmi-2025'],
  'lohri-celebrations-2025': ['lohri-celebration2025', 'lohri-celebrations-2025'],
  'christmas-day-celebrations-2024': [
    'Christmas-day2024',
    'christmas-day-celebrations-2024',
  ],
  'zimfest-2024': ['Zimfest', 'zimfest-2024'],
  'diwali-celebration': ['diwali-celebration'],
  'world-tourism-day-2024': ['World-tourism-day', 'world-tourism-day-2024'],
  'elevate-2024': ['Elevate2024', 'elevate-2024'],
  'teachers-day-2024': ['TeacherDay2024', 'teachers-day-2024'],
  'ratri-rhythms-2024': ['Ratri-Rhythms', 'ratri-rhythms-2024'],
  'teej-celebrations-2024': ['Teej-Celebrations', 'teej-celebrations-2024'],
};

/**
 * Exact verified primary listing cover image paths.
 */
export const KNOWN_ACTIVITY_COVER_MAP: Record<string, string> = {
  // Cultural Activities
  'spontania-2026': '/activity-images/cultural-activities/Spontania 2026/listing/cover.jpg',
  'inkspire-1-0': '/activity-images/cultural-activities/Inkspire 1.0/listing/cover.jpg',
  'sportiva-faculty-sports-meet': '/activity-images/cultural-activities/sportiva-faculty-sports-meet/listing/cover.jpg',
  '77th-republic-day-celebration': '/activity-images/cultural-activities/77th  Republic Day Celebration/listing/cover.jpg',
  'lohri-celebration': '/activity-images/cultural-activities/Lohri-Celebration2026/listing/cover.jpg',
  'christmas-day-celebration-2025': '/activity-images/cultural-activities/Christmas-Day-Celebration/listing/cover.jpg',
  'garba-night': '/activity-images/cultural-activities/garba-night/listing/cover.jpg',
  'prerna-2025-teachers-day': '/activity-images/cultural-activities/Prerna2025/listing/cover.jpg',
  'music-workshop-2025': '/activity-images/cultural-activities/Music-workshop/listing/cover.jpeg',
  'spontaina-youth-festival': '/activity-images/cultural-activities/Spontania-2025/listing/cover.jpg',
  'quest-for-talent-2025': '/activity-images/cultural-activities/Quest-for-talent/listing/cover.jpg',
  'basant-panchmi-2025': '/activity-images/cultural-activities/Basant-panchmi/listing/cover.jpeg',
  'lohri-celebrations-2025': '/activity-images/cultural-activities/lohri-celebration2025/listing/cover.jpg',
  'christmas-day-celebrations-2024': '/activity-images/cultural-activities/Christmas-day2024/listing/cover.jpg',
  'zimfest-2024': '/activity-images/cultural-activities/Zimfest/listing/cover.jpg',
  'diwali-celebration': '/activity-images/cultural-activities/diwali-celebration/listing/cover.jpg',
  'world-tourism-day-2024': '/activity-images/cultural-activities/World-tourism-day/listing/cover.jpg',
  'elevate-2024': '/activity-images/cultural-activities/Elevate2024/listing/cover.jpg',
  'teachers-day-2024': '/activity-images/cultural-activities/TeacherDay2024/listing/cover.jpg',
  'ratri-rhythms-2024': '/activity-images/cultural-activities/Ratri-Rhythms/listing/cover.jpg',
  'teej-celebrations-2024': '/activity-images/cultural-activities/Teej-Celebrations/listing/cover.jpg',

  // Curricular
  'problem-solution-fit-session': '/activity-images/curricular/problem-solution-fit-session/listing/cover.jpeg',
  'design-thinking-workshop': '/activity-images/curricular/design-thinking-workshop/listing/cover.jpeg',
  'critical-thinking-workshop': '/activity-images/curricular/critical-thinking-workshop/listing/cover.jpg',
  'innovation-design-workshop': '/activity-images/curricular/innovation-design-workshop/listing/cover.jpeg',
  'effective-sales-marketing-strategies': '/activity-images/curricular/effective-sales-marketing-strategies/listing/cover.jpeg',
  'sponsored-research-proposal-workshop': '/activity-images/curricular/sponsored-research-proposal-workshop/listing/cover.jpg',
  'seed-grant-proposal-workshop': '/activity-images/curricular/seed-grant-proposal-workshop/listing/cover.jpg',

  // NSS
  'rational-use-of-medicine-campaign': '/activity-images/nss/rational-use-of-medicine-campaign/listing/cover.jpg',
  'blood-donation-camp': '/activity-images/nss/blood-donation-camp/listing/cover.jpg',
  'tree-plantation-drive': '/activity-images/nss/tree-plantation-drive/listing/cover.jpeg',
  'swachh-bharat-campaign': '/activity-images/nss/swachh-bharat-campaign/listing/cover.jpeg',
  'community-health-camp': '/activity-images/nss/community-health-camp/listing/cover.jpg',
  'rural-awareness-programme': '/activity-images/nss/rural-awareness-programme/listing/cover.jpeg',

  // NCC
  'republic-day-parade': '/activity-images/ncc/republic-day-parade/listing/cover.jpg',
  'independence-day-parade': '/activity-images/ncc/independence-day-parade/listing/cover.jpg',
  'combined-annual-training-camp': '/activity-images/ncc/combined-annual-training-camp/listing/cover.jpg',
  'adventure-camp': '/activity-images/ncc/adventure-camp/listing/cover.jpeg',
  'social-service-activities': '/activity-images/ncc/social-service-activities/listing/cover.jpg',

  // Outreach
  'innovation-outreach-schools': '/activity-images/outreach/innovation-outreach-schools/listing/cover.jpeg',
  'entrepreneurship-awareness-program': '/activity-images/outreach/entrepreneurship-awareness-program/listing/cover.jpeg',
  'health-checkup-camps': '/activity-images/outreach/health-checkup-camps/listing/cover.jpg',
  'career-guidance-programs': '/activity-images/outreach/career-guidance-programs/listing/cover.jpeg',

  // National Days
  'national-pollution-control-day': '/activity-images/national-days/national-pollution-control-day/listing/cover.jpeg',
  'world-health-day': '/activity-images/national-days/world-health-day/listing/cover.jpg',
  'international-womens-day': '/activity-images/national-days/international-womens-day/listing/cover.jpeg',
  'international-yoga-day': '/activity-images/national-days/international-yoga-day/listing/cover.jpg',
  'national-pharmacy-education-day': '/activity-images/national-days/national-pharmacy-education-day/listing/cover.jpg',
  'republic-day-celebration': '/activity-images/national-days/republic-day-celebration/listing/cover.jpg',

  // Industrial Visits
  'pharmaceutical-industry-visit': '/activity-images/industrial-visits/pharmaceutical-industry-visit/listing/cover.jpeg',
  'aicte-idea-lab-visit': '/activity-images/industrial-visits/aicte-idea-lab-visit/listing/cover.jpeg',
  'research-laboratory-visit': '/activity-images/industrial-visits/research-laboratory-visit/listing/cover.jpg',
  'incubation-centre-visit': '/activity-images/industrial-visits/incubation-centre-visit/listing/cover.jpeg',

  // Seminars
  'annual-research-conclave': '/activity-images/seminars/annual-research-conclave/listing/hero.jpg',
  'ipr-protection-workshop': '/activity-images/seminars/ipr-protection-workshop/listing/cover.jpg',
  'faculty-development-programme': '/activity-images/seminars/faculty-development-programme/listing/cover.jpg',
  'international-conference': '/activity-images/seminars/international-conference/listing/cover.jpg',
  'startup-legal-ethical-steps': '/activity-images/seminars/startup-legal-ethical-steps/listing/cover.jpg',

  // Alumni
  'alumni-association': '/activity-images/alumni/alumni-association/listing/cover.jpg',
  'alumni-meets': '/activity-images/alumni/alumni-meets/listing/cover.jpeg',
  'convocation': '/activity-images/alumni/convocation/listing/cover.jpeg',
};

/**
 * Exact verified primary detail hero image paths.
 */
export const KNOWN_ACTIVITY_HERO_MAP: Record<string, string> = {
  // Cultural Activities
  'spontania-2026': '/activity-images/cultural-activities/Spontania 2026/detail/hero.jpg',
  'inkspire-1-0': '/activity-images/cultural-activities/Inkspire 1.0/detail/hero.jpg',
  'sportiva-faculty-sports-meet': '/activity-images/cultural-activities/sportiva-faculty-sports-meet/detail/hero.jpg',
  '77th-republic-day-celebration': '/activity-images/cultural-activities/77th  Republic Day Celebration/detail/hero.jpg',
  'lohri-celebration': '/activity-images/cultural-activities/Lohri-Celebration2026/detail/hero.jpg',
  'christmas-day-celebration-2025': '/activity-images/cultural-activities/Christmas-Day-Celebration/detail/hero.jpg',
  'garba-night': '/activity-images/cultural-activities/garba-night/detail/hero.jpeg',
  'prerna-2025-teachers-day': '/activity-images/cultural-activities/Prerna2025/detail/hero.jpg',
  'music-workshop-2025': '/activity-images/cultural-activities/Music-workshop/detail/hero.jpeg',
  'spontaina-youth-festival': '/activity-images/cultural-activities/Spontania-2025/detail/hero.jpg',
  'quest-for-talent-2025': '/activity-images/cultural-activities/Quest-for-talent/detail/hero.jpg',
  'basant-panchmi-2025': '/activity-images/cultural-activities/Basant-panchmi/detail/hero.jpeg',
  'lohri-celebrations-2025': '/activity-images/cultural-activities/lohri-celebration2025/detail/hero.jpg',
  'christmas-day-celebrations-2024': '/activity-images/cultural-activities/Christmas-day2024/detail/hero.jpg',
  'zimfest-2024': '/activity-images/cultural-activities/Zimfest/detail/hero.jpg',
  'diwali-celebration': '/activity-images/cultural-activities/diwali-celebration/detail/hero.jpg',
  'world-tourism-day-2024': '/activity-images/cultural-activities/World-tourism-day/detail/hero.jpg',
  'elevate-2024': '/activity-images/cultural-activities/Elevate2024/detail/hero.jpg',
  'teachers-day-2024': '/activity-images/cultural-activities/TeacherDay2024/detail/hero.jpg',
  'ratri-rhythms-2024': '/activity-images/cultural-activities/Ratri-Rhythms/detail/hero.jpg',
  'teej-celebrations-2024': '/activity-images/cultural-activities/Teej-Celebrations/detail/hero.jpg',

  // Curricular
  'problem-solution-fit-session': '/activity-images/curricular/problem-solution-fit-session/detail/hero.jpeg',
  'design-thinking-workshop': '/activity-images/curricular/design-thinking-workshop/detail/hero.jpeg',
  'critical-thinking-workshop': '/activity-images/curricular/critical-thinking-workshop/detail/hero.jpg',
  'innovation-design-workshop': '/activity-images/curricular/innovation-design-workshop/detail/hero.jpg',
  'effective-sales-marketing-strategies': '/activity-images/curricular/effective-sales-marketing-strategies/detail/hero.jpeg',
  'sponsored-research-proposal-workshop': '/activity-images/curricular/sponsored-research-proposal-workshop/detail/hero.jpg',
  'seed-grant-proposal-workshop': '/activity-images/curricular/seed-grant-proposal-workshop/detail/gallery/hero.jpg',

  // NSS
  'rational-use-of-medicine-campaign': '/activity-images/nss/rational-use-of-medicine-campaign/detail/hero.jpg',
  'blood-donation-camp': '/activity-images/nss/blood-donation-camp/detail/hero.jpg',
  'tree-plantation-drive': '/activity-images/nss/tree-plantation-drive/detail/hero.jpeg',
  'swachh-bharat-campaign': '/activity-images/nss/swachh-bharat-campaign/detail/hero.jpeg',
  'community-health-camp': '/activity-images/nss/community-health-camp/detail/hero.jpg',
  'rural-awareness-programme': '/activity-images/nss/rural-awareness-programme/detail/hero.jpeg',

  // NCC
  'republic-day-parade': '/activity-images/ncc/republic-day-parade/detail/hero.jpg',
  'independence-day-parade': '/activity-images/ncc/independence-day-parade/detail/hero.jpg',
  'combined-annual-training-camp': '/activity-images/ncc/combined-annual-training-camp/detail/hero.jpg',
  'adventure-camp': '/activity-images/ncc/adventure-camp/detail/hero.jpeg',
  'social-service-activities': '/activity-images/ncc/social-service-activities/detail/hero.jpg',

  // Outreach
  'innovation-outreach-schools': '/activity-images/outreach/innovation-outreach-schools/detail/hero.jpeg',
  'entrepreneurship-awareness-program': '/activity-images/outreach/entrepreneurship-awareness-program/detail/hero.jpeg',
  'health-checkup-camps': '/activity-images/outreach/health-checkup-camps/detail/hero.jpg',
  'career-guidance-programs': '/activity-images/outreach/career-guidance-programs/detail/hero.jpeg',

  // National Days
  'national-pollution-control-day': '/activity-images/national-days/national-pollution-control-day/detail/hero.jpeg',
  'world-health-day': '/activity-images/national-days/world-health-day/detail/hero.jpg',
  'international-womens-day': '/activity-images/national-days/international-womens-day/detail/hero.jpeg',
  'international-yoga-day': '/activity-images/national-days/international-yoga-day/detail/hero.jpg',
  'national-pharmacy-education-day': '/activity-images/national-days/national-pharmacy-education-day/detail/hero.jpg',
  'republic-day-celebration': '/activity-images/national-days/republic-day-celebration/detail/hero.jpg',

  // Industrial Visits
  'pharmaceutical-industry-visit': '/activity-images/industrial-visits/pharmaceutical-industry-visit/detail/cover.jpeg',
  'aicte-idea-lab-visit': '/activity-images/industrial-visits/aicte-idea-lab-visit/detail/hero.jpeg',
  'research-laboratory-visit': '/activity-images/industrial-visits/research-laboratory-visit/detail/hero.jpg',
  'incubation-centre-visit': '/activity-images/industrial-visits/incubation-centre-visit/detail/hero.jpeg',

  // Seminars
  'annual-research-conclave': '/activity-images/seminars/annual-research-conclave/detail/hero.jpg',
  'ipr-protection-workshop': '/activity-images/seminars/ipr-protection-workshop/detail/hero.jpg',
  'faculty-development-programme': '/activity-images/seminars/faculty-development-programme/detail/hero.jpg',
  'international-conference': '/activity-images/seminars/international-conference/detail/hero.jpg',
  'startup-legal-ethical-steps': '/activity-images/seminars/startup-legal-ethical-steps/detail/hero.jpg',

  // Alumni
  'alumni-association': '/activity-images/alumni/alumni-association/detail/hero.jpg',
  'alumni-meets': '/activity-images/alumni/alumni-meets/detail/hero.jpeg',
  'convocation': '/activity-images/alumni/convocation/detail/hero.jpeg',
};

/**
 * Returns candidate physical folder names for an activity slug.
 */
export function getActivityFolderCandidates(
  categorySlug: string, // eslint-disable-line @typescript-eslint/no-unused-vars
  activitySlug: string
): string[] {
  const specific = ACTIVITY_FOLDER_MAP[activitySlug] ?? [];
  return Array.from(new Set([...specific, activitySlug]));
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
    `/activity-images/${folder}/_category/cover.JPG`,
    `/activity-images/${folder}/_category/cover.JPEG`,
    `/activity-images/${folder}/_category/${folder}-cover.jpg`,
    `/activity-images/${folder}/_category/${folder}-cover.jpeg`,
  ];
}

/**
 * Returns deterministic local browser paths for an Activity Listing / Card Image.
 * Primary location: public/activity-images/{category-folder}/{activity-folder}/listing/cover.jpg
 */
export function getLocalActivityListingCover(categorySlug: string, activitySlug: string): string[] {
  const primary = KNOWN_ACTIVITY_COVER_MAP[activitySlug];
  const folder = normalizeCategoryFolder(categorySlug);
  const folderCandidates = getActivityFolderCandidates(categorySlug, activitySlug);
  const extensions = ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG', 'WEBP'];
  const paths: string[] = [];

  if (primary) {
    paths.push(primary);
  }

  for (const actFolder of folderCandidates) {
    // 1. listing/cover.<ext>
    for (const ext of extensions) {
      paths.push(`/activity-images/${folder}/${actFolder}/listing/cover.${ext}`);
    }
    // 2. listing/hero.<ext>
    for (const ext of extensions) {
      paths.push(`/activity-images/${folder}/${actFolder}/listing/hero.${ext}`);
    }
    // 3. cover.<ext>
    for (const ext of extensions) {
      paths.push(`/activity-images/${folder}/${actFolder}/cover.${ext}`);
    }
    // 4. hero.<ext>
    for (const ext of extensions) {
      paths.push(`/activity-images/${folder}/${actFolder}/hero.${ext}`);
    }
    // 5. detail/hero.<ext> (fallback)
    for (const ext of extensions) {
      paths.push(`/activity-images/${folder}/${actFolder}/detail/hero.${ext}`);
    }
  }

  return Array.from(new Set(paths));
}

/**
 * Returns deterministic local browser paths for an Activity Detail Hero Image.
 * Primary location: public/activity-images/{category-folder}/{activity-folder}/detail/hero.jpg
 */
export function getLocalActivityDetailHero(categorySlug: string, activitySlug: string): string[] {
  const primary = KNOWN_ACTIVITY_HERO_MAP[activitySlug];
  const folder = normalizeCategoryFolder(categorySlug);
  const folderCandidates = getActivityFolderCandidates(categorySlug, activitySlug);
  const extensions = ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG', 'WEBP'];
  const paths: string[] = [];

  if (primary) {
    paths.push(primary);
  }

  for (const actFolder of folderCandidates) {
    // 1. detail/hero.<ext>
    for (const ext of extensions) {
      paths.push(`/activity-images/${folder}/${actFolder}/detail/hero.${ext}`);
    }
    // 2. detail/cover.<ext>
    for (const ext of extensions) {
      paths.push(`/activity-images/${folder}/${actFolder}/detail/cover.${ext}`);
    }
    // 3. listing/cover.<ext> (fallback)
    for (const ext of extensions) {
      paths.push(`/activity-images/${folder}/${actFolder}/listing/cover.${ext}`);
    }
    // 4. hero.<ext>
    for (const ext of extensions) {
      paths.push(`/activity-images/${folder}/${actFolder}/hero.${ext}`);
    }
    // 5. cover.<ext>
    for (const ext of extensions) {
      paths.push(`/activity-images/${folder}/${actFolder}/cover.${ext}`);
    }
    // 6. detail/gallery/hero.<ext> or detail/gallary/hero.<ext>
    for (const ext of extensions) {
      paths.push(`/activity-images/${folder}/${actFolder}/detail/gallery/hero.${ext}`);
      paths.push(`/activity-images/${folder}/${actFolder}/detail/gallary/hero.${ext}`);
    }
  }

  return Array.from(new Set(paths));
}

/**
 * Returns deterministic local browser paths for Activity Detail Gallery Images.
 * Primary location: public/activity-images/{category-folder}/{activity-folder}/detail/gallery/01.jpg, 02.jpg...
 */
export function getLocalActivityGalleryCandidates(
  categorySlug: string,
  activitySlug: string,
  count: number
): string[][] {
  const folder = normalizeCategoryFolder(categorySlug);
  const folderCandidates = getActivityFolderCandidates(categorySlug, activitySlug);
  const extensions = ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG', 'WEBP'];
  const galleryFolders = ['detail/gallery', 'detail/gallary', 'detail/gallry', 'gallery', 'gallary', 'gallry'];

  return Array.from({ length: Math.max(count, 4) }, (_, index) => {
    const num = String(index + 1).padStart(2, '0');
    const simpleNum = String(index + 1);
    const numVariants = [
      num, // "01"
      simpleNum, // "1"
      `${simpleNum}.`, // "1." (for filenames like "1..jpg")
      `${simpleNum}..`, // "1.." (for filenames like "1...jpg")
    ];

    const candidates: string[] = [];
    for (const actFolder of folderCandidates) {
      for (const gSub of galleryFolders) {
        for (const n of numVariants) {
          for (const ext of extensions) {
            candidates.push(`/activity-images/${folder}/${actFolder}/${gSub}/${n}.${ext}`);
          }
        }
      }
    }
    return Array.from(new Set(candidates));
  });
}

