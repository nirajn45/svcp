import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug } from '@/app/Activity/Data/activitiesdata';
import ActivityListingPage from '@/components/activities/activityListingPage';

export const metadata: Metadata = {
  title: 'Seminars, Workshops & Conferences | Swami Vivekanand College of Pharmacy',
  description:
    'Explore seminars, workshops, conferences, and faculty development programmes at SVCP — a thriving ecosystem of knowledge exchange at the cutting edge of pharmaceutical science.',
};

export default function SeminarsPage() {
  const category = getCategoryBySlug('seminars');
  if (!category) return notFound();
  return <ActivityListingPage category={category} />;
}
