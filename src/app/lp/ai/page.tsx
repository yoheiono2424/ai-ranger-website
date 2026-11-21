import { Metadata } from 'next';
import Image from 'next/image';
import { AbClosing, AbComplex, AbFaq, AbFlow, AbHandCheck, AbProof, Check, CtaButton, Eyebrow } from '@/components/sections/aibettan/AbParts';
import { LpReadTracker, ShortForm, StickyCTA } from './LpParts';

/**
 * 広告（Meta広告）からの着地ページ。本ページは /service
 * 2026/11/21 刷新：HPと同じ色・言葉で、目的は「問い合わせ」だけ。HPより短く、数字と価格差で押す
 * プランの違い・期間などは書かない（提案書と商談で）。検索には出さない（noindex）
 */

export const metadata: Metadata = {
  title: 'AIは、社長が覚えなくていい｜社長のAI別班',
  description: '2時間の作業が、10分に。御社専用のAIエージェントシステムを、月15万円から。開発費は月額に込み。試作までは無料です。',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.reharu.com/lp/ai' },
  openGraph: {
    title: 'AIは、社長が覚えなくていい｜社長のAI別班',
    description: '2時間の作業が、10分に。御社専用のAIエージェントシステムを、月15万円から。',
    url: 'https://www.reharu.com/lp/ai',
    images: ['/aibettan/cover.webp'],
  },
};

const CTA_LABEL = 'まず話してみる（無料）';

const MidCta = ({ text }: { text: string }) => (
  <section className="bg-ab-cyan">
    <div className="container mx-auto px-5 py-10 md:py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-lg md:text-2xl font-black text-white text-center md:text-left">{text}</p>
        <a href="#form" className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-ab-navy font-bold rounded-lg hover:bg-ab-tint transition-colors">
          {CTA_LABEL}
        </a>
      </div>
    </div>
  </section>
);

export default function LpAiPage() {
  return (
    <div className="bg-white text-ab-text overflow-x-hidden">
      {/* ① 最初の画面：結論と数字 */}
      <section className="bg-ab-navy">
        <div className="grid md:grid-cols-[1fr_1fr] items-stretch">
          <div className="relative min-h-[240px] md:min-h-[660px] md:order-2">
            <Image src="/aibettan/cover.webp" alt="タブレットを見る社長と、そのまわりに浮かぶAIの画面" fill priority sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="px-5 md:px-12 py-10 md:py-20 flex items-center md:order-1">
            <div className="max-w-lg md:ml-auto w-full">
              <p className="text-xs md:text-sm font-bold tracking-eyebrow text-[#7FDBF0] mb-4">社長のAI別班</p>
              <h1 className="font-black text-white text-[1.85rem] leading-[1.3] md:text-[2.8rem] md:leading-[1.25] mb-5">
                AIは、
                <br />
                社長が覚えなくていい。
              </h1>
              <div className="rounded-2xl bg-white/10 border border-white/20 p-4 md:p-5 mb-6">
                <p className="text-xs md:text-sm text-[#C9D6E8] mb-1">書類をまとめる仕事なら</p>
                <p className="font-black text-white">
                  <span className="text-2xl md:text-3xl text-[#9AA6B6] line-through decoration-2">2時間</span>
                  <span className="mx-3 text-ab-cyan">→</span>
                  <span className="text-4xl md:text-5xl">10分</span>
                </p>
              </div>
              <p className="text-sm md:text-base text-[#C9D6E8] leading-loose mb-7">
                御社専用のAIエージェントシステムを、つくって、育て続けます。
                <br />
                人がやるのは「渡す」と「確かめる」だけ。
              </p>
              <CtaButton href="#form">{CTA_LABEL}</CtaButton>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs md:text-sm text-white">
                {['相談60分 無料', '試作まで無料', '何を頼むか未定でOK'].map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-ab-cyan" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ② 悩み */}
      <AbComplex no="01" />

      {/* ③ 入れると、こうなる（数字） */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>02 ｜ 入れると、こうなる</Eyebrow>
            <h2 className="text-[1.6rem] leading-[1.5] md:text-[2.6rem] font-black text-ab-navy mb-10">
              毎日の「人がやらなくていい仕事」が、
              <br className="hidden md:block" />
              消えていきます
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                ['見積の下書き', '1件60分', '4分'],
                ['月末の経理作業', '3日', '半日'],
                ['月次の数字が出るまで', '翌月中旬', '翌朝'],
              ].map(([k, a, b]) => (
                <div key={k} className="rounded-2xl bg-ab-navy p-6">
                  <p className="text-sm font-bold text-[#7FDBF0] mb-3">{k}</p>
                  <p className="text-[#9AA6B6] line-through decoration-2 text-lg font-bold">{a}</p>
                  <p className="text-4xl md:text-5xl font-black text-white">{b}</p>
                </div>
              ))}
            </div>
            <div className="relative aspect-[1600/780] rounded-xl overflow-hidden shadow-panel bg-ab-gray">
              <Image src="/aibettan/demo-console.webp" alt="AIエージェントの稼働状況画面。今日の動き、今月の削減時間、週次の分析が並ぶ" fill sizes="(min-width:768px) 1000px, 100vw" className="object-contain" />
            </div>
            <p className="mt-3 text-xs text-ab-muted">※画面・数字は想定例です</p>
          </div>
        </div>
      </section>

      {/* ④ やり方 */}
      <AbHandCheck no="03" />

      <MidCta text="まずは困りごとを話すだけ。試作まで無料です。" />

      {/* ⑤ 価格差 */}
      <section className="py-16 md:py-24 bg-ab-gray">
        <div className="container mx-auto px-5">
          <div className="max-w-5xl mx-auto">
            <Eyebrow>04 ｜ 料金</Eyebrow>
            <h2 className="text-[1.6rem] leading-[1.5] md:text-[2.6rem] font-black text-ab-navy mb-10">
              外注すれば数百万円。
              <br />
              別班なら、月額の中で。
            </h2>
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="rounded-2xl bg-white p-6 md:p-8 text-center">
                <p className="font-bold text-ab-muted mb-2">AIの付いた業務システムを外注</p>
                <p className="text-4xl md:text-5xl font-black text-[#9AA6B6] line-through decoration-2">300万円〜</p>
                <p className="mt-3 text-xs md:text-sm text-ab-muted">開発費をまとめて支払い。直すたびに追加費用、保守費も毎年別に</p>
              </div>
              <p className="text-center text-3xl font-black text-ab-cyan">→</p>
              <div className="rounded-2xl bg-ab-navy p-6 md:p-8 text-center shadow-panel">
                <p className="font-bold text-[#7FDBF0] mb-2">社長のAI別班</p>
                <p className="font-black text-white">
                  <span className="text-2xl">月</span>
                  <span className="text-6xl md:text-7xl">15</span>
                  <span className="text-2xl">万円〜</span>
                </p>
                <p className="mt-3 text-xs md:text-sm text-[#C9D6E8]">開発費・直す・足す・保守まで月額に込み（税別）</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-ab-muted">※外注の金額は一般的な目安（AIエージェント開発の費用相場・AI Picks 2026 ほか）</p>
          </div>
        </div>
      </section>

      {/* ⑥ 実績 */}
      <AbProof no="05" />

      {/* ⑦ 進め方 */}
      <AbFlow no="06" />

      <AbFaq no="07" />
      <AbClosing href="#form" button={CTA_LABEL} />

      {/* 入力欄 */}
      <section id="form" className="py-14 md:py-20 bg-ab-gray scroll-mt-20">
        <div className="container mx-auto px-5">
          <div className="max-w-xl mx-auto">
            <h2 className="text-center text-xl md:text-2xl font-black text-ab-navy mb-2">30秒で送れます</h2>
            <p className="text-center text-sm text-ab-muted mb-6">担当から、ご都合のよい日時をご連絡します。</p>
            <ShortForm />
          </div>
        </div>
      </section>
      <StickyCTA />
      <LpReadTracker />
    </div>
  );
}
