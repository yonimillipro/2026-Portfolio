import { capabilities } from "../data/portfolio";

export default function Capabilities() {
  return (
    <section className="section" id="capabilities" aria-labelledby="capabilities-title">
      <div className="section-heading">
        <p>03 / Capabilities</p>
        <h2 id="capabilities-title">A practical toolkit—not a wall of percentages.</h2>
      </div>

      <div className="capability-grid">
        {capabilities.map((capability, index) => (
          <article key={capability.title}>
            <span className="capability-index">0{index + 1}</span>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
            <ul>
              {capability.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
