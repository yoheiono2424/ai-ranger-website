import Image from 'next/image';
import { BettanHeading, CheckIcon, CrossIcon } from './BettanParts';

const rows = [
  { step: '聞く・考える', consul: { ok: true, text: '助言・資料を渡す' }, bettan: '「やりたい」を引き出す' },
  { step: '作る', consul: { ok: false, text: '社長が別の会社を探す' }, bettan: '試作から本番まで' },
  { step: '世に出す', consul: { ok: false, text: '社長が自分で' }, bettan: '公開して使い始める' },
  { step: '支え続ける', consul: { ok: false, text: '社長が自分で' }, bettan: '使いながら直し続ける' },
];

const BettanCompareSection = () => {
  return (
    <section className="relative py-16 md:py-28 bg-bettan-bg overflow-hidden">
      <Image
        src="/bettan/briefing.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <BettanHeading
            dark
            file="FILE 02 ／ コンサルとの違い"
            heading={
              <>
                教えて終わりじゃない。
                <br />
                形にして、その先もずっと。
              </>
            }
          />

          <div className="rounded-xl border border-bettan-line bg-bettan-panel/90 overflow-hidden">
            {/* 見出し行 */}
            <div className="grid grid-cols-[4.5rem_1fr_1fr] md:grid-cols-[10rem_1fr_1fr] text-sm md:text-base font-bold">
              <div className="px-3 md:px-6 py-4" />
              <div className="px-3 md:px-6 py-4 text-center text-bettan-muted border-l border-bettan-line">コンサル</div>
              <div className="px-3 md:px-6 py-4 text-center text-bettan-red border-l-2 border-r-2 border-t-2 border-bettan-red">
                社長の別班
              </div>
            </div>
            {rows.map((r, i) => (
              <div
                key={r.step}
                className="grid grid-cols-[4.5rem_1fr_1fr] md:grid-cols-[10rem_1fr_1fr] border-t border-bettan-line"
              >
                <div className="px-3 md:px-6 py-5 flex items-center text-xs md:text-base font-bold text-bettan-text">
                  <span className="hidden md:inline text-bettan-red mr-3">{i + 1}</span>
                  {r.step}
                </div>
                <div className="px-3 md:px-6 py-5 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-center border-l border-bettan-line">
                  {r.consul.ok ? (
                    <CheckIcon className="w-5 h-5 text-bettan-muted shrink-0" />
                  ) : (
                    <CrossIcon className="w-5 h-5 text-[#5C616D] shrink-0" />
                  )}
                  <span className="text-xs md:text-sm text-bettan-muted">{r.consul.text}</span>
                </div>
                <div
                  className={`px-3 md:px-6 py-5 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-center bg-bettan-red/10 border-l-2 border-r-2 border-bettan-red ${
                    i === rows.length - 1 ? 'border-b-2' : ''
                  }`}
                >
                  <CheckIcon className="w-5 h-5 text-bettan-red shrink-0" />
                  <span className="text-xs md:text-sm font-bold text-bettan-text">{r.bettan}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-base md:text-lg font-bold text-bettan-text">
            開発も込み。作るたびの追加見積もりはありません。
          </p>
        </div>
      </div>
    </section>
  );
};

export default BettanCompareSection;
