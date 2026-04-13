'use client';

import Link from 'next/link';

const PricingDetailSection = () => {
  const additionalOptions = [
    {
      title: 'AI機能開発',
      price: '250万円',
      maintenance: 'なし',
      description: 'チャットボット、画像認識、データ分析などの高度なAI機能（固定料金）',
      icon: <svg className="w-10 h-10 text-ai-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
    {
      title: 'ネイティブアプリ化',
      price: '100万円',
      maintenance: 'なし',
      description: 'iOS/Androidアプリ化、ストア申請作業込み',
      icon: <svg className="w-10 h-10 text-ai-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    },
    {
      title: '外部システム連携',
      price: '50万円/連携',
      maintenance: 'なし',
      description: 'APIキー接続系が対象。CSV連携は無償で対応します',
      icon: <svg className="w-10 h-10 text-ai-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
    },
  ];

  const runningCosts = [
    {
      category: '保守費用',
      items: [
        { name: '基本保守費用', price: '月3万円', note: '固定料金' },
        { name: 'AI機能オプション', price: '+月2万円', note: 'AI機能利用時' },
        { name: 'ネイティブアプリオプション', price: '+月2万円', note: 'ネイティブアプリ時' },
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
            シンプルでわかりやすい料金体系
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            一律料金で機能数制限なし、何でも開発できる5レンジャープラン
          </p>
        </div>

        {/* 基本料金説明 */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-ai-blue to-sky-blue p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">5レンジャー 基本料金体系</h3>
              <p className="text-white/90">機能数制限なし、何でも開発できるシンプルプラン</p>
            </div>
            <div className="p-8">
              <div className="flex justify-center mb-8">
                <div className="text-center max-w-md w-full">
                  <div className="bg-ai-blue/10 rounded-xl p-8">
                    <p className="text-sm text-gray-600 mb-2">基本料金</p>
                    <p className="text-5xl font-black text-ai-blue mb-3">一律500万円</p>
                    <p className="text-base text-gray-700 font-semibold mb-2">機能数制限なし</p>
                    <p className="text-sm text-gray-600">何でも開発できる一律料金</p>
                  </div>
                </div>
              </div>

              {/* 開発期間 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">開発期間</h4>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-gray-700">
                    2〜6ヶ月（プロジェクト規模による）
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    ※詳細なスケジュールはヒアリング後にご提示いたします
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
                <div className="mb-4 flex justify-center">{option.icon}</div>
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
