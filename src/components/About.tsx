import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="about-label">
        <p>04 / About</p>
        <span>English + Amharic</span>
      </div>
      <div className="about-copy">
        <h2 id="about-title">
          I care about the point where a clean interface meets a dependable system.
        </h2>
        <div className="about-columns">
          <p>
            I work across React and TypeScript websites, React Native mobile apps,
            Electron desktop tools, APIs, and relational data. I like turning complex
            product rules into experiences that feel clear to the people using them.
          </p>
          <p>
            Today I work across healthcare IT and independent product development. That
            combination keeps me close to both the technical details and the everyday
            problems software is meant to solve.
          </p>
        </div>
        <a
          className="text-link"
          href="https://github.com/yonimillipro"
          target="_blank"
          rel="noreferrer"
        >
          See the rest of my work on GitHub <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
