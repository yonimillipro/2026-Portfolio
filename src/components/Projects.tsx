import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <p>01 / Selected work</p>
        <h2 id="work-title">Products built around real people and real workflows.</h2>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <article
            className="project-row"
            key={project.name}
          >
            <div className={`project-mark tone-${project.tone}`} aria-hidden="true">
              <span>0{index + 1}</span>
              <strong>{project.name.slice(0, 2).toUpperCase()}</strong>
            </div>

            <div className="project-intro">
              <div className="project-meta">
                <span>{project.type}</span>
                <span>{project.period}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
            </div>

            <div className="project-detail">
              <span className="project-status">{project.status}</span>
              <p>{project.contribution}</p>
              <ul aria-label={`${project.name} technologies`}>
                {project.stack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>

            {project.live || project.repository ? (
              <div className="project-actions" aria-label={`${project.name} links`}>
              {project.live ? (
                <a href={project.live} target="_blank" rel="noreferrer" data-magnetic>
                  Live <ArrowUpRight size={17} />
                </a>
              ) : null}
              {project.repository ? (
                <a href={project.repository} target="_blank" rel="noreferrer" data-magnetic>
                  {project.repositoryLabel ?? "Code"} <Github size={16} />
                </a>
              ) : null}
              </div>
            ) : null}
            {project.caseStudy ? (
              <details className="project-case-study">
                <summary>Inside the build <span className="sr-only">— {project.name}</span></summary>
                <div className="case-study-columns">
                  <div><h4>The problem</h4><p>{project.caseStudy.problem}</p></div>
                  <div><h4>The approach</h4><p>{project.caseStudy.approach}</p></div>
                  <div><h4>Current stage</h4><p>{project.caseStudy.stage}</p></div>
                </div>
              </details>
            ) : null}
          </article>
        ))}
      </div>
      <p className="development-note">ServiceLink Mobile — In development.</p>
    </section>
  );
}
