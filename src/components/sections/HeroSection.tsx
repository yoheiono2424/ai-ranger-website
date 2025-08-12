'use client';

import { m, LazyMotion, domAnimation } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  // 軽量なアニメーション設定
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ai-blue via-hope-green to-success-yellow opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <m.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            <m.div 
              className="text-sm md:text-base text-ai-blue font-bold mb-4"
              variants={fadeInUp}
            >
              株式会社Re.haruの企業理念
            </m.div>
            
            <m.h1 
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
              variants={fadeInUp}
            >
              <span className="text-ai-blue">Return</span>青春
              <span className="block text-2xl md:text-3xl mt-4 font-bold text-gray-700">
                もう一度、青春を取り戻す
              </span>
            </m.h1>
            
            <m.p 
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              私たちは、テクノロジーの力で誰もが青春のような
              <span className="text-ai-blue font-bold inline-block">「挑戦」「成長」「希望」</span>
              を持ち続けられる社会を創ります。
            </m.p>

            <m.div 
              className="hidden md:block"
              variants={fadeInUp}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-challenge-orange text-white font-bold text-base rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                無料相談で夢を語る
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </m.div>
          </m.div>

          <m.div
            className="relative order-first md:order-last"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <m.p
                    className="text-xl md:text-2xl text-gray-700 font-bold mb-2 md:mb-4 order-first"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Restart your Spring
                  </m.p>
                  <m.div
                    className="text-5xl sm:text-6xl md:text-8xl font-black"
                    style={{
                      backgroundImage: 'linear-gradient(45deg, #2563EB, #10B981)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                    }}
                    animate={{
                      backgroundImage: [
                        'linear-gradient(45deg, #2563EB, #10B981)',
                        'linear-gradient(45deg, #10B981, #F59E0B)',
                        'linear-gradient(45deg, #F59E0B, #2563EB)',
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Re.haru
                  </m.div>
                </div>
              </div>
              <m.div
                className="absolute inset-0 bg-gradient-to-t from-ai-blue/20 to-transparent rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </m.div>
        </div>
      </div>

      <m.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </m.div>
    </section>
    </LazyMotion>
  );
};

export default HeroSection;