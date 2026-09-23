// Gallery landing page — Server Component
// Route: /gallery
// Shows 18 facility cards in a responsive grid.
// Header and Footer are injected by src/app/layout.tsx — do NOT add them here.

import type { Metadata } from 'next';
import { GALLERY_FACILITIES } from '@/lib/gallery/galleryData';
import { getGalleryImages } from '@/lib/gallery/galleryImageUtils';
import GalleryHeroBanner from '@/components/gallery/GalleryHeroBanner';
import GalleryFacilityCard from '@/components/gallery/GalleryFacilityCard';

export const metadata: Metadata = {
  title: 'Gallery | Swami Vivekanand College of Pharmacy',
  description:
    'Explore the campus, facilities, and infrastructure of Swami Vivekanand College of Pharmacy through our photo gallery.',
};

export default function GalleryPage() {
  // Resolve the first available image for every facility on the server.
  // getGalleryImages scans public/gallery/<slug>/ using Node fs — safe here because
  // this is a Server Component. Returns [] when the folder is empty or missing.
  const facilitiesWithCovers = GALLERY_FACILITIES.map((facility) => {
    const images = getGalleryImages(facility.slug);
    return { facility, coverImage: images[0] ?? null };
  });

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <GalleryHeroBanner
        title="Gallery"
        subtitle="Explore the campus, facilities, and infrastructure of Swami Vivekanand College of Pharmacy."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F4C81] mb-3">
            Explore Our Campus &amp; Facilities
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full" aria-hidden="true" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Browse through our photo albums to get a glimpse of the state-of-the-art infrastructure
            and vibrant campus life at SVCP.
          </p>
        </div>

        {/* ── Facility cards grid ─────────────────────────────────────────── */}
        {/*
          Responsive: 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop)
          items-stretch ensures all cards in a row are equal height.
        */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Facility photo albums"
        >
          {facilitiesWithCovers.map(({ facility, coverImage }) => (
            <div key={facility.slug} role="listitem">
              <GalleryFacilityCard facility={facility} coverImage={coverImage} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

