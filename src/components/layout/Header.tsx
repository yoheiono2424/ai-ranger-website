'use client';

import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'トップ' },
    { href: '/news', label: 'お知らせ' },
    { href: '/blog', label: '開発事例' },
    { href: '/about', label: '会社概要' },
    { href: '/contact', label: 'お問い合わせ' },
  ];

  const serviceSubItems = [
    { href: '/service', label: '5レンジャー' },
    { href: '/syssuc', label: 'SysSuc' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center py-2">
            <OptimizedImage
              src="/①Re.haru青ロゴ.png"
              alt="株式会社Re.haru"
              width={160}
              height={60}
              className="object-contain"
              style={{ maxHeight: '48px', width: 'auto' }}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-ai-blue transition-colors duration-200 font-medium"
            >
              トップ
            </Link>
            <Link
              href="/news"
              className="text-gray-700 hover:text-ai-blue transition-colors duration-200 font-medium"
            >
              お知らせ
            </Link>

            {/* サービス詳細ドロップダウン */}
            <div
              className="relative"
              onMouseEnter={() => setIsServiceMenuOpen(true)}
              onMouseLeave={() => setIsServiceMenuOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-ai-blue transition-colors duration-200 font-medium flex items-center gap-1"
              >
                サービス詳細
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isServiceMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* ドロップダウンメニュー */}
              <div
                className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[160px] transition-all duration-200 ${
                  isServiceMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                {serviceSubItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:text-ai-blue hover:bg-gray-50 transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/blog"
              className="text-gray-700 hover:text-ai-blue transition-colors duration-200 font-medium"
            >
              開発事例
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-ai-blue transition-colors duration-200 font-medium"
            >
              会社概要
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-ai-blue transition-colors duration-200 font-medium"
            >
              お問い合わせ
            </Link>
            <Link
              href="/contact"
              className="bg-ai-blue text-white px-6 py-2.5 rounded-full hover:bg-sky-blue transition-colors duration-200 font-medium"
            >
              無料相談する
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="メニューを開く"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute left-0 top-0 w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2.5' : ''}`}></span>
              <span className={`absolute left-0 top-2.5 w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute left-0 top-5 w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <Link
              href="/"
              className="block py-3 text-gray-700 hover:text-ai-blue transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              トップ
            </Link>
            <Link
              href="/news"
              className="block py-3 text-gray-700 hover:text-ai-blue transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              お知らせ
            </Link>

            {/* サービス詳細サブメニュー */}
            <div className="py-3">
              <span className="text-gray-700 font-medium">サービス詳細</span>
              <div className="pl-4 mt-2 border-l-2 border-gray-200">
                {serviceSubItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-gray-600 hover:text-ai-blue transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/blog"
              className="block py-3 text-gray-700 hover:text-ai-blue transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              開発事例
            </Link>
            <Link
              href="/about"
              className="block py-3 text-gray-700 hover:text-ai-blue transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              会社概要
            </Link>
            <Link
              href="/contact"
              className="block py-3 text-gray-700 hover:text-ai-blue transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
            <Link
              href="/contact"
              className="block w-full text-center bg-ai-blue text-white px-6 py-3 rounded-full hover:bg-sky-blue transition-colors duration-200 font-medium mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              無料相談する
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;