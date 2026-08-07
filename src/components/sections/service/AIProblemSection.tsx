import SectionHeader from './SectionHeader';

const AIProblemSection = () => {
  const failures = [
    {
      no: '01',
      title: '導入したが、誰も使っていない',
      description: '翌月には、もう誰も開いていない',
    },
    {
      no: '02',
      title: '何に使えばいいか分からない',
      description: '使い道を、自分で考えないといけない',
    },
    {
      no: '03',
      title: '多機能すぎて、使いこなせない',
      description: 'できることが増えた分、複雑になった',
    },
    {
      no: '04',
      title: '現場が覚えてくれない',
      description: 'ツールが1つ増えただけで、業務は変わらない',
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="01"
            eyebrow="THE PROBLEM"
            tone="alert"
            heading={
              <>
                AIツールを導入した。
                <br />
                AI研修も受けた。
                <br />
                それでも<span className="text-alert">使われない</span>。
              </>
            }
            lead="いま多くの会社が、同じところでつまずいています。"
          />

          {/* 失敗4つ */}
          <div className="border-t border-line mb-14 md:mb-20">
            {failures.map((item, index) => (
              <div
                key={index}
                className="border-b border-line py-6 md:py-8 grid grid-cols-[auto_1fr] md:grid-cols-[4rem_1fr_1.1fr] gap-x-4 md:gap-x-8 gap-y-1 items-baseline"
              >
                <span className="text-sm font-black text-muted tabular-nums">{item.no}</span>
                <h3 className="text-base md:text-xl font-bold text-ink leading-snug">
                  {item.title}
                </h3>
                <p className="col-start-2 md:col-start-3 text-sm text-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* 原因 */}
          <div className="text-center">
            <p className="text-xs font-bold tracking-eyebrow text-accent mb-5">原因は1つです</p>
            <p className="text-2xl md:text-5xl font-black text-ink leading-[1.4]">
              AI単体は、<span className="text-accent">使わなくても</span>
              <br />
              仕事が回ってしまうから。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIProblemSection;
