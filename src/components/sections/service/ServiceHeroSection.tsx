import Link from 'next/link';
import Image from 'next/image';

const ServiceHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-accent-soft via-white to-white pt-24 pb-16 md:pt-32 md:pb-28 overflow-hidden">
      {/* 上端のグラデーション帯（チラシ・営業資料と共通） */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#4AA8DE] via-[#5CC9D9] to-[#9FD9E6]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-12 items-center">
          <div>
            <Image
              src="/syssuc/logo.png"
              alt="SysSuc（シススク）"
              width={600}
              height={221}
              priority
              className="h-16 md:h-20 w-auto mb-4"
            />
            <p className="text-xs md:text-sm text-muted mb-8">
              <span className="font-bold text-ink">Sys</span>＝システム　／　
              <span className="font-bold text-ink">Suc</span>＝サブスク
            </p>

            <h1 className="text-[1.9rem] leading-[1.45] md:text-[2.9rem] md:leading-[1.35] font-black text-ink mb-8">
              初期費用<span className="text-accent">0円</span>の、
              <br />
              システム開発サブスク
            </h1>

            <p className="text-base md:text-lg text-body leading-loose mb-8">
              御社専用の業務システムを、月額で1件ずつお作りします。
              その中にAIが入っているので、いつもの仕事をするだけで、AIが勝手に使われます。
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <span className="inline-flex items-baseline gap-2 rounded-lg border border-line bg-white px-4 py-2.5">
                <span className="text-xs text-muted">初期費用</span>
                <span className="text-xl font-black text-ink">0円</span>
              </span>
              <span className="inline-flex items-baseline gap-2 rounded-lg border border-line bg-white px-4 py-2.5">
                <span className="text-xs text-muted">月額</span>
                <span className="text-xl font-black text-ink">20万円</span>
                <span className="text-xs text-muted">（税別）</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-9 py-4 bg-accent text-white font-bold rounded-lg hover:bg-ink transition-colors duration-200"
              >
                無料で相談する
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center px-9 py-4 bg-white text-accent font-bold rounded-lg border border-accent/30 hover:border-accent transition-colors duration-200"
              >
                料金を見る
              </Link>
            </div>
          </div>

          <div className="relative aspect-[1024/688] rounded-xl overflow-hidden shadow-panel">
            <Image
              src="/syssuc/hero.webp"
              alt="業務システムの画面の中で、AIが仕事を進めている様子"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
