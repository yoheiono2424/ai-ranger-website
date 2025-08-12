

'use client';

import { useState } from 'react';
import Link from 'next/link';

const PricingDetailSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  const pricingPlans = [
    {
      id: 'mini',
      name: 'AIレンジャーMINI',
      subtitle: 'スモールスタートでアイデアを形に',
      basePrice: '300万円',
      monthlyPrice: '3万円/月',
      description: 'MVP開発に最適',
      features: [
        '開発期間: 1〜2ヶ月',
        '機能大分類: 合計5まで',
        '機能小分類: 合計25まで',
      ],
      examples: [
        '勤怠管理システム',
        'シンプルな予約システム',
        '基本的な在庫管理',
      ],
      color: 'from-gray-400 to-gray-600',
      recommended: false,
    },
    {
      id: 'standard',
      name: 'AIレンジャーSTANDARD',
      subtitle: '本格的なアプリや事業の中核システムに',
      basePrice: '500万円',
      monthlyPrice: '5万円/月',
      description: '最も選ばれているプラン',
      features: [
        '開発期間: 2〜3ヶ月',
        '機能大分類: 合計8まで',
        '機能小分類: 合計40まで',
      ],
      examples: [
        'フリマアプリ',
        '社内DXシステム',
        'WEB・社内連携システム',
      ],
      color: 'from-ai-blue to-sky-blue',
      recommended: true,
    },
    {
      id: 'premium',
      name: 'AIレンジャーPREMIUM',
      subtitle: '複雑で大規模なシステム開発に',
      basePrice: '700万円',
      monthlyPrice: '7万円/月',
      description: '事業の根幹を支える',
      features: [
        '開発期間: 3ヶ月〜',
        '機能大分類: 合計12まで',
        '機能小分類: 合計60まで',
      ],
      examples: [
        '基幹システム',
        '大規模ECプラットフォーム',
        'AI搭載システム',
      ],
      color: 'from-hope-green to-emerald-400',
      recommended: false,
    },
  ];

  const additionalOptions = [
    {
      title: 'AI機能開発（AI小分類1つ追加）',
      price: '50万円',
      description: 'チャットボット、画像認識、データ分析などの高度AI機能',
    },
    {
      title: 'ネイティブアプリ化',
      price: '100万円',
      description: 'iOS/Androidアプリ化し、ストア申請作業まで',
    },
    {
      title: '使い方ガイド（PDF）',
      price: '20万円/1ターゲット',
      description: '管理者向け、利用者向けなど必要に応じたガイド',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">
            料金プラン詳細
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            プロジェクトの規模に応じて、最適なプランをお選びください
          </p>
        </div>

        {/* 料金プランカード */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.recommended ? 'ring-4 ring-ai-blue' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-ai-blue text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  おすすめ
                </div>
              )}
              
              <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {plan.subtitle}
                </p>
                
                <div className="mb-6">
                  <div className="text-3xl font-black text-gray-900">
                    {plan.basePrice}
                  </div>
                  <div className="text-sm text-gray-500">
                    初期開発費用
                  </div>
                  <div className="mt-2 text-lg font-bold text-ai-blue">
                    {plan.monthlyPrice}
                  </div>
                  <div className="text-sm text-gray-500">
                    保守運用費
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-hope-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-xs font-bold text-gray-600 mb-2">開発事例</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {plan.examples.map((example, idx) => (
                      <li key={idx}>・{example}</li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href="/contact"
                  className={`block w-full py-3 rounded-full font-bold transition-all duration-300 text-center ${
                    plan.recommended
                      ? 'bg-ai-blue text-white hover:bg-sky-blue'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  このプランで相談する
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 特別オプション */}
        <div
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            特別オプション
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {additionalOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-ai-blue transition-colors"
              >
                <div className="mb-2">
                  <h4 className="font-bold text-gray-900 mb-1">{option.title}</h4>
                  <span className="text-ai-blue font-bold text-lg">{option.price}</span>
                </div>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 注意事項 */}
        <div
          className="bg-ai-blue/10 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            料金に関する重要事項
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-ai-blue mr-2">•</span>
              お支払いについて：着手時に半金、納品時に半金をご請求させていただきます
            </li>
            <li className="flex items-start">
              <span className="text-ai-blue mr-2">•</span>
              要件定義の時間や検品時間の都合で多少の開発期間のずれが発生する可能性があります
            </li>
            <li className="flex items-start">
              <span className="text-ai-blue mr-2">•</span>
              お見積もりは無料で承っております
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            どのプランが最適かわからない方も、お気軽にご相談ください
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-ai-blue text-white font-bold rounded-full hover:bg-sky-blue transition-all duration-300 transform hover:scale-105"
          >
            無料相談で最適なプランを確認する
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