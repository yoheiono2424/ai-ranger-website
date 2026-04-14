'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

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
          h1: ({ ...props }) => (
            <h1 className="text-3xl md:text-4xl font-bold mt-16 mb-8 pb-4 border-b-4 border-ai-blue text-gray-900" {...props} />
          ),
          h2: ({ ...props }) => (
            <div className="mt-14 mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 pl-4 border-l-4 border-ai-blue py-2" {...props} />
            </div>
          ),
          h3: ({ ...props }) => (
            <h3 className="text-lg md:text-xl font-bold mt-8 mb-4 text-gray-900 bg-gray-50 px-4 py-3 rounded-lg" {...props} />
          ),
          h4: ({ ...props }) => (
            <h4 className="text-base md:text-lg font-semibold mt-6 mb-3 text-gray-800" {...props} />
          ),

          p: ({ ...props }) => (
            <p className="mb-6 leading-[1.9] text-gray-700 text-base" {...props} />
          ),

          ul: ({ ...props }) => (
            <ul className="mb-8 space-y-3 pl-0" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="mb-8 space-y-3 pl-0" {...props} />
          ),
          li: ({ ...props }) => (
            <li className="flex items-start gap-3 text-gray-700 leading-relaxed pl-0 ml-0" style={{ listStyle: 'none' }}>
              <svg className="w-5 h-5 text-ai-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span {...props} />
            </li>
          ),

          table: ({ ...props }) => (
            <div className="my-10 overflow-x-auto rounded-xl shadow-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200" {...props} />
            </div>
          ),
          thead: ({ ...props }) => (
            <thead className="bg-gradient-to-r from-ai-blue to-sky-blue" {...props} />
          ),
          tbody: ({ ...props }) => (
            <tbody className="bg-white divide-y divide-gray-100" {...props} />
          ),
          tr: ({ ...props }) => (
            <tr className="hover:bg-blue-50/50 transition-colors" {...props} />
          ),
          th: ({ ...props }) => (
            <th className="px-6 py-4 text-left text-sm font-bold text-white tracking-wider" {...props} />
          ),
          td: ({ ...props }) => (
            <td className="px-6 py-4 text-sm text-gray-700" {...props} />
          ),

          strong: ({ children, ...props }) => {
            const text = String(children);
            if (text.includes('500万円') || text.includes('80〜90%') || text.includes('2〜6ヶ月')) {
              return <strong className="font-bold text-ai-blue" {...props}>{children}</strong>;
            }
            return <strong className="font-bold text-gray-900" {...props}>{children}</strong>;
          },

          a: ({ href, children, ...props }) => {
            if (href?.startsWith('/')) {
              return (
                <Link href={href} className="text-ai-blue hover:text-sky-blue underline decoration-2 underline-offset-2 font-medium transition-colors" {...props}>
                  {children}
                </Link>
              );
            }
            return (
              <a className="text-ai-blue hover:text-sky-blue underline font-medium" target="_blank" rel="noopener noreferrer" href={href} {...props}>
                {children}
              </a>
            );
          },

          blockquote: ({ ...props }) => (
            <div className="my-10 bg-gradient-to-r from-ai-blue/5 to-sky-blue/5 border-l-4 border-ai-blue rounded-r-xl p-6 md:p-8">
              <blockquote className="text-gray-800 text-base md:text-lg leading-relaxed font-medium not-italic [&>p]:mb-0" {...props} />
            </div>
          ),

          code: ({ inline, ...props }: any) => {
            if (inline) {
              return <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-ai-blue" {...props} />;
            }
            return (
              <code className="block bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-6 text-sm font-mono" {...props} />
            );
          },

          hr: () => (
            <div className="my-12 flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
