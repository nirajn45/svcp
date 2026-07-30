import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getCategoryBySlug,
  getActivityBySlug,
  getRelatedActivities,
} from '@/app/Activity/Data/activitiesdata';
import { getLocalActivityDetailHero } from '@/lib/activityImageUtils';
import { getLocalActivityGalleryImages } from '@/app/Activity/Data/localGalleryPaths';
import HeroBanner from '@/components/activities/HeroBanner';
import ActivityDetailLayout from '@/components/activities/activitydetailLayout';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const category = getCategoryBySlug('Nss');
  return (category?.activities ?? []).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug('Nss', slug);
  if (!activity) return {};
  return {
    title: `${activity.title} | NSS | SVCP`,
    description: activity.shortDescription,
  };
}

export default async function NssDetailPage({ params }: Props) {
  const { slug } = await params;
  const activity = getActivityBySlug('Nss', slug);
  if (!activity) return notFound();
  const related = getRelatedActivities('Nss', slug, 3);

  const localGalleryImages = getLocalActivityGalleryImages('Nss', slug);

  return (
    <>
      <HeroBanner
        title={activity.title}
        subtitle={activity.shortDescription}
        breadcrumbs={[
          { label: 'Activities', href: '/Activity' },
          { label: 'NSS', href: '/Activity/Nss' },
          { label: activity.title },
        ]}
        imageSrc={getLocalActivityDetailHero('Nss', slug)}
        fallbackSrc={activity.image}
      />
      <ActivityDetailLayout
        activity={activity}
        relatedActivities={related}
        backHref="/Activity/Nss"
        backLabel="NSS Activities"
        galleryImages={localGalleryImages}
      />
    </>
  );
}
