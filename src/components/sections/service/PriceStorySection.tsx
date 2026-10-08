import SectionHeader from './SectionHeader';

const PriceStorySection = () => {
  const rows = [
    { label: '初期費用', general: '数百万〜1,000万円以上', syssuc: '0円' },
    { label: 'お支払い', general: '開発費をまとめて支払う（保守費は別）', syssuc: '月額20万円の定額' },
    { label: '作り方', general: '最初に全体を決めて、一度に作る', syssuc: '1件ずつ、使いながら次へ' },
  ];

  return (
    <section id="pricing" className="py-16 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="06"
            eyebrow="料金"
            heading={
              <>
                一般的な開発なら、数百万円〜。
                <br />
                SysSucなら、初期費用0円。
              </>
            }
          />

          {/* 料金カード（サイト内で濃い面はここ1箇所だけ） */}
          <div className="relative bg-navy rounded-xl overflow-hidden shadow-panel mb-14 md:mb-20">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#4AA8DE] via-[#5CC9D9] to-[#9FD9E6]" />
            <div className="grid grid-cols-2 divide-x divide-white/20 px-6 py-10 md:px-14 md:py-14">
              <div className="pr-4 md:pr-10">
                <p className="text-xs md:text-sm font-bold text-white/70 mb-3">初期費用</p>
                <p className="text-white font-black leading-none">
                  <span className="text-6xl md:text-8xl">0</span>
                  <span className="text-xl md:text-3xl ml-1">円</span>
                </p>
              </div>
              <div className="pl-6 md:pl-10">
                <p className="text-xs md:text-sm font-bold text-white/70 mb-3">月額</p>
                <p className="text-white font-black leading-none">
                  <span className="text-6xl md:text-8xl">20</span>
                  <span className="text-xl md:text-3xl ml-1">万円</span>
                  <span className="block md:inline text-xs md:text-base font-medium text-white/70 mt-2 md:mt-0 md:ml-1">（税別）</span>
                </p>
              </div>
            </div>
          </div>

          {/* 比較 */}
          <h3 className="text-xl md:text-3xl font-black text-ink mb-6 md:mb-8">一般的な受託開発との違い</h3>
          <div className="border border-line rounded-xl overflow-hidden shadow-card">
            <div className="grid grid-cols-[5.5rem_1fr_1fr] md:grid-cols-[10rem_1fr_1fr] bg-surface border-b border-line text-xs md:text-sm font-bold">
              <div className="px-3 py-3 md:px-6 md:py-4" />
              <div className="px-3 py-3 md:px-6 md:py-4 text-muted">一般的な受託開発</div>
              <div className="px-3 py-3 md:px-6 md:py-4 text-accent bg-accent-soft">SysSuc</div>
            </div>
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[5.5rem_1fr_1fr] md:grid-cols-[10rem_1fr_1fr] border-b border-line last:border-b-0"
              >
                <div className="px-3 py-5 md:px-6 md:py-6 text-xs md:text-sm font-bold text-muted">{row.label}</div>
                <div className="px-3 py-5 md:px-6 md:py-6 text-sm md:text-base text-body">{row.general}</div>
                <div className="px-3 py-5 md:px-6 md:py-6 text-sm md:text-lg font-black text-ink bg-accent-soft/60">
                  {row.syssuc}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted leading-relaxed mt-4">
            ※ 価格は税別です。システムを動かすサーバー等のインフラ費は、別途実費となります（目安は下でご説明します）。
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceStorySection;
