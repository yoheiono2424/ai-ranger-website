const CompanyOverviewSection = () => {
  const companyInfo = [
    { label: '会社名', value: '株式会社Re.haru' },
    { label: '設立', value: '2023年4月' },
    { label: '代表取締役', value: '小野陽平' },
    { label: '資本金', value: '300万円' },
    { label: '従業員数', value: '5名' },
    { label: '事業内容', value: 'AIシステム開発、ノーコード開発、DXコンサルティング' },
    { label: '取引銀行', value: '肥後銀行' },
    { label: '主要取引先', value: 'スタートアップ企業、中小企業、個人事業主' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            会社概要
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            高額な開発相場を成敗する、革新的なAI開発企業
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* 左側：会社ロゴ・イメージ */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-ai-blue to-sky-blue rounded-3xl blur-3xl opacity-20"></div>
                  <div className="relative bg-white rounded-3xl p-12 shadow-lg">
                    <div className="text-center">
                      <h2 className="text-3xl font-black text-gray-900 mb-2">株式会社Re.haru</h2>
                      <p className="text-ai-blue font-bold">Return to youth, Return to challenge</p>
                      <div className="mt-6 space-y-2">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-ai-blue to-sky-blue text-white rounded-full text-sm font-bold">
                          AIシステム開発
                        </div>
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-hope-green to-emerald-400 text-white rounded-full text-sm font-bold ml-2">
                          ノーコード開発
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右側：会社情報 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-ai-blue">
                  企業情報
                </h3>
                <dl className="space-y-4">
                  {companyInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-start"
                    >
                      <dt className="font-bold text-gray-700 sm:w-32 mb-1 sm:mb-0">
                        {info.label}
                      </dt>
                      <dd className="text-gray-600 sm:flex-1">
                        {info.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* ミッション */}
            <div className="mt-12 p-6 bg-gradient-to-r from-ai-blue/5 to-sky-blue/5 rounded-2xl border-l-4 border-ai-blue">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                私たちのミッション
              </h4>
              <p className="text-gray-700 leading-relaxed">
                私たちのサービスを通じて、すべての企業が最新のテクノロジーを活用できる世界を創造します。
                高額な開発費用に悩む企業を救い、イノベーションの民主化を実現することが私たちの使命です。
              </p>
            </div>

            {/* 3つの強み */}
            <div className="mt-12">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Re.haruの3つの強み
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-ai-blue to-sky-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">独自AI技術</h5>
                  <p className="text-sm text-gray-600">
                    他社にはない独自のAI開発技術で超高速開発を実現
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-hope-green to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">透明な価格</h5>
                  <p className="text-sm text-gray-600">
                    一律料金体系で不透明な見積もりを撤廃
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-challenge-orange to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth={2} /><circle cx="12" cy="12" r="6" strokeWidth={2} /><circle cx="12" cy="12" r="2" strokeWidth={2} /></svg>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">簡単プロセス</h5>
                  <p className="text-sm text-gray-600">
                    やりたいことを話すだけで開発がスタートできる
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;