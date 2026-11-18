import { Metadata } from 'next';
import Image from 'next/image';
import { ArrowIcon, CheckIcon, CrossIcon, Stamp } from '@/components/sections/bettan/BettanParts';
import { ShortForm, StickyCTA } from './LpParts';

/**
 * 広告（Meta動画広告）からの着地ページ
 * 「AIは社長が覚えなくていい。言われたことは全部やる」＝社長の別班
 * 検索には出さない（noindex）。本ページは /service
 */

export const metadata: Metadata = {
  title: 'AIは、社長が覚えなくていい｜社長の別班',
  description:
    '言われたことは、全部こちらでやる。業務の仕組み・AI・ホームページ・集客まで、社長専属の外部チーム「社長の別班」が月額で引き受けます。',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.reharu.com/lp/ai' },
  openGraph: {
    title: 'AIは、社長が覚えなくていい｜社長の別班',
    description: '言われたことは、全部こちらでやる。社長専属の外部チームを、月額で。',
    url: 'https://www.reharu.com/lp/ai',
    images: ['/lp-ai/ops.webp'],
  },
};

const CTA_HREF = '#form';

const CTA = ({ note = true }: { note?: boolean }) => (
  <div>
    <a
      href={CTA_HREF}
      className="flex w-full sm:inline-flex sm:w-auto items-center justify-center px-8 py-4 bg-bettan-red text-white text-base md:text-lg font-bold rounded-lg hover:bg-white hover:text-bettan-bg transition-colors duration-200"
    >
      まず話してみる（無料）
      <ArrowIcon className="w-4 h-4 ml-2" />
    </a>
    {note && (
      <p className="mt-3 text-xs md:text-sm text-bettan-muted">
        オンラインで60分。何を頼むか決まっていなくても大丈夫です。
      </p>
    )}
  </div>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="h-px w-8 bg-bettan-red" />
    <span className="text-xs font-bold tracking-eyebrow text-bettan-red">{children}</span>
  </div>
);

const pains = [
  { t: '何から手を付けていいか分からない', d: 'AIの種類も使い方も多すぎて、うちに何が合うのか判断できない。' },
  { t: '社長が覚える時間がない', d: '研修やセミナーは受けた。でも、毎日の仕事で手一杯。' },
  { t: '入れても、現場が使わない', d: 'ツールを入れたのに、いつの間にか元のやり方に戻っている。' },
];

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

/**
 * お客さまの声：ご本人の掲載許可が取れたものだけ入れる（空のあいだは表示しない）
 * 例）{ who: '介護事業・代表', text: '…', ok: '2026/11/◯ 許可' }
 */
const voices: { who: string; text: string }[] = [];

const faqs = [
  {
    q: 'AIのことが全く分かりません。それでも大丈夫ですか？',
    a: '大丈夫です。社長に覚えていただく必要はありません。「こうしたい」「ここが大変」と話していただければ、何をどう作るかはこちらで考えます。',
  },
  {
    q: '何を頼めばいいか決まっていません。',
    a: '決まっていなくて大丈夫です。最初の60分で、今の仕事の流れや困りごとを伺い、こちらから「ここから始めましょう」とご提案します。',
  },
  {
    q: '受託開発（システム会社への発注）と何が違いますか？',
    a: '1本ずつ見積もって発注する形ではありません。月額で専属チームを置く形なので、作ったあとの手直しや、新しく頼みたいことも、そのままお任せいただけます。',
  },
  {
    q: '遠方の会社でも頼めますか？',
    a: 'はい。打ち合わせはオンラインで行うので、全国どこからでもご利用いただけます。',
  },
];

export default function LpAiPage() {
  return (
    <div className="bg-bettan-bg text-bettan-text">
      {/* ① 最初の画面 */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[calc(100svh-80px)] md:min-h-[720px] flex items-end md:items-center">
          <Image
            src="/bettan/team.webp"
            alt="赤い光の中に立つ5人のシルエット"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bettan-bg via-bettan-bg/80 to-bettan-bg/30 md:bg-gradient-to-r md:from-bettan-bg/95 md:via-bettan-bg/70 md:to-bettan-bg/20" />
          <div className="container relative z-10 mx-auto px-5 pt-20 pb-10 md:py-24">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-xl">
                <Image
                  src="/bettan/emblem.webp"
                  alt="社長の別班エンブレム"
                  width={400}
                  height={467}
                  priority
                  className="w-16 md:w-24 h-auto mb-6"
                />
                <p className="text-xs md:text-sm font-bold tracking-eyebrow text-bettan-red mb-5">
                  TOP SECRET ／ 中小企業の社長へ
                </p>
                <h1 className="font-black text-[2.3rem] leading-[1.25] md:text-[3.6rem] md:leading-[1.2] mb-6">
                  AIは、
                  <br />
                  社長が
                  <br className="md:hidden" />
                  覚えなくていい。
                </h1>
                <p className="text-lg md:text-2xl font-bold leading-relaxed mb-4">
                  言われたことは、
                  <br className="md:hidden" />
                  全部こちらでやる。
                </p>
                <p className="text-sm md:text-base text-bettan-muted leading-loose mb-8">
                  業務の仕組み・AI・ホームページ・集客まで。
                  <br />
                  社長専属の外部チーム
                  <span className="text-bettan-text font-bold">「社長の別班」</span>
                  が、月額で引き受けます。
                </p>
                <CTA />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ①' 30秒の動画 */}
      <section className="py-12 md:py-20 border-t border-bettan-line">
        <div className="container mx-auto px-5">
          <div className="max-w-md mx-auto">
            <p className="text-center text-sm font-bold text-bettan-muted mb-4">30秒でわかる「社長の別班」</p>
            <video
              src="/lp-ai/movie.mp4"
              poster="/lp-ai/movie-poster.webp"
              controls
              playsInline
              preload="none"
              className="w-full rounded-xl border border-bettan-line"
            />
          </div>
        </div>
      </section>

      {/* ② 悩み */}
      <section className="relative py-16 md:py-24 overflow-hidden border-t border-bettan-line">
        <Image src="/lp-ai/president.webp" alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="container relative z-10 mx-auto px-5">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>FILE 01 ／ 現状</Eyebrow>
            <h2 className="text-[1.55rem] leading-[1.55] md:text-[2.4rem] font-black mb-10">
              研修も受けた。
              <br />
              ツールも入れた。
              <br />
              <span className="text-bettan-red">
                でも、現場では
                <br className="md:hidden" />
                誰も使っていない。
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {pains.map((p) => (
                <div key={p.t} className="rounded-xl border border-bettan-line bg-bettan-panel/90 p-6">
                  <h3 className="text-base md:text-lg font-black mb-2">{p.t}</h3>
                  <p className="text-sm text-bettan-muted leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-base md:text-lg font-bold leading-loose">
              AIは、もう社長が覚えるには複雑すぎます。
              <br />
              だから、覚えるのはこちらの仕事です。
            </p>
          </div>
        </div>
      </section>

      {/* ③ 役割分担 */}
      <section className="py-16 md:py-24 bg-surface text-ink">
        <div className="container mx-auto px-5">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>FILE 02 ／ 役割分担</Eyebrow>
            <h2 className="text-[1.55rem] leading-[1.55] md:text-[2.4rem] font-black mb-10">
              社長は、
              <br className="md:hidden" />
              「こうしたい」と言うだけ。
              <br />
              あとは、別班が全部やる。
            </h2>
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-4 md:gap-6">
              <div className="rounded-xl border border-line bg-white p-6 md:p-8">
                <p className="text-sm font-bold text-muted mb-4">社長がやること</p>
                <p className="text-2xl md:text-3xl font-black mb-3">話すだけ</p>
                <p className="text-sm text-body leading-relaxed">「ここが大変」「こうなったらいいのに」を、そのまま話す。</p>
              </div>
              <div className="rounded-xl border-2 border-bettan-red bg-white p-6 md:p-8 shadow-card">
                <p className="text-sm font-bold text-bettan-red mb-4">別班がやること</p>
                <ol className="space-y-3">
                  {['困りごとを聞いて、何を作るか決める', '試作を作って、目で見て確かめてもらう', '現場の仕事の流れに組み込む', '使いながら、何度でも直す'].map(
                    (t, i) => (
                      <li key={t} className="flex items-start gap-3 text-base font-bold">
                        <span className="w-6 h-6 shrink-0 rounded-full bg-bettan-red text-white text-xs flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        {t}
                      </li>
                    ),
                  )}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ④ 頼めること */}
      <section className="py-16 md:py-24 bg-white text-ink">
        <div className="container mx-auto px-5">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>FILE 03 ／ 任務</Eyebrow>
            <h2 className="text-[1.55rem] leading-[1.55] md:text-[2.4rem] font-black mb-4">
              ITの任務なら、
              <br className="md:hidden" />
              制限はない。
            </h2>
            <p className="text-sm md:text-base text-body leading-loose mb-8">ITとデジタルで形にできることなら、何でも引き受けます。</p>
            <ul className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
              {missions.map((m, i) => {
                const last = i === missions.length - 1;
                return (
                  <li key={m} className={`rounded-lg border px-4 py-5 ${last ? 'border-bettan-red bg-bettan-bg' : 'border-line bg-white'}`}>
                    <span className="block text-xs font-black tabular-nums text-bettan-red mb-2">{String(i + 1).padStart(2, '0')}</span>
                    <span className={`block text-sm md:text-base font-bold ${last ? 'text-bettan-text' : 'text-ink'}`}>{m}</span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-8 text-base md:text-lg font-bold">
              頼むことは、<span className="text-bettan-red">途中で変えられます。</span>
            </p>
          </div>
        </div>
      </section>

      {/* ⑤ 現場はいつも通り */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[520px] flex items-end">
          <Image src="/lp-ai/office.webp" alt="いつも通り仕事をしている事務所" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bettan-bg via-bettan-bg/75 to-transparent" />
          <div className="container relative z-10 mx-auto px-5 py-14 md:py-20">
            <div className="max-w-5xl mx-auto">
              <Eyebrow>FILE 04 ／ 現場</Eyebrow>
              <h2 className="text-[1.55rem] leading-[1.55] md:text-[2.4rem] font-black mb-5">
                現場は、
                <br className="md:hidden" />
                いつも通り使うだけ。
                <br />
                気づけば、
                <br className="md:hidden" />
                AIが動いている。
              </h2>
              <p className="text-sm md:text-base text-bettan-muted leading-loose max-w-2xl">
                新しいツールの使い方を覚えてもらうのではなく、今の仕事のやり方の中にAIを入れます。
                社員さんは、いつもの画面で、いつもの仕事をするだけです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ⑥ 受託開発・採用との違い＋料金 */}
      <section className="relative py-16 md:py-24 overflow-hidden border-t border-bettan-line">
        <Image src="/bettan/cover.webp" alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="container relative z-10 mx-auto px-5">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>FILE 05 ／ 料金</Eyebrow>
            <h2 className="text-[1.55rem] leading-[1.55] md:text-[2.4rem] font-black mb-10">
              人を雇う前に、
              <br />
              別班を。
            </h2>

            <div className="grid md:grid-cols-[1fr_1.15fr] gap-4 md:gap-6 mb-10">
              <div className="rounded-xl border border-bettan-line bg-bettan-panel/90 p-6 md:p-8">
                <p className="text-sm font-bold text-bettan-muted mb-3">分野ごとに専門の人を雇う</p>
                <p className="text-3xl md:text-4xl font-black mb-3">月200万円前後</p>
                <p className="text-xs md:text-sm text-bettan-muted leading-relaxed">
                  システム・ホームページ・AI・デザイン・動画の5人。
                  <br />
                  1人40万円前後 × 5人の目安。
                </p>
              </div>
              <div className="rounded-xl border-2 border-bettan-red bg-bettan-panel/95 p-6 md:p-8">
                <p className="text-sm font-bold text-bettan-red mb-3">社長の別班</p>
                <p className="font-black mb-3">
                  <span className="text-5xl md:text-6xl">月30万円</span>
                  <span className="text-base ml-1">（税別）</span>
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  システム・AI・ホームページ・デザインまで、チームで。開発費込み。
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-bettan-line bg-bettan-panel/90 overflow-hidden">
              {[
                ['頼み方', '1本ずつ見積もって発注', '月額のまま、何でも頼める'],
                ['作ったあと', '直すたびに追加の費用', '使いながら、何度でも直す'],
                ['頼む相手', '作る範囲だけ', '企画・開発・デザインまで'],
              ].map(([k, a, b], i) => (
                <div key={k} className={`grid grid-cols-[4.5rem_1fr_1fr] md:grid-cols-[9rem_1fr_1fr] ${i ? 'border-t border-bettan-line' : ''}`}>
                  <div className="px-3 md:px-6 py-4 text-xs md:text-sm font-bold flex items-center">{k}</div>
                  <div className="px-3 md:px-6 py-4 flex items-center gap-2 border-l border-bettan-line">
                    <CrossIcon className="w-4 h-4 text-[#5C616D] shrink-0" />
                    <span className="text-xs md:text-sm text-bettan-muted">{a}</span>
                  </div>
                  <div className="px-3 md:px-6 py-4 flex items-center gap-2 border-l-2 border-bettan-red bg-bettan-red/10">
                    <CheckIcon className="w-4 h-4 text-bettan-red shrink-0" />
                    <span className="text-xs md:text-sm font-bold">{b}</span>
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-[4.5rem_1fr_1fr] md:grid-cols-[9rem_1fr_1fr] border-t border-bettan-line text-[11px] md:text-xs text-bettan-muted">
                <div />
                <div className="px-3 md:px-6 py-2 border-l border-bettan-line">一般的な受託開発</div>
                <div className="px-3 md:px-6 py-2 border-l-2 border-bettan-red text-bettan-red font-bold">社長の別班</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑦ 実績・会社 */}
      <section className="py-16 md:py-24 bg-white text-ink">
        <div className="container mx-auto px-5">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>FILE 06 ／ 実績</Eyebrow>
            <h2 className="text-[1.55rem] leading-[1.55] md:text-[2.4rem] font-black mb-10">社長の裏方を、<br className="md:hidden" />ずっと。</h2>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              {[
                ['相談実績', '500社以上の経営・事業の相談に対応'],
                ['開発', '新規事業のシステム・アプリを多数開発'],
                ['新規事業', '大手百貨店・大手ショッピングセンター、地方企業の新規事業に参画'],
                ['マーケティング', '集客・Webマーケティングを受託'],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl border border-line bg-white p-5 md:p-6 shadow-card">
                  <h3 className="flex items-center gap-2 text-base md:text-lg font-black mb-2">
                    <span className="w-2 h-2 bg-bettan-red" />
                    {t}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-sm text-body">株式会社Re.haru</p>
              <Stamp className="text-sm">実績確認済</Stamp>
            </div>
          </div>
        </div>
      </section>

      {/* ⑦' お客さまの声（掲載許可が取れたものだけ） */}
      {voices.length > 0 && (
        <section className="py-16 md:py-24 bg-surface text-ink">
          <div className="container mx-auto px-5">
            <div className="max-w-5xl mx-auto">
              <Eyebrow>FILE 07 ／ お客さまの声</Eyebrow>
              <div className="grid md:grid-cols-2 gap-4">
                {voices.map((x) => (
                  <figure key={x.who} className="rounded-xl border border-line bg-white p-6 shadow-card">
                    <blockquote className="text-base leading-loose">「{x.text}」</blockquote>
                    <figcaption className="mt-4 text-sm font-bold text-muted">{x.who}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ⑦'' 別班の強み */}
      <section className="py-16 md:py-24 border-t border-bettan-line">
        <div className="container mx-auto px-5">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>FILE 08 ／ 強み</Eyebrow>
            <h2 className="text-[1.55rem] leading-[1.55] md:text-[2.4rem] font-black mb-10">
              別班が、
              <br className="md:hidden" />
              ほかと違う3つのこと。
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                ['01', '作って終わりにしない', '使われるところまで現場に入れて、使いながら直し続けます。入れたのに誰も使わない、を残しません。'],
                ['02', '何度でも作り変えられる', '月額なので、やりたいことが変わっても大丈夫。作るたびの追加見積もりはありません。'],
                ['03', 'ITの窓口が、ひとつになる', 'システム・AI・ホームページ・デザイン・動画まで。別々の会社に頼まなくても、別班にまとめて頼めます。'],
              ].map(([n, t, d]) => (
                <div key={n} className="rounded-xl border border-bettan-line bg-bettan-panel/90 p-6 md:p-7">
                  <p className="text-3xl font-black text-bettan-red mb-3 tabular-nums">{n}</p>
                  <h3 className="text-lg md:text-xl font-black mb-3">{t}</h3>
                  <p className="text-sm md:text-base text-bettan-muted leading-loose">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑧ よくある質問 */}
      <section className="py-16 md:py-24 bg-surface text-ink">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <Eyebrow>FILE 09 ／ よくある質問</Eyebrow>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-line bg-white p-5 md:p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base md:text-lg font-black">
                    <span>
                      <span className="text-bettan-red mr-2">Q.</span>
                      {f.q}
                    </span>
                    <span className="text-bettan-red text-xl leading-none transition-transform group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-4 text-sm md:text-base text-body leading-loose">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑨ 最後のボタン */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[480px] flex items-center">
          <Image src="/bettan/team.webp" alt="赤い光の中に立つ5人のシルエット" fill sizes="100vw" className="object-cover object-[72%_center]" />
          <div className="absolute inset-0 bg-bettan-bg/70" />
          <div className="container relative z-10 mx-auto px-5 py-16">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-xl">
                <Image src="/bettan/emblem.webp" alt="社長の別班エンブレム" width={400} height={467} className="w-14 md:w-20 h-auto mb-6" />
                <h2 className="text-[2rem] leading-[1.35] md:text-5xl font-black mb-5">最初の指令をください</h2>
                <p className="text-base md:text-lg text-bettan-text/90 leading-loose mb-8">
                  「こんなことできる？」の一言からで大丈夫です。
                  <br />
                  オンラインで60分、無料でお話を伺います。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑩ 入力欄 */}
      <section id="form" className="py-14 md:py-20 border-t border-bettan-line scroll-mt-20">
        <div className="container mx-auto px-5">
          <div className="max-w-xl mx-auto">
            <p className="text-center text-lg md:text-xl font-black mb-6">30秒で送れます</p>
            <ShortForm />
          </div>
        </div>
      </section>
      <StickyCTA />
    </div>
  );
}
