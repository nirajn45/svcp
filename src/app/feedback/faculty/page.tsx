import type { Metadata } from "next";
import FeedbackFormView from "@/components/FeedbackFormView";
import { FEEDBACK_ITEMS } from "@/lib/feedbackData";

const config = FEEDBACK_ITEMS.faculty;

export const metadata: Metadata = {
  title: "Faculty Feedback | Swami Vivekanand College of Pharmacy",
  description:
    "Official faculty feedback form for Swami Vivekanand College of Pharmacy (SVCP). Share your feedback regarding curriculum design, teaching resources, and academic governance.",
};

export default function FacultyFeedbackPage() {
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
