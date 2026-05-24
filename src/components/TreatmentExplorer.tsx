import { useMemo, useState } from "react";
import { Activity, Radio, Scissors, Sparkles, Stethoscope } from "lucide-react";
import type { Treatment } from "../data/treatments";

type Props = {
  treatments: Treatment[];
  categories: string[];
};

export default function TreatmentExplorer({ treatments, categories }: Props) {
  const [active, setActive] = useState("Todos");

  const visible = useMemo(
    () =>
      active === "Todos"
        ? treatments
        : treatments.filter((treatment) => treatment.category === active),
    [active, treatments]
  );

  return (
    <div className="treatment-explorer">
      <div className="filter-row" aria-label="Categorías de tratamientos">
        {categories.map((category) => (
          <button
            className={category === active ? "filter-pill is-active" : "filter-pill"}
            key={category}
            onClick={() => setActive(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="treatment-grid">
        {visible.map((treatment) => (
          <article className="treatment-card" key={treatment.title}>
            <div className="card-icon" aria-hidden="true">
              <CategoryIcon category={treatment.category} />
            </div>
            <p className="eyebrow">{treatment.category}</p>
            <h3>{treatment.title}</h3>
            <p>{treatment.summary}</p>
            <span>{treatment.detail}</span>
          </article>
        ))}
      </div>
    </div>
  );
}

function CategoryIcon({ category }: { category: Treatment["category"] }) {
  const iconProps = { size: 18, strokeWidth: 2 };

  if (category === "Dermatología") return <Stethoscope {...iconProps} />;
  if (category === "Facial") return <Sparkles {...iconProps} />;
  if (category === "Corporal") return <Activity {...iconProps} />;
  if (category === "Aparatología") return <Radio {...iconProps} />;
  return <Scissors {...iconProps} />;
}
