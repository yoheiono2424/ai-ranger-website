'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const ResultsSection = () => {
  const [activeCategory, setActiveCategory] = useState('app');
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const categories = [
    { id: 'app', name: 'スマホアプリ', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
    { id: 'dx', name: '社内DXシステム', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { id: 'ai', name: 'AI活用システム', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
  ];

  const results = {
    app: [
      {
        title: '美容院予約アプリ',
        client: '個人美容院オーナー様',
        period: '3週間',
        cost: '98万円',
        originalCost: '500万円',
        description: '顧客管理から予約、決済まで一括管理',
        impact: '予約率3倍増、業務時間50%削減',
        image: <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg>,
      },
      {
        title: 'フィットネストラッカー',
        client: 'パーソナルジム経営者様',
        period: '4週間',
        cost: '148万円',
        originalCost: '750万円',
        description: 'トレーニング記録と食事管理を統合',
        impact: '会員継続率80%向上',
        image: <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      },
    ],
    dx: [
      {
        title: '在庫管理システム',
        client: '中小製造業様',
        period: '6週間',
        cost: '198万円',
        originalCost: '1,000万円',
        description: 'リアルタイム在庫追跡と自動発注',
        impact: '在庫コスト40%削減、欠品ゼロ達成',
        image: <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
      },
      {
        title: '営業支援システム',
        client: '地域商社様',
        period: '5週間',
        cost: '178万円',
        originalCost: '900万円',
        description: '顧客情報一元管理とAI提案機能',
        impact: '成約率2.5倍、営業効率60%向上',
        image: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      },
    ],
    ai: [
      {
        title: 'AIチャットボット',
        client: 'ECサイト運営企業様',
        period: '4週間',
        cost: '128万円',
        originalCost: '650万円',
        description: '24時間365日の自動カスタマーサポート',
        impact: '問い合わせ対応コスト70%削減',
        image: <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
      },
      {
        title: 'AI画像診断システム',
        client: '検査機関様',
        period: '8週間',
        cost: '298万円',
        originalCost: '1,500万円',
        description: '画像解析による異常検知自動化',
        impact: '検査時間80%短縮、精度99%達成',
        image: <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>,
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-20 left-10 text-gray-300">
          <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <div className="absolute top-40 right-20 text-gray-300">
          <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
        </div>
        <div className="absolute bottom-20 left-1/2 text-gray-300">
          <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            青春を取り戻した
            <span className="text-ai-blue block mt-2">企業たちの成功事例</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            5レンジャーで夢を実現し、
            <span className="text-hope-green font-bold">新たな挑戦</span>
            を始めた企業様たち
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1 overflow-x-auto max-w-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center space-x-2 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-white text-ai-blue shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.icon}
                <span className="text-sm sm:text-base">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {results[activeCategory as keyof typeof results].map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="mb-4">{result.image}</div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">
                      {result.title}
                    </h3>
                    <p className="text-gray-600">{result.client}</p>
                  </div>
                  <motion.div
                    className="bg-success-yellow text-gray-900 px-3 py-1 rounded-full text-sm font-bold"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    成功事例
                  </motion.div>
                </div>

                <p className="text-gray-700 mb-6">
                  {result.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">開発期間</div>
                    <div className="text-xl font-black text-ai-blue">{result.period}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">開発費用</div>
                    <div className="text-xl font-black text-hope-green">{result.cost}</div>
                    <div className="text-xs text-gray-500 line-through">通常 {result.originalCost}</div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-challenge-orange mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-bold text-gray-900">導入効果</span>
                  </div>
                  <p className="text-gray-700 mt-2">{result.impact}</p>
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-ai-blue via-hope-green to-success-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl font-bold text-gray-900 mb-6">
            あなたの会社も、
            <span className="text-ai-blue">青春を取り戻しませんか？</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/service"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-ai-blue font-bold rounded-full border-2 border-ai-blue hover:bg-ai-blue hover:text-white transition-all duration-300"
            >
              もっと事例を見る
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-challenge-orange text-white font-bold rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              無料相談を申し込む
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;