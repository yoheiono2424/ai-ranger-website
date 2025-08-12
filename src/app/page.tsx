import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';

const ProblemSection = dynamic(() => import('@/components/sections/ProblemSection'), {
  loading: () => <div className="h-96" />,
});
const ReturnSeishunVisionSection = dynamic(() => import('@/components/sections/ReturnSeishunVisionSection'), {
  loading: () => <div className="h-96" />,
});
const ReturnSeishunSolutionSection = dynamic(() => import('@/components/sections/ReturnSeishunSolutionSection'), {
  loading: () => <div className="h-96" />,
});
const SuccessStoriesSection = dynamic(() => import('@/components/sections/SuccessStoriesSection'), {
  loading: () => <div className="h-96" />,
});
const CTASection = dynamic(() => import('@/components/sections/CTASection'), {
  loading: () => <div className="h-32" />,
});

export const metadata: Metadata = {
  title: 'AIレンジャー | 高額な開発相場を成敗 - 株式会社Re.haru',
  description: 'AIレンジャーが高額な開発費用という悪を成敗。開発費用1/5、開発期間1/3、要件定義1/10を実現。すべての企業に「挑戦する青春」を取り戻す。',
  keywords: 'AIレンジャー, システム開発, AI開発, 低価格, 高速開発, Return青春, 株式会社Re.haru',
  openGraph: {
    title: 'AIレンジャー | 高額な開発相場を成敗',
    description: '開発費用1/5、開発期間1/3で夢を実現。AIレンジャーがあなたの会社にReturn青春を。',
    images: ['/ai-ranger-logo.png'],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ReturnSeishunVisionSection />
      <ReturnSeishunSolutionSection />
      <SuccessStoriesSection />
      <CTASection />
    </>
  );
}