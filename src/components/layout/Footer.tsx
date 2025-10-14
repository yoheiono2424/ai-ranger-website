import Link from 'next/link';
import Image from 'next/image';
import SmoothScrollLink from '@/components/common/SmoothScrollLink';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/①Re.haru青ロゴ.png"
                  alt="Re.haru"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              「Return青春」の理念のもと、<br />
              新しいチャレンジを全力でサポートします。
            </p>
            <p className="text-sm text-gray-400">
              株式会社Re.haru<br />
              〒860-0047<br />
              熊本市西区春日1-14-3 ザ・熊本タワー2901
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/service" className="text-gray-300 hover:text-white transition-colors">
                  AIレンジャー
                </Link>
              </li>
              <li>
                <SmoothScrollLink href="/service#price" className="text-gray-300 hover:text-white transition-colors">
                  料金プラン
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink href="/service#results" className="text-gray-300 hover:text-white transition-colors">
                  開発実績
                </SmoothScrollLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">会社情報</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                  お知らせ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  開発事例
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Re.haru Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;