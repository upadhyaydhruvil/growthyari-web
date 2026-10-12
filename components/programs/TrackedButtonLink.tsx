"use client";

import type { ComponentProps, MouseEvent } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

type ButtonLinkProps = ComponentProps<typeof ButtonLink>;

/**
 * ButtonLink with an analytics event attached. Exists as its own client
 * component so server components can render it by passing only serialisable
 * props (an event name + a plain object) — a raw `onClick` callback cannot be
 * passed from a server component to a client one.
 */
export function TrackedButtonLink({
  event,
  eventProps,
  onClick,
  ...rest
}: ButtonLinkProps & {
  event: string;
  eventProps?: Record<string, unknown>;
}) {
  return (
    <ButtonLink
      {...rest}
      onClick={(clickEvent: MouseEvent<HTMLAnchorElement>) => {
        track(event, eventProps);
        onClick?.(clickEvent);
      }}
    />
  );
}