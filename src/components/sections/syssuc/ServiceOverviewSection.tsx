'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ServiceOverviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      num: '01',
      title: '初期費用ゼロ',
      description: '月額料金だけでスタート。数千万円の初期投資は不要。',
      accent: 'from-blue-500 to-cyan-400',
    },
    {
      num: '02',
      title: 'ぜんぶ込み',
      description: '開発・保守・改修がコミコミ。追加請求の心配なし。',
      accent: 'from-cyan-400 to-teal-400',
    },
    {
      num: '03',
      title: '作り放題',
      description: '画面数内なら何度でも改修OK。使いながら育てるシステム。',
      accent: 'from-teal-400 to-emerald-400',
    },
    {
      num: '04',
      title: '伴走サポート',
      description: '定例MTG＋チャットで常に相談。「作って終わり」じゃない。',
      accent: 'from-emerald-400 to-cyan-400',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* ヘッダー */}
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#5BB7D3] font-medium tracking-wider mb-3"
            >
              FEATURES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B3A5F]"
            >
              オールインワン。
              <br />
              <span className="text-gray-400">だから、シンプル。</span>
            </motion.h2>
          </div>

          {/* 特徴グリッド - 2x2 */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative bg-[#F8FAFC] rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                {/* 番号 */}
                <span className="absolute top-8 right-8 text-6xl font-bold text-gray-100 group-hover:text-[#5BB7D3]/10 transition-colors">
                  {feature.num}
                </span>

                <div className="relative">
                  {/* アクセントライン */}
                  <div className={`w-12 h-1 bg-gradient-to-r ${feature.accent} rounded-full mb-6`} />

                  <h3 className="text-xl font-bold text-[#1B3A5F] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverviewSection;
