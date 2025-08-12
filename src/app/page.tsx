import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';

export const metadata: Metadata = {
  title: '株式会社Re.haru | AIレンジャー - 高額な開発相場を成敗する',
  description: 'AIレンジャーが高額な開発相場を成敗！開発費用1/5、開発期間1/3を実現。スマホアプリから社内DXシステムまで、超速・低価格でシステム開発を提供します。',
  keywords: 'AIレンジャー, システム開発, 低価格開発, DXシステム, スマホアプリ開発, 熊本, Return青春, 株式会社Re.haru',
  openGraph: {
    title: '株式会社Re.haru | AIレンジャー - 高額な開発相場を成敗する',
    description: 'AIレンジャーが高額な開発相場を成敗！開発費用1/5、開発期間1/3を実現。',
    images: ['/①Re.haru青ロゴ.png'],
    type: 'website',
  },
};

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