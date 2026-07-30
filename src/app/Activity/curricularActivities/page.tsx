import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug } from '@/app/Activity/Data/activitiesdata';
import ActivityListingPage from '@/components/activities/activityListingPage';

export const metadata: Metadata = {
  title: 'Curricular & Co-curricular Activities | SVCP',
  description:
    'Discover workshops, design thinking sessions, and innovation programmes that enrich the SVCP academic experience.',
};

export default function CurricularPage() {
  const category = getCategoryBySlug('curricular');
  if (!category) return notFound();
  return <ActivityListingPage category={category} />;
}
