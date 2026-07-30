'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import HeroBanner from '@/components/activities/HeroBanner';
import GalleryGrid from '@/components/activities/GalleryGrid';
import CTASection from '@/components/activities/CTASection';
import { fadeUp, staggerContainer, cardVariant } from '@/components/activities/animation';
import { getLocalActivityDetailHero } from '@/lib/activityImageUtils';

const CONVOCATIONS = [
  {
    year: 2024,
    chiefGuest: 'Prof. Dr. Ashok Kumar, Vice Chancellor, IKGPTU',
    graduates: 180,
    goldMedals: 5,
    specialAwards: ['Best Outgoing Student', 'Research Excellence Award', 'NSS Best Volunteer'],
    image: '/activity-images/alumni/convocation/listing/cover.jpeg',
  },
  {
    year: 2023,
    chiefGuest: 'Dr. S.K. Gupta, Former Commissioner, CDSCO',
    graduates: 165,
    goldMedals: 4,
    specialAwards: ['Best Outgoing Student', 'Academic Excellence Award', 'NCC Best Cadet'],
    image: '/activity-images/alumni/convocation/listing/cover.jpeg',
  },
  {
    year: 2022,
    chiefGuest: 'Dr. Renu Swarup, Former Secretary, DBT',
    graduates: 148,
    goldMedals: 4,
    specialAwards: ['Best Outgoing Student', 'Innovation Award', 'Sports Excellence Award'],
    image: '/activity-images/alumni/convocation/listing/cover.jpeg',
  },
];

const CEREMONY_HIGHLIGHTS = [
  'Academic procession with faculty in full regalia',
  'Chief Guest address and inspiration for graduates',
  'Degree conferment — individual presentation on stage',
  'Gold Medal and Special Award distribution',
  'Valedictorian address by the best outgoing student',
  'Pledge ceremony for professional ethics',
];



interface ConvocationClientProps {
  galleryImages?: string[];
}

export default function ConvocationClient({ galleryImages }: ConvocationClientProps) {
  const displayGallery = galleryImages && galleryImages.length > 0 ? galleryImages : [];
  return (
    <>
      <HeroBanner
        title="Convocation Ceremony"
        subtitle="The proudest moment of a student's SVCP journey — the formal conferment of their hard-earned degree in the presence of family, faculty, and peers."
        breadcrumbs={[
          { label: 'Activities', href: '/Activity' },
          { label: 'Alumni Activities', href: '/Activity/AlumniActivities' },
          { label: 'Convocation' },
        ]}
        imageSrc={getLocalActivityDetailHero('alumni', 'convocation')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* About */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="border-l-4 border-[#F59E0B] pl-4 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Day of <span className="text-[#F59E0B]">Pride &amp; Achievement</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-base text-justify">
            The SVCP Convocation is a formal academic ceremony conducted every year to confer
            degrees upon graduating students. Attended by distinguished guests, the college
            leadership, proud families, and the entire graduating cohort in academic regalia, it
            marks the culmination of years of dedicated study and service.
          </p>
        </motion.div>

        {/* Ceremony highlights */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="border-l-4 border-[#F59E0B] pl-4 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ceremony <span className="text-[#F59E0B]">Programme</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CEREMONY_HIGHLIGHTS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-4 border-0 shadow-sm hover:shadow-md transition-all"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-[#F59E0B]"
                  aria-hidden="true"
                />
                <span className="text-gray-700 text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>


      </div>

      <CTASection />
    </>
  );
}
