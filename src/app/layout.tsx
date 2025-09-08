import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/common/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL('https://reharu.com'),
  title: {
    default: "株式会社Re.haru | AIレンジャー - 高額な開発相場を成敗する",
    template: "%s | 株式会社Re.haru"
  },
  description: "AIレンジャーが高額な開発相場を成敗！開発費用1/5、開発期間1/3を実現。テクノロジーの力で企業に「挑戦」「成長」「希望」を取り戻します。",
  keywords: "Return青春, AIシステム開発, 低価格開発, ノーコード開発, DXシステム, 熊本 システム開発, AIレンジャー, 株式会社Re.haru",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "株式会社Re.haru | Return青春 - もう一度、青春を取り戻す",
    description: "テクノロジーの力で誰もが青春のような「挑戦」「成長」「希望」を持ち続けられる社会を創る。",
    type: "website",
    locale: "ja_JP",
    url: "https://reharu.com",
    siteName: "株式会社Re.haru",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社Re.haru",
  alternateName: "Re.haru",
  url: "https://reharu.com",
  logo: "https://reharu.com/①Re.haru青ロゴ.png",
  description: "テクノロジーの力で誰もが青春のような「挑戦」「成長」「希望」を持ち続けられる社会を創る。",
  foundingDate: "2024-01-01",
  address: {
    "@type": "PostalAddress",
    streetAddress: "中央区花畑町",
    addressLocality: "熊本市",
    addressRegion: "熊本県",
    postalCode: "860-0000",
    addressCountry: "JP"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+81-96-xxx-xxxx",
    contactType: "customer service",
    areaServed: "JP",
    availableLanguage: "Japanese"
  },
  sameAs: [
    "https://x.com/re_haru_official",
    "https://www.linkedin.com/company/re-haru"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-scroll-behavior="smooth">
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}