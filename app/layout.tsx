import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Inter_Tight } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/data/site";
import "./globals.css";

const display = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
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

  title: "GrowthYari",

  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },

  description: site.defaultDescription,
  applicationName: site.name,
  keywords: [
    "GrowthYari",
    "career skills",
    "sales training",
    "communication skills",
    "proof of work",
    "career coaching India",
    "career readiness",
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
    title:"GrowthYari",
    description: site.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthYari",
    description: site.defaultDescription,
  },
  robots: { index: true, follow: true },
  category: "education",
};

export const viewport: Viewport = {
  /*
   * The site is dark in both schemes — there is no light theme to advertise.
   * One entry rather than a media pair, so the browser chrome cannot disagree
   * with the page on a machine set to light mode.
   */
  themeColor: "#101a16",
  colorScheme: "dark",
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
      <body className="flex min-h-full flex-col bg-surface">
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
