'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Article, CategoryType, Industry } from '@/types/blog';
import { CATEGORY_LABELS, INDUSTRIES } from '@/types/blog';

interface BlogListSectionProps {
  articles: Article[];
}

const ITEMS_PER_PAGE = 12;

export default function BlogListSection({ articles }: BlogListSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // フィルタリング
  const filteredArticles = articles.filter((article) => {
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const industryMatch = selectedIndustry === 'all' || article.industries.includes(selectedIndustry);
    return categoryMatch && industryMatch;
  });

  // ページネーション
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // フィルタ変更時にページをリセット
  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleIndustryChange = (industry: Industry | 'all') => {
    setSelectedIndustry(industry);
    setCurrentPage(1);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* フィルタエリア */}
        <div className="mb-12 space-y-6">
          {/* カテゴリフィルタ */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">カテゴリ</h3>
            <div className="flex flex-wrap gap-3">
              {(Object.keys(CATEGORY_LABELS) as CategoryType[]).map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  {CATEGORY_LABELS[category]}
                </button>
              ))}
            </div>
          </div>

          {/* 業種フィルタ */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">業種</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleIndustryChange('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedIndustry === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                }`}
              >
                すべて
              </button>
              {INDUSTRIES.map((industry) => (
                <button
                  key={industry}
                  onClick={() => handleIndustryChange(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedIndustry === industry
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 記事数表示 */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredArticles.length}件の記事が見つかりました
          </p>
        </div>

        {/* 記事一覧 */}
        {paginatedArticles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {paginatedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* ページネーション */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  前へ
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  次へ
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">該当する記事が見つかりませんでした。</p>
          </div>
        )}
      </div>
    </section>
  );
}

// フォールバックサムネイル（業種・カテゴリに応じたグラデーション）
function FallbackThumbnail({ article }: { article: Article }) {
  // 業種ごとにグラデーションを分ける
  const industryGradients: Record<string, string> = {
    '全業種': 'from-ai-blue via-sky-blue to-purple-500',
    '製造業': 'from-amber-500 via-orange-500 to-red-500',
    '建設業': 'from-yellow-500 via-orange-500 to-amber-600',
    '飲食店': 'from-rose-500 via-pink-500 to-red-500',
    '飲食業': 'from-rose-500 via-pink-500 to-red-500',
    '美容室': 'from-pink-400 via-rose-400 to-fuchsia-500',
    '小売': 'from-purple-500 via-pink-500 to-rose-500',
    '小売業': 'from-purple-500 via-pink-500 to-rose-500',
    '不動産': 'from-emerald-500 via-teal-500 to-cyan-500',
    '不動産業': 'from-emerald-500 via-teal-500 to-cyan-500',
    'クリニック': 'from-sky-400 via-blue-500 to-indigo-500',
    '医療': 'from-sky-400 via-blue-500 to-indigo-500',
    '介護': 'from-green-400 via-emerald-500 to-teal-500',
    '学習塾': 'from-indigo-500 via-blue-500 to-sky-500',
    '教育': 'from-indigo-500 via-blue-500 to-sky-500',
    '運送業': 'from-blue-500 via-cyan-500 to-teal-500',
    '物流': 'from-blue-500 via-cyan-500 to-teal-500',
    '農業': 'from-lime-500 via-green-500 to-emerald-500',
    'ホテル': 'from-violet-500 via-purple-500 to-fuchsia-500',
    '人材派遣': 'from-cyan-500 via-blue-500 to-indigo-500',
  };

  const primaryIndustry = article.industries[0] || '全業種';
  const gradient = industryGradients[primaryIndustry] || 'from-ai-blue via-sky-blue to-purple-500';
  const categoryLabel = article.category === 'ai-dx-system' ? 'AI × DX' : 'DX';

  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} relative flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-300`}>
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl transform translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
      </div>

      {/* 前景コンテンツ */}
      <div className="relative z-10 text-center">
        <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
          <span className="text-white text-xs font-bold tracking-widest">{categoryLabel}</span>
        </div>
        <div className="text-white text-xl font-bold leading-tight line-clamp-3 drop-shadow-md">
          {article.title.replace(/【.*?】/, '').trim()}
        </div>
        <div className="mt-3 text-white/90 text-xs font-medium">
          {primaryIndustry}
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  const categoryLabel = article.category === 'ai-dx-system' ? 'AI付きDXシステム' : 'DXシステム';
  const categoryColor = article.category === 'ai-dx-system' ? 'bg-purple-600' : 'bg-blue-600';

  return (
    <Link href={`/blog/${article.slug}`} className="group">
      <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
        {/* サムネイル */}
        <div className="relative w-full h-48 overflow-hidden">
          {article.thumbnail_url ? (
            <Image
              src={article.thumbnail_url}
              alt={`${article.industries.join('・')}のDXシステム開発事例 - ${article.title.replace(/【.*?】/, '').trim()}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <FallbackThumbnail article={article} />
          )}
        </div>

        {/* コンテンツ */}
        <div className="p-6 flex-1 flex flex-col">
          {/* カテゴリと業種 */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`${categoryColor} text-white text-xs px-3 py-1 rounded-full`}>
              {categoryLabel}
            </span>
            {article.industries.slice(0, 2).map((industry) => (
              <span key={industry} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                {industry}
              </span>
            ))}
          </div>

          {/* 公開日 */}
          <p className="text-sm text-gray-500 mb-2">
            {new Date(article.scheduled_at).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          {/* タイトル */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* 概要 */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
            {article.summary}
          </p>

          {/* 続きを読むリンク */}
          <div className="text-blue-600 text-sm font-semibold group-hover:underline">
            続きを読む →
          </div>
        </div>
      </article>
    </Link>
  );
}
