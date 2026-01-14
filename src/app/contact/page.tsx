import { Metadata } from 'next';
import ContactHeroSection from '@/components/sections/contact/ContactHeroSection';
import ContactFormSection from '@/components/sections/contact/ContactFormSection';

export const metadata: Metadata = {
  title: 'お問い合わせ | 株式会社Re.haru',
  description: '株式会社Re.haruへのお問い合わせフォーム。システム開発に関するご質問、お見積もり、ご相談など、お気軽にお問い合わせください。',
  keywords: 'お問い合わせ, 無料相談, 見積もり, システム開発相談, DX相談, 株式会社Re.haru',
  openGraph: {
    title: 'お問い合わせ | 株式会社Re.haru',
    description: 'システム開発に関するご質問、お見積もり、ご相談など、お気軽にお問い合わせください。',
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