


'use client';

import { useState } from 'react';
import Link from 'next/link';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: '料金・プランについて',
      items: [
        {
          question: '料金体系を教えてください',
          answer: '5レンジャープランは一律500万円の固定料金で、機能数制限なく何でも開発できます。シンプルでわかりやすい料金設定が特徴です。'
        },
        {
          question: '見積もり金額に含まれるものは何ですか？',
          answer: '見積もり金額には、要件定義、デザイン、開発、テスト、納品までの全ての工程が含まれています。ただし、サーバー費用やドメイン費用などのランニングコスト、保守費用は別途必要です。'
        },
        {
          question: '支払いのタイミングはいつですか？',
          answer: '着手時に半金、納品時に残りの半金をお支払いいただきます。5レンジャープランの場合、着手時に250万円、納品時に250万円となります。'
        }
      ]
    },
    {
      category: '開発プロセスについて',
      items: [
        {
          question: '開発期間はどのくらいかかりますか？',
          answer: '2〜6ヶ月がプロジェクト規模による目安です。機能の複雑さやAI機能の有無により変動する場合があります。詳細なスケジュールはヒアリング後にご提示いたします。'
        },
        {
          question: '開発中の仕様変更は可能ですか？',
          answer: '軽微な変更は可能ですが、大幅な仕様変更の場合は追加費用が発生する可能性があります。基本的な機能追加は基本料金に含まれますが、AI機能の追加は別途250万円となります。'
        },
        {
          question: '既存システムとの連携は可能ですか？',
          answer: 'はい、可能です。APIキー接続系の外部システム連携を1連携あたり50万円で実装いたします。CSV連携は無償で対応いたします。連携先システムの仕様により開発期間が変動する可能性がありますので、詳細はお問い合わせください。'
        }
      ]
    },
    {
      category: '保守・運用について',
      items: [
        {
          question: '保守費用には何が含まれますか？',
          answer: '保守費用には、システムの安定稼働のための監視、軽微なバグ修正、セキュリティアップデート、サーバーメンテナンスサポートが含まれます。新機能の追加や大幅な改修は別途お見積もりとなります。'
        },
        {
          question: 'サーバー費用はどのくらいかかりますか？',
          answer: 'データサーバー（Supabase）が月25$〜、公開サーバー（Vercel）が月20$〜で、合計月45$〜となります。利用量やAI機能の使用状況により変動する可能性があります。'
        },
        {
          question: '納品後のサポート体制はどうなっていますか？',
          answer: '納品後は月額保守契約をご契約いただくことで継続的なサポートを提供します。基本保守費用は月3万円で、AI機能を利用される場合は+月2万円、ネイティブアプリの場合も+月2万円となります。緊急時の対応も含まれています。'
        },
        {
          question: 'システムのアップデートは可能ですか？',
          answer: '可能です。保守契約内での軽微な修正は無料で対応します。新機能の追加や大幅な改修については、内容に応じて別途お見積もりさせていただきます。'
        }
      ]
    }
  ];

  const toggleAccordion = (categoryIndex: number, itemIndex: number) => {
    const index = categoryIndex * 10 + itemIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">
            よくあるご質問
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            5レンジャーに関する疑問にお答えします
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="mb-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-ai-blue">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-gray-50 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(categoryIndex, itemIndex)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-medium text-gray-900 pr-4">
                        {item.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 flex-shrink-0 transform transition-transform ${
                          openIndex === categoryIndex * 10 + itemIndex ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      style={{
                        height: openIndex === categoryIndex * 10 + itemIndex ? 'auto' : 0,
                        opacity: openIndex === categoryIndex * 10 + itemIndex ? 1 : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            その他のご質問もお気軽にお問い合わせください
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-ai-blue text-white font-bold rounded-full hover:bg-sky-blue transition-all duration-300 transform hover:scale-105"
          >
            無料相談・お問い合わせ
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;