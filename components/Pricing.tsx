import { PricingPlan } from "@/types/proposal";

interface PricingProps {
  sectionTitle: string;
  sectionSubtitle: string;
  plans: PricingPlan[];
}

export default function Pricing({ sectionTitle, sectionSubtitle, plans }: PricingProps) {
  return (
    <section className="section" id="inversion">
      <div className="container">
        <h2 className="section__title">{sectionTitle}</h2>
        <p className="section__subtitle">{sectionSubtitle}</p>

        <div className="pricing">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing__card${plan.isFeatured ? " pricing__card--featured" : ""}`}
            >
              {plan.badge && <div className="pricing__badge">{plan.badge}</div>}
              <h3 className="pricing__plan">{plan.name}</h3>
              {plan.amount && (
                <div className="pricing__amount">
                  {plan.amount}
                  {plan.amountSuffix && (
                    <span className="pricing__small"> {plan.amountSuffix}</span>
                  )}
                </div>
              )}
              <p className="pricing__desc">{plan.description}</p>
              <ul className="pricing__details">
                {plan.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
              {plan.duration && (
                <div className="pricing__duration">⏱ Plazo del proyecto: <strong>{plan.duration}</strong></div>
              )}
              {plan.addon && (
                <div
                  className="pricing__addon"
                  dangerouslySetInnerHTML={{ __html: plan.addon }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
