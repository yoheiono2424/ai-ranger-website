/**
 * お知らせ記事が「新着」かどうかを判定する
 * @param dateString - 記事の日付（形式: "2025.09.08"）
 * @param daysThreshold - 新着とみなす日数（デフォルト: 30日）
 * @returns 新着の場合true
 */
export function isNewArticle(dateString: string, daysThreshold: number = 30): boolean {
  // 日付文字列を解析（"2025.09.08" → "2025-09-08"）
  const formattedDate = dateString.replace(/\./g, '-');
  const articleDate = new Date(formattedDate);
  const today = new Date();
  
  // 時刻をリセットして日付のみで比較
  today.setHours(0, 0, 0, 0);
  articleDate.setHours(0, 0, 0, 0);
  
  // 日数差を計算
  const diffTime = today.getTime() - articleDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  // 記事が未来の日付の場合も新着として扱う
  // （例：予定されているプレスリリースなど）
  if (diffDays < 0) {
    return true;
  }
  
  // 指定日数以内なら新着
  return diffDays <= daysThreshold;
}

/**
 * デバッグ用：記事の経過日数を取得
 * @param dateString - 記事の日付（形式: "2025.09.08"）
 * @returns 経過日数（未来の場合は負の値）
 */
export function getDaysAgo(dateString: string): number {
  const formattedDate = dateString.replace(/\./g, '-');
  const articleDate = new Date(formattedDate);
  const today = new Date();
  
  today.setHours(0, 0, 0, 0);
  articleDate.setHours(0, 0, 0, 0);
  
  const diffTime = today.getTime() - articleDate.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}