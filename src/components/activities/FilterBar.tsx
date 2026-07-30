'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (v: string) => void;
  selectedYear: string;
  onYearChange: (v: string) => void;
  selectedSort: string;
  onSortChange: (v: string) => void;
  availableYears: number[];
  totalResults: number;
}

export default function FilterBar({
  searchQuery,
  onSearchChange,
  selectedYear,
  onYearChange,
  selectedSort,
  onSortChange,
  availableYears,
  totalResults,
}: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 md:p-5 mb-8">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            id="activity-search"
            placeholder="Search activities..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-9 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/30 focus:border-[#0F4C81] transition-all"
            aria-label="Search activities"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Filter toggle (mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="sm:hidden flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
          aria-expanded={showFilters}
          aria-controls="filter-controls"
        >
          <SlidersHorizontal size={15} />
          Filters
        </button>

        {/* Desktop filters (always visible) */}
        <div
          id="filter-controls"
          className={`sm:flex items-center gap-3 ${showFilters ? 'flex' : 'hidden'} flex-col sm:flex-row`}
        >
          {/* Year */}
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="w-full sm:w-auto px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/30 focus:border-[#0F4C81] bg-white transition-all cursor-pointer"
            aria-label="Filter by year"
          >
            <option value="">All Years</option>
            {availableYears.map((y) => (
              <option key={y} value={String(y)}>
                {y}
              </option>
            ))}
          </select>

          {/* Sort */}
          <select
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full sm:w-auto px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/30 focus:border-[#0F4C81] bg-white transition-all cursor-pointer"
            aria-label="Sort activities"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
          </select>
        </div>
      </div>

      {/* Result count */}
      <p className="mt-3 text-xs text-gray-500">
        Showing{' '}
        <span className="font-semibold text-[#0F4C81]">{totalResults}</span>{' '}
        {totalResults === 1 ? 'activity' : 'activities'}
      </p>
    </div>
  );
}
