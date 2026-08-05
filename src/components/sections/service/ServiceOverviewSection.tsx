import SmoothScrollLink from '@/components/common/SmoothScrollLink';
import SectionHeader from './SectionHeader';

const ServiceOverviewSection = () => {
  const features = [
    {
      value: '最短 2ヶ月',
      title: '開発スピード',
      details: [
        '独自のAI開発技術を確立',
        '要件定義から実装までを圧縮',
        '最短2ヶ月での納品を実現',
      ],
    },
    {
      value: '見積もり 不要',
      title: '価格',
      details: [
        '一律300万円のシンプルな料金体系',
        '機能数の制限なし＋AI機能込み',
        '契約後の追加請求は0円',
      ],
    },
    {
      value: 'まず、作る',
      title: 'プロセス',
      details: [
        'やりたいことを話すだけでOK',
        '契約前にプロトタイプをお見せします',
        '実物を見てから決められます',
      ],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="04"
            eyebrow="OUR TECHNOLOGY"
            heading={
              <>
                なぜ、この<span className="text-accent">価格とスピード</span>で
                <br />
                作れるのか
              </>
            }
            lead="独自開発のAIシステム開発技術によって、従来は人手でかかっていた工程を大幅に圧縮しました。浮いたコストと時間を、そのまま価格と納期に反映しています。"
          />

          {/* 3つの特徴 */}
          <div className="grid md:grid-cols-3 border-t border-line">
            {features.map((feature, index) => (
              <div
                key={index}
                className="py-10 md:py-12 md:px-8 md:first:pl-0 md:last:pr-0 border-b md:border-b-0 md:border-r md:last:border-r-0 border-line"
              >
                <p className="text-xs font-bold tracking-eyebrow text-muted mb-4">
                  {feature.title}
                </p>
                <p className="text-2xl md:text-3xl font-black text-ink mb-8">{feature.value}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-body leading-relaxed"
                    >
                      <span className="text-accent mr-3 flex-shrink-0">—</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 締め */}
          <div className="mt-24 text-center">
            <p className="text-2xl md:text-4xl font-black text-ink leading-[1.4] mb-12">
              使われるAIを、御社の業務の
              <br />
              「中」に。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SmoothScrollLink
                href="#pricing"
                className="px-9 py-4 bg-accent text-white font-bold rounded-lg hover:bg-sky-blue transition-colors duration-200 inline-block text-center"
              >
                料金プランを見る
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#results"
                className="px-9 py-4 bg-white text-accent font-bold rounded-lg border border-accent/30 hover:border-accent transition-colors duration-200 inline-block text-center"
              >
                開発実績を見る
              </SmoothScrollLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverviewSection;
