



const AIRangerDetailSection = () => {
  const developmentSteps = [
    {
      number: '01',
      title: 'ヒアリング',
      duration: '30分〜1時間',
      description: 'やりたいことを話すだけでOK',
      details: 'まずは『やりたいこと』『解決したい課題』を、普段の言葉でお聞かせください。技術的な知識は一切不要です。AIが自動で技術仕様に変換します。',
      icon: '💬',
      color: 'from-ai-blue to-sky-blue',
    },
    {
      number: '02',
      title: 'カウント＆プラン提示',
      duration: '即日〜2営業日',
      description: '最適なプラン料金をご提示',
      details: 'お伺いした内容を『大分類・小分類』に分解・カウント。機能数に応じて最適なプランと明確な料金をご提示いたします。追加費用の心配もありません。',
      icon: '📊',
      color: 'from-hope-green to-emerald-400',
    },
    {
      number: '03',
      title: 'ご契約・開発',
      duration: '1〜3ヶ月（プランによる）',
      description: 'AIが猛スピードで開発',
      details: 'ご提示したプランにご納得いただければ、ご契約。スコープが明確なので、AIが猛スピードで開発を進めます。従来の開発期間の1/3程度で完了します。',
      icon: '⚡',
      color: 'from-challenge-orange to-amber-400',
    },
    {
      number: '04',
      title: '納品・保守',
      duration: '継続サポート',
      description: '安心の保守運用付き',
      details: '合意したスコープ通りのシステムを納品及び保守を行います。月額3万円〜の安心プランで、機能追加や修正にも迅速に対応いたします。',
      icon: '✨',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">
            AIレンジャーの開発プロセス
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            たった4ステップで、あなたの理想のシステムが完成します
          </p>
        </div>

        {/* 縦型タイムライン風プロセス */}
        <div className="max-w-4xl mx-auto">
          {developmentSteps.map((step, index) => (
            <div
              key={index}
              className="relative mb-16 last:mb-0"
            >
              {/* 縦線（最後のステップ以外） */}
              {index < developmentSteps.length - 1 && (
                <div className="hidden md:block absolute left-8 md:left-20 top-20 w-0.5 h-32 bg-gradient-to-b from-ai-blue to-transparent opacity-30"></div>
              )}
              
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* ステップアイコン */}
                <div className="flex-shrink-0 relative">
                  <div
                    className={`w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl md:text-4xl shadow-lg`}
                  >
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-ai-blue text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    {step.number}
                  </div>
                </div>

                {/* ステップコンテンツ */}
                <div
                  className="flex-1 bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-0">
                      {step.title}
                    </h3>
                    <div className="inline-block bg-ai-blue/10 text-ai-blue px-4 py-2 rounded-full text-sm font-medium">
                      ⏱️ {step.duration}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-ai-blue mb-4">
                    {step.description}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.details}
                  </p>

                  {/* 各ステップ特有の追加情報 */}
                  {index === 0 && (
                    <div className="bg-gradient-to-r from-ai-blue/5 to-sky-blue/5 border-l-4 border-ai-blue rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-xl">💡</div>
                        <div>
                          <p className="font-medium text-ai-blue mb-2">ヒアリングのコツ</p>
                          <p className="text-sm text-gray-600">
                            「Amazonみたいなサイト」「社内の書類管理を楽にしたい」など、<br />
                            具体的なイメージや困りごとをお聞かせください。技術知識は不要です！
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="bg-gradient-to-r from-hope-green/5 to-emerald-100/5 border-l-4 border-hope-green rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-xl">📋</div>
                        <div>
                          <p className="font-medium text-hope-green mb-2">明確な料金体系</p>
                          <p className="text-sm text-gray-600">
                            機能を大分類・小分類で明確にカウント。「人月計算」「管理費一式」などの<br />
                            曖昧な見積もりではなく、透明性の高い料金をご提示します。
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="bg-gradient-to-r from-challenge-orange/5 to-amber-100/5 border-l-4 border-challenge-orange rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-xl">🚀</div>
                        <div>
                          <p className="font-medium text-challenge-orange mb-2">スコープ明確で高速開発</p>
                          <p className="text-sm text-gray-600">
                            事前に機能が明確になっているため、AIが迷うことなく開発を進行。<br />
                            従来の開発期間の<strong>1/3程度</strong>で高品質なシステムを完成させます。
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 3 && (
                    <div className="bg-gradient-to-r from-purple-100/50 to-pink-100/50 border-l-4 border-purple-500 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-xl">🛡️</div>
                        <div>
                          <p className="font-medium text-purple-700 mb-2">安心の継続サポート</p>
                          <p className="text-sm text-gray-600">
                            月額3万円〜の保守プランで機能追加・修正が可能。<br />
                            迅速な対応で安心してご利用いただけます。
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* プロセスフロー */}
                  {index < developmentSteps.length - 1 && (
                    <div
                      className="mt-6 flex items-center justify-center"
                    >
                      <div className="flex items-center gap-2 text-ai-blue">
                        <div className="text-sm font-medium">次のステップへ</div>
                        <div
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIRangerDetailSection;