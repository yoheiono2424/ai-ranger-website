import Image from 'next/image';
import DramaHeading from './DramaHeading';

const DramaProblemSection = () => {
  const problems = [
    {
      label: '採用の悩み',
      image: '/shigoto-drama/problem-recruit.webp',
      alt: '夜の部屋で、ひとりスマホを見る若者',
      title: '若い人の応募が来ない',
      items: ['求人票は、どこも同じに見える', '職場の空気や人の温かさが伝わらない', '入っても、すぐ辞めてしまう'],
      note: '九州の建設業で正社員不足 69.2%（帝国データバンク 2025年4月）',
    },
    {
      label: 'PRの悩み',
      image: '/shigoto-drama/problem-pr.webp',
      alt: 'お客さんのいない夜の酒屋で、外を見る店主',
      title: 'いい商品なのに、知られていない',
      items: ['広告を出しても、すぐ飛ばされる', 'こだわりや作り手の想いが伝わらない', '最後は価格でしか比べてもらえない'],
      note: '',
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-drama-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <DramaHeading eyebrow="課題" heading="その良さが、外に届いていない" />

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {problems.map((problem) => (
              <div key={problem.label} className="flex flex-col rounded-xl overflow-hidden bg-drama-panel border border-drama-line">
                <div className="relative aspect-[16/9]">
                  <Image src={problem.image} alt={problem.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="flex flex-col flex-1 px-7 py-8 md:px-9 md:py-9">
                  <p className="text-xs font-bold tracking-eyebrow text-drama-gold mb-4">{problem.label}</p>
                  <h3 className="font-mincho font-bold text-2xl md:text-[1.75rem] text-white leading-snug mb-6">{problem.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {problem.items.map((item) => (
                      <li key={item} className="flex gap-3 text-base text-drama-paper/85 leading-relaxed">
                        <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-drama-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {problem.note && <p className="mt-auto text-xs text-drama-sand">{problem.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DramaProblemSection;
