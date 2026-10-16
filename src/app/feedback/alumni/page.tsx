import type { Metadata } from "next";
import FeedbackFormView from "@/components/FeedbackFormView";

export const metadata: Metadata = {
  title: "Alumni Feedback | Swami Vivekanand College of Pharmacy",
  description:
    "Official alumni feedback form for Swami Vivekanand College of Pharmacy (SVCP). Help us enhance curriculum relevance, industry exposure, and institutional excellence.",
};

export default function AlumniFeedbackPage() {
  return (
    <FeedbackFormView
      type="alumni"
      title="Alumni Feedback"
      subtitle="Swami Vivekanand College of Pharmacy"
      description="Dear Alumni, your experience in the pharmaceutical industry and healthcare domains is invaluable. Help us shape the future generation of pharmacists by sharing your feedback on curriculum alignment, professional skills, and alumni engagement."
      formUrl="https://forms.gle/GCNVfVRZiRnkcWnC7"
      embedUrl="https://docs.google.com/forms/d/e/1FAIpQLSdIBW0lfbRBl-uoZExyx_i_JXXKUbEwUejyOX30BsQykkY3fQ/viewform?embedded=true"
    />
  );
}
