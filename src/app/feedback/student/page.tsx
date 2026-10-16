import type { Metadata } from "next";
import FeedbackFormView from "@/components/FeedbackFormView";

export const metadata: Metadata = {
  title: "Student Feedback | Swami Vivekanand College of Pharmacy",
  description:
    "Official student feedback form for Swami Vivekanand College of Pharmacy (SVCP). Share your feedback on curriculum, teaching-learning, laboratory infrastructure, and campus facilities.",
};

export default function StudentFeedbackPage() {
  return (
    <FeedbackFormView
      type="student"
      title="Student Feedback"
      subtitle="Swami Vivekanand College of Pharmacy"
      description="We value your voice! Your honest feedback helps Swami Vivekanand College of Pharmacy continuously enhance academic excellence, practical lab training, curriculum implementation, and student support services."
      formUrl="https://forms.gle/MyTNbF732K3rtwC29"
      embedUrl="https://docs.google.com/forms/d/e/1FAIpQLSey-bzi9lfURsle4bGvmlFpplJ0OX87WCFhFz0a7keOksZsTQ/viewform?embedded=true"
    />
  );
}
