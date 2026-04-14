import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/types/blog';

interface RelatedArticlesProps {
  articles: Article[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">関連記事</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <RelatedArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

// フォールバックサムネイル
function FallbackThumbnail({ article }: { article: Article }) {
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
    <div className={`w-full h-full bg-gradient-to-br ${gradient} relative flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300`}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
      </div>
      <div className="relative z-10 text-center">
        <div className="inline-block bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full mb-2">
          <span className="text-white text-[10px] font-bold tracking-wider">{categoryLabel}</span>
        </div>
        <div className="text-white text-base font-bold leading-tight line-clamp-2 drop-shadow-md">
          {article.title.replace(/【.*?】/, '').trim()}
        </div>
      </div>
    </div>
  );
}

function RelatedArticleCard({ article }: { article: Article }) {
  const categoryLabel = article.category === 'ai-dx-system' ? 'AI付きDXシステム' : 'DXシステム';
  const categoryColor = article.category === 'ai-dx-system' ? 'bg-purple-600' : 'bg-blue-600';

  return (
    <Link href={`/blog/${article.slug}`} className="group">
      <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
        <div className="relative w-full h-40 overflow-hidden">
          {article.thumbnail_url ? (
            <Image
              src={article.thumbnail_url}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <FallbackThumbnail article={article} />
          )}
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <span className={`${categoryColor} text-white text-xs px-2 py-1 rounded-full inline-block mb-2 w-fit`}>
            {categoryLabel}
          </span>
          <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
            {article.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 flex-1">
            {article.summary}
          </p>
        </div>
      </article>
    </Link>
  );
}
