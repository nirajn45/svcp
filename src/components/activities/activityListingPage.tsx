'use client';

import HeroBanner from '@/components/activities/HeroBanner';
import ActivityGrid from '@/components/activities/activityGrid';
import Sidebar from '@/components/activities/Sidebar';
import CounterSection from '@/components/activities/CounterSection';
import CTASection from '@/components/activities/CTASection';
import { motion } from 'framer-motion';
import { fadeUp } from '@/components/activities/animation';
import { STATS } from '@/app/Activity/Data/activitiesdata';
import { getLocalCategoryCover } from '@/components/activities/localImageUtils';
import type { CategoryMeta } from '@/app/Activity/Data/types';

interface ActivityListingPageProps {
  category: CategoryMeta;
}

export default function ActivityListingPage({ category }: ActivityListingPageProps) {
  const breadcrumbs = [
    { label: 'Activities', href: '/Activity' },
    { label: category.name },
  ];

  return (
    <>
      {/* Hero */}
      <HeroBanner
        title={category.name}
        subtitle={category.description}
        breadcrumbs={breadcrumbs}
        imageSrc={getLocalCategoryCover(category.slug)}
        fallbackSrc={category.heroImage}
      />

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="mb-6">
              <h2 className="border-l-4 border-[#F59E0B] pl-4 text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                About <span className="text-[#F59E0B]">{category.shortName ?? category.name}</span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed text-justify">
                {category.longDescription}
              </p>
            </div>
            {/* Decorative quote line */}
            <div className="mt-4 border-l-4 border-[#0F4C81] pl-4 text-left text-gray-600 italic text-sm bg-gray-50 py-3 rounded-r-xl">
              "Education is not just learning from books — it is living with purpose, passion, and community."
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content: Grid + Sidebar */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Activities Grid */}
            <main className="lg:col-span-3" aria-label={`${category.name} activities`}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="border-l-4 border-[#F59E0B] pl-4 text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  All <span className="text-[#F59E0B]">{category.shortName ?? category.name}</span> Activities
                </h2>
                <p className="text-gray-600 text-sm pl-5">
                  Browse through all {category.activities.length} activities in this category.
                </p>
              </motion.div>
              <ActivityGrid activities={category.activities} />
            </main>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <Sidebar category={category} />
            </aside>
          </div>
        </div>
      </section>

      {/* Stats */}
      <CounterSection stats={STATS} />

      {/* CTA */}
      <CTASection />
    </>
  );
}
