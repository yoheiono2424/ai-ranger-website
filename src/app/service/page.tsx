import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ServiceHeroSection from '@/components/sections/service/ServiceHeroSection';

const ServiceOverviewSection = dynamic(() => import('@/components/sections/service/ServiceOverviewSection'), {
  loading: () => <div className="h-96" />,
});
const ProblemSolutionSection = dynamic(() => import('@/components/sections/service/ProblemSolutionSection'), {
  loading: () => <div className="h-96" />,
});
const AIRangerDetailSection = dynamic(() => import('@/components/sections/service/AIRangerDetailSection'), {
  loading: () => <div className="h-96" />,
});
const ProjectResultsSection = dynamic(() => import('@/components/sections/service/ProjectResultsSection'), {
  loading: () => <div className="h-96" />,
});
const PricingDetailSection = dynamic(() => import('@/components/sections/service/PricingDetailSection'), {
  loading: () => <div className="h-96" />,
});
// const FunctionCountSection = dynamic(() => import('@/components/sections/service/FunctionCountSection'), {
//   loading: () => <div className="h-64" />,
// });
const FAQSection = dynamic(() => import('@/components/sections/service/FAQSection'), {
  loading: () => <div className="h-96" />,
});

export const metadata: Metadata = {
  title: 'サービス詳細 | 株式会社Re.haru - 5レンジャー',
  description: '5レンジャーの詳細情報。開発実績、料金プランまで。一律500万円で機能数制限なし、何でも開発できる革新的なシステム開発サービス。',
  keywords: '5レンジャー, 料金プラン, 開発実績, システム開発, DX, 一律料金',
  openGraph: {
    title: 'サービス詳細 | 株式会社Re.haru - 5レンジャー',
    description: '一律500万円で機能数制限なし。何でも開発できる革新的なシステム開発。2〜6ヶ月の開発期間を実現。',
    images: ['/①Re.haru青ロゴ.png'],
  },
};

export default function ServicePage() {
  return (
    <>
      <ServiceHeroSection />
      <ProblemSolutionSection />
      <ServiceOverviewSection />
      <div id="airanger-detail">
        <AIRangerDetailSection />
      </div>
      <div id="results">
        <ProjectResultsSection />
      </div>
      <div id="price">
        <PricingDetailSection />
      </div>
      <FAQSection />
    </>
  );
}