import type { Metadata } from "next";
import FeedbackFormView from "@/components/FeedbackFormView";
import { FEEDBACK_ITEMS } from "@/lib/feedbackData";

const config = FEEDBACK_ITEMS.alumni;

export const metadata: Metadata = {
  title: "Alumni Feedback | Swami Vivekanand College of Pharmacy",
  description:
    "Official alumni feedback form for Swami Vivekanand College of Pharmacy (SVCP). Help us enhance curriculum relevance, industry exposure, and institutional excellence.",
};

export default function AlumniFeedbackPage() {
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
