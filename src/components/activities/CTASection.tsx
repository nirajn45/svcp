'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarDays, Phone, ArrowRight } from 'lucide-react';
import { staggerContainer, cardVariant } from './animation';

const CTA_CARDS = [
  {
    icon: CalendarDays,
    title: 'Join Upcoming Activities',
    description:
      `Be a part of SVCP's vibrant campus life. Register for upcoming events, workshops, and celebrations.`,
    href: '/Activity',
    cta: 'View All Activities',
  },
  {
    icon: Phone,
    title: 'Contact Department',
    description:
      'Have a question about an activity or want to organise an event? Our student affairs team is ready to help.',
    href: '/contact',
    cta: 'Get in Touch',
  },
];

export default function CTASection() {
  return (
    <section
      className="py-16 md:py-20 bg-gray-50"
      aria-label="Call to action"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading — matches SVCP border-l-4 heading pattern */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <h2 className="border-l-4 border-[#F59E0B] pl-4 text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get <span className="text-[#F59E0B]">Involved</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            SVCP's activities are open to every student. Participate, contribute, and create memories that last a lifetime.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {CTA_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariant}
                className="group bg-white rounded-xl border-0 shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col overflow-hidden"
              >
                {/* Amber top accent bar */}
                <div className="h-1 bg-[#F59E0B] -mx-6 -mt-6 mb-6" />
                <div className="bg-[#F59E0B]/10 p-3 rounded-full w-12 h-12 mx-0 mb-4 flex items-center justify-center group-hover:bg-[#0F4C81] transition-colors duration-300">
                  <Icon size={22} className="text-[#F59E0B] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex items-center gap-2 font-bold text-xs text-[#0F4C81] hover:text-[#F59E0B] uppercase tracking-wide transition-colors duration-200 group/link"
                  aria-label={card.cta}
                >
                  {card.cta}
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner — matches SVCP #001B49 CTA style */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-10 bg-[#001B49] rounded-[2rem] overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative"
        >
          {/* Glow effects matching SVCP CTA */}
          <div className="absolute -top-10 -left-10 w-44 h-44 bg-[#0F4C81]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="text-white text-center md:text-left relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Ready to be part of something <span className="text-[#F59E0B]">great?</span>
            </h3>
            <p className="text-white/75 mt-2 max-w-lg text-sm md:text-base">
              Explore all of SVCP's activities across 9 vibrant categories and find your passion.
            </p>
          </div>
          <Link
            href="/Activity"
            className="flex-shrink-0 bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm whitespace-nowrap relative z-10"
          >
            Explore All Activities →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
