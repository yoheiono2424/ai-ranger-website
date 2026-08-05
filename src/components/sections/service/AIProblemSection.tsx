import SectionHeader from './SectionHeader';

const AIProblemSection = () => {
  const failures = [
    {
      no: '01',
      title: '導入したが、誰も使っていない',
      description: 'チャットボットを入れたが、翌月には誰も開いていない',
    },
    {
      no: '02',
      title: '何に使えばいいか分からない',
      description: '汎用AIは「使い道」を自分で考える必要がある',
    },
    {
      no: '03',
      title: '現場が覚えてくれない',
      description: '新しいツールが1つ増えただけ。業務が変わらない',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="01"
            eyebrow="THE PROBLEM"
            tone="alert"
            heading={
              <>
                研修も受けた。ツールも入れた。
                <br />
                それでも<span className="text-alert">使わない社員</span>がいる。
              </>
            }
            lead="いま多くの会社が、同じところでつまずいています。"
          />

          {/* 失敗3つ：罫線で区切るリスト */}
          <div className="border-t border-line mb-20">
            {failures.map((item, index) => (
              <div
                key={index}
                className="border-b border-line py-8 md:py-10 grid grid-cols-[auto_1fr] md:grid-cols-[5rem_1fr_1.2fr] gap-x-5 md:gap-x-8 gap-y-2 items-baseline"
              >
                <span className="text-sm md:text-base font-black text-muted tabular-nums">
                  {item.no}
                </span>
                <h3 className="text-lg md:text-2xl font-bold text-ink leading-snug">
                  {item.title}
                </h3>
                <p className="col-start-2 md:col-start-3 text-sm md:text-base text-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* 原因 */}
          <div className="text-center">
            <p className="text-xs font-bold tracking-eyebrow text-accent mb-6">原因は1つです</p>
            <p className="text-2xl md:text-5xl font-black text-ink leading-[1.4]">
              AI単体は、<span className="text-accent">「使う習慣」</span>がないと
              <br />
              使われないから。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIProblemSection;
