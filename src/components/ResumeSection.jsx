
import React from "react";

import {
  FileText,
  Eye,
  ArrowUpRight,
  Download,
  CheckCircle2,
} from "lucide-react";

import { Reveal, SectionTitle } from "./shared.jsx";

export default function ResumeSection() {
  return (
    <section
      className="section-shell section-block resume-section"
      id="resume"
    >
      <SectionTitle
        index="08"
        eyebrow="THE FULL STORY"
        title={
          <>
            My resume,{" "}
            <span className="serif-accent">
              in one place.
            </span>
          </>
        }
        description="Read it here or open the PDF in a new tab. The current resume is included with this portfolio."
      />

      <Reveal className="resume-layout">
        <div className="resume-info">
          <div className="pdf-icon">
            <FileText size={31} />
          </div>

          <p className="eyebrow">
            CURRICULUM VITAE · PDF
          </p>

          <h3>Udit_Kushwaha_Resume.pdf</h3>

          <p>
            Education, internship experience, technical skills,
            projects, achievements, and certifications — all in
            the PDF below.
          </p>

          <div className="resume-buttons">
            <a
              className="button button-primary"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Eye size={17} />
              View full PDF
              <ArrowUpRight size={15} />
            </a>

            <a
              className="button button-outline"
              href="/resume.pdf"
              download="Udit_Kushwaha_Resume.pdf"
            >
              <Download size={17} />
              Download
            </a>
          </div>

          <div className="resume-public-note">
            <CheckCircle2 size={16} />
            Publicly viewable when you deploy your portfolio
          </div>

          <p className="resume-update-note">
            To update it later, replace{" "}
            <code>public/resume.pdf</code> with your new PDF
            using the same filename.
          </p>
        </div>

        <div className="pdf-preview">
          <div className="pdf-preview-bar">
            <span>
              <i />
              <i />
              <i />
            </span>

            <span>RESUME PREVIEW</span>

            <span>PDF</span>
          </div>

          <iframe
            title="Udit Kushwaha resume PDF preview"
            src="/resume.pdf#toolbar=0&navpanes=0&view=FitH"
            loading="lazy"
          />
        </div>
      </Reveal>
    </section>
  );
}
