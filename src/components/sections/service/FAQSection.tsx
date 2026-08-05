


'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionHeader from './SectionHeader';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: '料金・プランについて',
      items: [
        {
          question: '料金体系を教えてください',
          answer: '開発費用は一律300万円です。機能を何個作っても金額は変わりません。AI機能も基本料金に込みで、何個実装しても追加料金はかかりません。見積もりを取っていただく必要がないので、最初から金額が確定しています。'
        },
        {
          question: '300万円に含まれるものは何ですか？',
          answer: '要件定義、デザイン、開発、テスト、納品までの全ての工程が含まれます。AI機能も込みです。所有権はお客様のものになります。別途かかるのは、納品後の月額プラン（3万円または10万円）と、サーバー費用・AI利用料（各社からの実費請求分）のみです。'
        },
        {
          question: 'スマホアプリとして公開することもできますか？',
          answer: 'はい。ネイティブアプリ化（iOS / Android・ストア申請作業込み）は +300万円で、合計600万円となります。なお、Apple（年間$99）・Google Play（年間$25）の登録費用は別途実費でご負担いただきます。'
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
          answer: '可能です。機能の追加もAI機能の追加も、基本料金300万円に込みです。何個実装しても追加料金は発生しません（AI使用料のAPI実費相当のみ従量課金で別途請求となります）。'
        },
        {
          question: '既存システムとの連携は可能ですか？',
          answer: 'はい、可能です。外部システムとの連携も基本料金300万円に含まれており、別途の連携費用はいただきません。連携先システムの仕様により開発期間が変動する可能性がありますので、詳細はお問い合わせください。'
        }
      ]
    },
    {
      category: '保守・運用について',
      items: [
        {
          question: '月額プランについて教えてください',
          answer: '2つから選ぶだけです。ライトプラン（月3万円）はシステムの安定稼働と基本的なサポートが含まれ、機能追加は都度お見積もりとなります。フルプラン（月10万円）はライトプランのすべてに加えて、機能追加が無制限です。後からライトプランからフルプランへ変更することもできます。'
        },
        {
          question: 'フルプランの「機能追加が無制限」とはどういうことですか？',
          answer: '納品後も、運用に合わせて機能を追加し続けられるということです。追加のたびに見積もりや請求は発生しません。人を1人雇えば月30万円以上かかりますが、その1/3の費用で「作り続けられる体制」を持てる、という考え方のプランです。'
        },
        {
          question: 'サーバー費用はどのくらいかかりますか？',
          answer: 'データサーバー（Supabase）が月$25〜、Webサイトとして公開する場合は公開サーバー（Vercel）が月$20〜です。社員100人が毎日使う業務システムであれば、基本料金の範囲をまず超えません。月の利用上限額を設定できるため、予期せぬ高額請求は防げます。'
        },
        {
          question: 'AI利用料はどのくらいかかりますか？',
          answer: '使った分だけの従量課金（実費）です。日本語1,000文字あたりの目安は、高性能モデルで約6円、バランスモデルで約0.6円、節約モデルで約0.12円です。用途に応じて最適なモデルを組み込みます。'
        }
      ]
    }
  ];

  const toggleAccordion = (categoryIndex: number, itemIndex: number) => {
    const index = categoryIndex * 10 + itemIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            index="10"
            eyebrow="FAQ"
            heading="よくあるご質問"
            lead="オーダーメイド業務AIに関する疑問にお答えします。"
          />

          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <h3 className="text-xs font-bold tracking-eyebrow text-muted mb-6">
                {category.category}
              </h3>
              <div className="border-t border-line">
                {category.items.map((item, itemIndex) => {
                  const isOpen = openIndex === categoryIndex * 10 + itemIndex;
                  return (
                    <div key={itemIndex} className="border-b border-line">
                      <button
                        onClick={() => toggleAccordion(categoryIndex, itemIndex)}
                        className="w-full py-6 text-left flex justify-between items-start gap-6 group"
                      >
                        <span className="text-base md:text-lg font-bold text-ink group-hover:text-accent transition-colors leading-snug">
                          {item.question}
                        </span>
                        <svg
                          className={`w-5 h-5 text-muted flex-shrink-0 mt-1 transform transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
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
                      {isOpen && (
                        <div className="pb-8 pr-10 text-sm md:text-base text-body leading-loose">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="text-center mt-24">
            <p className="text-base text-body mb-8">
              その他のご質問もお気軽にお問い合わせください
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-4 bg-accent text-white font-bold rounded-lg hover:bg-sky-blue transition-colors duration-200"
            >
              無料で相談する
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
