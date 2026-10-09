/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'fzezodcavyzgfcarlrjg.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizeCss: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      // 開発ブログ（旧サービス「一律500万円」前提の記事146本）を廃止。
      // 被リンク・インデックスの評価をサービスページへ引き継ぐため301で転送する。
      // 絶対URLを指定して www 統一リダイレクトとの二重ホップを避ける。
      {
        source: '/blog',
        destination: 'https://www.reharu.com/service',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: 'https://www.reharu.com/service',
        permanent: true,
      },
      // 旧料金（一律300万円）のお知らせを削除。記事URLはサービスページへ転送する。
      {
        source: '/news/2026-08-05',
        destination: 'https://www.reharu.com/service',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'reharu.com',
          },
        ],
        destination: 'https://www.reharu.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig