import { BettanHeading } from './BettanParts';

const targets = [
  {
    key: 'A',
    heading: 'やりたいことが、決まっている',
    voices: ['新規事業を始めたい', 'AIを入れたい', 'ネットで売りたい'],
    answer: '聞いたその日から、形にします',
  },
  {
    key: 'B',
    heading: '課題はある。でも、何をすればいいか分からない',
    voices: ['人が足りない', '売上が伸びない', '仕事が回らない'],
    answer: '話から「やりたい」を引き出して、形にします',
  },
];

const BettanTargetSection = () => {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <BettanHeading file="FILE 01 ／ 対象" heading="こんな社長のための、別班です" />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {targets.map((t, i) => (
              <div
                key={t.key}
                className={`flex flex-col rounded-xl border bg-white p-7 md:p-9 shadow-card ${
                  i === 1 ? 'border-bettan-red' : 'border-line'
                }`}
              >
                <div className="flex items-start gap-5 mb-7">
                  <span className="text-5xl font-black leading-none text-bettan-red">{t.key}</span>
                  <h3 className="text-lg md:text-xl font-black text-ink leading-snug pt-1">{t.heading}</h3>
                </div>
                <ul className="space-y-3 mb-8">
                  {t.voices.map((v) => (
                    <li key={v} className="text-base md:text-lg text-body">
                      「{v}」
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-6 border-t border-line text-base md:text-lg font-bold text-ink">
                  <span className="text-bettan-red mr-2">→</span>
                  {t.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BettanTargetSection;
