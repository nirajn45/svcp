// Facility detail page — Server Component
// Route: /gallery/[slug]
// e.g.  /gallery/campus-building, /gallery/auditorium, etc.
//
// NOTE ON ROUTE PRIORITY (Next.js App Router):
//   Static routes (/gallery/infrastructure, /gallery/national) take priority over this
//   dynamic route, so those pages are unaffected.
//   /gallery/library was a placeholder ("Text Coming Soon") and is now handled by
//   src/app/gallery/library/page.tsx which delegates here for consistent rendering.

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getFacilityBySlug, GALLERY_FACILITIES } from '@/lib/gallery/galleryData';
import { getGalleryImages } from '@/lib/gallery/galleryImageUtils';
import GalleryHeroBanner from '@/components/gallery/GalleryHeroBanner';
import FacilityPhotoGrid from '@/components/gallery/FacilityPhotoGrid';

interface Props {
  params: Promise<{ slug: string }>;
}

/** Pre-generate paths for all 18 facilities at build time */
export function generateStaticParams() {
  return GALLERY_FACILITIES.map((f) => ({ slug: f.slug }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);
  if (!facility) return {};
  return {
    title: `${facility.name} | Gallery | Swami Vivekanand College of Pharmacy`,
    description:
      facility.description ??
      `View photographs of ${facility.name} at Swami Vivekanand College of Pharmacy.`,
  };
}

export default async function FacilityGalleryPage({ params }: Props) {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);

  if (!facility) return notFound();

  // Discover images from public/gallery/<slug>/ — returns [] when empty
  const images = getGalleryImages(slug);

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <GalleryHeroBanner
        title={facility.name}
        subtitle={facility.description}
        breadcrumbs={[
          { label: 'Gallery', href: '/gallery' },
          { label: facility.name },
        ]}
      />

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Section header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-1 h-7 bg-[#F59E0B] rounded-full flex-shrink-0" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F4C81]">
              {facility.name} — Photo Album
            </h2>
          </div>
          {images.length > 0 && (
            <p className="ml-4 text-sm text-gray-500 mt-1">
              {images.length} {images.length === 1 ? 'photograph' : 'photographs'}
            </p>
          )}
        </div>

        {/* Photo grid (with built-in empty state + lightbox) */}
        <FacilityPhotoGrid images={images} facilityName={facility.name} />
      </div>
    </>
  );
}
