
import React, { useEffect, useState } from "react";

import {
  Globe,
  ExternalLink,
  Code2,
  ArrowUpRight,
  BookOpen,
  X,
  CheckCircle2,
} from "lucide-react";

import { Reveal, SectionTitle } from "./shared.jsx";
import { projects } from "../data/portfolio.js";

function ProjectCaseStudy({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [project, onClose]);

  if (!project) return null;

  const Icon = project.icon;

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <article
        className="case-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        <div
          className={`case-modal-hero project-${project.tone}`}
        >
          <span className="eyebrow">
            PROJECT CASE STUDY · {project.number}
          </span>

          <div className="case-modal-icon">
            <Icon size={38} />
          </div>

          <h2 id="case-title">{project.title}</h2>
          <p>{project.subtitle}</p>
        </div>

        <div className="case-modal-content">
          <div className="case-detail-block">
            <h3>The problem</h3>
            <p>{project.problem}</p>
          </div>

          <div className="case-detail-block">
            <h3>Approach</h3>

            <ul>
              {project.approach.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="case-detail-block">
            <h3>My contribution</h3>
            <p>{project.contribution}</p>
          </div>

          <div className="case-detail-block">
            <h3>Architecture overview</h3>

            <div className="case-flow">
              {project.architecture.map((step, i) => (
                <div
                  className="case-flow-item"
                  key={step}
                >
                  <span>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <strong>{step}</strong>
                </div>
              ))}
            </div>

            <p className="case-disclaimer">
              A conceptual summary based on the project
              description; exact production topology may differ.
            </p>
          </div>

          <div className="case-detail-block">
            <h3>Tech stack</h3>

            <div className="tech-stack">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="case-modal-actions">
            {project.href ? (
              <a
                className="button button-primary"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <Globe size={16} />
                Live preview
                <ExternalLink size={14} />
              </a>
            ) : (
              <span className="preview-note">
                <Globe size={16} />
                Live demo URL not added yet
              </span>
            )}

            {project.repository ? (
              <a
                className="button button-outline"
                href={project.repository}
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={16} />
                Source code
                <ArrowUpRight size={14} />
              </a>
            ) : (
              <a
                className="button button-outline"
                href="https://github.com/Beastaleast"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={16} />
                Browse GitHub
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      className="section-shell section-block projects-section"
      id="projects"
    >
      <SectionTitle
        index="03"
        eyebrow="SELECTED WORK"
        title={
          <>
            Things I've{" "}
            <span className="serif-accent">built.</span>
          </>
        }
        description="Explore the problem, approach, technologies and architecture behind each project."
      />

      <div className="projects-list">
        {projects.map((project) => {
          const {
            number,
            type,
            title,
            subtitle,
            description,
            stack,
            icon: Icon,
            tone,
            href,
            preview,
          } = project;

          return (
            <Reveal
              key={number}
              className={`project-card project-${tone}`}
            >
              <div className="project-visual">
                <div className="project-visual-top">
                  <span>PROJECT_{number}</span>
                  <span>{type}</span>
                </div>

                <div className="project-art-circle">
                  <Icon size={46} strokeWidth={1.35} />
                </div>

                {number === "01" ? (
                  <div className="posture-ui">
                    <span className="ui-dot" />
                    <span>POSTURE STATUS</span>
                    <strong>Monitoring concept</strong>

                    <div className="ui-bars">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                ) : (
                  <div className="portal-ui">
                    <div className="portal-side" />

                    <div className="portal-lines">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="portal-table">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                )}

                <span className="project-number">
                  {number}
                </span>
              </div>

              <div className="project-info">
                <p className="eyebrow">{type}</p>

                <h3>{title}</h3>

                <p className="project-subtitle">
                  {subtitle}
                </p>

                <p className="project-description">
                  {description}
                </p>

                <div className="tech-stack">
                  {stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {href ? (
                    <a
                      className="text-link"
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Globe size={16} />
                      Live preview
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="preview-note">
                      <Globe size={16} />
                      {preview}
                    </span>
                  )}

                  <button
                    className="text-link case-study-trigger"
                    type="button"
                    onClick={() =>
                      setSelectedProject(project)
                    }
                  >
                    <BookOpen size={16} />
                    Case study
                    <ArrowUpRight size={14} />
                  </button>
                </div>

                <button
                  className="project-details-button"
                  type="button"
                  onClick={() =>
                    setSelectedProject(project)
                  }
                >
                  Explore project details
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="project-footnote">
        <span className="tiny-star">✳</span>
        Add real deployed URLs in{" "}
        <code>src/data/portfolio.js</code> when the projects
        are publicly hosted. No demo URLs are invented.
      </Reveal>

      <ProjectCaseStudy
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
