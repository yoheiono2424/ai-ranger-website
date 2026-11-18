import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import NewsSection from '@/components/NewsSection';

export const metadata: Metadata = {
  title: '株式会社Re.haru | Return青春 - テクノロジーで挑戦を支援',
  description: 'テクノロジーの力ですべての企業にReturn青春をお届けします。社長の「やりたい」をすぐ形にする「社長の別班」と、青春エンターテイメントアプリ「Re.haru」を展開しています。',
  keywords: '社長の別班, 新規事業 支援, システム開発, Web広告 運用, 熊本 システム開発, Return青春, 株式会社Re.haru',
  alternates: {
    canonical: 'https://www.reharu.com',
  },
  openGraph: {
    title: '株式会社Re.haru | Return青春 - テクノロジーで挑戦を支援',
    description: 'テクノロジーの力ですべての企業にReturn青春をお届けします。',
    images: ['/①Re.haru青ロゴ.png'],
    type: 'website',
  },
};

const BusinessSection = dynamic(() => import('@/components/sections/BusinessSection'), {
  loading: () => <div className="h-96" />,
});
const ReturnSeishunVisionSection = dynamic(() => import('@/components/sections/ReturnSeishunVisionSection'), {
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
      <BusinessSection />
      <ReturnSeishunVisionSection />
      <CTASection />
    </>
  );
}