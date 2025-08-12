
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectResultsSection = () => {
  const [activeCategory, setActiveCategory] = useState('mobile');
  
  const categories = [
    { id: 'mobile', label: 'スマホアプリ', icon: '📱' },
    { id: 'dx', label: '社内DX', icon: '🏢' },
    { id: 'ai', label: 'AI社内システム', icon: '🤖' },
  ];

  const projects = {
    mobile: [
      {
        title: 'タレント農家コミュニティアプリ',
        subtitle: '',
        description: '地図から商品購入、チャット機能まで全て込み',
        beforeCost: '4,000万円',
        afterCost: '500万円',
        savings: '87.5%削減',
        features: ['会員登録機能', '地図から商品購入機能', '商品登録機能（農家）', 'プッシュ通知機能', '決済機能', '掲示板機能', '管理者機能（PC）', 'チャット機能など'],
        result: '',
        image: null,
      },
      {
        title: 'キャンプフリマアプリ',
        subtitle: '',
        description: 'キャンプ用品専門のフリマアプリ',
        beforeCost: '3,500万円',
        afterCost: '500万円',
        savings: '85.7%削減',
        features: ['会員登録機能', '商品購入機能', '商品掲載機能', 'プッシュ通知機能', '決済機能', '条件検索機能', '記事投稿機能', 'チャット機能など'],
        result: '',
        image: null,
      },
      {
        title: 'ショート動画型採用マッチングアプリ',
        subtitle: '',
        description: 'ショート動画で求職者と企業をマッチング',
        beforeCost: '8,500万円',
        afterCost: '850万円',
        savings: '90%削減',
        features: ['会員登録機能', 'ショート動画機能', '企業求人掲載機能', 'プッシュ通知機能', '採用マッチング機能', 'スカウト機能', 'ポイント機能', 'チャット機能など'],
        result: '',
        image: null,
      },
    ],
    dx: [
      {
        title: 'カタログギフト自動連携システム',
        subtitle: '',
        description: '複数システムを一元化、収益計算を自動化',
        beforeCost: '2,500万円',
        afterCost: '500万円',
        savings: '80%削減',
        features: ['自動収支計算機能', 'クロネコヤマト連携機能', 'ギフト自動発送機能', 'EC連携機能など'],
        result: '',
        image: null,
      },
      {
        title: '現場向け勤怠管理システム',
        subtitle: '',
        description: '直行直帰の正確な勤怠情報管理と社内共有',
        beforeCost: '3,500万円',
        afterCost: '300万円',
        savings: '91.4%削減',
        features: ['勤怠管理機能', '社内共有機能', '日報投稿機能', 'データ蓄積機能など'],
        result: '',
        image: null,
      },
      {
        title: '在庫管理システム',
        subtitle: '',
        description: '複数拠点の在庫を一元管理し、発注を自動化',
        beforeCost: '2,800万円',
        afterCost: '450万円',
        savings: '83.9%削減',
        features: ['在庫一元管理機能', '自動発注機能', 'バーコード管理', '売上分析機能など'],
        result: '',
        image: null,
      },
    ],
    ai: [
      {
        title: 'AI自動会計管理システム',
        subtitle: '',
        description: '領収書画像をAIが自動解析し、自動仕分け',
        beforeCost: '4,500万円',
        afterCost: '400万円',
        savings: '91.1%削減',
        features: ['AIOCR機能', '顧客管理機能', 'AIデータ解析機能', '会計ソフト連携機能など'],
        result: '',
        image: null,
      },
      {
        title: '人材派遣スタッフAI管理システム',
        subtitle: '',
        description: 'AIで人材マッチングを最適化、31社が導入',
        beforeCost: '7,500万円',
        afterCost: '800万円',
        savings: '89.3%削減',
        features: ['AI自動マッチング', '自動請求書作成', 'スタッフ管理機能', '収益管理機能など'],
        result: '',
        image: null,
      },
      {
        title: 'AIチャットボット業務支援',
        subtitle: '',
        description: '社内業務の問い合わせを24時間自動対応',
        beforeCost: '5,200万円',
        afterCost: '600万円',
        savings: '88.5%削減',
        features: ['AI自動応答機能', '学習機能', 'エスカレーション機能', '分析レポート機能など'],
        result: '',
        image: null,
      },
    ],
  };

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">
            AIレンジャーの開発実績
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            様々な業界で、革命的なコスト削減を実現しています
          </p>
        </div>

        {/* カテゴリータブ */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-2 py-2 md:px-6 md:py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-1 md:gap-2 text-xs md:text-base ${
                  activeCategory === category.id
                    ? 'bg-ai-blue text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="text-base md:text-xl">{category.icon}</span>
                <span className="whitespace-nowrap">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* プロジェクト一覧 */}
        <div
          key={activeCategory}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects[activeCategory as keyof typeof projects].map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* プロジェクト画像 */}
              {project.image && (
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              {/* プロジェクト情報 */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-sm text-gray-500 mb-2">{project.subtitle}</p>
                )}
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                
                {/* コスト削減情報 */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <span className="text-xs text-gray-500 block mb-1">他社見積もり</span>
                      <span className="text-lg line-through text-gray-400">{project.beforeCost}</span>
                    </div>
                    <div className="flex-shrink-0 px-2">
                      <svg className="w-8 h-8 text-challenge-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <span className="text-xs text-ai-blue block mb-1 font-medium">AIレンジャー価格</span>
                      <span className="text-2xl font-bold text-ai-blue">{project.afterCost}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="bg-gradient-to-r from-challenge-orange to-amber-400 text-white rounded-lg px-4 py-3 text-center shadow-sm">
                      <span className="text-base font-black tracking-wide">
                        {project.savings}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* 実装機能 */}
                <div className="text-xs text-gray-500 mb-4">
                  <div className="font-medium mb-2">実装機能:</div>
                  <div className="text-gray-600">
                    {project.features.join(' / ')}
                  </div>
                </div>
                
                {/* 成果 */}
                {project.result && (
                  <div className="text-sm font-medium text-challenge-orange mt-auto pt-2">
                    📈 {project.result}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* もっと見るボタン */}
        <div
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            他にも多数の実績があります。詳しくはお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-ai-blue text-white font-bold rounded-full hover:bg-sky-blue transition-all duration-300 transform hover:scale-105"
          >
            無料相談で詳しく聞く
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectResultsSection;