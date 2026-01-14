'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '本当に初期費用ゼロ？',
      answer: 'はい。月額料金のみでスタートできます。数千万円の初期投資は一切不要です。',
    },
    {
      question: '月額料金に何が含まれる？',
      answer: '開発・保守・改修すべて込みです。サーバーはプランにより異なります。',
    },
    {
      question: 'どんなシステムが作れる？',
      answer: 'DX・業務効率化システム全般。まずはご相談ください。',
    },
    {
      question: '途中でプラン変更できる？',
      answer: 'はい。いつでもアップグレード・ダウングレード可能です。',
    },
    {
      question: '解約したらデータは？',
      answer: 'CSVでお渡し。30日以内に完全削除します。',
    },
    {
      question: 'ITに詳しくなくても大丈夫？',
      answer: 'もちろん。「こうしたい」を伝えるだけでOKです。専門用語は不要です。',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* ヘッダー */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-[#5BB7D3] font-medium tracking-wider mb-3"
              >
                FAQ
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-[#1B3A5F] leading-tight mb-6"
              >
                よくある
                <br />
                <span className="text-gray-400">質問</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-500 hidden md:block"
              >
                ご不明点があればお気軽にお問い合わせください
              </motion.p>
            </div>

            {/* FAQリスト */}
            <div className="md:col-span-8 space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-[#1B3A5F] pr-4">
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                      openIndex === index ? 'bg-[#5BB7D3] text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
