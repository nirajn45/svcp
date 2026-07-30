'use client';

import { motion } from 'framer-motion';
import Breadcrumb from './Breadcrumb';
import LocalActivityImage from './LocalActivityImage';
import type { BreadcrumbItem } from '@/app/Activity/Data/types';
import { fadeUp } from './animation';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  imageSrc: string | string[];
  fallbackSrc?: string | string[];
  /** Optional quote displayed below the subtitle */
  quote?: string;
}

export default function HeroBanner({
  title,
  subtitle,
  breadcrumbs,
  imageSrc,
  fallbackSrc,
  quote,
}: HeroBannerProps) {
  return (
    <section className="relative h-[320px] md:h-[420px] overflow-hidden" aria-label="Page hero">
      {/* Background image */}
      <LocalActivityImage
       src={imageSrc}
       alt={title}
       fallbackSrc={fallbackSrc}
       fill
       className="object-cover object-center"
       priority
       sizes="100vw"
      />

      {/* Gradient overlay — matches SVCP site's dark overlay style */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(15,76,129,0.55) 0%, rgba(0,27,73,0.88) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Bottom accent bar — amber matches site accent colour */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Breadcrumb items={breadcrumbs} />
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-2 text-white/85 text-sm md:text-base max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Optional quote */}
          {quote && (
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-3 border-l-4 border-[#F59E0B] pl-4 text-white/75 italic text-sm md:text-base max-w-xl"
            >
              {quote}
            </motion.blockquote>
          )}
        </div>
      </div>
    </section>
  );
}
