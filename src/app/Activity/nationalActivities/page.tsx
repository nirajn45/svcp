import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug } from '@/app/Activity/Data/activitiesdata';
import ActivityListingPage from '@/components/activities/activityListingPage';

export const metadata: Metadata = {
  title: 'National & International Day Celebrations | SVCP',
  description:
    'Commemorate national and international observance days at SVCP — Republic Day, World Health Day, Yoga Day, Women\'s Day, and many more.',
};

export default function NationalDaysPage() {
  const category = getCategoryBySlug('national-days');
  if (!category) return notFound();
  return <ActivityListingPage category={category} />;
}
