'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { cardVariant } from './animation';
import LocalActivityImage from './LocalActivityImage';
import { getLocalActivityListingCover } from './localImageUtils';
import type { Activity } from '@/app/Activity/Data/types';
import { CATEGORIES } from '@/app/Activity/Data/activitiesdata';

interface ActivityCardProps {
  activity: Activity;
  /** Index used for stagger delay */
  index?: number;
}

/**
 * Build the correct detail-page href for an activity.
 * Uses the CATEGORIES map to resolve categorySlug → routeFolder.
 */
function buildDetailHref(activity: Activity): string {
  const category = CATEGORIES.find((c) => c.slug === activity.categorySlug);
  const folder = category?.routeFolder ?? activity.categorySlug;
  return `/Activity/${folder}/${activity.slug}`;
}

export default function ActivityCard({ activity, index = 0 }: ActivityCardProps) {
  const formattedDate = new Date(activity.date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const detailHref = buildDetailHref(activity);

  return (
    <motion.article
      variants={cardVariant}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-0 flex flex-col h-full"
      aria-label={activity.title}
    >
      {/* Amber top accent bar — matches SVCP card pattern */}
      <div className="h-1 bg-[#F59E0B] w-full flex-shrink-0" />

      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <LocalActivityImage
          src={getLocalActivityListingCover(activity.categorySlug, activity.slug)}
          fallbackSrc={activity.image}
          alt={activity.title}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Year badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-[#0F4C81] text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow">
            {activity.year}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category badge */}
        <span className="inline-block text-xs bg-[#F59E0B]/10 text-[#F59E0B] font-bold px-2 py-0.5 rounded-md mb-3 w-fit border border-[#F59E0B]/20">
          {activity.category}
        </span>

        {/* Title */}
        <h3 className="text-base font-bold text-[#0F4C81] mb-2 line-clamp-2 group-hover:text-[#F59E0B] transition-colors duration-200">
          {activity.title}
        </h3>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-500 text-xs mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} className="text-[#F59E0B]" aria-hidden="true" />
            <time dateTime={activity.date}>{formattedDate}</time>
          </span>
          <span className="flex items-center gap-1 truncate max-w-[160px]">
            <MapPin size={12} className="text-[#F59E0B]" aria-hidden="true" />
            <span className="truncate">{activity.location}</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {activity.shortDescription}
        </p>

        {/* CTA */}
        <Link
          href={detailHref}
          className="inline-flex items-center gap-2 text-[#0F4C81] font-bold text-sm hover:text-[#F59E0B] transition-colors duration-200 mt-auto group/link uppercase tracking-wide text-xs"
          aria-label={`Read more about ${activity.title}`}
        >
          Read More
          <ArrowRight
            size={14}
            className="group-hover/link:translate-x-1 transition-transform duration-200"
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.article>
  );
}
