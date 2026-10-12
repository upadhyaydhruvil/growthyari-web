import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Briefcase,
  FolderSearch,
  GraduationCap,
  MessagesSquare,
  Presentation,
  TrendingUp,
  Users,
} from "lucide-react";

export type PageRoute =
  | "/"
  | "/programs"
  | "/programs/[slug]"
  | "/workshops"
  | "/about";

export type Placement = "background" | "feature" | "pair";

export interface Illustration {
  src: string;
  label: string;
  alt: string;
  icon: LucideIcon;
  /** Which page it appears on. */
  page: PageRoute;
  placement: Placement;
  /** Order within its page. */
  order: number;
}

/**
 * Program illustrations.
 *
 * The nine source files were all 1408x768 with random-hash filenames, so they
 * are matched to their descriptions by the order they were supplied. That
 * mapping is a stated assumption, not a verified one.
 *
 * Images are distributed across pages rather than pooled into one gallery, and
 * exactly one placement in this file is `"background"`. Adding a second
 * background image means editing this array, deliberately, not by accident.
 */
export const illustrations: Illustration[] = [
  {
    src: "/gallery/gallery-01.webp",
    label: "Career growth",
    alt: "Indian college students collaborating around a laptop, with an upward arrow and growth chart in the background.",
    icon: TrendingUp,
    page: "/",
    placement: "background",
    order: 0,
  },
  {
    src: "/gallery/gallery-08.webp",
    label: "Mentorship",
    alt: "A group of diverse young professionals standing together beside a growing plant.",
    icon: Users,
    page: "/",
    placement: "feature",
    order: 1,
  },
  {
    src: "/gallery/student-01.jpg",
    label: "Live session photo 1",
    alt: "[PLACEHOLDER: confirm what this program photo shows].",
    icon: GraduationCap,
    page: "/programs",
    placement: "feature",
    order: 0,
  },
  {
    src: "/gallery/student-02.jpg",
    label: "Live session photo 2",
    alt: "[PLACEHOLDER: confirm what this program photo shows].",
    icon: BarChart3,
    page: "/programs",
    placement: "pair",
    order: 1,
  },
  {
    src: "/gallery/student-03.jpg",
    label: "Live session photo 3",
    alt: "[PLACEHOLDER: confirm what this program photo shows].",
    icon: GraduationCap,
    page: "/programs",
    placement: "feature",
    order: 2,
  },
  {
    src: "/gallery/student-04.jpg",
    label: "Live session photo 4",
    alt: "[PLACEHOLDER: confirm what this program photo shows].",
    icon: BarChart3,
    page: "/programs",
    placement: "pair",
    order: 3,
  },
  {
    src: "/gallery/gallery-07.webp",
    label: "Progress tracking",
    alt: "A simple dashboard screen with a profile icon, progress rings and a trophy icon.",
    icon: TrendingUp,
    page: "/programs/[slug]",
    placement: "feature",
    order: 0,
  },
  {
    src: "/gallery/gallery-03.webp",
    label: "Live online workshop",
    alt: "A presenter on a screen addressing a small audience of icons, with calendar and clock elements alongside.",
    icon: Presentation,
    page: "/workshops",
    placement: "feature",
    order: 0,
  },
  {
    src: "/gallery/gallery-06.webp",
    label: "Community",
    alt: "A group of people talking through speech bubbles, one bubble shaped like the WhatsApp logo.",
    icon: MessagesSquare,
    page: "/workshops",
    placement: "pair",
    order: 1,
  },
  {
    src: "/gallery/gallery-05.webp",
    label: "Case study review",
    alt: "An open folder of documents with a magnifying glass over it and a small bar chart behind.",
    icon: FolderSearch,
    page: "/about",
    placement: "feature",
    order: 0,
  },
  {
    src: "/gallery/gallery-09.webp",
    label: "Business growth",
    alt: "Program illustration. Subject not yet confirmed — this file had no matching description.",
    icon: Briefcase,
    page: "/about",
    placement: "pair",
    order: 1,
  },
];

export function illustrationsFor(page: PageRoute, placement: Placement) {
  return illustrations
    .filter((item) => item.page === page && item.placement === placement)
    .sort((a, b) => a.order - b.order);
}

/** The single background image, if one is configured. */
export function backgroundIllustration() {
  return illustrations.find((item) => item.placement === "background") ?? null;
}