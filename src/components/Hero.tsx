import { lazy, Suspense, useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import DynamicHeroText from "./DynamicHeroText";

const AmbientScene = lazy(() => import("./AmbientScene"));

type HeroProps = {
  portraitUrl: string;
  resumeUrl: string;
};

export default function Hero({ portraitUrl, resumeUrl }: HeroProps) {
  const [showEnhancedScene, setShowEnhancedScene] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateScene = () => setShowEnhancedScene(!reducedMotion.matches);

    updateScene();
    reducedMotion.addEventListener("change", updateScene);

    return () => {
      reducedMotion.removeEventListener("change", updateScene);
    };
  }, []);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        {showEnhancedScene ? (
          <div className="hero-scene" aria-hidden="true">
            <Suspense fallback={null}>
              <AmbientScene />
            </Suspense>
          </div>
        ) : null}

        <div className="hero-meta">
          <span>Addis Ababa, Ethiopia</span>
          <span className="availability">
            <span className="status-dot" aria-hidden="true" />
            Open to product work
          </span>
        </div>

        <h1 id="hero-title">
          <span className="hero-title-line"><span>Software</span></span>
          <span className="hero-title-line accent-line"><span>engineer.</span></span>
          <span className="hero-title-line hero-platforms"><span>Web. Mobile. Desktop.</span></span>
        </h1>

        <div className="hero-bottom">
          <div className="hero-intro">
            <DynamicHeroText />
            <p>
              I’m Yonathan Million. I build websites, mobile and desktop
              applications, and the systems behind everyday workflows.
              My work connects software development with practical healthcare IT.
            </p>
          </div>
          <div className="button-row">
            <a className="button button-primary" href="#work" data-magnetic>
              Explore selected work <ArrowDownRight size={18} />
            </a>
            <a className="button button-secondary" href={resumeUrl} download data-magnetic>
              Résumé <Download size={17} />
            </a>
          </div>
        </div>
      </div>

      <aside className="hero-portrait" aria-label="Portrait and profile links">
        <div className="portrait-frame">
          <img
            src={portraitUrl}
            alt="Yonathan Million wearing a dark blazer"
            width="960"
            height="1280"
          />
          <div className="portrait-caption">
            <span>Software engineer</span>
            <span>IT officer</span>
          </div>
        </div>
        <div className="mobile-focus-panel">
          <span className="mobile-focus-label">Current focus</span>
          <strong>Mobile applications, Windows tools, and clinic systems.</strong>
          <span className="mobile-focus-stack">Web · Mobile · Desktop</span>
        </div>
        <div className="profile-links">
          <a href="https://github.com/yonimillipro" target="_blank" rel="noreferrer" data-magnetic>
            GitHub <ArrowUpRight size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/yoni-milli-25101a329/"
            target="_blank"
            rel="noreferrer"
            data-magnetic
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>
      </aside>
    </section>
  );
}
