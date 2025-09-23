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
const FAQSection = dynamic(() => import('@/components/sections/service/FAQSection'), {
  loading: () => <div className="h-96" />,
});

export const metadata: Metadata = {
  title: 'サービス詳細 | 株式会社Re.haru - AIレンジャー',
  description: 'AIレンジャーの詳細情報。開発実績、料金プランまで。300万円から始められる革新的なシステム開発サービス。',
  keywords: 'AIレンジャー, 料金プラン, 開発実績, システム開発, DX',
  openGraph: {
    title: 'サービス詳細 | 株式会社Re.haru - AIレンジャー',
    description: '300万円から始められる革新的なシステム開発。開発費用1/5、期間1/3を実現。',
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
      <FunctionCountSection />
      <FAQSection />
    </>
  );
}