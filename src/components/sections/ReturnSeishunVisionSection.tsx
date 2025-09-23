'use client';

import { motion } from 'framer-motion';

const ReturnSeishunVisionSection = () => {
  const visions = [
    {
      title: '挑戦できる企業',
      subtitle: '新しいことに踏み出せる',
      description: '予算の壁に阻まれていた新規事業やDXプロジェクト。AIレンジャーなら、その夢を現実にできます。',
      points: [
        '新規事業への投資が可能に',
        'アイデアを即座に形にできる',
        '失敗を恐れない文化が生まれる'
      ],
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
          <path d="M32 12L42 22L38 36H26L22 22L32 12Z" fill="currentColor" opacity="0.1"/>
          <path d="M32 20V44M32 44L24 36M32 44L40 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="12" r="3" fill="currentColor"/>
          <path d="M20 52H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: 'text-ai-blue',
      gradient: 'from-ai-blue to-sky-blue'
    },
    {
      title: '成長し続ける企業',
      subtitle: '競争力を取り戻せる',
      description: '大手企業との競争で諦めていた領域。AIの力で、規模に関係なくイノベーションを起こせます。',
      points: [
        '最新技術をすぐに導入',
        '業務効率が劇的に向上',
        '顧客満足度の大幅改善'
      ],
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
          <rect x="20" y="36" width="8" height="12" fill="currentColor" opacity="0.1"/>
          <rect x="28" y="28" width="8" height="20" fill="currentColor" opacity="0.15"/>
          <rect x="36" y="20" width="8" height="28" fill="currentColor" opacity="0.2"/>
          <path d="M16 40L24 32L32 36L48 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 20H48V28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: 'text-hope-green',
      gradient: 'from-hope-green to-emerald-400'
    },
    {
      title: 'ワクワクする企業',
      subtitle: '毎日が楽しくなる',
      description: 'ルーティンワークに追われる日々から、創造的で価値ある仕事へ。社員の笑顔が増えていきます。',
      points: [
        '定時退社が当たり前に',
        '創造的な仕事に集中',
        'チーム全体が活性化'
      ],
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
          <path d="M32 16L36 24L45 25L38 31L40 40L32 36L24 40L26 31L19 25L28 24L32 16Z" fill="currentColor" opacity="0.1"/>
          <path d="M32 16L36 24L45 25L38 31L40 40L32 36L24 40L26 31L19 25L28 24L32 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="26" cy="32" r="1.5" fill="currentColor"/>
          <circle cx="38" cy="32" r="1.5" fill="currentColor"/>
          <path d="M26 38C26 38 28 40 32 40C36 40 38 38 38 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: 'text-challenge-orange',
      gradient: 'from-challenge-orange to-amber-400'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ai-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-hope-green/5 rounded-full blur-3xl"></div>
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
            <span className="text-sm font-semibold text-hope-green bg-hope-green/10 px-4 py-2 rounded-full">
              VISION
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-hope-green to-ai-blue bg-clip-text text-transparent">
              青春を取り戻した
            </span>
            <br />
            <span className="text-gray-900">企業とは</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            高額なシステム開発費に悩まされることなく、
            本来やりたかったビジネスに全力投球できる。
            それが<span className="inline-block">「青春を取り戻した企業」</span>です。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {visions.map((vision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* 背景グラデーション */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${vision.gradient} opacity-10 rounded-full blur-2xl group-hover:w-48 group-hover:h-48 transition-all duration-500`}></div>
                
                {/* アイコン */}
                <div className="relative z-10 mb-6">
                  <div className={`w-20 h-20 ${vision.color} transform group-hover:scale-110 transition-transform duration-300`}>
                    {vision.icon}
                  </div>
                </div>

                {/* タイトル */}
                <div className="relative z-10 mb-4">
                  <h3 className={`text-2xl font-bold ${vision.color} mb-1`}>
                    {vision.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {vision.subtitle}
                  </p>
                </div>

                {/* 説明文 */}
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  {vision.description}
                </p>

                {/* ポイントリスト */}
                <ul className="space-y-3 relative z-10">
                  {vision.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className={`w-5 h-5 ${vision.color} mt-0.5 mr-3 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* ホバー時のアクセントライン */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${vision.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-gray-600">すでに100社以上が実現</span>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">最短2ヶ月で変化を実感</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReturnSeishunVisionSection;