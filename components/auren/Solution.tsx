interface SolutionProps {
  title: string;
  subtitle?: string;
  description?: string;
  phases?: {
    title: string;
    description: string;
    deliverables?: string[];
    duration?: string;
  }[];
  methodology?: {
    title: string;
    description: string;
  };
}

export default function Solution({ title, subtitle, description, phases, methodology }: SolutionProps) {
  return (
    <section className="section section--light">
      <div className="container">
        <h2 className="section__title">{title}</h2>
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
        {description && (
          <div className="container--narrow" style={{ marginBottom: "3rem" }}>
            <p dangerouslySetInnerHTML={{ __html: description }} style={{ fontSize: "1.05rem", lineHeight: "1.8" }} />
          </div>
        )}

        {methodology && (
          <div className="container--narrow" style={{ marginBottom: "3rem", padding: "2rem", background: "var(--color-card)", border: "1px solid var(--color-border)" }}>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem", color: "var(--color-accent)" }}>{methodology.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: methodology.description }} style={{ fontSize: "1rem", lineHeight: "1.7" }} />
          </div>
        )}

        {phases && phases.length > 0 && (
          <div className="modules">
            {phases.map((phase, idx) => (
              <div key={idx} className="card">
                <div className="card__number">{(idx + 1).toString().padStart(2, "0")}</div>
                <h3 className="card__title">{phase.title}</h3>
                <p className="card__body" dangerouslySetInnerHTML={{ __html: phase.description }} />
                {phase.deliverables && phase.deliverables.length > 0 && (
                  <ul className="card__features">
                    {phase.deliverables.map((d, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: d }} />
                    ))}
                  </ul>
                )}
                {phase.duration && <p style={{ marginTop: "1rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--color-accent)" }}>⏱ {phase.duration}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
