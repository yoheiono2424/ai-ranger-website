'use client';

import Link from 'next/link';

const ProjectResultsSection = () => {
  // 全実績を1つの配列にまとめる（表示順：社内DX → AI社内システム → スマホアプリ）
  const allProjects = [
    // 社内DX
    {
      category: '社内DX',
      categoryIcon: '🏢',
      categoryColor: 'from-green-500 to-green-600',
      title: 'カタログギフト自動連携システム',
      description: '複数システムを一元化、収益計算を自動化',
      beforeCost: '2,500万円',
      afterCost: '300万円',
      savings: '88%削減',
      savedAmount: '2,200万円',
      features: ['自動収支計算機能', 'クロネコヤマト連携機能', 'ギフト自動発送機能', 'EC連携機能など'],
    },
    {
      category: '社内DX',
      categoryIcon: '🏢',
      categoryColor: 'from-green-500 to-green-600',
      title: '現場向け勤怠管理システム',
      description: '直行直帰の正確な勤怠情報管理と社内共有',
      beforeCost: '3,500万円',
      afterCost: '300万円',
      savings: '91.4%削減',
      savedAmount: '3,200万円',
      features: ['勤怠管理機能', '社内共有機能', '日報投稿機能', 'データ蓄積機能など'],
    },
    {
      category: '社内DX',
      categoryIcon: '🏢',
      categoryColor: 'from-green-500 to-green-600',
      title: '在庫管理システム',
      description: '複数拠点の在庫を一元管理し、発注を自動化',
      beforeCost: '2,800万円',
      afterCost: '450万円',
      savings: '83.9%削減',
      savedAmount: '2,350万円',
      features: ['在庫一元管理機能', '自動発注機能', 'バーコード管理', '売上分析機能など'],
    },
    // AI社内システム
    {
      category: 'AI社内システム',
      categoryIcon: '🤖',
      categoryColor: 'from-purple-500 to-purple-600',
      title: 'AI自動会計管理システム',
      description: '領収書画像をAIが自動解析し、自動仕分け',
      beforeCost: '4,500万円',
      afterCost: '400万円',
      savings: '91.1%削減',
      savedAmount: '4,100万円',
      features: ['AIOCR機能', '顧客管理機能', 'AIデータ解析機能', '会計ソフト連携機能など'],
    },
    {
      category: 'AI社内システム',
      categoryIcon: '🤖',
      categoryColor: 'from-purple-500 to-purple-600',
      title: '人材派遣スタッフAI管理システム',
      description: 'AIで人材マッチングを最適化、31社が導入',
      beforeCost: '7,500万円',
      afterCost: '800万円',
      savings: '89.3%削減',
      savedAmount: '6,700万円',
      features: ['AI自動マッチング', '自動請求書作成', 'スタッフ管理機能', '収益管理機能など'],
    },
    {
      category: 'AI社内システム',
      categoryIcon: '🤖',
      categoryColor: 'from-purple-500 to-purple-600',
      title: 'AIチャットボット業務支援',
      description: '社内業務の問い合わせを24時間自動対応',
      beforeCost: '5,200万円',
      afterCost: '600万円',
      savings: '88.5%削減',
      savedAmount: '4,600万円',
      features: ['AI自動応答機能', '学習機能', 'エスカレーション機能', '分析レポート機能など'],
    },
    // スマホアプリ
    {
      category: 'スマホアプリ',
      categoryIcon: '📱',
      categoryColor: 'from-blue-500 to-blue-600',
      title: 'タレント農家コミュニティアプリ',
      description: '地図から商品購入、チャット機能まで全て込み',
      beforeCost: '4,000万円',
      afterCost: '500万円',
      savings: '87.5%削減',
      savedAmount: '3,500万円',
      features: ['会員登録機能', '地図から商品購入機能', '商品登録機能（農家）', 'プッシュ通知機能など'],
    },
    {
      category: 'スマホアプリ',
      categoryIcon: '📱',
      categoryColor: 'from-blue-500 to-blue-600',
      title: 'キャンプフリマアプリ',
      description: 'キャンプ用品専門のフリマアプリ',
      beforeCost: '3,500万円',
      afterCost: '500万円',
      savings: '85.7%削減',
      savedAmount: '3,000万円',
      features: ['会員登録機能', '商品購入機能', '商品掲載機能', 'プッシュ通知機能など'],
    },
    {
      category: 'スマホアプリ',
      categoryIcon: '📱',
      categoryColor: 'from-blue-500 to-blue-600',
      title: 'ショート動画型採用マッチングアプリ',
      description: 'ショート動画で求職者と企業をマッチング',
      beforeCost: '8,500万円',
      afterCost: '850万円',
      savings: '90%削減',
      savedAmount: '7,650万円',
      features: ['会員登録機能', 'ショート動画機能', '企業求人掲載機能', 'プッシュ通知機能など'],
    },
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">
            AIレンジャーの開発実績
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            様々な業界で、革命的なコスト削減を実現しています
          </p>
        </div>

        {/* 実績カードグリッド */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* カテゴリバッジ */}
              <div className={`h-1.5 bg-gradient-to-r ${project.categoryColor}`}></div>

              <div className="p-6">
                {/* カテゴリタグ */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{project.categoryIcon}</span>
                  <span className="text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* タイトルと説明 */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* コスト削減情報 */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-xs text-gray-500 block mb-1">他社見積もり</span>
                      <span className="text-lg line-through text-gray-400">{project.beforeCost}</span>
                    </div>
                    <div className="text-center">
                      <svg className="w-8 h-8 text-ai-blue mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-ai-blue block mb-1">AIレンジャー価格</span>
                      <span className="text-xl font-black text-ai-blue">{project.afterCost}</span>
                    </div>
                  </div>

                  {/* 削減額と削減率 */}
                  <div className="border-t border-gray-200 pt-3 grid grid-cols-2 gap-2">
                    <div className="text-center">
                      <span className="text-xs text-gray-500 block">削減額</span>
                      <span className="text-lg font-bold text-red-600">{project.savedAmount}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-xs text-gray-500 block">削減率</span>
                      <span className="text-lg font-bold text-red-600">{project.savings}</span>
                    </div>
                  </div>
                </div>

                {/* 機能一覧（常時表示） */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs font-bold text-gray-600 mb-2">実装機能</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-ai-blue mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 開発実績100件以上 */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            {/* メインコンテンツ */}
            <div className="bg-gradient-to-br from-ai-blue via-blue-600 to-sky-blue text-white rounded-3xl p-10 transform hover:scale-105 transition-all duration-300">
              <p className="text-3xl md:text-4xl font-black mb-6 relative">
                <span className="inline-block transform hover:scale-110 transition-transform">開発実績は</span>
                <span className="inline-block text-yellow-300 text-4xl md:text-5xl mx-2 transform hover:scale-110 transition-transform">100件</span>
                <span className="inline-block transform hover:scale-110 transition-transform">以上</span>
              </p>

              <div className="grid grid-cols-2 gap-8 mt-6 pt-6 border-t-2 border-white/40">
                <div className="transform hover:scale-105 transition-all">
                  <p className="text-sm opacity-90 mb-2 font-medium">平均削減額</p>
                  <p className="text-2xl md:text-3xl font-black text-yellow-300">4,144万円</p>
                </div>
                <div className="transform hover:scale-105 transition-all">
                  <p className="text-sm opacity-90 mb-2 font-medium">平均削減率</p>
                  <p className="text-2xl md:text-3xl font-black text-yellow-300">88.4%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            あなたの開発案件も、AIレンジャーなら大幅なコスト削減が可能です
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-ai-blue text-white font-bold rounded-full hover:bg-sky-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              無料相談を申し込む
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#price"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-ai-blue text-ai-blue font-bold rounded-full hover:bg-ai-blue hover:text-white transition-all duration-300"
            >
              今すぐ料金を確認する
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectResultsSection;