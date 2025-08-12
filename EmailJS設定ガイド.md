# 📧 EmailJS設定ガイド

## 🎯 概要
お問い合わせフォームからメールを送信するための設定方法です。
EmailJSを使うと、サーバー不要で無料でメール送信機能が実装できます。

## 📝 設定手順（15分で完了）

### ステップ1：EmailJSアカウント作成

1. **https://www.emailjs.com/** にアクセス
2. 「Sign Up Free」をクリック
3. メールアドレスとパスワードで登録

### ステップ2：メールサービスを追加

1. ダッシュボードで「Email Services」をクリック
2. 「Add New Service」をクリック
3. **「Gmail」を選択**（推奨）
4. 「Connect Account」でGmailアカウントと連携
5. Service IDをメモ（例：`service_abc123`）

### ステップ3：メールテンプレート作成

1. 「Email Templates」をクリック
2. 「Create New Template」をクリック
3. 以下の内容で設定：

**Subject（件名）:**
```
【お問い合わせ】{{name}}様より
```

**Content（本文）:**
```
新しいお問い合わせが届きました。

■ お客様情報
会社名：{{company}}
お名前：{{name}}
メール：{{email}}
電話番号：{{phone}}

■ お問い合わせ種別
{{inquiryType}}

■ お問い合わせ内容
{{message}}

---
このメールは reharu.com のお問い合わせフォームから送信されました。
```

4. 「To Email」に受信したいメールアドレスを設定
5. 「Save」をクリック
6. Template IDをメモ（例：`template_xyz789`）

### ステップ4：Public Keyを取得

1. 「Account」→「API Keys」
2. Public Keyをコピー（例：`public_key_123abc`）

### ステップ5：.env.localファイル作成

プロジェクトフォルダに`.env.local`ファイルを作成：

```bash
cd /Users/onoyouhei/Desktop/HP/ai-ranger-website
touch .env.local
```

以下の内容を記入：
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_key_123abc
```

### ステップ6：開発サーバー再起動

```bash
# Ctrl+C で一度停止してから
npm run dev
```

## ✅ テスト方法

1. http://localhost:3000/contact にアクセス
2. フォームに入力して送信
3. 設定したメールアドレスに届くか確認

## 📊 無料プラン制限

- **月200通まで無料**
- それ以上は有料プラン

## ⚠️ 注意事項

- `.env.local`ファイルはGitHubにアップロードされません（安全）
- 本番環境（Vercel）では別途環境変数の設定が必要

## 🚀 本番環境（Vercel）での設定

1. Vercelダッシュボード → Settings → Environment Variables
2. 以下の3つを追加：
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
3. 再デプロイ

---

**作成日：2025年8月12日**