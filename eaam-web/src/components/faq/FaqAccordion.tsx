"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faqData";

const inputClass =
  "w-full text-left rounded-2xl border border-outline-variant/25 bg-surface-container-low px-5 py-4 md:py-5 transition-colors hover:border-secondary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mountain-orange focus-visible:ring-offset-2";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3 md:space-y-4 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-colors ${
              isOpen
                ? "border-secondary/20 bg-surface-container-low shadow-sm"
                : "border-outline-variant/15 bg-surface-container-low/80"
            }`}
          >
            <button
              type="button"
              id={`faq-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className={`${inputClass} flex items-center justify-between gap-4 font-[family-name:var(--font-headline)] font-bold text-on-background text-base md:text-lg`}
            >
              <span>{item.question}</span>
              <span
                className="material-symbols-outlined text-secondary shrink-0 text-2xl"
                aria-hidden
              >
                {isOpen ? "remove" : "add"}
              </span>
            </button>
            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-${item.id}`}
              hidden={!isOpen}
              className={isOpen ? "block" : "hidden"}
            >
              <p className="px-5 pb-5 md:px-6 md:pb-6 text-on-surface-variant text-sm md:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
