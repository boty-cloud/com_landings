import Image from "next/image";

interface AboutUsProps {
  title: string;
  paragraphs: string[];
  logo?: string;
}

export default function AboutUs({ title, paragraphs, logo }: AboutUsProps) {
  return (
    <section className="section section--dark">
      <div className="container container--narrow">
        <h2 className="section__title">{title}</h2>
        {logo && (
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <Image src={logo} alt="Auren" width={180} height={60} style={{ opacity: 0.9 }} />
          </div>
        )}
        {paragraphs.map((p, idx) => (
          <p
            key={idx}
            style={{ marginBottom: "1.4rem", fontSize: "1.05rem", lineHeight: "1.8" }}
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
      </div>
    </section>
  );
}
