import { Metadata } from 'next';
import Image from 'next/image';
import JsonLd from '@/components/common/JsonLd';
import {
  AbBuild,
  AbClosing,
  AbComplex,
  AbDemo,
  AbDept,
  AbFaq,
  AbFlow,
  AbHandCheck,
  AbMarket,
  AbPain,
  AbProof,
  AbSafety,
  CtaButton,
} from '@/components/sections/aibettan/AbParts';

const description =
  '「社長のAI別班」は、御社専用のAIエージェントシステムをつくって、育て続ける月額サービスです。人を雇わず、社外にAIの専用部署を。自動化・書類の管理・分析・専用システムまで。株式会社Re.haru（熊本）。';

export const metadata: Metadata = {
  title: '社長のAI別班｜御社専用のAIエージェントシステムを、つくって育てる',
  description,
  keywords:
    '社長のAI別班, AIエージェント, AIエージェントシステム, 業務の自動化, AI導入, 業務システム 開発, 中小企業 AI, 熊本 システム開発, 株式会社Re.haru',
  alternates: { canonical: 'https://www.reharu.com/service' },
  openGraph: {
    title: '社長のAI別班｜御社専用のAIエージェントシステムを、つくって育てる',
    description,
    url: 'https://www.reharu.com/service',
    images: ['/aibettan/cover.webp'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '社長のAI別班',
  serviceType: 'AIエージェントシステムの開発・運用（月額制）',
  description,
  url: 'https://www.reharu.com/service',
  areaServed: 'JP',
  provider: { '@type': 'Organization', name: '株式会社Re.haru', url: 'https://www.reharu.com' },
  offers: [
    ['ライト', 150000],
    ['スタンダード', 300000],
    ['フル', 500000],
  ].map(([name, price]) => ({
    '@type': 'Offer',
    name,
    priceCurrency: 'JPY',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price,
      priceCurrency: 'JPY',
      unitText: '月',
      billingDuration: 'P1M',
      valueAddedTaxIncluded: false,
    },
  })),
};

export default function ServicePage() {
  return (
    <div className="bg-white text-ab-text overflow-x-hidden">
      <JsonLd data={serviceSchema} />

      {/* 最初の画面 */}
      <section className="bg-ab-navy">
        <div className="grid md:grid-cols-[1fr_1.1fr] items-stretch">
          <div className="px-5 md:px-12 py-16 md:py-24 flex items-center">
            <div className="max-w-lg md:ml-auto">
              <p className="text-xs md:text-sm font-bold tracking-eyebrow text-[#7FDBF0] mb-5">中小企業の社長へ</p>
              <h1 className="font-black text-white text-[2.6rem] leading-[1.2] md:text-[4rem] md:leading-[1.15] mb-6">社長のAI別班</h1>
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-4">
                御社の仕事を、
                <br />
                自動でこなす。
              </p>
              <p className="text-sm md:text-base text-[#C9D6E8] leading-loose mb-10">
                御社専用のAIエージェントシステムを、
                <br />
                つくって、育て続けます。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CtaButton href="/contact">無料で相談する</CtaButton>
                <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 font-bold rounded-lg text-white border border-white/40 hover:border-white transition-colors">
                  料金を見る
                </a>
              </div>
              <p className="text-xs text-[#C9D6E8] mt-8">株式会社Re.haru</p>
            </div>
          </div>
          <div className="relative min-h-[320px] md:min-h-[600px]">
            <Image src="/aibettan/cover.webp" alt="タブレットを見る社長と、そのまわりに浮かぶAIの画面" fill priority sizes="(min-width:768px) 55vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <AbPain no="01" />
      <AbComplex no="02" />
      <AbDept no="03" />
      <AbBuild no="04" />
      <AbHandCheck no="05" />
      <AbDemo no="06" />
      <AbProof no="07" />
      <AbFlow no="08" />
      <AbSafety no="09" />
      <AbMarket no="10" />
      <AbFaq no="11" />
      <AbClosing href="/contact" button="無料で相談する" />
    </div>
  );
}
