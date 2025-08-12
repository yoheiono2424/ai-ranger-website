'use client';

import { motion } from 'framer-motion';

const CEOMessageSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* タイトル */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              代表メッセージ
            </h2>
            <p className="text-lg text-gray-700">
              「Return青春」- 新しいチャレンジへの一歩を、もう一度
            </p>
          </div>

          {/* メッセージカード */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden"
          >
            {/* CEOプロフィール */}
            <div className="bg-gradient-to-r from-ai-blue to-sky-blue p-8 text-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">小野 陽平</h3>
                  <p className="text-lg opacity-90">株式会社Re.haru 代表取締役CEO</p>
                </div>
              </div>
            </div>

            {/* メッセージ本文 */}
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6 text-gray-700 leading-relaxed"
              >
                <p className="text-lg font-bold text-gray-900">
                  皆さんは覚えていますか？
                </p>
                
                <p>
                  学生時代、私たちは失敗を恐れずに何でもチャレンジしていました。
                  「面白そう」「やってみたい」その純粋な気持ちだけで、新しいことに飛び込んでいけた、あの頃を。
                </p>

                <p>
                  しかし、社会人になり、責任が増えるにつれて、私たちは「現実的」になっていきました。
                  「予算が...」「リスクが...」「前例が...」
                  いつしか、新しいチャレンジへの一歩を踏み出せなくなっていく。
                </p>

                <div className="bg-gradient-to-r from-ai-blue/5 to-sky-blue/5 rounded-2xl p-6 my-8 border-l-4 border-ai-blue">
                  <p className="text-xl font-bold text-ai-blue mb-3">
                    でも、本当にそれでいいのでしょうか？
                  </p>
                  <p>
                    私たちRe.haruは、「Return青春」という理念のもと、
                    皆様の中に眠る「チャレンジしたい気持ち」を呼び覚ましたいのです。
                  </p>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                  AIレンジャーが実現する「新しいチャレンジ」
                </h4>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="mb-4">
                    「システム開発は高額だから無理」<br />
                    「うちの規模では手が出ない」<br />
                    「スモールスタートなんて夢のまた夢」
                  </p>
                  <p className="font-bold text-gray-900">
                    そんな「大人の常識」を、AIレンジャーが成敗します。
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 my-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-4 shadow-lg text-center"
                  >
                    <div className="text-3xl font-black text-ai-blue mb-2">1/5</div>
                    <p className="text-sm font-bold text-gray-700">開発費用</p>
                    <p className="text-xs text-gray-600 mt-1">もう予算を理由に諦める必要はありません</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-4 shadow-lg text-center"
                  >
                    <div className="text-3xl font-black text-hope-green mb-2">1/3</div>
                    <p className="text-sm font-bold text-gray-700">開発期間</p>
                    <p className="text-xs text-gray-600 mt-1">アイデアをすぐに形にできます</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-4 shadow-lg text-center"
                  >
                    <div className="text-3xl font-black text-challenge-orange mb-2">1/10</div>
                    <p className="text-sm font-bold text-gray-700">要件定義</p>
                    <p className="text-xs text-gray-600 mt-1">「やりたいこと」を話すだけで始められます</p>
                  </motion.div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                  青春時代のように、純粋に「やりたいこと」を追求しましょう
                </h4>

                <p>
                  私たちは、皆様の「やりたい」を全力でサポートします。
                  難しい技術の話は私たちにお任せください。
                  複雑な見積もりや不透明な価格設定も、もうありません。
                </p>

                <p>
                  大切なのは、皆様の中にある「これをやってみたい」という純粋な気持ちです。
                </p>

                <div className="bg-gradient-to-r from-ai-blue to-sky-blue rounded-2xl p-8 text-white text-center my-8">
                  <motion.p
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold mb-4"
                  >
                    さあ、一緒に「Return青春」しませんか？
                  </motion.p>
                  <p className="text-lg">
                    新しいチャレンジへの一歩を、今こそ踏み出しましょう。<br />
                    AIレンジャーが、皆様の挑戦を全力で応援します。
                  </p>
                </div>

                {/* 署名 */}
                <div className="text-right mt-12 pt-8 border-t border-gray-200">
                  <p className="text-gray-700 mb-2">株式会社Re.haru</p>
                  <p className="text-xl font-bold text-gray-900">代表取締役CEO　小野 陽平</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              私たちと一緒に、新しいチャレンジを始めませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/service"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-ai-blue text-white font-bold rounded-full hover:bg-sky-blue transition-all duration-300"
              >
                サービス詳細を見る
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-ai-blue font-bold rounded-full border-2 border-ai-blue hover:bg-ai-blue hover:text-white transition-all duration-300"
              >
                お問い合わせする
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CEOMessageSection;