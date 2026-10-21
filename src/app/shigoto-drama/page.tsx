import { Metadata } from 'next';
import DramaHeroSection from '@/components/sections/shigoto-drama/DramaHeroSection';
import DramaProblemSection from '@/components/sections/shigoto-drama/DramaProblemSection';
import DramaEvidenceSection from '@/components/sections/shigoto-drama/DramaEvidenceSection';
import DramaCompareSection from '@/components/sections/shigoto-drama/DramaCompareSection';
import DramaSamplesSection from '@/components/sections/shigoto-drama/DramaSamplesSection';
import DramaUsesSection from '@/components/sections/shigoto-drama/DramaUsesSection';
import DramaFlowSection from '@/components/sections/shigoto-drama/DramaFlowSection';
import DramaScopeSection from '@/components/sections/shigoto-drama/DramaScopeSection';
import DramaCTASection from '@/components/sections/shigoto-drama/DramaCTASection';
import JsonLd from '@/components/common/JsonLd';

const description =
  '採用とPRのための縦型ドラマ「シゴトドラマ」。御社の仕事と商品を、ドラマにします。撮影はいらず、ご負担は最初の取材1時間だけ。';

export const metadata: Metadata = {
  title: 'シゴトドラマ｜採用とPRのための縦型ドラマ',
  description,
  keywords:
    'シゴトドラマ, 採用ドラマ, PRドラマ, 縦型ドラマ, ショートドラマ 制作, 採用動画 制作, 商品PR 動画, 熊本 動画制作, 株式会社Re.haru',
  alternates: {
    canonical: 'https://www.reharu.com/shigoto-drama',
  },
  openGraph: {
    title: 'シゴトドラマ｜採用とPRのための縦型ドラマ',
    description,
    url: 'https://www.reharu.com/shigoto-drama',
    images: ['/shigoto-drama/hero.webp'],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'シゴトドラマ',
  serviceType: '採用・PR向けの縦型ドラマ制作',
  description,
  url: 'https://www.reharu.com/shigoto-drama',
  areaServed: 'JP',
  provider: {
    '@type': 'Organization',
    name: '株式会社Re.haru',
    url: 'https://www.reharu.com',
  },
};

export default function ShigotoDramaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <DramaHeroSection />
      <DramaProblemSection />
      <DramaEvidenceSection />
      <DramaCompareSection />
      <DramaSamplesSection />
      <DramaUsesSection />
      <DramaFlowSection />
      <DramaScopeSection />
      <DramaCTASection />
    </>
  );
}
