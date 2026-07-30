'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, Award, Camera } from 'lucide-react';
import HeroBanner from '@/components/activities/HeroBanner';
import GalleryGrid from '@/components/activities/GalleryGrid';
import CTASection from '@/components/activities/CTASection';
import { fadeUp, staggerContainer, cardVariant } from '@/components/activities/animation';
import { getLocalActivityDetailHero } from '@/lib/activityImageUtils';

const MEET_HIGHLIGHTS = [
  {
    icon: Users,
    title: 'Networking Sessions',
    description:
      'Connect with alumni working across pharmaceutical industries, research labs, and healthcare institutions worldwide.',
  },
  {
    icon: Briefcase,
    title: 'Guest Expert Sessions',
    description:
      'Industry veterans share career insights, market trends, and advice for current students and recent graduates.',
  },
  {
    icon: Award,
    title: 'Alumni Awards',
    description:
      'Outstanding alumni are felicitated for exceptional professional achievements and contributions to the community.',
  },
  {
    icon: Camera,
    title: 'Photo & Video Archive',
    description:
      'Every meet is documented through professional photography, preserving memories for the entire SVCP community.',
  },
];

const PAST_MEETS = [
  {
    year: 2024,
    title: 'Silver Jubilee Alumni Meet 2024',
    theme: 'Connecting Past, Inspiring Future',
    attendees: '250+',
    location: 'SVCP Campus, Banur',
    image: '/activity-images/alumni/alumni-meets/listing/cover.jpeg',
  },
  {
    year: 2023,
    title: 'Annual Alumni Meet 2023',
    theme: 'Roots & Routes',
    attendees: '200+',
    location: 'SVCP Auditorium',
    image: '/activity-images/alumni/alumni-meets/listing/cover.jpeg',
  },
  {
    year: 2022,
    title: 'Homecoming 2022',
    theme: 'Back to Basics',
    attendees: '180+',
    location: 'SVCP Campus, Banur',
    image: '/activity-images/alumni/alumni-meets/listing/cover.jpeg',
  },
];



interface AlumniMeetsClientProps {
  galleryImages?: string[];
}

export default function AlumniMeetsClient({ galleryImages }: AlumniMeetsClientProps) {
  const displayGallery = galleryImages && galleryImages.length > 0 ? galleryImages : [];
  return (
    <>
      <HeroBanner
        title="Alumni Meets"
        subtitle="Annual reunions that reignite old friendships, celebrate achievements, and inspire the next generation of SVCP pharmacy professionals."
        breadcrumbs={[
          { label: 'Activities', href: '/Activity' },
          { label: 'Alumni Activities', href: '/Activity/AlumniActivities' },
          { label: 'Alumni Meets' },
        ]}
        imageSrc={getLocalActivityDetailHero('alumni', 'alumni-meets')}
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
            Reunite. <span className="text-[#F59E0B]">Reconnect.</span> Celebrate.
          </h2>
          <p className="text-gray-600 leading-relaxed text-base text-justify">
            The SVCP Alumni Meet is the most-anticipated gathering of the year for our graduate
            community. Held annually on campus, the meet brings together alumni from all graduating
            batches for an unforgettable day of networking, inspiration, and celebration.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {MEET_HIGHLIGHTS.map((h) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.title}
                variants={cardVariant}
                className="bg-white rounded-xl p-6 border-0 shadow-md hover:shadow-lg transition-all text-center flex flex-col items-center"
              >
                <div className="bg-[#F59E0B]/10 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                  <Icon size={22} className="text-[#F59E0B]" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-[#0F4C81] mb-2 text-base">{h.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{h.description}</p>
              </motion.div>
            );
          })}
        </motion.div>



        {/* Gallery */}
        {displayGallery.length > 0 && (
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-l-4 border-[#F59E0B] pl-4 text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Photo <span className="text-[#F59E0B]">Gallery</span>
            </motion.h2>
            <GalleryGrid images={displayGallery} />
          </div>
        )}
      </div>

      <CTASection />
    </>
  );
}
