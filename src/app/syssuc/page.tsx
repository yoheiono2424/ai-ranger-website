import { Metadata } from 'next';
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  ReasonSection,
  ServiceOverviewSection,
  PricingSection,
  ComparisonSection,
  ResultsSection,
  UseCaseSection,
  FlowSection,
  FAQSection,
  CTASection,
} from '@/components/sections/syssuc';

export const metadata: Metadata = {
  title: 'SysSuc（シススク）- システム開発サブスク | 株式会社Re.haru',
  description: 'システム開発に、サブスク革命。開発も、保守も、改修も。ぜんぶ込みで、月額10万円から。初期費用ゼロで始められる新時代のシステム開発サービス。',
  keywords: 'システム開発 サブスク, システム開発 月額, システム開発 初期費用ゼロ, 業務システム 定額, 中小企業 DX, 熊本 システム開発, SysSuc, シススク',
  openGraph: {
    title: 'SysSuc（シススク）- システム開発サブスク | 株式会社Re.haru',
    description: 'システム開発に、サブスク革命。開発も、保守も、改修も。ぜんぶ込みで、月額10万円から。',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: '/syssuc-logo.png',
        width: 1200,
        height: 630,
        alt: 'SysSuc - システム開発サブスク',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SysSuc（シススク）- システム開発サブスク',
    description: 'システム開発に、サブスク革命。月額10万円から。',
    images: ['/syssuc-logo.png'],
  },
};

export default function SysSucPage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ReasonSection />
      <ServiceOverviewSection />
      <PricingSection />
      <ComparisonSection />
      <ResultsSection />
      <UseCaseSection />
      <FlowSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
