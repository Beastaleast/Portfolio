
import React from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      className={`reveal ${className}`}
      style={{ "--delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}

export function SectionTitle({
  index,
  total = "09",
  eyebrow,
  title,
  description,
}) {
  return (
    <Reveal className="section-title-wrap">
      <div className="section-index">
        {index} <span> / {total}</span>
      </div>

      <div className="section-title-copy">
        <p className="eyebrow">{eyebrow}</p>

        <h2>{title}</h2>

        {description && (
          <p className="section-description">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
