import { BettanHeading, CheckIcon, CrossIcon } from './BettanParts';

const accept = [
  '形にして、その後もずっと支える',
  '企画・開発・デザイン・資料',
  '作った仕組みの手直し・保守',
  '相談だけの依頼も、もちろん',
];
const decline = [
  '同行・取材など、現場に出る仕事',
  '営業・交渉など、人と向き合う仕事',
  '社員の育成・組織のマネジメント',
  'SNSの日々の投稿・運用',
];

const BettanScopeSection = () => {
  return (
    <section className="py-16 md:py-28 bg-surface border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <BettanHeading file="FILE 06 ／ 線引き" heading="引き受けること、引き受けないこと" />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-xl border-2 border-bettan-red bg-white p-7 md:p-9 shadow-card">
              <h3 className="text-lg md:text-xl font-black text-bettan-red mb-6">引き受けること</h3>
              <ul className="space-y-4">
                {accept.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-base text-ink">
                    <CheckIcon className="w-5 h-5 mt-0.5 text-bettan-red shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-line bg-white p-7 md:p-9">
              <h3 className="text-lg md:text-xl font-black text-muted mb-6">引き受けないこと</h3>
              <ul className="space-y-4">
                {decline.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-base text-body">
                    <CrossIcon className="w-5 h-5 mt-0.5 text-muted shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 text-base md:text-lg font-bold text-ink">
            別班はITの別動隊。人と向き合う仕事以外は、裏でずっと支えます。
          </p>
        </div>
      </div>
    </section>
  );
};

export default BettanScopeSection;
