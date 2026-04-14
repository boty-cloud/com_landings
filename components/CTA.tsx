interface CTAProps {
  title: string;
  text: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTA({ title, text, buttonText, buttonHref }: CTAProps) {
  return (
    <section className="section section--cta">
      <div className="container container--narrow">
        <h2 className="section__title">{title}</h2>
        <p>{text}</p>
        <a href={buttonHref} className="btn btn--large">{buttonText}</a>
      </div>
    </section>
  );
}
