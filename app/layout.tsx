import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Newsreader } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/data/site";
import "./globals.css";

/*
 * Editorial type system. A serif display does the emotional work in the
 * headings — it is what separates a career-growth brand from a course
 * marketplace — while Inter carries body copy and IBM Plex Mono keeps the
 * small uppercase eyebrows reading as editorial furniture rather than UI.
 */
const display = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.tagline} | ${site.name}`,
    template: site.titleTemplate,
  },
  description: site.defaultDescription,
  applicationName: site.name,
  keywords: [
    "GrowthYari",
    "communication skills",
    "sales training",
    "interview preparation",
    "public speaking",
    "12-week program",
    "college students",
    "freshers",
    "career growth India",
    "practical training",
  ],
  authors: [{ name: site.name, url: site.domain }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: site.domain },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    url: site.domain,
    title: `${site.tagline} | ${site.name}`,
    description: site.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.tagline} | ${site.name}`,
    description: site.defaultDescription,
  },
  robots: { index: true, follow: true },
  category: "education",
};

export const viewport: Viewport = {
  /*
   * The site is light in both schemes — there is no dark theme to
   * advertise. One entry rather than a media pair, so the browser chrome
   * cannot disagree with the page on a machine set to dark mode.
   */
  themeColor: "#F7F4ED",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      {/*
        The navbar hides itself until an effect flips its `mounted` flag, so
        with JS disabled it would never appear — and it holds every route. This
        forces it visible again without needing the effect.
      */}
      <noscript>
        <style>{`[class*="navbar"]{opacity:1!important;transform:none!important}
          [class*="page-enter"]{opacity:1!important;transform:none!important}`}</style>
      </noscript>
      <body className="flex min-h-full flex-col bg-canvas">
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
