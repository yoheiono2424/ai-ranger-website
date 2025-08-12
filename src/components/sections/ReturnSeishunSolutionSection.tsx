'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ReturnSeishunSolutionSection = () => {
  const solutions = [
    {
      title: 'AI技術で開発を革新',
      subtitle: '従来の1/5の価格を実現',
      description: 'AIレンジャーが、高額な開発費用という悪を成敗。最新のAI技術により、従来の開発工数を大幅削減し、驚きの低価格を実現します。',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
          <path d="M32 16V48M16 32H48" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.2"/>
          <path d="M32 12L36 20H28L32 12Z" fill="currentColor"/>
          <path d="M32 52L28 44H36L32 52Z" fill="currentColor"/>
          <path d="M52 32L44 36V28L52 32Z" fill="currentColor"/>
          <path d="M12 32L20 28V36L12 32Z" fill="currentColor"/>
        </svg>
      ),
      metrics: [
        { label: '開発費用', value: '1/5', highlight: true },
        { label: '開発期間', value: '1/3' },
        { label: '要件定義', value: '1/10' }
      ],
      color: 'ai-blue',
      gradient: 'from-ai-blue to-sky-blue'
    },
    {
      title: '対話だけで要件定義',
      subtitle: '専門知識不要で即座に形に',
      description: '難しい仕様書は不要。あなたの「こんなシステムが欲しい」という想いを、AIレンジャーが対話を通じて理解し、最適な形に仕上げます。',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
          <rect x="16" y="24" width="20" height="12" rx="6" fill="currentColor" opacity="0.2"/>
          <rect x="28" y="36" width="20" height="12" rx="6" fill="currentColor" opacity="0.2"/>
          <circle cx="20" cy="30" r="2" fill="currentColor"/>
          <circle cx="26" cy="30" r="2" fill="currentColor"/>
          <circle cx="32" cy="30" r="2" fill="currentColor"/>
          <circle cx="32" cy="42" r="2" fill="currentColor"/>
          <circle cx="38" cy="42" r="2" fill="currentColor"/>
          <circle cx="44" cy="42" r="2" fill="currentColor"/>
        </svg>
      ),
      metrics: [
        { label: '仕様書作成', value: '不要', highlight: true },
        { label: '打ち合わせ', value: '最小限' },
        { label: '理解度', value: '100%' }
      ],
      color: 'hope-green',
      gradient: 'from-hope-green to-emerald-400'
    },
    {
      title: '妥協なき全機能実装',
      subtitle: '夢をすべて形にする',
      description: '「予算の都合で機能を削る」という妥協は過去のもの。AIレンジャーなら、あなたが本当に欲しかった機能をすべて実装できます。',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
          <path d="M22 32L28 38L42 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 44L20 48L28 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
          <path d="M36 44L40 48L48 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        </svg>
      ),
      metrics: [
        { label: '機能実装率', value: '100%', highlight: true },
        { label: '追加費用', value: 'なし' },
        { label: '満足度', value: '最高' }
      ],
      color: 'challenge-orange',
      gradient: 'from-challenge-orange to-amber-400'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-ai-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-hope-green/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-ai-blue bg-ai-blue/10 px-4 py-2 rounded-full">
              SOLUTION
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-ai-blue to-hope-green bg-clip-text text-transparent inline-block">
              AIレンジャー
            </span>
            <span className="inline-block">が実現する</span>
            <br />
            <span className="text-gray-900">Return青春</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            高額な開発相場を成敗し、すべての企業に
            <span className="inline-block">「挑戦する青春」</span>を取り戻す正義のヒーロー
          </p>
        </motion.div>

        <div className="space-y-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* 左側：説明部分 */}
                  <div className={`p-10 lg:p-12 bg-gradient-to-br from-white to-gray-50 order-2 lg:order-${index % 2 === 0 ? '1' : '2'}`}>
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 flex-shrink-0 text-${solution.color}`}>
                        {solution.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold text-${solution.color} mb-2`}>
                          {solution.title}
                        </h3>
                        <p className="text-sm font-medium text-gray-500 mb-4">
                          {solution.subtitle}
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {solution.description}
                        </p>
                        
                        {/* メトリクス */}
                        <div className="flex flex-wrap gap-4">
                          {solution.metrics.map((metric, idx) => (
                            <div 
                              key={idx} 
                              className={`${metric.highlight ? `bg-gradient-to-r ${solution.gradient} text-white` : 'bg-gray-100 text-gray-700'} px-4 py-2 rounded-full`}
                            >
                              <span className="text-xs font-medium">{metric.label}</span>
                              <span className="mx-1">:</span>
                              <span className="font-bold">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 右側：ビジュアル部分 */}
                  <div className={`relative bg-gradient-to-br ${solution.gradient} p-10 lg:p-12 order-1 lg:order-${index % 2 === 0 ? '2' : '1'}`}>
                    <div className="absolute inset-0 bg-white/10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(
                          45deg,
                          transparent,
                          transparent 20px,
                          rgba(255,255,255,0.05) 20px,
                          rgba(255,255,255,0.05) 40px
                        )`
                      }}></div>
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center text-white">
                      <div className="text-6xl md:text-7xl font-black mb-4 opacity-90">
                        {index === 0 && '1/5'}
                        {index === 1 && '対話'}
                        {index === 2 && '100%'}
                      </div>
                      <p className="text-xl md:text-2xl font-bold opacity-90">
                        {index === 0 && 'のコストで実現'}
                        {index === 1 && 'だけで完成'}
                        {index === 2 && '機能を実装'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block">
            <p className="text-gray-600 mb-6">
              高額な開発費用に悩む時代は、もう終わりです
            </p>
            <Link
              href="/service"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-ai-blue to-hope-green text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              AIレンジャーの詳細を見る
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .text-ai-blue { color: #3B82F6; }
        .text-hope-green { color: #10B981; }
        .text-challenge-orange { color: #F97316; }
        .bg-ai-blue { background-color: #3B82F6; }
        .bg-hope-green { background-color: #10B981; }
        .bg-challenge-orange { background-color: #F97316; }
      `}</style>
    </section>
  );
};

export default ReturnSeishunSolutionSection;