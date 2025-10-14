import { Metadata } from 'next';
import { supabase } from '@/lib/supabase/client';
import BlogHeroSection from '@/components/sections/blog/BlogHeroSection';
import BlogListSection from '@/components/sections/blog/BlogListSection';
import type { Article } from '@/types/blog';

export const metadata: Metadata = {
  title: 'DX開発事例 | AIレンジャー - 株式会社Re.haru',
  description:
    'AI技術を活用した社内DXシステム開発の事例をご紹介。製造業、建設業、飲食業など、業種別の課題解決ストーリーから御社に最適なソリューションを見つけてください。',
  keywords: [
    'DX開発事例',
    'DX事例',
    'AI開発',
    'システム開発',
    '業務効率化',
    '社内DX',
    'AIレンジャー',
    '製造業DX',
    '建設業DX',
  ],
  openGraph: {
    title: 'DX開発事例 | AIレンジャー',
    description: 'AI技術を活用した社内DXシステム開発の事例をご紹介',
    type: 'website',
    url: 'https://reharu.com/blog',
  },
};

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
        item: 'https://reharu.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '開発事例',
        item: 'https://reharu.com/blog',
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
