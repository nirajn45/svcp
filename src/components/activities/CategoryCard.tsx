'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import LocalActivityImage from './LocalActivityImage';
import { ArrowRight } from 'lucide-react';
import { cardVariant } from './animation';
import { getLocalCategoryCover } from './localImageUtils';
import type { CategoryMeta } from '@/app/Activity/Data/types';

interface CategoryCardProps {
  category: CategoryMeta;
  index?: number;
}

export default function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      variants={cardVariant}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-0 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <LocalActivityImage
          src={getLocalCategoryCover(category.slug)}
          fallbackSrc={category.heroImage}
          alt={category.name}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Dark overlay matching site's image treatment */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(15,76,129,0.15) 0%, rgba(0,27,73,0.75) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Count badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-[#F59E0B] text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow">
            {category.activities.length} {category.activities.length === 1 ? 'Activity' : 'Activities'}
          </span>
        </div>
        {/* Icon */}
        <div className="absolute bottom-3 left-4">
          <span className="text-2xl" aria-hidden="true">
            {category.icon}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-[#0F4C81] mb-1.5 group-hover:text-[#F59E0B] transition-colors duration-200 line-clamp-2">
          {category.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
          {category.description}
        </p>
        <Link
          href={category.route}
          className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#0F4C81] hover:text-[#F59E0B] uppercase tracking-wide transition-colors duration-200 group/link"
          aria-label={`Explore ${category.name}`}
        >
          Explore
          <ArrowRight
            size={14}
            className="group-hover/link:translate-x-1 transition-transform duration-200"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* Bottom amber accent — matches SVCP card pattern */}
      <div
        className="h-1 w-0 group-hover:w-full bg-[#F59E0B] transition-all duration-500 ease-out"
        aria-hidden="true"
      />
    </motion.div>
  );
}
