import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PauseCircle, PlayCircle } from "lucide-react";

const focusItems = [
  "Useful digital products.",
  "Reliable clinic systems.",
  "Clear web experiences.",
];

export default function DynamicHeroText() {
  const rootRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(media.matches);

    updatePreference();
    media.addEventListener("change", updatePreference);

    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>(".hero-dynamic-word");

      gsap.set(words, { autoAlpha: 0, yPercent: 70 });
      gsap.set(words[0], { autoAlpha: 1, yPercent: 0 });

      if (prefersReducedMotion) {
        timelineRef.current = null;
        return;
      }

      const timeline = gsap.timeline({ repeat: -1 });

      words.forEach((word, index) => {
        const nextWord = words[(index + 1) % words.length];

        timeline
          .to({}, { duration: 2.35 })
          .set(nextWord, { autoAlpha: 0, yPercent: 70 })
          .to(word, {
            autoAlpha: 0,
            yPercent: -70,
            duration: 0.28,
            ease: "power2.in",
          })
          .to(
            nextWord,
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.42,
              ease: "power3.out",
            },
            "-=0.1",
          );
      });

      timelineRef.current = timeline;

      return () => {
        timeline.kill();
        timelineRef.current = null;
      };
    },
    { scope: rootRef, dependencies: [prefersReducedMotion], revertOnUpdate: true },
  );

  useEffect(() => {
    timelineRef.current?.paused(isPaused);
  }, [isPaused, prefersReducedMotion]);

  return (
    <div className="hero-dynamic" ref={rootRef}>
      <span className="hero-dynamic-label">I build</span>
      <span className="hero-dynamic-viewport" aria-hidden="true">
        {focusItems.map((item) => (
          <span className="hero-dynamic-word" key={item}>
            {item}
          </span>
        ))}
      </span>
      <span className="sr-only">
        I build useful digital products, reliable clinic systems, and clear web experiences.
      </span>
      {!prefersReducedMotion ? (
        <button
          className="hero-dynamic-control"
          type="button"
          aria-label={isPaused ? "Resume rotating hero text" : "Pause rotating hero text"}
          aria-pressed={isPaused}
          onClick={() => setIsPaused((paused) => !paused)}
        >
          {isPaused ? <PlayCircle size={17} aria-hidden="true" /> : <PauseCircle size={17} aria-hidden="true" />}
        </button>
      ) : null}
    </div>
  );
}
