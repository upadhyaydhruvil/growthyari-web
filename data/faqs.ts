/**
 * FAQ. Verbatim question and answer pairs from growthyari.com.
 */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Who is this program for?",
    answer:
      "Students, professionals, entrepreneurs and career switchers who want practical skills and measurable career growth.",
  },
  {
    question: "Do I need sales experience?",
    answer:
      "No. We start from fundamentals and gradually build practical skills.",
  },
  {
    question: "How long is the program?",
    answer:
      "The program runs for up to 8 weeks with live coaching sessions.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes, but more importantly you'll graduate with a proof-of-work portfolio.",
  },
  {
    question: "Will you help me get interviews?",
    answer:
      "Yes. Resume reviews, mock interviews and career guidance are included.",
  },
  {
    question: "How much time should I dedicate weekly?",
    answer: "Around 5–8 hours each week is recommended.",
  },
  {
    question: "What's the difference between Group and 1:1?",
    answer:
      "Group is small-cohort learning. 1:1 Accelerator provides personalized coaching and roadmap.",
  },
];
