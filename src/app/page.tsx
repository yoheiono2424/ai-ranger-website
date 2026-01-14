import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import NewsSection from '@/components/NewsSection';

export const metadata: Metadata = {
  title: '株式会社Re.haru | Return青春 - テクノロジーで挑戦を支援',
  description: 'テクノロジーの力ですべての企業にReturn青春をお届けします。',
  keywords: '5レンジャー, SysSuc, システム開発, 低価格開発, DXシステム, スマホアプリ開発, 熊本, Return青春, 株式会社Re.haru',
  openGraph: {
    title: '株式会社Re.haru | Return青春 - テクノロジーで挑戦を支援',
    description: 'テクノロジーの力ですべての企業にReturn青春をお届けします。',
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
const ServiceIntroSection = dynamic(() => import('@/components/sections/ServiceIntroSection'), {
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
      <NewsSection />
      <ProblemSection />
      <ReturnSeishunVisionSection />
      <ServiceIntroSection />
      <SuccessStoriesSection />
      <CTASection />
    </>
  );
}