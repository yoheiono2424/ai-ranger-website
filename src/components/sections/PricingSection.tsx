'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'starter',
      name: 'スターター',
      subtitle: '小規模プロジェクト向け',
      price: '98万円',
      originalPrice: '500万円',
      discount: '80%OFF',
      features: [
        '基本的な業務システム',
        '開発期間：2-4週間',
        '画面数：5-10画面',
        'AI開発サポート',
        '3ヶ月間の保守サポート',
      ],
      recommended: false,
      color: 'border-gray-300',
      bgColor: 'bg-gray-50',
    },
    {
      id: 'professional',
      name: 'プロフェッショナル',
      subtitle: '中規模プロジェクト向け',
      price: '198万円',
      originalPrice: '1,000万円',
      discount: '80%OFF',
      features: [
        '複雑な業務システム',
        '開発期間：1-2ヶ月',
        '画面数：10-30画面',
        'AI開発サポート',
        'カスタマイズ対応',
        '6ヶ月間の保守サポート',
      ],
      recommended: true,
      color: 'border-ai-blue',
      bgColor: 'bg-ai-blue/5',
    },
    {
      id: 'enterprise',
      name: 'エンタープライズ',
      subtitle: '大規模プロジェクト向け',
      price: 'お見積もり',
      originalPrice: '2,000万円〜',
      discount: '特別価格',
      features: [
        '大規模基幹システム',
        '開発期間：2-6ヶ月',
        '画面数：30画面以上',
        '専任AI開発チーム',
        '完全カスタマイズ',
        '12ヶ月間の保守サポート',
      ],
      recommended: false,
      color: 'border-hope-green',
      bgColor: 'bg-hope-green/5',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            驚きの価格で
            <span className="text-ai-blue block mt-2">青春を取り戻す</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            従来の
            <span className="text-challenge-orange font-bold">1/5の価格</span>
            で、夢のシステムを実現
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${selectedPlan === plan.id ? 'scale-105' : ''} transition-all duration-300`}
              onMouseEnter={() => setSelectedPlan(plan.id)}
              onMouseLeave={() => setSelectedPlan(null)}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-ai-blue to-sky-blue text-white px-4 py-1 rounded-full text-sm font-bold">
                    おすすめ
                  </div>
                </div>
              )}
              
              <div className={`border-2 ${plan.color} ${plan.bgColor} rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {plan.subtitle}
                  </p>
                </div>

                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className="text-sm text-gray-500 line-through">
                      通常 {plan.originalPrice}
                    </div>
                    <motion.div
                      className="absolute -top-2 -right-8 bg-challenge-orange text-white text-xs px-2 py-1 rounded-full font-bold"
                      animate={{
                        rotate: [0, -10, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      {plan.discount}
                    </motion.div>
                  </div>
                  <div className="text-3xl font-black text-gray-900 mt-2">
                    {plan.price}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    〜
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-hope-green mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-full font-bold transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-ai-blue to-sky-blue text-white hover:shadow-lg transform hover:scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {plan.id === 'enterprise' ? 'お問い合わせ' : '今すぐ相談する'}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-success-yellow to-hope-green p-1 rounded-2xl">
            <div className="bg-white rounded-xl px-8 py-6">
              <p className="text-lg font-bold text-gray-900 mb-2">
                💡 料金シミュレーターで
                <span className="text-ai-blue">あなたの節約額</span>
                を確認
              </p>
              <Link
                href="/service#simulator"
                className="text-ai-blue font-bold hover:underline inline-flex items-center"
              >
                詳細な料金シミュレーターを使う
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;