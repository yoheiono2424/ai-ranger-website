import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const CompanyInfoSection = dynamic(() => import('@/components/sections/about/CompanyInfoSection'), {
  loading: () => <div className="h-screen" />,
});

export const metadata: Metadata = {
  title: '会社概要 | 株式会社Re.haru - Return青春の実現',
  description: '株式会社Re.haruは「Return青春」を企業理念に、AIレンジャーを通じて企業の挑戦を支援。熊本から全国へ、高額な開発費用を成敗し、すべての企業に青春を取り戻します。',
  keywords: '株式会社Re.haru, 会社概要, Return青春, 企業理念, 熊本, システム開発会社, AIレンジャー',
  openGraph: {
    title: '会社概要 | 株式会社Re.haru',
    description: 'Return青春 - テクノロジーの力で企業に「挑戦」「成長」「希望」を取り戻す',
    images: ['/①Re.haru青ロゴ.png'],
  },
};

export default function AboutPage() {
  return (
    <>
      <CompanyInfoSection />
    </>
  );
}