import { ModuleItem } from "@/types/proposal";

interface ModuleCardsProps {
  sectionTitle: string;
  sectionSubtitle: string;
  items: ModuleItem[];
}

export default function ModuleCards({ sectionTitle, sectionSubtitle, items }: ModuleCardsProps) {
  return (
    <section className="section" id="modulos">
      <div className="container">
        <h2 className="section__title">{sectionTitle}</h2>
        <p className="section__subtitle">{sectionSubtitle}</p>

        <div className="modules">
          {items.map((mod) => (
            <article
              key={mod.number}
              className={`card${mod.isHighlighted ? " card--highlight" : ""}`}
            >
              {mod.badge && <div className="card__badge">{mod.badge}</div>}
              <div className="card__number">{mod.number}</div>
              <h3 className="card__title">{mod.title}</h3>
              <p className="card__body" dangerouslySetInnerHTML={{ __html: mod.body }} />
              {mod.price && <div className="card__price">{mod.price}</div>}
              <ul className="card__features">
                {mod.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
