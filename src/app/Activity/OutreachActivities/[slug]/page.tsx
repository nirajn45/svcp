import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getActivityBySlug, getRelatedActivities, getCategoryBySlug } from '@/app/Activity/Data/activitiesdata';
import { getLocalActivityDetailHero } from '@/lib/activityImageUtils';
import { getLocalActivityGalleryImages } from '@/app/Activity/Data/localGalleryPaths';
import HeroBanner from '@/components/activities/HeroBanner';
import ActivityDetailLayout from '@/components/activities/activitydetailLayout';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const category = getCategoryBySlug('outreach');
  return (category?.activities ?? []).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug('outreach', slug);
  if (!activity) return {};
  return { title: `${activity.title} | Outreach Activities | SVCP`, description: activity.shortDescription };
}

export default async function OutreachDetailPage({ params }: Props) {
  const { slug } = await params;
  const activity = getActivityBySlug('outreach', slug);
  if (!activity) return notFound();
  const related = getRelatedActivities('outreach', slug, 3);
  const localGalleryImages = getLocalActivityGalleryImages('outreach', slug);
  return (
    <>
      <HeroBanner
        title={activity.title}
        subtitle={activity.shortDescription}
        breadcrumbs={[
          { label: 'Activities', href: '/Activity' },
          { label: 'Outreach Activities', href: '/Activity/OutreachActivities' },
          { label: activity.title },
        ]}
        imageSrc={getLocalActivityDetailHero('outreach', slug)}
        fallbackSrc={activity.image}
      />
      <ActivityDetailLayout
        activity={activity}
        relatedActivities={related}
        backHref="/Activity/OutreachActivities"
        backLabel="Outreach Activities"
        galleryImages={localGalleryImages}
      />
    </>
  );
}
