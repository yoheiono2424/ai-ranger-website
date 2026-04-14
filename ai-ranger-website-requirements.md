# AI Ranger Website 要件定義書

## 1. プロジェクト概要
株式会社Re.haruのコーポレートサイト。「Return青春」を企業理念として、主力サービス「5レンジャー（一律500万円のシステム開発）」への問い合わせ最大化が最大の目的。

## 2. 技術スタック ✅
- フレームワーク: Next.js 15 (App Router)
- スタイリング: Tailwind CSS
- アニメーション: Framer Motion
- デプロイ: Vercel
- バックエンド: Supabase
- メール送信: EmailJS
- アクセス解析: Google Analytics 4 (G-FL2R2EK4DM)
- 検索: Google Search Console（接続済み）

## 3. ページ構成

### 3.1 トップページ (/) ✅
- HeroSection: メインビジュアル
- NewsSection: お知らせ
- ProblemSection: 課題提起
- ReturnSeishunVisionSection: Return青春ビジョン
- ServiceIntroSection: サービス紹介（5レンジャー）
- SuccessStoriesSection: 成功事例
- CTASection: お問い合わせ誘導

### 3.2 5レンジャーページ (/service) ✅
- ServiceHeroSection: サービス概要
- ProblemSolutionSection: 課題と解決策
- ServiceOverviewSection: サービスの特徴
- AIRangerDetailSection: 5レンジャーの詳細
- ProjectResultsSection: プロジェクト実績
- PricingDetailSection: 詳細料金プラン
- FAQSection: よくある質問

### 3.3 会社概要ページ (/about) ✅
- CompanyInfoSection: 会社情報テーブル
- 企業理念セクション: Return青春ロゴ + シンプルメッセージ + CTAボタン

### 3.4 お問い合わせページ (/contact) ✅
- ContactHeroSection: ヘッダー
- ContactFormSection: お問い合わせフォーム（5レンジャーについて / その他）

### 3.5 ブログ (/blog) ✅
- 記事一覧表示（Supabase連携）
- カテゴリ・業種フィルタリング
- 記事詳細ページ (/blog/[slug])
- ISR（1時間ごと再検証）

### 3.6 お知らせ (/news) ✅
- お知らせ一覧・詳細ページ

### 3.7 プライバシーポリシー (/privacy-policy) ✅

## 4. 共通コンポーネント

### 4.1 Header ✅
- ロゴ
- ナビゲーション（トップ、お知らせ、サービス詳細、開発事例、会社概要、お問い合わせ）
- サービス詳細は/serviceへの直リンク

### 4.2 Footer ✅
- サービスリンク（5レンジャー、料金プラン、開発実績）
- 会社情報リンク
- お問い合わせリンク

## 5. SEO・メタデータ ✅
- title: 「株式会社Re.haru | Return青春 - テクノロジーで挑戦を支援」
- description: 「テクノロジーの力ですべての企業にReturn青春をお届けします。」
- OpenGraph設定
- JSON-LD構造化データ（Organization + Article + BreadcrumbList）
- サイトマップ自動生成（ISR 1時間更新）
- robots.txt設定済み
- Google Analytics 4 埋め込み済み
- Google Search Console接続済み・サイトマップ送信済み

## 6. SEO記事量産パイプライン 🚧【実装中】

### 6.1 keywordsテーブル（Supabase） ⏳
- ロングテールキーワード500語以上をストック
- 業種 × 課題 × 修飾語（AI含む）の組み合わせで自動生成
- status管理：pending → generated → published

### 6.2 記事生成パイプライン ⏳
- Claude Codeが直接記事を生成（API課金なし）
- keywordsテーブルからpendingを取得 → 記事生成 → articlesテーブルにINSERT
- 1日3〜5本 × 半年 = 500〜900本目標
- 全記事から5レンジャー・お問い合わせへ内部リンク

### 6.3 月次レポート自動化 ⏳
- Search Console + Analytics データを自動集計

## 7. 会社情報
- 社名: 株式会社Re.haru
- 設立: 2020年10月20日
- 代表取締役: 小野 陽平
- 住所: 〒860-0047 熊本県熊本市西区春日1-14-3 ザ・熊本タワー2901
- 電話番号: 096-327-9339
- 事業内容: 百均価格設計による一律料金システム開発「5レンジャー」

---

**最終更新日**: 2026年4月
