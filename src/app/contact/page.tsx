import { Metadata } from 'next';
import ContactHeroSection from '@/components/sections/contact/ContactHeroSection';
import ContactFormSection from '@/components/sections/contact/ContactFormSection';

export const metadata: Metadata = {
  title: 'お問い合わせ | 株式会社Re.haru',
  description: 'AIレンジャーの無料相談・お問い合わせフォーム。開発費用1/5、期間1/3を実現する革新的なシステム開発について、お気軽にご相談ください。見積もり無料。',
  keywords: 'お問い合わせ, 無料相談, 見積もり, AIレンジャー, システム開発相談, DX相談, 株式会社Re.haru',
  openGraph: {
    title: 'お問い合わせ | 株式会社Re.haru',
    description: '開発費用のお悩みを解決。無料相談・見積もりはこちらから。',
    images: ['/①Re.haru青ロゴ.png'],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
    </>
  );
}