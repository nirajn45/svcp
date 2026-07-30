import type { Metadata } from 'next';
import AlumniMeetsClient from './_components/AlumniMeet';
import { getLocalActivityGalleryImages } from '@/app/Activity/Data/localGalleryPaths';

export const metadata: Metadata = {
  title: 'Alumni Meets | SVCP',
  description:
    'Annual and department-wise alumni meets at SVCP — networking, guest expert sessions, awards, and joyful reunions for the SVCP graduate community.',
};

export default function AlumniMeetsPage() {
  const galleryImages = getLocalActivityGalleryImages('alumni', 'alumni-meets');
  return <AlumniMeetsClient galleryImages={galleryImages} />;
}
