'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PackageOpen } from 'lucide-react';
import ActivityCard from './ActivityCard';
import FilterBar from './FilterBar';
import Pagination from './pagination';
import { staggerContainer } from './animation';
import type { Activity } from '@/app/Activity/Data/types';

const PAGE_SIZE = 9;

interface ActivityGridProps {
  activities: Activity[];
  /** When true the filter bar is not rendered (useful in detail "Related" sections) */
  hideFilters?: boolean;
}

export default function ActivityGrid({ activities, hideFilters = false }: ActivityGridProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSort, setSelectedSort] = useState('newest');
  const [page, setPage] = useState(1);

  // Unique years available in the dataset
  const availableYears = useMemo(
    () =>
      Array.from(new Set(activities.map((a) => a.year))).sort((a, b) => b - a),
    [activities]
  );

  // Apply filters
  const filtered = useMemo(() => {
    let result = [...activities];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.shortDescription.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedYear) {
      result = result.filter((a) => a.year === Number(selectedYear));
    }

    if (selectedSort === 'newest') result.sort((a, b) => b.date.localeCompare(a.date));
    else if (selectedSort === 'oldest') result.sort((a, b) => a.date.localeCompare(b.date));
    else if (selectedSort === 'az') result.sort((a, b) => a.title.localeCompare(b.title));
    else if (selectedSort === 'za') result.sort((a, b) => b.title.localeCompare(a.title));

    return result;
  }, [activities, searchQuery, selectedYear, selectedSort]);

  // Reset to page 1 on filter change
  const handleFilter = <T,>(setter: (v: T) => void) => (v: T) => {
    setter(v);
    setPage(1);
  };

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      {!hideFilters && (
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={handleFilter(setSearchQuery)}
          selectedYear={selectedYear}
          onYearChange={handleFilter(setSelectedYear)}
          selectedSort={selectedSort}
          onSortChange={handleFilter(setSelectedSort)}
          availableYears={availableYears}
          totalResults={filtered.length}
        />
      )}

      {paginated.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center text-gray-400">
          <PackageOpen size={56} strokeWidth={1.2} className="mb-4 text-gray-300" />
          <p className="text-lg font-medium text-gray-500">No activities found</p>
          <p className="text-sm mt-1">Try adjusting your search or filter criteria.</p>
        </div>
      ) : (
        <>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            aria-label="Activities grid"
          >
            {paginated.map((activity, i) => (
              <ActivityCard key={activity.id} activity={activity} index={i} />
            ))}
          </motion.div>

          {totalPages > 1 && (
            <div className="mt-10">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
