'use client';

import Image from 'next/image';

const CompanyInfoSection = () => {
  const companyInfo = [
    { label: '社名', value: '株式会社Re.haru' },
    { label: '設立', value: '2020年 10月 20日' },
    { label: '代表取締役', value: '小野 陽平' },
    { label: '住所', value: '〒860-0047 熊本県熊本市西区春日1-14-3 ザ・熊本タワー2901' },
    { label: '電話番号', value: '096-327-9339' },
    { label: '事業内容', value: '1. 独自AI開発技術による超高速システム開発「AIレンジャー」\n2. 超低価格ノーコード開発「5レンジャー」' },
  ];

  return (
    <section className="bg-white min-h-screen">
      {/* 会社概要セクション */}
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-4">
          <div className="text-center mb-8 md:mb-12">
            {/* セクションタイトル */}
            <p className="text-xs md:text-sm text-gray-500 mb-2 tracking-widest">COMPANY INFO</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
              会社概要
            </h2>
            
            {/* 会社ロゴ */}
            <Image 
              src="/①Re.haru青ロゴ.png" 
              alt="株式会社Re.haru" 
              width={200} 
              height={67} 
              className="object-contain mx-auto w-32 md:w-48 lg:w-auto"
            />
          </div>

          {/* 会社情報テーブル */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {companyInfo.map((info, index) => (
                    <tr
                      key={index}
                      className="border-b-2 border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                    >
                      <td className="bg-gradient-to-r from-ai-blue/5 to-sky-blue/5 px-4 md:px-8 py-4 md:py-6 font-bold text-gray-800 text-sm md:text-xl w-1/3 md:w-2/5 border-r-2 border-gray-100">
                        {info.label}
                      </td>
                      <td className="px-4 md:px-8 py-4 md:py-6 text-gray-700 whitespace-pre-line text-xs md:text-lg">
                        {info.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* 企業理念セクション */}
      <div className="container mx-auto px-4 md:px-4 pt-12 md:pt-20 pb-8 md:pb-12">
        <div className="mb-0">
          {/* セクションタイトル */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm text-gray-500 mb-2 tracking-widest">PHILOSOPHY</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
              企業理念
            </h2>
            <Image 
              src="/③Re.haru青春-青ロゴ.png" 
              alt="Return青春" 
              width={320} 
              height={107} 
              className="object-contain mx-auto mb-4 md:mb-6 w-48 md:w-64 lg:w-auto"
            />
            
            {/* 理念のメッセージ */}
            <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-6 md:p-8 mb-8 md:mb-10">
              <div className="space-y-4 md:space-y-6">
                <div className="text-center">
                  <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                    <span className="inline-block">青春時代は何も考えずに</span>
                    <span className="inline-block">新しいことにチャレンジできていた。</span>
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-12 md:w-16 h-px bg-gray-300"></div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                    <span className="inline-block">しかし、大人になっていくにつれて</span>
                    <span className="inline-block">現実的になっていき、</span><br className="hidden md:block" />
                    <span className="inline-block">新しいことにチャレンジする</span>
                    <span className="inline-block">一歩を踏み出せなくなっていく。</span>
                  </p>
                </div>
                
                <div className="border-t-2 border-ai-blue/20 pt-4 md:pt-6">
                  <p className="text-sm md:text-lg text-gray-900 leading-relaxed font-bold text-center">
                    <span className="inline-block">そんな世の中を変革すべく、</span>
                    <span className="inline-block">青春時代のように</span><span className="inline-block">新しいことに</span><br className="hidden md:block" />
                    <span className="inline-block">チャレンジしていく</span><span className="inline-block">気持ち</span><span className="text-ai-blue text-lg md:text-xl inline-block">「Return青春」</span><span className="inline-block">を</span><span className="inline-block">世の中に広げる。</span>
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* ビジュアルストーリー */}
          <div className="max-w-6xl mx-auto">
            {/* Before & After */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
              {/* Before: 学生時代 */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 md:p-8 border-2 border-yellow-200">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-3 md:mr-4">
                    <span className="text-lg md:text-2xl font-bold text-white">学</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">学生時代の私たち</h3>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2 text-lg md:text-xl">✓</span>
                    <p className="text-sm md:text-base text-gray-700">「面白そう！」で即行動</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2 text-lg md:text-xl">✓</span>
                    <p className="text-sm md:text-base text-gray-700">失敗を恐れない勇気</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2 text-lg md:text-xl">✓</span>
                    <p className="text-sm md:text-base text-gray-700">純粋な好奇心とワクワク</p>
                  </div>
                </div>
              </div>
              
              {/* After: 社会人 */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 md:p-8 border-2 border-gray-300">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gray-500 rounded-full flex items-center justify-center mr-3 md:mr-4">
                    <span className="text-lg md:text-2xl font-bold text-white">社</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">社会人になった今</h3>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start">
                    <span className="text-red-400 mr-2 text-lg md:text-xl">×</span>
                    <p className="text-sm md:text-base text-gray-700">「予算が...」と諦める</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-2 text-lg md:text-xl">×</span>
                    <p className="text-sm md:text-base text-gray-700">「リスクが...」と躊躇</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-2 text-lg md:text-xl">×</span>
                    <p className="text-sm md:text-base text-gray-700">「前例が...」と断念</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 矢印 */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div>
                <svg className="w-10 md:w-12 h-10 md:h-12 text-ai-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
            
            {/* Solution: Re.haruの答え */}
            <div className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-4 md:mb-6">
                  Re.haruが実現する<br className="md:hidden" />「Return青春」
                </h3>
                <div className="bg-gradient-to-r from-ai-blue/5 to-sky-blue/5 rounded-xl p-4 md:p-6 border-l-4 border-ai-blue">
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                    私たちは、皆様の中に眠る<br className="md:hidden" />
                    <span className="text-ai-blue text-xl md:text-2xl lg:text-3xl font-black">「チャレンジしたい気持ち」</span><br className="md:hidden" />
                    を呼び覚まします
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3 md:gap-6">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-ai-blue/10 to-sky-blue/10 rounded-xl p-4 md:p-6 border-2 border-ai-blue/30">
                    <p className="text-2xl md:text-4xl font-black text-ai-blue mb-1 md:mb-2">1/5</p>
                    <p className="text-xs md:text-sm font-bold text-gray-700">従来の開発費用</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-hope-green/10 to-green-100 rounded-xl p-4 md:p-6 border-2 border-hope-green/30">
                    <p className="text-2xl md:text-4xl font-black text-hope-green mb-1 md:mb-2">1/3</p>
                    <p className="text-xs md:text-sm font-bold text-gray-700">開発期間</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-challenge-orange/10 to-orange-100 rounded-xl p-4 md:p-6 border-2 border-challenge-orange/30">
                    <p className="text-2xl md:text-4xl font-black text-challenge-orange mb-1 md:mb-2">∞</p>
                    <p className="text-xs md:text-sm font-bold text-gray-700">可能性</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-8 bg-gray-50 rounded-xl p-4 md:p-6">
                <p className="text-center text-sm md:text-lg font-bold text-gray-800">
                  独自のAI開発技術<br className="md:hidden" />「<span className="text-ai-blue">AIレンジャー</span>」で、<br className="hidden md:block" />
                  すべての企業が<br className="md:hidden" />新しいチャレンジをできる世界へ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* お問い合わせCTA */}
      <div className="container mx-auto px-4 md:px-4">
        <div className="text-center py-12 md:py-16">
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
            お気軽にお問い合わせください
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-ai-blue text-white text-sm md:text-base font-bold rounded-full hover:bg-sky-blue transition-all duration-300"
          >
            お問い合わせフォーム
            <svg className="w-4 md:w-5 h-4 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfoSection;