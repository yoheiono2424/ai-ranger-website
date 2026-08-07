import Link from 'next/link';
import Image from 'next/image';

const BusinessSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 md:mb-20">
            <p className="text-xs font-bold tracking-eyebrow text-seishun-deep mb-6">
              OUR BUSINESS
            </p>
            <h2 className="text-2xl md:text-5xl font-black text-ink leading-[1.45] mb-6">
              私たちがやっている、
              <br className="md:hidden" />
              2つの事業
            </h2>
            <p className="text-sm md:text-lg text-body leading-loose">
              どちらも「Return青春」— 挑戦できる状態を取り戻すための事業です。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 事業1：オーダーメイド業務AI */}
            <div className="group flex flex-col rounded-2xl border border-line overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <div className="bg-gradient-to-br from-accent-soft to-seishun-sky/25 px-8 pb-8 pt-10 border-b border-line min-h-[232px] flex flex-col justify-end">
                <p className="text-xs font-bold tracking-eyebrow text-accent mb-4">
                  法人向け / システム開発
                </p>
                <h3 className="text-2xl md:text-3xl font-black text-ink leading-snug mb-3">
                  オーダーメイド業務AI
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  御社専用の業務システムを作ります。その中に、AIが入っています。
                </p>
              </div>

              <div className="flex flex-col flex-1 px-8 py-8">
                <p className="text-sm text-body leading-loose mb-8">
                  研修を受けても、ツールを入れても、使わない社員がいる。AI単体は「使う習慣」がないと使われないからです。私たちは業務システムの中にAIを入れることで、定着の問題そのものをなくします。
                </p>

                <dl className="border-t border-line mb-8">
                  <div className="flex items-baseline justify-between py-4 border-b border-line">
                    <dt className="text-xs text-muted">開発費用</dt>
                    <dd className="text-lg font-black text-ink">一律 300万円</dd>
                  </div>
                  <div className="flex items-baseline justify-between py-4 border-b border-line">
                    <dt className="text-xs text-muted">機能数</dt>
                    <dd className="text-lg font-black text-ink">制限なし</dd>
                  </div>
                  <div className="flex items-baseline justify-between py-4 border-b border-line">
                    <dt className="text-xs text-muted">契約後の追加請求</dt>
                    <dd className="text-lg font-black text-ink">0円</dd>
                  </div>
                </dl>

                <Link
                  href="/service"
                  className="mt-auto inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-seishun-deep transition-colors duration-200"
                >
                  サービス詳細を見る
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 事業2：Re.haru（青春エンターテイメント） */}
            <div className="group flex flex-col rounded-2xl border border-line overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <div className="relative h-[232px] overflow-hidden">
                <Image
                  src="/reharu/fireworks.webp"
                  alt="Re.haru — 友達と4人で過ごす青春の風景"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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
