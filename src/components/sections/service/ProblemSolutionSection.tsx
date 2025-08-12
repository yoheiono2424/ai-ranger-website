


import Image from 'next/image';

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* メインメッセージ */}
          <div
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              システム開発の
              <span className="text-red-600">「諦め」</span>を
              <span className="text-ai-blue">「実現」</span>に変える
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              高額な開発費用で夢を断念する時代は終わりました
            </p>
          </div>

          {/* Before → After の比較 */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            
            {/* Before（従来の問題）*/}
            <div
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl transform rotate-2 opacity-30"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-red-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-white">😰</span>
                  </div>
                  <h3 className="text-2xl font-bold text-red-800 mb-2">従来の開発</h3>
                  <p className="text-red-600 font-medium">諦めるしかない現実</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">×</span>
                    </div>
                    <div>
                      <p className="font-bold text-red-800 text-sm mb-1">2,000万円〜の高額見積もり</p>
                      <p className="text-red-600 text-xs">高額すぎてシステム開発に手が届かない</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">×</span>
                    </div>
                    <div>
                      <p className="font-bold text-orange-800 text-sm mb-1">不透明な費用構造</p>
                      <p className="text-orange-600 text-xs">「人月計算」で実態が見えない</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">×</span>
                    </div>
                    <div>
                      <p className="font-bold text-yellow-800 text-sm mb-1">長期間の開発期間</p>
                      <p className="text-yellow-600 text-xs">1年以上かかることも</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
                  <p className="text-gray-600 font-medium">結果</p>
                  <p className="text-xl font-black text-red-600">開発を諦める</p>
                </div>
              </div>
            </div>

            {/* After（AIレンジャーの解決策）*/}
            <div
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-ai-blue/10 to-sky-blue/10 rounded-3xl transform -rotate-2"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-ai-blue">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-ai-blue to-sky-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-white">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-ai-blue mb-2">AIレンジャー</h3>
                  <p className="text-gray-700 font-medium">夢を現実に変える力</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-ai-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm mb-1">300万円〜の明確料金</p>
                      <p className="text-gray-600 text-xs">従来の1/5のコストを実現</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-hope-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm mb-1">透明な機能別料金</p>
                      <p className="text-gray-600 text-xs">オプション機能も明確な価格設計</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                    <div className="w-8 h-8 bg-challenge-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm mb-1">最短1ヶ月で完成</p>
                      <p className="text-gray-600 text-xs">AI開発で超高速実現</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-ai-blue to-sky-blue rounded-lg text-center">
                  <p className="text-white font-medium">結果</p>
                  <p className="text-xl font-black text-white">夢が現実になる！</p>
                </div>
              </div>
            </div>
          </div>

          {/* 実現メッセージ */}
          <div
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-ai-blue">
                <div className="flex justify-center" style={{ marginTop: '-80px', marginBottom: '-80px' }}>
                  <div style={{ 
                    width: '500px', 
                    maxWidth: '90%'
                  }}>
                    <Image
                      src="/ai-ranger-logo.png"
                      alt="AIレンジャー"
                      width={500}
                      height={140}
                      className="object-contain"
                      style={{ 
                        width: '100%', 
                        height: 'auto'
                      }}
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-4xl font-black mb-6 text-gray-900">
                  <span className="text-red-600 inline-block">高額な開発相場</span><span className="inline-block">を</span>
                  <span className="text-ai-blue block md:inline">成敗する！！</span>
                </h3>
                
                <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-700">
                  あなたのアイデアを、もう諦める必要はありません。<br />
                  <strong className="text-ai-blue">安心・低コスト・高品質</strong>で理想のシステムを実現します。
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;