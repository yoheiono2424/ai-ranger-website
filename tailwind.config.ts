import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ai-blue': '#3B82F6',
        'sky-blue': '#60A5FA',
        'challenge-orange': '#FB923C',
        'success-yellow': '#FDE047',
        'hope-green': '#34D399',
        // サービスページ用の絞り込みパレット（2026/08 デザイン刷新）
        // 2026/10 SysSuc：チラシ・営業資料と同じ紺と青に揃える
        ink: '#0E2A47',        // 濃紺：見出し・本文の濃い文字
        navy: '#0E2A47',       // 料金カードの面（濃い面はここ1箇所だけ）
        'ink-soft': '#16304F', // 濃紺の明るい階調
        'ink-line': '#22456B', // 反転背景上の罫線
        accent: '#1A78B8',     // アクセントは青1色に集約（営業資料の #1F86C8 を文字用に少し濃く）
        'accent-soft': '#F2F7FB',
        aqua: '#3CC4D6',       // グラデーションの帯にだけ使う
        'surface': '#F7F8FA',  // 極薄グレー背景
        'line': '#E5E7EB',     // 罫線
        'body': '#4B5563',     // 本文グレー
        'muted': '#8A94A6',    // 補足グレー
        alert: '#DC2626',      // 失敗の表現のみに使用
        // 青春パレット（トップページ専用・ブランドカラー 水色→アクア→ピンク）
        'seishun-sky': '#7DD3FC',
        'seishun-aqua': '#5EEAD4',
        'seishun-pink': '#F9A8D4',
        'seishun-deep': '#0284C7',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      letterSpacing: {
        eyebrow: '0.2em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,26,47,0.04), 0 8px 24px -12px rgba(10,26,47,0.10)',
        'card-hover': '0 1px 2px rgba(10,26,47,0.05), 0 16px 40px -16px rgba(10,26,47,0.18)',
        panel: '0 2px 4px rgba(10,26,47,0.03), 0 24px 48px -24px rgba(10,26,47,0.14)',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;