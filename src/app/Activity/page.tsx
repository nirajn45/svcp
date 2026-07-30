import type { Metadata } from 'next';
import ActivitiesLandingPage from './_components/ActivitiesLandingPage';
import { CATEGORIES, STATS } from './Data/activitiesdata';

export const metadata: Metadata = {
  title: 'Activities | Swami Vivekanand College of Pharmacy',
  description:
    'Explore the vibrant activities at SVCP — cultural festivals, NSS, NCC, outreach programmes, seminars, industrial visits, alumni events, and more.',
};

export default function Page() {
  return (
    <ActivitiesLandingPage
      categories={CATEGORIES}
      stats={STATS}
    />
  );
}