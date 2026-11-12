import Image from 'next/image';
import { BettanHeading } from './BettanParts';

const cases = [
  {
    title: 'A　やりたいが決まっている社長',
    rows: [
      { label: '社長の声', text: '「自社の商品を、ネットでも売りたい」' },
      { label: '形にする', text: '販売ページと決済の仕組みを作る' },
      { label: '世に出す', text: '公開して、売れ方を見ながら直す' },
    ],
  },
  {
    title: 'B　何をすればいいか分からない社長',
    rows: [
      { label: '社長の声', text: '「人が足りなくて、仕事が回らない」' },
      { label: '引き出す', text: '本当の悩みは、問い合わせ対応に毎日3時間かかること', highlight: true },
      { label: '形にする', text: '自動返信と管理の仕組みを作り、現場で使い始める' },
    ],
  },
];

const BettanCasesSection = () => {
  return (
    <section className="relative py-16 md:py-28 bg-bettan-bg overflow-hidden">
      <Image src="/bettan/wall.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <BettanHeading dark file="FILE 04 ／ 利用イメージ" heading="たとえば、こんなふうに動きます" />

          <div className="grid md:grid-cols-2 gap-10 md:gap-8">
            {cases.map((c, i) => (
              <div key={c.title}>
                <h3 className={`text-base md:text-lg font-black mb-4 ${i ? 'text-bettan-red' : 'text-bettan-text'}`}>
                  {c.title}
                </h3>
                <div className="space-y-3">
                  {c.rows.map((r) => (
                    <div
                      key={r.label}
                      className={`flex gap-4 rounded-lg border bg-bettan-panel/90 px-5 py-4 ${
                        r.highlight ? 'border-bettan-red' : 'border-bettan-line'
                      }`}
                    >
                      <span className="w-16 shrink-0 text-sm font-bold text-bettan-red">{r.label}</span>
                      <span className="text-sm md:text-base text-bettan-text leading-relaxed">{r.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-bettan-muted">※ 利用イメージです</p>
        </div>
      </div>
    </section>
  );
};

export default BettanCasesSection;
