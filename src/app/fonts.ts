import localFont from 'next/font/local'

// ローカルフォントを使用（オプション）
// 将来的にNoto Sans JPをローカルに配置する場合はここで設定
export const notoSansJP = localFont({
  src: [
    {
      path: '../fonts/NotoSansJP-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/NotoSansJP-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/NotoSansJP-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/NotoSansJP-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  preload: false,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Meiryo', 'sans-serif'],
})

// システムフォントのみを使用（現在の設定）
export const systemFont = {
  style: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif',
  },
}