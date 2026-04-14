interface IntroProps {
  title: string;
  paragraphs: string[];
}

export default function Intro({ title, paragraphs }: IntroProps) {
  return (
    <section className="section section--light" id="intro">
      <div className="container container--narrow">
        <h2 className="section__title">{title}</h2>
        {paragraphs.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
    </section>
  );
}
