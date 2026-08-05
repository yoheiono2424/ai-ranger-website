import SectionHeader from './SectionHeader';

const MarketRateSection = () => {
  const rates = [
    { scale: '単一業務', range: '200〜500', note: '在庫・見積・勤怠などを1つ' },
    { scale: '複数業務', range: '500〜1,200', note: '自社専用の本格スクラッチ' },
    { scale: '全社基幹', range: '1,000〜2,500', note: '会社全体の業務基盤' },
  ];

  const notIncluded = [
    { label: '機能追加', value: '都度見積もり' },
    { label: '保守費用', value: '開発費の 15〜20% / 年' },
    { label: '契約後の増額', value: '31.2% のPJで発生' },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="08"
            eyebrow="MARKET RATE"
            heading="AI業務システムの開発相場"
            lead={'同じ"AI業務システム"でも、規模によって金額は数倍変わります。'}
          />

          {/* 相場3レンジ */}
          <div className="grid md:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden mb-6 shadow-card">
            {rates.map((item, index) => (
              <div key={index} className="bg-white p-8 md:p-10">
                <p className="text-xs font-bold tracking-eyebrow text-muted mb-6">{item.scale}</p>
                <p className="text-3xl md:text-4xl font-black text-ink mb-3 tabular-nums">
                  {item.range}
                  <span className="text-base md:text-lg font-bold ml-1">万円</span>
                </p>
                <p className="text-xs text-muted">{item.note}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted mb-16">
            ※ 機能数・連携するシステムの数・求める精度によって大きく変動します
          </p>

          {/* 含まれていないもの */}
          <div className="bg-white border border-line rounded-xl px-8 py-12 md:px-14 md:py-14 mb-6">
            <p className="text-xs font-bold tracking-eyebrow text-alert mb-10">
              しかも、この金額には含まれていません
            </p>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line">
              {notIncluded.map((item, index) => (
                <div key={index} className="py-6 md:py-0 md:px-8 md:first:pl-0 md:last:pr-0">
                  <p className="text-xs text-muted mb-3">{item.label}</p>
                  <p className="text-lg md:text-xl font-black text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Re.haruなら */}
          <div className="bg-accent rounded-xl px-8 py-12 md:px-14 md:py-14 shadow-panel">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <p className="text-sm font-bold text-white/70 mb-3">Re.haru なら</p>
                <p className="text-4xl md:text-6xl font-black text-white leading-none">
                  一律 300<span className="text-2xl md:text-3xl ml-1">万円</span>
                </p>
              </div>
              <div className="md:text-right">
                <p className="text-xl md:text-2xl font-black text-white">すべて込み</p>
                <p className="text-xl md:text-2xl font-black text-white">追加請求 0円</p>
              </div>
            </div>
          </div>

          <p className="text-lg md:text-2xl font-bold text-ink leading-relaxed mt-16 text-center">
            相場なら500〜1,200万円になる「機能無制限」を、
            <br className="hidden md:block" />
            単一業務の価格でご提供します。
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketRateSection;
