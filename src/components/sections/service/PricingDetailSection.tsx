import Link from 'next/link';
import SectionHeader from './SectionHeader';

const PricingDetailSection = () => {
  const monthlyPlans = [
    {
      name: 'ライトプラン',
      price: '3',
      note: 'まずはこれで十分な方に（後からフルプランに変更可）',
      features: ['システムの安定稼働', '基本的なサポート', '機能追加は都度お見積もり'],
      recommended: false,
    },
    {
      name: 'フルプラン',
      price: '10',
      note: '自社専用のシステム部門を持つ感覚で',
      features: ['ライトプランのすべて', '機能追加が無制限', '運用に合わせて進化し続ける'],
      recommended: true,
    },
  ];

  const runningCosts = [
    {
      category: 'サーバー費用',
      items: [
        { name: 'データサーバー（Supabase）', price: '$25 / 月〜', note: '共通必須' },
        { name: '公開サーバー（Vercel）', price: '$20 / 月〜', note: 'WEB公開時' },
      ],
    },
    {
      category: 'AI利用料（日本語1,000文字あたり）',
      items: [
        { name: '高性能モデル', price: '約 6円', note: 'レポート作成・顧客対応チャット' },
        { name: 'バランスモデル', price: '約 0.6円', note: '社内文書・メール自動応答' },
        { name: '節約モデル', price: '約 0.12円', note: 'データ分類・定型文の生成' },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="09"
            eyebrow="PRICING"
            heading="料金プラン"
            lead="見積もりは要りません。数字はシンプルです。"
          />

          {/* 基本料金 */}
          <div className="bg-accent-soft border-2 border-accent rounded-xl px-8 py-12 md:px-14 md:py-16 mb-6 shadow-panel">
            <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 items-center">
              <div>
                <p className="text-xs font-bold tracking-eyebrow text-accent mb-6">開発費用</p>
                <p className="text-5xl md:text-7xl font-black text-accent leading-none mb-8">
                  一律 300<span className="text-2xl md:text-3xl ml-2">万円</span>
                </p>
                <ul className="space-y-2">
                  {['AI機能込み', '機能数の制限なし', '所有権はお客様'].map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-body">
                      <span className="text-accent mr-3">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="divide-y divide-accent/20 border-t border-accent/20">
                <div className="py-6">
                  <p className="text-xs text-muted mb-2">納期</p>
                  <p className="text-2xl font-black text-ink mb-1">2〜6ヶ月</p>
                  <p className="text-xs text-muted">最短2ヶ月で納品可能</p>
                </div>
                <div className="py-6">
                  <p className="text-xs text-muted mb-2">契約後の追加請求</p>
                  <p className="text-2xl font-black text-ink mb-1">0円</p>
                  <p className="text-xs text-muted">機能を何個作っても変わりません</p>
                </div>
              </div>
            </div>
          </div>

          {/* 特別オプション */}
          <div className="border border-line rounded-xl px-8 py-8 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-24 shadow-card">
            <div>
              <p className="text-xs font-bold tracking-eyebrow text-muted mb-2">特別オプション</p>
              <p className="text-lg font-black text-ink">ネイティブアプリ化</p>
              <p className="text-sm text-body mt-1">
                iOS / Android・ストア申請作業込み（合計600万円）
              </p>
            </div>
            <p className="text-3xl font-black text-accent whitespace-nowrap">+300万円</p>
          </div>

          {/* 月額プラン */}
          <div className="mb-24">
            <h3 className="text-2xl md:text-4xl font-black text-ink mb-4">月額プラン</h3>
            <p className="text-base text-body mb-12">2つから選ぶだけ。複雑な条件はありません。</p>

            <div className="grid md:grid-cols-2 gap-6">
              {monthlyPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-8 md:p-10 relative ${
                    plan.recommended
                      ? 'bg-accent-soft border-2 border-accent shadow-card'
                      : 'bg-white border border-line shadow-card'
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3 left-8 bg-accent text-white text-[11px] font-black tracking-wider px-3 py-1 rounded">
                      おすすめ
                    </span>
                  )}
                  <p className="text-lg font-black text-ink mb-2">{plan.name}</p>
                  <p className="text-xs text-muted mb-8 leading-relaxed">{plan.note}</p>
                  <p className="text-4xl md:text-5xl font-black text-ink mb-8 leading-none">
                    月額 {plan.price}
                    <span className="text-xl ml-1">万円</span>
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-body leading-relaxed">
                        <span
                          className={`mr-3 flex-shrink-0 font-bold ${
                            plan.recommended ? 'text-accent' : 'text-muted'
                          }`}
                        >
                          —
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-base md:text-lg text-body mt-10 leading-relaxed">
              人を1人雇えば月30万円以上。
              <strong className="text-ink">
                フルプランなら、その1/3で「作り続けられる体制」が手に入ります。
              </strong>
            </p>
          </div>

          {/* ランニングコスト */}
          <div className="mb-24">
            <h3 className="text-2xl md:text-4xl font-black text-ink mb-4">
              その他のランニングコスト
            </h3>
            <p className="text-base text-body mb-12">
              サーバー費用・AI利用料は、各社からの直接請求分（実費）です。
            </p>

            {runningCosts.map((cost, index) => (
              <div key={index} className="mb-10 last:mb-0">
                <p className="text-xs font-bold tracking-eyebrow text-accent mb-4">
                  {cost.category}
                </p>
                <div className="border-t border-line">
                  {cost.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="border-b border-line py-5 flex items-baseline justify-between gap-6"
                    >
                      <div>
                        <p className="text-sm md:text-base font-bold text-ink">{item.name}</p>
                        <p className="text-xs text-muted mt-1">{item.note}</p>
                      </div>
                      <p className="text-base md:text-lg font-black text-ink whitespace-nowrap tabular-nums">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <p className="text-xs text-muted leading-relaxed mt-8">
              ※ 社員100人が毎日使う業務システムであれば、基本料金の範囲をまず超えません。月の利用上限額を設定できるため、想定を超える請求が突然発生することはありません。
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-black text-ink leading-[1.4] mb-6">
              まずは、いちばん面倒な作業を
              <br />
              教えてください。
            </p>
            <p className="text-base text-body mb-10">その場で、何がどう変わるかをお見せします。</p>
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

export default PricingDetailSection;
