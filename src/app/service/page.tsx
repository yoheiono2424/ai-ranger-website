import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ServiceHeroSection from '@/components/sections/service/ServiceHeroSection';
import JsonLd from '@/components/common/JsonLd';
import { syssucFaq } from '@/data/syssucFaq';

const loading = () => <div className="h-96" />;
const AIProblemSection = dynamic(() => import('@/components/sections/service/AIProblemSection'), { loading });
const AIInsideSection = dynamic(() => import('@/components/sections/service/AIInsideSection'), { loading });
const ExamplesSection = dynamic(() => import('@/components/sections/service/ExamplesSection'), { loading });
const PriceStorySection = dynamic(() => import('@/components/sections/service/PriceStorySection'), { loading });
const StackSection = dynamic(() => import('@/components/sections/service/StackSection'), { loading });
const FlowSection = dynamic(() => import('@/components/sections/service/FlowSection'), { loading });
const ProjectResultsSection = dynamic(() => import('@/components/sections/service/ProjectResultsSection'), { loading });
const FAQSection = dynamic(() => import('@/components/sections/service/FAQSection'), { loading });

const description =
  '初期費用0円・月額20万円（税別）のシステム開発サブスク「SysSuc（シススク）」。御社専用の業務システムを1件ずつお作りし、その中にAIを組み込みます。いつもの仕事をするだけで、AIが勝手に使われます。';

export const metadata: Metadata = {
  title: 'SysSuc（シススク）｜初期費用0円の、システム開発サブスク',
  description,
  keywords:
    'SysSuc, シススク, システム開発 サブスク, システム開発 月額, 初期費用0円 システム開発, 業務システム開発, 業務システム AI, AI 定着しない, AI 使われない, 熊本 システム開発, 株式会社Re.haru',
  alternates: {
    canonical: 'https://www.reharu.com/service',
  },
  openGraph: {
    title: 'SysSuc（シススク）｜初期費用0円の、システム開発サブスク',
    description,
    url: 'https://www.reharu.com/service',
    images: ['/syssuc/hero.webp'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SysSuc（シススク）',
  alternateName: 'システム開発サブスク SysSuc',
  serviceType: '業務システム開発（月額制）',
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
    price: 200000,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: 200000,
      priceCurrency: 'JPY',
      unitText: '月',
      billingDuration: 'P1M',
      valueAddedTaxIncluded: false,
    },
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: syssucFaq.flatMap((category) =>
    category.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  ),
};

export default function ServicePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ServiceHeroSection />
      <AIProblemSection />
      <AIInsideSection />
      <ExamplesSection />
      <ProjectResultsSection />
      <StackSection />
      <PriceStorySection />
      <FlowSection />
      <FAQSection />
    </>
  );
}
