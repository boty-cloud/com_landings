interface ImplementationProps {
  sectionTitle: string;
  cards: { icon: string; title: string; text: string }[];
}

export default function Implementation({ sectionTitle, cards }: ImplementationProps) {
  return (
    <section className="section section--light" id="implementacion">
      <div className="container">
        <h2 className="section__title">{sectionTitle}</h2>
        <div className="impl-grid">
          {cards.map((card, i) => (
            <div key={i} className="impl-card">
              <h4>{card.icon} {card.title}</h4>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
