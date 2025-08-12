'use client';

import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';

const ServiceHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-ai-blue/10 via-hope-green/5 to-challenge-orange/10 pt-24 md:pt-32 pb-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* メインコンテンツ：左テキスト、右ロゴ */}
          <div className="grid lg:grid-cols-2 gap-2 md:gap-8 items-center">
            {/* ロゴ：モバイルでは最初に表示 */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last mb-2 md:mb-0">
              <div className="relative">
                <OptimizedImage
                  src="/ai-ranger-logo.png"
                  alt="AIレンジャー"
                  width={450}
                  height={130}
                  className="object-contain w-auto h-auto max-w-full"
                  priority
                />
              </div>
            </div>

            {/* テキストコンテンツ：モバイルでは2番目に表示 */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                <span className="text-ai-blue inline-block">AIレンジャー</span><span className="inline-block">で実現する</span>
                <span className="block mt-2">次世代のシステム開発</span>
              </h1>
              
              <p className="text-base md:text-xl text-gray-700 mb-8 leading-relaxed">
                <span className="inline-block">「無理だ」と諦めていたシステムも、</span><span className="inline-block">AIレンジャーなら</span>
                <span className="text-hope-green font-bold inline-block">1/5のコスト、1/3の期間</span><span className="inline-block">で実現可能です</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-ai-blue text-white font-bold rounded-full hover:bg-sky-blue transition-all duration-300 transform hover:scale-105"
                >
                  無料相談を申し込む
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="#price"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-ai-blue font-bold rounded-full border-2 border-ai-blue hover:bg-ai-blue hover:text-white transition-all duration-300"
                >
                  料金プランを見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
};

export default ServiceHeroSection;