/**
 * セキュリティ関連のユーティリティ関数
 */

/**
 * HTMLエスケープ処理
 * XSS攻撃を防ぐため、ユーザー入力をHTMLとして表示する際に使用
 */
export function escapeHtml(str: string): string {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * 入力値のサニタイゼーション
 * フォーム入力値から危険な文字を除去
 */
export function sanitizeInput(input: string): string {
  // 基本的なサニタイゼーション
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // スクリプトタグを除去
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // iframeを除去
    .replace(/javascript:/gi, '') // javascriptプロトコルを除去
    .replace(/on\w+\s*=/gi, ''); // イベントハンドラを除去
}

/**
 * メールアドレスのバリデーション
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/**
 * 電話番号のバリデーション（日本）
 */
export function validatePhoneNumber(phone: string): boolean {
  // 日本の電話番号形式（ハイフンあり・なし両対応）
  const phoneRegex = /^(0[0-9]{1,4}-?[0-9]{1,4}-?[0-9]{3,4}|0[0-9]{9,10})$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * URLのバリデーション
 */
export function validateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * CSRFトークンの生成（クライアントサイド用）
 */
export function generateCSRFToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}