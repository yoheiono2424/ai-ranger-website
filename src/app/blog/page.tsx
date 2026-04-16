import { Metadata } from 'next';
import { supabase } from '@/lib/supabase/client';
import BlogHeroSection from '@/components/sections/blog/BlogHeroSection';
import BlogListSection from '@/components/sections/blog/BlogListSection';
import type { Article } from '@/types/blog';

export const metadata: Metadata = {
  title: '開発ブログ | 5レンジャー - 株式会社Re.haru',
  description:
    'システム開発・AI活用・DX推進に関する最新情報を発信。製造業、建設業、飲食業など業種別の課題解決のヒントから、業務改善・コスト削減に役立つ情報をお届けします。',
  keywords: [
    '開発ブログ',
    'システム開発',
    'AI開発',
    'DX',
    '業務効率化',
    '社内DX',
    '5レンジャー',
    '製造業DX',
    '建設業DX',
  ],
  openGraph: {
    title: '開発ブログ | 5レンジャー',
    description: 'システム開発・AI活用・DX推進に関する最新情報を発信',
    type: 'website',
    url: 'https://www.reharu.com/blog',
  },
};

// ISR: 1時間ごとに再検証（3600秒）
export const revalidate = 3600;

async function getArticles(): Promise<Article[]> {
  try {
    // ビルド時やSupabase未設定時は空配列を返す
    if (!supabase) {
      console.log('Supabase client not initialized, returning empty array');
      return [];
    }

    const isDevelopment = process.env.NODE_ENV === 'development';
    const now = new Date().toISOString();
    const maxDate = '9999-12-31T23:59:59.999Z'; // ISO 8601形式で最大日時
    const filterValue = isDevelopment ? maxDate : now;

    console.log('========== getArticles DEBUG ==========');
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('isDevelopment:', isDevelopment);
    console.log('now:', now);
    console.log('maxDate:', maxDate);
    console.log('filterValue (scheduled_at <=):', filterValue);

    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .lte('scheduled_at', filterValue) // 開発環境では全記事、本番環境では公開日時判定
      .order('scheduled_at', { ascending: false });

    console.log('Supabase error:', error);
    console.log('Supabase data:', JSON.stringify(data, null, 2));
    console.log('Fetched articles count:', data?.length || 0);
    console.log('=======================================');

    if (error) {
      console.error('Failed to fetch articles:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getArticles:', error);
    return [];
  }
}

export default async function BlogPage() {
  const articles = await getArticles();

  // 構造化データ（JSON-LD）- パンくずリスト
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'トップ',
        item: 'https://www.reharu.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '開発ブログ',
        item: 'https://www.reharu.com/blog',
      },
    ],
  };

  return (
    <>
      {/* 構造化データ（JSON-LD） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <BlogHeroSection />
      <BlogListSection articles={articles} />
    </>
  );
}
