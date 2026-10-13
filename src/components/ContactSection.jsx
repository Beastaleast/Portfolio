
import React, { useState } from "react";

import {
  ArrowUpRight,
  MapPin,
  BriefcaseBusiness,
  Send,
  Copy,
  Check,
  Mail,
} from "lucide-react";

import { Reveal, SectionTitle } from "./shared.jsx";

const EMAIL = "uditkushwaha250@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setCopied(true);

      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  function submitMessage(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio message from ${name.trim()}`
    );

    const body = encodeURIComponent(
      `Name: ${name.trim()}\nReply email: ${senderEmail.trim()}\n\n${message.trim()}`
    );

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      className="section-shell section-block contact-section"
      id="contact"
    >
      <SectionTitle
        index="09"
        eyebrow="LET'S CONNECT"
        title={
          <>
            Have a good idea?
            <br />
            <span className="serif-accent">
              Let's make it real.
            </span>
          </>
        }
        description="I'm interested in developer opportunities, meaningful projects, and conversations about building useful software."
      />

      <div className="contact-card">
        <Reveal className="contact-copy">
          <p className="eyebrow">CONTACT DETAILS</p>

          <a
            className="contact-email"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
            <ArrowUpRight size={19} />
          </a>

          <div className="contact-quick-actions">
            <button
              type="button"
              className="copy-email-button"
              onClick={copyEmail}
            >
              {copied ? (
                <Check size={15} />
              ) : (
                <Copy size={15} />
              )}

              {copied ? "Copied email" : "Copy email"}
            </button>

            <a
              className="copy-email-button"
              href="https://www.linkedin.com/in/udit-kushwaha250/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="contact-meta">
            <span>
              <MapPin size={15} />
              Ghaziabad, India
            </span>

            <span>
              <BriefcaseBusiness size={15} />
              Developer opportunities
            </span>
          </div>

          <div className="contact-form-wrap">
            <h3>Send a message</h3>

            <p>
              This form opens your email app with the message
              prepared. It does not store or send data through
              a website server.
            </p>

            <form
              className="contact-form"
              onSubmit={submitMessage}
            >
              <label>
                Name
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>

              <label>
                Your email
                <input
                  required
                  type="email"
                  value={senderEmail}
                  onChange={(e) =>
                    setSenderEmail(e.target.value)
                  }
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </label>

              <label>
                Message
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What would you like to discuss?"
                  rows="4"
                />
              </label>

              <button
                className="button button-primary"
                type="submit"
              >
                <Mail size={16} />
                Prepare email
                <ArrowUpRight size={15} />
              </button>
            </form>
          </div>
        </Reveal>

        <Reveal className="contact-graphic" delay={150}>
          <div className="contact-sun">✳</div>

          <div className="contact-orbit contact-orbit-one" />
          <div className="contact-orbit contact-orbit-two" />

          <div className="contact-graphic-label">
            GOOD WORK
            <br />
            STARTS WITH
            <br />
            A CONVERSATION.
          </div>

          <a
            className="contact-send"
            href={`mailto:${EMAIL}`}
            aria-label="Email Udit"
          >
            <Send size={21} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
