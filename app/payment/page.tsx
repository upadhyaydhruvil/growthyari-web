import { redirect } from "next/navigation";

/**
 * Pricing and online payment were removed in the 2026-10 restructure. The old
 * checkout route is kept as a permanent redirect so any existing link, bookmark
 * or search result lands on the single registration portal instead of a 404.
 */
export default function PaymentPage() {
  redirect("/register");
}
