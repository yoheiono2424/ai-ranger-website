import Link from 'next/link'
import { getLatestNews } from '@/data/news'
import { isNewArticle } from '@/utils/newsHelpers'

export default function NewsSection() {
  const latestNews = getLatestNews(3) // 最新3件を取得

  if (latestNews.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            お知らせ・メディア掲載
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            株式会社Re.haruに関する最新情報をお届けします
          </p>
        </div>

        {/* ニュースカードグリッド */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {latestNews.map((item, index) => (
            <article 
              key={item.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <Link href={`/news/${item.id}`} className="block h-full">
                <div className="p-6 flex flex-col h-full">
                  {/* ヘッダー部分 */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex flex-col gap-2">
                      {/* カテゴリバッジ */}
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full w-fit">
                        {item.category}
                      </span>
                      {/* 日付 */}
                      <time className="text-gray-500 text-sm">
                        {item.date}
                      </time>
                    </div>
                    {/* NEWバッジ（30日以内の記事） */}
                    {isNewArticle(item.date, 30) && (
                      <span className="inline-block px-2 py-1 text-xs font-bold text-white bg-red-500 rounded animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* タイトル */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 flex-grow">
                    {item.title}
                  </h3>

                  {/* 概要 */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.summary}
                  </p>

                  {/* 詳しく見るリンク */}
                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                    <span>詳しく見る</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* すべて見るボタン */}
        <div className="text-center">
          <Link 
            href="/news" 
            className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            すべてのお知らせを見る
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}