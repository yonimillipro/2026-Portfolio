import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function MotionController() {
  useGSAP(() => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        heroTimeline
          .from(".hero-meta", { autoAlpha: 0, y: -12, duration: 0.45 })
          .from(
            ".hero-title-line > span",
            { yPercent: 110, rotate: 1.5, duration: 0.8, stagger: 0.08 },
            "-=0.18",
          )
          .from(".hero-bottom", { autoAlpha: 0, y: 18, duration: 0.55 }, "-=0.42")
          .from(".hero-portrait", { autoAlpha: 0, xPercent: 4, duration: 0.65 }, "-=0.5");

        gsap.to(".scroll-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.25 },
        });

        gsap.to(".portrait-frame img", {
          scale: 1.075,
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        gsap.utils.toArray<HTMLElement>(".section-heading").forEach((heading) => {
          const title = heading.querySelector("h2");
          const label = heading.querySelector("p");
          gsap.from([label, title], {
            autoAlpha: 0,
            y: 18,
            duration: 0.52,
            stagger: 0.07,
            ease: "power2.out",
            scrollTrigger: { trigger: heading, start: "top 84%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>(".project-row").forEach((row) => {
          const mark = row.querySelector(".project-mark");
          const content = row.querySelectorAll(".project-intro, .project-detail, .project-actions");

          gsap.from(content, {
            autoAlpha: 0,
            y: 20,
            duration: 0.55,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: { trigger: row, start: "top 82%", once: true },
          });

          if (mark) {
            gsap.fromTo(
              mark,
              { yPercent: -4 },
              {
                yPercent: 4,
                ease: "none",
                scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: 0.7 },
              },
            );
          }
        });

        gsap.from(".experience-row", {
          autoAlpha: 0,
          x: 18,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ".experience-list", start: "top 82%", once: true },
        });

        gsap.from(".capability-grid article", {
          autoAlpha: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: { trigger: ".capability-grid", start: "top 82%", once: true },
        });

        gsap.from(".about-copy > *", {
          autoAlpha: 0,
          y: 20,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ".about-copy", start: "top 78%", once: true },
        });

        gsap.from(".contact-intro > *, .contact-form > *", {
          autoAlpha: 0,
          y: 16,
          duration: 0.5,
          stagger: 0.045,
          ease: "power2.out",
          scrollTrigger: { trigger: ".contact-section", start: "top 72%", once: true },
        });

        ScrollTrigger.refresh();
      });

      media.add(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          const magneticElements = gsap.utils.toArray<HTMLElement>("[data-magnetic]");
          const cleanups: Array<() => void> = [];

          magneticElements.forEach((element) => {
            const moveX = gsap.quickTo(element, "x", { duration: 0.28, ease: "power3.out" });
            const moveY = gsap.quickTo(element, "y", { duration: 0.28, ease: "power3.out" });

            const onMove = (event: PointerEvent) => {
              const bounds = element.getBoundingClientRect();
              moveX((event.clientX - (bounds.left + bounds.width / 2)) * 0.16);
              moveY((event.clientY - (bounds.top + bounds.height / 2)) * 0.2);
            };
            const onLeave = () => {
              moveX(0);
              moveY(0);
            };

            element.addEventListener("pointermove", onMove);
            element.addEventListener("pointerleave", onLeave);
            cleanups.push(() => {
              element.removeEventListener("pointermove", onMove);
              element.removeEventListener("pointerleave", onLeave);
            });
          });

          return () => cleanups.forEach((cleanup) => cleanup());
        },
      );

      return () => media.revert();
    }, []);

  return null;
}
