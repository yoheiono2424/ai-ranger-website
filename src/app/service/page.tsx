import { Metadata } from 'next';
import BettanHeroSection from '@/components/sections/bettan/BettanHeroSection';
import BettanTargetSection from '@/components/sections/bettan/BettanTargetSection';
import BettanCompareSection from '@/components/sections/bettan/BettanCompareSection';
import BettanFlowSection from '@/components/sections/bettan/BettanFlowSection';
import BettanCasesSection from '@/components/sections/bettan/BettanCasesSection';
import BettanMissionSection from '@/components/sections/bettan/BettanMissionSection';
import BettanScopeSection from '@/components/sections/bettan/BettanScopeSection';
import BettanRecordsSection from '@/components/sections/bettan/BettanRecordsSection';
import BettanBaseSection from '@/components/sections/bettan/BettanBaseSection';
import BettanPriceSection from '@/components/sections/bettan/BettanPriceSection';
import BettanCTASection from '@/components/sections/bettan/BettanCTASection';
import JsonLd from '@/components/common/JsonLd';

const description =
  '社長の「やりたい」を、すぐ形に。「社長の別班」は、業務の自動化や社内システムから、ホームページ・ネット販売まで、ITの任務を引き受けます。教えるのではなく、裏で形にして、ずっと支えます。熊本・九州から。';

export const metadata: Metadata = {
  title: '社長の別班｜社長の「やりたい」を、すぐ形に',
  description,
  keywords:
    '社長の別班, 新規事業 立ち上げ, 新規事業 支援, システム開発, LP制作, 業務の自動化, AI導入, 熊本 システム開発, 九州, 株式会社Re.haru',
  alternates: {
    canonical: 'https://www.reharu.com/service',
  },
  openGraph: {
    title: '社長の別班｜社長の「やりたい」を、すぐ形に',
    description,
    url: 'https://www.reharu.com/service',
    images: ['/bettan/team.webp'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '社長の別班',
  serviceType: 'ITの業務支援・システム開発（月額制）',
  description,
  url: 'https://www.reharu.com/service',
  areaServed: 'JP',
  provider: {
    '@type': 'Organization',
    name: '株式会社Re.haru',
    url: 'https://www.reharu.com',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'JPY',
    price: 300000,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: 300000,
      priceCurrency: 'JPY',
      unitText: '月',
      billingDuration: 'P1M',
      valueAddedTaxIncluded: false,
    },
  },
};

export default function ServicePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <BettanHeroSection />
      <BettanTargetSection />
      <BettanCompareSection />
      <BettanFlowSection />
      <BettanCasesSection />
      <BettanMissionSection />
      <BettanScopeSection />
      <BettanRecordsSection />
      <BettanBaseSection />
      <BettanPriceSection />
      <BettanCTASection />
    </>
  );
}
