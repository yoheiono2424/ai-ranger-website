import SectionHeader from './SectionHeader';

const StackSection = () => {
  const stages = [
    { step: '1件目を作る', note: '御社の業務に合わせて作る', items: ['見積システム'] },
    { step: '使いながら2件目へ', note: '完成したものは使い始める', items: ['日報システム', '見積システム'] },
    { step: '3件目へ', note: '使えるシステムが増えていく', items: ['受発注システム', '日報システム', '見積システム'] },
    { step: 'その先も、順番に', note: '', items: ['次の依頼…', '受発注システム', '日報システム', '見積システム'] },
  ];

  const notes = ['データは御社のもの', '打ち合わせはオンライン', '月額は定額（件数で変わらない）'];

  return (
    <section className="py-16 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="05"
            eyebrow="SysSucでできること"
            heading={
              <>
                御社のシステムを、
                <br />
                1件ずつ作っていきます。
              </>
            }
          />

          {/* 積み上がる図 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-end mb-10 md:mb-14">
            {stages.map((stage, index) => (
              <div key={stage.step} className="flex flex-col">
                <div className="flex flex-col gap-1.5 mb-4">
                  {stage.items.map((item, i) => {
                    const isNew = i === 0;
                    const isNext = item === '次の依頼…';
                    return (
                      <div
                        key={`${item}-${i}`}
                        className={`rounded-md px-3 py-2.5 text-xs md:text-sm font-bold text-center ${
                          isNext
                            ? 'border border-dashed border-accent/50 text-accent bg-white'
                            : isNew
                              ? 'bg-accent text-white'
                              : 'bg-accent-soft text-ink border border-accent/15'
                        }`}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
                <p className="text-[11px] font-black text-accent tabular-nums mb-1">{`0${index + 1}`}</p>
                <p className="text-sm md:text-base font-black text-ink leading-snug">{stage.step}</p>
                {stage.note && <p className="text-xs text-muted mt-1">{stage.note}</p>}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden shadow-card">
            {notes.map((note) => (
              <div key={note} className="bg-white px-6 py-5 md:px-8 md:py-6 flex items-center gap-3">
                <svg className="w-5 h-5 text-accent flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 12.5l3 3 6-6.5" />
                </svg>
                <p className="text-sm md:text-base font-bold text-ink">{note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-4">※ 依頼の内容は一例です。</p>
        </div>
      </div>
    </section>
  );
};

export default StackSection;
