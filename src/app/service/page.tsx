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
const FunctionCountSection = dynamic(() => import('@/components/sections/service/FunctionCountSection'), {
  loading: () => <div className="h-64" />,
});
const FiveRangerSection = dynamic(() => import('@/components/sections/service/FiveRangerSection'), {
  loading: () => <div className="h-96" />,
});
const FAQSection = dynamic(() => import('@/components/sections/service/FAQSection'), {
  loading: () => <div className="h-96" />,
});

export const metadata: Metadata = {
  title: 'サービス詳細 | AIレンジャー・5レンジャー - 株式会社Re.haru',
  description: 'AIレンジャーの詳細情報。開発実績、料金プラン、5レンジャー（ノーコード開発）まで。300万円から始められる革新的なシステム開発サービス。',
  keywords: 'AIレンジャー, 5レンジャー, ノーコード開発, 料金プラン, 開発実績, システム開発, DX',
  openGraph: {
    title: 'AIレンジャー サービス詳細',
    description: '300万円から始められる革新的なシステム開発。開発費用1/5、期間1/3を実現。',
    images: ['/ai-ranger-logo.png'],
  },
};

export default function ServicePage() {
  return (
    <>
      <ServiceHeroSection />
      <ProblemSolutionSection />
      <ServiceOverviewSection />
      <AIRangerDetailSection />
      <div id="results">
        <ProjectResultsSection />
      </div>
      <div id="price">
        <PricingDetailSection />
      </div>
      <FunctionCountSection />
      <div id="5ranger">
        <FiveRangerSection />
      </div>
      <FAQSection />
    </>
  );
}