'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface ArticleContentProps {
  content: string;
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // 見出し - 大きく目立つデザイン
          h1: ({ ...props }) => (
            <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 pb-3 border-b-4 border-blue-600 text-gray-900" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5 pb-2 border-b-2 border-gray-300 text-gray-900" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-gray-900 flex items-center before:content-['▶'] before:mr-2 before:text-blue-600" {...props} />
          ),
          h4: ({ ...props }) => (
            <h4 className="text-lg md:text-xl font-semibold mt-6 mb-3 text-gray-800" {...props} />
          ),

          // 段落 - 読みやすい行間
          p: ({ ...props }) => (
            <p className="mb-6 leading-relaxed text-gray-700 text-base md:text-lg" {...props} />
          ),

          // リスト - 視覚的に強調
          ul: ({ ...props }) => (
            <ul className="mb-6 space-y-3 pl-6" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="mb-6 space-y-3 pl-6" {...props} />
          ),
          li: ({ ...props }) => (
            <li className="ml-2 pl-2 text-gray-700 leading-relaxed relative before:absolute before:left-[-1.5rem] before:text-blue-600 before:font-bold" {...props} />
          ),

          // テーブル - 見やすいデザイン
          table: ({ ...props }) => (
            <div className="my-8 overflow-x-auto rounded-lg shadow-md">
              <table className="min-w-full divide-y divide-gray-300 border border-gray-300" {...props} />
            </div>
          ),
          thead: ({ ...props }) => (
            <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white" {...props} />
          ),
          tbody: ({ ...props }) => (
            <tbody className="bg-white divide-y divide-gray-200" {...props} />
          ),
          tr: ({ ...props }) => (
            <tr className="hover:bg-blue-50 transition-colors" {...props} />
          ),
          th: ({ ...props }) => (
            <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider" {...props} />
          ),
          td: ({ ...props }) => (
            <td className="px-6 py-4 text-sm text-gray-700" {...props} />
          ),

          // 強調 - 太字を目立たせる
          strong: ({ ...props }) => (
            <strong className="font-bold text-gray-900 bg-yellow-100 px-1 rounded" {...props} />
          ),

          // リンク
          a: ({ ...props }) => (
            <a className="text-blue-600 hover:text-blue-800 underline font-medium" target="_blank" rel="noopener noreferrer" {...props} />
          ),

          // 引用
          blockquote: ({ ...props }) => (
            <blockquote className="border-l-4 border-blue-600 bg-blue-50 pl-6 py-4 my-6 italic text-gray-700 rounded-r-lg" {...props} />
          ),

          // コードブロック
          code: ({ inline, ...props }: any) => {
            if (inline) {
              return <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono text-red-600" {...props} />;
            }
            return (
              <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm font-mono" {...props} />
            );
          },

          // 水平線 - セクション区切り
          hr: ({ ...props }) => (
            <hr className="my-10 border-t-2 border-gray-300" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
