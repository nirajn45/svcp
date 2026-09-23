'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Images } from 'lucide-react';
import type { GalleryFacility } from '@/lib/gallery/types';

interface GalleryFacilityCardProps {
  facility: GalleryFacility;
  /**
   * URL of the first image found in public/gallery/<slug>/ (e.g. "/gallery/library/1.jpg").
   * Resolved server-side by the gallery landing page and passed as a prop.
   * When undefined/null the existing "PHOTO ALBUM" placeholder is shown.
   */
  coverImage?: string | null;
}

/**
 * Gallery facility card — matches existing SVCP card pattern:
 *   - white background, rounded-xl, shadow-md
 *   - amber top accent bar (h-1 bg-[#F59E0B])
 *   - blue heading (#0F4C81)
 *   - hover: card lifts, shadow deepens, arrow moves right, border accent
 *
 * When coverImage is supplied (first photo from public/gallery/<slug>/) it is
 * shown in the image area. When absent the styled placeholder is retained.
 */
export default function GalleryFacilityCard({
  facility,
  coverImage,
}: GalleryFacilityCardProps) {
  return (
    <Link
      href={`/gallery/${facility.slug}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C81] focus-visible:ring-offset-2 rounded-xl"
      aria-label={`View ${facility.name} photo gallery`}
    >
      <article
        className={[
          /* base */
          'relative bg-white rounded-xl overflow-hidden flex flex-col h-full',
          /* border — subtle default, vivid on hover */
          'border border-gray-200 group-hover:border-[#0F4C81]/30',
          /* shadow — lifts on hover */
          'shadow-md group-hover:shadow-xl',
          /* vertical lift */
          'transition-all duration-300 ease-out',
          'group-hover:-translate-y-1',
        ].join(' ')}
      >
        {/* ── Amber top accent bar ────────────────────────────────────── */}
        <div className="h-1 bg-[#F59E0B] w-full flex-shrink-0" aria-hidden="true" />

        {/* ── Image area ──────────────────────────────────────────────── */}
        <div
          className={[
            'relative h-48 flex-shrink-0 overflow-hidden',
            /* background shown while image loads or when placeholder is displayed */
            coverImage
              ? 'bg-gray-100'
              : 'bg-gradient-to-br from-[#0F4C81]/5 to-[#0F4C81]/10 flex flex-col items-center justify-center gap-2',
            /* gentle scale on hover */
            'transition-transform duration-300 ease-out group-hover:scale-[1.02]',
          ].join(' ')}
        >
          {coverImage ? (
            /* ── Real cover photo ────────────────────────────────────── */
            <Image
              src={coverImage}
              alt={`${facility.name} preview`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
          ) : (
            /* ── Placeholder (no images yet) ─────────────────────────── */
            <>
              {/* Decorative grid pattern */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, transparent, transparent 23px, #0F4C81 23px, #0F4C81 24px), repeating-linear-gradient(90deg, transparent, transparent 23px, #0F4C81 23px, #0F4C81 24px)',
                  backgroundSize: '24px 24px',
                }}
                aria-hidden="true"
              />
              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-white/80 shadow-sm flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                <Images
                  size={26}
                  className="text-[#0F4C81]/60 group-hover:text-[#0F4C81] transition-colors duration-300"
                  aria-hidden="true"
                />
              </div>
              <p className="relative z-10 text-xs text-[#0F4C81]/50 font-medium tracking-wide uppercase group-hover:text-[#0F4C81]/70 transition-colors duration-300">
                Photo Album
              </p>
            </>
          )}
        </div>

        {/* ── Card body ───────────────────────────────────────────────── */}
        <div className="p-5 flex flex-col flex-1">
          {/* Facility name */}
          <h3
            className={[
              'text-base font-bold leading-snug mb-3',
              'text-[#0F4C81] group-hover:text-[#0F4C81]',
              'transition-colors duration-200',
              /* prevent overflow on long names like "Synthetic Lawn Tennis Court" */
              'break-words hyphens-auto',
            ].join(' ')}
          >
            {facility.name}
          </h3>

          {/* CTA row */}
          <div className="mt-auto flex items-center gap-2">
            <span
              className={[
                'text-sm font-bold uppercase tracking-wide',
                'text-[#0F4C81] group-hover:text-[#F59E0B]',
                'transition-colors duration-200',
              ].join(' ')}
            >
              View Gallery
            </span>
            <ArrowRight
              size={15}
              className={[
                'text-[#0F4C81] group-hover:text-[#F59E0B]',
                /* arrow slides right on hover */
                'transition-all duration-200 group-hover:translate-x-1',
              ].join(' ')}
              aria-hidden="true"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
