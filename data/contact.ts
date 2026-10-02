/**
 * Contact details.
 *
 * The email address was supplied by the site owner and is the inbox every
 * enquiry from the contact form is delivered to.
 *
 * Everything else is still intentionally `null`. growthyari.com does not
 * publish a phone number, WhatsApp number, office address or social profiles,
 * so those render a clear "not published yet" state rather than a made-up
 * value. Fill one in and the UI picks it up with no other changes.
 */

/** The inbox the contact form delivers to. Must match CONTACT_TO in .env. */
export const contactEmail = "akash@growthyari.com";

export interface ContactChannel {
  id: "email" | "phone" | "whatsapp" | "linkedin" | "instagram" | "address";
  label: string;
  value: string | null;
  /** What the visitor should do instead, when there is no value yet. */
  fallback: string;
  href: string | null;
}

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: contactEmail,
    fallback: "",
    href: `mailto:${contactEmail}`,
  },
  {
    id: "phone",
    label: "Phone",
    value: null,
    fallback: "No public phone number yet — use the enquiry form.",
    href: null,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: null,
    fallback: "No public WhatsApp number yet — use the enquiry form.",
    href: null,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: null,
    fallback: "No public LinkedIn profile yet.",
    href: null,
  },
  {
    id: "address",
    label: "Office",
    value: null,
    fallback: "Sessions are held live online. No published office address.",
    href: null,
  },
];

/** What actually happens after someone gets in touch, per the current site. */
export const contactResponse = {
  title: "What happens after you reach out",
  steps: [
    "You send the enquiry — it takes about three minutes.",
    "We review your goals and background.",
    "We invite you to a 1:1 Career Assessment call to map your growth path.",
  ],
} as const;
