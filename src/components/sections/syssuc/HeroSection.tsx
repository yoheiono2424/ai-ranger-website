'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#E8F4F8] to-[#D1EBF5]">
      {/* 背景グリッドパターン */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(91, 183, 211, 0.08) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(91, 183, 211, 0.08) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* 浮遊する幾何学要素 - 明るい色 */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[10%] w-20 h-20 border-2 border-[#5BB7D3]/30 rounded-lg"
        style={{
          background: 'linear-gradient(135deg, rgba(91, 183, 211, 0.1) 0%, transparent 100%)',
          boxShadow: '0 0 30px rgba(91, 183, 211, 0.15)'
        }}
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-48 right-[15%] w-16 h-16 border-2 border-[#5BB7D3]/25 rounded-full"
        style={{ boxShadow: '0 0 40px rgba(91, 183, 211, 0.2)' }}
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-48 left-[20%] w-12 h-12 border-2 border-[#3A8FC2]/25 rotate-45"
        style={{
          background: 'linear-gradient(135deg, rgba(58, 143, 194, 0.1) 0%, transparent 100%)'
        }}
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-[10%] w-24 h-24 border-2 border-[#5BB7D3]/20 rounded-2xl"
        style={{ boxShadow: '0 0 50px rgba(91, 183, 211, 0.15)' }}
      />

      {/* グロー効果のある背景要素 */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#5BB7D3] rounded-full opacity-10 blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#3A8FC2] rounded-full opacity-10 blur-[80px]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* ロゴ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Image
              src="/syssuc-logo.png"
              alt="SysSuc"
              width={280}
              height={100}
              className="mx-auto drop-shadow-lg"
              priority
            />
          </motion.div>

          {/* キャッチコピー */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-[#1B3A5F] mb-6 leading-tight"
          >
            システム開発に、
            <br />
            <span className="bg-gradient-to-r from-[#5BB7D3] via-[#3A8FC2] to-[#5BB7D3] bg-clip-text text-transparent">
              サブスク革命。
            </span>
          </motion.h1>

          {/* サブコピー */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            開発も、保守も、改修も。
            <br />
            ぜんぶ込みで、<span className="text-[#3A8FC2] font-bold">月額10万円</span>から。
          </motion.p>

          {/* 比較テキスト - ガラスモーフィズム */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10 inline-block px-6 py-3 rounded-xl"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(91, 183, 211, 0.3)',
              boxShadow: '0 4px 20px rgba(91, 183, 211, 0.1)'
            }}
          >
            <p className="text-gray-500 text-sm">従来の開発費用：3,000万円〜1億円</p>
            <p className="text-[#3A8FC2] font-bold">SysSuc：月額10万円〜</p>
          </motion.div>

          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="group relative inline-block"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5BB7D3] to-[#3A8FC2] rounded-full blur opacity-40 group-hover:opacity-60 transition duration-300" />
              <div className="relative bg-gradient-to-r from-[#5BB7D3] to-[#3A8FC2] text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                無料相談してみる
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* 下部グラデーション */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
    </section>
  );
};

export default HeroSection;
