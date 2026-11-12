import { BettanHeading, Stamp } from './BettanParts';

const records = [
  { title: '新規事業', text: '大手百貨店・大手ショッピングセンター、地方企業の新規事業に参画' },
  { title: '開発', text: '新規事業のシステム・アプリを多数開発' },
  { title: 'マーケティング', text: '集客・Webマーケティングを受託' },
  { title: '相談実績', text: '500社以上の経営・事業の相談に対応' },
];

const BettanRecordsSection = () => {
  return (
    <section id="results" className="py-16 md:py-28 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <BettanHeading file="FILE 07 ／ 実績" heading="別班の実績" />

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {records.map((r) => (
              <div key={r.title} className="rounded-xl border border-line bg-white p-6 md:p-8 shadow-card">
                <h3 className="flex items-center gap-3 text-lg md:text-xl font-black text-ink mb-3">
                  <span className="w-2 h-2 bg-bettan-red" />
                  {r.title}
                </h3>
                <p className="text-sm md:text-base text-body leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-right">
            <Stamp className="text-sm md:text-base">実績確認済</Stamp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BettanRecordsSection;
