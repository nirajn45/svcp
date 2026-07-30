import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getActivityBySlug, getRelatedActivities } from '@/app/Activity/Data/activitiesdata';
import { getLocalActivityDetailHero } from '@/lib/activityImageUtils';
import { getLocalActivityGalleryImages } from '@/app/Activity/Data/localGalleryPaths';
import HeroBanner from '@/components/activities/HeroBanner';
import ActivityDetailLayout from '@/components/activities/activitydetailLayout';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const category = getCategoryBySlug('national-days');
  return (category?.activities ?? []).map((a: { slug: string }) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug('national-days', slug);
  if (!activity) return {};
  return {
    title: `${activity.title} | National Day Celebrations | SVCP`,
    description: activity.shortDescription,
  };
}

export default async function NationalDayDetailPage({ params }: Props) {
  const { slug } = await params;
  const activity = getActivityBySlug('national-days', slug);
  if (!activity) return notFound();
  const related = getRelatedActivities('national-days', slug, 3);
  const localGalleryImages = getLocalActivityGalleryImages('national-days', slug);
  return (
    <>
      <HeroBanner
        title={activity.title}
        subtitle={activity.shortDescription}
        breadcrumbs={[
          { label: 'Activities', href: '/Activity' },
          { label: 'National / International Days', href: '/Activity/nationalActivities' },
          { label: activity.title },
        ]}
        imageSrc={getLocalActivityDetailHero('national-days', slug)}
        fallbackSrc={activity.image}
      />
      <ActivityDetailLayout
        activity={activity}
        relatedActivities={related}
        backHref="/Activity/nationalActivities"
        backLabel="National / International Day Celebrations"
        galleryImages={localGalleryImages}
      />
    </>
  );
}
