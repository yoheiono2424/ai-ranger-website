'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FlowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { step: '01', label: 'お問い合わせ', desc: 'フォームから30秒' },
    { step: '02', label: '無料相談', desc: 'オンラインで30分〜' },
    { step: '03', label: 'プラン決定', desc: '最適なプランをご提案' },
    { step: '04', label: '電子契約', desc: 'オンラインで完結' },
    { step: '05', label: '開発スタート', desc: '最短1週間で開始' },
  ];

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* ヘッダー */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-[#5BB7D3] font-medium tracking-wider mb-3"
              >
                FLOW
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B3A5F]"
              >
                最短1週間で<span className="text-[#5BB7D3]">スタート</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-500 mt-4 md:mt-0"
            >
              来社不要。すべてオンラインで完結します。
            </motion.p>
          </div>

          {/* ステップ - 横並びタイムライン（デスクトップ） */}
          <div className="hidden md:block">
            <div className="relative">
              {/* 接続線 */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-[#5BB7D3] via-[#3A8FC2] to-[#5BB7D3] origin-left"
              />

              <div className="grid grid-cols-5 gap-4">
                {steps.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    {/* ステップ番号 */}
                    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white border-2 border-[#5BB7D3] rounded-full mb-4 z-10">
                      <span className="text-[#3A8FC2] font-bold text-lg">{item.step}</span>
                    </div>
                    <h3 className="font-bold text-[#1B3A5F] mb-1">{item.label}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ステップ - 縦並び（モバイル） */}
          <div className="md:hidden space-y-0">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 relative"
              >
                {/* 縦線 */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-[#5BB7D3] to-[#3A8FC2]" />
                )}

                {/* ステップ番号 */}
                <div className="relative flex-shrink-0 w-16 h-16 bg-white border-2 border-[#5BB7D3] rounded-full flex items-center justify-center z-10">
                  <span className="text-[#3A8FC2] font-bold text-lg">{item.step}</span>
                </div>

                {/* コンテンツ */}
                <div className="pt-3 pb-8">
                  <h3 className="font-bold text-[#1B3A5F] mb-1">{item.label}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
