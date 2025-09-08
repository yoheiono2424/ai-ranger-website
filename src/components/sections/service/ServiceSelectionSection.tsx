'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ServiceSelectionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          サービスを選択してください
        </h2>
        <p className="text-center text-gray-600 mb-12">
          お客様のニーズに合わせて、2つのサービスをご用意しています
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* AIレンジャー */}
          <Link href="#airanger-detail" className="block group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <div className="p-8">
                <div className="text-center mb-6">
                  <Image
                    src="/①Re.haru青ロゴ.png"
                    alt="AIレンジャー"
                    width={200}
                    height={80}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    AIレンジャー
                  </h3>
                  <p className="text-lg text-gray-700 font-semibold">
                    単発のシステム開発
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">必要な時に必要な分だけ開発</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">300万円から始められる</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">開発費用1/5、期間1/3</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">納品して完了</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">
                    300万円〜
                  </p>
                  <p className="text-sm text-gray-600">
                    （単発開発）
                  </p>
                </div>
                
                <div className="mt-6 text-center">
                  <span className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full group-hover:bg-blue-700 transition-colors">
                    詳細を見る →
                  </span>
                </div>
              </div>
            </div>
          </Link>
          
          {/* AIレンジャーTEAMS */}
          <a 
            href="https://drive.google.com/file/d/1r15trpXX_Xk_5zaK3cZlrqoh1krydEJg/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="block group" 
            title="AIレンジャーTEAMS - 業界の常識を覆す革命"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border-2 border-purple-200">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="inline-block px-4 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                  先着5社限定
                </span>
              </div>
              
              <div className="p-8 pt-12">
                <div className="text-center mb-6">
                  <Image
                    src="/news/2025-09-08/teams-logo.png"
                    alt="AIレンジャーTEAMS - 業界の常識を覆す革命"
                    width={200}
                    height={100}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">
                    AIレンジャーTEAMS
                  </h3>
                  <p className="text-lg text-gray-700 font-semibold">
                    月額制の継続パートナー
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">システム開発無制限</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">AI活用支援・DXコンサル</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">保守・運用・改修込み</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">社内IT部門として機能</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">
                    月額50万円
                  </p>
                  <p className="text-sm text-gray-600">
                    （初期費用0円）
                  </p>
                </div>
                
                <div className="mt-6 text-center">
                  <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full group-hover:opacity-90 transition-opacity">
                    詳細を見る →
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            どちらのサービスが最適かお悩みの方は、お気軽にご相談ください
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            無料相談はこちら
          </Link>
        </div>
      </div>
    </section>
  )
}