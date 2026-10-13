
import React from "react";

import {
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
  Code2,
  Sparkles,
  Mail,
} from "lucide-react";

import { Reveal } from "./shared.jsx";

export default function HeroSection() {
  return (
    <section
      className="hero section-shell"
      id="home"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <Reveal>
          <div className="availability">
            <span className="status-dot" />
            OPEN TO DEVELOPER OPPORTUNITIES
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="hero-kicker">
            JAVA · REACT · BUILDING FOR THE WEB
          </p>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="hero-title" id="hero-title">
            Hello, I'm Udit.
            <br />
            <span>Code with purpose.</span>
          </h1>
        </Reveal>

        <Reveal delay={210}>
          <p className="hero-description">
            Computer Science Engineering student and developer
            who enjoys turning practical ideas into thoughtful,
            responsive web experiences — from frontend interfaces
            to APIs and AI-powered projects.
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="#projects"
            >
              Explore projects
              <ArrowDownRight size={17} />
            </a>

            <a
              className="button button-quiet"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View resume
              <ArrowUpRight size={16} />
            </a>

            <a
              className="button button-quiet"
              href="mailto:uditkushwaha250@gmail.com"
            >
              <Mail size={16} />
              Contact me
            </a>
          </div>
        </Reveal>

        <Reveal delay={350}>
          <div className="hero-location">
            <MapPin size={15} />
            Ghaziabad, India
            <span className="location-divider">/</span>
            Kanpur roots
          </div>
        </Reveal>
      </div>

      <Reveal className="hero-art" delay={180}>
        <div className="hero-art-grid" />

        <div className="hero-orbit orbit-a" />
        <div className="hero-orbit orbit-b" />

        <div className="hero-sticker sticker-code">
          <Code2 size={19} />

          <span>
            Clean code,
            <br />
            clear thinking.
          </span>
        </div>

        <div className="hero-monogram">
          <span>UK</span>

          <i>
            DEVELOPER
            <br />
            PORTFOLIO / 2026
          </i>
        </div>

        <div className="floating-chip chip-java">
          <span className="chip-dot" />
          Java & Spring
        </div>

        <div className="floating-chip chip-react">
          <span className="react-glyph">✳</span>
          React.js
        </div>

        <div
          className="hero-terminal"
          aria-label="Example Java code"
        >
          <div className="terminal-top">
            <span />
            <span />
            <span />
            <small>Developer.java</small>
          </div>

          <pre>
            <code>
              <span className="code-purple">class</span>{" "}
              <span className="code-blue">Developer</span>{" "}
              {"{"}
              {"\n"}
              {"  "}
              <span className="code-purple">String</span>{" "}
              focus ={" "}
              <span className="code-green">
                "building"
              </span>
              ;
              {"\n"}
              {"  "}
              <span className="code-purple">void</span>{" "}
              create() {"{"}
              {"\n"}
              {"    "}learn(); ship(); improve();
              {"\n"}
              {"  "}
              {"}"}
              {"\n"}
              {"}"}
            </code>
          </pre>
        </div>

        <div className="hero-art-foot">
          <span>IDEAS → INTERFACES</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </Reveal>

      <div className="hero-bottomline">
        <span>PORTFOLIO / 2026</span>

        <span>
          DESIGNED TO KEEP MOVING
          <Sparkles size={13} />
        </span>
      </div>
    </section>
  );
}
