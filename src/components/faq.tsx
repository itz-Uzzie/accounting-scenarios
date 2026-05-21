"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQ({ faqs }: { faqs: FAQItemProps[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-white/10 bg-white/5 rounded-2xl overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
          >
            <span className="font-semibold text-lg text-white/90">
              {faq.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-zinc-400 shrink-0 ml-4" />
            ) : (
              <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0 ml-4" />
            )}
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "max-h-[800px] pb-4 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-zinc-400 leading-relaxed pt-2 border-t border-white/5 whitespace-pre-wrap">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
