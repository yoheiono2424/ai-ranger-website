import Link from 'next/link';
import Image from 'next/image';
import { ArrowIcon } from './BettanParts';

const BettanCTASection = () => {
  return (
    <section className="relative bg-bettan-bg overflow-hidden">
      <div className="relative min-h-[520px] flex items-center">
        <Image
          src="/bettan/team.webp"
          alt="赤い光の中に立つ5人のシルエット"
          fill
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
        <div className="absolute inset-0 bg-bettan-bg/60" />

        <div className="container relative z-10 mx-auto px-4 py-20 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-xl">
              <Image
                src="/bettan/emblem.webp"
                alt="社長の別班エンブレム"
                width={400}
                height={467}
                className="w-16 md:w-20 h-auto mb-8"
              />
              <h2 className="text-[2rem] leading-[1.35] md:text-5xl md:leading-[1.25] font-black text-bettan-text mb-6">
                最初の指令をください
              </h2>
              <p className="text-base md:text-lg text-bettan-text/90 leading-loose mb-10">
                やりたいことが決まっていなくても大丈夫。
                <br />
                まずは話すだけで、別班は動き出します。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-9 py-4 bg-bettan-red text-white text-base md:text-lg font-bold rounded-lg hover:bg-white hover:text-bettan-bg transition-colors duration-200"
              >
                初回の作戦会議 60分 無料
                <ArrowIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BettanCTASection;
