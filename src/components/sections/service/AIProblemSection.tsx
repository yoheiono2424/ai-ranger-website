import Image from 'next/image';
import SectionHeader from './SectionHeader';

const AIProblemSection = () => {
  const worries = [
    {
      no: '01',
      title: 'AI研修を受けたけど、結局よく分からない',
      description: '明日の仕事で、何をすればいいかが見えない',
    },
    {
      no: '02',
      title: 'ChatGPTを入れたけど、誰も使い続けない',
      description: '最初の数週間だけで、開く人がいなくなる',
    },
    {
      no: '03',
      title: 'システム開発は数百万円〜。手が出ない',
      description: '自社専用のシステムがあれば楽になるのに',
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="01"
            eyebrow="よくあるお悩み"
            tone="alert"
            heading={
              <>
                こんなこと、
                <br className="md:hidden" />
                ありませんか。
              </>
            }
          />

          <div className="grid md:grid-cols-[1fr_17rem] gap-10 md:gap-14 items-center mb-14 md:mb-20">
            <div className="border-t border-line">
              {worries.map((item) => (
                <div
                  key={item.no}
                  className="border-b border-line py-6 md:py-8 grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-8 gap-y-1 items-baseline"
                >
                  <span className="text-sm font-black text-muted tabular-nums">{item.no}</span>
                  <h3 className="text-base md:text-xl font-bold text-ink leading-snug">{item.title}</h3>
                  <p className="col-start-2 text-sm text-body leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="relative hidden md:block aspect-[880/1168] rounded-xl overflow-hidden shadow-card">
              <Image
                src="/syssuc/worry.webp"
                alt="書類の山を前に考え込む経営者"
                fill
                sizes="17rem"
                className="object-cover"
              />
            </div>
          </div>

          {/* 原因 */}
          <div className="text-center">
            <p className="text-xs font-bold tracking-eyebrow text-accent mb-5">AIが使われない原因は1つです</p>
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
