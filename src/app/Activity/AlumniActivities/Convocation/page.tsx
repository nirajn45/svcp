import type { Metadata } from 'next';
import ConvocationClient from '../Convocation/_components/Convacation';
import { getLocalActivityGalleryImages } from '@/app/Activity/Data/localGalleryPaths';

export const metadata: Metadata = {
  title: 'Convocation Ceremony | Alumni Activities | SVCP',
  description:
    'The formal conferment of degrees upon graduating students at Swami Vivekanand College of Pharmacy.',
};

export default function ConvocationPage() {
  const galleryImages = getLocalActivityGalleryImages('alumni', 'convocation');
  return <ConvocationClient galleryImages={galleryImages} />;
}
