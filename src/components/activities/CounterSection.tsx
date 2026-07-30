'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from './animation';
import type { StatItem } from '@/app/Activity/Data/types';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

interface CounterSectionProps {
  stats: StatItem[];
}

export default function CounterSection({ stats }: CounterSectionProps) {
  return (
    <section
      className="py-16 md:py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #001B49 0%, #0F4C81 100%)' }}
      aria-label="Statistics"
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #fff, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #fff, transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Activities in{' '}
            <span className="text-[#F59E0B]">Numbers</span>
          </h2>
          <p className="text-white/75 mt-3 text-base max-w-xl mx-auto">
            A testament to SVCP&apos;s vibrant, engaged, and ever-growing campus community.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl py-8 px-4 border border-white/20 hover:bg-white/15 transition-colors duration-300"
            >
              <div className="text-4xl mb-2" aria-hidden="true">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/80 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
