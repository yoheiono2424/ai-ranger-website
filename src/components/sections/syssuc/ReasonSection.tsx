'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ReasonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* 左側 - テキスト */}
            <div className="md:col-span-5">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-[#5BB7D3] font-medium tracking-wider mb-3"
              >
                WHY
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-[#1B3A5F] leading-tight"
              >
                なぜ、この価格が
                <br />
                <span className="text-gray-400">実現できるのか？</span>
              </motion.h2>
            </div>

            {/* 右側 - コンテンツカード */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:col-span-7 relative"
            >
              {/* 背景装飾 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#5BB7D3]/10 rounded-full blur-xl" />

              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-sm">
                <div className="space-y-6 text-gray-600">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 bg-gray-200 rounded-full" />
                    <p className="text-lg leading-relaxed">
                      システム開発は「一品モノ」が常識だった。
                      <br />
                      だから、毎回ゼロから見積もり。毎回、高額。
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 bg-[#5BB7D3] rounded-full" />
                    <p className="text-lg leading-relaxed">
                      私たちは、<span className="text-[#1B3A5F] font-bold">100件以上の開発</span>で培ったノウハウと
                      <span className="text-[#1B3A5F] font-bold">AI×独自の開発基盤</span>を組み合わせることで、
                      「サブスクでも成り立つ」仕組みを作った。
                    </p>
                  </div>
                </div>

                {/* ハイライトボックス */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">初期費用</p>
                      <p className="text-2xl font-bold text-[#1B3A5F]">¥0</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">月額</p>
                      <p className="text-2xl font-bold text-[#3A8FC2]">10万円〜</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonSection;
