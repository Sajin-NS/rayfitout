import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "What is interior fit out?",
    answer:
      "Interior fit out is the process of modifying a bare shell of a structure into a functional space. This typically involves: installing partition walls, flooring, ceiling, fittings and furniture fixtures.",
  },
  {
    question: "What do interior fit out companies in Dubai do?",
    answer:
      "They provide complete interior design, fit-out, and renovation services customized to the client's functional and aesthetic needs.",
  },
  {
    question: "How long does an interior fit out typically take?",
    answer:
      "The duration varies depending on project size, but typically ranges from 4 to 12 weeks.",
  },
  {
    question: "What is the scope of the interior fit out?",
    answer:
      "It includes partitions, electrical, plumbing, HVAC, ceilings, flooring, and furniture setup.",
  },
  {
    question: "How much does an interior fit out cost?",
    answer:
      "Costs can vary widely, generally starting from AED 300 per square meter and going upward depending on materials and complexity.",
  },
  {
    question: "What countries does Rayfitout operate in?",
    answer:
      "Rayfitout operates in UAE and is expanding into other GCC countries.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-20 px-4 md:px-global_x pb-30 border-b border-gray-300">
      <div className="mx-auto">
        <h2 className="text-header mb-6 font-mont uppercase border-b border-gray-300 pb-10">
          Frequently Asked Questions
        </h2>
        <ul className="font-mont text-gray-700">
          {faqs.map((item, idx) => (
            <li
              key={idx}
              className="border-b border-gray-300 py-4 cursor-pointer transition-all duration-300"
              onClick={() => toggle(idx)}
            >
              <div className="flex justify-between items-center">
                <span className="text-[18px] uppercase">{item.question}</span>
                {activeIndex === idx ? (
                  <ChevronDown size={16} />
                ) : (
                  <ArrowUpRight size={16} />
                )}
              </div>
              {activeIndex === idx && (
                <p className="mt-2 text-small text-gray-500 leading-relaxed md:w-2/4">
                  {item.answer}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
