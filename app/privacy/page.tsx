import { LegalDocument, legalMetadata } from "@/components/legal/LegalDocument";
import { getLegalPage } from "@/data/legal";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const page = getLegalPage("privacy");

export const metadata: Metadata = page ? legalMetadata(page) : {};

export default function PrivacyPage() {
  if (!page) notFound();
  return <LegalDocument page={page} />;
}
