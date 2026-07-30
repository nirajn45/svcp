import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug } from '@/app/Activity/Data/activitiesdata';
import ActivityListingPage from '@/components/activities/activityListingPage';

export const metadata: Metadata = {
  title: 'NCC Activities | Swami Vivekanand College of Pharmacy',
  description:
    'Explore National Cadet Corps activities at SVCP — Republic Day parades, training camps, adventure activities, and social service programmes that build discipline and leadership.',
};

export default function NccPage() {
  const category = getCategoryBySlug('Ncc');
  if (!category) return notFound();
  return <ActivityListingPage category={category} />;
}
