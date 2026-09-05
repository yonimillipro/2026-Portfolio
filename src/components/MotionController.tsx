import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function MotionController() {
  useGSAP(() => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const sectionMotion = [
          { selector: "#work", layers: [".section-heading", ".project-list"] },
          { selector: "#experience", layers: [".section-heading", ".experience-list"] },
          { selector: "#capabilities", layers: [".section-heading", ".capability-grid"] },
          { selector: "#about", layers: [".about-label", ".about-copy"] },
          { selector: "#contact", layers: [".contact-intro", ".contact-form"] },
        ];

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

        const heroScene = document.querySelector<HTMLElement>(".hero-scene");
        if (heroScene) {
          gsap.to(heroScene, {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 0.7,
            },
          });
        }

        const pageSections = [document.querySelector<HTMLElement>(".hero")];

        sectionMotion.forEach(({ selector, layers }, sectionIndex) => {
          const section = document.querySelector<HTMLElement>(selector);
          if (!section) return;

          pageSections.push(section);
          const direction = sectionIndex % 2 === 0 ? 1 : -1;

          layers.forEach((layerSelector, layerIndex) => {
            const layer = section.querySelector<HTMLElement>(layerSelector);
            if (!layer) return;

            const horizontalOffset = direction * (layerIndex === 0 ? 14 : -10);

            gsap.fromTo(
              layer,
              {
                autoAlpha: 0.22,
                x: horizontalOffset,
                y: layerIndex === 0 ? 12 : 22,
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                ease: "none",
                force3D: true,
                scrollTrigger: {
                  trigger: section,
                  start: `top ${94 - layerIndex * 2}%`,
                  end: `top ${62 - layerIndex * 2}%`,
                  scrub: 0.4 + layerIndex * 0.15,
                  invalidateOnRefresh: true,
                },
              },
            );
          });
        });

        pageSections.filter((section): section is HTMLElement => Boolean(section)).forEach(
          (section, sectionIndex, sections) => {
            const nextSection = sections[sectionIndex + 1];
            if (!nextSection) return;

            gsap.fromTo(
              section,
              { autoAlpha: 1 },
              {
                autoAlpha: 0.62,
                ease: "none",
                scrollTrigger: {
                  trigger: nextSection,
                  start: "top bottom",
                  end: "top 72%",
                  scrub: 0.6,
                  invalidateOnRefresh: true,
                },
              },
            );
          },
        );

        gsap.utils.toArray<HTMLElement>(".project-row").forEach((row) => {
          const mark = row.querySelector(".project-mark");

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
