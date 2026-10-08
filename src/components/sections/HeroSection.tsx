import Link from 'next/link';

const HeroSection = () => {
  const businesses = [
    {
      label: '法人向け',
      name: 'SysSuc（シススク）',
      note: '初期費用0円の、システム開発サブスク',
    },
    {
      label: '個人向け',
      name: 'Re.haru',
      note: '青春エンターテイメントアプリ',
    },
  ];

  return (
    <section className="relative pt-32 pb-0 md:pt-40 overflow-hidden">
      {/* 青春グラデーション背景（水色 → アクア → ピンク） */}
      <div className="absolute inset-0 bg-gradient-to-br from-seishun-sky/30 via-seishun-aqua/15 to-seishun-pink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />

      {/* 光のにじみ */}
      <div className="pointer-events-none absolute -top-44 left-1/4 h-[520px] w-[520px] rounded-full bg-seishun-sky/40 blur-[130px]" />
      <div className="pointer-events-none absolute top-24 -right-24 h-[440px] w-[440px] rounded-full bg-seishun-pink/30 blur-[130px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-eyebrow text-seishun-deep mb-8">
            株式会社Re.haru
          </p>

          <h1 className="mb-8">
            <span className="block text-[3.25rem] leading-none md:text-[6rem] font-black bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#EC4899] bg-clip-text text-transparent pb-2">
              Return青春
            </span>
          </h1>

          <p className="text-xl md:text-4xl font-black text-ink leading-[1.5] mb-8">
            もう一度、挑戦できる状態へ。
          </p>

          <p className="text-base md:text-lg text-body leading-loose max-w-2xl mb-12">
            青春とは、年齢のことではありません。
            <br />
            夢中になれるものがあり、まだやれると思えている状態のこと。
            <br />
            それを、テクノロジーの力で企業にも人にも取り戻します。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-20">
            <Link
              href="/service"
              className="inline-flex items-center justify-center px-9 py-4 bg-accent text-white font-bold rounded-full hover:bg-seishun-deep transition-colors duration-200"
            >
              事業を見る
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-4 bg-white/80 backdrop-blur text-ink font-bold rounded-full border border-white hover:bg-white transition-colors duration-200"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>

      {/* 事業の帯 */}
      <div className="relative z-10 border-t border-white/70 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-line/70">
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
