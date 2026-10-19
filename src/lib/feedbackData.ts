export type FeedbackType = "student" | "parent" | "alumni" | "employer" | "faculty";

export interface FeedbackConfig {
  type: FeedbackType;
  title: string;
  badge: string;
  href: string;
  formUrl: string;
  embedUrl: string;
  description: string;
  pageDescription: string;
}

export const FEEDBACK_ITEMS: Record<FeedbackType, FeedbackConfig> = {
  student: {
    type: "student",
    title: "Student Feedback",
    badge: "Students",
    href: "/feedback/student",
    formUrl: "https://forms.gle/MyTNbF732K3rtwC29",
    embedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSey-bzi9lfURsle4bGvmlFpplJ0OX87WCFhFz0a7keOksZsTQ/viewform?embedded=true",
    description: "Share your experiences and feedback regarding curriculum delivery, teaching quality, laboratory facilities, and overall student support.",
    pageDescription: "We value your voice! Your honest feedback helps Swami Vivekanand College of Pharmacy continuously enhance academic excellence, practical lab training, curriculum implementation, and student support services.",
  },
  parent: {
    type: "parent",
    title: "Parent Feedback",
    badge: "Parents",
    href: "/feedback/parent",
    formUrl: "https://forms.gle/GCNVfVRZiRnkcWnC7",
    embedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdIBW0lfbRBl-uoZExyx_i_JXXKUbEwUejyOX30BsQykkY3fQ/viewform?embedded=true",
    description: "Share your observations and suggestions regarding your ward's holistic development, campus discipline, safety, and faculty support.",
    pageDescription: "Dear Parents, your perspective is vital to our growth. Please share your insights, observations, and suggestions regarding your ward's overall development, campus discipline, safety, and educational environment at SVCP.",
  },
  alumni: {
    type: "alumni",
    title: "Alumni Feedback",
    badge: "Alumni",
    href: "/feedback/alumni",
    formUrl: "https://forms.gle/LnDoNNSaujRbQtVLA",
    embedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfJLJmSRHls4qQzX-ALlG2_3ve6LUSbfR9wHJU1Pw5YBZJnRw/viewform?embedded=true",
    description: "Provide valuable industry perspective to strengthen pharmaceutical curriculum relevance, technical skills, and placement preparedness.",
    pageDescription: "Dear Alumni, your experience in the pharmaceutical industry and healthcare domains is invaluable. Help us shape the future generation of pharmacists by sharing your feedback on curriculum alignment, professional skills, and alumni engagement.",
  },
  employer: {
    type: "employer",
    title: "Employer Feedback",
    badge: "Employers",
    href: "/feedback/employer",
    formUrl: "https://forms.gle/rZFwD66tAHWMVWKh7",
    embedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSep8rQvhshP_qVAtMW34ZZHpsZGDak7u8YhxRyanqS6wiVbAw/viewform?embedded=true",
    description: "Share feedback on SVCP graduates' domain competence, technical knowledge, professional ethics, and industry readiness.",
    pageDescription: "Dear Employers & Industry Partners, your feedback on our graduates' technical competence, work ethics, and practical skills helps us align our pharmaceutical education with current industry requirements.",
  },
  faculty: {
    type: "faculty",
    title: "Faculty Feedback",
    badge: "Faculty",
    href: "/feedback/faculty",
    formUrl: "https://forms.gle/FB5GxWrgpJvEZUoc6",
    embedUrl: "https://docs.google.com/forms/d/e/1FAIpQLScE7-yN7fK5UKaQbtj1IPobAxuaVDOJkpta6gruLNkWJLu2XA/viewform?embedded=true",
    description: "Provide faculty insights regarding curriculum design, academic resources, research facilities, and teaching-learning environment.",
    pageDescription: "Dear Faculty Members, your academic insights and suggestions regarding curriculum design, research infrastructure, teaching resources, and administrative governance are essential to maintaining educational excellence.",
  },
};

export const FEEDBACK_ORDER: FeedbackType[] = [
  "student",
  "parent",
  "alumni",
  "employer",
  "faculty",
];
