'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface GalleryHeroBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

/**
 * Hero banner for Gallery pages — uses SVCP blue gradient (no random background image).
 * Matches the visual weight of existing SVCP page heroes:
 *   - `#0F4C81` to `#001B49` gradient
 *   - amber (`#F59E0B`) bottom accent bar
 *   - white title, muted subtitle
 */
export default function GalleryHeroBanner({ title, subtitle, breadcrumbs }: GalleryHeroBannerProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F4C81 0%, #0a3460 50%, #001B49 100%)',
        minHeight: '220px',
      }}
      aria-label="Gallery page hero"
    >
      {/* Decorative circles — subtle depth */}
      <div
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10"
        style={{ background: '#F59E0B' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-8"
        style={{ background: '#F59E0B' }}
        aria-hidden="true"
      />
      {/* Fine dot pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Amber bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B]" aria-hidden="true" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-end">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Breadcrumb"
          className="mb-4"
        >
          <ol className="flex flex-wrap items-center gap-1 text-sm">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 text-white/65 hover:text-[#F59E0B] transition-colors duration-200"
                aria-label="Home"
              >
                <Home size={14} aria-hidden="true" />
                <span>Home</span>
              </Link>
            </li>
            {breadcrumbs.map((item, i) => (
              <li key={i} className="flex items-center gap-1">
                <ChevronRight size={14} className="text-white/35" aria-hidden="true" />
                {item.href && i < breadcrumbs.length - 1 ? (
                  <Link
                    href={item.href}
                    className="text-white/65 hover:text-[#F59E0B] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="text-[#F59E0B] font-medium"
                    aria-current={i === breadcrumbs.length - 1 ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-3 text-white/75 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
