/**
 * FAQ.
 *
 * Question and answer pairs. The first seven come from growthyari.com; the
 * rest were added because they are the questions a buyer actually asks before
 * paying ₹23,599 and are answered nowhere else on the site.
 *
 * Answers are never invented. Where only GrowthYari can supply the answer it
 * carries a [PLACEHOLDER: …] marker and is listed in the handover notes.
 */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Who is this program for?",
    answer:
      "Students, freshers and career switchers first. Working professionals and entrepreneurs take the same material through a different lens.",
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
      "Yes, but more importantly you'll graduate with a proof-of-work portfolio. A certificate is a claim; the portfolio is evidence a recruiter can open.",
  },
  {
    question: "Will you help me get interviews?",
    answer:
      "We get you interview-ready with a CV and LinkedIn rewrite, mock interviews and honest feedback. We don't guarantee interviews or placement.",
  },
  {
    question: "How much time should I dedicate weekly?",
    answer: "Around 5–8 hours each week is recommended.",
  },
  {
    question: "What's the difference between Group and 1:1?",
    answer:
      "Group is small-cohort learning with up to five people. 1:1 Accelerator provides personalised coaching and a roadmap built around you.",
  },
  {
    question: "What happens in the Career Assessment Call?",
    answer:
      "A 1:1 conversation, around [PLACEHOLDER: length, e.g. 30 minutes], covering where you are now, what you want to change, and whether we can genuinely move you. It is a fit conversation, not a test, and no payment is taken during it.",
  },
  {
    question: "What language are the sessions taught in?",
    answer:
      "[PLACEHOLDER: language of instruction — e.g. English and Hindi, with sessions delivered in English and discussion in either.]",
  },
  {
    question: "What time do sessions run?",
    answer:
      "[PLACEHOLDER: session days and time window in IST, and whether recordings are available if you miss one.]",
  },
  {
    question: "What if I miss a session?",
    answer:
      "[PLACEHOLDER: missed-session policy — whether sessions are recorded, how catch-up works, and whether a missed week can be made up.]",
  },
  {
    question: "How do I pay, and can I get a GST invoice?",
    answer:
      "Payment happens only after the Career Assessment and selection — not on the application. [PLACEHOLDER: accepted payment methods, installment options if any. A GST invoice is issued for every payment.]",
  },
  {
    question: "Can I get a refund if it isn't for me?",
    answer:
      "Refund terms are published in full on our Refund Policy page so you can read them before paying. [PLACEHOLDER: refund window and any conditions, to match that page.]",
  },
];
