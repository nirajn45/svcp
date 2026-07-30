import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug } from '@/app/Activity/Data/activitiesdata';
import ActivityListingPage from '@/components/activities/activityListingPage';

export const metadata: Metadata = {
  title: 'Cultural Activities | Swami Vivekanand College of Pharmacy',
  description:
    'Explore cultural festivals, celebrations, talent shows, and artistic events at SVCP — celebrating India\'s rich diversity.',
};

export default function CulturalActivitiesPage() {
  const category = getCategoryBySlug('culturalActivities');
  if (!category) return notFound();
  return <ActivityListingPage category={category} />;
}
