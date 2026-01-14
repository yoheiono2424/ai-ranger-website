'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 2カラムレイアウト */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* 左側 - ビジュアル要素 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* 背景のアクセント */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#5BB7D3]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#3A8FC2]/10 rounded-full blur-2xl" />

              {/* メインビジュアル */}
              <div className="relative bg-gradient-to-br from-[#E8F4F8] to-white rounded-3xl p-8 md:p-12">
                <p className="text-[#5BB7D3] font-medium tracking-wider mb-4">SOLUTION</p>

                {/* 料金比較の視覚化 */}
                <div className="space-y-6">
                  <div className="flex items-end gap-4">
                    <div className="text-sm text-gray-400 w-20">従来</div>
                    <div className="flex-1 h-8 bg-gray-200 rounded-full relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-gray-400 to-gray-300 rounded-full" />
                    </div>
                    <div className="text-gray-400 text-sm w-24 text-right">3,000万〜</div>
                  </div>
                  <div className="flex items-end gap-4">
                    <div className="text-sm text-[#3A8FC2] font-medium w-20">SysSuc</div>
                    <div className="flex-1 h-8 bg-[#E8F4F8] rounded-full relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '30%' } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#5BB7D3] to-[#3A8FC2] rounded-full"
                      />
                    </div>
                    <div className="text-[#3A8FC2] font-bold text-sm w-24 text-right">月額10万〜</div>
                  </div>
                </div>

                {/* アイコンリスト */}
                <div className="mt-10 flex gap-6 flex-wrap">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#5BB7D3]/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#5BB7D3]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    開発費込み
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#5BB7D3]/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#5BB7D3]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    保守費込み
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#5BB7D3]/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#5BB7D3]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    追加開発込み
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 右側 - テキスト */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B3A5F] leading-tight mb-8">
                これが、
                <br />
                <span className="bg-gradient-to-r from-[#5BB7D3] to-[#3A8FC2] bg-clip-text text-transparent">新時代</span>の
                <br />
                システム開発。
              </h2>

              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  開発費、保守費、追加開発費…
                  <br />
                  従来はバラバラだったコストを、
                  <br />
                  SysSucはすべて<span className="text-[#3A8FC2] font-bold">月額料金に一本化</span>。
                </p>
                <div className="h-px bg-gray-200 w-16" />
                <p className="text-[#1B3A5F] font-medium text-lg">
                  シンプルでわかりやすい。
                  <br />
                  だから、安心して始められる。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
