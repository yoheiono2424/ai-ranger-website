



const AIRangerDetailSection = () => {
  const developmentSteps = [
    {
      number: '01',
      title: 'ヒアリング＆プロトタイプ開発',
      duration: null,
      description: 'やりたいことを話すだけでOK',
      details: 'まずは『やりたいこと』『解決したい課題』を、普段の言葉でお聞かせください。ヒアリングを基にAIが即座にプロトタイプを開発。実際の画面を見ながら、お客様と一緒にイメージを具体化していきます。技術的な知識は一切不要です。',
      icon: '💬',
      color: 'from-ai-blue to-sky-blue',
    },
    {
      number: '02',
      title: '開発内容の確定＆ご契約',
      duration: null,
      description: '一律500万円のシンプル料金',
      details: 'プロトタイプで確認したシステムをもとに、開発する機能や範囲を明確化します。一律500万円（機能数制限なし）のシンプルな料金体系で、追加費用の心配もありません。内容にご納得いただければ、すぐにご契約へ進めます。',
      icon: '📝',
      color: 'from-hope-green to-emerald-400',
    },
    {
      number: '03',
      title: '開発・テスト',
      duration: '2〜6ヶ月',
      description: 'AIが猛スピードで開発',
      details: 'スコープが明確なので、AIが迷うことなく猛スピードで開発を進めます。開発完了後は、実際にお客様に操作していただきながら動作確認を実施。対話を通じて改善点をフィードバックいただき、完璧な状態に仕上げます。',
      icon: '⚡',
      color: 'from-challenge-orange to-amber-400',
    },
    {
      number: '04',
      title: '納品・保守',
      duration: '継続サポート',
      description: '安心の保守運用付き',
      details: '合意したスコープ通りのシステムを納品及び保守を行います。月額3万円（固定）の安心プランで、機能追加や修正にも迅速に対応いたします。',
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
            5レンジャーの開発プロセス
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
                    {step.duration && (
                      <div className="inline-block bg-ai-blue/10 text-ai-blue px-4 py-2 rounded-full text-sm font-medium">
                        ⏱️ {step.duration}
                      </div>
                    )}
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
                        <div className="text-xl">🖥️</div>
                        <div>
                          <p className="font-medium text-ai-blue mb-2">プロトタイプで理想を形に</p>
                          <p className="text-sm text-gray-600">
                            実際のプロトタイプ画面を見ながら「ここはこうしたい」<br />
                            「この機能も欲しい」など、具体的なイメージを一緒に作り上げていきましょう。<br />
                            言葉では伝えにくいことも、画面を見れば一目瞭然です！
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="bg-gradient-to-r from-hope-green/5 to-emerald-100/5 border-l-4 border-hope-green rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-xl">💰</div>
                        <div>
                          <p className="font-medium text-hope-green mb-2">日本発の百均的価格設計</p>
                          <p className="text-sm text-gray-600">
                            一律500万円のシンプルな料金体系で、機能数に制限はありません。<br />
                            「人月計算」「管理費一式」などの曖昧な見積もりは一切なし。プロトタイプで確認した内容を、そのまま開発できます。
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
                          <p className="font-medium text-challenge-orange mb-2">AIによる高速開発とユーザーテスト</p>
                          <p className="text-sm text-gray-600">
                            事前に機能が明確になっているため、AIが迷うことなく開発を進行。<br />
                            完成後はお客様に実際の画面を操作していただき、使いやすさを徹底的に磨き上げます。
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
                            月額3万円（固定）の保守プランで機能追加・修正が可能。<br />
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