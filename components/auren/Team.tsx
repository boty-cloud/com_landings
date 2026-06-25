import Image from "next/image";

interface TeamProps {
  title: string;
  members: {
    name: string;
    role: string;
    photo?: string;
  }[];
}

export default function Team({ title, members }: TeamProps) {
  return (
    <section className="section section--light">
      <div className="container">
        <h2 className="section__title">{title}</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          marginTop: "3rem",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          {members.map((member, idx) => (
            <div key={idx} style={{
              textAlign: "center",
              padding: "1.5rem",
              background: "var(--color-card)",
              border: "1px solid var(--color-border)"
            }}>
              {member.photo && (
                <div style={{ marginBottom: "1rem" }}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={120}
                    height={120}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
              )}
              <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--color-text-dark)" }}>{member.name}</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
