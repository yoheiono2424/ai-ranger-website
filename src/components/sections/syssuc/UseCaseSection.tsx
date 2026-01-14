'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// SVGアイコンコンポーネント
const ConstructionIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ScissorsIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const UseCaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const useCases = [
    {
      icon: <ConstructionIcon />,
      industry: '建設業',
      systems: '現場管理・日報・写真管理',
      benefit: '紙とExcelから解放',
    },
    {
      icon: <ScissorsIcon />,
      industry: '美容サロン',
      systems: '予約・顧客カルテ・シフト管理',
      benefit: '一元管理でリピート率UP',
    },
    {
      icon: <TruckIcon />,
      industry: '卸売業',
      systems: '受発注・在庫・請求書発行',
      benefit: '手作業ミスをゼロに',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1B3A5F] text-center mb-12"
        >
          こんなシステムが作れます。
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-20 h-20 bg-[#E8F4F8] rounded-2xl flex items-center justify-center mb-4 text-[#5BB7D3]">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1B3A5F] mb-2">
                {useCase.industry}
              </h3>
              <p className="text-gray-600 mb-4">{useCase.systems}</p>
              <p className="text-[#5BB7D3] font-medium flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                {useCase.benefit}
              </p>
            </motion.div>
          ))}
        </div>

        {/* などなど表示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-lg text-gray-500">
            ...and more
          </p>
          <p className="text-sm text-gray-400 mt-2">
            飲食店・クリニック・不動産・製造業・教育機関など、<br className="hidden sm:inline" />
            あらゆる業種に対応しています
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseSection;
