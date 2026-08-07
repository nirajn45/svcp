'use client';

import Link from 'next/link';
import LocalActivityImage from '@/components/activities/LocalActivityImage';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import CategoryCard from '@/components/activities/CategoryCard';
import CounterSection from '@/components/activities/CounterSection';
import CTASection from '@/components/activities/CTASection';
import Breadcrumb from '@/components/activities/Breadcrumb';
import { staggerContainer, cardVariant, fadeUp, scaleIn } from '@/components/activities/animation';
import { getLocalCategoryCover, getLocalActivityListingCover } from '@/components/activities/localImageUtils';
import type { CategoryMeta, StatItem } from '@/app/Activity/Data/types';

interface ActivitiesLandingClientProps {
  categories: CategoryMeta[];
  stats: StatItem[];
}

export default function ActivitiesLandingpage({
  categories,
  stats,
}: ActivitiesLandingClientProps) {
  const totalActivities = categories.reduce((sum, c) => sum + c.activities.length, 0);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="relative h-[420px] md:h-[520px] overflow-hidden"
        aria-label="Activities hero"
      >
        <LocalActivityImage
          src={getLocalCategoryCover('culturalActivities')}
          alt="SVCP Activities"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(15,76,129,0.55) 0%, rgba(0,27,73,0.88) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Accent bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Breadcrumb items={[{ label: 'Activities' }]} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg"
            >
              Activities at <span className="text-[#F59E0B]">SVCP</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="mt-3 text-white/85 text-base md:text-lg max-w-2xl leading-relaxed"
            >
              Beyond the classroom, SVCP fosters a culture of creativity, service, discipline, and
              lifelong learning through {totalActivities}+ diverse activities across{' '}
              {categories.length} vibrant categories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a
                href="#categories"
                className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl text-white bg-[#F59E0B] hover:bg-[#d97706] transition-all duration-300 shadow-lg"
              >
                <Sparkles size={16} aria-hidden="true" />
                Explore Categories
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
              >
                Contact Us
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Introduction ──────────────────────────────────────── */}
      <section className="py-16 bg-white" aria-label="About activities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="mb-6">
                <h2 className="border-l-4 border-[#F59E0B] pl-4 text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Where Learning Meets <span className="text-[#F59E0B]">Living</span>
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Discover how our co-curricular and extra-curricular initiatives enhance student life and professional development.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm mb-4 text-justify">
                At Swami Vivekanand College of Pharmacy, we believe that a truly great
                pharmacist is more than a technical expert — they are a compassionate
                community member, an innovative thinker, a disciplined professional, and
                a culturally aware citizen.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm mb-6 text-justify">
                Our activities programme spans cultural festivals, national service, military
                discipline, academic enrichment, industry exposure, and global outreach —
                giving every student the opportunity to grow beyond the curriculum.
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 5).map((c) => (
                  <Link
                    key={c.id}
                    href={c.route}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg border border-[#0F4C81]/20 bg-[#0F4C81]/5 text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white transition-all duration-200"
                  >
                    {c.icon} {c.shortName ?? c.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Feature image grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: getLocalCategoryCover('culturalActivities'), alt: 'Cultural Activities' },
                { src: getLocalCategoryCover('nss'), alt: 'NSS Activities' },
                { src: getLocalCategoryCover('ncc'), alt: 'NCC Activities' },
                { src: getLocalCategoryCover('outreach'), alt: 'Outreach Activities' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative overflow-hidden rounded-xl shadow-md border border-gray-100 ${i === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'}`}
                >
                  <LocalActivityImage
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="200px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Category Cards ────────────────────────────────────── */}
      <section id="categories" className="py-16 bg-gray-50" aria-label="Activity categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="border-l-4 border-[#F59E0B] pl-4 text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Explore Activity <span className="text-[#F59E0B]">Categories</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              From cultural celebrations to industrial exposures, find your passion across our{' '}
              {categories.length} distinct activity categories.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories.map((category, i) => (
              <CategoryCard key={category.id} category={category} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <CounterSection stats={stats} />

      {/* ── Highlight Strip ───────────────────────────────────── */}
      <section className="py-16 bg-white" aria-label="Activity highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="border-l-4 border-[#F59E0B] pl-4 text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Recent <span className="text-[#F59E0B]">Highlights</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              A glimpse into the diverse and enriching activities that make SVCP campus life extraordinary.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {categories.slice(0, 6).map((cat) => {
              const featured = cat.activities[0];
              if (!featured) return null;
              return (
                <motion.div
                  key={cat.id}
                  variants={cardVariant}
                  className="group relative overflow-hidden rounded-xl aspect-video shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-0"
                >
                  <LocalActivityImage
                    src={getLocalActivityListingCover(featured.categorySlug, featured.slug)}
                    alt={featured.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-5"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(0,27,73,0.9) 0%, transparent 70%)',
                    }}
                  >
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider text-[#F59E0B] mb-1"
                    >
                      {cat.shortName ?? cat.name}
                    </span>
                    <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 mb-2">
                      {featured.title}
                    </h3>
                    <Link
                      href={`/Activity/${cat.routeFolder}/${featured.slug}`}
                      className="inline-flex items-center gap-1 text-[#F59E0B] text-xs font-bold hover:gap-2 transition-all uppercase tracking-wide"
                      aria-label={`Read more about ${featured.title}`}
                    >
                      Read More <ArrowRight size={12} aria-hidden="true" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <CTASection />
    </>
  );
}
