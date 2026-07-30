import type { Metadata } from 'next';
import AlumniAssociationClient from './_components/AlumniAssociation';
import { getLocalActivityGalleryImages } from '@/app/Activity/Data/localGalleryPaths';

export const metadata: Metadata = {
  title: 'Alumni Association | SVCP',
  description:
    'Learn about the SVCP Alumni Association — its mission, vision, committee, benefits, and how to register as a lifetime member.',
};

export default function AlumniAssociationPage() {
  const galleryImages = getLocalActivityGalleryImages('alumni', 'alumni-association');
  return <AlumniAssociationClient galleryImages={galleryImages} />;
}
