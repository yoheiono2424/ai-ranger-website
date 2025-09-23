'use client';

import { useState } from 'react';
import Link from 'next/link';

const PricingDetailSection = () => {
  const [showCalculation, setShowCalculation] = useState(false);

  // 基本料金体系
  const basePricing = {
    basePrice: 300,
    includeCount: 30,
    additionalPrice: 10,
  };


  const additionalOptions = [
    {
      title: 'AI機能開発',
      price: '50万円/機能',
      maintenance: '+1万円/月',
      description: 'チャットボット、画像認識、データ分析などの高度なAI機能',
      icon: '🤖',
    },
    {
      title: 'ネイティブアプリ化',
      price: '100万円',
      maintenance: 'なし',
      description: 'iOS/Androidアプリ化、ストア申請作業込み',
      icon: '📱',
    },
    {
      title: '外部システム連携',
      price: '30万円/連携',
      maintenance: 'なし',
      description: '外部API連携、既存システムとのデータ連携などを実装します',
      icon: '🔗',
    },
  ];

  const runningCosts = [
    {
      category: '保守費用',
      items: [
        { name: '基本保守費用', price: '開発費用の1%/月', note: '例：300万円の開発→3万円/月' },
        { name: 'AI保守費用', price: '1万円/月・機能', note: 'AI機能利用時のみ' },
      ]
    },
    {
      category: 'サーバー費用',
      items: [
        { name: 'データサーバー', price: '$25/月〜', note: '従量課金あり' },
        { name: '公開サーバー', price: '$20/月〜', note: 'WEB公開時' },
        { name: 'AIサーバー', price: '$59/月〜', note: 'AI機能利用時' },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">
            革命的な料金体系
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            必要な機能数に応じた透明性の高い料金設定
          </p>
        </div>

        {/* 基本料金説明 */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-ai-blue to-sky-blue p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">AIレンジャー 基本料金体系</h3>
              <p className="text-white/90">機能数ベースの明確な料金設定</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-ai-blue/10 rounded-xl p-6">
                    <p className="text-sm text-gray-600 mb-2">基本料金</p>
                    <p className="text-4xl font-black text-ai-blue mb-2">300万円</p>
                    <p className="text-sm text-gray-700">機能数30個まで含む</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-hope-green/10 rounded-xl p-6">
                    <p className="text-sm text-gray-600 mb-2">追加料金</p>
                    <p className="text-4xl font-black text-hope-green mb-2">10万円</p>
                    <p className="text-sm text-gray-700">31個目以降（1個あたり）</p>
                  </div>
                </div>
              </div>

              {/* 料金計算式 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">料金計算式</h4>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-mono text-sm text-gray-700">
                    総額 = 300万円 + (機能数 - 30) × 10万円
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    ※機能数が30個以下の場合は一律300万円
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* 特別オプション */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            特別オプション
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <div className="text-4xl mb-4 text-center">{option.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2 text-center">{option.title}</h4>
                <div className="text-center mb-4">
                  <span className="text-2xl font-black text-ai-blue">{option.price}</span>
                  {option.maintenance !== 'なし' && (
                    <p className="text-sm text-gray-500 mt-1">
                      保守: {option.maintenance}
                    </p>
                  )}
                </div>
                <p className="text-sm text-gray-600 text-center">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ランニングコスト */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            ランニングコスト
          </h3>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 divide-x divide-gray-200">
              {runningCosts.map((cost, index) => (
                <div key={index} className="p-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-center">
                    {cost.category}
                  </h4>
                  <div className="space-y-3">
                    {cost.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-medium text-gray-700">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.note}</p>
                        </div>
                        <span className="text-sm font-bold text-ai-blue whitespace-nowrap ml-4">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-4">
              <p className="text-xs text-gray-600 text-center">
                ※サーバー費用は各サーバー会社から直接請求となります
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            まずは無料でお見積もり・ご相談を承ります
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-ai-blue text-white font-bold rounded-full hover:bg-sky-blue transition-all duration-300 transform hover:scale-105"
          >
            無料お見積もりを依頼する
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingDetailSection;