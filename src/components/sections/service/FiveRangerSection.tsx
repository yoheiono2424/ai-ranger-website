
'use client';

import { useState } from 'react';
import Link from 'next/link';

const FiveRangerSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  const plans = [
    {
      id: '3ranger',
      name: '3レンジャー',
      price: '300万円',
      monthlyFee: '2万円/月',
      description: 'スモールスタートでアイデアを形にするMVP開発に最適',
      developmentPeriod: '3〜5ヶ月',
      majorCategories: '10まで',
      minorCategories: '50まで',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      id: '5ranger',
      name: '5レンジャー',
      price: '500万円',
      monthlyFee: '3万円/月',
      description: '本格的なアプリや事業の中核システムに最適なプラン',
      developmentPeriod: '5〜7ヶ月',
      majorCategories: '15まで',
      minorCategories: '75まで',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: '7ranger',
      name: '7レンジャー',
      price: '700万円',
      monthlyFee: '5万円/月',
      description: '複雑で大規模なシステム開発に事業の根幹を支える',
      developmentPeriod: '6ヶ月〜',
      majorCategories: '20まで',
      minorCategories: '100まで',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const comparisons = [
    { feature: '開発スピード', aiRanger: '◎ 最短1ヶ月', fiveRanger: '○ 最短4ヶ月' },
    { feature: 'カスタマイズ性', aiRanger: '◎ 非常に高い', fiveRanger: '△ 制限あり' },
    { feature: '動作スピード', aiRanger: '◎ 速い', fiveRanger: '○ 問題ないレベル' },
    { feature: 'メンテナンス性', aiRanger: '△ 高度なメンテナンスが必要', fiveRanger: '◎ 容易な為保守費用が安い' },
    { feature: 'スマホアプリ化', aiRanger: '× 別料金', fiveRanger: '◎ プラン内に含む' },
  ];

  const advantages = [
    { 
      title: '圧倒的な低コスト',
      description: 'AIレンジャーの最大40%削減を実現。予算が限られているスタートアップに最適',
      icon: '💰',
      highlight: true
    },
    {
      title: '予算管理しやすい',
      description: 'サーバー費用は固定プラン。予期せぬ高額請求の心配一切なし',
      icon: '📊',
      highlight: true
    },
    {
      title: 'アプリ化も無料',
      description: 'iOS/Androidアプリ化がプラン料金に含まれているため追加費用なし',
      icon: '📱'
    },
    {
      title: '保守費用も格安',
      description: 'メンテナンスが容易なため、月額保守費用もAIレンジャーより安価',
      icon: '🔧'
    },
  ];

  return (
    <>
      <section id="five-ranger" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          {/* 予算重視の訴求セクション */}
          <div className="bg-gradient-to-r from-red-100 via-yellow-100 to-green-100 rounded-3xl p-8 mb-12">
            <div
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white px-4 md:px-6 py-3 rounded-full shadow-lg mb-4">
                <div className="text-xl md:text-2xl">💰</div>
                <span className="text-sm md:text-lg font-bold text-orange-600 whitespace-nowrap">
                  さらに予算を抑えたい方へ
                </span>
                <div className="text-xl md:text-2xl">💰</div>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-2">
                ノーコード開発で実現する
              </h2>
              <p className="text-xl md:text-2xl font-bold text-orange-600 mb-4">
                超コストパフォーマンス開発
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white px-4 py-2 rounded-full shadow">
                  <span className="text-gray-600">🔥 機能数</span>
                  <span className="font-bold text-orange-600 ml-2">2倍でも低価格</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow">
                  <span className="text-gray-600">🛡️ サーバー費用</span>
                  <span className="font-bold text-orange-600 ml-2">固定プラン</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow">
                  <span className="text-gray-600">📱 アプリ化</span>
                  <span className="font-bold text-orange-600 ml-2">無料</span>
                </div>
              </div>
            </div>
          </div>

          {/* メインタイトル */}
          <div
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="text-4xl">🦸</div>
              <h2 className="text-2xl md:text-4xl font-black text-gray-900">
                5レンジャー
              </h2>
              <div className="text-4xl">🦸‍♀️</div>
            </div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              ノーコード開発でさらなる低価格プラン<br />
              プログラミング不要で業務効率化を実現
            </p>
          </div>

        {/* 開発予算に合わせて選択 */}
        <div
          className="mb-16"
        >
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-10 rounded-3xl"></div>
            <div className="relative bg-gradient-to-br from-white via-orange-50 to-yellow-50 rounded-3xl p-10 md:p-16 shadow-2xl border-2 border-orange-200">
              
              {/* タイトル部分 */}
              <div className="text-center mb-12">
                <div
                  className="inline-block"
                >
                  <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">
                    <span className="inline-block">開発予算に合わせて</span>
                    <span className="text-orange-500 block md:inline">選択できる</span>
                  </h3>
                  <p className="text-sm md:text-lg text-gray-700">
                    あなたのプロジェクトに最適な開発手法をお選びください
                  </p>
                </div>
              </div>

              {/* 選択ガイド */}
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* 5レンジャー推奨 */}
                <div
                  className="relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl blur-xl opacity-30"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-400">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-3 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold shadow-lg whitespace-nowrap">
                        予算重視の方へ
                      </span>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <div className="text-5xl mb-4">💰</div>
                      <h4 className="text-2xl font-black text-orange-600 mb-3">
                        5レンジャー
                      </h4>
                      <p className="text-gray-700 mb-6">
                        ノーコード開発で実現する<br />
                        <strong className="text-orange-600">圧倒的な低コスト</strong>
                      </p>
                      
                      <div className="space-y-3 text-left">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-gray-800">機能数2倍でも低価格</p>
                            <p className="text-sm text-gray-600">ノーコードで開発効率化</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-gray-800">固定サーバー費用</p>
                            <p className="text-sm text-gray-600">従量課金なしで安心</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-gray-800">アプリ化無料</p>
                            <p className="text-sm text-gray-600">iOS/Android対応込み</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <a
                          href="#five-ranger-plans"
                          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                          プランを見る
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AIレンジャー推奨 */}
                <div
                  className="relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-ai-blue to-sky-blue rounded-2xl blur-xl opacity-30"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-ai-blue">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-ai-blue to-sky-blue text-white px-2 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold shadow-lg whitespace-nowrap">
                        速度・カスタマイズ重視の方へ
                      </span>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <div className="text-5xl mb-4">⚡</div>
                      <h4 className="text-2xl font-black text-ai-blue mb-3">
                        AIレンジャー
                      </h4>
                      <p className="text-gray-700 mb-6">
                        独自AI技術による<br />
                        <strong className="text-ai-blue">超高速開発</strong>
                      </p>
                      
                      <div className="space-y-3 text-left">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-ai-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-gray-800">最短1ヶ月で納品</p>
                            <p className="text-sm text-gray-600">圧倒的な開発スピード</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-ai-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-gray-800">完全カスタマイズ</p>
                            <p className="text-sm text-gray-600">制限なしの自由設計</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-ai-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-gray-800">高速動作</p>
                            <p className="text-sm text-gray-600">最適化されたパフォーマンス</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Link
                          href="/service#pricing"
                          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-ai-blue to-sky-blue text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                          プランを見る
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 比較メッセージ */}
              <div className="mt-12 text-center">
                <p className="text-gray-700 max-w-3xl mx-auto">
                  ノーコード開発は開発期間やカスタマイズ性が少々劣りますが、
                  <strong className="text-orange-600">大幅な低コストで開発が可能</strong>です。
                  <br />
                  お客様のプロジェクトの要件と予算に合わせて、最適な開発手法をお選びください。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5レンジャーの特徴・メリット */}
        <div
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            5レンジャーが選ばれる理由
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                title: '圧倒的な低コスト',
                description: 'AIレンジャーの最大40%削減を実現。予算が限られているスタートアップに最適',
                icon: '💰',
                highlight: true
              },
              {
                title: '予算管理しやすい',
                description: 'サーバー費用は固定プラン。予期せぬ高額請求の心配一切なし',
                icon: '📊',
                highlight: true
              },
              {
                title: 'アプリ化も無料',
                description: 'iOS/Androidアプリ化がプラン料金に含まれているため追加費用なし',
                icon: '📱',
                highlight: true
              },
              {
                title: '保守費用も格安',
                description: 'メンテナンスが容易なため、月額保守費用もAIレンジャーより安価',
                icon: '🔧',
                highlight: true
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg ${
                  advantage.highlight ? 'border-2 border-orange-400' : ''
                }`}
              >
                <div className="text-4xl mb-4 text-center">{advantage.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2 text-center">{advantage.title}</h4>
                <p className="text-sm text-gray-600 text-center">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 料金プラン */}
        <div
          id="five-ranger-plans"
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            選べる3つのプラン
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                
                <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                  <div className="text-3xl font-black text-gray-900 mb-1">{plan.price}</div>
                  <div className="text-sm text-gray-500 mb-4">保守費用: {plan.monthlyFee}</div>
                  
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center">
                      <span className="text-gray-600 font-medium mr-2">開発期間:</span>
                      <span className="text-gray-800 font-bold">{plan.developmentPeriod}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 font-medium mr-2">機能大分類:</span>
                      <span className="text-gray-800 font-bold">{plan.majorCategories}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 font-medium mr-2">機能小分類:</span>
                      <span className="text-gray-800 font-bold">{plan.minorCategories}</span>
                    </div>
                  </div>
                  
                  {/* AIレンジャーとの比較 */}
                  <div className="bg-orange-50 rounded-lg p-3 mb-6">
                    <p className="text-xs font-bold text-orange-600 mb-1">AIレンジャーなら</p>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>開発期間: {
                        plan.id === '3ranger' ? '1〜2ヶ月' :
                        plan.id === '5ranger' ? '2〜3ヶ月' :
                        '3ヶ月〜'
                      }</div>
                      <div>大分類: {
                        plan.id === '3ranger' ? '5まで' :
                        plan.id === '5ranger' ? '8まで' :
                        '12まで'
                      }、小分類: {
                        plan.id === '3ranger' ? '25まで' :
                        plan.id === '5ranger' ? '40まで' :
                        '60まで'
                      }</div>
                    </div>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="block w-full py-3 rounded-full font-bold transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-gray-200 text-center"
                  >
                    このプランで相談する
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              ※お支払いについて：着手時に半金、納品時に半金をご請求させていただきます。<br />
              ※要件定義の時間や納品時間の都合で開発期間のずれが発生する可能性があります。
            </p>
          </div>
        </div>

        {/* なぜ5レンジャーが安いのか？ */}
        <div
          className="mb-16"
        >
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="text-gray-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-gray-700">
                  <span className="inline-block">なぜ5レンジャーは</span><span className="block md:inline">安いのか？</span>
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                <span className="inline-block">ノーコード開発は開発期間や</span><span className="inline-block">カスタマイズ性に制限がありますが、</span>
                <br className="hidden md:block" />
                <span className="inline-block">その分大幅なコスト</span><span className="inline-block">削減を実現しています</span>
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="py-3 md:py-4 px-3 md:px-6 text-left font-bold text-xs md:text-base">比較項目</th>
                    <th className="py-3 md:py-4 px-3 md:px-6 text-center font-bold text-xs md:text-base">
                      <span className="inline-block">AI</span><span className="inline-block">レンジャー</span>
                    </th>
                    <th className="py-3 md:py-4 px-3 md:px-6 text-center font-bold text-xs md:text-base">
                      <span className="inline-block">5</span><span className="inline-block">レンジャー</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { 
                      feature: '開発スピード', 
                      aiRanger: '◎ 最短1ヶ月', 
                      fiveRanger: '△ 最短4ヶ月',
                      highlight: 'negative'
                    },
                    { 
                      feature: 'カスタマイズ性', 
                      aiRanger: '◎ 非常に高い', 
                      fiveRanger: '△ 制限あり',
                      highlight: 'negative'
                    },
                    { 
                      feature: '動作スピード', 
                      aiRanger: '◎ 速い', 
                      fiveRanger: '○ 問題ないレベル',
                      highlight: 'neutral'
                    },
                    { 
                      feature: 'スマホアプリ化', 
                      aiRanger: '× 別料金（100万円）', 
                      fiveRanger: '◎ プラン内に含む',
                      highlight: 'positive'
                    },
                  ].map((comparison, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 md:py-4 px-3 md:px-6 font-medium text-gray-800 text-xs md:text-base">{comparison.feature}</td>
                      <td className="py-3 md:py-4 px-3 md:px-6 text-center text-gray-700 text-xs md:text-base whitespace-nowrap">{comparison.aiRanger}</td>
                      <td className={`py-3 md:py-4 px-3 md:px-6 text-center font-bold text-xs md:text-base whitespace-nowrap ${
                        comparison.highlight === 'positive' ? 'text-orange-600' :
                        comparison.highlight === 'negative' ? 'text-gray-500' :
                        'text-gray-700'
                      }`}>
                        {comparison.fiveRanger}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-3 border-orange-400 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 py-2 rounded-full mb-4">
                    <span className="text-lg font-bold">結論</span>
                  </div>
                  <p className="text-lg text-gray-700 mb-3">
                    ノーコード開発は開発期間とカスタマイズ性に制限がありますが
                  </p>
                  <p className="text-2xl md:text-3xl font-black text-orange-600 mb-3">
                    <span className="inline-block">大幅なコスト</span><span className="inline-block">削減を実現！</span>
                  </p>
                  <p className="text-gray-600">
                    予算重視のプロジェクトには5レンジャーが最適です
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* CTA */}
        <div
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            どちらの開発手法が最適かお悩みの方も、お気軽にご相談ください
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-400 text-white font-bold rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-105"
          >
            無料相談で最適なプランを確認する
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        </div>
      </section>
    </>
  );
};

export default FiveRangerSection;