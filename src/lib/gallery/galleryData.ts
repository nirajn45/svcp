// ─── Gallery Facilities Data ───────────────────────────────────────────────────
// Central data file for all 18 SVCP gallery facilities.
// DO NOT hard-code image paths here — images are discovered at runtime by galleryImageUtils.ts.
// DO NOT import from activitiesdata.ts or Activity types.

import type { GalleryFacility } from './types';

export const GALLERY_FACILITIES: GalleryFacility[] = [
  {
    name: 'Campus Building',
    slug: 'campus-building',
    imageDirectory: '/gallery/campus-building',
    description:
      'The main campus building of Swami Vivekanand College of Pharmacy, designed to provide a modern and stimulating academic environment.',
  },
  {
    name: 'Library',
    slug: 'library',
    imageDirectory: '/gallery/library',
    description:
      'A well-stocked library with an extensive collection of pharmacy textbooks, journals, research publications, and digital resources.',
  },
  {
    name: 'Auditorium',
    slug: 'auditorium',
    imageDirectory: '/gallery/auditorium',
    description:
      'A spacious auditorium equipped with modern audio-visual facilities, hosting seminars, conferences, cultural events, and convocations.',
  },
  {
    name: 'Yoga & Meditation Hall',
    slug: 'yoga-meditation-hall',
    imageDirectory: '/gallery/yoga-meditation-hall',
    description:
      'A dedicated hall for yoga and meditation, promoting holistic well-being and mental wellness among students and staff.',
  },
  {
    name: 'Football Ground',
    slug: 'football-ground',
    imageDirectory: '/gallery/football-ground',
    description:
      'A full-size football ground where students participate in inter-college tournaments and regular sporting activities.',
  },
  {
    name: 'Hockey Ground',
    slug: 'hockey-ground',
    imageDirectory: '/gallery/hockey-ground',
    description:
      'A dedicated hockey ground that encourages sportsmanship and physical fitness among SVCP students.',
  },
  {
    name: 'Kabaddi Court',
    slug: 'kabaddi-court',
    imageDirectory: '/gallery/kabaddi-court',
    description:
      'A standard kabaddi court fostering traditional Indian sports culture and team spirit.',
  },
  {
    name: 'Gymnasium',
    slug: 'gymnasium',
    imageDirectory: '/gallery/gymnasium',
    description:
      'A fully-equipped gymnasium with modern fitness equipment, supporting the physical health and fitness of students and faculty.',
  },
  {
    name: 'Synthetic Basketball Court',
    slug: 'synthetic-basketball-court',
    imageDirectory: '/gallery/synthetic-basketball-court',
    description:
      'A high-quality synthetic basketball court providing a safe and professional playing surface for students.',
  },
  {
    name: 'Synthetic Lawn Tennis Court',
    slug: 'synthetic-lawn-tennis-court',
    imageDirectory: '/gallery/synthetic-lawn-tennis-court',
    description:
      'A well-maintained synthetic lawn tennis court for recreational play and competitive training.',
  },
  {
    name: 'Volleyball Court',
    slug: 'volleyball-court',
    imageDirectory: '/gallery/volleyball-court',
    description:
      'A regulation-size volleyball court where students enjoy regular matches and inter-college competitions.',
  },
  {
    name: 'Indoor Badminton Court',
    slug: 'indoor-badminton-court',
    imageDirectory: '/gallery/indoor-badminton-court',
    description:
      'A covered indoor badminton court ensuring year-round play regardless of weather conditions.',
  },
  {
    name: 'Girls Common Room',
    slug: 'girls-common-room',
    imageDirectory: '/gallery/girls-common-room',
    description:
      'A comfortable and secure common room exclusively for female students, providing a relaxing space within the campus.',
  },
  {
    name: 'Boys Common Room',
    slug: 'boys-common-room',
    imageDirectory: '/gallery/boys-common-room',
    description:
      'A dedicated common room for male students, equipped with seating and recreational amenities.',
  },
  {
    name: 'Medical Room',
    slug: 'medical-room',
    imageDirectory: '/gallery/medical-room',
    description:
      'An on-campus medical room staffed to handle minor health emergencies and routine health checks for students and staff.',
  },
  {
    name: 'Counseling Room',
    slug: 'counseling-room',
    imageDirectory: '/gallery/counseling-room',
    description:
      'A private counseling room where trained counselors provide academic, personal, and career guidance to students.',
  },
  {
    name: 'Green Campus',
    slug: 'green-campus',
    imageDirectory: '/gallery/green-campus',
    description:
      'Our lush green campus reflects our commitment to an eco-friendly environment with landscaped gardens and tree-lined pathways.',
  },
  {
    name: 'ATM Facility',
    slug: 'atm-facility',
    imageDirectory: '/gallery/atm-facility',
    description:
      'An on-campus ATM facility ensuring convenient banking access for students, staff, and visitors.',
  },
];

/** Helper: find a facility by slug */
export function getFacilityBySlug(slug: string): GalleryFacility | undefined {
  return GALLERY_FACILITIES.find((f) => f.slug === slug);
}
