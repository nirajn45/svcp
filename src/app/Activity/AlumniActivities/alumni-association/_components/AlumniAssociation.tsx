'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Target, Eye, CheckCircle2, Users, ArrowRight } from 'lucide-react';
import HeroBanner from '@/components/activities/HeroBanner';
import GalleryGrid from '@/components/activities/GalleryGrid';
import CTASection from '@/components/activities/CTASection';
import { fadeUp, staggerContainer, cardVariant } from '@/components/activities/animation';
import { getLocalActivityDetailHero } from '@/lib/activityImageUtils';

const BENEFITS = [
  'Lifetime membership with digital alumni ID card',
  'Access to the SVCP alumni portal and directory',
  'Priority invitations to alumni meets and networking events',
  'Mentorship opportunities for current students',
  'Access to college library and research resources',
  'Discounts on SVCP academic programmes and workshops',
  'Monthly newsletter with alumni achievements and college updates',
  'Career placement support and industry job board',
];

interface AlumniAssociationClientProps {
  galleryImages?: string[];
}

export default function AlumniAssociationClient({ galleryImages }: AlumniAssociationClientProps) {
  const displayGallery = galleryImages && galleryImages.length > 0 ? galleryImages : [];
  return (
    <>
      <HeroBanner
        title="Alumni Association"
        subtitle="Building lifelong connections between SVCP graduates and their alma mater — a community bound by shared values and a commitment to excellence."
        breadcrumbs={[
          { label: 'Activities', href: '/Activity' },
          { label: 'Alumni Activities', href: '/Activity/AlumniActivities' },
          { label: 'Alumni Association' },
        ]}
        imageSrc={getLocalActivityDetailHero('alumni', 'alumni-association')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Mission & Vision */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={cardVariant}
            className="bg-white rounded-xl p-8 border-0 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="bg-[#F59E0B]/10 p-3 rounded-full w-12 h-12 mb-5 flex items-center justify-center">
                <Target size={24} className="text-[#F59E0B]" aria-hidden="true" />
              </div>
              <h2 className="border-l-4 border-[#F59E0B] pl-3 text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-sm text-justify">
                To foster a vibrant, engaged, and supportive alumni community that strengthens the
                SVCP ecosystem, advances pharmacy education, and creates lifelong value for every
                graduate through networking, mentorship, and shared achievement.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariant}
            className="bg-white rounded-xl p-8 border-0 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="bg-[#F59E0B]/10 p-3 rounded-full w-12 h-12 mb-5 flex items-center justify-center">
                <Eye size={24} className="text-[#F59E0B]" aria-hidden="true" />
              </div>
              <h2 className="border-l-4 border-[#F59E0B] pl-3 text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-sm text-justify">
                To be the most connected and impactful pharmacy alumni association in North India —
                one where every graduate feels proud, supported, and valued throughout their
                professional journey, regardless of where in the world they have built their career.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="border-l-4 border-[#F59E0B] pl-4 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Membership <span className="text-[#F59E0B]">Benefits</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 bg-white rounded-xl p-4 border-0 shadow-sm hover:shadow-md transition-all"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-[#F59E0B]"
                  aria-hidden="true"
                />
                <span className="text-gray-700 text-sm leading-snug">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        {displayGallery.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="border-l-4 border-[#F59E0B] pl-4 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Photo <span className="text-[#F59E0B]">Gallery</span>
            </h2>
            <GalleryGrid images={displayGallery} />
          </motion.div>
        )}

        {/* Registration CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#001B49] rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-44 h-44 bg-[#0F4C81]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
          
          <Users size={44} className="mx-auto text-[#F59E0B] mb-4 relative z-10" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 relative z-10">
            Register with the Alumni Association
          </h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto text-sm md:text-base leading-relaxed relative z-10">
            SVCP graduates: register today to access your alumni ID, join the directory, and
            connect with 2000+ fellow graduates across the world.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-8 py-3 rounded-xl transition-all text-sm relative z-10 shadow-lg"
          >
            Register Now <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>

      <CTASection />
    </>
  );
}
