import Link from 'next/link';
import Image from 'next/image';
import { ArrowIcon } from './BettanParts';

const BettanHeroSection = () => {
  return (
    <section className="relative bg-bettan-bg overflow-hidden">
      <div className="relative min-h-[640px] md:min-h-[720px] flex items-end md:items-center">
        <Image
          src="/bettan/team.webp"
          alt="赤い光の中に立つ5人のシルエット"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
        {/* 文字を読みやすくするための影 */}
        <div className="absolute inset-0 bg-gradient-to-t from-bettan-bg via-bettan-bg/60 to-bettan-bg/10 md:bg-gradient-to-r md:from-bettan-bg/90 md:via-bettan-bg/40 md:to-transparent" />

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-xl">
              <Image
                src="/bettan/emblem.webp"
                alt="社長の別班エンブレム"
                width={400}
                height={467}
                priority
                className="w-20 md:w-28 h-auto mb-8"
              />
              <p className="text-xs md:text-sm font-bold tracking-eyebrow text-bettan-red mb-5">
                TOP SECRET ／ 任務指令書
              </p>
              <h1 className="font-black text-bettan-text text-[2.8rem] leading-[1.2] md:text-[4.2rem] md:leading-[1.15] mb-6">
                社長の別班
              </h1>
              <p className="text-xl md:text-2xl font-bold text-bettan-text leading-relaxed mb-5">
                社長の「やりたい」を、
                <br className="md:hidden" />
                すぐ形に。
              </p>
              <p className="text-sm md:text-base text-bettan-muted leading-loose mb-10">
                やりたいことも、困りごとも。
                <br />
                形にして、その先もずっと。
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-9 py-4 bg-bettan-red text-white font-bold rounded-lg hover:bg-white hover:text-bettan-bg transition-colors duration-200"
                >
                  作戦会議を申し込む（無料）
                  <ArrowIcon className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="#mission"
                  className="inline-flex items-center justify-center px-9 py-4 text-bettan-text font-bold rounded-lg border border-white/30 hover:border-white transition-colors duration-200"
                >
                  任務の範囲を見る
                </Link>
              </div>
              <p className="text-xs text-bettan-muted mt-8">株式会社Re.haru</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BettanHeroSection;
