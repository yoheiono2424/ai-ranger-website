import SectionHeader from './SectionHeader';

const FlowSection = () => {
  const steps = [
    {
      no: 'STEP 1',
      title: '無料相談',
      description: '今の業務と、困っていることをお聞きします。オンラインで完結します。',
    },
    {
      no: 'STEP 2',
      title: '試作画面を無料でお見せする',
      description: '御社の業務に合わせた画面で、使い方を確かめられます。',
    },
    {
      no: 'STEP 3',
      title: '月額で開発スタート',
      description: '1件ずつ順番に、御社専用のシステムに。',
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader index="09" eyebrow="進め方" heading="ご利用開始までの流れ" />

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-24">
            {steps.map((step, index) => (
              <div key={step.no} className="relative border border-line rounded-xl px-6 py-8 md:px-8 md:py-10 shadow-card bg-white">
                <p className="text-xs font-black tracking-eyebrow text-accent mb-4">{step.no}</p>
                <h3 className="text-xl md:text-2xl font-black text-ink leading-snug mb-4">{step.title}</h3>
                <p className="text-sm md:text-base text-body leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <svg
                    className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 w-6 h-6 text-accent z-10 bg-white rounded-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* 試作画面は無料 */}
          <div className="bg-surface rounded-xl px-8 py-12 md:px-16 md:py-16 border border-line shadow-card">
            <h3 className="text-2xl md:text-4xl font-black text-ink leading-[1.4] mb-6">
              まず<span className="text-accent">試作画面を見て</span>から、
              <br />
              決めてください。
            </h3>
            <p className="text-base md:text-lg text-body leading-loose max-w-3xl">
              資料だけでは、イメージが湧きません。だからお申し込みの前に、こちらで御社の業務に合わせた画面をお作りします。
              触ってみて「これは違う」と思われたら、お申し込みいただかなくて結構です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
