import Link from 'next/link';

const ServiceHeroSection = () => {
  const specs = [
    { label: '開発費用', value: '一律 300万円', note: 'AI機能込み・機能数の制限なし' },
    { label: '機能追加', value: '月額10万円で無制限', note: 'フルプランなら納品後も追加し放題' },
    { label: '納期', value: '2〜6ヶ月', note: '最短2ヶ月で納品可能' },
  ];

  return (
    <section className="relative bg-gradient-to-b from-accent-soft via-white to-white pt-32 pb-0 md:pt-40 overflow-hidden">
      {/* 背景の淡いグロー */}
      <div className="pointer-events-none absolute -top-52 -right-32 h-[560px] w-[560px] rounded-full bg-sky-blue/25 blur-[150px]" />
      <div className="pointer-events-none absolute top-20 -left-40 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-eyebrow text-accent mb-8">
            オーダーメイド業務AI
          </p>

          <h1 className="text-[1.9rem] leading-[1.45] md:text-[3.25rem] md:leading-[1.35] font-black text-ink mb-10">
            御社専用の業務システムを
            <br className="md:hidden" />
            作ります。
            <br />
            その中に、<span className="text-accent">AI</span>が入っています。
          </h1>

          <p className="text-base md:text-xl text-body leading-loose max-w-2xl mb-12">
            研修を受けても、ツールを入れても、使わない社員がいる。
            <br />
            AI単体は「使う習慣」がないと使われないからです。
            <br />
            だから私たちは、AIを業務システムの中に入れます。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
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

      {/* スペック帯 */}
      <div className="relative z-10 border-t border-line bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line">
            {specs.map((spec, index) => (
              <div key={index} className="py-8 md:py-10 md:px-8 md:first:pl-0">
                <p className="text-xs font-bold tracking-eyebrow text-muted mb-3">{spec.label}</p>
                <p className="text-2xl md:text-3xl font-black text-ink mb-2">{spec.value}</p>
                <p className="text-xs text-muted">{spec.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
