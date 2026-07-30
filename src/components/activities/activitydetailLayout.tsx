'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Calendar,
  MapPin,
  Tag,
  ArrowLeft,
  CheckCircle2,
  Star,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';
import GalleryGrid from './GalleryGrid';
import ActivityCard from './ActivityCard';
import LocalActivityImage from './LocalActivityImage';
import { getLocalActivityDetailHero } from './localImageUtils';
import { staggerContainer, cardVariant, fadeUp, fadeLeft } from './animation';
import type { Activity } from '@/app/Activity/Data/types';

interface ActivityDetailLayoutProps {
  activity: Activity;
  relatedActivities: Activity[];
  backHref: string;
  backLabel: string;
  galleryImages?: string[];
}

export default function ActivityDetailLayout({
  activity,
  relatedActivities,
  backHref,
  backLabel,
  galleryImages,
}: ActivityDetailLayoutProps) {
  const formattedDate = new Date(activity.date).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const [shareUrl, setShareUrl] = useState<string>('');

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back Button */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-6">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F4C81] hover:text-[#F59E0B] transition-colors group"
          aria-label={`Back to ${backLabel}`}
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
            aria-hidden="true"
          />
          Back to {backLabel}
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ── Main Content ────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-10">
          {/* Hero Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100"
          >
            <LocalActivityImage
              src={getLocalActivityDetailHero(activity.categorySlug, activity.slug)}
              fallbackSrc={activity.image}
              alt={activity.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </motion.div>

          {/* Title & Meta */}
          <motion.div variants={fadeLeft} initial="hidden" animate="visible">
            {/* Category badge */}
            <span
              className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md text-white bg-[#0F4C81] mb-3"
            >
              {activity.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F4C81] leading-tight mb-4">
              {activity.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 pb-5 border-b border-gray-200">
              <span className="flex items-center gap-1.5">
                <Calendar size={15} className="text-[#F59E0B]" aria-hidden="true" />
                <time dateTime={activity.date}>{formattedDate}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-[#F59E0B]" aria-hidden="true" />
                {activity.location}
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="border-l-4 border-[#F59E0B] pl-3 text-xl font-bold text-gray-900 mb-3">About This Activity</h2>
            <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">{activity.description}</p>
          </motion.div>

          {/* Objectives */}
          {activity.objectives.length > 0 && (
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="border-l-4 border-[#F59E0B] pl-3 text-xl font-bold text-gray-900 mb-4">Objectives</h2>
              <ul className="space-y-3">
                {activity.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 flex-shrink-0 text-[#F59E0B]"
                      aria-hidden="true"
                    />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Highlights */}
          {activity.highlights.length > 0 && (
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="border-l-4 border-[#F59E0B] pl-3 text-xl font-bold text-gray-900 mb-4">Key Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activity.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
                  >
                    <Star
                      size={16}
                      className="mt-0.5 flex-shrink-0 fill-[#F59E0B] text-[#F59E0B]"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 text-sm leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Gallery */}
          {(galleryImages?.length ?? activity.gallery.length) > 0 && (
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="border-l-4 border-[#F59E0B] pl-3 text-xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
              <GalleryGrid
                images={galleryImages && galleryImages.length > 0
                  ? galleryImages.map((src, index) => ({
                      src,
                      fallbackSrc: activity.gallery[index] ?? src,
                    }))
                  : activity.gallery}
              />
            </motion.div>
          )}

          {/* Tags */}
          {activity.tags.length > 0 && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-2"
            >
              <Tag size={15} className="text-gray-400" aria-hidden="true" />
              {activity.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full capitalize hover:bg-[#0F4C81] hover:text-white transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}

          {/* Share Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-200"
          >
            <span className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
              <Share2 size={15} aria-hidden="true" /> Share:
            </span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
              aria-label="Share on Facebook"
            >
              <Facebook size={14} aria-hidden="true" /> Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(activity.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg bg-[#1DA1F2] text-white hover:opacity-90 transition-opacity"
              aria-label="Share on Twitter"
            >
              <Twitter size={14} aria-hidden="true" /> Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg bg-[#0A66C2] text-white hover:opacity-90 transition-opacity"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={14} aria-hidden="true" /> LinkedIn
            </a>
          </motion.div>
        </div>

        {/* ── Sidebar ──────────────────────────────────────────────── */}
        <aside className="space-y-6 lg:sticky lg:top-6 self-start" aria-label="Detail sidebar">
          {/* Activity Summary Card */}
          <div
            className="rounded-xl p-6 text-white shadow-md"
            style={{ background: 'linear-gradient(135deg, #001B49, #0F4C81)' }}
          >
            <h3 className="font-bold text-lg mb-4 border-b border-white/20 pb-3 text-[#F59E0B]">
              Activity Details
            </h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-white/60 uppercase text-xs tracking-wider">Date</dt>
                <dd className="font-semibold mt-0.5">
                  <time dateTime={activity.date}>{formattedDate}</time>
                </dd>
              </div>
              <div>
                <dt className="text-white/60 uppercase text-xs tracking-wider">Location</dt>
                <dd className="font-semibold mt-0.5">{activity.location}</dd>
              </div>
              <div>
                <dt className="text-white/60 uppercase text-xs tracking-wider">Category</dt>
                <dd className="font-semibold mt-0.5">{activity.category}</dd>
              </div>
              <div>
                <dt className="text-white/60 uppercase text-xs tracking-wider">Year</dt>
                <dd className="font-semibold mt-0.5">{activity.year}</dd>
              </div>
            </dl>
          </div>

          {/* Back to Category */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-md text-center">
            <p className="text-sm text-gray-500 mb-3">
              Explore more activities in this category
            </p>
            <Link
              href={backHref}
              className="inline-block w-full bg-[#F59E0B] hover:bg-[#d97706] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
            >
              ← Back to {backLabel}
            </Link>
          </div>

          {/* Contact */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
            <h3 className="font-bold text-[#0F4C81] mb-2">Questions?</h3>
            <p className="text-sm text-gray-500 mb-3">
              Contact the student affairs office for more information about this activity.
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm font-bold text-[#F59E0B] hover:underline"
            >
              Contact Us →
            </Link>
          </div>
        </aside>
      </div>

      {/* Related Activities */}
      {relatedActivities.length > 0 && (
        <section className="mt-16" aria-label="Related activities">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-6 flex items-center justify-between"
          >
            <h2 className="border-l-4 border-[#F59E0B] pl-3 text-2xl font-bold text-gray-900">
              Related <span className="text-[#F59E0B]">Activities</span>
            </h2>
            <Link
              href={backHref}
              className="text-sm font-bold text-[#0F4C81] hover:text-[#F59E0B] transition-colors"
            >
              View All →
            </Link>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {relatedActivities.map((a, i) => (
              <ActivityCard key={a.id} activity={a} index={i} />
            ))}
          </motion.div>
        </section>
      )}
    </div>
  );
}
