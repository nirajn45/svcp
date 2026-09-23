'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react';

interface FacilityPhotoGridProps {
  /** Array of public image URL strings, e.g. ["/gallery/campus-building/1.jpg"] */
  images: string[];
  /** Facility name — used for aria labels and alt text */
  facilityName: string;
}

// ─── Framer variants ───────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function FacilityPhotoGrid({ images, facilityName }: FacilityPhotoGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // ── Lightbox controls ──────────────────────────────────────────────────────
  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  // ── Keyboard navigation ────────────────────────────────────────────────────
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    document.addEventListener('keydown', handleKey);
    // Lock body scroll while lightbox is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  // ── Empty state ────────────────────────────────────────────────────────────
  if (images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-[#0F4C81]/8 flex items-center justify-center mb-5">
          <Images size={36} className="text-[#0F4C81]/40" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold text-[#0F4C81] mb-2">Photos Coming Soon</h3>
        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
          Photographs for <span className="font-medium text-gray-700">{facilityName}</span> will be
          added shortly. Please check back later.
        </p>
      </div>
    );
  }

  // ── Photo grid ─────────────────────────────────────────────────────────────
  return (
    <section aria-label={`${facilityName} photo gallery`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {images.map((src, i) => (
          <motion.div
            key={src}
            variants={itemVariants}
            className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-zoom-in group shadow-sm hover:shadow-md transition-shadow duration-300"
            onClick={() => openLightbox(i)}
            role="button"
            tabIndex={0}
            aria-label={`Open ${facilityName} photo ${i + 1} of ${images.length}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
          >
            <Image
              src={src}
              alt={`${facilityName} — photo ${i + 1}`}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn
                size={26}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/92 backdrop-blur-sm"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${facilityName} lightbox — image ${lightboxIndex + 1} of ${images.length}`}
          >
            {/* Image container — stop propagation so clicking the image doesn't close */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[90vw] max-w-5xl max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
                <Image
                  src={images[lightboxIndex]}
                  alt={`${facilityName} — photo ${lightboxIndex + 1}`}
                  fill
                  sizes="90vw"
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </motion.div>

            {/* ── Close button ──────────────────────────────────────────── */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 hover:border-[#F59E0B]/60 flex items-center justify-center text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              aria-label="Close lightbox (Escape)"
            >
              <X size={20} aria-hidden="true" />
            </button>

            {/* ── Previous button ────────────────────────────────────────── */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-3 md:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 hover:border-[#F59E0B]/60 flex items-center justify-center text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                aria-label="Previous image (Arrow Left)"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
            )}

            {/* ── Next button ───────────────────────────────────────────── */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 md:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 hover:border-[#F59E0B]/60 flex items-center justify-center text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                aria-label="Next image (Arrow Right)"
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            )}

            {/* ── Image counter ─────────────────────────────────────────── */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-5 py-1.5 rounded-full border border-white/10 font-medium tracking-wide">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
