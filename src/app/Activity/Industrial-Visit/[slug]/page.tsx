import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getActivityBySlug, getRelatedActivities } from '@/app/Activity/Data/activitiesdata';
import { getLocalActivityDetailHero } from '@/lib/activityImageUtils';
import { getLocalActivityGalleryImages } from '@/app/Activity/Data/localGalleryPaths';
import HeroBanner from '@/components/activities/HeroBanner';
import ActivityDetailLayout from '@/components/activities/activitydetailLayout';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const category = getCategoryBySlug('industrial-visits');
  return (category?.activities ?? []).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug('industrial-visits', slug);
  if (!activity) return {};
  return {
    title: `${activity.title} | Industrial Visits | SVCP`,
    description: activity.shortDescription,
  };
}

export default async function IndustrialVisitDetailPage({ params }: Props) {
  const { slug } = await params;
  const activity = getActivityBySlug('industrial-visits', slug);
  if (!activity) return notFound();
  const related = getRelatedActivities('industrial-visits', slug, 3);
  const localGalleryImages = getLocalActivityGalleryImages('industrial-visits', slug);

  return (
    <>
      <HeroBanner
        title={activity.title}
        subtitle={activity.shortDescription}
        breadcrumbs={[
          { label: 'Activities', href: '/Activity' },
          { label: 'Industrial Visits', href: '/Activity/Industrial-Visit' },
          { label: activity.title },
        ]}
        imageSrc={getLocalActivityDetailHero('industrial-visits', slug)}
        fallbackSrc={activity.image}
      />
      <ActivityDetailLayout
        activity={activity}
        relatedActivities={related}
        backHref="/Activity/Industrial-Visit"
        backLabel="Industrial Visits"
        galleryImages={localGalleryImages}
      />
    </>
  );
}
