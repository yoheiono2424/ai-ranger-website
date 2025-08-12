'use client';

import { motion } from 'framer-motion';

const VisionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* メインビジョン */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, type: "spring" }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-ai-blue to-sky-blue text-transparent bg-clip-text">
                  Return青春
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 font-bold">
                新しいチャレンジへの一歩を、もう一度
              </p>
            </motion.div>
          </div>

          {/* ビジョン説明 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 左側：イラスト的な表現 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-ai-blue to-sky-blue rounded-full opacity-20 blur-2xl"></div>
                
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">😔</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800">Before</p>
                      <p className="text-sm text-gray-600">「予算が...」「リスクが...」と諦める日々</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-ai-blue"
                    >
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ai-blue to-sky-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🚀</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-ai-blue">After</p>
                      <p className="text-sm text-gray-600">「やってみよう！」と挑戦できる環境へ</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 右側：ビジョンの詳細 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-ai-blue">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  青春時代の「挑戦する心」を取り戻す
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  学生時代、私たちは失敗を恐れずに何でもチャレンジしていました。
                  その純粋な「やってみたい」という気持ちを、ビジネスの世界でも実現できる環境を創ります。
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-hope-green">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  高額な開発費用という「大人の事情」を打破
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  「システム開発は高額だから無理」という常識を、AIレンジャーが覆します。
                  予算を理由に夢を諦める必要は、もうありません。
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-challenge-orange">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  すべての企業に平等なチャンスを
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  大企業も中小企業も、スタートアップも個人事業主も。
                  誰もが最新のテクノロジーを活用できる、そんな世界を実現します。
                </p>
              </div>
            </motion.div>
          </div>

          {/* ビジョンの数値 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Return青春が実現する世界
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black text-ai-blue mb-2"
                >
                  100<span className="text-2xl">社</span>
                </motion.div>
                <p className="text-gray-700 font-bold">年間支援企業数目標</p>
                <p className="text-sm text-gray-600 mt-2">
                  多くの企業の挑戦を支援
                </p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black text-hope-green mb-2"
                >
                  1/5<span className="text-2xl">の価格</span>
                </motion.div>
                <p className="text-gray-700 font-bold">従来比の開発費用</p>
                <p className="text-sm text-gray-600 mt-2">
                  誰もが手の届く価格で
                </p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black text-challenge-orange mb-2"
                >
                  ∞
                </motion.div>
                <p className="text-gray-700 font-bold">無限の可能性</p>
                <p className="text-sm text-gray-600 mt-2">
                  アイデアを形にする力
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;