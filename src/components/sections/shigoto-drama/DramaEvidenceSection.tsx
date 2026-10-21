import Image from 'next/image';
import DramaHeading from './DramaHeading';

const DramaEvidenceSection = () => {
  const stats = [
    {
      label: '動画広告のクリック率',
      value: '1.21倍',
      description: '写真の広告と比べて。1件の獲得にかかる費用は、約3割安く。',
    },
    {
      label: '心を動かす広告の効果',
      value: '1.7倍',
      description: '理屈で訴える広告と比べた、ブランドへの効果。しかも長く続く。',
    },
    {
      label: '縦型ドラマで、予約が',
      value: '270%増',
      description: 'JALが久米島を舞台にした物語を公開。1か月で1,000万回再生。',
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-drama-bg border-t border-drama-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <DramaHeading
            eyebrow="変化"
            heading={
              <>
                人が会社や商品を知る入口は、
                <br className="hidden md:block" />
                1分の動画に変わった。
              </>
            }
          />

          {/* 市場の伸び（写真の上に数字を重ねる） */}
          <div className="relative rounded-xl overflow-hidden mb-14 md:mb-20">
            <div className="relative aspect-[4/3] md:aspect-[16/7]">
              <Image
                src="/shigoto-drama/evidence-train.webp"
                alt="電車の中で、スマホの動画を見る人たち"
                fill
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-drama-bg/90 via-drama-bg/40 to-transparent md:bg-gradient-to-r md:from-drama-bg/85 md:via-drama-bg/30 md:to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-x-12 gap-y-4 px-6 pb-6 md:inset-y-0 md:items-center md:px-12 md:pb-0">
              <div>
                <p className="font-mincho font-bold text-5xl md:text-6xl text-drama-gold">2,049億円</p>
                <p className="text-sm text-drama-sand mt-2">国内の縦型動画広告市場（2025年）</p>
              </div>
              <div>
                <p className="font-mincho font-bold text-5xl md:text-6xl text-white">155.9%</p>
                <p className="text-sm text-drama-sand mt-2">前年比</p>
              </div>
            </div>
          </div>

          <p className="font-mincho font-bold text-2xl md:text-3xl text-white mb-8">
            写真より動画。
            <br className="md:hidden" />
            説明より、物語。
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-drama-panel border border-drama-line px-7 py-8">
                <p className="text-sm font-bold text-white mb-4">{stat.label}</p>
                <p className="font-mincho font-bold text-5xl text-drama-gold mb-5">{stat.value}</p>
                <p className="text-sm text-drama-sand leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-drama-sand/80 leading-relaxed">
            出典：サイバーエージェント／デジタルインファクト「動画広告市場調査」（2025年）、Recto「Meta広告 動画と静止画の効果比較」（2026年・20アカウント）、Binet &amp; Field「The Long and the Short of It」（IPA、約1,400事例）、Web担当者Forum（2024年）
          </p>
        </div>
      </div>
    </section>
  );
};

export default DramaEvidenceSection;
