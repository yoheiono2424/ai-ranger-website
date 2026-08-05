import Link from 'next/link';

const HeroSection = () => {
  const businesses = [
    {
      label: '法人向け',
      name: 'オーダーメイド業務AI',
      note: '御社専用の業務システム＋AI',
    },
    {
      label: '個人向け',
      name: 'Re.haru',
      note: '青春エンターテイメントアプリ',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-accent-soft via-white to-white pt-32 pb-0 md:pt-40 overflow-hidden">
      {/* 背景の淡いグロー */}
      <div className="pointer-events-none absolute -top-52 -right-32 h-[560px] w-[560px] rounded-full bg-sky-blue/25 blur-[150px]" />
      <div className="pointer-events-none absolute top-20 -left-40 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-eyebrow text-accent mb-8">
            株式会社Re.haru
          </p>

          <h1 className="text-[2rem] leading-[1.4] md:text-[3.5rem] md:leading-[1.3] font-black text-ink mb-10">
            テクノロジーの力で、
            <br />
            <span className="text-accent">挑戦できる状態</span>を取り戻す。
          </h1>

          <p className="text-base md:text-xl text-body leading-loose max-w-2xl mb-12">
            誰もが青春のような挑戦・成長・希望を持ち続けられる社会を創る。
            <br />
            それが私たちの掲げる「Return青春」です。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link
              href="/service"
              className="inline-flex items-center justify-center px-9 py-4 bg-accent text-white font-bold rounded-lg hover:bg-sky-blue transition-colors duration-200"
            >
              事業を見る
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-4 bg-white text-accent font-bold rounded-lg border border-accent/30 hover:border-accent transition-colors duration-200"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>

      {/* 事業の帯 */}
      <div className="relative z-10 border-t border-line bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-line">
            {businesses.map((biz, index) => (
              <div key={index} className="py-8 md:py-10 md:px-8 md:first:pl-0">
                <p className="text-xs font-bold tracking-eyebrow text-muted mb-3">{biz.label}</p>
                <p className="text-xl md:text-2xl font-black text-ink mb-2">{biz.name}</p>
                <p className="text-xs text-muted">{biz.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
