
import React from "react";
import { Trophy } from "lucide-react";

import { Reveal, SectionTitle } from "./shared.jsx";
import {
  experience,
  achievements,
} from "../data/portfolio.js";

export default function ExperienceSection() {
  return (
    <section
      className="section-shell section-block experience-section"
      id="experience"
    >
      <SectionTitle
        index="05"
        eyebrow="THE JOURNEY SO FAR"
        title={
          <>
            Experience &{" "}
            <span className="serif-accent">
              milestones.
            </span>
          </>
        }
        description="A snapshot of my education, internship, hackathon participation and certifications."
      />

      <div className="timeline">
        {experience.map((item, i) => {
          const Icon = item.icon;

          return (
            <Reveal
              key={item.role}
              delay={i * 80}
              className="timeline-item"
            >
              <div className="timeline-marker">
                <Icon size={19} />
              </div>

              <div className="timeline-card">
                <div className="timeline-topline">
                  <span className="eyebrow">
                    {item.type}
                  </span>

                  <span>{item.period}</span>
                </div>

                <h3>{item.role}</h3>

                <p className="timeline-organisation">
                  {item.organisation}
                </p>

                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="achievement-wrap">
        <div className="achievement-heading">
          <Trophy size={20} />

          <div>
            <p className="eyebrow">
              ACHIEVEMENTS & CERTIFICATIONS
            </p>

            <h3>
              Keep learning. Keep showing up.
            </h3>
          </div>
        </div>

        <div className="achievement-grid">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="achievement-card"
                key={item.title}
              >
                <span>
                  <Icon size={17} />
                </span>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
