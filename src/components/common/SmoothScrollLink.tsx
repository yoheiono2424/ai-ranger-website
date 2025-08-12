'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ 
  href, 
  children, 
  className,
  onClick 
}) => {
  useEffect(() => {
    // ページロード時にハッシュがある場合のスクロール処理
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80; // ヘッダーの高さ分のオフセット
          const top = element.offsetTop - offset;
          window.scrollTo({
            top: top,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 同一ページ内のハッシュリンクの場合
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // ヘッダーの高さ分のオフセット
        const top = element.offsetTop - offset;
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }
    }
    // カスタムonClickハンドラーがある場合は実行
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default SmoothScrollLink;