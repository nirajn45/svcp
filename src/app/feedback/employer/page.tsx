import type { Metadata } from "next";
import FeedbackFormView from "@/components/FeedbackFormView";
import { FEEDBACK_ITEMS } from "@/lib/feedbackData";

const config = FEEDBACK_ITEMS.employer;

export const metadata: Metadata = {
  title: "Employer Feedback | Swami Vivekanand College of Pharmacy",
  description:
    "Official employer feedback form for Swami Vivekanand College of Pharmacy (SVCP). Share your feedback regarding our graduates' competencies, technical abilities, and industry preparedness.",
};

export default function EmployerFeedbackPage() {
  return (
    <FeedbackFormView
      type={config.type}
      title={config.title}
      subtitle="Swami Vivekanand College of Pharmacy"
      description={config.pageDescription}
      formUrl={config.formUrl}
      embedUrl={config.embedUrl}
    />
  );
}
