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

function RelatedArticleCard({ article }: { article: Article }) {
  const categoryLabel = article.category === 'ai-dx-system' ? 'AI付きDXシステム' : 'DXシステム';
  const categoryColor = article.category === 'ai-dx-system' ? 'bg-purple-600' : 'bg-blue-600';

  return (
    <Link href={`/blog/${article.slug}`} className="group">
      <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
        <div className="relative w-full h-40 bg-gray-200">
          {article.thumbnail_url ? (
            <Image
              src={article.thumbnail_url}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
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
