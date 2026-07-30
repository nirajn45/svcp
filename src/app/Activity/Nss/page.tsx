import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug } from '@/app/Activity/Data/activitiesdata';
import ActivityListingPage from '@/components/activities/activityListingPage';

export const metadata: Metadata = {
  title: 'NSS Activities | Swami Vivekanand College of Pharmacy',
  description:
    'Explore National Service Scheme activities at SVCP — blood donation camps, health awareness drives, tree plantations, rural outreach, and community service programmes that build compassion and social responsibility.',
};

export default function NssPage() {
  const category = getCategoryBySlug('Nss');
  if (!category) return notFound();
  return <ActivityListingPage category={category} />;
}
