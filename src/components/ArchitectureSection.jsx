
import React from "react";
import {
  Workflow,
  ArrowDown,
  Layers3,
} from "lucide-react";

import { Reveal, SectionTitle } from "./shared.jsx";
import { projects } from "../data/portfolio.js";

export default function ArchitectureSection() {
  const posture = projects.find(
    (p) => p.id === "postureAI"
  );

  return (
    <section
      className="section-shell section-block architecture-section"
      id="architecture"
    >
      <SectionTitle
        index="04"
        eyebrow="UNDER THE HOOD"
        title={
          <>
            How the pieces{" "}
            <span className="serif-accent">connect.</span>
          </>
        }
        description="A high-level view of the PostureAI flow, based on the technologies and integrations described in my resume."
      />

      <Reveal className="architecture-card">
        <div className="architecture-heading">
          <span className="architecture-icon">
            <Workflow size={22} />
          </span>

          <div>
            <p className="eyebrow">
              POSTUREAI · SYSTEM FLOW
            </p>
            <h3>
              From webcam input to posture history
            </h3>
          </div>
        </div>

        <div
          className="architecture-flow"
          aria-label="PostureAI system architecture flow"
        >
          {posture.architecture.map((step, index) => (
            <div
              className="architecture-node-wrap"
              key={step}
            >
              <div
                className={`architecture-node node-${index + 1}`}
              >
                <span>0{index + 1}</span>
                <Layers3 size={19} />
                <strong>{step}</strong>
              </div>

              {index < posture.architecture.length - 1 && (
                <div className="architecture-connector">
                  <span />
                  <ArrowDown size={16} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="architecture-foot">
          <span>
            <span className="status-dot" />
            REST API + WebSocket integration
          </span>

          <span>
            Conceptual overview, not a deployment diagram
          </span>
        </div>
      </Reveal>
    </section>
  );
}
