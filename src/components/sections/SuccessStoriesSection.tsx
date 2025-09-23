'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const SuccessStoriesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const stories = [
    {
      company: 'タレント農家コミュニティアプリ',
      originalCost: '4,000万円',
      actualCost: '500万円',
      savedAmount: '3,500万円',
      seishunStory: '諦めかけていた新規事業への挑戦を実現',
      quote: '「もう諦めようと思っていたんです。でも、AIレンジャーなら500万円で。あの時の"やってやる！"という気持ちが蘇りました。長年の夢だった農家支援事業をついに始めることができました。」',
      transformation: '新規事業を諦める日々 → 夢だった事業を実現',
      result: '開発費87.5%削減',
      industry: '農業×EC',
      icon: '🌾',
      features: ['地図購入機能', 'チャット機能', '決済システム'],
      bgGradient: 'from-green-400 to-emerald-500',
    },
    {
      company: 'カタログギフト自動連携システム',
      originalCost: '2,500万円',
      actualCost: '300万円',
      savedAmount: '2,200万円',
      seishunStory: '効率化の夢が、ついに現実のものに',
      quote: '「毎日深夜まで手作業で処理していた業務が、今では全自動。社員が定時で帰れるようになり、新しい企画を考える時間ができました。会社に笑顔が戻りました。」',
      transformation: '業務に追われる毎日 → 創造的な仕事に集中',
      result: '開発費88%削減',
      industry: 'EC・物流',
      icon: '🎁',
      features: ['自動収支計算', 'EC連携', '配送システム統合'],
      bgGradient: 'from-pink-400 to-rose-500',
    },
    {
      company: '人材派遣スタッフAI管理システム',
      originalCost: '7,500万円',
      actualCost: '800万円',
      savedAmount: '6,700万円',
      seishunStory: '中小企業でもAIで業界をリードできる',
      quote: '「大手には勝てない、そう思っていました。でもAIレンジャーで開発したシステムが評判になり、今では31社が導入。夢のような話が現実になったんです。」',
      transformation: '競争に諦めムード → 業界のイノベーターへ',
      result: '開発費89.3%削減',
      industry: '人材派遣',
      icon: '👥',
      features: ['AI自動マッチング', '自動請求書作成', '収益化成功'],
      bgGradient: 'from-blue-400 to-indigo-500',
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
            <span className="text-hope-green inline-block">青春を取り戻した</span>
            <span className="inline-block">企業様の声</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            「できない」が「できる」に変わった瞬間
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* 青春ストーリーヘッダー */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-hope-green to-ai-blue p-3 text-white">
                <p className="text-sm font-bold text-center">{story.seishunStory}</p>
              </div>
              
              {/* 背景グラデーション */}
              <div className={`absolute inset-0 bg-gradient-to-br ${story.bgGradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              {/* アイコン */}
              <div className="absolute top-16 right-4 text-5xl opacity-10 group-hover:opacity-20 transition-opacity">
                {story.icon}
              </div>
              
              <div className="relative z-10 pt-12">
                {/* 業界タグ */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className={`text-sm font-bold bg-gradient-to-r ${story.bgGradient} text-transparent bg-clip-text`}>
                    {story.industry}
                  </span>
                </div>
                
                {/* 会社名・サービス名 */}
                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2">
                  {story.company}
                </h3>
                
                {/* Before/After変換 */}
                <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 mb-4">
                  <p className="text-xs text-gray-600 text-center mb-3 font-medium">
                    {story.transformation}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <p className="text-xs text-gray-500 mb-1">Before</p>
                      <p className="text-sm font-bold text-gray-400 line-through">{story.originalCost}</p>
                    </div>
                    <motion.div 
                      className="text-xl text-hope-green"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                    <div className="text-center flex-1">
                      <p className="text-xs text-hope-green mb-1">After</p>
                      <p className="text-lg font-black text-hope-green">{story.actualCost}</p>
                    </div>
                  </div>
                </div>
                
                {/* 削減額 */}
                <div className="text-center mb-4">
                  <div className="inline-block bg-challenge-orange/10 rounded-full px-3 py-1">
                    <span className="text-challenge-orange font-bold text-sm">{story.result}</span>
                  </div>
                </div>
                
                {/* 実装機能 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-hope-green/10 text-hope-green px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* お客様の声 */}
                <blockquote className="text-sm text-gray-600 italic leading-relaxed">
                  "{story.quote}"
                </blockquote>
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
          <p className="text-lg text-gray-700 font-medium mb-6">
            あなたの会社にも、<span className="text-hope-green font-bold inline-block">「青春」を</span><span className="inline-block">取り戻しませんか？</span>
          </p>
          <Link
            href="/service#results"
            className="inline-flex items-center justify-center text-ai-blue font-bold hover:underline"
          >
            もっと多くの成功事例を見る
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;