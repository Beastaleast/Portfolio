
import React from "react";
import { ArrowUpRight } from "lucide-react";

import { Reveal, SectionTitle } from "./shared.jsx";
import { links } from "../data/portfolio.js";

export default function LinksSection() {
  return (
    <section
      className="section-shell section-block links-section"
      id="links"
    >
      <SectionTitle
        index="02"
        eyebrow="FIND ME AROUND THE WEB"
        title={
          <>
            All the right{" "}
            <span className="serif-accent">links.</span>
          </>
        }
        description="Want to explore my code, connect professionally, or get in touch? Start here."
      />

      <div className="links-grid">
        {links.map(
          ({ label, detail, href, icon: Icon }, i) => (
            <Reveal key={label} delay={i * 80}>
              <a
                className="link-card"
                href={href}
                target={
                  href.startsWith("mailto:")
                    ? undefined
                    : "_blank"
                }
                rel="noreferrer"
              >
                <span className="link-icon">
                  <Icon size={21} />
                </span>

                <span className="link-text">
                  <strong>{label}</strong>
                  <small>{detail}</small>
                </span>

                <ArrowUpRight
                  className="link-arrow"
                  size={19}
                />
              </a>
            </Reveal>
          )
        )}
      </div>
    </section>
  );
}
