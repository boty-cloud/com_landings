interface CompanyUnderstandingProps {
  title: string;
  paragraphs: string[];
}

export default function CompanyUnderstanding({ title, paragraphs }: CompanyUnderstandingProps) {
  return (
    <section className="section section--light">
      <div className="container container--narrow">
        <h2 className="section__title">{title}</h2>
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
