
import React from "react";
import {
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";

import { Reveal, SectionTitle } from "./shared.jsx";

export default function AboutSection() {
  return (
    <section
      className="section-shell section-block about-section"
      id="about"
    >
      <SectionTitle
        index="01"
        eyebrow="A LITTLE ABOUT ME"
        title={
          <>
            Curious mind.
            <br />
            <span className="serif-accent">
              Practical builder.
            </span>
          </>
        }
        description="A quick introduction, beyond the code."
      />

      <div className="about-grid">
        <Reveal className="about-note">
          <span className="note-mark">“</span>

          <p>
            I like understanding how things work, then building
            something useful with that knowledge.
          </p>

          <span className="note-signature">— Udit</span>

          <div className="about-note-tag">
            <Code2 size={14} />
            BUILD · LEARN · IMPROVE
          </div>
        </Reveal>

        <Reveal className="about-copy" delay={120}>
          <p>
            I'm pursuing a B.Tech in Computer Science Engineering
            at <strong>ABES Institute of Technology</strong>. My
            interests sit at the intersection of Java-based backend
            development, React interfaces, and AI-enabled applications.
          </p>

          <p>
            I've worked on an AI-based real-time posture detection
            system and a responsive admin portal, and completed a
            Web Development Internship at SYNTECHXHUB. I enjoy
            learning by building, solving problems, and improving
            the details that make an application easier to use.
          </p>

          <div className="about-facts">
            <div>
              <GraduationCap size={16} />
              <span>EDUCATION</span>
              <strong>B.Tech · CSE</strong>
            </div>

            <div>
              <Code2 size={16} />
              <span>CGPA</span>
              <strong>7.56 / 10</strong>
            </div>

            <div>
              <BriefcaseBusiness size={16} />
              <span>INTERNSHIP</span>
              <strong>Web Development</strong>
            </div>

            <div>
              <MapPin size={16} />
              <span>LOCATION</span>
              <strong>Ghaziabad, India</strong>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
