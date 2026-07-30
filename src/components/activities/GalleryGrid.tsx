'use client';

import { useState, useCallback } from 'react';
import LocalActivityImage from './LocalActivityImage';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { staggerContainer, cardVariant } from './animation';

interface GalleryImageSource {
  src: string | string[];
  fallbackSrc?: string | string[];
}

interface GalleryGridProps {
  images: Array<string | string[] | GalleryImageSource>;
  title?: string;
}

export default function GalleryGrid({ images, title = 'Photo Gallery' }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  const galleryItems = images.map((source, i) => {
    const imageSource = Array.isArray(source)
      ? { src: source, fallbackSrc: undefined }
      : typeof source === 'string'
      ? { src: source, fallbackSrc: undefined }
      : source;

    return (
      <motion.div
        key={i}
        variants={cardVariant}
        className={`relative overflow-hidden rounded-xl cursor-zoom-in group bg-gray-100 ${
          i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
        }`}
        onClick={() => openLightbox(i)}
        role="button"
        tabIndex={0}
        aria-label={`Open image ${i + 1} of ${images.length}`}
        onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
      >
        <LocalActivityImage
          src={imageSource.src}
          alt={`Gallery image ${i + 1}`}
          fallbackSrc={imageSource.fallbackSrc}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <ZoomIn
            size={28}
            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
            aria-hidden="true"
          />
        </div>
      </motion.div>
    );
  });

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeLightbox();
    },
    [prevImage, nextImage, closeLightbox]
  );

  if (images.length === 0) return null;

  return (
    <section aria-label={title}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
      >
       {galleryItems}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Image container */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative w-[90vw] max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <LocalActivityImage
                src={
                  Array.isArray(images[lightboxIndex])
                    ? images[lightboxIndex]
                    : typeof images[lightboxIndex] === 'string'
                    ? images[lightboxIndex]
                    : images[lightboxIndex].src
                }
                fallbackSrc={
                  Array.isArray(images[lightboxIndex])
                    ? undefined
                    : typeof images[lightboxIndex] === 'string'
                    ? undefined
                    : images[lightboxIndex].fallbackSrc
                }
                alt={`Gallery image ${lightboxIndex + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X size={20} aria-hidden="true" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-4 py-1.5 rounded-full">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
