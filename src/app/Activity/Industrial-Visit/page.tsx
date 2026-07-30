import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug } from '@/app/Activity/Data/activitiesdata';
import ActivityListingPage from '@/components/activities/activityListingPage';

export const metadata: Metadata = {
  title: 'Industrial Visits | Swami Vivekanand College of Pharmacy',
  description:
    'Explore SVCP industrial visits to pharmaceutical manufacturing plants, CSIR research laboratories, AICTE Idea Labs, and incubation centres.',
};

export default function IndustrialVisitsPage() {
  const category = getCategoryBySlug('industrial-visits');
  if (!category) return notFound();
  return <ActivityListingPage category={category} />;
}
