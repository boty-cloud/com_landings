import Image from "next/image";

interface AboutUsProps {
  title: string;
  paragraphs: string[];
  logo?: string;
  cardsTitle?: string;
  cardsSubtitle?: string;
  cardsSubtitleText?: string;
  cards?: { title: string; text: string }[];
  valueProposition?: { title: string; text: string };
}

export default function AboutUs({
  title,
  paragraphs,
  logo,
  cardsTitle,
  cardsSubtitle,
  cardsSubtitleText,
  cards,
  valueProposition,
}: AboutUsProps) {
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
            className="prose-justify"
            style={{ marginBottom: "1.4rem", fontSize: "1.05rem", lineHeight: "1.8" }}
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
      </div>

      {cardsTitle && cards && cards.length > 0 && (
        <div className="container" style={{ marginTop: "3.5rem" }}>
          <h3 className="about360__title">{cardsTitle}</h3>
          {cardsSubtitle && <p className="about360__subtitle">{cardsSubtitle}</p>}
          {cardsSubtitleText && (
            <p className="about360__lead prose-justify" dangerouslySetInnerHTML={{ __html: cardsSubtitleText }} />
          )}
          <div className="about360__grid">
            {cards.map((card, idx) => (
              <div key={idx} className="about360__card">
                <h4 className="about360__card-title">{card.title}</h4>
                <p className="about360__card-text prose-justify">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {valueProposition && (
        <div className="container container--narrow" style={{ marginTop: "3.5rem" }}>
          <div className="about360__value">
            <h3 className="about360__value-title">{valueProposition.title}</h3>
            <p className="about360__value-text prose-justify">{valueProposition.text}</p>
          </div>
        </div>
      )}
    </section>
  );
}
