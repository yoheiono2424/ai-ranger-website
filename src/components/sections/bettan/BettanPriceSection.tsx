import Image from 'next/image';
import { BettanHeading } from './BettanParts';

const BettanPriceSection = () => {
  return (
    <section id="pricing" className="relative py-16 md:py-28 bg-bettan-bg overflow-hidden scroll-mt-24 border-t border-bettan-line">
      <Image src="/bettan/cover.webp" alt="" fill sizes="100vw" className="object-cover opacity-30" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <BettanHeading dark file="FILE 09 ／ 料金" heading="人を雇う前に、別班を" />

          <div className="grid md:grid-cols-[1fr_1.15fr] gap-5 md:gap-8 items-stretch">
            <div className="rounded-xl border border-bettan-line bg-bettan-panel/90 p-7 md:p-9">
              <p className="text-sm md:text-base font-bold text-bettan-muted mb-4">分野ごとに専門の人を雇う</p>
              <p className="text-3xl md:text-4xl font-black text-bettan-text mb-4">月200万円前後</p>
              <p className="text-xs md:text-sm text-bettan-muted leading-relaxed">
                システム・ホームページ・AI・デザイン・動画の5人。<br />
                熊本で1人40万円前後 × 5人の目安。
              </p>
            </div>
            <div className="rounded-xl border-2 border-bettan-red bg-bettan-panel/95 p-7 md:p-9">
              <p className="text-sm md:text-base font-bold text-bettan-red mb-4">社長の別班</p>
              <p className="font-black text-bettan-text mb-4">
                <span className="text-5xl md:text-6xl">月30万円</span>
                <span className="text-base ml-1">（税別）</span>
              </p>
              <p className="text-sm md:text-base text-bettan-text leading-relaxed">
                ITのことは丸ごと。開発費込み。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BettanPriceSection;
