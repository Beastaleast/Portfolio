
import React from "react";

import { Reveal, SectionTitle } from "./shared.jsx";
import { skillGroups } from "../data/portfolio.js";

export default function SkillsSection() {
  return (
    <section
      className="section-shell section-block skills-section"
      id="skills"
    >
      <SectionTitle
        index="06"
        eyebrow="TOOLS OF THE TRADE"
        title={
          <>
            Skills I bring
            <span className="serif-accent">
              {" "}to the table.
            </span>
          </>
        }
        description="Technologies and fundamentals I use to build practical web applications."
      />

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <Reveal
              key={group.title}
              delay={index * 80}
              className="skill-card"
            >
              <div className="skill-card-heading">
                <span className="skill-icon">
                  <Icon size={21} />
                </span>

                <h3>{group.title}</h3>
              </div>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
