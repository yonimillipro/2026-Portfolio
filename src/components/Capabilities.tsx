import { approach, capabilities } from "../data/portfolio";

export default function Capabilities() {
  return (
    <section className="section" id="capabilities" aria-labelledby="capabilities-title">
      <div className="section-heading">
        <p>03 / Capabilities</p>
        <h2 id="capabilities-title">From the interface to the system behind it.</h2>
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
      <div className="build-approach">
        <h3>How I build</h3>
        <ol>{approach.map((step) => (
          <li key={step.title}><strong>{step.title}</strong><p>{step.detail}</p></li>
        ))}</ol>
      </div>
    </section>
  );
}
