'use client';

import Link from 'next/link';
import OptimizedImage from '@/components/common/OptimizedImage';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'トップ' },
    { href: '/news', label: 'お知らせ' },
    { href: '/service', label: 'サービス詳細', hasDropdown: true },
    { href: '/about', label: '会社概要' },
    { href: '/contact', label: 'お問い合わせ' },
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
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.href}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-ai-blue transition-colors duration-200 font-medium py-2 inline-block"
                  >
                    {item.label}
                  </Link>
                  <div className="absolute top-full left-0 pt-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden min-w-[200px] mt-2">
                      <Link
                        href="/service"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-ai-blue transition-colors"
                      >
                        AIレンジャー
                      </Link>
                      <a
                        href="https://drive.google.com/file/d/1r15trpXX_Xk_5zaK3cZlrqoh1krydEJg/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-ai-blue transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span>AIレンジャーTEAMS</span>
                          <span className="ml-2 px-2.5 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-sm animate-pulse">
                            先着5社限定
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-ai-blue transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-ai-blue transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
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