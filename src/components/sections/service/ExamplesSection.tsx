import SectionHeader from './SectionHeader';

const ExamplesSection = () => {
  const examples = [
    { system: '見積システム', before: '手書き・Excelで一から作る', after: '入力すると、AIが見積書を作成' },
    { system: '日報システム', before: '紙の日報を集めて手集計', after: 'AIが自動で集計・報告' },
    { system: '受発注システム', before: 'FAXを見て手入力', after: 'AIがFAX・紙を読み取って入力' },
  ];

  return (
    <section className="py-16 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="03"
            eyebrow="たとえば"
            heading={
              <>
                業務システム＋AIで、
                <br className="md:hidden" />
                こう変わります。
              </>
            }
          />

          <div className="border-t border-line">
            {examples.map((item) => (
              <div
                key={item.system}
                className="border-b border-line py-6 md:py-8 grid md:grid-cols-[14rem_1fr_auto_1fr] gap-3 md:gap-6 items-center"
              >
                <p className="text-lg md:text-xl font-black text-ink">
                  {item.system}
                  <span className="ml-2 inline-block bg-accent text-white text-[11px] font-black px-2 py-0.5 rounded align-middle">
                    ＋AI
                  </span>
                </p>
                <p className="text-sm md:text-base text-muted line-through decoration-muted/60">{item.before}</p>
                <svg className="hidden md:block w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
                <p className="text-base md:text-lg font-bold text-accent">{item.after}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-4">※ 一例です。御社の業務に合わせてお作りします。</p>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
