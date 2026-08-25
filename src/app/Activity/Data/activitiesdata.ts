// ─── Activities Module — Central Data Store ──────────────────────────────────
// All activity data lives here. Add new activities by appending to the
// relevant array — no changes to components or pages required.
//
// IMAGE GUIDE:
//   • Unsplash (current fallback): img('unsplash-photo-id')
//   • Local photo (drop file in public/activity-images/):
//       localImg('cultural/spontaina-2024.jpg')
//   • See public/activity-images/README.md for full instructions.

import { CategoryMeta, Activity, StatItem } from './types';

// ─── Image helpers ────────────────────────────────────────────────────────────
/** Safe local fallback photo */
const img = (_id: string, _w = 800) => '';

/** Local photo stored in public/activity-images/{path} */
const localImg = (path: string) => `/activity-images/${path}`;  // eslint-disable-line @typescript-eslint/no-unused-vars

// ─── Gallery helpers ──────────────────────────────────────────────────────────
const gallery = (...ids: string[]) => ids.map((id) => img(id));
/** Local gallery — pass relative paths inside public/activity-images/ */
const localGallery = (...paths: string[]) => paths.map(localImg);  // eslint-disable-line @typescript-eslint/no-unused-vars


// ─────────────────────────────────────────────────────────────────────────────
// 1. CULTURAL ACTIVITIES
// ─────────────────────────────────────────────────────────────────────────────
const culturalActivities: Activity[] = [
  // ── 1. Spontania 2026 ──────────────────────────────────────────────────────
  {
    id: 'ca-026',
    slug: 'spontania-2026',
    title: 'Spontania 2026',
    shortDescription:
      `SVCP's flagship annual cultural festival celebrating student talent in dance, music, drama, and fine arts.`,
    description:
      'Spontania 2026 is the annual cultural extravaganza of Swami Vivekanand College of Pharmacy, bringing together students from across departments to showcase their artistic brilliance. From classical dance recitals and live musical performances to theatre acts and painting exhibitions, the two-day festival transforms the campus into a vibrant celebration of creativity and community spirit.',
    date: '2026-04-17',
    year: 2026,
    location: 'SVCP Main Auditorium & Open-Air Stage',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1514525253161-7a46d19cd819'),
    gallery: gallery(
      '1493225457124-a3eb161ffa5f',
      '1516450360452-9312f5e86fc7',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Provide a platform for students to express artistic talent',
      'Foster inter-department bonding and team spirit',
      'Celebrate cultural diversity and creative expression',
    ],
    highlights: [
      'Two-day cultural celebration across music, dance, and drama',
      'Art and creative exhibitions',
      'Inter-department cultural performances',
    ],
    tags: ['festival', 'culture', 'talent', 'annual', 'spontania', '2026'],
  },
  // ── 2. Inkspire 1.0 ────────────────────────────────────────────────────────
  {
    id: 'ca-027',
    slug: 'inkspire-1-0',
    title: 'Inkspire 1.0',
    shortDescription:
      'A creative literary and arts festival providing a platform for student writers, poets, and artists.',
    description:
      'Inkspire 1.0 is a two-day literary and creative arts festival organised at Swami Vivekanand College of Pharmacy. The festival provides students with an engaging platform to express themselves through poetry, creative writing, storytelling, and visual arts, encouraging literary appreciation and creative thinking across the campus.',
    date: '2026-02-26',
    year: 2026,
    location: 'SVCP Campus',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1516450360452-9312f5e86fc7'),
    gallery: gallery(
      '1514525253161-7a46d19cd819',
      '1493225457124-a3eb161ffa5f',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Promote literature, creative writing, and artistic expression',
      'Encourage students to share original poetry and stories',
      'Foster cultural appreciation and literary skills',
    ],
    highlights: [
      'Creative writing and poetry sessions',
      'Student art and literary displays',
      'Interactive workshops and performances',
    ],
    tags: ['inkspire', 'literary', 'arts', 'creative', 'writing', '2026'],
  },
  // ── 3. SPORTIVA – Faculty Sports Meet ─────────────────────────────────────
  {
    id: 'ca-028',
    slug: 'sportiva-faculty-sports-meet',
    title: 'SPORTIVA – Faculty Sports Meet',
    shortDescription:
      'Annual faculty sports meet promoting wellness, teamwork, and healthy recreation among staff.',
    description:
      'SPORTIVA is the annual Faculty Sports Meet of Swami Vivekanand College of Pharmacy, organised to promote physical fitness, wellness, and camaraderie among teaching and non-teaching faculty members. The event features friendly athletic and recreational competitions, fostering team spirit and an active lifestyle.',
    date: '2026-02-07',
    year: 2026,
    location: 'SVCP Sports Ground',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1514525253161-7a46d19cd819'),
    gallery: gallery(
      '1516450360452-9312f5e86fc7',
      '1493225457124-a3eb161ffa5f',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Promote physical fitness and wellness among faculty members',
      'Strengthen teamwork and mutual support across departments',
      'Provide an enjoyable platform for recreational sports',
    ],
    highlights: [
      'Track and field and recreational games',
      'Active participation across teaching and staff departments',
      'Prize and recognition distribution',
    ],
    tags: ['sportiva', 'faculty', 'sports meet', 'wellness', '2026'],
  },
  // ── 4. 77th Republic Day Celebration ──────────────────────────────────────
  {
    id: 'ca-029',
    slug: '77th-republic-day-celebration',
    title: '77th Republic Day Celebration',
    shortDescription:
      'Commemoration of the 77th Republic Day with ceremonial flag hoisting and patriotic cultural presentations.',
    description:
      "Swami Vivekanand College of Pharmacy celebrated the 77th Republic Day with patriotic fervour. The event featured ceremonial flag hoisting, national anthem recital, and student cultural performances celebrating India's constitutional heritage, unity in diversity, and democratic values.",
    date: '2026-01-26',
    year: 2026,
    location: 'SVCP College Grounds',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1532375810709-75b1da00537c'),
    gallery: gallery(
      '1604328698692-f76ea9498e76',
      '1486325212027-8081e485255e',
      '1569098644584-210ef9e3c2f3',
      '1514525253161-7a46d19cd819'
    ),
    objectives: [
      'Commemorate the adoption of the Constitution of India',
      'Instil patriotic values and civic awareness in students',
      'Celebrate the unity and diversity of the nation',
    ],
    highlights: [
      'Ceremonial flag hoisting ceremony',
      'Patriotic cultural songs and recitations',
      'Address on constitutional values and citizenship',
    ],
    tags: ['republic day', 'national', 'patriotism', '2026'],
  },
  // ── 5. Lohri Celebration ──────────────────────────────────────────────────
  {
    id: 'ca-005',
    slug: 'lohri-celebration',
    title: 'Lohri Celebration',
    shortDescription:
      'Harvest festival celebrated with traditional bonfire, folk music, bhangra, and festive treats.',
    description:
      'Lohri, the vibrant harvest festival of Punjab, is celebrated at SVCP with a traditional bonfire, energetic bhangra and gidda performances, and the sharing of traditional treats like rewri, peanuts, and popcorn. The celebration brings the cultural spirit of the region alive on campus and fosters warmth and togetherness among students and faculty.',
    date: '2026-01-13',
    year: 2026,
    location: 'SVCP Campus Grounds',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1574126054271-0d4b3a8a5745'),
    gallery: gallery(
      '1516450360452-9312f5e86fc7',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344',
      '1493225457124-a3eb161ffa5f'
    ),
    objectives: [
      'Celebrate the rich harvest tradition of Punjab',
      'Promote folk dance and traditional performing arts',
      'Strengthen community spirit among students and faculty',
    ],
    highlights: [
      'Traditional bonfire lighting ceremony',
      'Bhangra and Gidda folk performances',
      'Distribution of traditional festive sweets',
    ],
    tags: ['lohri', 'punjab', 'folk', 'bonfire', 'harvest', '2026'],
  },
  // ── 6. Christmas Day Celebration ──────────────────────────────────────────
  {
    id: 'ca-031',
    slug: 'christmas-day-celebration-2025',
    title: 'Christmas Day Celebration',
    shortDescription:
      'Festive Christmas gathering celebrating joy, goodwill, and multicultural harmony on campus.',
    description:
      'Swami Vivekanand College of Pharmacy observed Christmas Day with festive warmth and cheer. Students and faculty participated in carol singing, cultural presentations, and friendly exchanges, fostering an inclusive environment that honours diverse traditions and shared values of compassion.',
    date: '2025-12-25',
    year: 2025,
    location: 'SVCP Campus',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1514525253161-7a46d19cd819'),
    gallery: gallery(
      '1516450360452-9312f5e86fc7',
      '1493225457124-a3eb161ffa5f',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Celebrate the spirit of peace, harmony, and togetherness',
      'Encourage appreciation of diverse cultural festivities',
      'Promote community bonding among students and staff',
    ],
    highlights: [
      'Carol singing and musical performances',
      'Festive campus decorations',
      'Cultural exchange and community gathering',
    ],
    tags: ['christmas', 'festival', 'celebration', 'harmony', '2025'],
  },
  // ── 7. Garba Night ────────────────────────────────────────────────────────
  {
    id: 'ca-008',
    slug: 'garba-night',
    title: 'Garba Night',
    shortDescription:
      'Vibrant Navratri Garba evening featuring traditional attire, rhythmic music, and dandiya dance.',
    description:
      'Garba Night at SVCP is a joyful celebration of Navratri. Students and staff dress in colourful traditional attire to celebrate the rhythm and grace of Garba and Dandiya folk dances. The lively evening brings the campus together in an energetic cultural celebration of folk arts and community.',
    date: '2025-09-27',
    year: 2025,
    location: 'SVCP Open-Air Stage',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1573307023826-0ba8c5f96d12'),
    gallery: gallery(
      '1612872087720-bb876e2e67d1',
      '1493225457124-a3eb161ffa5f',
      '1516450360452-9312f5e86fc7',
      '1578662996442-48f60103fc96'
    ),
    objectives: [
      'Celebrate the traditional folk dances of Navratri',
      'Encourage cultural participation in traditional arts',
      'Foster joy and campus camaraderie through dance',
    ],
    highlights: [
      'Traditional Garba and Dandiya circles',
      'Festive traditional attire showcase',
      'Rhythmic folk music and group dancing',
    ],
    tags: ['garba', 'navratri', 'dance', 'tradition', '2025'],
  },
  // ── 8. Prerna 2025 (Teachers Day) ─────────────────────────────────────────
  {
    id: 'ca-033',
    slug: 'prerna-2025-teachers-day',
    title: 'Prerna 2025 (Teachers Day)',
    shortDescription:
      'Special Teachers Day celebration honouring the guidance, dedication, and inspiration of educators.',
    description:
      "Prerna 2025 is SVCP's Teachers Day celebration dedicated to expressing gratitude to the faculty. Organised by students, the programme features cultural tributes, speeches, and presentations acknowledging the mentorship and guidance of teachers in shaping future healthcare professionals.",
    date: '2025-09-05',
    year: 2025,
    location: 'SVCP Auditorium',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1516450360452-9312f5e86fc7'),
    gallery: gallery(
      '1514525253161-7a46d19cd819',
      '1493225457124-a3eb161ffa5f',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Express gratitude to faculty for academic and personal mentorship',
      'Strengthen teacher-student relationships on campus',
      'Celebrate the noble role of educators in society',
    ],
    highlights: [
      'Student cultural tributes and musical items',
      'Felicitation and appreciation of teachers',
      'Interactive student-faculty sessions',
    ],
    tags: ['teachers day', 'prerna', 'faculty', 'tribute', '2025'],
  },
  // ── 9. Music Workshop ─────────────────────────────────────────────────────
  {
    id: 'ca-034',
    slug: 'music-workshop-2025',
    title: 'Music Workshop',
    shortDescription:
      'An interactive music workshop exploring vocal training, instrumental techniques, and musical expression.',
    description:
      'The Music Workshop at SVCP provided students with an enriching opportunity to explore vocal modulation, rhythm, and instrumental music. Conducted in a supportive learning environment, the workshop enabled students to hone their musical talents and discover the expressive and stress-relieving power of music.',
    date: '2025-02-25',
    year: 2025,
    location: 'SVCP Seminar Hall',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1478720568477-152d9b92543f'),
    gallery: gallery(
      '1493225457124-a3eb161ffa5f',
      '1516450360452-9312f5e86fc7',
      '1511632765486-142679e5e344',
      '1514525253161-7a46d19cd819'
    ),
    objectives: [
      'Develop foundational vocal and instrumental skills',
      'Encourage musical expression as a creative outlet',
      'Promote participation in college cultural events',
    ],
    highlights: [
      'Vocal and instrumental practice sessions',
      'Rhythm and pitch training exercises',
      'Student jam and performance segment',
    ],
    tags: ['music', 'workshop', 'vocals', 'instruments', '2025'],
  },
  // ── 10. Spontania ─────────────────────────────────────────────────────────
  {
    id: 'ca-001',
    slug: 'spontaina-youth-festival',
    title: 'Spontania',
    shortDescription:
      `SVCP's flagship annual cultural extravaganza with multi-department competitions in dance, drama, and music.`,
    description:
      'Spontania 2025 brought the SVCP campus alive with two days of dynamic cultural events. Students from various departments showcased their talents across music, dance, theatre, and visual arts, fostering healthy competition, creative collaboration, and campus-wide enthusiasm.',
    date: '2025-04-11',
    year: 2025,
    location: 'SVCP Main Auditorium & Open-Air Stage',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1514525253161-7a46d19cd819'),
    gallery: gallery(
      '1493225457124-a3eb161ffa5f',
      '1516450360452-9312f5e86fc7',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Showcase student talents in performing and fine arts',
      'Encourage inter-departmental collaboration and spirit',
      'Celebrate the cultural richness of the student body',
    ],
    highlights: [
      'Multi-category cultural competitions',
      'Live dance and musical stage performances',
      'Fine arts and photography exhibition',
    ],
    tags: ['festival', 'culture', 'talent', 'annual', 'spontania', '2025'],
  },
  // ── 11. Quest for Talent 2025 ────────────────────────────────────────────
  {
    id: 'ca-035',
    slug: 'quest-for-talent-2025',
    title: 'Quest for Talent 2025',
    shortDescription:
      'Talent competition encouraging students to discover and showcase abilities in singing, dance, and drama.',
    description:
      'Quest for Talent 2025 provided an inclusive platform for SVCP students to present their unique talents. From solo singing and group dance to dramatic skits and poetry recitation, the event encouraged creative confidence and recognised budding artistic performers.',
    date: '2025-02-14',
    year: 2025,
    location: 'SVCP Auditorium',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1516450360452-9312f5e86fc7'),
    gallery: gallery(
      '1493225457124-a3eb161ffa5f',
      '1511632765486-142679e5e344',
      '1578662996442-48f60103fc96',
      '1514525253161-7a46d19cd819'
    ),
    objectives: [
      'Discover and nurture emerging artistic talent',
      'Provide stage exposure to boost student confidence',
      'Promote healthy cultural competition across years',
    ],
    highlights: [
      'Solo and group talent rounds',
      'Diverse performances in singing, dance, and arts',
      'Constructive feedback and recognition',
    ],
    tags: ['talent', 'competition', 'singing', 'dance', '2025'],
  },
  // ── 12. Basant Panchmi ────────────────────────────────────────────────────
  {
    id: 'ca-036',
    slug: 'basant-panchmi-2025',
    title: 'Basant Panchmi',
    shortDescription:
      'Celebration marking the arrival of spring with Saraswati Puja and traditional cultural activities.',
    description:
      'Basant Panchmi was celebrated at SVCP to welcome the spring season and seek the blessings of Goddess Saraswati for knowledge and wisdom. Students and staff participated in traditional rituals, yellow-themed celebrations, and devotional cultural songs.',
    date: '2025-02-02',
    year: 2025,
    location: 'SVCP Campus',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1514525253161-7a46d19cd819'),
    gallery: gallery(
      '1516450360452-9312f5e86fc7',
      '1493225457124-a3eb161ffa5f',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Celebrate traditional Indian seasonal and cultural festivities',
      'Promote cultural values and reverence for education',
      'Encourage community participation and unity',
    ],
    highlights: [
      'Saraswati Puja and prayer ceremony',
      'Traditional attire and festive celebration',
      'Folk songs and cultural recitations',
    ],
    tags: ['basant panchmi', 'spring', 'festival', 'tradition', '2025'],
  },
  // ── 13. Lohri Celebrations ────────────────────────────────────────────────
  {
    id: 'ca-005b',
    slug: 'lohri-celebrations-2025',
    title: 'Lohri Celebrations',
    shortDescription:
      'Harvest festival celebrated with traditional bonfire, folk songs, bhangra, and winter delicacies.',
    description:
      'The 2025 Lohri Celebrations at SVCP brought the warmth of Punjabi folk traditions to the campus grounds. Students and faculty gathered around the sacred bonfire to celebrate the winter harvest season with energetic bhangra, gidda, and festive delicacies.',
    date: '2025-01-13',
    year: 2025,
    location: 'SVCP Campus Grounds',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1574126054271-0d4b3a8a5745'),
    gallery: gallery(
      '1516450360452-9312f5e86fc7',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344',
      '1493225457124-a3eb161ffa5f'
    ),
    objectives: [
      'Uphold the rich regional harvest traditions of Punjab',
      'Encourage student engagement in folk performing arts',
      'Foster warmth and community bonding',
    ],
    highlights: [
      'Traditional bonfire lighting and offerings',
      'Student folk dance performances',
      'Sharing of traditional Lohri treats',
    ],
    tags: ['lohri', 'punjab', 'folk', 'bonfire', 'harvest', '2025'],
  },
  // ── 14. Christmas Day Celebrations ────────────────────────────────────────
  {
    id: 'ca-037',
    slug: 'christmas-day-celebrations-2024',
    title: 'Christmas Day Celebrations',
    shortDescription:
      'Campus Christmas celebrations spreading goodwill, festive joy, and cultural inclusivity.',
    description:
      'SVCP commemorated Christmas Day 2024 with a warm cultural programme bringing students together to celebrate the spirit of joy and generosity. The event featured carol singing, seasonal displays, and community celebration.',
    date: '2024-12-25',
    year: 2024,
    location: 'SVCP Campus',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1514525253161-7a46d19cd819'),
    gallery: gallery(
      '1516450360452-9312f5e86fc7',
      '1493225457124-a3eb161ffa5f',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Promote mutual respect and cultural harmony',
      'Celebrate the festive season with goodwill and joy',
      'Encourage creative participation in campus events',
    ],
    highlights: [
      'Festive musical presentations',
      'Campus seasonal decorations',
      'Community celebration',
    ],
    tags: ['christmas', 'festival', 'celebration', '2024'],
  },
  // ── 15. Zimfest ───────────────────────────────────────────────────────────
  {
    id: 'ca-038',
    slug: 'zimfest-2024',
    title: 'Zimfest',
    shortDescription:
      'Cultural celebration showcasing Zimbabwean heritage and fostering international diversity at SVCP.',
    description:
      'Zimfest is an international cultural day at SVCP celebrating the heritage, arts, and traditions of Zimbabwe. The event features traditional music, dance presentations, and cultural displays, highlighting the vibrant global diversity and welcoming environment of the college.',
    date: '2024-11-23',
    year: 2024,
    location: 'SVCP Campus',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1514525253161-7a46d19cd819'),
    gallery: gallery(
      '1493225457124-a3eb161ffa5f',
      '1516450360452-9312f5e86fc7',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Celebrate Zimbabwean culture and heritage',
      'Foster cross-cultural understanding and friendships',
      'Enhance global awareness among the student community',
    ],
    highlights: [
      'Traditional music and dance performances',
      'Cultural displays and heritage exchange',
      'Cross-cultural interaction among Indian and international students',
    ],
    tags: ['zimfest', 'zimbabwe', 'international', 'culture', '2024'],
  },
  // ── 16. Diwali Celebration ────────────────────────────────────────────────
  {
    id: 'ca-003',
    slug: 'diwali-celebration',
    title: 'Diwali Celebration',
    shortDescription:
      'Festival of lights celebrated with lamp-lighting, rangoli, sweets, and cultural performances.',
    description:
      'The Diwali celebration at SVCP is a festive evening filled with the warmth of diyas, vibrant rangoli designs, and festive sweets. Students decorate the campus with traditional motifs, perform cultural dances, and participate in a ceremonial lamp-lighting, celebrating unity and light over darkness.',
    date: '2024-10-29',
    year: 2024,
    location: 'SVCP Campus Courtyard',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1574117024526-b82cba0d0085'),
    gallery: gallery(
      '1509391366-6f86f74b0bc5',
      '1514525253161-7a46d19cd819',
      '1578662996442-48f60103fc96',
      '1516450360452-9312f5e86fc7'
    ),
    objectives: [
      'Celebrate the festival of lights with joy and harmony',
      'Showcase traditional rangoli and decorative art forms',
      'Promote cultural traditions and community spirit',
    ],
    highlights: [
      'Campus diya lighting and rangoli displays',
      'Cultural dance and musical performances',
      'Festive greetings and sweets distribution',
    ],
    tags: ['diwali', 'festival', 'lights', 'celebration', '2024'],
  },
  // ── 17. World Tourism Day ─────────────────────────────────────────────────
  {
    id: 'ca-039',
    slug: 'world-tourism-day-2024',
    title: 'World Tourism Day',
    shortDescription:
      'Awareness event highlighting the cultural, educational, and economic significance of travel and heritage.',
    description:
      'SVCP observed World Tourism Day to broaden student perspectives on the cultural richness, geographical diversity, and historical heritage of India and the world. Activities encouraged students to appreciate cultural heritage and sustainable tourism.',
    date: '2024-09-27',
    year: 2024,
    location: 'SVCP Campus',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1514525253161-7a46d19cd819'),
    gallery: gallery(
      '1516450360452-9312f5e86fc7',
      '1493225457124-a3eb161ffa5f',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Raise awareness on the cultural and educational value of tourism',
      'Promote understanding of diverse regional and global heritage',
      'Encourage responsible and sustainable travel practices',
    ],
    highlights: [
      'Heritage and tourism presentations',
      'Student cultural discussions',
      'Awareness on historical conservation',
    ],
    tags: ['world tourism day', 'tourism', 'culture', 'heritage', '2024'],
  },
  // ── 18. Elevate 2024 ──────────────────────────────────────────────────────
  {
    id: 'ca-040',
    slug: 'elevate-2024',
    title: 'Elevate 2024',
    shortDescription:
      'A multi-day student festival featuring creative, cultural, and competitive events.',
    description:
      'Elevate 2024 was a vibrant three-day student fest at Swami Vivekanand College of Pharmacy designed to inspire creativity, team collaboration, and artistic expression. Students participated in a series of engaging cultural, creative, and performance events across departments.',
    date: '2024-09-11',
    year: 2024,
    location: 'SVCP Campus',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1514525253161-7a46d19cd819'),
    gallery: gallery(
      '1493225457124-a3eb161ffa5f',
      '1516450360452-9312f5e86fc7',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Provide a platform for multifaceted student creativity',
      'Encourage collaboration and inter-department teamwork',
      'Enhance campus cultural engagement',
    ],
    highlights: [
      'Three-day student festival schedule',
      'Cultural and artistic competitions',
      'Interactive student activities',
    ],
    tags: ['elevate', 'festival', 'culture', 'competition', '2024'],
  },
  // ── 19. Teachers Day ──────────────────────────────────────────────────────
  {
    id: 'ca-041',
    slug: 'teachers-day-2024',
    title: 'Teachers Day',
    shortDescription:
      'Celebration honouring the dedicated faculty of SVCP with student cultural tributes.',
    description:
      'SVCP celebrated Teachers Day 2024 to honour the guidance and commitment of the teaching faculty. Students organized heartfelt cultural performances, speeches, and presentations to express their appreciation for the educators shaping their professional journey.',
    date: '2024-09-05',
    year: 2024,
    location: 'SVCP Auditorium',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1516450360452-9312f5e86fc7'),
    gallery: gallery(
      '1514525253161-7a46d19cd819',
      '1493225457124-a3eb161ffa5f',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Honour and express gratitude to faculty members',
      'Celebrate the essential role of mentors in student life',
      'Strengthen teacher-student rapport on campus',
    ],
    highlights: [
      'Student cultural performances and tributes',
      'Felicitation of faculty members',
      'Expressions of student appreciation',
    ],
    tags: ['teachers day', 'faculty', 'tribute', 'celebration', '2024'],
  },
  // ── 20. Ratri Rhythms ─────────────────────────────────────────────────────
  {
    id: 'ca-042',
    slug: 'ratri-rhythms-2024',
    title: 'Ratri Rhythms',
    shortDescription:
      'An evening of cultural music, dance, and performing arts celebrating campus vibrancy.',
    description:
      'Ratri Rhythms was an energetic evening cultural celebration at SVCP. The event brought students and faculty together for an evening filled with musical acts, rhythmic dance performances, and creative stage presentations celebrating youth and artistic spirit.',
    date: '2024-08-31',
    year: 2024,
    location: 'SVCP Open-Air Stage',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1514525253161-7a46d19cd819'),
    gallery: gallery(
      '1516450360452-9312f5e86fc7',
      '1493225457124-a3eb161ffa5f',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Provide a platform for evening performing arts',
      'Foster student participation in music and dance',
      'Build campus camaraderie through cultural entertainment',
    ],
    highlights: [
      'Live musical and instrumental performances',
      'Group and solo dance acts',
      'Vibrant open-air campus evening',
    ],
    tags: ['ratri rhythms', 'music', 'dance', 'evening', '2024'],
  },
  // ── 21. Teej Celebrations ─────────────────────────────────────────────────
  {
    id: 'ca-043',
    slug: 'teej-celebrations-2024',
    title: 'Teej Celebrations',
    shortDescription:
      'Traditional Teej festival celebrated with folk songs, traditional attire, and cultural festivities.',
    description:
      'SVCP celebrated the traditional festival of Teej with great enthusiasm. Students and staff donned traditional attire to celebrate the monsoon festival with folk songs, traditional swings, gidda performances, and festive delicacies, honouring the rich cultural heritage of the region.',
    date: '2024-08-09',
    year: 2024,
    location: 'SVCP Campus',
    category: 'Cultural Activities',
    categorySlug: 'culturalActivities',
    image: img('1514525253161-7a46d19cd819'),
    gallery: gallery(
      '1516450360452-9312f5e86fc7',
      '1493225457124-a3eb161ffa5f',
      '1578662996442-48f60103fc96',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Celebrate the traditional monsoon festival of Teej',
      'Promote regional folk traditions, attire, and music',
      'Strengthen cultural pride and togetherness',
    ],
    highlights: [
      'Traditional attire and cultural dress showcase',
      'Folk songs and Gidda performances',
      'Traditional festive swings and delicacies',
    ],
    tags: ['teej', 'festival', 'tradition', 'punjab', '2024'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. CURRICULAR & CO-CURRICULAR ACTIVITIES
// ─────────────────────────────────────────────────────────────────────────────
const curricularActivities: Activity[] = [
  {
    id: 'cc-001',
    slug: 'problem-solution-fit-session',
    title: 'Session on Achieving Problem–Solution Fit',
    shortDescription:
      'Expert-led session helping students identify real-world problems and craft validated solutions.',
    description:
      'This expert-led interactive session guided students through the concept of Problem–Solution Fit — a critical step in the startup and innovation journey. Participants learned frameworks for identifying genuine pain points, mapping user journeys, and validating whether a proposed solution truly addresses the identified problem. Real pharmaceutical and healthcare case studies were used to ground the concepts in the context most relevant to SVCP students.',
    date: '2024-10-12',
    year: 2024,
    location: 'SVCP Seminar Hall',
    category: 'Curricular & Co-curricular Activities',
    categorySlug: 'curricular',
    image: img('1503428593586-e225b39bddfe'),
    gallery: gallery(
      '1540575467063-178a50c2df87',
      '1475721027785-f74eccf877e2',
      '1543269664-56d93c1b41a6',
      '1517457373958-b7bdd4587205'
    ),
    objectives: [
      'Teach students to identify genuine, well-defined problems',
      'Guide participants in crafting and validating solutions',
      'Introduce lean startup methodology to pharmacy students',
      'Encourage entrepreneurial thinking within healthcare',
    ],
    highlights: [
      '85 students participated',
      'Case studies from pharmaceutical startups',
      'Group problem-mapping exercises',
      'Mentorship session with industry expert',
    ],
    tags: ['problem-solution', 'startup', 'innovation', 'workshop'],
  },
  {
    id: 'cc-002',
    slug: 'design-thinking-workshop',
    title: 'Workshop on Design Thinking',
    shortDescription:
      'A hands-on workshop applying the 5-stage Design Thinking framework to healthcare challenges.',
    description:
      "This immersive workshop introduced students to Stanford's 5-stage Design Thinking methodology: Empathise, Define, Ideate, Prototype, and Test. Students worked in cross-functional teams to tackle real healthcare delivery challenges, developing empathy maps, persona cards, and physical low-fidelity prototypes. The session demonstrated how human-centred design can transform pharmacy practice and healthcare service delivery.",
    date: '2024-11-05',
    year: 2024,
    location: 'SVCP Innovation Lab',
    category: 'Curricular & Co-curricular Activities',
    categorySlug: 'curricular',
    image: img('1543269664-56d93c1b41a6'),
    gallery: gallery(
      '1475721027785-f74eccf877e2',
      '1503428593586-e225b39bddfe',
      '1540575467063-178a50c2df87',
      '1524178232363-1fb2b075b655'
    ),
    objectives: [
      'Teach the five stages of the Design Thinking framework',
      'Develop empathy-driven problem-solving skills',
      'Build prototyping and rapid testing capabilities',
      'Apply design thinking to pharmacy and healthcare scenarios',
    ],
    highlights: [
      '10 multidisciplinary teams completed prototype challenges',
      'Empathy interviews conducted with real patients',
      'Physical prototype showcase and critique session',
      'Best Innovation Award for patient-centric solution',
    ],
    tags: ['design thinking', 'innovation', 'prototype', 'healthcare'],
  },
  {
    id: 'cc-003',
    slug: 'critical-thinking-workshop',
    title: 'Critical Thinking Workshop',
    shortDescription:
      'Workshop sharpening analytical reasoning, evidence evaluation, and decision-making skills.',
    description:
      'The Critical Thinking Workshop at SVCP equipped students with structured frameworks for reasoning clearly and evaluating evidence in professional and academic contexts. Participants engaged in case analysis, logical fallacy identification, Socratic questioning exercises, and scenario-based decision-making challenges grounded in pharmaceutical ethics. The workshop complemented academic training with vital cognitive skills for clinical practice.',
    date: '2024-09-20',
    year: 2024,
    location: 'SVCP Seminar Hall',
    category: 'Curricular & Co-curricular Activities',
    categorySlug: 'curricular',
    image: img('1475721027785-f74eccf877e2'),
    gallery: gallery(
      '1543269664-56d93c1b41a6',
      '1503428593586-e225b39bddfe',
      '1524178232363-1fb2b075b655',
      '1517457373958-b7bdd4587205'
    ),
    objectives: [
      'Develop structured analytical reasoning capabilities',
      'Teach evidence-based decision making in healthcare',
      'Identify and avoid logical fallacies in clinical arguments',
      'Strengthen professional communication skills',
    ],
    highlights: [
      'Case studies from drug approval and clinical trial decisions',
      'Debates on pharmaceutical ethics and policy',
      'Frameworks: SCAMPER, Six Thinking Hats, Socratic Method',
      'Certificate of Participation awarded to all attendees',
    ],
    tags: ['critical thinking', 'reasoning', 'decision making', 'pharmacy'],
  },
  {
    id: 'cc-004',
    slug: 'innovation-design-workshop',
    title: 'Innovation Design Workshop',
    shortDescription:
      'Collaborative workshop on turning ideas into viable innovations for the pharmaceutical sector.',
    description:
      'The Innovation Design Workshop was a two-day intensive that guided students from raw ideas to structured innovation proposals. Working with mentors from industry and academia, student teams used innovation canvases, business model frameworks, and creative ideation tools to design pharmaceutical solutions with real-world market viability. The workshop concluded with a pitch competition judged by a panel of entrepreneurs and academics.',
    date: '2025-01-18',
    year: 2025,
    location: 'SVCP Conference Hall',
    category: 'Curricular & Co-curricular Activities',
    categorySlug: 'curricular',
    image: img('1524178232363-1fb2b075b655'),
    gallery: gallery(
      '1503428593586-e225b39bddfe',
      '1475721027785-f74eccf877e2',
      '1540575467063-178a50c2df87',
      '1543269664-56d93c1b41a6'
    ),
    objectives: [
      'Translate creative ideas into structured innovation proposals',
      'Build skills in business model design and market analysis',
      'Introduce intellectual property considerations for innovations',
      'Develop pitch presentation capabilities',
    ],
    highlights: [
      '15 student teams developed pharmaceutical innovations',
      'Mentored by 5 industry professionals',
      'Business Model Canvas and Lean Canvas used',
      'Top 3 teams received seed grant guidance',
    ],
    tags: ['innovation', 'design', 'entrepreneurship', 'pharmacy'],
  },
  {
    id: 'cc-005',
    slug: 'effective-sales-marketing-strategies',
    title: 'Effective Sales & Marketing Strategies',
    shortDescription:
      'Pharmaceutical marketing workshop covering product positioning, sales techniques, and MR skills.',
    description:
      "This industry-oriented workshop prepared students for careers in pharmaceutical sales and marketing. Topics covered included product positioning and detailing, medical representative (MR) skills, key account management, digital marketing for pharma, and regulatory constraints on pharmaceutical promotion. Guest speakers from leading pharmaceutical companies shared real-world experiences and recruited directly from the event.",
    date: '2024-12-07',
    year: 2024,
    location: 'SVCP Seminar Hall',
    category: 'Curricular & Co-curricular Activities',
    categorySlug: 'curricular',
    image: img('1517457373958-b7bdd4587205'),
    gallery: gallery(
      '1540575467063-178a50c2df87',
      '1503428593586-e225b39bddfe',
      '1475721027785-f74eccf877e2',
      '1524178232363-1fb2b075b655'
    ),
    objectives: [
      'Introduce pharmaceutical marketing principles and regulations',
      'Develop product detailing and MR communication skills',
      'Expose students to digital marketing in healthcare',
      'Connect students with pharmaceutical industry recruiters',
    ],
    highlights: [
      'Guest speakers from 3 leading pharma companies',
      'Mock MR detailing exercise and feedback',
      'Pharmaceutical marketing case study competition',
      'Campus recruitment post-workshop by participating companies',
    ],
    tags: ['marketing', 'sales', 'pharmaceutical', 'MR', 'career'],
  },
  {
    id: 'cc-006',
    slug: 'sponsored-research-proposal-workshop',
    title: 'Sponsored Research Proposal Writing Workshop',
    shortDescription:
      'Workshop on writing effective research proposals for government and industry funding.',
    description:
      'This specialised workshop trained faculty and senior students in the art of crafting compelling sponsored research proposals for funding bodies such as DST, ICMR, DBT, and pharmaceutical industry sponsors. Participants learned to structure research objectives, justify budgets, present methodology, and articulate the expected societal and scientific impact. Expert reviewers provided real-time feedback on participant drafts.',
    date: '2025-02-14',
    year: 2025,
    location: 'SVCP Research Centre',
    category: 'Curricular & Co-curricular Activities',
    categorySlug: 'curricular',
    image: img('1540575467063-178a50c2df87'),
    gallery: gallery(
      '1503428593586-e225b39bddfe',
      '1475721027785-f74eccf877e2',
      '1524178232363-1fb2b075b655',
      '1543269664-56d93c1b41a6'
    ),
    objectives: [
      'Develop research proposal writing skills for funding applications',
      'Familiarise participants with major Indian research funding agencies',
      'Build capacity for sponsored research at SVCP',
      'Provide personalised feedback from expert reviewers',
    ],
    highlights: [
      '30 faculty and PG students participated',
      'Expert from DST provided insider proposal review tips',
      'Live review of 5 draft proposals',
      '2 proposals advanced to actual submission stage',
    ],
    tags: ['research', 'proposal', 'funding', 'DST', 'ICMR', 'workshop'],
  },
  {
    id: 'cc-007',
    slug: 'seed-grant-proposal-workshop',
    title: 'Seed Grant Proposal Workshop',
    shortDescription:
      'Hands-on workshop guiding students in applying for seed grants for early-stage pharmaceutical innovations.',
    description:
      'The Seed Grant Proposal Workshop was designed for student innovators and early-stage researchers seeking funding to develop their pharmaceutical ideas. The workshop demystified the seed grant application process, covered eligibility criteria for government incubation and MSME schemes, and guided participants in preparing compelling one-page innovation summaries and detailed project plans. Successful past seed grant recipients shared their journey.',
    date: '2025-03-10',
    year: 2025,
    location: 'SVCP Entrepreneurship Cell',
    category: 'Curricular & Co-curricular Activities',
    categorySlug: 'curricular',
    image: img('1475721027785-f74eccf877e2'),
    gallery: gallery(
      '1503428593586-e225b39bddfe',
      '1540575467063-178a50c2df87',
      '1543269664-56d93c1b41a6',
      '1524178232363-1fb2b075b655'
    ),
    objectives: [
      'Guide students through the seed grant application ecosystem',
      'Build capability to access government and private startup funding',
      'Develop one-page innovation summaries and pitch decks',
      'Connect students with active incubation support networks',
    ],
    highlights: [
      '25 student teams participated',
      'Seed grant success stories shared by alumni entrepreneurs',
      'Mock review panel for student pitches',
      'Three teams connected with MSME incubation centres',
    ],
    tags: ['seed grant', 'startup', 'funding', 'incubation', 'innovation'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. NSS ACTIVITIES
// ─────────────────────────────────────────────────────────────────────────────
const nssActivities: Activity[] = [
  {
    id: 'nss-001',
    slug: 'rational-use-of-medicine-campaign',
    title: 'Rational Use of Medicine Campaign',
    shortDescription:
      'Community awareness campaign promoting safe, responsible, and informed use of medicines.',
    description:
      'The NSS unit of SVCP organised a comprehensive Rational Use of Medicine campaign reaching households, pharmacies, and community health centres in surrounding villages. NSS volunteers — pharmacy students — conducted interactive sessions on antibiotic stewardship, self-medication risks, proper storage of medicines, and the importance of completing prescribed courses. Pamphlets in Punjabi and Hindi were distributed and a toll-free helpline was publicised.',
    date: '2024-11-18',
    year: 2024,
    location: 'Villages near Banur, District Patiala',
    category: 'NSS',
    categorySlug: 'Nss',
    image: img('1582213782179-e0d53f98f2ca'),
    gallery: gallery(
      '1559027615-cd4628902d4a',
      '1593113598332-cd288d649433',
      '1488521787783-5952f31e17eb',
      '1469571486292-0ba58a3f068b'
    ),
    objectives: [
      'Educate communities on safe and rational medicine use',
      'Combat the dangers of antibiotic resistance and self-medication',
      'Develop community engagement skills in pharmacy students',
      'Create awareness about medicine storage and expiry',
    ],
    highlights: [
      '500+ households covered across 5 villages',
      'Bilingual pamphlets (Hindi & Punjabi) distributed',
      'Interactive Q&A sessions at village chaupal',
      'Medicine disposal drive at local pharmacy shops',
    ],
    tags: ['NSS', 'rational medicine', 'community', 'health awareness'],
  },
  {
    id: 'nss-002',
    slug: 'blood-donation-camp',
    title: 'Blood Donation Camp',
    shortDescription:
      'Annual NSS blood donation drive in collaboration with the local civil hospital.',
    description:
      'The NSS unit of SVCP organises a large-scale blood donation camp each year in collaboration with Rajpura Civil Hospital. The camp serves a critical healthcare need in the region and has become one of the most successful student-led health initiatives in the district. Trained medical staff supervise the donation process, and all donors are provided with refreshments, health check-ups, and donor cards. The drive consistently exceeds its annual target.',
    date: '2024-06-14',
    year: 2024,
    location: 'SVCP Campus — NSS Hall',
    category: 'NSS',
    categorySlug: 'Nss',
    image: img('1615461066841-6116e61058f4'),
    gallery: gallery(
      '1593113598332-cd288d649433',
      '1559027615-cd4628902d4a',
      '1582213782179-e0d53f98f2ca',
      '1488521787783-5952f31e17eb'
    ),
    objectives: [
      'Address the critical blood shortage in the Patiala district',
      'Encourage a culture of voluntary blood donation among youth',
      'Build awareness of blood group compatibility and donation eligibility',
      'Support nearby civil hospitals and thalassemia centres',
    ],
    highlights: [
      '180 units of blood collected in a single day',
      'Partnered with Rajpura Civil Hospital',
      'Pre-donation health check-ups for all donors',
      'Felicitation of most frequent blood donors from previous years',
    ],
    tags: ['blood donation', 'NSS', 'health', 'community service'],
  },
  {
    id: 'nss-003',
    slug: 'tree-plantation-drive',
    title: 'Tree Plantation Drive',
    shortDescription:
      'NSS-led tree plantation campaign on World Environment Day with community participation.',
    description:
      "On World Environment Day, the NSS unit of SVCP mobilised over 150 student volunteers to plant native saplings along the Chandigarh-Patiala National Highway and in the college campus. The initiative, carried out in collaboration with Punjab Forest Department, focused on planting species such as neem, peepal, and arjun — known for their medicinal and environmental value. Volunteers took personal responsibility for watering and maintaining planted saplings.",
    date: '2024-06-05',
    year: 2024,
    location: 'SVCP Campus & NH-7 Roadside, Banur',
    category: 'NSS',
    categorySlug: 'Nss',
    image: img('1469571486292-0ba58a3f068b'),
    gallery: gallery(
      '1559027615-cd4628902d4a',
      '1593113598332-cd288d649433',
      '1488521787783-5952f31e17eb',
      '1582213782179-e0d53f98f2ca'
    ),
    objectives: [
      'Contribute to environmental conservation and afforestation',
      'Plant medicinally valuable native species',
      'Instil environmental responsibility in students',
      'Collaborate with government departments for sustainable impact',
    ],
    highlights: [
      '500 saplings planted in a single day',
      'Medicinal plant zone created on campus',
      'Punjab Forest Department partnership',
      'Sapling adoption programme: each student adopts and nurtures one tree',
    ],
    tags: ['environment', 'tree plantation', 'NSS', 'green campus'],
  },
  {
    id: 'nss-004',
    slug: 'swachh-bharat-campaign',
    title: 'Swachh Bharat Campaign',
    shortDescription:
      'NSS cleanliness drive covering the college campus, surrounding roads, and adopted village.',
    description:
      "In alignment with the Government of India's Swachh Bharat Mission, the NSS unit organised a multi-day cleanliness campaign encompassing the college campus, the surrounding highway stretch, and the unit's adopted village of Ramnagar. Activities included mass sweeping, waste segregation awareness, open-defecation-free (ODF) promotion, and installation of dustbins in public spaces. The campaign was widely covered in local media.",
    date: '2024-10-02',
    year: 2024,
    location: 'SVCP Campus & Village Ramnagar',
    category: 'NSS',
    categorySlug: 'Nss',
    image: img('1559027615-cd4628902d4a'),
    gallery: gallery(
      '1593113598332-cd288d649433',
      '1469571486292-0ba58a3f068b',
      '1488521787783-5952f31e17eb',
      '1582213782179-e0d53f98f2ca'
    ),
    objectives: [
      'Promote cleanliness, hygiene, and waste management',
      'Support the Swachh Bharat Mission at ground level',
      'Develop civic responsibility in student volunteers',
      'Create a lasting impact in the adopted village',
    ],
    highlights: [
      '200+ NSS volunteers mobilised over 3 days',
      '5 public areas cleaned and waste bins installed',
      'Door-to-door hygiene awareness in 100 households',
      'Covered by 2 regional Hindi news channels',
    ],
    tags: ['Swachh Bharat', 'cleanliness', 'NSS', 'community'],
  },
  {
    id: 'nss-005',
    slug: 'community-health-camp',
    title: 'Community Health Camp',
    shortDescription:
      'Free health check-up camp providing basic diagnostics and medicines to rural communities.',
    description:
      'The NSS unit of SVCP, in collaboration with the college health centre and visiting physicians, organised a free community health camp in the adopted village. Services included blood pressure monitoring, blood glucose testing, dental check-ups, eye screening, and distribution of free medicines. Pharmacy students played a central role in counselling patients on medication adherence and providing health education. Over 300 beneficiaries were served in a single day.',
    date: '2025-01-26',
    year: 2025,
    location: 'Village Ramnagar, Tehsil Rajpura',
    category: 'NSS',
    categorySlug: 'Nss',
    image: img('1488521787783-5952f31e17eb'),
    gallery: gallery(
      '1582213782179-e0d53f98f2ca',
      '1593113598332-cd288d649433',
      '1469571486292-0ba58a3f068b',
      '1559027615-cd4628902d4a'
    ),
    objectives: [
      'Provide free basic healthcare to underserved rural populations',
      'Apply pharmacy education in real community health settings',
      'Distribute medicines and nutritional supplements',
      'Identify and refer patients requiring specialist care',
    ],
    highlights: [
      '350 patients served in a single day',
      'Free medicines worth ₹50,000 distributed',
      'Specialist physicians from Rajpura Civil Hospital participated',
      '25 patients referred for further hospital treatment',
    ],
    tags: ['health camp', 'community', 'NSS', 'free medicine', 'rural health'],
  },
  {
    id: 'nss-006',
    slug: 'rural-awareness-programme',
    title: 'Rural Awareness Programme',
    shortDescription:
      'NSS awareness drive covering health, hygiene, education, and digital literacy in rural areas.',
    description:
      "SVCP's NSS Rural Awareness Programme sends student volunteers to surrounding villages for week-long immersive camps. Volunteers conduct sessions on health literacy, basic hygiene, women's health, child nutrition, government welfare schemes, and digital banking. The programme has a proven track record of creating sustained behavioural change in the communities it reaches, and is a model for university-community engagement in the region.",
    date: '2024-12-20',
    year: 2024,
    location: 'Villages: Ramnagar, Sehna, Bassi Pathana',
    category: 'NSS',
    categorySlug: 'Nss',
    image: img('1593113598332-cd288d649433'),
    gallery: gallery(
      '1488521787783-5952f31e17eb',
      '1559027615-cd4628902d4a',
      '1469571486292-0ba58a3f068b',
      '1582213782179-e0d53f98f2ca'
    ),
    objectives: [
      'Improve health, hygiene, and digital literacy in rural communities',
      'Introduce government welfare schemes to rural beneficiaries',
      'Develop empathy and community service ethos in volunteers',
      'Create sustained community impact through regular engagement',
    ],
    highlights: [
      '7-day residential NSS camp in 3 villages',
      'Topics: Health, Hygiene, Digital Payments, Women Empowerment',
      '150 NSS volunteers participated',
      'Chief Medical Officer of Patiala commended the programme',
    ],
    tags: ['rural', 'awareness', 'NSS', 'community', 'health literacy'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 4. NCC ACTIVITIES
// ─────────────────────────────────────────────────────────────────────────────
const nccActivities: Activity[] = [
  {
    id: 'ncc-001',
    slug: 'republic-day-parade',
    title: 'Republic Day Parade',
    shortDescription:
      'NCC cadets march proudly in the Republic Day parade, representing SVCP and the district.',
    description:
      "SVCP's NCC unit participates in the annual Republic Day parade at the district level, showcasing precision drill, discipline, and national pride. Cadets undergo weeks of rigorous preparation including drill rehearsals, physical fitness training, and ceremonial practice. Selected cadets have also represented the district at the state-level parade in Chandigarh. The parade is a source of great pride for the institution and inspires all students to uphold national values.",
    date: '2025-01-26',
    year: 2025,
    location: 'District Parade Ground, Patiala',
    category: 'NCC',
    categorySlug: 'Ncc',
    image: img('1579952363873-27f3bade9f55'),
    gallery: gallery(
      '1486325212027-8081e485255e',
      '1569098644584-210ef9e3c2f3',
      '1532375810709-75b1da00537c',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Represent SVCP at the district Republic Day parade with distinction',
      'Develop discipline, leadership, and physical fitness in cadets',
      'Foster patriotism and national consciousness',
      'Inspire fellow students through the example of NCC service',
    ],
    highlights: [
      '45 cadets marched at the district parade',
      '3 cadets selected for state-level parade in Chandigarh',
      'Best Drill Performance award received',
      'Felicitation by the District Collector',
    ],
    tags: ['republic day', 'parade', 'NCC', 'patriotism', 'drill'],
  },
  {
    id: 'ncc-002',
    slug: 'independence-day-parade',
    title: 'Independence Day Parade',
    shortDescription:
      'NCC cadets lead the Independence Day march past with pride and precision.',
    description:
      "The Independence Day parade is one of the most prestigious events for SVCP's NCC unit. Cadets line up in crisp uniforms for the march past at the district parade ground, where they demonstrate weeks of rigorous drill training. The unit also participates in the flag hoisting ceremony at the college, where NCC cadets provide the guard of honour. The occasion inspires the entire student community to reflect on the nation's independence and the responsibilities it brings.",
    date: '2024-08-15',
    year: 2024,
    location: 'SVCP Campus & District Parade Ground, Patiala',
    category: 'NCC',
    categorySlug: 'Ncc',
    image: img('1486325212027-8081e485255e'),
    gallery: gallery(
      '1579952363873-27f3bade9f55',
      '1532375810709-75b1da00537c',
      '1569098644584-210ef9e3c2f3',
      '1511632765486-142679e5e344'
    ),
    objectives: [
      'Celebrate Independence Day with pride and disciplined ceremony',
      'Provide guard of honour at the college flag hoisting',
      'Build cadets\' sense of duty and national pride',
    ],
    highlights: [
      '50 cadets participated in college ceremony and district parade',
      'Guard of honour provided by NCC at flag hoisting',
      'Oath-taking ceremony for new cadets',
      'Principal addressed cadets on patriotism and service',
    ],
    tags: ['independence day', 'NCC', 'parade', 'flag hoisting'],
  },
  {
    id: 'ncc-003',
    slug: 'combined-annual-training-camp',
    title: 'Combined Annual Training Camp (CATC)',
    shortDescription:
      'Intensive 10-day NCC training camp covering drill, adventure activities, and leadership.',
    description:
      `The Combined Annual Training Camp (CATC) is a mandatory and transformative event in every NCC cadet's calendar. Held over 10 days at the designated NCC Group Headquarters, the camp includes rigorous drill, weapon training, map reading, first aid, adventure activities, and leadership development exercises. SVCP cadets consistently excel in camp evaluations and have won trophies for their performance in inter-unit drill competitions and shooting ranges.`,
    date: '2024-10-15',
    year: 2024,
    location: 'NCC Group HQ, Patiala',
    category: 'NCC',
    categorySlug: 'Ncc',
    image: img('1569098644584-210ef9e3c2f3'),
    gallery: gallery(
      '1579952363873-27f3bade9f55',
      '1486325212027-8081e485255e',
      '1511632765486-142679e5e344',
      '1532375810709-75b1da00537c'
    ),
    objectives: [
      'Provide comprehensive military and leadership training to cadets',
      'Build physical endurance, teamwork, and discipline',
      'Develop first aid, map reading, and survival skills',
      'Prepare cadets for the NCC B and C Certificate examinations',
    ],
    highlights: [
      '60 SVCP cadets attended the 10-day CATC',
      'First Aid training by Indian Army Medical Corps instructor',
      'Adventure activities: rappelling, obstacle course, trekking',
      'SVCP team won Best Unit Drill Award at inter-unit competition',
    ],
    tags: ['NCC', 'CATC', 'training', 'leadership', 'adventure'],
  },
  {
    id: 'ncc-004',
    slug: 'adventure-camp',
    title: 'Adventure Camp',
    shortDescription:
      'Thrilling multi-day outdoor adventure camp building resilience and teamwork in NCC cadets.',
    description:
      'The NCC Adventure Camp challenges cadets physically and mentally through a curated programme of outdoor activities in the Himalayan foothills. Activities include rock climbing, rappelling, river crossing, tent pitching, compass navigation, and survival skills training. The camp builds resilience, self-confidence, and a spirit of adventure that the cadets carry into all aspects of their professional and personal lives.',
    date: '2024-07-10',
    year: 2024,
    location: 'Kasauli Adventure Zone, Himachal Pradesh',
    category: 'NCC',
    categorySlug: 'Ncc',
    image: img('1511632765486-142679e5e344'),
    gallery: gallery(
      '1569098644584-210ef9e3c2f3',
      '1486325212027-8081e485255e',
      '1579952363873-27f3bade9f55',
      '1532375810709-75b1da00537c'
    ),
    objectives: [
      'Build physical endurance and mental resilience',
      'Develop teamwork and trust under challenging conditions',
      'Introduce outdoor survival and navigation skills',
      'Inspire a lifelong spirit of adventure and exploration',
    ],
    highlights: [
      '5-day camp with 40 cadets',
      'Rock climbing, rappelling, and river crossing activities',
      'Night navigation and survival camping exercise',
      'Certificates awarded by NCC officer for completion',
    ],
    tags: ['adventure', 'NCC', 'outdoor', 'trekking', 'leadership'],
  },
  {
    id: 'ncc-005',
    slug: 'social-service-activities',
    title: 'NCC Social Service Activities',
    shortDescription:
      'NCC cadets engage in social service, relief work, and community outreach activities.',
    description:
      'NCC cadets at SVCP actively contribute to social causes throughout the academic year. Activities include assisting during natural disaster relief operations, organising cleanliness drives, conducting traffic awareness campaigns, participating in voter awareness programmes, and supporting local law enforcement during public events. These activities reinforce the NCC motto of "Unity and Discipline" while grounding cadets in the realities of public service.',
    date: '2024-09-28',
    year: 2024,
    location: 'Banur & Rajpura, District Patiala',
    category: 'NCC',
    categorySlug: 'Ncc',
    image: img('1532375810709-75b1da00537c'),
    gallery: gallery(
      '1559027615-cd4628902d4a',
      '1593113598332-cd288d649433',
      '1579952363873-27f3bade9f55',
      '1486325212027-8081e485255e'
    ),
    objectives: [
      'Inculcate social responsibility and service orientation in cadets',
      'Support local administration and community welfare initiatives',
      'Build a connection between the NCC and the wider community',
    ],
    highlights: [
      'Traffic management support during local fair',
      'Voter awareness campaign with Election Commission',
      'Cleanliness drive at local railway station',
      'Relief material distribution during flood affected areas',
    ],
    tags: ['NCC', 'social service', 'community', 'discipline'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 5. OUTREACH ACTIVITIES
// ─────────────────────────────────────────────────────────────────────────────
const outreachActivities: Activity[] = [
  {
    id: 'oa-001',
    slug: 'innovation-outreach-schools',
    title: 'Innovation Outreach in Schools',
    shortDescription:
      'SVCP students visit nearby schools to spark scientific curiosity and career awareness.',
    description:
      'The Innovation Outreach in Schools programme sends SVCP students and faculty to nearby government and private schools to deliver engaging science demonstrations, career guidance sessions, and interactive talks on pharmacy as a profession. The programme demystifies scientific concepts, introduces students to pharmaceutical sciences, and inspires school students to pursue science-based careers. Hands-on experiments are conducted to make the learning experience memorable.',
    date: '2024-11-22',
    year: 2024,
    location: 'Government Senior Secondary Schools, Banur & Rajpura',
    category: 'Outreach Activities',
    categorySlug: 'outreach',
    image: img('1488521787783-5952f31e17eb'),
    gallery: gallery(
      '1559027615-cd4628902d4a',
      '1593113598332-cd288d649433',
      '1469571486292-0ba58a3f068b',
      '1582213782179-e0d53f98f2ca'
    ),
    objectives: [
      'Inspire school students to pursue science and pharmacy careers',
      'Conduct hands-on science demonstrations in underresourced schools',
      'Build SVCP\u2019s community presence and goodwill',
      'Develop communication and mentoring skills in SVCP students',
    ],
    highlights: [
      '10 schools visited across Banur and Rajpura regions',
      'Science demonstrations on drug synthesis and drug testing',
      'Career counselling sessions for Class 10 and Class 12 students',
      '1200+ school students reached through the programme',
    ],
    tags: ['outreach', 'schools', 'innovation', 'career guidance', 'science'],
  },
  {
    id: 'oa-002',
    slug: 'entrepreneurship-awareness-program',
    title: 'Entrepreneurship Awareness Program',
    shortDescription:
      'Sessions inspiring students in rural areas to explore entrepreneurship and startup culture.',
    description:
      `SVCP's Entrepreneurship Awareness Programme reaches out to students and young adults in surrounding rural and semi-urban areas who may not be aware of the opportunities available in the startup ecosystem. The programme covers the basics of entrepreneurship, success stories of rural entrepreneurs, government support schemes, and how pharmacy knowledge can be channelled into viable business ventures. Participants are encouraged to join entrepreneurship cells and mentorship networks.`,
    date: '2024-10-19',
    year: 2024,
    location: 'ITI Rajpura & Rural Youth Centres',
    category: 'Outreach Activities',
    categorySlug: 'outreach',
    image: img('1559027615-cd4628902d4a'),
    gallery: gallery(
      '1488521787783-5952f31e17eb',
      '1593113598332-cd288d649433',
      '1582213782179-e0d53f98f2ca',
      '1469571486292-0ba58a3f068b'
    ),
    objectives: [
      'Create entrepreneurship awareness among rural youth',
      'Introduce government startup and MSME support schemes',
      'Inspire pharmacy students to consider entrepreneurial careers',
      'Connect community youth with SVCP\u2019s entrepreneurship network',
    ],
    highlights: [
      '300 rural youth participated across 3 sessions',
      'Success story sharing by a pharmacy graduate entrepreneur',
      'Information on PM Mudra Yojana and Startup India registration',
      '20 participants enrolled in entrepreneurship mentorship programme',
    ],
    tags: ['entrepreneurship', 'outreach', 'rural', 'startup', 'awareness'],
  },
  {
    id: 'oa-003',
    slug: 'health-checkup-camps',
    title: 'Health Check-up Camps',
    shortDescription:
      'Free health screening camps providing diagnostics, medicine, and counselling in rural areas.',
    description:
      `SVCP's outreach health check-up camps bring free basic healthcare to rural communities that have limited access to medical services. Each camp includes blood pressure screening, diabetes testing, BMI assessment, dental and eye check-ups, and distribution of free medicines. Pharmacy students provide patient counselling under the supervision of registered pharmacists and visiting physicians, gaining invaluable real-world clinical experience while serving communities.`,
    date: '2025-02-08',
    year: 2025,
    location: 'Primary Health Centre, Village Sehna',
    category: 'Outreach Activities',
    categorySlug: 'outreach',
    image: img('1582213782179-e0d53f98f2ca'),
    gallery: gallery(
      '1488521787783-5952f31e17eb',
      '1593113598332-cd288d649433',
      '1469571486292-0ba58a3f068b',
      '1559027615-cd4628902d4a'
    ),
    objectives: [
      'Provide free basic healthcare to underserved rural communities',
      'Give pharmacy students supervised real-world patient interaction',
      'Promote preventive health awareness in rural populations',
      'Identify and refer patients requiring advanced care',
    ],
    highlights: [
      '420 patients screened in a single day',
      'Free medicines and nutritional supplements distributed',
      'Eye check-up camp with visiting ophthalmologist',
      '35 patients referred to Rajpura Civil Hospital for follow-up',
    ],
    tags: ['health camp', 'outreach', 'rural health', 'free medicine'],
  },
  {
    id: 'oa-004',
    slug: 'career-guidance-programs',
    title: 'Career Guidance Programs',
    shortDescription:
      'Career counselling sessions guiding Class 10 and 12 students in science streams.',
    description:
      `SVCP's Career Guidance Programme targets school students at the critical juncture of Class 10 and 12, helping them understand their options in pharmacy, life sciences, and healthcare. Sessions cover the wide range of careers available after a pharmacy degree — from hospital pharmacy and clinical research to regulatory affairs, pharmaceutical marketing, and entrepreneurship. Faculty members share their own career journeys, making the sessions relatable and inspiring.`,
    date: '2024-12-12',
    year: 2024,
    location: 'DAV Senior Secondary School, Rajpura',
    category: 'Outreach Activities',
    categorySlug: 'outreach',
    image: img('1469571486292-0ba58a3f068b'),
    gallery: gallery(
      '1488521787783-5952f31e17eb',
      '1559027615-cd4628902d4a',
      '1593113598332-cd288d649433',
      '1582213782179-e0d53f98f2ca'
    ),
    objectives: [
      'Guide Class 10 and 12 students in making informed career choices',
      'Highlight the breadth of careers available in pharmaceutical sciences',
      'Dispel myths about pharmacy as a limited career option',
      'Create awareness about SVCP\u2019s programmes and admission process',
    ],
    highlights: [
      '400 school students counselled across 5 school visits',
      'Interactive Q&A with current SVCP students',
      'Career brochures and scholarship information distributed',
      'Virtual lab tour to showcase SVCP facilities',
    ],
    tags: ['career guidance', 'outreach', 'school', 'pharmacy careers'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 6. NATIONAL / INTERNATIONAL DAY CELEBRATIONS
// ─────────────────────────────────────────────────────────────────────────────
const nationalDaysActivities: Activity[] = [
  {
    id: 'nd-001',
    slug: 'national-pollution-control-day',
    title: 'National Pollution Control Day',
    shortDescription:
      'Awareness programme on pollution control, clean air, and sustainable pharmacy practices.',
    description:
      `Observed on December 2nd in memory of the victims of the Bhopal Gas Tragedy, National Pollution Control Day at SVCP features poster presentations, expert talks, and pledge ceremonies on pollution control. Students explore the role pharmaceutical manufacturing plays in environmental pollution and discuss sustainable, green chemistry solutions. The day reinforces SVCP's commitment to responsible pharmaceutical practices that minimise environmental impact.`,
    date: '2024-12-02',
    year: 2024,
    location: 'SVCP Seminar Hall',
    category: 'National / International Day Celebrations',
    categorySlug: 'national-days',
    image: img('1604328698692-f76ea9498e76'),
    gallery: gallery(
      '1469571486292-0ba58a3f068b',
      '1540575467063-178a50c2df87',
      '1503428593586-e225b39bddfe',
      '1559027615-cd4628902d4a'
    ),
    objectives: [
      'Raise awareness about environmental pollution and its health impacts',
      'Discuss green chemistry and sustainable pharma manufacturing',
      'Commemorate the victims of industrial disasters',
      'Promote eco-conscious practices in pharmaceutical sciences',
    ],
    highlights: [
      'Expert lecture on pharmaceutical effluent management',
      'Poster competition on pollution control solutions',
      'Pledge ceremony for sustainable pharmacy practices',
      'Tree plantation as a symbol of environmental commitment',
    ],
    tags: ['pollution control', 'environment', 'national day', 'sustainability'],
  },
  {
    id: 'nd-002',
    slug: 'world-health-day',
    title: 'World Health Day',
    shortDescription:
      'Annual health awareness campaign with free screenings, talks, and wellness activities.',
    description:
      `On April 7th each year, SVCP celebrates World Health Day with a full day of health-focused activities. The theme for 2024, "My Health, My Right," was explored through expert lectures, free health screenings, a wellness fair, and a student-led awareness rally through the campus. The celebration underscores SVCP's mission to foster future healthcare professionals who are deeply committed to health equity and public wellness.`,
    date: '2024-04-07',
    year: 2024,
    location: 'SVCP Campus',
    category: 'National / International Day Celebrations',
    categorySlug: 'national-days',
    image: img('1576085898323-218337e36afc'),
    gallery: gallery(
      '1582213782179-e0d53f98f2ca',
      '1488521787783-5952f31e17eb',
      '1540575467063-178a50c2df87',
      '1503428593586-e225b39bddfe'
    ),
    objectives: [
      'Create campus-wide awareness on current global and national health themes',
      'Provide free health screenings to students, staff, and community members',
      'Reinforce SVCP\u2019s commitment to public health and health equity',
    ],
    highlights: [
      'Free blood pressure, diabetes, and BMI screenings for 300+ persons',
      'Expert lecture: "Role of Pharmacists in Universal Health Coverage"',
      'Student-led health awareness rally',
      'Wellness fair with nutritionists, yogis, and counsellors',
    ],
    tags: ['World Health Day', 'WHO', 'health awareness', 'national day'],
  },
  {
    id: 'nd-003',
    slug: 'international-womens-day',
    title: "International Women's Day",
    shortDescription:
      'Celebration of women achievers in pharmacy and healthcare with talks and awards.',
    description:
      "International Women's Day at SVCP celebrates the remarkable contributions of women to pharmacy, healthcare, and science. The programme features inspirational talks by women leaders from pharmaceutical companies and academia, panel discussions on challenges facing women in STEM, and a felicitation ceremony honouring outstanding women students and faculty members. The event reinforces SVCP's commitment to gender equity in pharmaceutical education.",
    date: '2024-03-08',
    year: 2024,
    location: 'SVCP Auditorium',
    category: 'National / International Day Celebrations',
    categorySlug: 'national-days',
    image: img('1591522810850-58128c5fb089'),
    gallery: gallery(
      '1518611012356-e1e4c2c23a9f',
      '1573497019236-c5f77cd58888',
      '1540575467063-178a50c2df87',
      '1503428593586-e225b39bddfe'
    ),
    objectives: [
      "Celebrate women's contributions to pharmacy and healthcare",
      'Address gender equity challenges in STEM and pharmaceutical sciences',
      "Inspire young women students through role model interactions",
      "Felicitate outstanding women achievers from SVCP",
    ],
    highlights: [
      "Panel: 'Breaking Barriers — Women Leading in Pharma'",
      'Felicitation of 10 women achievers: students and faculty',
      'Poster competition: Women in Science and Healthcare',
      'Pledge for gender-inclusive workplaces in healthcare',
    ],
    tags: ["women's day", 'gender equality', 'STEM', 'national day'],
  },
  {
    id: 'nd-004',
    slug: 'international-yoga-day',
    title: 'International Yoga Day',
    shortDescription:
      'Mass yoga session promoting health and wellness among students and faculty.',
    description:
      "Celebrated on June 21st each year, International Yoga Day at SVCP brings together hundreds of students, faculty, and staff for a sunrise yoga session on the college grounds. Certified yoga instructors guide participants through asanas, pranayama, and meditation techniques, highlighting the connection between holistic wellness and pharmaceutical sciences. The event promotes mental health awareness and work-life balance in a demanding academic environment.",
    date: '2024-06-21',
    year: 2024,
    location: 'SVCP Outdoor Sports Ground',
    category: 'National / International Day Celebrations',
    categorySlug: 'national-days',
    image: img('1607827448452-6fca33bff9e0'),
    gallery: gallery(
      '1576085898323-218337e36afc',
      '1559027615-cd4628902d4a',
      '1469571486292-0ba58a3f068b',
      '1504276099118-e72eba870bef'
    ),
    objectives: [
      'Promote physical and mental wellness through yoga practice',
      'Create awareness about holistic approaches to health',
      'Build a culture of wellness within the academic community',
      "Showcase yoga's relevance to pharmaceutical and clinical practice",
    ],
    highlights: [
      '500+ participants in mass yoga session',
      'Certified yoga instructor led 90-minute session',
      'Pranayama and meditation workshop',
      'SVCP received Yoga Day Participation Certificate from MoAYUSH',
    ],
    tags: ['yoga', 'wellness', 'international day', 'health', 'meditation'],
  },
  {
    id: 'nd-005',
    slug: 'national-pharmacy-education-day',
    title: 'National Pharmacy Education Day',
    shortDescription:
      'Day dedicated to celebrating pharmacy education, student achievements, and the pharmacy profession.',
    description:
      'National Pharmacy Education Day at SVCP is a celebration of the profession and its educators. The day features public lectures by pharmacy alumni and industry veterans, awards for academic excellence, and an exhibition of student research projects. The event inspires students to take pride in their chosen profession and motivates them to strive for excellence. A special programme on the evolving role of the pharmacist in India\u2019s healthcare ecosystem is a highlight.',
    date: '2024-10-25',
    year: 2024,
    location: 'SVCP Auditorium & Research Centre',
    category: 'National / International Day Celebrations',
    categorySlug: 'national-days',
    image: img('1581091226825-a6a2a5aee158'),
    gallery: gallery(
      '1565688534245-05d6b5be184a',
      '1540575467063-178a50c2df87',
      '1503428593586-e225b39bddfe',
      '1581244816498-a8555b7047ea'
    ),
    objectives: [
      'Celebrate pharmaceutical education and the pharmacy profession',
      'Recognise academic excellence among students',
      'Engage alumni and industry in mentoring students',
      'Showcase student research and project work',
    ],
    highlights: [
      'Public lecture: "Future of Pharmacy in India"',
      '20 students recognised for academic excellence',
      'Student research poster exhibition — 40 posters',
      'Pharmacy Quiz Competition: inter-college level',
    ],
    tags: ['pharmacy', 'education', 'national day', 'celebration'],
  },
  {
    id: 'nd-006',
    slug: 'republic-day-celebration',
    title: 'Republic Day',
    shortDescription:
      'Patriotic celebration with flag hoisting, NCC parade, cultural performances, and speeches.',
    description:
      "Republic Day is one of SVCP's most significant national celebrations. The college organises a grand flag-hoisting ceremony attended by the entire institution — students, faculty, staff, and guests. The NCC cadets provide a guard of honour, patriotic songs fill the air, and speeches by student representatives and faculty members inspire civic pride. Cultural performances themed on India's constitutional values follow the formal ceremony.",
    date: '2025-01-26',
    year: 2025,
    location: 'SVCP College Grounds',
    category: 'National / International Day Celebrations',
    categorySlug: 'national-days',
    image: img('1532375810709-75b1da00537c'),
    gallery: gallery(
      '1486325212027-8081e485255e',
      '1579952363873-27f3bade9f55',
      '1511632765486-142679e5e344',
      '1514525253161-7a46d19cd819'
    ),
    objectives: [
      'Commemorate the adoption of the Indian Constitution',
      'Inspire patriotism and civic responsibility',
      'Honour constitutional values of justice, equality, and fraternity',
    ],
    highlights: [
      'Flag hoisting with NCC guard of honour',
      'Cultural programme: dance and music on national themes',
      'Best Cadet Awards by Commanding Officer',
      'Essay competition: "India@100 — My Vision"',
    ],
    tags: ['republic day', 'national day', 'patriotism', 'NCC'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 7. INDUSTRIAL VISITS
// ─────────────────────────────────────────────────────────────────────────────
const industrialVisitsActivities: Activity[] = [
  {
    id: 'iv-001',
    slug: 'pharmaceutical-industry-visit',
    title: 'Pharmaceutical Industry Visit',
    shortDescription:
      'Students visit a leading pharmaceutical manufacturing facility to see GMP practices in action.',
    description:
      'Students from SVCP visited a leading pharmaceutical manufacturing company in the Baddi Pharmaceutical Hub in Himachal Pradesh. The visit gave students a first-hand view of Good Manufacturing Practices (GMP), quality control laboratories, sterile manufacturing areas, packaging lines, and regulatory compliance systems. Interactions with production pharmacists, quality assurance managers, and plant managers provided invaluable career insights and bridged the gap between academic theory and industrial practice.',
    date: '2024-10-08',
    year: 2024,
    location: 'Pharma Hub, Baddi, Himachal Pradesh',
    category: 'Industrial Visits',
    categorySlug: 'industrial-visits',
    image: img('1565688534245-05d6b5be184a'),
    gallery: gallery(
      '1581091226825-a6a2a5aee158',
      '1581244816498-a8555b7047ea',
      '1532187863486-abf9dbad1b69',
      '1497435334941-8c899ee9e8e9'
    ),
    objectives: [
      'Expose students to live GMP pharmaceutical manufacturing environments',
      'Bridge the gap between academic theory and industrial practice',
      'Inspire career aspirations in pharmaceutical production and QA',
      'Develop understanding of regulatory requirements in pharma industry',
    ],
    highlights: [
      '60 B.Pharm students visited a WHO-GMP certified facility',
      'Guided tour of production, QC lab, and QA department',
      'Interactive session with Plant Manager and Senior Pharmacists',
      'Hands-on demonstration of tablet manufacturing process',
    ],
    tags: ['industrial visit', 'GMP', 'pharmaceutical', 'manufacturing'],
  },
  {
    id: 'iv-002',
    slug: 'aicte-idea-lab-visit',
    title: 'AICTE Idea Lab Visit',
    shortDescription:
      'Students explore cutting-edge prototyping tools and innovation infrastructure at an AICTE Idea Lab.',
    description:
      'SVCP students visited an AICTE-funded Idea Lab at a partnering institution to explore state-of-the-art innovation infrastructure. The visit exposed students to 3D printing, laser cutting, IoT prototyping kits, robotics, and biomedical device development workstations. Faculty facilitators led discussions on how these technologies intersect with pharmaceutical and clinical innovation. Students returned inspired to apply maker-culture thinking to pharmaceutical challenges.',
    date: '2024-11-30',
    year: 2024,
    location: 'AICTE Idea Lab, IKGPTU Campus, Jalandhar',
    category: 'Industrial Visits',
    categorySlug: 'industrial-visits',
    image: img('1581091226825-a6a2a5aee158'),
    gallery: gallery(
      '1565688534245-05d6b5be184a',
      '1581244816498-a8555b7047ea',
      '1497435334941-8c899ee9e8e9',
      '1532187863486-abf9dbad1b69'
    ),
    objectives: [
      'Expose students to advanced prototyping and maker technologies',
      'Identify applications of IoT, 3D printing, and robotics in pharmacy',
      'Build awareness of AICTE innovation infrastructure available to students',
      'Inspire technology-driven pharmaceutical innovation',
    ],
    highlights: [
      'Live demonstration of 3D-printed drug delivery devices',
      'IoT-based patient monitoring prototype showcase',
      'Hands-on time at 3D printing and laser cutting stations',
      'Discussion on biomedical device regulation in India',
    ],
    tags: ['AICTE', 'Idea Lab', 'innovation', '3D printing', 'technology'],
  },
  {
    id: 'iv-003',
    slug: 'research-laboratory-visit',
    title: 'Research Laboratory Visit',
    shortDescription:
      'PG students visit a CSIR research laboratory to explore cutting-edge pharmaceutical R&D.',
    description:
      'Post-graduate students of M.Pharmacy visited a CSIR-affiliated pharmaceutical research laboratory to gain exposure to advanced drug discovery and development methodologies. The visit included demonstrations of High-Performance Liquid Chromatography (HPLC), mass spectrometry, NMR analysis, cell culture facilities, and in-silico drug discovery platforms. Scientists at the lab guided students through ongoing research projects and discussed career pathways in pharmaceutical research.',
    date: '2025-02-20',
    year: 2025,
    location: 'CSIR-IHBT, Palampur, Himachal Pradesh',
    category: 'Industrial Visits',
    categorySlug: 'industrial-visits',
    image: img('1581244816498-a8555b7047ea'),
    gallery: gallery(
      '1581091226825-a6a2a5aee158',
      '1565688534245-05d6b5be184a',
      '1532187863486-abf9dbad1b69',
      '1497435334941-8c899ee9e8e9'
    ),
    objectives: [
      'Provide PG students exposure to advanced pharmaceutical research methods',
      'Bridge the academic curriculum with active scientific research',
      'Inspire careers in pharmaceutical R&D and drug discovery',
      'Build connections with CSIR scientists for future research collaborations',
    ],
    highlights: [
      'Tour of HPLC, NMR, and Mass Spectrometry labs',
      'Presentation on in-silico drug discovery approaches',
      'Discussion on phytopharmaceutical research at IHBT',
      '2 faculty collaborations initiated post-visit',
    ],
    tags: ['research lab', 'CSIR', 'drug discovery', 'PG students'],
  },
  {
    id: 'iv-004',
    slug: 'incubation-centre-visit',
    title: 'Incubation Centre Visit',
    shortDescription:
      'Students visit a pharma-focused incubation centre to learn about the startup ecosystem.',
    description:
      `Students from SVCP's entrepreneurship cell visited a pharmaceutical incubation centre to get up-close exposure to the startup ecosystem. They interacted with resident startups working on drug delivery systems, nutraceuticals, and digital health solutions. The incubation centre's management team explained the application process, funding support available, and mentorship structure — directly motivating several SVCP students to consider submitting their own startup ideas for incubation.`,
    date: '2025-01-15',
    year: 2025,
    location: 'SIDBI Innovation & Incubation Centre, Chandigarh',
    category: 'Industrial Visits',
    categorySlug: 'industrial-visits',
    image: img('1532187863486-abf9dbad1b69'),
    gallery: gallery(
      '1581091226825-a6a2a5aee158',
      '1565688534245-05d6b5be184a',
      '1497435334941-8c899ee9e8e9',
      '1581244816498-a8555b7047ea'
    ),
    objectives: [
      'Expose students to the pharmaceutical startup and incubation ecosystem',
      'Understand the process of applying to and working in an incubation centre',
      'Network with pharmaceutical startup founders',
      'Motivate students to develop and submit their own startup ideas',
    ],
    highlights: [
      'Interaction with 5 pharma startups in residence',
      'Pitch session: 3 student teams presented ideas to incubation managers',
      'Discussion on DPIIT recognition and startup India benefits',
      '1 student team shortlisted for incubation pre-screening',
    ],
    tags: ['incubation', 'startup', 'entrepreneurship', 'pharma', 'visit'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 8. SEMINARS / WORKSHOPS / CONFERENCES / FDPs
// ─────────────────────────────────────────────────────────────────────────────
const seminarsActivities: Activity[] = [
  {
    id: 'sw-001',
    slug: 'annual-research-conclave',
    title: 'Annual Research Conclave',
    shortDescription:
      `SVCP's flagship research event showcasing student and faculty research across pharmaceutical sciences.`,
    description:
      "SVCP's Annual Research Conclave brings together students, faculty, and invited researchers to share the latest research in pharmaceutical sciences. The event features oral presentations, poster sessions, keynote addresses by distinguished scientists, and a special session on emerging research trends. Awards are presented for the best student research projects, and the conclave serves as a catalyst for cross-institutional research collaborations.",
    date: '2024-12-15',
    year: 2024,
    location: 'SVCP Conference Hall',
    category: 'Seminars / Workshops / Conferences / FDPs',
    categorySlug: 'seminars',
    image: img('1540575467063-178a50c2df87'),
    gallery: gallery(
      '1503428593586-e225b39bddfe',
      '1475721027785-f74eccf877e2',
      '1543269664-56d93c1b41a6',
      '1524178232363-1fb2b075b655'
    ),
    objectives: [
      'Create a platform for sharing pharmaceutical research',
      'Recognise and reward excellent student research',
      'Foster collaborations between SVCP and research institutions',
      'Expose students to the latest research trends in pharmacy',
    ],
    highlights: [
      '80 oral and poster presentations',
      'Keynote by Dr. from NIPER Mohali on drug delivery innovations',
      'Best Paper Award and Best Poster Award',
      '5 cross-institutional MoUs signed post-conclave',
    ],
    tags: ['research', 'conclave', 'conference', 'pharmacy'],
  },
  {
    id: 'sw-002',
    slug: 'ipr-protection-workshop',
    title: 'IPR Protection Workshop',
    shortDescription:
      'Workshop on intellectual property rights for pharmaceutical innovations and research.',
    description:
      'This comprehensive workshop on Intellectual Property Rights (IPR) equipped pharmacy students and faculty with knowledge of patent filing, trademark registration, trade secrets, and copyright protection as they apply to pharmaceutical innovations. The session was conducted by a registered patent agent who walked participants through the Patent Cooperation Treaty (PCT), the Indian Patent Office filing process, and real-world case studies of pharmaceutical patent disputes and strategies.',
    date: '2025-02-25',
    year: 2025,
    location: 'SVCP Seminar Hall',
    category: 'Seminars / Workshops / Conferences / FDPs',
    categorySlug: 'seminars',
    image: img('1503428593586-e225b39bddfe'),
    gallery: gallery(
      '1540575467063-178a50c2df87',
      '1475721027785-f74eccf877e2',
      '1543269664-56d93c1b41a6',
      '1517457373958-b7bdd4587205'
    ),
    objectives: [
      'Educate on intellectual property rights in pharmaceutical context',
      'Teach the process of patent filing with the Indian Patent Office',
      'Highlight the importance of IP for pharmaceutical startups',
      'Discuss major pharmaceutical patent case studies',
    ],
    highlights: [
      'Registered patent agent conducted the 2-day workshop',
      'Hands-on patent search using Espacenet and Indian Patent Database',
      '5 student research projects identified with patentable potential',
      'Students guided through prior art search methodology',
    ],
    tags: ['IPR', 'patent', 'intellectual property', 'workshop', 'pharmaceutical'],
  },
  {
    id: 'sw-003',
    slug: 'faculty-development-programme',
    title: 'Faculty Development Programme (FDP)',
    shortDescription:
      'Structured FDP upgrading faculty in advanced pharmaceutical sciences and pedagogy.',
    description:
      'SVCP regularly organises Faculty Development Programmes (FDPs) to upgrade the knowledge, skills, and teaching methodologies of its faculty members. The FDP covers advanced topics in pharmaceutical sciences, emerging research methodologies, outcome-based education (OBE), research ethics, statistical tools, and modern digital teaching aids. Expert resource persons from premier pharmacy institutions and AICTE facilitate the sessions, and participating faculty receive recognition from relevant academic bodies.',
    date: '2024-12-05',
    year: 2024,
    location: 'SVCP Research & Development Centre',
    category: 'Seminars / Workshops / Conferences / FDPs',
    categorySlug: 'seminars',
    image: img('1475721027785-f74eccf877e2'),
    gallery: gallery(
      '1503428593586-e225b39bddfe',
      '1540575467063-178a50c2df87',
      '1543269664-56d93c1b41a6',
      '1524178232363-1fb2b075b655'
    ),
    objectives: [
      'Upgrade faculty knowledge in advanced pharmaceutical sciences',
      'Develop modern teaching and assessment methodologies',
      'Build research capacity and statistical analysis skills',
      'Promote outcome-based education (OBE) implementation',
    ],
    highlights: [
      '5-day intensive FDP with 30 faculty participants',
      'Sessions on Statistical Analysis using SPSS and R',
      'Workshop on writing research papers for indexed journals',
      'AICTE-sponsored FDP certificate awarded to all participants',
    ],
    tags: ['FDP', 'faculty', 'development', 'pedagogy', 'research'],
  },
  {
    id: 'sw-004',
    slug: 'international-conference',
    title: 'International Conference on Pharmaceutical Sciences',
    shortDescription:
      'International forum for pharmaceutical scientists, researchers, and students to share innovations.',
    description:
      'SVCP hosted its inaugural International Conference on Pharmaceutical Sciences, bringing together researchers, academicians, and industry professionals from India and abroad. The conference featured keynote addresses, scientific sessions, panel discussions, and a startup innovation showcase. Topics ranged from novel drug delivery systems and pharmaceutical nanotechnology to regulatory affairs, pharmacoeconomics, and digital health. The event positioned SVCP as a research hub and created significant international visibility for the institution.',
    date: '2025-03-14',
    year: 2025,
    location: 'SVCP Conference Hall & Auditorium',
    category: 'Seminars / Workshops / Conferences / FDPs',
    categorySlug: 'seminars',
    image: img('1543269664-56d93c1b41a6'),
    gallery: gallery(
      '1540575467063-178a50c2df87',
      '1503428593586-e225b39bddfe',
      '1475721027785-f74eccf877e2',
      '1524178232363-1fb2b075b655'
    ),
    objectives: [
      'Create an international platform for pharmaceutical research exchange',
      'Attract global researchers and build international collaborations',
      'Showcase SVCP student and faculty research globally',
      'Position SVCP as a leading pharmacy research institution',
    ],
    highlights: [
      '25 international delegates from 8 countries',
      '120 research papers submitted; 80 accepted for presentation',
      'Keynote by former CDSCO Commissioner on drug regulation',
      'MoU signed with 2 international pharmacy institutions',
    ],
    tags: ['international', 'conference', 'research', 'pharmaceutical sciences'],
  },
  {
    id: 'sw-005',
    slug: 'startup-legal-ethical-steps',
    title: 'Startup Legal & Ethical Steps Workshop',
    shortDescription:
      'Workshop covering company registration, drug licensing, and ethics for pharma startups.',
    description:
      'This highly practical workshop guided pharmacy students and aspiring entrepreneurs through the legal and regulatory landscape of starting a pharmaceutical business in India. Topics included company registration under MCA, Schedule M licensing for drug manufacturing, FDA approval process, FSSAI registration for nutraceuticals, startup India registration, DPIIT recognition, and the ethical responsibilities of pharmaceutical entrepreneurs. A practising pharmaceutical lawyer provided real case examples throughout.',
    date: '2025-01-22',
    year: 2025,
    location: 'SVCP Entrepreneurship Cell',
    category: 'Seminars / Workshops / Conferences / FDPs',
    categorySlug: 'seminars',
    image: img('1524178232363-1fb2b075b655'),
    gallery: gallery(
      '1503428593586-e225b39bddfe',
      '1540575467063-178a50c2df87',
      '1475721027785-f74eccf877e2',
      '1543269664-56d93c1b41a6'
    ),
    objectives: [
      'Demystify the legal requirements for starting a pharma business',
      'Guide students through drug licensing and regulatory compliance',
      'Highlight the ethical responsibilities of pharmaceutical entrepreneurs',
      'Provide a roadmap for Startup India and DPIIT registration',
    ],
    highlights: [
      '40 students from B.Pharm and M.Pharm participated',
      'Pharmaceutical lawyer led the 3-hour session',
      'Step-by-step DPIIT registration walkthrough',
      'Case study on a successful pharma startup compliance journey',
    ],
    tags: ['startup', 'legal', 'ethics', 'pharma', 'workshop', 'regulation'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 9. ALUMNI ACTIVITIES
// ─────────────────────────────────────────────────────────────────────────────
const alumniActivities: Activity[] = [
  {
    id: 'aa-001',
    slug: 'alumni-association',
    title: 'Alumni Association',
    shortDescription: 'The heart of our graduate community, fostering lifelong connections and supporting current students.',
    description: 'The SVCP Alumni Association is the heart of our graduate community. It fosters lifelong connections, supports current students through mentorship and scholarships, and advances the college mission beyond graduation. Members gain access to networking events, career resources, and an exclusive alumni portal.',
    date: '2024-01-15',
    year: 2024,
    location: 'SVCP Campus, Banur',
    category: 'Alumni Activities',
    categorySlug: 'alumni',
    image: '/activity-images/alumni/alumni-association/listing/cover.jpeg',
    gallery: [
      '/activity-images/alumni/alumni-association/detail/gallery/01.jpg',
      '/activity-images/alumni/alumni-association/detail/gallery/02.jpg',
      '/activity-images/alumni/alumni-association/detail/gallery/3.jpeg',
    ],
    objectives: [
      'Foster lifelong connections among alumni',
      'Support current students through mentorship and scholarships',
      'Promote career networking and industry partnerships',
    ],
    highlights: [
      'Over 2000 active alumni members worldwide',
      'Annual mentorship drive for final year students',
      'Dedicated alumni portal and digital network',
    ],
    tags: ['alumni', 'association', 'network', 'mentorship'],
  },
  {
    id: 'aa-002',
    slug: 'alumni-meets',
    title: 'Alumni Meets',
    description: 'Annual reunions bringing graduates back to campus for networking, guest sessions, and celebration.',
    shortDescription: 'Annual reunions bringing graduates back to campus for networking, guest sessions, and celebration.',
    date: '2024-03-20',
    year: 2024,
    location: 'SVCP Auditorium',
    category: 'Alumni Activities',
    categorySlug: 'alumni',
    image: '/activity-images/alumni/alumni-meets/listing/cover.jpeg',
    gallery: [
      '/activity-images/alumni/alumni-meets/detail/gallery/1..jpeg',
      '/activity-images/alumni/alumni-meets/detail/gallery/2..jpeg',
      '/activity-images/alumni/alumni-meets/detail/gallery/3..jpeg',
    ],
    objectives: [
      'Celebrate alumni achievements and milestones',
      'Facilitate student-alumni interactions',
      'Strengthen institution-alumni bonds',
    ],
    highlights: [
      'Annual Silver Jubilee alumni gathering',
      'Departmental reunion sessions',
      'Distinguished Alumni Awards',
    ],
    tags: ['alumni', 'reunion', 'meet', 'networking'],
  },
  {
    id: 'aa-003',
    slug: 'convocation',
    title: 'Convocation Ceremony',
    description: 'The formal conferment of degrees upon graduating students in the presence of family, faculty, and leadership.',
    shortDescription: 'The formal conferment of degrees upon graduating students in the presence of family, faculty, and leadership.',
    date: '2024-05-10',
    year: 2024,
    location: 'SVCP Main Auditorium',
    category: 'Alumni Activities',
    categorySlug: 'alumni',
    image: '/activity-images/alumni/convocation/listing/cover.jpeg',
    gallery: [
      '/activity-images/alumni/convocation/detail/gallery/1..jpeg',
      '/activity-images/alumni/convocation/detail/gallery/2..jpeg',
      '/activity-images/alumni/convocation/detail/gallery/3..jpeg',
      '/activity-images/alumni/convocation/detail/gallery/4..jpeg',
    ],
    objectives: [
      'Confer degrees upon graduating batches of B.Pharm, D.Pharm, and M.Pharm',
      'Award Gold Medals and special honors to meritorious students',
      'Inspire graduates through Chief Guest addresses',
    ],
    highlights: [
      'Formal academic procession with college leadership',
      'Conferment of degrees to over 180 graduates',
      'Gold Medal and Valedictorian award presentations',
    ],
    tags: ['convocation', 'graduation', 'degrees', 'awards'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORY METADATA
// ─────────────────────────────────────────────────────────────────────────────
export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'cultural',
    slug: 'culturalActivities',
    name: 'Cultural Activities',
    shortName: 'Cultural',
    description: 'Festivals, performances, celebrations, and cultural events fostering creativity and community.',
    longDescription:
      'The cultural life at SVCP is vibrant and inclusive, celebrating the rich diversity of Indian festivals, arts, and traditions. From grand annual festivals like Spontaina to intimate Open Mic nights, cultural events at SVCP nurture student creativity, build community bonds, and provide a joyful counterbalance to academic rigour.',
    icon: '🎭',
    heroImage: img('1514525253161-7a46d19cd819'),
    color: '#0F4C81',
    route: '/Activity/CulturalActivities',
    routeFolder: 'CulturalActivities',
    activities: culturalActivities,
  },
  {
    id: 'curricular',
    slug: 'curricular',
    name: 'Curricular & Co-curricular Activities',
    shortName: 'Curricular',
    description: 'Workshops, sessions, and competitions that complement and enrich the academic curriculum.',
    longDescription:
      'Co-curricular activities at SVCP bridge the gap between classroom learning and real-world application. Through workshops on design thinking, innovation, entrepreneurship, and professional skills, students develop the holistic competencies demanded by the modern pharmaceutical industry.',
    icon: '📚',
    heroImage: img('1503428593586-e225b39bddfe'),
    color: '#F59E0B',
    route: '/Activity/curricularActivities',
    routeFolder: 'curricularActivities',
    activities: curricularActivities,
  },
  {
    id: 'nss',
    slug: 'Nss',
    name: 'NSS',
    shortName: 'NSS',
    description: 'National Service Scheme activities serving communities through health, environment, and education.',
    longDescription:
      'The NSS unit of SVCP embodies the principle of "Not Me, But You." Through blood donation camps, health awareness drives, tree plantations, and rural outreach, NSS volunteers develop the compassion and social responsibility that define exceptional healthcare professionals.',
    icon: '🌿',
    heroImage: img('1593113598332-cd288d649433'),
    color: '#16A34A',
    route: '/Activity/Nss',
    routeFolder: 'Nss',
    activities: nssActivities,
  },
  {
    id: 'ncc',
    slug: 'Ncc',
    name: 'NCC',
    shortName: 'NCC',
    description: 'National Cadet Corps activities building discipline, leadership, and national pride.',
    longDescription:
      'The NCC unit at SVCP moulds students into disciplined, patriotic individuals of strong character. Through parades, training camps, adventure activities, and social service, NCC cadets develop leadership qualities that distinguish them in every walk of life.',
    icon: '🎖️',
    heroImage: img('1579952363873-27f3bade9f55'),
    color: '#1D4ED8',
    route: '/Activity/Ncc',
    routeFolder: 'Ncc',
    activities: nccActivities,
  },
  {
    id: 'outreach',
    slug: 'outreach',
    name: 'Outreach Activities',
    shortName: 'Outreach',
    description: 'Community engagement, school visits, and health camps serving society beyond the campus.',
    longDescription:
      `SVCP's outreach programmes create meaningful impact in surrounding communities by leveraging the unique expertise of its pharmacy students and faculty. From school visits that inspire young scientists to free health camps that serve underserved populations, outreach activities build empathetic, community-oriented pharmaceutical professionals.`,
    icon: '🤝',
    heroImage: img('1559027615-cd4628902d4a'),
    color: '#0F4C81',
    route: '/Activity/OutreachActivities',
    routeFolder: 'OutreachActivities',
    activities: outreachActivities,
  },
  {
    id: 'alumni',
    slug: 'alumni',
    name: 'Alumni Activities',
    shortName: 'Alumni',
    description: 'Connecting graduates through alumni meets, association events, and convocation ceremonies.',
    longDescription:
      'The SVCP Alumni network is a vibrant and growing community of pharmacy professionals making their mark across India and the world. Alumni activities nurture lifelong connections, provide mentorship pathways for current students, and bring successful graduates back to inspire the next generation.',
    icon: '🎓',
    heroImage: img('1523050854058-8df90110c9f1'),
    color: '#92400E',
    route: '/Activity/AlumniActivities',
    routeFolder: 'AlumniActivities',
    activities: alumniActivities,
  },
  {
    id: 'national-days',
    slug: 'national-days',
    name: 'National / International Day Celebrations',
    shortName: 'National Days',
    description: 'Commemorating national and international observance days with awareness programmes and events.',
    longDescription:
      'SVCP observes national and international days throughout the year with purpose and commitment. Each observance is marked by awareness programmes, expert lectures, cultural events, and community activities that reinforce the values associated with the day — from environmental responsibility on World Environment Day to patriotism on Republic Day.',
    icon: '🏛️',
    heroImage: img('1532375810709-75b1da00537c'),
    color: '#DC2626',
    route: '/Activity/nationalActivities',
    routeFolder: 'nationalActivities',
    activities: nationalDaysActivities,
  },
  {
    id: 'industrial-visits',
    slug: 'industrial-visits',
    name: 'Industrial Visits',
    shortName: 'Industrial Visits',
    description: 'Organised visits to pharmaceutical industries, research labs, and innovation centres.',
    longDescription:
      'Industrial visits at SVCP are a cornerstone of experiential learning. By visiting GMP-certified pharmaceutical plants, CSIR research laboratories, incubation centres, and innovation hubs, students gain first-hand exposure to the industry standards and practices that their academic curriculum prepares them for — making the transition from campus to career seamless.',
    icon: '🏭',
    heroImage: img('1565688534245-05d6b5be184a'),
    color: '#78350F',
    route: '/Activity/Industrial-Visit',
    routeFolder: 'Industrial-Visit',
    activities: industrialVisitsActivities,
  },
  {
    id: 'seminars',
    slug: 'seminars',
    name: 'Seminars / Workshops / Conferences / FDPs',
    shortName: 'Seminars & Workshops',
    description: 'Knowledge-sharing events, expert lectures, conferences, and faculty development programmes.',
    longDescription:
      `SVCP's seminar and workshop programme is a thriving ecosystem of knowledge exchange. From international conferences that attract global pharmaceutical researchers to focused faculty development programmes that upgrade teaching quality, these events ensure that SVCP's academic community remains at the cutting edge of pharmaceutical science and practice.`,
    icon: '🎤',
    heroImage: img('1540575467063-178a50c2df87'),
    color: '#6D28D9',
    route: '/Activity/seminars',
    routeFolder: 'seminars',
    activities: seminarsActivities,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────
export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  const norm = slug.toLowerCase().replace(/[-_]/g, '');
  return CATEGORIES.find(
    (c) =>
      c.slug === slug ||
      c.routeFolder === slug ||
      c.id === slug ||
      c.slug.toLowerCase() === slug.toLowerCase() ||
      c.routeFolder.toLowerCase() === slug.toLowerCase() ||
      c.id.toLowerCase() === slug.toLowerCase() ||
      c.slug.toLowerCase().replace(/[-_]/g, '') === norm ||
      c.routeFolder.toLowerCase().replace(/[-_]/g, '') === norm ||
      c.id.toLowerCase().replace(/[-_]/g, '') === norm
  );
}

export function getActivityBySlug(
  categorySlug: string,
  activitySlug: string
): Activity | undefined {
  const decodedActivitySlug = decodeURIComponent(activitySlug);
  const category = getCategoryBySlug(categorySlug);
  if (category) {
    const found = category.activities.find(
      (a) => a.slug === decodedActivitySlug || a.slug.toLowerCase() === decodedActivitySlug.toLowerCase()
    );
    if (found) return found;
  }
  return getAllActivities().find(
    (a) => a.slug === decodedActivitySlug || a.slug.toLowerCase() === decodedActivitySlug.toLowerCase()
  );
}

export function getAllActivities(): Activity[] {
  return CATEGORIES.flatMap((c) => c.activities);
}

export function getRelatedActivities(
  categorySlug: string,
  currentSlug: string,
  count = 3
): Activity[] {
  const category = getCategoryBySlug(categorySlug);
  return (
    category?.activities
      .filter((a) => a.slug !== currentSlug)
      .slice(0, count) ?? []
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STATISTICS
// ─────────────────────────────────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { value: 150, suffix: '+', label: 'Activities Conducted', icon: '🎯' },
  { value: 3000, suffix: '+', label: 'Students Participated', icon: '👨‍🎓' },
  { value: 75, suffix: '+', label: 'Awards & Recognitions', icon: '🏆' },
  { value: 50, suffix: '+', label: 'Expert Guest Speakers', icon: '🎤' },
];

