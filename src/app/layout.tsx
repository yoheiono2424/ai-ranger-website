import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/common/JsonLd";

const GA_ID = "G-FL2R2EK4DM";

export const metadata: Metadata = {
  metadataBase: new URL('https://reharu.com'),
  title: {
    default: "株式会社Re.haru | Return青春 - テクノロジーで挑戦を支援",
    template: "%s | 株式会社Re.haru"
  },
  description: "テクノロジーの力ですべての企業にReturn青春をお届けします。",
  keywords: "Return青春, AIシステム開発, 低価格開発, ノーコード開発, DXシステム, 熊本 システム開発, 5レンジャー, 株式会社Re.haru",
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
  foundingDate: "2020-10-20",
  address: {
    "@type": "PostalAddress",
    streetAddress: "西区春日1-14-3 ザ・熊本タワー2901",
    addressLocality: "熊本市",
    addressRegion: "熊本県",
    postalCode: "860-0047",
    addressCountry: "JP"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+81-96-327-9339",
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
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