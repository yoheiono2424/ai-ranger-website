import SectionHeader from './SectionHeader';

const AfterCancelSection = () => {
  return (
    <section className="py-16 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="09"
            eyebrow="解約した後"
            heading="作ったシステムは、使い続けられます。"
          />

          <div className="grid md:grid-cols-[1fr_auto_1.3fr] gap-4 md:gap-8 items-stretch mb-6">
            <div className="border border-line rounded-xl px-6 py-8 md:px-8 flex flex-col justify-center">
              <p className="text-xs font-bold text-muted mb-2">解約</p>
              <p className="text-lg md:text-xl font-black text-ink">開発の月額を終える</p>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-accent rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="bg-accent-soft border-2 border-accent rounded-xl px-6 py-8 md:px-10 grid grid-cols-[1fr_auto] gap-4 items-center">
              <div>
                <p className="text-xs font-bold text-accent mb-2">保守で使い続ける</p>
                <p className="text-lg md:text-xl font-black text-ink mb-2">システムはそのまま</p>
                <p className="text-xs md:text-sm text-body leading-relaxed">
                  月10時間までの保守作業込み／超過分は1時間7,000円
                </p>
              </div>
              <p className="text-ink font-black leading-none text-right whitespace-nowrap">
                <span className="block text-[11px] text-muted font-bold mb-1">月額</span>
                <span className="text-4xl md:text-5xl tabular-nums">10</span>
                <span className="text-base md:text-lg ml-0.5">万円</span>
                <span className="block text-[11px] text-muted font-medium mt-1">（税別）</span>
              </p>
            </div>
          </div>

          <div className="border border-line rounded-xl px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
            <p className="text-base md:text-lg font-black text-ink whitespace-nowrap">機能を足したくなったら</p>
            <p className="text-sm md:text-base text-body">
              いつでもSysSucに戻れます。月額20万円の開発に戻して、また1件ずつ作っていきます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterCancelSection;
