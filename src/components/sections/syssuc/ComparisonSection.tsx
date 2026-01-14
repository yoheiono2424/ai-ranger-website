'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* ヘッダー */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#5BB7D3] font-medium tracking-wider mb-3"
            >
              COMPARISON
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B3A5F]"
            >
              一括払い vs 月額定額。
              <br className="md:hidden" />
              <span className="text-gray-400">3年間の差。</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 従来の一括払い */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F8FAFC] rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <h3 className="text-lg font-medium text-gray-500">
                  従来：一括払い + バラバラ請求
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">初期開発</span>
                  <span className="font-medium text-gray-700">3,000万〜1億円</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">保守費用（3年）</span>
                  <span className="font-medium text-gray-700">360万〜1,080万円</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">サーバー（3年）</span>
                  <span className="font-medium text-gray-700">180万〜360万円</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">追加開発</span>
                  <span className="font-medium text-gray-700">500万円〜</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <span className="font-bold text-gray-700">合計</span>
                <span className="text-2xl font-bold text-gray-500">4,000万〜1.5億円</span>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                何にいくらかかるか、わかりにくい
              </p>
            </motion.div>

            {/* SysSuc */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-[#E8F4F8] to-white rounded-2xl p-8 border-2 border-[#5BB7D3]"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-[#5BB7D3] rounded-full" />
                <h3 className="text-lg font-medium text-[#3A8FC2]">
                  SysSuc：月額定額オールインワン
                </h3>
              </div>

              {/* 含まれるもの */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 py-3 border-b border-[#5BB7D3]/20">
                  <svg className="w-5 h-5 text-[#5BB7D3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">初期開発費 込み</span>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-[#5BB7D3]/20">
                  <svg className="w-5 h-5 text-[#5BB7D3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">保守費用 込み</span>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-[#5BB7D3]/20">
                  <svg className="w-5 h-5 text-[#5BB7D3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">サーバー費 込み（スタンダード以上）</span>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-[#5BB7D3]/20">
                  <svg className="w-5 h-5 text-[#5BB7D3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">追加開発・改修 込み</span>
                </div>
              </div>

              {/* 合計 */}
              <div className="bg-white rounded-xl p-6 text-center">
                <p className="text-gray-500 text-sm mb-2">月額30万円 × 36ヶ月</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-gray-500">合計</span>
                  <span className="text-4xl font-bold text-[#3A8FC2]">1,080</span>
                  <span className="text-lg text-gray-500">万円</span>
                </div>
              </div>

              <p className="text-[#3A8FC2] text-sm mt-4 text-center font-medium">
                毎月の支払いが明確。追加請求なし。
              </p>
            </motion.div>
          </div>

          {/* 結論 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-2xl md:text-3xl font-bold text-[#1B3A5F] mb-2">
              最大<span className="text-[#5BB7D3]">1億円以上</span>の差。
            </p>
            <p className="text-gray-500">
              これが、サブスク革命の力。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
