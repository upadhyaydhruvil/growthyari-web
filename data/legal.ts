/**
 * Legal pages: Privacy, Terms and Refunds.
 *
 * The site collects personal data through its application and enquiry forms
 * and it takes payment, so these three pages are not optional dressing.
 *
 * The Privacy Policy below describes what this codebase actually does — it is
 * written from the form fields and the delivery route, not from a template.
 * Terms and Refunds contain [PLACEHOLDER: …] markers wherever only GrowthYari
 * can state the answer, because a refund window invented by a developer is
 * worse than an obvious blank.
 */

export interface LegalLink {
  label: string;
  /** A literal route, not `string` — Next types `Link.href` against known routes. */
  href: "/privacy" | "/terms" | "/refund";
}

export const legalLinks: LegalLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalPage {
  slug: string;
  title: string;
  description: string;
  /** Stated so a reader can see how current the page is. */
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const privacy: LegalPage = {
  slug: "privacy",
  title: "Privacy Policy",
  description:
    "What GrowthYari collects through its enquiry and application forms, how it is used, who it is sent to, and how to ask for it to be deleted.",
  updated: "8 October 2026",
  intro:
    "This policy covers growthyari.com. It is written to describe what the website actually does, not what a template suggests it might do.",
  sections: [
    {
      heading: "What we collect",
      paragraphs: [
        "The website has two forms. Both send their contents to our email inbox and neither stores anything in a database.",
      ],
      list: [
        "Enquiry form: name, email, phone (optional), subject and message.",
        "Application and workshop registration form: name, email, phone (optional), current status, what you want to change, and the program or workshop you selected.",
        "A hidden field used only to detect automated submissions.",
      ],
    },
    {
      heading: "Why we collect it",
      paragraphs: [
        "To reply to you, to assess whether the program is a fit, and to arrange a Career Assessment call if it is. We do not use your details for advertising and we do not sell them.",
      ],
    },
    {
      heading: "How it is delivered and stored",
      paragraphs: [
        "Submissions are emailed to GrowthYari by Resend, an email delivery service. The website itself keeps no copy — if a message is lost in your inbox, we cannot recover it from the site.",
        "Your message is retained in our email account for as long as we need it to reply and to keep a record of what was agreed. Ask us to delete it and we will.",
      ],
    },
    {
      heading: "Cookies and tracking",
      paragraphs: [
        "growthyari.com sets no cookies of its own and runs no advertising or analytics scripts. Your host may record standard server logs — IP address, time of request and the page requested — for security and reliability.",
      ],
    },
    {
      heading: "Who else sees your data",
      list: [
        "Resend — delivers form submissions to our inbox.",
        "Our hosting provider — serves the site and keeps those server logs.",
      ],
      paragraphs: [
        "Neither is permitted to use your details for their own marketing in connection with this site.",
      ],
    },
    {
      heading: "Your choices",
      list: [
        "You do not have to give a phone number — it is marked optional on both forms.",
        "You can ask what we hold about you, ask for a correction, or ask us to delete it entirely.",
        "Use the contact page, or write to akash@growthyari.com.",
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "If what the site collects changes, this page changes with it. The date at the top is when it was last updated.",
      ],
    },
  ],
};

const terms: LegalPage = {
  slug: "terms",
  title: "Terms of Use",
  description:
    "The terms that apply to using growthyari.com and to applying for a GrowthYari program or workshop.",
  updated: "8 October 2026",
  intro:
    "By using this website and submitting an application you agree to these terms. [PLACEHOLDER: registered legal entity name and registered address, e.g. GrowthYari, a proprietorship / LLP / company registered at …]",
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        "growthyari.com is operated by GrowthYari. [PLACEHOLDER: full legal entity name, registration number and registered office address for the Terms page header.]",
      ],
    },
    {
      heading: "The website",
      paragraphs: [
        "Content on this site describes the programs as accurately as we can. Program dates, schedules and prices may change before you enrol, and the version that applies is the one confirmed to you in writing after selection.",
        "Nothing on this site is a guarantee of employment, interviews, income or business results.",
      ],
    },
    {
      heading: "Applying is not enrolment",
      paragraphs: [
        "Submitting an application or workshop registration does not create a place. A place is confirmed only after the Career Assessment call and selection, and is only held once payment has been received.",
        "We may decline an application. Where we do, we will say so plainly and take no payment.",
      ],
    },
    {
      heading: "Payment",
      paragraphs: [
        "Prices shown on the site include GST at the stated rate where a total is displayed. Payment is arranged after selection and never through this website before that point.",
        "[PLACEHOLDER: payment terms — accepted methods, whether instalments exist, and when payment is due relative to the cohort start date.]",
      ],
    },
    {
      heading: "Your work and our materials",
      paragraphs: [
        "The recordings, documents and artefacts you produce belong to you. You grant us permission to use them internally to assess your progress.",
        "Course materials, session recordings and curriculum content belong to GrowthYari and are licensed to you for your own use during and after the program. They may not be resold or redistributed.",
      ],
    },
    {
      heading: "Acceptable use",
      list: [
        "Do not attempt to disrupt the site or submit automated or abusive content.",
        "Do not present our materials as your own training product.",
        "Do not record sessions without the consent of everyone present.",
      ],
    },
    {
      heading: "Liability",
      paragraphs: [
        "To the extent the law allows, GrowthYari is not liable for indirect or consequential loss arising from use of this site. [PLACEHOLDER: any liability cap, and the governing-law statement — expected to be India, with the courts at your registered place of business.]",
      ],
    },
    {
      heading: "Changes and contact",
      paragraphs: [
        "We may update these terms. The date at the top shows when. Questions go through the contact page or to akash@growthyari.com.",
      ],
    },
  ],
};

const refund: LegalPage = {
  slug: "refund",
  title: "Refund Policy",
  description:
    "When a GrowthYari program or workshop fee can be refunded, how to request one, and when it is paid.",
  updated: "8 October 2026",
  intro:
    "Read this before you pay. Refund terms should be clear in advance, not negotiated afterwards. Every figure and window below marked [PLACEHOLDER] must be filled in by GrowthYari before this page is linked from a payment flow.",
  sections: [
    {
      heading: "Cooling-off period",
      paragraphs: [
        "[PLACEHOLDER: e.g. Full refund if requested in writing within 7 days of payment and before the first session of the cohort has taken place.]",
      ],
    },
    {
      heading: "After the program starts",
      paragraphs: [
        "[PLACEHOLDER: e.g. Pro-rata refund for sessions not yet delivered, calculated from the session on which the request is received. State whether a deduction applies.]",
      ],
    },
    {
      heading: "Where a refund is not available",
      list: [
        "[PLACEHOLDER: e.g. once more than N sessions have been attended]",
        "[PLACEHOLDER: e.g. where a learner has not attended and not given notice]",
        "[PLACEHOLDER: workshop fees within N days of the session date]",
      ],
    },
    {
      heading: "Workshops",
      paragraphs: [
        "[PLACEHOLDER: workshop-specific refund and transfer rules, including whether a seat can be transferred to another person or to a later date.]",
      ],
    },
    {
      heading: "How to request one",
      list: [
        "Send a written request to akash@growthyari.com from the email address used to pay.",
        "Include your name, the program or workshop, and the date of payment.",
        "We acknowledge within [PLACEHOLDER: e.g. 3 working days] and confirm the outcome within [PLACEHOLDER: e.g. 14 days].",
      ],
    },
    {
      heading: "How it is paid",
      paragraphs: [
        "Approved refunds are returned by the original payment method. [PLACEHOLDER: refund processing time, e.g. within 10 working days of approval, and whether bank charges are borne by the requester.] A GST credit already invoiced will be adjusted accordingly.",
      ],
    },
  ],
};

export const legalPages: LegalPage[] = [privacy, terms, refund];

export const getLegalPage = (slug: string) =>
  legalPages.find((page) => page.slug === slug);
