import { useState } from "react";
import { Plus } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQ[];
};

export default function FAQAccordion({ faqs }: Props) {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = index === open;

        return (
          <div className="faq-item" key={faq.question}>
            <button
              aria-expanded={isOpen}
              className="faq-question"
              onClick={() => setOpen(isOpen ? -1 : index)}
              type="button"
            >
              <span>{faq.question}</span>
              <Plus className={isOpen ? "is-open" : ""} size={20} />
            </button>
            {isOpen && <p>{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
