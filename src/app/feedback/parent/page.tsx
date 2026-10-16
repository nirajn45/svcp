import type { Metadata } from "next";
import FeedbackFormView from "@/components/FeedbackFormView";

export const metadata: Metadata = {
  title: "Parent Feedback | Swami Vivekanand College of Pharmacy",
  description:
    "Official parent feedback form for Swami Vivekanand College of Pharmacy (SVCP). Share your feedback regarding institutional environment, discipline, safety, and academic progress.",
};

export default function ParentFeedbackPage() {
  return (
    <FeedbackFormView
      type="parent"
      title="Parent Feedback"
      subtitle="Swami Vivekanand College of Pharmacy"
      description="Dear Parents, your perspective is vital to our growth. Please share your insights, observations, and suggestions regarding your ward's overall development, campus discipline, safety, and educational environment at SVCP."
      formUrl="https://forms.gle/LnDoNNSaujRbQtVLA"
      embedUrl="https://docs.google.com/forms/d/e/1FAIpQLSfJLJmSRHls4qQzX-ALlG2_3ve6LUSbfR9wHJU1Pw5YBZJnRw/viewform?embedded=true"
    />
  );
}
