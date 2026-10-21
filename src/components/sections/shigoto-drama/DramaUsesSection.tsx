import Image from 'next/image';
import DramaHeading from './DramaHeading';

const DramaUsesSection = () => {
  const uses = [
    {
      label: '採用ドラマ',
      title: '会社の物語で、人を呼ぶ',
      image: '/shigoto-drama/use-recruit.webp',
      alt: '昼の鉄筋現場で、鉄筋を結ぶ新人と見守るベテラン',
      rows: [
        ['物語の例', '新人と職人、仕事の誇り、仲間の絆'],
        ['流す場所', 'SNS・採用ページ・会社説明会'],
        ['こんな会社に', '建設・介護・運送・飲食・美容など'],
      ],
    },
    {
      label: 'PRドラマ',
      title: '商品の物語で、ファンをつくる',
      image: '/shigoto-drama/use-pr.webp',
      alt: '春の店先で、娘が老夫婦に新酒を差し出す',
      rows: [
        ['物語の例', '作り手の葛藤、こだわり、受け継ぐ想い'],
        ['流す場所', 'SNS・ECサイト・店頭・展示会'],
        ['こんな会社に', '食品・酒蔵・旅館・工芸・地域の店'],
      ],
    },
  ];

  const places = [
    ['SNS', 'TikTok・リール・ショートで、会社を知る入口に'],
    ['採用・説明会', '求人票の横に置き、説明会の冒頭で流す'],
    ['店頭・EC', '商品ページや売り場で、作り手の物語を'],
    ['営業・展示会', '商談の最初に見せて、覚えてもらう'],
    ['社内・家族', '社員とご家族に見せて、仕事の誇りに'],
  ];

  return (
    <section className="py-16 md:py-28 bg-drama-paper">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <DramaHeading tone="light" eyebrow="2つの使い方" heading="採用にも、PRにも" />

          <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-16 md:mb-20">
            {uses.map((use) => (
              <div key={use.label} className="rounded-xl overflow-hidden bg-drama-bg">
                <div className="relative aspect-[16/7]">
                  <Image src={use.image} alt={use.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
                </div>
                <div className="px-7 py-8 md:px-9">
                  <p className="text-xs font-bold tracking-eyebrow text-drama-gold mb-3">{use.label}</p>
                  <h3 className="font-mincho font-bold text-2xl text-white mb-6">{use.title}</h3>
                  <dl className="space-y-3">
                    {use.rows.map(([term, detail]) => (
                      <div key={term} className="flex gap-4 text-sm">
                        <dt className="w-24 shrink-0 font-bold text-drama-sand">{term}</dt>
                        <dd className="text-drama-paper/90">{detail}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-mincho font-bold text-2xl md:text-3xl text-drama-bg mb-8">一度作れば、どこでも流せる</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {places.map(([title, description]) => (
              <div key={title} className="rounded-xl bg-white border border-drama-sand/40 px-5 py-6">
                <p className="text-base font-bold text-drama-bg mb-2">{title}</p>
                <p className="text-xs md:text-sm text-body leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DramaUsesSection;
