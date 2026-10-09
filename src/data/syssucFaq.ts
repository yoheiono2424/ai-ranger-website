/**
 * SysSuc よくあるご質問
 * サービスページの表示と、構造化データ（FAQPage）の両方で使う
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export const syssucFaq: FaqCategory[] = [
  {
    category: '料金・お支払いについて',
    items: [
      {
        question: '料金体系を教えてください',
        answer:
          '初期費用は0円、月額20万円（税別）の定額です。作るシステムの件数で月額は変わりません。',
      },
      {
        question: '支払いはどのようになりますか？',
        answer: '最初の3か月分（60万円）だけ前払いいただき、4か月目以降は毎月のお支払いです。',
      },
      {
        question: '契約期間はどのくらいですか？',
        answer: '最低6か月です。以降は3か月ごとの更新となります。',
      },
    ],
  },
  {
    category: '開発について',
    items: [
      {
        question: 'どんなものを作ってもらえますか？',
        answer:
          '見積・日報・受発注・在庫など、御社の業務システムです。その中にAIを組み込みます。スマホアプリは対象外です。',
      },
      {
        question: '1か月で終わらない大きな依頼はどうなりますか？',
        answer: '1件は1か月以内で作ります。それを超える大きな依頼は、分けて順番に作っていきます。',
      },
      {
        question: '打ち合わせはどうやって行いますか？',
        answer: 'オンラインで完結します。ご来社いただく必要はありません。',
      },
    ],
  },
  {
    category: 'データについて',
    items: [
      {
        question: 'データの扱いはどうなりますか？',
        answer: 'データは御社のものです。AIの学習には使いません。',
      },
    ],
  },
];
