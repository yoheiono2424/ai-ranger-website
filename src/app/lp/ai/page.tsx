import { Metadata } from 'next';
import Image from 'next/image';
import {
  AbBuild,
  AbClosing,
  AbComplex,
  AbDemo,
  AbDept,
  AbFaq,
  AbFlow,
  AbGrow,
  AbHandCheck,
  AbPlans,
  AbProof,
  AbSafety,
  CtaButton,
} from '@/components/sections/aibettan/AbParts';
import { LpReadTracker, ShortForm, StickyCTA } from './LpParts';

/**
 * 広告（Meta広告）からの着地ページ。本ページは /service
 * 2026/11/21 刷新：「社長のAI別班」・白×紺×シアン・3プラン（営業資料v11と同じ内容）
 * 検索には出さない（noindex）
 */

export const metadata: Metadata = {
  title: 'AIは、社長が覚えなくていい｜社長のAI別班',
  description:
    '御社専用のAIエージェントシステムを、つくって、育て続けます。人を雇わず、社外にAIの専用部署を。月額で、開発・保守まで込み。',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.reharu.com/lp/ai' },
  openGraph: {
    title: 'AIは、社長が覚えなくていい｜社長のAI別班',
    description: '御社専用のAIエージェントシステムを、つくって、育て続けます。',
    url: 'https://www.reharu.com/lp/ai',
    images: ['/aibettan/cover.webp'],
  },
};

export default function LpAiPage() {
  return (
    <div className="bg-white text-ab-text overflow-x-hidden">
      {/* 最初の画面 */}
      <section className="bg-ab-navy">
        <div className="grid md:grid-cols-[1fr_1.1fr] items-stretch">
          <div className="relative min-h-[260px] md:min-h-[640px] md:order-2">
            <Image src="/aibettan/cover.webp" alt="タブレットを見る社長と、そのまわりに浮かぶAIの画面" fill priority sizes="(min-width:768px) 55vw, 100vw" className="object-cover" />
          </div>
          <div className="px-5 md:px-12 py-12 md:py-24 flex items-center md:order-1">
            <div className="max-w-lg md:ml-auto">
              <p className="text-xs md:text-sm font-bold tracking-eyebrow text-[#7FDBF0] mb-5">社長のAI別班</p>
              <h1 className="font-black text-white text-[1.85rem] leading-[1.3] md:text-[3.5rem] md:leading-[1.2] mb-6">
                AIは、
                <br />
                社長が覚えなくていい。
              </h1>
              <p className="text-base md:text-xl font-bold text-white leading-relaxed mb-4">
                御社専用のAIエージェントシステムを、
                <br className="hidden md:block" />
                つくって、育て続けます。
              </p>
              <p className="text-sm md:text-base text-[#C9D6E8] leading-loose mb-8">人を雇わず、社外にAIの専用部署を。開発も保守も、月額の中で。</p>
              <CtaButton href="#form">まず話してみる（無料）</CtaButton>
              <p className="mt-3 text-xs md:text-sm text-[#C9D6E8]">オンラインで60分。何を頼むか決まっていなくても大丈夫です。</p>
            </div>
          </div>
        </div>
      </section>

      <AbComplex no="01" />
      <AbDept no="02" />
      <AbBuild no="03" />
      <AbHandCheck no="04" />
      <AbDemo no="05" />
      <AbProof no="06" />
      <AbFlow no="07" />
      <AbSafety no="08" />
      <AbPlans no="09" />
      <AbGrow no="10" />
      <AbFaq no="11" />
      <AbClosing href="#form" button="まず話してみる（無料）" />

      {/* 入力欄 */}
      <section id="form" className="py-14 md:py-20 bg-ab-gray scroll-mt-20">
        <div className="container mx-auto px-5">
          <div className="max-w-xl mx-auto">
            <h2 className="text-center text-lg md:text-xl font-black text-ab-navy mb-6">30秒で送れます</h2>
            <ShortForm />
          </div>
        </div>
      </section>
      <StickyCTA />
      <LpReadTracker />
    </div>
  );
}
