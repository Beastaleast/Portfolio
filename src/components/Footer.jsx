
import React from "react";
import { ArrowUpRight, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer section-shell">
      <a className="brand footer-brand" href="#home">
        <span className="brand-mark">u.</span>
        <span>udit kushwaha</span>
      </a>

      <span>
        Designed with curiosity. Built with code.
      </span>

      <span className="footer-tech">
        <Code2 size={13} />
        React · Vite · CSS
      </span>

      <a href="#home" className="back-top">
        BACK TO TOP
        <ArrowUpRight size={14} />
      </a>
    </footer>
  );
}
