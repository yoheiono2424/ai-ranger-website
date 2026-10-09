


'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionHeader from './SectionHeader';
import { syssucFaq as faqs } from '@/data/syssucFaq';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (categoryIndex: number, itemIndex: number) => {
    const index = categoryIndex * 10 + itemIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            index="08"
            eyebrow="FAQ"
            heading="よくあるご質問"
            lead="SysSucに関する疑問にお答えします。"
          />

          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <h3 className="text-xs font-bold tracking-eyebrow text-muted mb-6">
                {category.category}
              </h3>
              <div className="border-t border-line">
                {category.items.map((item, itemIndex) => {
                  const isOpen = openIndex === categoryIndex * 10 + itemIndex;
                  return (
                    <div key={itemIndex} className="border-b border-line">
                      <button
                        onClick={() => toggleAccordion(categoryIndex, itemIndex)}
                        className="w-full py-6 text-left flex justify-between items-start gap-6 group"
                      >
                        <span className="text-base md:text-lg font-bold text-ink group-hover:text-accent transition-colors leading-snug">
                          {item.question}
                        </span>
                        <svg
                          className={`w-5 h-5 text-muted flex-shrink-0 mt-1 transform transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="pb-8 pr-10 text-sm md:text-base text-body leading-loose">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="text-center mt-24">
            <p className="text-base text-body mb-8">
              その他のご質問もお気軽にお問い合わせください
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-4 bg-accent text-white font-bold rounded-lg hover:bg-ink transition-colors duration-200"
            >
              無料で相談する
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
