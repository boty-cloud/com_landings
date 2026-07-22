import Image from "next/image";

interface TeamProps {
  title: string;
  subtitle?: string;
  members: {
    name: string;
    role: string;
    photo?: string;
  }[];
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Team({ title, subtitle, members }: TeamProps) {
  return (
    <section className="section section--light">
      <div className="container">
        <h2 className="section__title">{title}</h2>
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
        <div className="team__grid">
          {members.map((member, idx) => (
            <div key={idx} className="team__card">
              <div className="team__avatar">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={120}
                    height={120}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                ) : (
                  <span className="team__avatar-initials">{initials(member.name)}</span>
                )}
              </div>
              <h4 className="team__name">{member.name}</h4>
              <p className="team__role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
