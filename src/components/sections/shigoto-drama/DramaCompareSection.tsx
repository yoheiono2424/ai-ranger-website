import Image from 'next/image';

const DramaCompareSection = () => {
  const sides = [
    {
      label: 'これまで',
      image: '/shigoto-drama/compare-before.webp',
      alt: '大勢のスタッフと機材が並ぶ、大がかりなドラマの撮影現場',
      items: ['1本 500万円〜', '役者・ロケ・撮影チーム', '完成まで数か月'],
      isNew: false,
    },
    {
      label: 'シゴトドラマなら',
      image: '/shigoto-drama/compare-after.webp',
      alt: '自社のドラマをスマホで見て笑う社長と社員',
      items: ['撮影なし', 'ご負担は取材1時間だけ', '完成まで約2週間'],
      isNew: true,
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-drama-bg border-t border-drama-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-mincho font-bold text-white text-[1.75rem] leading-[1.5] md:text-[2.6rem] md:leading-[1.4] mb-12 md:mb-16 md:text-center">
            ドラマは、
            <br className="md:hidden" />
            もう大企業だけのものじゃない。
          </h2>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {sides.map((side) => (
              <div
                key={side.label}
                className={`relative rounded-xl overflow-hidden min-h-[440px] md:min-h-[560px] flex items-end ${
                  side.isNew ? 'ring-1 ring-drama-gold/60' : ''
                }`}
              >
                <Image
                  src={side.image}
                  alt={side.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover ${side.isNew ? '' : 'grayscale'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-drama-bg via-drama-bg/60 to-transparent" />
                <div className="relative px-7 pb-8 md:px-9 md:pb-10">
                  <p
                    className={`text-sm font-bold tracking-eyebrow mb-5 ${side.isNew ? 'text-drama-gold' : 'text-drama-sand'}`}
                  >
                    {side.label}
                  </p>
                  <ul className="space-y-3">
                    {side.items.map((item) => (
                      <li
                        key={item}
                        className={`font-mincho font-bold text-2xl md:text-[1.75rem] ${side.isNew ? 'text-white' : 'text-drama-sand'}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DramaCompareSection;
