import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getNewsById, getAdjacentNews } from '@/data/news'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params
  const newsItem = getNewsById(id)
  
  if (!newsItem) {
    notFound()
  }

  const { prev, next } = getAdjacentNews(id)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* パンくずリスト */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              トップ
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/news" className="text-gray-600 hover:text-blue-600">
              お知らせ一覧
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs sm:max-w-none">
              {newsItem.title}
            </span>
          </nav>
        </div>
      </div>

      {/* メインコンテンツ */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* カテゴリバッジ */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            {newsItem.category}
          </span>
        </div>

        {/* 日付 */}
        <time className="block text-gray-600 text-sm mb-4">
          {newsItem.date}
        </time>

        {/* タイトル */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 leading-tight">
          {newsItem.title}
        </h1>

        {/* 本文と画像 */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-700 leading-relaxed">
            {newsItem.content.trim().split('\n\n').map((paragraph, index) => {
              const sectionTitle = paragraph.startsWith('■') ? paragraph.split('\n')[0].replace('■ ', '') : null
              const relatedImages = newsItem.images?.filter(img => 
                img.section === sectionTitle && img.position === 'before'
              ) || []
              const relatedImagesAfter = newsItem.images?.filter(img => 
                img.section === sectionTitle && img.position === 'after'
              ) || []
              
              return (
                <div key={index} className="mb-6">
                  {/* セクション前の画像 */}
                  {relatedImages.map((image, imgIndex) => (
                    <div key={`before-${imgIndex}`} className="my-8">
                      <div className="relative w-full h-auto">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={600}
                          className="w-full h-auto rounded-lg shadow-md"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      {image.caption && (
                        <p className="text-sm text-gray-600 text-center mt-2 italic">
                          {image.caption}
                        </p>
                      )}
                    </div>
                  ))}
                  
                  {/* 段落テキスト */}
                  <div className="whitespace-pre-wrap">
                    {paragraph.split('\n').map((line, lineIndex) => {
                      // Markdownリンクを検出して変換
                      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                      const parts = [];
                      let lastIndex = 0;
                      let match;
                      
                      while ((match = linkRegex.exec(line)) !== null) {
                        // リンク前のテキスト
                        if (match.index > lastIndex) {
                          parts.push(
                            <span key={`text-${lineIndex}-${lastIndex}`}>
                              {line.slice(lastIndex, match.index)}
                            </span>
                          );
                        }
                        
                        // リンク
                        parts.push(
                          <a
                            key={`link-${lineIndex}-${match.index}`}
                            href={match[2]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            {match[1]}
                          </a>
                        );
                        
                        lastIndex = match.index + match[0].length;
                      }
                      
                      // 残りのテキスト
                      if (lastIndex < line.length) {
                        parts.push(
                          <span key={`text-${lineIndex}-${lastIndex}`}>
                            {line.slice(lastIndex)}
                          </span>
                        );
                      }
                      
                      return (
                        <div key={`line-${lineIndex}`}>
                          {parts.length > 0 ? parts : line}
                          {lineIndex < paragraph.split('\n').length - 1 && <br />}
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* セクション後の画像 */}
                  {relatedImagesAfter.map((image, imgIndex) => (
                    <div key={`after-${imgIndex}`} className="my-8">
                      <div className="relative w-full h-auto">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={600}
                          className="w-full h-auto rounded-lg shadow-md"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      {image.caption && (
                        <p className="text-sm text-gray-600 text-center mt-2 italic">
                          {image.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>

        {/* 外部リンク（ある場合） */}
        {newsItem.externalLink && (
          <div className="mb-12 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">関連リンク：</p>
            <a 
              href={newsItem.externalLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all"
            >
              {newsItem.externalLink}
            </a>
          </div>
        )}

        {/* ナビゲーション */}
        <div className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {/* 次の記事（古い記事） */}
            <div className="flex-1">
              {prev ? (
                <Link 
                  href={`/news/${prev.id}`}
                  className="group block p-4 border rounded-lg hover:border-blue-600 transition-colors"
                >
                  <div className="text-xs text-gray-500 mb-1">← 次の記事</div>
                  <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                    {prev.title}
                  </div>
                </Link>
              ) : (
                <div className="p-4"></div>
              )}
            </div>

            {/* 前の記事（新しい記事） */}
            <div className="flex-1">
              {next ? (
                <Link 
                  href={`/news/${next.id}`}
                  className="group block p-4 border rounded-lg hover:border-blue-600 transition-colors text-right"
                >
                  <div className="text-xs text-gray-500 mb-1">前の記事 →</div>
                  <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                    {next.title}
                  </div>
                </Link>
              ) : (
                <div className="p-4"></div>
              )}
            </div>
          </div>

          {/* 一覧に戻るボタン */}
          <div className="text-center mt-8">
            <Link 
              href="/news" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              お知らせ一覧に戻る
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}