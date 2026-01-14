'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    '建設', '医療', '美容', 'EC', '教育', '製造', '卸売', '飲食'
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#E8F4F8] via-[#D1EBF5] to-[#E8F4F8] relative overflow-hidden">
      {/* 背景グリッド */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(27, 58, 95, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(27, 58, 95, 0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* グロー効果 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#5BB7D3] rounded-full opacity-15 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1B3A5F] text-center mb-12"
        >
          SysSucを支える、Re.haruの開発力。
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-block relative">
            {/* 数字の背後のグロー */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#5BB7D3] to-[#3A8FC2] blur-3xl opacity-20" />
            <span className="relative text-7xl md:text-9xl font-bold bg-gradient-to-r from-[#1B3A5F] via-[#3A8FC2] to-[#5BB7D3] bg-clip-text text-transparent">
              100+
            </span>
          </div>
          <p className="text-xl text-gray-600 mt-4">累計開発プロジェクト</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {industries.map((industry, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="px-5 py-2 rounded-full text-sm font-medium text-[#1B3A5F] border border-[#5BB7D3]/40"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(4px)',
                boxShadow: '0 2px 10px rgba(91, 183, 211, 0.1)'
              }}
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-600 text-lg max-w-2xl mx-auto"
        >
          私たちRe.haruが積み上げてきた開発ノウハウを、
          <br />
          SysSucでもっと手軽に届けます。
        </motion.p>
      </div>
    </section>
  );
};

export default ResultsSection;
