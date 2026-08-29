import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section split-section" id="experience" aria-labelledby="experience-title">
      <div className="section-heading compact-heading">
        <p>02 / Experience</p>
        <h2 id="experience-title">Building, supporting, and learning in the real world.</h2>
      </div>

      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-row" key={`${item.role}-${item.period}`}>
            <span className="experience-index">0{index + 1}</span>
            <div>
              <p className="experience-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="experience-company">{item.company}</p>
            </div>
            <p className="experience-detail">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
