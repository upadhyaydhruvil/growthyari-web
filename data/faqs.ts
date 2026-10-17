/**
 * FAQ.
 *
 * Rewritten for the 12-Week Sales & Communication Pilot Batch. Every answer
 * here is either confirmed or an honest deferral — there are no placeholders
 * and no invented specifics. Questions whose answers are not yet fixed (exact
 * weekly hours, batch dates) are answered by saying the detail is confirmed
 * before the batch begins, rather than guessed at.
 */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Who is this program for?",
    answer:
      "College students, recent graduates and freshers who want to speak clearly and handle real conversations — in interviews, presentations, client calls and first jobs.",
  },
  {
    question: "Do I need any sales or public-speaking experience?",
    answer:
      "No. The batch starts from fundamentals and builds up through practice. You are never expected to arrive already good at it.",
  },
  {
    question: "How long is the program?",
    answer:
      "It runs for 12 weeks, with one week dedicated to each core skill and a final capstone week.",
  },
  {
    question: "How do I apply?",
    answer:
      "Through the registration portal. It is a short application — not a payment. We review it and invite suitable applicants to an assessment conversation.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "We review your application and background, then invite you to a short assessment conversation to make sure the batch is right for you. Nothing is charged and no seat is confirmed online.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes — but the more useful outcome is the evidence you build during the batch: recordings, written work and a clear before-and-after against your starting point.",
  },
  {
    question: "How much does it cost, and when do I pay?",
    answer:
      "Applying is free. Fees are discussed only after the Career Assessment Call, once we have confirmed the batch is the right fit for you. Payment happens after selection — never before.",
  },
  {
    question: "Will this get me a job?",
    answer:
      "No, and we will not claim otherwise. What the batch does is build the skills and the evidence — recordings, written work, interview practice — that make you a stronger candidate. The opportunities you pursue are still yours to go after.",
  },
  {
    question: "What is the learning format?",
    answer:
      "Live, practical and small-group. You practise out loud in real scenarios and get direct feedback on what to change, rather than working through recorded lectures on your own.",
  },
  {
    question: "How much time will I need each week?",
    answer:
      "The exact weekly commitment will be confirmed with you before the batch begins. It is built to sit alongside your studies or a job, but it does require regular practice.",
  },
];
