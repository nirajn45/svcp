// /gallery/library — Facility detail page for "Library"
//
// This static route takes priority over /gallery/[slug] in Next.js App Router.
// The previous content ("Text Coming Soon") has been replaced with the full
// facility gallery experience, consistent with all other /gallery/<slug> pages.

import type { Metadata } from 'next';
import { getFacilityBySlug } from '@/lib/gallery/galleryData';
import { getGalleryImages } from '@/lib/gallery/galleryImageUtils';
import GalleryHeroBanner from '@/components/gallery/GalleryHeroBanner';
import FacilityPhotoGrid from '@/components/gallery/FacilityPhotoGrid';

export const metadata: Metadata = {
  title: 'Library | Gallery | Swami Vivekanand College of Pharmacy',
  description:
    'View photographs of the Library at Swami Vivekanand College of Pharmacy.',
};

export default function LibraryGalleryPage() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const facility = getFacilityBySlug('library')!;
  const images = getGalleryImages('library');

  return (
    <>
      <GalleryHeroBanner
        title={facility.name}
        subtitle={facility.description}
        breadcrumbs={[
          { label: 'Gallery', href: '/gallery' },
          { label: facility.name },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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

        <FacilityPhotoGrid images={images} facilityName={facility.name} />
      </div>
    </>
  );
}
