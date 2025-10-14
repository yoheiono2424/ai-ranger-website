export type Article = {
  id: string;
  title: string;
  slug: string;
  category: 'ai-dx-system' | 'dx-system';
  industries: string[];
  summary: string;
  content: string;
  thumbnail_url: string | null;
  image_urls: string[] | null;
  seo_keywords: string[] | null;
  scheduled_at: string;
  view_count: number;
  created_at: string;
  updated_at: string;
};

export type CategoryType = 'all' | 'ai-dx-system' | 'dx-system';

export const CATEGORY_LABELS: Record<CategoryType, string> = {
  all: 'すべて',
  'ai-dx-system': 'AI付きDXシステム',
  'dx-system': 'DXシステム',
};

export const INDUSTRIES = [
  '製造業',
  '建設業',
  '飲食業',
  '小売業',
  '不動産業',
  '医療',
  '教育',
  '物流',
  'サービス業',
  'その他',
] as const;

export type Industry = typeof INDUSTRIES[number];
