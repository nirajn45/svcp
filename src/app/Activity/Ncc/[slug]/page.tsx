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
  const category = getCategoryBySlug('Ncc');
  return (category?.activities ?? []).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug('Ncc', slug);
  if (!activity) return {};
  return {
    title: `${activity.title} | NCC | SVCP`,
    description: activity.shortDescription,
  };
}

export default async function NccDetailPage({ params }: Props) {
  const { slug } = await params;
  const activity = getActivityBySlug('Ncc', slug);
  if (!activity) return notFound();
  const related = getRelatedActivities('Ncc', slug, 3);

  const localGalleryImages = getLocalActivityGalleryImages('Ncc', slug);

  return (
    <>
      <HeroBanner
        title={activity.title}
        subtitle={activity.shortDescription}
        breadcrumbs={[
          { label: 'Activities', href: '/Activity' },
          { label: 'NCC', href: '/Activity/Ncc' },
          { label: activity.title },
        ]}
        imageSrc={getLocalActivityDetailHero('Ncc', slug)}
        fallbackSrc={activity.image}
      />
      <ActivityDetailLayout
        activity={activity}
        relatedActivities={related}
        backHref="/Activity/Ncc"
        backLabel="NCC Activities"
        galleryImages={localGalleryImages}
      />
    </>
  );
}
