'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      num: '01',
      title: '高すぎる',
      description: '初期費用だけで',
      highlight: '3,000万〜1億円',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
    {
      num: '02',
      title: '終わらない',
      description: '保守・追加開発で',
      highlight: '毎年コストが膨らむ',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      num: '03',
      title: 'わからない',
      description: '見積もりが複雑で',
      highlight: '結局いくらか不明',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-500/10',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* セクションヘッダー */}
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#5BB7D3] font-medium tracking-wider mb-3"
            >
              PROBLEM
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B3A5F] leading-tight"
            >
              まだ、こんな開発費用を
              <br />
              <span className="text-gray-400">払いますか？</span>
            </motion.h2>
          </div>

          {/* 3カラム均等グリッド */}
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {/* 番号とアイコン */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 ${problem.bgColor} rounded-xl flex items-center justify-center`}>
                    <span className={`font-bold ${problem.color}`}>{problem.num}</span>
                  </div>
                </div>

                {/* タイトル */}
                <h3 className="text-xl font-bold text-[#1B3A5F] mb-4">
                  {problem.title}
                </h3>

                {/* 説明 */}
                <p className="text-gray-500 mb-2">{problem.description}</p>
                <p className={`font-bold ${problem.color}`}>{problem.highlight}</p>
              </motion.div>
            ))}
          </div>

          {/* ボトムメッセージ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <p className="text-gray-500 text-lg text-center">
              従来のシステム開発は、中小企業やスタートアップには<span className="text-[#1B3A5F] font-semibold">重すぎた。</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
