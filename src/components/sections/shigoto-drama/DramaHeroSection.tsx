import Link from 'next/link';
import Image from 'next/image';

const DramaHeroSection = () => {
  return (
    <section className="relative bg-drama-bg overflow-hidden">
      <div className="relative min-h-[620px] md:min-h-[720px] flex items-end md:items-center">
        <Image
          src="/shigoto-drama/hero.webp"
          alt="夕日の現場で、橋を眺めながら並んで座るベテラン職人と新人"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        {/* 文字を読みやすくするための影 */}
        <div className="absolute inset-0 bg-gradient-to-t from-drama-bg via-drama-bg/55 to-transparent md:bg-gradient-to-r md:from-drama-bg/85 md:via-drama-bg/35 md:to-transparent" />

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-xl">
              <p className="text-xs md:text-sm font-bold tracking-eyebrow text-drama-gold mb-6">
                採用とPRのための、縦型ドラマ
              </p>
              <h1 className="font-mincho font-bold text-white text-[2.4rem] leading-[1.35] md:text-[3.6rem] md:leading-[1.3] mb-6">
                いい会社ほど、
                <br />
                伝わっていない。
              </h1>
              <p className="text-base md:text-xl text-drama-paper/90 leading-loose mb-10">
                御社の仕事と商品を、ドラマに。
              </p>
              <p className="font-mincho font-bold text-2xl md:text-3xl text-drama-gold mb-10">シゴトドラマ</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-9 py-4 bg-drama-gold text-drama-bg font-bold rounded-lg hover:bg-white transition-colors duration-200"
                >
                  無料で相談する
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="#samples"
                  className="inline-flex items-center justify-center px-9 py-4 text-white font-bold rounded-lg border border-white/30 hover:border-white transition-colors duration-200"
                >
                  サンプルを見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DramaHeroSection;
