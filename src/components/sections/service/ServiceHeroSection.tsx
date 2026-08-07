import Link from 'next/link';

const ServiceHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-accent-soft via-white to-white pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden">
      {/* 背景の淡いグロー */}
      <div className="pointer-events-none absolute -top-52 -right-32 h-[560px] w-[560px] rounded-full bg-sky-blue/25 blur-[150px]" />
      <div className="pointer-events-none absolute top-20 -left-40 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-eyebrow text-accent mb-6 md:mb-8">
            オーダーメイド業務AI
          </p>

          <h1 className="text-[1.9rem] leading-[1.45] md:text-[3.25rem] md:leading-[1.35] font-black text-ink mb-8">
            御社専用の業務システムを
            <br className="md:hidden" />
            作ります。
            <br />
            その中に、<span className="text-accent">AI</span>が入っています。
          </h1>

          <p className="text-base md:text-xl text-body leading-loose max-w-2xl mb-10">
            AIは、使われないと意味がない。
            <br />
            だから、使わないと仕事が回らない場所に入れます。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-4 bg-accent text-white font-bold rounded-lg hover:bg-sky-blue transition-colors duration-200"
            >
              無料で相談する
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center px-9 py-4 bg-white text-accent font-bold rounded-lg border border-accent/30 hover:border-accent transition-colors duration-200"
            >
              料金を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
