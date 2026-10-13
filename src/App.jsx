
import React, { useEffect, useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import LinksSection from "./components/LinksSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ArchitectureSection from "./components/ArchitectureSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import GithubSection from "./components/GithubSection.jsx";
import ResumeSection from "./components/ResumeSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealElements =
      document.querySelectorAll(".reveal");

    let revealObserver;

    if (
      reduceMotion ||
      !("IntersectionObserver" in window)
    ) {
      revealElements.forEach((el) =>
        el.classList.add("visible")
      );
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
        }
      );

      revealElements.forEach((el) =>
        revealObserver.observe(el)
      );
    }

    const sectionObserver =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          {
            rootMargin: "-25% 0px -65% 0px",
          }
        )
        : null;

    document
      .querySelectorAll("main section[id]")
      .forEach((el) => sectionObserver?.observe(el));

    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setScrollProgress(
        scrollable > 0
          ? (window.scrollY / scrollable) * 100
          : 0
      );
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      revealObserver?.disconnect();
      sectionObserver?.disconnect();

      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="site-shell">
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
      />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <LinksSection />
        <ProjectsSection />
        <ArchitectureSection />
        <ExperienceSection />
        <SkillsSection />
        <GithubSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
