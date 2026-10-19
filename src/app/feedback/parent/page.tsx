import type { Metadata } from "next";
import FeedbackFormView from "@/components/FeedbackFormView";
import { FEEDBACK_ITEMS } from "@/lib/feedbackData";

const config = FEEDBACK_ITEMS.parent;

export const metadata: Metadata = {
  title: "Parent Feedback | Swami Vivekanand College of Pharmacy",
  description:
    "Official parent feedback form for Swami Vivekanand College of Pharmacy (SVCP). Share your feedback regarding institutional environment, discipline, safety, and academic progress.",
};

export default function ParentFeedbackPage() {
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
