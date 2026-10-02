"use client";

import { useEffect, useState } from "react";

/**
 * Cycles a phrase inside the hero headline.
 *
 * The headline is the one element guaranteed to be read, so rotating its
 * object gives the page a second reason to look twice. The word is kept in a
 * fixed-height box with a bottom clip so the layout cannot jump as the phrase
 * changes length.
 *
 * Screen readers get all the phrases at once, hidden, and the visible one is
 * `aria-hidden` — otherwise a reader would announce a phrase that is not
 * there yet.
 */

const WORDS = ["career.", "clients.", "confidence.", "proof."] as const;

const ROTATE_MS = 2600;

export function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <span className="relative inline-flex flex-col overflow-hidden align-bottom">
      <span className="sr-only">{WORDS.join(", ")}</span>

      <span
        aria-hidden="true"
        className="block bg-gradient-to-r from-neon via-neon-soft to-lime bg-clip-text text-transparent"
      >
        <span
          key={index}
          className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:animate-word-in"
        >
          {WORDS[index]}
        </span>
      </span>
    </span>
  );
}