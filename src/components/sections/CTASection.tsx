'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-ai-blue via-sky-blue to-hope-green relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            今こそ、
            <span className="block mt-2">青春を取り戻す時</span>
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            高額な開発費用に悩む日々は、もう終わりです。
            AIレンジャーと一緒に、新しい挑戦を始めましょう。
          </motion.p>

          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              無料相談で分かること
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 text-white">
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-3">💰</div>
                <p className="font-bold">節約可能額</p>
                <p className="text-sm opacity-90">最大80%のコスト削減</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-3">📅</div>
                <p className="font-bold">開発期間</p>
                <p className="text-sm opacity-90">通常の1/3で完成</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-3">🎯</div>
                <p className="font-bold">実現可能性</p>
                <p className="text-sm opacity-90">あなたのアイデアを診断</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-ai-blue font-black text-lg rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">
                無料相談を今すぐ申し込む
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-challenge-orange to-success-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.span
                className="relative z-10 ml-2 group-hover:text-white transition-colors duration-300"
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                →
              </motion.span>
            </Link>
            
            <p className="text-white/80 text-sm">
              ※ 相談は完全無料・売り込みなし
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="text-white/60 text-sm mb-4">
              相談実績500社以上 | 満足度98%
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <div className="text-white/80">
                <span className="text-3xl font-black">24時間</span>
                <p className="text-sm">以内に返信</p>
              </div>
              <div className="text-white/80">
                <span className="text-3xl font-black">0円</span>
                <p className="text-sm">相談費用</p>
              </div>
              <div className="text-white/80">
                <span className="text-3xl font-black">30分</span>
                <p className="text-sm">で診断完了</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </section>
  );
};

export default CTASection;