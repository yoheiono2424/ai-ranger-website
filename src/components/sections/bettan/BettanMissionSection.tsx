import { BettanHeading, Stamp } from './BettanParts';

const missions = [
  '業務の自動化',
  '社内システム',
  '問い合わせ対応',
  'AI導入',
  '書類・データ整理',
  'ホームページ・LP',
  'ネット販売',
  '予約・顧客管理',
  'デザイン・動画',
  'ITなら何でも',
];

const BettanMissionSection = () => {
  return (
    <section id="mission" className="py-16 md:py-28 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <BettanHeading
              file="FILE 05 ／ 任務"
              heading="ITの任務なら、制限はない"
              lead="ITとデジタルで形にできることなら、何でも引き受けます。"
            />
            <Stamp className="hidden md:inline-block absolute right-0 top-2 text-lg">ANY MISSION</Stamp>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {missions.map((m, i) => {
              const last = i === missions.length - 1;
              return (
                <li
                  key={m}
                  className={`rounded-lg border px-4 py-5 md:py-6 ${
                    last ? 'border-bettan-red bg-bettan-bg' : 'border-line bg-white'
                  }`}
                >
                  <span className="block text-xs font-black tabular-nums text-bettan-red mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`block text-sm md:text-base font-bold ${last ? 'text-bettan-text' : 'text-ink'}`}>
                    {m}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BettanMissionSection;
