import type { Metadata } from 'next';
import AlumniLandingClient from './_components/AlumniLanding';

export const metadata: Metadata = {
  title: 'Alumni Activities | Swami Vivekanand College of Pharmacy',
  description:
    'Connect with the SVCP alumni network through the Alumni Association, Alumni Meets, and Convocation ceremonies.',
};

export default function AlumniPage() {
  return <AlumniLandingClient />;
}
