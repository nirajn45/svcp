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
    location: 'Auditorium',
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
    location: 'Auditorium',
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
    location: 'Sports Ground',
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
    location: 'College Ground',
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
    location: 'College Ground',
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
    location: 'Auditorium',
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
    location: 'College Ground',
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
    location: 'Auditorium',
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
    location: 'Seminar Hall',
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
    location: 'Auditorium',
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
    location: 'Auditorium',
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
    location: 'College Ground',
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
    location: 'College Ground',
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
    location: 'Auditorium',
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
    location: 'Auditorium',
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
    location: 'Auditorium & College Ground',
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
    location: 'Campus',
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
    location: 'Auditorium ',
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
    location: 'Auditorium',
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
    location: 'College Ground',
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
    location: 'Auditorium',
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
// 2. CURRICULAR & CO-CURRICULAR ACTIVITIES (1 Activity)
// ─────────────────────────────────────────────────────────────────────────────
const curricularActivities: Activity[] = [
  {
    id: 'cc-001',
    slug: 'annual-research-award-recognition-ceremony',
    title: 'Annual Research Award & Recognition Ceremony',
    shortDescription:
      'Annual ceremony recognising and honouring outstanding research contributions by students and faculty.',
    description:
      'The Annual Research Award & Recognition Ceremony at SVCP celebrates the dedication and achievements of students and faculty in pharmaceutical research. The event honours recipients of Best Research Paper, Best Poster, Best Project, and Special Jury awards across all pharmacy disciplines. The ceremony motivates participants to pursue research excellence and reinforces the institution\'s commitment to advancing pharmaceutical knowledge.',
    date: '2026-05-29',
    year: 2026,
    location: 'Confrance Hall',
    category: 'Curricular & Co-curricular Activities',
    categorySlug: 'curricular',
    image: img('1540575467063-178a50c2df87'),
    gallery: gallery(
      '1503428593586-e225b39bddfe',
      '1475721027785-f74eccf877e2',
      '1543269664-56d93c1b41a6',
      '1524178232363-1fb2b075b655'
    ),
    objectives: [
      'Recognise and reward outstanding research contributions by students and faculty',
      'Motivate the academic community to pursue research excellence',
      'Celebrate advances in pharmaceutical sciences at SVCP',
      'Create a culture of research appreciation and healthy competition',
    ],
    highlights: [
      'Awards across multiple research categories',
      'Recognition of best research papers and posters',
      'Special jury awards for innovative pharmaceutical research',
    ],
    tags: ['research', 'award', 'recognition', 'ceremony', '2026'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. NSS ACTIVITIES  
// ─────────────────────────────────────────────────────────────────────────────
const nssActivities: Activity[] = [];

// ─────────────────────────────────────────────────────────────────────────────
// 4. NCC ACTIVITIES  
// ─────────────────────────────────────────────────────────────────────────────
const nccActivities: Activity[] = [];

// ─────────────────────────────────────────────────────────────────────────────
// 5. OUTREACH ACTIVITIES (2 Activities)
// ─────────────────────────────────────────────────────────────────────────────
const outreachActivities: Activity[] = [
  {
    id: 'oa-001',
    slug: 'innovation-entrepreneurship-outreach-program-in-schools',
    title: 'Innovation & Entrepreneurship Outreach Program in Schools',
    shortDescription:
      'SVCP faculty and students deliver innovation and entrepreneurship awareness sessions in schools.',
    description:
      'The Innovation & Entrepreneurship Outreach Program in Schools brings SVCP students and faculty to nearby schools to deliver engaging sessions on scientific innovation, entrepreneurial thinking, and pharmacy-based career opportunities. Through interactive presentations, science demonstrations, and success-story sharing, the programme inspires young school students to think creatively about science and its applications in healthcare and business.',
    date: '2026-02-20',
    year: 2026,
    location: 'Schools near Banur and Rajpura',
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
      'Raise awareness about innovation and entrepreneurship among school students',
      'Inspire young learners to consider science and pharmacy careers',
      'Share real-world examples of pharmaceutical innovation success stories',
      'Build SVCP\'s outreach presence in the surrounding school community',
    ],
    highlights: [
      'Interactive innovation and science sessions in schools',
      'Pharmacy career awareness and guidance',
      'Student-led presentations and science demonstrations',
    ],
    tags: ['outreach', 'schools', 'innovation', 'entrepreneurship', '2026'],
  },
  {
    id: 'oa-002',
    slug: 'outreach-rational-use-of-medicine',
    title: 'Outreach Activity on Rational Use of Medicine',
    shortDescription:
      'Community outreach programme educating the public on safe, rational, and responsible medicine use.',
    description:
      'This outreach initiative by SVCP aims to educate communities about the rational use of medicines. Pharmacy students and faculty conducted interactive sessions in community settings, addressing key topics including antibiotic resistance, safe self-medication practices, proper medicine storage, reading prescription labels, and the importance of completing prescribed courses. Bilingual educational materials were distributed to ensure broad community reach.',
    date: '2026-02-24',
    year: 2026,
    location: 'Changeran Village, Banur and Rajpura',
    category: 'Outreach Activities',
    categorySlug: 'outreach',
    image: img('1582213782179-e0d53f98f2ca'),
    gallery: gallery(
      '1559027615-cd4628902d4a',
      '1593113598332-cd288d649433',
      '1488521787783-5952f31e17eb',
      '1469571486292-0ba58a3f068b'
    ),
    objectives: [
      'Educate communities on the rational and safe use of medicines',
      'Raise awareness about antibiotic resistance and self-medication risks',
      'Promote responsible prescription adherence and medicine storage',
      'Strengthen community health literacy through pharmacy outreach',
    ],
    highlights: [
      'Interactive community sessions on medicine use',
      'Bilingual educational materials distributed',
      'Awareness on antibiotic stewardship',
    ],
    tags: ['rational medicine', 'outreach', 'community', 'health', '2026'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 6. NATIONAL / INTERNATIONAL DAY CELEBRATIONS (11 Activities)
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
    date: '2025-12-02',
    year: 2025,
    location: 'Pharmacy Block',
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
    tags: ['pollution control', 'environment', 'national day', 'sustainability', '2025'],
  },
  {
    id: 'nd-002',
    slug: 'national-energy-conservation-day',
    title: 'National Energy Conservation Day (India)',
    shortDescription:
      'Awareness programme on energy conservation, efficiency, and sustainable pharmacy practices.',
    description:
      'Observed on December 14th each year, National Energy Conservation Day at SVCP raises awareness about the importance of responsible energy use. The event features expert talks, poster and slogan competitions, and pledges for adopting energy-efficient practices in laboratories, offices, and daily life. Students explore how energy conservation principles apply to pharmaceutical manufacturing and research operations.',
    date: '2025-12-14',
    year: 2025,
    location: 'Pharmacy Block',
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
      'Create awareness about energy conservation and its importance',
      'Promote energy-efficient practices in academic and laboratory settings',
      'Highlight the role of sustainable energy in pharmaceutical manufacturing',
      'Inspire students to adopt responsible energy use habits',
    ],
    highlights: [
      'Expert talk on energy conservation in pharma manufacturing',
      'Poster and slogan competition on energy efficiency',
      'Campus energy conservation pledge ceremony',
    ],
    tags: ['energy conservation', 'national day', 'sustainability', '2025'],
  },
  {
    id: 'nd-003',
    slug: 'national-youth-day',
    title: 'National Youth Day',
    shortDescription:
      'Celebration of the birth anniversary of Swami Vivekananda, inspiring youth to serve nation and society.',
    description:
      'National Youth Day, observed on January 12th to commemorate the birth anniversary of Swami Vivekananda, is celebrated at SVCP with talks, cultural events, and youth empowerment activities. The day inspires students to draw from Swami Vivekananda\'s teachings on self-discipline, service, and nation-building as they prepare to become pharmacy professionals serving the community.',
    date: '2026-01-12',
    year: 2026,
    location: 'Unique Lab , C Block',
    category: 'National / International Day Celebrations',
    categorySlug: 'national-days',
    image: img('1532375810709-75b1da00537c'),
    gallery: gallery(
      '1486325212027-8081e485255e',
      '1540575467063-178a50c2df87',
      '1503428593586-e225b39bddfe',
      '1514525253161-7a46d19cd819'
    ),
    objectives: [
      'Commemorate the birth anniversary of Swami Vivekananda',
      'Inspire youth through the teachings of service, discipline, and knowledge',
      'Motivate students to contribute positively to society',
      'Foster a spirit of national pride and community service',
    ],
    highlights: [
      'Inspirational talks and addresses on youth empowerment',
      'Cultural programme themed on Swami Vivekananda\'s teachings',
      'Youth pledge ceremony and community service commitment',
    ],
    tags: ['national youth day', 'Vivekananda', 'youth', 'national day', '2026'],
  },
  {
    id: 'nd-004',
    slug: 'national-startup-day',
    title: 'National Startup Day',
    shortDescription:
      'Celebration of entrepreneurship and the startup ecosystem, inspiring pharmacy students to innovate.',
    description:
      'National Startup Day, observed on January 16th, is celebrated at SVCP to recognise the transformative role of startups in India\'s economy and healthcare ecosystem. The event features talks by successful entrepreneurs, an exhibition of student startup ideas, and awareness sessions on government support schemes for startups. The day motivates pharmacy students to channel their expertise into innovative entrepreneurial ventures.',
    date: '2026-01-16',
    year: 2026,
    location: 'Seminar Hall',
    category: 'National / International Day Celebrations',
    categorySlug: 'national-days',
    image: img('1524178232363-1fb2b075b655'),
    gallery: gallery(
      '1503428593586-e225b39bddfe',
      '1475721027785-f74eccf877e2',
      '1540575467063-178a50c2df87',
      '1543269664-56d93c1b41a6'
    ),
    objectives: [
      'Celebrate India\'s startup ecosystem and entrepreneurial culture',
      'Inspire pharmacy students to pursue innovation and entrepreneurship',
      'Showcase student startup ideas and innovations',
      'Raise awareness about government startup support schemes',
    ],
    highlights: [
      'Startup idea exhibition by student teams',
      'Talk on government support for pharma startups',
      'Interactive panel discussion on pharmacy entrepreneurship',
    ],
    tags: ['startup day', 'entrepreneurship', 'national day', 'innovation', '2026'],
  },
  {
    id: 'nd-005',
    slug: 'republic-day',
    title: 'Republic Day',
    shortDescription:
      'Patriotic celebration with flag hoisting, NCC parade, cultural performances, and speeches.',
    description:
      "Republic Day is one of SVCP's most significant national celebrations. The college organises a grand flag-hoisting ceremony attended by the entire institution — students, faculty, staff, and guests. The NCC cadets provide a guard of honour, patriotic songs fill the air, and speeches by student representatives and faculty members inspire civic pride. Cultural performances themed on India's constitutional values follow the formal ceremony.",
    date: '2026-01-26',
    year: 2026,
    location: 'College Ground',
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
    tags: ['republic day', 'national day', 'patriotism', 'NCC', '2026'],
  },
  {
    id: 'nd-006',
    slug: 'human-rights-day',
    title: 'Expert Lecture on Human Rights Day',
    shortDescription:
      'Expert lecture on human rights, healthcare equity, and the ethical responsibilities of pharmacists.',
    description:
      'On International Human Rights Day, December 10th, SVCP organises an expert lecture exploring the intersection of human rights and healthcare. The lecture addresses topics including the right to health, equitable access to medicines, ethical drug pricing, and the role of pharmacists in upholding patient rights. Students gain a broader understanding of how pharmacy practice must be grounded in principles of human dignity and social justice.',
    date: '2025-12-10',
    year: 2025,
    location: 'Seminar Hall',
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
      'Raise awareness about human rights in the context of healthcare and pharmacy',
      'Discuss equitable access to medicines as a fundamental right',
      'Explore the ethical responsibilities of pharmacists in upholding patient rights',
      'Inspire students to commit to socially responsible pharmacy practice',
    ],
    highlights: [
      'Expert lecture on human rights and healthcare equity',
      'Discussion on ethical drug access and pricing',
      'Student reflection on pharmacist roles in rights-based care',
    ],
    tags: ['human rights', 'healthcare equity', 'national day', '2025'],
  },
  {
    id: 'nd-007',
    slug: 'international-womens-day',
    title: "International Women's Day",
    shortDescription:
      'Celebration of women achievers in pharmacy and healthcare with talks and awards.',
    description:
      "International Women's Day at SVCP celebrates the remarkable contributions of women to pharmacy, healthcare, and science. The programme features inspirational talks by women leaders from pharmaceutical companies and academia, panel discussions on challenges facing women in STEM, and a felicitation ceremony honouring outstanding women students and faculty members. The event reinforces SVCP's commitment to gender equity in pharmaceutical education.",
    date: '2026-03-08',
    year: 2026,
    location: 'Auditorium',
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
    tags: ["women's day", 'gender equality', 'STEM', 'national day', '2026'],
  },
  {
    id: 'nd-008',
    slug: 'world-creativity-and-innovation-day',
    title: 'World Creativity and Innovation Day',
    shortDescription:
      'Celebration of creativity and innovation encouraging pharmacy students to think beyond conventional boundaries.',
    description:
      'World Creativity and Innovation Day, observed on April 21st, is celebrated at SVCP to encourage students to embrace creative thinking and innovative problem-solving in pharmaceutical sciences. The event features ideation workshops, innovation challenges, creative presentations, and talks by innovators in pharmacy and healthcare. The day champions the spirit of curiosity and out-of-the-box thinking as essential tools for pharmaceutical advancement.',
    date: '2026-04-21',
    year: 2026,
    location: 'Pharmacy Block',
    category: 'National / International Day Celebrations',
    categorySlug: 'national-days',
    image: img('1524178232363-1fb2b075b655'),
    gallery: gallery(
      '1503428593586-e225b39bddfe',
      '1543269664-56d93c1b41a6',
      '1475721027785-f74eccf877e2',
      '1540575467063-178a50c2df87'
    ),
    objectives: [
      'Celebrate creativity and innovation as drivers of pharmaceutical advancement',
      'Encourage students to think creatively about pharmacy challenges',
      'Organise innovation challenges and creative activities',
      'Build a campus culture of intellectual curiosity and invention',
    ],
    highlights: [
      'Innovation challenge and ideation sessions',
      'Creative presentations by student teams',
      'Talk on pharmacy innovations changing healthcare',
    ],
    tags: ['creativity', 'innovation', 'national day', '2026'],
  },
  {
    id: 'nd-009',
    slug: 'world-intellectual-property-day',
    title: 'World Intellectual Property Day',
    shortDescription:
      'Awareness event on intellectual property rights and their importance in pharmaceutical innovation.',
    description:
      'Observed annually on April 26th, World Intellectual Property Day at SVCP highlights the significance of patents, trademarks, and copyrights in driving pharmaceutical innovation and protecting research investments. The event features expert talks on IP strategy, patent search demonstrations, and student quizzes on IP concepts. Students gain a deeper appreciation of how robust IP frameworks incentivise pharmaceutical research and development.',
    date: '2026-04-26',
    year: 2026,
    location: 'Pharmacy Block',
    category: 'National / International Day Celebrations',
    categorySlug: 'national-days',
    image: img('1503428593586-e225b39bddfe'),
    gallery: gallery(
      '1540575467063-178a50c2df87',
      '1475721027785-f74eccf877e2',
      '1543269664-56d93c1b41a6',
      '1524178232363-1fb2b075b655'
    ),
    objectives: [
      'Raise awareness about intellectual property rights in pharmaceutical sciences',
      'Educate students on patent filing and IP protection strategies',
      'Celebrate the role of IP in encouraging pharmaceutical innovation',
      'Promote IP literacy across the pharmacy academic community',
    ],
    highlights: [
      'Expert talk on pharmaceutical IP strategy',
      'Live patent search demonstration',
      'Student IP quiz competition',
    ],
    tags: ['intellectual property', 'patents', 'national day', '2026'],
  },
  {
    id: 'nd-010',
    slug: 'national-technology-day',
    title: 'National Technology Day',
    shortDescription:
      'Celebration of India\'s technological achievements and their applications in pharmaceutical sciences.',
    description:
      'National Technology Day, observed on May 11th to commemorate India\'s Pokhran nuclear test success in 1998, is celebrated at SVCP to honour the nation\'s scientific and technological achievements. The event features talks on emerging technologies in pharmacy — including artificial intelligence in drug discovery, nanotechnology, and digital health — and encourages students to embrace technology as a transformative tool in pharmaceutical practice.',
    date: '2026-05-11',
    year: 2026,
    location: 'Seminar Hall',
    category: 'National / International Day Celebrations',
    categorySlug: 'national-days',
    image: img('1581091226825-a6a2a5aee158'),
    gallery: gallery(
      '1565688534245-05d6b5be184a',
      '1540575467063-178a50c2df87',
      '1503428593586-e225b39bddfe',
      '1543269664-56d93c1b41a6'
    ),
    objectives: [
      'Celebrate India\'s scientific and technological achievements',
      'Highlight emerging technologies transforming pharmaceutical sciences',
      'Inspire students to engage with technology-driven pharma innovation',
      'Foster interest in AI, nanotechnology, and digital health applications',
    ],
    highlights: [
      'Talk on emerging pharmaceutical technologies',
      'Student technology innovation showcase',
      'Discussion on AI and digital health in pharmacy',
    ],
    tags: ['technology', 'national day', 'innovation', 'pharma technology', '2026'],
  },
  {
    id: 'nd-011',
    slug: 'national-pharmacy-education-day',
    title: 'National Pharmacy Education Day',
    shortDescription:
      'Day dedicated to celebrating pharmacy education, student achievements, and the pharmacy profession.',
    description:
      'National Pharmacy Education Day at SVCP is a celebration of the profession and its educators. The day features public lectures by pharmacy alumni and industry veterans, awards for academic excellence, and an exhibition of student research projects. The event inspires students to take pride in their chosen profession and motivates them to strive for excellence. A special programme on the evolving role of the pharmacist in India\u2019s healthcare ecosystem is a highlight.',
    date: '2026-03-06',
    year: 2026,
    location: 'Seminar Hall',
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
    tags: ['pharmacy', 'education', 'national day', 'celebration', '2026'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 7. INDUSTRIAL VISITS (2 Activities)
// ─────────────────────────────────────────────────────────────────────────────
const industrialVisitsActivities: Activity[] = [
  {
    id: 'iv-001',
    slug: 'preincubation-units-visit',
    title: 'Field/Exposure Visit to Preincubation Units',
    shortDescription:
      'Students explore cutting-edge prototyping tools and innovation infrastructure at preincubation units and AICTE Idea Labs.',
    description:
      'SVCP students visited advanced preincubation units and an AICTE Idea Lab at a partnering institution to explore state-of-the-art innovation infrastructure. The visit exposed students to 3D printing, laser cutting, IoT prototyping kits, robotics, and biomedical device development workstations. Faculty facilitators led discussions on how these technologies intersect with pharmaceutical and clinical innovation. Students returned inspired to apply maker-culture thinking to pharmaceutical challenges.',
    date: '2026-02-23',
    year: 2026,
    location: 'Preincubation Units ',
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
    tags: ['AICTE', 'Idea Lab', 'innovation', '3D printing', 'technology', '2026'],
  },
  {
    id: 'iv-002',
    slug: 'incubation-patent-tech-transfer-visit',
    title: 'Field/Exposure Visit to Incubation Units / Patent Facilitation / Tech Transfer Centres',
    shortDescription:
      'Students visit a pharma-focused incubation centre and tech transfer facility to learn about the startup ecosystem.',
    description:
      'Students from SVCP\'s entrepreneurship cell visited a pharmaceutical incubation centre, patent facilitation cell, and technology transfer centre to get up-close exposure to the startup ecosystem. They interacted with resident startups working on drug delivery systems, nutraceuticals, and digital health solutions. The incubation centre\'s management team explained patent filing assistance, technology transfer processes, funding support available, and mentorship structure.',
    date: '2026-03-30',
    year: 2026,
    location: 'Incubation Centre, Chandigarh',
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
      'Expose students to pharmaceutical startup, incubation, and tech transfer ecosystems',
      'Understand patent facilitation and technology transfer processes',
      'Network with pharmaceutical startup founders and IP facilitators',
      'Motivate students to develop and submit their own startup ideas',
    ],
    highlights: [
      'Interaction with 5 pharma startups in residence',
      'Patent facilitation process briefing by IP experts',
      'Discussion on DPIIT recognition and startup India benefits',
    ],
    tags: ['incubation', 'startup', 'patent facilitation', 'tech transfer', 'visit', '2026'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 8. SEMINARS / WORKSHOPS / CONFERENCES / FDPs (10 Activities)
// ─────────────────────────────────────────────────────────────────────────────
const seminarsActivities: Activity[] = [
  {
    id: 'sw-001',
    slug: 'session-on-achieving-problem-solution-fit',
    title: 'Session on Achieving Problem-Solution Fit',
    shortDescription:
      'Expert-led session helping students identify real-world problems and craft validated solutions.',
    description:
      'This expert-led interactive session guided students through the concept of Problem–Solution Fit — a critical step in the startup and innovation journey. Participants learned frameworks for identifying genuine pain points, mapping user journeys, and validating whether a proposed solution truly addresses the identified problem. Real pharmaceutical and healthcare case studies were used to ground the concepts in the context most relevant to SVCP students.',
    date: '2025-11-13',
    year: 2025,
    location: 'Seminar Hall',
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
    tags: ['problem-solution', 'startup', 'innovation', 'workshop', '2025'],
  },
  {
    id: 'sw-002',
    slug: 'design-thinking-workshop',
    title: 'Workshop on Design Thinking, Critical Thinking & Innovation Design',
    shortDescription:
      'An integrated workshop combining design thinking, critical thinking, and innovation design for pharmacy students.',
    description:
      'This comprehensive workshop introduced pharmacy students to the interconnected disciplines of Design Thinking, Critical Thinking, and Innovation Design. Participants explored human-centred problem solving, evidence-based reasoning, and structured innovation frameworks, applying these to pharmaceutical and healthcare challenges. The workshop employed interactive exercises, group activities, and case studies to build well-rounded innovation capabilities.',
    date: '2026-01-19',
    year: 2026,
    location: 'Seminar Hall',
    category: 'Seminars / Workshops / Conferences / FDPs',
    categorySlug: 'seminars',
    image: img('1543269664-56d93c1b41a6'),
    gallery: gallery(
      '1503428593586-e225b39bddfe',
      '1475721027785-f74eccf877e2',
      '1540575467063-178a50c2df87',
      '1524178232363-1fb2b075b655'
    ),
    objectives: [
      'Integrate design thinking, critical thinking, and innovation design methodologies',
      'Develop human-centred problem-solving skills in pharmacy students',
      'Build practical innovation and reasoning capabilities',
      'Apply interdisciplinary thinking to pharmaceutical challenges',
    ],
    highlights: [
      'Integrated three-discipline workshop format',
      'Interactive group innovation exercises',
      'Pharmaceutical case studies and prototype activities',
    ],
    tags: ['design thinking', 'critical thinking', 'innovation', 'workshop', '2026'],
  },
  {
    id: 'sw-003',
    slug: 'effective-sales-marketing-strategies',
    title: 'Workshop: Effective Sales and Marketing Strategies for Start-ups',
    shortDescription:
      'Pharmaceutical marketing workshop covering product positioning, sales techniques, and MR skills.',
    description:
      "This industry-oriented workshop prepared students for careers in pharmaceutical sales and marketing for startups. Topics covered included product positioning and detailing, medical representative (MR) skills, key account management, digital marketing for pharma, and regulatory constraints on pharmaceutical promotion. Guest speakers from leading pharmaceutical companies shared real-world experiences.",
    date: '2026-02-18',
    year: 2026,
    location: 'Seminar Hall',
    category: 'Seminars / Workshops / Conferences / FDPs',
    categorySlug: 'seminars',
    image: img('1517457373958-b7bdd4587205'),
    gallery: gallery(
      '1540575467063-178a50c2df87',
      '1503428593586-e225b39bddfe',
      '1475721027785-f74eccf877e2',
      '1524178232363-1fb2b075b655'
    ),
    objectives: [
      'Introduce pharmaceutical marketing principles and regulations for startups',
      'Develop product detailing and MR communication skills',
      'Expose students to digital marketing in healthcare',
      'Connect students with pharmaceutical industry recruiters',
    ],
    highlights: [
      'Guest speakers from leading pharma startups and companies',
      'Mock MR detailing exercise and feedback',
      'Pharmaceutical marketing case study competition',
    ],
    tags: ['marketing', 'sales', 'pharmaceutical', 'startups', '2026'],
  },
  {
    id: 'sw-004',
    slug: 'annual-research-conclave',
    title: 'Annual Research Conclave/Symposium',
    shortDescription:
      `SVCP's flagship research event showcasing student and faculty research across pharmaceutical sciences.`,
    description:
      "SVCP's Annual Research Conclave/Symposium brings together students, faculty, and invited researchers to share the latest research in pharmaceutical sciences. The event features oral presentations, poster sessions, keynote addresses by distinguished scientists, and a special session on emerging research trends. Awards are presented for the best student research projects, and the conclave serves as a catalyst for cross-institutional research collaborations.",
    date: '2026-01-28',
    year: 2026,
    location: 'Pharmacy Lab ',
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
      'Keynote on drug delivery innovations',
      'Best Paper Award and Best Poster Award',
      'Cross-institutional research discussions',
    ],
    tags: ['research', 'conclave', 'symposium', 'pharmacy', '2026'],
  },
  {
    id: 'sw-005',
    slug: 'seed-grant-proposal-workshop',
    title: 'Sponsored / Seed Grant Proposal Writing Workshops',
    shortDescription:
      'Hands-on workshop guiding students and faculty in applying for sponsored research and seed grants.',
    description:
      'The Sponsored / Seed Grant Proposal Writing Workshop was designed for student innovators, researchers, and faculty seeking funding to develop their pharmaceutical ideas. The workshop demystified the grant application process, covered eligibility criteria for government incubation and MSME schemes, and guided participants in preparing compelling research summaries, budgets, and project proposals.',
    date: '2026-01-22',
    year: 2026,
    location: 'Pharmacy Block',
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
      'Guide participants through sponsored research and seed grant application ecosystems',
      'Build capability to access government and private startup funding',
      'Develop research proposals and pitch presentations',
      'Connect participants with active incubation support networks',
    ],
    highlights: [
      '25 student and faculty teams participated',
      'Grant success stories shared by experienced researchers',
      'Mock review panel for proposals',
    ],
    tags: ['seed grant', 'proposals', 'funding', 'research', 'workshop', '2026'],
  },
  {
    id: 'sw-006',
    slug: 'product-market-fit-workshop',
    title: 'Workshop on Product-Market Fit; Prototype/Process Design and MVP Development',
    shortDescription:
      'Practical workshop guiding students from validated ideas to minimum viable products for the pharmaceutical market.',
    description:
      'This practical workshop guided pharmacy students and aspiring entrepreneurs through the journey from product concept to Minimum Viable Product (MVP). Participants learned frameworks for assessing Product-Market Fit, designing pharmaceutical processes and prototypes, and structuring MVP development plans. Real-world pharma product development scenarios were used to illustrate key concepts, and student teams worked collaboratively to produce actionable MVP roadmaps.',
    date: '2026-03-17',
    year: 2026,
    location: 'Seminar Hall',
    category: 'Seminars / Workshops / Conferences / FDPs',
    categorySlug: 'seminars',
    image: img('1524178232363-1fb2b075b655'),
    gallery: gallery(
      '1503428593586-e225b39bddfe',
      '1475721027785-f74eccf877e2',
      '1540575467063-178a50c2df87',
      '1543269664-56d93c1b41a6'
    ),
    objectives: [
      'Teach students to validate product-market fit for pharmaceutical innovations',
      'Guide participants through prototype and process design principles',
      'Develop hands-on MVP planning and development skills',
      'Prepare pharmacy students for innovation-driven entrepreneurship',
    ],
    highlights: [
      'Product-Market Fit validation exercises',
      'Prototype design using pharmaceutical case studies',
      'Team-based MVP roadmap development',
    ],
    tags: ['product-market fit', 'MVP', 'prototype', 'innovation', 'workshop', '2026'],
  },
  {
    id: 'sw-007',
    slug: 'startup-legal-ethical-steps',
    title: 'Session on Start-up Legal & Ethical Steps',
    shortDescription:
      'An expert-led session covering company registration, drug licensing, and ethical responsibilities for pharma startups.',
    description:
      'This highly practical session guided pharmacy students and aspiring entrepreneurs through the legal and regulatory landscape of starting a pharmaceutical business in India. Topics included company registration under MCA, Schedule M licensing for drug manufacturing, FDA approval process, FSSAI registration for nutraceuticals, Startup India registration, DPIIT recognition, and the ethical responsibilities of pharmaceutical entrepreneurs.',
    date: '2026-04-02',
    year: 2026,
    location: 'Pharmacy Block',
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
      'Step-by-step DPIIT registration walkthrough',
      'Case study on a successful pharma startup compliance journey',
    ],
    tags: ['startup', 'legal', 'ethics', 'pharma', 'regulation', '2026'],
  },
  {
    id: 'sw-008',
    slug: 'capital-finance-management-workshop',
    title: 'Workshop on Raising Capital and Finance Management for Start-ups',
    shortDescription:
      'Workshop equipping pharmacy students with practical knowledge on funding sources and financial management for startups.',
    description:
      'This workshop equipped pharmacy students and aspiring entrepreneurs with the knowledge and skills needed to raise capital and manage finances for early-stage pharmaceutical startups. Topics covered included equity vs debt funding, venture capital, angel investors, government grants, bank loans, financial modelling basics, and cash flow management. Participants engaged in interactive exercises and case studies designed around pharmaceutical startup scenarios.',
    date: '2026-04-15',
    year: 2026,
    location: 'Pharmacy Block',
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
      'Introduce students to funding options available for pharmaceutical startups',
      'Develop practical financial management skills for early-stage ventures',
      'Explain venture capital, angel investing, and government grant mechanisms',
      'Build confidence in financial planning and investor communication',
    ],
    highlights: [
      'Overview of startup funding landscape in India',
      'Financial modelling exercises for pharma ventures',
      'Interactive case study on successful pharma startup fundraising',
    ],
    tags: ['capital', 'finance', 'startup', 'fundraising', 'workshop', '2026'],
  },
  {
    id: 'sw-009',
    slug: 'ipr-management-workshop',
    title: 'Workshop: Protecting IPR and IP Management for Start-ups',
    shortDescription:
      'Comprehensive workshop on intellectual property rights protection and IP management for pharma startups.',
    description:
      'This comprehensive workshop on Intellectual Property Rights (IPR) equipped pharmacy students and faculty with knowledge of patent filing, trademark registration, trade secrets, and copyright protection as they apply to pharmaceutical innovations and startups. The session walked participants through patent searches, the Indian Patent Office filing process, and real-world case studies of pharmaceutical patent disputes and IP management strategies.',
    date: '2026-05-29',
    year: 2026,
    location: 'Seminar Hall',
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
      'Teach the process of patent filing and IP protection for startups',
      'Highlight the importance of IP management for pharmaceutical ventures',
      'Discuss major pharmaceutical patent case studies',
    ],
    highlights: [
      'Patent agent conducted interactive session',
      'Hands-on patent search demonstration',
      'IP strategy development for pharma startups',
    ],
    tags: ['IPR', 'patent', 'intellectual property', 'startups', 'workshop', '2026'],
  },
  {
    id: 'sw-010',
    slug: 'international-conference',
    title: 'International Conference',
    shortDescription:
      'International forum for pharmaceutical scientists, researchers, and students to share innovations (27/03/2026 & 28/03/2026).',
    description:
      'SVCP hosted its International Conference on Pharmaceutical Sciences (held on 27/03/2026 & 28/03/2026), bringing together researchers, academicians, and industry professionals from India and abroad. The conference featured keynote addresses, scientific sessions, panel discussions, and a startup innovation showcase. Topics ranged from novel drug delivery systems and pharmaceutical nanotechnology to regulatory affairs, pharmacoeconomics, and digital health.',
    date: '2026-03-27',
    year: 2026,
    location: 'Auditorium',
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
      'Two-day international conference schedule (27–28 March 2026)',
      'Keynote addresses by distinguished international researchers',
      'Oral and poster presentations across multiple pharmacy tracks',
    ],
    tags: ['international', 'conference', 'research', 'pharmaceutical sciences', '2026'],
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
    location: 'Campus, Banur',
    category: 'Alumni Activities',
    categorySlug: 'alumni',
    image: '/activity-images/alumni/alumni-association/listing/cover.jpeg',
    gallery: [
      '/activity-images/alumni/alumni-association/detail/gallery/1..jpeg',
      '/activity-images/alumni/alumni-association/detail/gallery/2..jpeg',
      '/activity-images/alumni/alumni-association/detail/gallery/3..jpeg',
      '/activity-images/alumni/alumni-association/detail/gallery/4..jpeg',
      '/activity-images/alumni/alumni-association/detail/gallery/5..jpeg',
      '/activity-images/alumni/alumni-association/detail/gallery/6..jpeg',
      '/activity-images/alumni/alumni-association/detail/gallery/7..jpeg',
      '/activity-images/alumni/alumni-association/detail/gallery/8..jpeg',
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
    date: '2026-03-28',
    year: 2026,
    location: 'Seminar Hall',
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
    location: 'Main Auditorium',
    category: 'Alumni Activities',
    categorySlug: 'alumni',
    image: '/activity-images/alumni/convocation/listing/cover.jpeg',
    gallery: [
      '/activity-images/alumni/convocation/detail/gallery/1..jpeg',
      '/activity-images/alumni/convocation/detail/gallery/2..jpeg',
      '/activity-images/alumni/convocation/detail/gallery/3..jpeg',
      '/activity-images/alumni/convocation/detail/gallery/4..jpeg',
      '/activity-images/alumni/convocation/detail/gallery/5..jpeg',
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
// DATE PARSING & SORTING (YEAR + DATE DESCENDING)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Robust date parser for activities:
 * Supports ISO (YYYY-MM-DD), Indian/UK (DD/MM/YYYY), Date ranges (27/03/2026 & 28/03/2026, 27–28 Mar 2026),
 * and standard date strings. Uses the start date for multi-day events.
 */
export function parseActivityDate(dateStr: string): number {
  if (!dateStr) return 0;
  const clean = dateStr.trim();

  // Range formats like "27-28 Mar 2026" or "27–28 March 2026"
  const rangeMatch = clean.match(/^(\d{1,2})\s*[-–—]\s*\d{1,2}\s+([A-Za-z]+)\s+(\d{4})/);
  if (rangeMatch) {
    const [, day, month, year] = rangeMatch;
    const d = new Date(`${month} ${day}, ${year}`);
    if (!isNaN(d.getTime())) return d.getTime();
  }

  // Multi-day formats using & or 'to' or 'and' -> take the start date
  const firstPart = clean.split(/[&]|(?:\s+to\s+)|\band\b/i)[0].trim();

  // DD/MM/YYYY or DD-MM-YYYY
  const dmyMatch = firstPart.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
  if (dmyMatch) {
    const day = parseInt(dmyMatch[1], 10);
    const month = parseInt(dmyMatch[2], 10) - 1;
    const year = parseInt(dmyMatch[3], 10);
    return new Date(year, month, day).getTime();
  }

  // YYYY-MM-DD
  const ymdMatch = firstPart.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
  if (ymdMatch) {
    const year = parseInt(ymdMatch[1], 10);
    const month = parseInt(ymdMatch[2], 10) - 1;
    const day = parseInt(ymdMatch[3], 10);
    return new Date(year, month, day).getTime();
  }

  const parsed = new Date(firstPart).getTime();
  return isNaN(parsed) ? 0 : parsed;
}

/**
 * Shared sorting utility:
 * Sorts activities strictly by:
 * 1. Year descending (2026 -> 2025 -> 2024 -> older)
 * 2. Within each year: start event date descending (newest -> oldest)
 */
export function sortActivitiesByYearAndDateDesc(activities: Activity[]): Activity[] {
  return [...activities].sort((a, b) => {
    const yearDiff = (b.year ?? 0) - (a.year ?? 0);
    if (yearDiff !== 0) return yearDiff;
    const timeA = parseActivityDate(a.date);
    const timeB = parseActivityDate(b.date);
    return timeB - timeA;
  });
}

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
    activities: sortActivitiesByYearAndDateDesc(culturalActivities),
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
    activities: sortActivitiesByYearAndDateDesc(curricularActivities),
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
    activities: sortActivitiesByYearAndDateDesc(nssActivities),
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
    activities: sortActivitiesByYearAndDateDesc(nccActivities),
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
    activities: sortActivitiesByYearAndDateDesc(outreachActivities),
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
    activities: sortActivitiesByYearAndDateDesc(alumniActivities),
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
    activities: sortActivitiesByYearAndDateDesc(nationalDaysActivities),
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
    activities: sortActivitiesByYearAndDateDesc(industrialVisitsActivities),
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
    activities: sortActivitiesByYearAndDateDesc(seminarsActivities),
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
  return sortActivitiesByYearAndDateDesc(CATEGORIES.flatMap((c) => c.activities));
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


