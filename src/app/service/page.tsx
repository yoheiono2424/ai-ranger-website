import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import ServiceHeroSection from '@/components/sections/service/ServiceHeroSection';

const AIProblemSection = dynamic(() => import('@/components/sections/service/AIProblemSection'), {
  loading: () => <div className="h-96" />,
});
const AIInsideSection = dynamic(() => import('@/components/sections/service/AIInsideSection'), {
  loading: () => <div className="h-96" />,
});
const OrderMadeSection = dynamic(() => import('@/components/sections/service/OrderMadeSection'), {
  loading: () => <div className="h-96" />,
});
const PriceStorySection = dynamic(() => import('@/components/sections/service/PriceStorySection'), {
  loading: () => <div className="h-96" />,
});
const AIRangerDetailSection = dynamic(() => import('@/components/sections/service/AIRangerDetailSection'), {
  loading: () => <div className="h-96" />,
});
const ProjectResultsSection = dynamic(() => import('@/components/sections/service/ProjectResultsSection'), {
  loading: () => <div className="h-96" />,
});
const FAQSection = dynamic(() => import('@/components/sections/service/FAQSection'), {
  loading: () => <div className="h-96" />,
});

export const metadata: Metadata = {
  title: 'サービス詳細 | 株式会社Re.haru - オーダーメイド業務AI',
  description: '研修を受けても、ツールを入れても、AIを使わない社員がいる。AI単体は「使う習慣」がないと使われないからです。私たちは御社専用の業務システムを作り、その中にAIを入れます。だから毎日使われます。開発費用は一律300万円。',
  keywords: 'AI 定着しない, AI 使われない, AI導入 失敗, 業務システム開発, オーダーメイド業務AI, AI 社内 定着, 料金プラン, 一律料金',
  alternates: {
    canonical: 'https://www.reharu.com/service',
  },
  openGraph: {
    title: 'サービス詳細 | 株式会社Re.haru - オーダーメイド業務AI',
    description: 'うちはAI単体は売りません。使われないので。御社専用の業務システムを作り、その中にAIを入れます。開発費用は一律300万円。',
    images: ['/①Re.haru青ロゴ.png'],
  },
};

export default function ServicePage() {
  return (
    <>
      <ServiceHeroSection />
      <AIProblemSection />
      <AIInsideSection />
      <OrderMadeSection />
      <PriceStorySection />
      <div id="airanger-detail">
        <AIRangerDetailSection />
      </div>
      <div id="results">
        <ProjectResultsSection />
      </div>
      <FAQSection />
    </>
  );
}
