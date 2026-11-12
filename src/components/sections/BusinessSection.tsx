import Link from 'next/link';
import Image from 'next/image';

const BusinessSection = () => {
  return (
    <section id="business" className="py-20 md:py-32 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 md:mb-20">
            <p className="text-xs font-bold tracking-eyebrow text-seishun-deep mb-6">
              OUR BUSINESS
            </p>
            <h2 className="text-2xl md:text-5xl font-black text-ink leading-[1.45] mb-6">
              私たちがやっている、
              <br className="md:hidden" />
              3つの事業
            </h2>
            <p className="text-sm md:text-lg text-body leading-loose">
              どれも「Return青春」— 挑戦できる状態を取り戻すための事業です。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 事業1：社長の別班 */}
            <div className="group flex flex-col rounded-2xl border border-line overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <div className="relative h-[232px] overflow-hidden bg-[#08090C]">
                <Image
                  src="/bettan/team.webp"
                  alt="社長の別班 — 赤い光の中に立つ5人のシルエット"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[75%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-8 pb-8">
                  <p className="text-xs font-bold tracking-eyebrow text-white/80 mb-3">
                    法人向け / 事業を形にする
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-snug mb-2">
                    社長の別班
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    社長の「やりたい」を、すぐ形に。
                  </p>
                </div>
              </div>

              <div className="flex flex-col flex-1 px-8 py-8">
                <p className="text-sm text-body leading-loose mb-8">
                  やりたいことも、困りごとも。社長の話から「やりたい」を確かめ、ITで形にします。教えて終わりではなく、その先もずっと支えます。
                </p>

                <dl className="border-t border-line mb-8">
                  <div className="flex items-baseline justify-between gap-4 py-4 border-b border-line">
                    <dt className="text-xs text-muted shrink-0">任務</dt>
                    <dd className="text-lg font-black text-ink text-right">ITの任務すべて</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-4 border-b border-line">
                    <dt className="text-xs text-muted shrink-0">開発費</dt>
                    <dd className="text-lg font-black text-ink text-right">込み</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-4 border-b border-line">
                    <dt className="text-xs text-muted shrink-0">初回の作戦会議</dt>
                    <dd className="text-lg font-black text-ink text-right">60分 無料</dd>
                  </div>
                </dl>

                <Link
                  href="/service"
                  className="mt-auto inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-seishun-deep transition-colors duration-200"
                >
                  社長の別班の詳細を見る
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 事業2：シゴトドラマ（採用とPRのための縦型ドラマ） */}
            <div className="group flex flex-col rounded-2xl border border-line overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <div className="relative h-[232px] overflow-hidden">
                <Image
                  src="/shigoto-drama/hero.webp"
                  alt="シゴトドラマ — 夕日の現場で並んで座るベテラン職人と新人"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[70%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-8 pb-8">
                  <p className="text-xs font-bold tracking-eyebrow text-white/80 mb-3">
                    法人向け / 採用・PRの縦型ドラマ
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-snug mb-2">
                    シゴトドラマ
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    御社の仕事と商品を、ドラマに。
                  </p>
                </div>
              </div>

              <div className="flex flex-col flex-1 px-8 py-8">
                <p className="text-sm text-body leading-loose mb-8">
                  求人票や商品説明だけでは、職場の空気も作り手の想いも伝わりません。御社の本当の話を取材して、見た人の心が動く縦型ドラマにします。
                </p>

                <dl className="border-t border-line mb-8">
                  <div className="flex items-baseline justify-between gap-4 py-4 border-b border-line">
                    <dt className="text-xs text-muted shrink-0">使い道</dt>
                    <dd className="text-lg font-black text-ink text-right">採用 / 商品PR</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-4 border-b border-line">
                    <dt className="text-xs text-muted shrink-0">撮影</dt>
                    <dd className="text-lg font-black text-ink text-right">不要</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-4 border-b border-line">
                    <dt className="text-xs text-muted shrink-0">ご負担</dt>
                    <dd className="text-lg font-black text-ink text-right">取材1時間だけ</dd>
                  </div>
                </dl>

                <Link
                  href="/shigoto-drama"
                  className="mt-auto inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-seishun-deep transition-colors duration-200"
                >
                  シゴトドラマの詳細を見る
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 事業3：Re.haru（青春エンターテイメント） */}
            <div className="group flex flex-col rounded-2xl border border-line overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <div className="relative h-[232px] overflow-hidden">
                <Image
                  src="/reharu/fireworks.webp"
                  alt="Re.haru — 友達と4人で過ごす青春の風景"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-8 pb-8">
                  <p className="text-xs font-bold tracking-eyebrow text-white/80 mb-3">
                    個人向け / 自社サービス
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-snug mb-2">
                    Re.haru
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    もう一度、あの頃の青春を。
                  </p>
                </div>
              </div>

              <div className="flex flex-col flex-1 px-8 py-8">
                <p className="text-sm text-body leading-loose mb-8">
                  友達と一緒に異性の仲間と出会い、4人で遊びに行く青春エンターテイメントアプリ。マッチングアプリではありません。恋愛だけを目的にせず、仲間と過ごす時間そのものを取り戻します。
                </p>

                <dl className="border-t border-line mb-8">
                  <div className="flex items-baseline justify-between py-4 border-b border-line">
                    <dt className="text-xs text-muted">提供形態</dt>
                    <dd className="text-lg font-black text-ink">iOS / Android</dd>
                  </div>
                  <div className="flex items-baseline justify-between py-4 border-b border-line">
                    <dt className="text-xs text-muted">エリア</dt>
                    <dd className="text-lg font-black text-ink">熊本先行</dd>
                  </div>
                  <div className="flex items-baseline justify-between py-4 border-b border-line">
                    <dt className="text-xs text-muted">料金</dt>
                    <dd className="text-lg font-black text-ink">女性無料</dd>
                  </div>
                </dl>

                <a
                  href="https://reharu.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center px-8 py-4 bg-ink text-white font-bold rounded-full hover:bg-seishun-deep transition-colors duration-200"
                >
                  Re.haru 公式サイトへ
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
