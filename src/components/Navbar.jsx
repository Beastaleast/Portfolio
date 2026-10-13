
import React from "react";

import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  ["about", "About"],
  ["links", "Links"],
  ["projects", "Projects"],
  ["architecture", "Architecture"],
  ["experience", "Journey"],
  ["skills", "Skills"],
  ["github", "GitHub"],
  ["resume", "Resume"],
  ["contact", "Contact"],
];

export default function Navbar({
  menuOpen,
  setMenuOpen,
  activeSection,
}) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a
        className="brand"
        href="#home"
        onClick={closeMenu}
        aria-label="Udit home"
      >
        <span className="brand-mark">u.</span>
        <span>udit kushwaha</span>
      </a>

      <button
        className="menu-toggle"
        aria-label={
          menuOpen
            ? "Close navigation"
            : "Open navigation"
        }
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <X size={21} />
        ) : (
          <Menu size={21} />
        )}
      </button>

      <nav
        id="primary-navigation"
        className={`nav-links ${
          menuOpen ? "nav-open" : ""
        }`}
        aria-label="Primary navigation"
      >
        {navItems.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={
              activeSection === id ? "active" : ""
            }
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}

        <a
          className="nav-cta"
          href="mailto:uditkushwaha250@gmail.com"
          onClick={closeMenu}
        >
          Say hello
          <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
