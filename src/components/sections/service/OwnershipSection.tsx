import SectionHeader from './SectionHeader';

const OwnershipSection = () => {
  return (
    <section className="py-16 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="08"
            eyebrow="システムを所有したい場合"
            heading="途中で、買い取ることもできます。"
          />

          {/* 計算式 */}
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 md:gap-6 mb-6">
            <div className="border border-line rounded-xl px-3 py-6 md:px-8 md:py-8 text-center">
              <p className="text-[11px] md:text-xs font-bold text-muted mb-2">買取の基準額</p>
              <p className="text-ink font-black leading-none">
                <span className="text-3xl md:text-6xl tabular-nums">500</span>
                <span className="text-sm md:text-xl ml-0.5">万円</span>
              </p>
            </div>
            <span className="text-2xl md:text-4xl font-black text-muted">−</span>
            <div className="border border-line rounded-xl px-3 py-6 md:px-8 md:py-8 text-center">
              <p className="text-[11px] md:text-xs font-bold text-muted mb-2">これまでのお支払い</p>
              <p className="text-base md:text-2xl font-black text-ink leading-tight">払い済みの月額</p>
            </div>
            <span className="text-2xl md:text-4xl font-black text-muted">＝</span>
            <div className="bg-accent-soft border-2 border-accent rounded-xl px-3 py-6 md:px-8 md:py-8 text-center">
              <p className="text-[11px] md:text-xs font-bold text-accent mb-2">買取額</p>
              <p className="text-ink font-black leading-none">
                <span className="text-[11px] md:text-sm font-bold text-muted mr-1">例</span>
                <span className="text-3xl md:text-6xl tabular-nums">380</span>
                <span className="text-sm md:text-xl ml-0.5">万円</span>
              </p>
            </div>
          </div>
          <p className="text-base md:text-lg font-bold text-ink mb-2">買取額は最低100万円です。</p>
          <p className="text-sm md:text-base text-body mb-14 md:mb-20">
            例：6か月後に買い取る場合　500万円 − 120万円（20万円×6か月）＝ <span className="font-black text-ink">380万円</span>
          </p>

          <div className="border border-line rounded-xl px-6 py-8 md:px-12 md:py-10 grid md:grid-cols-[1fr_auto] gap-4 md:gap-10 items-center shadow-card">
            <div>
              <p className="text-xs font-bold tracking-eyebrow text-accent mb-3">最初から所有したい方へ</p>
              <p className="text-xl md:text-3xl font-black text-ink">一括買取</p>
              <p className="text-sm text-body mt-2">所有権込みで、最初からお買い取りいただくプランです。</p>
            </div>
            <p className="text-ink font-black leading-none whitespace-nowrap">
              <span className="text-5xl md:text-6xl tabular-nums">500</span>
              <span className="text-lg md:text-xl ml-1">万円</span>
              <span className="text-xs md:text-sm font-medium text-muted ml-1">（税別）</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnershipSection;
