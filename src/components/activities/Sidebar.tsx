'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  X,
  LayoutGrid,
  Clock,
  Link2,
  Phone,
  ChevronRight,
} from 'lucide-react';
import type { Activity, CategoryMeta } from '@/app/Activity/Data/types';

interface SidebarProps {
  category: CategoryMeta;
  currentSlug?: string;
  onSearch?: (q: string) => void;
}

const QUICK_LINKS = [
  { label: 'About SVCP', href: '/about/aboutsvcp' },
  { label: 'Academic Calendar', href: '/academics/academicCalendar' },
  { label: 'All Activities', href: '/Activity' },
  { label: 'NSS', href: '/Activity/Nss' },
  { label: 'NCC', href: '/Activity/Ncc' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Sidebar({ category, currentSlug, onSearch }: SidebarProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (v: string) => {
    setSearchValue(v);
    onSearch?.(v);
  };

  const recentActivities: Activity[] = [...category.activities]
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter((a) => a.slug !== currentSlug)
    .slice(0, 4);

  return (
    <aside className="space-y-6 lg:sticky lg:top-6" aria-label="Sidebar">
      {/* Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-md">
        <h3 className="font-bold text-[#0F4C81] mb-3 flex items-center gap-2">
          <Search size={16} className="text-[#F59E0B]" aria-hidden="true" />
          Search Activities
        </h3>
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-3 pr-8 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/30 focus:border-[#0F4C81] transition-all"
            aria-label="Search activities in sidebar"
          />
          {searchValue && (
            <button
              onClick={() => handleSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear sidebar search"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Category Info */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-md">
        <h3 className="font-bold text-[#0F4C81] mb-3 flex items-center gap-2">
          <LayoutGrid size={16} className="text-[#F59E0B]" aria-hidden="true" />
          This Category
        </h3>
        {/* Matches SVCP's #001B49 dark section style */}
        <div className="rounded-xl p-4 text-white text-sm leading-relaxed"
          style={{ background: 'linear-gradient(135deg, #001B49, #0F4C81)' }}>
          <p className="font-bold text-base mb-1">{category.name}</p>
          <p className="text-white/80">{category.description}</p>
          <p className="mt-2 font-medium text-[#F59E0B]">
            {category.activities.length} activit{category.activities.length === 1 ? 'y' : 'ies'}
          </p>
        </div>
      </div>

      {/* Recent Activities */}
      {recentActivities.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-md">
          <h3 className="font-bold text-[#0F4C81] mb-3 flex items-center gap-2">
            <Clock size={16} className="text-[#F59E0B]" aria-hidden="true" />
            Recent Activities
          </h3>
          <ul className="space-y-3">
            {recentActivities.map((activity) => (
              <li key={activity.id}>
                <Link
                  href={`/Activity/${category.routeFolder}/${activity.slug}`}
                  className="group flex items-start gap-2 text-sm text-gray-600 hover:text-[#0F4C81] transition-colors"
                >
                  <ChevronRight
                    size={14}
                    className="mt-0.5 flex-shrink-0 text-[#F59E0B] group-hover:translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  />
                  <span className="line-clamp-2 leading-snug">{activity.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Quick Links */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-md">
        <h3 className="font-bold text-[#0F4C81] mb-3 flex items-center gap-2">
          <Link2 size={16} className="text-[#F59E0B]" aria-hidden="true" />
          Quick Links
        </h3>
        <ul className="space-y-2">
          {QUICK_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex items-center gap-2 text-sm text-gray-600 hover:text-[#0F4C81] transition-colors"
              >
                <ChevronRight
                  size={13}
                  className="text-[#F59E0B] group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>


      {/* Contact Department */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-md text-center">
        <Phone size={24} className="mx-auto mb-2 text-[#F59E0B]" aria-hidden="true" />
        <h3 className="font-bold text-[#0F4C81] mb-1">Contact Department</h3>
        <p className="text-gray-500 text-sm mb-3">Have questions about activities? Reach out to us.</p>
        <Link
          href="/contact"
          className="inline-block bg-[#F59E0B] hover:bg-[#d97706] text-white text-sm font-bold px-5 py-2 rounded-lg transition-all duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </aside>
  );
}
