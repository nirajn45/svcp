'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, CalendarDays, GraduationCap, ArrowRight, Globe, Award, TrendingUp } from 'lucide-react';
import HeroBanner from '@/components/activities/HeroBanner';
import CTASection from '@/components/activities/CTASection';
import LocalActivityImage from '@/components/activities/LocalActivityImage';
import { getLocalCategoryCover, getLocalActivityListingCover } from '@/lib/activityImageUtils';
import { staggerContainer, cardVariant, fadeUp } from '@/components/activities/animation';

const ALUMNI_SECTIONS = [
  {
    icon: Users,
    slug: 'alumni-association',
    title: 'Alumni Association',
    description: 'The SVCP Alumni Association is the heart of our graduate community. It fosters lifelong connections, supports current students through mentorship and scholarships, and advances the college mission beyond graduation. Members gain access to networking events, career resources, and an exclusive alumni portal.',
    fallbackImage: '/activity-images/alumni/alumni-association/listing/cover.jpeg',
    href: '/Activity/AlumniActivities/alumni-association',
    highlights: ['Mission & Vision', 'Committee Members', 'Registration Benefits', 'Alumni Portal'],
  },
  {
    icon: CalendarDays,
    slug: 'alumni-meets',
    title: 'Alumni Meets',
    description: 'Annual and department-wise alumni meets bring graduates back to campus for networking, guest sessions, and a nostalgic reunion. These events bridge the gap between students and industry professionals, creating mentorship and career opportunities for current students while rekindling the bonds of shared college memories.',
    fallbackImage: '/activity-images/alumni/alumni-meets/listing/cover.jpeg',
    href: '/Activity/AlumniActivities/alumni-meets',
    highlights: ['Annual Alumni Meet', 'Department Reunions', 'Networking Sessions', 'Award Ceremony'],
  },
  {
    icon: GraduationCap,
    slug: 'convocation',
    title: 'Convocation',
    description: "The Convocation Ceremony is SVCP's most formal and celebrated academic event, marking the official conferment of degrees upon graduating students. The ceremony features a distinguished Chief Guest, degree distribution, gold medal and award presentations, and an inspirational address to the graduating batch.",
    fallbackImage: '/activity-images/alumni/convocation/listing/cover.jpeg',
    href: '/Activity/AlumniActivities/Convocation',
    highlights: ['Degree Distribution', 'Chief Guest Address', 'Gold Medal Awards', 'Gallery & Downloads'],
  },
];

const ALUMNI_STATS = [
  { icon: Users, value: '2000+', label: 'Alumni Network' },
  { icon: Globe, value: '15+', label: 'Countries Represented' },
  { icon: Award, value: '18+', label: 'Graduating Batches' },
  { icon: TrendingUp, value: '95%', label: 'Placement Rate' },
];

export default function AlumniLandingClient() {
  return (
    <>
      <HeroBanner
        title="Alumni Activities"
        subtitle="A lifelong bond — SVCP's alumni community spans the globe, united by shared values and a commitment to excellence in pharmaceutical sciences."
        breadcrumbs={[
          { label: 'Activities', href: '/Activity' },
          { label: 'Alumni Activities' },
        ]}
        imageSrc={getLocalCategoryCover('alumni')}
      />

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl">
            <h2 className="border-l-4 border-[#F59E0B] pl-4 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Community That <span className="text-[#F59E0B]">Lasts Forever</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-base text-justify">
              SVCP graduates carry with them not just a degree, but a lifelong identity as part of the SVCP family. Our alumni are making their mark across hospital pharmacies, pharmaceutical companies, research institutions, regulatory bodies, and entrepreneurial ventures around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ALUMNI_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div key={stat.label} variants={cardVariant} className="bg-white rounded-xl p-6 text-center border-0 shadow-md hover:shadow-lg transition-all">
                  <div className="bg-[#F59E0B]/10 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <Icon size={22} className="text-[#F59E0B]" />
                  </div>
                  <p className="text-3xl font-extrabold text-[#0F4C81]">{stat.value}</p>
                  <p className="text-gray-600 text-sm mt-1 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
            <h2 className="border-l-4 border-[#F59E0B] pl-4 text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Explore Alumni <span className="text-[#F59E0B]">Sections</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Three dedicated programmes that keep the SVCP alumni community vibrant, connected, and impactful.
            </p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ALUMNI_SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <motion.div key={section.title} variants={cardVariant} className="group bg-white rounded-xl overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="h-1 bg-[#F59E0B] w-full" />
                  <div className="relative h-48 overflow-hidden">
                    <LocalActivityImage
                      src={getLocalActivityListingCover('alumni', section.slug)}
                      alt={section.title}
                      fill
                      loading="lazy"
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,76,129,0.15) 0%, rgba(0,27,73,0.75) 100%)' }} />
                    <div className="absolute bottom-3 left-4">
                      <div className="w-10 h-10 rounded-lg bg-[#F59E0B] flex items-center justify-center shadow">
                        <Icon size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-[#0F4C81] mb-2 group-hover:text-[#F59E0B] transition-colors">{section.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{section.description}</p>
                    <ul className="space-y-1.5 mb-5">
                      {section.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link href={section.href} className="inline-flex items-center gap-2 font-bold text-xs text-[#0F4C81] hover:text-[#F59E0B] uppercase tracking-wide group/link">
                      Explore Section <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
