import Link from 'next/link'
import { getAllNews } from '@/data/news'
import { isNewArticle } from '@/utils/newsHelpers'

export default function NewsListPage() {
  const newsItems = getAllNews()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダーセクション */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            お知らせ・メディア掲載
          </h1>
          <p className="text-center text-blue-100 max-w-2xl mx-auto">
            株式会社Re.haruに関する最新情報、プレスリリース、メディア掲載情報をお届けします
          </p>
        </div>
      </div>

      {/* お知らせリスト */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {newsItems.length > 0 ? (
            <div className="space-y-6">
              {newsItems.map((item) => (
                <article 
                  key={item.id} 
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <Link href={`/news/${item.id}`} className="block p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        {/* カテゴリバッジ */}
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                          {item.category}
                        </span>
                        {/* 日付 */}
                        <time className="text-gray-500 text-sm">
                          {item.date}
                        </time>
                      </div>
                      {/* 新着バッジ（30日以内の記事） */}
                      {isNewArticle(item.date, 30) && (
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    
                    {/* タイトル */}
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {item.title}
                    </h2>
                    
                    {/* 概要 */}
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                      {item.summary}
                    </p>
                    
                    {/* 詳しく見るリンク */}
                    <div className="flex items-center text-blue-600 font-medium hover:text-blue-700">
                      <span>詳しく見る</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">現在、お知らせはありません。</p>
            </div>
          )}

          {/* ページネーション（将来的に実装） */}
          {newsItems.length > 10 && (
            <div className="mt-12 text-center text-gray-500 text-sm">
              {/* 将来的にページネーション機能を追加予定 */}
            </div>
          )}
        </div>
      </div>

      {/* トップに戻るボタン */}
      <div className="container mx-auto px-4 pb-12">
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}