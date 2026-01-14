'use client';

import Image from 'next/image';

const CompanyInfoSection = () => {
  const companyInfo = [
    { label: '社名', value: '株式会社Re.haru' },
    { label: '設立', value: '2020年 10月 20日' },
    { label: '代表取締役', value: '小野 陽平' },
    { label: '住所', value: '〒860-0047 熊本県熊本市西区春日1-14-3 ザ・熊本タワー2901' },
    { label: '電話番号', value: '096-327-9339' },
    { label: '事業内容', value: '百均価格設計による一律料金システム開発「5レンジャー」\n月額定額のサブスク型システム開発「SysSuc（シススク）」' },
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
      <div className="container mx-auto px-4 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* セクションタイトル */}
          <p className="text-xs md:text-sm text-gray-500 mb-2 tracking-widest">PHILOSOPHY</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">
            企業理念
          </h2>

          {/* Return青春ロゴ */}
          <Image
            src="/③Re.haru青春-青ロゴ.png"
            alt="Return青春"
            width={280}
            height={93}
            className="object-contain mx-auto mb-8 md:mb-10 w-44 md:w-56"
          />

          {/* シンプルなメッセージ */}
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            青春時代のように、新しいことにチャレンジする気持ちを<br className="hidden md:inline" />
            世の中に広げる。
          </p>
          <p className="text-sm md:text-base text-gray-500">
            テクノロジーの力で、すべての企業に<br className="md:hidden" />
            「挑戦」「成長」「希望」を届けます。
          </p>
        </div>
      </div>

      {/* お問い合わせCTA */}
      <div className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-ai-blue text-white text-sm md:text-base font-bold rounded-full hover:bg-sky-blue transition-all duration-300"
          >
            お問い合わせ
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