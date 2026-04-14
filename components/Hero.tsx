interface HeroProps {
  tag: string;
  titlePre: string;
  titleHighlight: string;
  titlePost: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

export default function Hero({ tag, titlePre, titleHighlight, titlePost, subtitle, ctaText, ctaHref }: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero__tag">{tag}</p>
        <h1 className="hero__title">
          {titlePre}<span className="gradient-text">{titleHighlight}</span>{titlePost}
        </h1>
        <p className="hero__sub" dangerouslySetInnerHTML={{ __html: subtitle }} />
        <a href={ctaHref} className="btn">{ctaText}</a>
      </div>
    </section>
  );
}
