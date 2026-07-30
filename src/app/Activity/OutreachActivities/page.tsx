import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug } from '@/app/Activity/Data/activitiesdata';
import ActivityListingPage from '@/components/activities/activityListingPage';

export const metadata: Metadata = {
  title: 'Outreach Activities | Swami Vivekanand College of Pharmacy',
  description:
    'Discover SVCP outreach programmes — school visits, entrepreneurship awareness, free health camps, and career guidance that serve communities beyond the campus.',
};

export default function OutreachPage() {
  const category = getCategoryBySlug('outreach');
  if (!category) return notFound();
  return <ActivityListingPage category={category} />;
}
