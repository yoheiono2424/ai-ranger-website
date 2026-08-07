import SectionHeader from './SectionHeader';

const PriceStorySection = () => {
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

  const removed = [
    { before: '見積もり', after: '一律 300万円', note: '機能を何個作っても、金額は変わりません' },
    { before: '追加請求', after: '0円', note: '契約したあとに金額が増えることはありません' },
    { before: '作って終わり', after: '追加し放題', note: '納品後も機能を追加し続けられます' },
  ];

  return (
    <section id="pricing" className="py-16 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="04"
            eyebrow="PRICE"
            heading={
              <>
                でも、オーダーメイドって
                <br />
                高いんでしょう？
              </>
            }
            lead="よく言われます。まず、相場からお見せします。"
          />

          {/* 相場 */}
          <div className="grid md:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden mb-4 shadow-card">
            {rates.map((item, index) => (
              <div key={index} className="bg-white p-6 md:p-10">
                <p className="text-[11px] md:text-xs font-bold tracking-eyebrow text-muted mb-4">
                  {item.scale}
                </p>
                <p className="text-2xl md:text-[1.9rem] lg:text-4xl font-black text-ink mb-2 tabular-nums whitespace-nowrap">
                  {item.range}
                  <span className="text-sm md:text-base lg:text-lg font-bold ml-1">万円</span>
                </p>
                <p className="text-xs text-muted">{item.note}</p>
              </div>
            ))}
          </div>

          {/* 含まれていないもの */}
          <div className="bg-white border border-line rounded-xl px-6 py-8 md:px-14 md:py-12 mb-14 md:mb-20">
            <p className="text-[11px] md:text-xs font-bold tracking-eyebrow text-alert mb-6 md:mb-10">
              しかも、この金額には含まれていません
            </p>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line">
              {notIncluded.map((item, index) => (
                <div key={index} className="py-4 md:py-0 md:px-8 md:first:pl-0 md:last:pr-0">
                  <p className="text-xs text-muted mb-2">{item.label}</p>
                  <p className="text-base md:text-xl font-black text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 一律300万円 */}
          <div className="bg-accent rounded-xl px-6 py-12 md:px-14 md:py-16 shadow-panel mb-6">
            <p className="text-xs font-bold tracking-eyebrow text-white/70 mb-5">Re.haru なら</p>
            <p className="text-5xl md:text-7xl font-black text-white leading-none mb-8">
              一律 300<span className="text-2xl md:text-3xl ml-2">万円</span>
            </p>
            <div className="grid grid-cols-3 gap-3 md:gap-6 border-t border-white/20 pt-8">
              {[
                { k: '機能数', v: '無制限' },
                { k: 'AI機能', v: '込み' },
                { k: '追加請求', v: '0円' },
              ].map((x, i) => (
                <div key={i}>
                  <p className="text-[11px] md:text-xs text-white/60 mb-1">{x.k}</p>
                  <p className="text-lg md:text-2xl font-black text-white">{x.v}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-base md:text-2xl font-bold text-ink leading-relaxed text-center mb-14 md:mb-24">
            相場なら500〜1,200万円になる「機能無制限」を、
            <br className="hidden md:block" />
            単一業務の価格でご提供します。
          </p>

          {/* なくしたもの */}
          <div className="mb-14 md:mb-20">
            <h3 className="text-2xl md:text-4xl font-black text-ink leading-snug mb-3">
              私たちが、なくしたもの
            </h3>
            <p className="text-sm md:text-base text-body mb-8 md:mb-12">
              開発を頼みにくくしていた3つを、やめました。
            </p>

            <div className="border-t border-line">
              {removed.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-line py-5 md:py-8 grid grid-cols-[7.5rem_1fr] md:grid-cols-[12rem_1fr] gap-x-4 md:gap-x-10 items-center"
                >
                  <span className="text-sm md:text-lg font-bold text-muted line-through decoration-alert decoration-2">
                    {item.before}
                  </span>
                  <div>
                    <p className="text-lg md:text-3xl font-black text-accent mb-1">{item.after}</p>
                    <p className="text-xs md:text-base text-body">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 補足 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-line rounded-xl px-6 py-6 md:px-8">
              <p className="text-[11px] font-bold tracking-eyebrow text-muted mb-3">納期</p>
              <p className="text-2xl font-black text-ink mb-1">2〜4ヶ月</p>
              <p className="text-xs text-muted">最短2ヶ月で納品可能</p>
            </div>
            <div className="border border-line rounded-xl px-6 py-6 md:px-8">
              <p className="text-[11px] font-bold tracking-eyebrow text-muted mb-3">特別オプション</p>
              <p className="text-2xl font-black text-ink mb-1">ネイティブアプリ化</p>
              <p className="text-xs text-muted">iOS / Android・ストア申請込み（+300万円）</p>
            </div>
          </div>

          <p className="text-xs text-muted leading-relaxed mt-6">
            ※ 納品後の月額プランは2つからお選びいただけます（機能追加が無制限のプランあり）。サーバー費用・AI利用料は各社からの直接請求分（実費）です。詳しくはよくあるご質問をご覧ください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceStorySection;
