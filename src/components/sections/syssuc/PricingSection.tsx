'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: 'ライト',
      price: '10',
      popular: false,
      features: [
        { label: '保有画面数', value: '10画面まで' },
        { label: '同時開発', value: '1案件' },
        { label: 'MTG', value: '最大月1回' },
        { label: 'チャット対応', value: true },
        { label: 'サーバー', value: '別途' },
        { label: 'AI機能', value: false },
      ],
    },
    {
      name: 'スタンダード',
      price: '30',
      popular: true,
      features: [
        { label: '保有画面数', value: '30画面まで' },
        { label: '同時開発', value: '1案件' },
        { label: 'MTG', value: '最大月2回' },
        { label: 'チャット対応', value: true },
        { label: 'サーバー', value: '込み' },
        { label: 'AI機能', value: true },
      ],
    },
    {
      name: 'プロ',
      price: '50',
      popular: false,
      features: [
        { label: '保有画面数', value: '50画面まで' },
        { label: '同時開発', value: '2案件' },
        { label: 'MTG', value: '最大月4回' },
        { label: 'チャット対応', value: true },
        { label: 'サーバー', value: '込み' },
        { label: 'AI機能', value: true },
      ],
    },
  ];

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
              PRICING
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B3A5F] mb-4"
            >
              シンプルな料金。
              <br className="md:hidden" />
              <span className="text-gray-400">隠れたコストなし。</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600"
            >
              ビジネスの規模に合わせて選べる3つのプラン
            </motion.p>
          </div>

          {/* プランカード */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {/* 人気バッジ */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-[#5BB7D3] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      人気
                    </span>
                  </div>
                )}

                <div className={`h-full rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-[#E8F4F8] to-white border-2 border-[#5BB7D3]'
                    : 'bg-[#F8FAFC]'
                }`}>
                  {/* プラン名 */}
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-medium text-gray-500 mb-4">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-gray-500">月額</span>
                      <span className={`text-5xl font-bold ${plan.popular ? 'text-[#3A8FC2]' : 'text-[#1B3A5F]'}`}>
                        {plan.price}
                      </span>
                      <span className="text-lg text-gray-500">万円</span>
                    </div>
                  </div>

                  {/* 機能リスト */}
                  <div className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-sm text-gray-600">
                          {feature.label}
                        </span>
                        <span className={`font-medium text-sm ${
                          feature.value === true
                            ? 'text-[#5BB7D3]'
                            : feature.value === false
                              ? 'text-gray-400'
                              : 'text-[#1B3A5F]'
                        }`}>
                          {feature.value === true ? '○' : feature.value === false ? '−' : feature.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 注釈 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-gray-500 text-sm mt-10"
          >
            ※税別 ※最低利用期間6ヶ月 ※50画面超は+1万円/画面で追加可
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
