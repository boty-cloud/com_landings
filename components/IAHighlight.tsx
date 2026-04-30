interface IAHighlightProps {
  title: string;
  description: string;
  cards: { icon: string; title: string; text: string }[];
}

export default function IAHighlight({ title, description, cards }: IAHighlightProps) {
  return (
    <section className="section section--dark" id="ia">
      <div className="container container--narrow">
        <h2 className="section__title">{title}</h2>
        {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
        <div className="ia-grid">
          {cards.map((card, i) => (
            <div key={i} className="ia-card">
              {card.icon && <div className="ia-card__icon">{card.icon}</div>}
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
