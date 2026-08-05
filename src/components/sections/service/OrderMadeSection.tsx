import SectionHeader from './SectionHeader';

const OrderMadeSection = () => {
  const orderMadePoints = [
    {
      title: '画面も、デザインも',
      description:
        '御社の業務に合わせて一から作ります。使わない機能は載せません。毎日使う画面だけが、いちばん押しやすい場所にあります。',
    },
    {
      title: '呼び方も、順番も',
      description:
        '御社が普段使っている言葉のまま、普段やっている順番のままで作ります。現場が新しく覚え直す必要がありません。',
    },
    {
      title: '会社ごとに、違っていい',
      description:
        '同じ業種でも、会社が違えば仕事の流れは違います。だから既製品ではなく、御社専用に作ります。',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="03"
            eyebrow="WHY Re.haru"
            heading={
              <>
                なぜ、<span className="text-accent">Re.haru</span>が
                <br className="md:hidden" />
                選ばれるのか
              </>
            }
            lead="業務にAIを入れるのは、思っているより難しいからです。"
          />

          {/* 難しさの階層：左は淡く、右を主役に */}
          <div className="grid md:grid-cols-2 border-t border-line mb-16">
            <div className="py-10 md:pr-12 border-b md:border-b-0 md:border-r border-line">
              <p className="text-xs font-bold tracking-eyebrow text-muted mb-6">AIツールを使う</p>
              <p className="text-xl md:text-2xl font-black text-muted leading-snug mb-8">
                日常の延長で
                <br />
                できること
              </p>
              <ul className="space-y-3 mb-8">
                {['チャットに質問する', '文章や資料を書かせる', '簡単な社内ツールを用意する'].map(
                  (point, idx) => (
                    <li key={idx} className="text-sm text-muted leading-relaxed">
                      {point}
                    </li>
                  )
                )}
              </ul>
              <p className="text-sm font-bold text-muted">
                → 便利にはなるが、業務そのものは変わらない
              </p>
            </div>

            <div className="py-10 md:pl-12">
              <p className="text-xs font-bold tracking-eyebrow text-accent mb-6">
                業務をAIに任せる
              </p>
              <p className="text-xl md:text-2xl font-black text-ink leading-snug mb-8">
                専門知識が
                <br />
                必要になる領域
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'どのデータを渡し、どこまで任せ、どこから人が判断するかの線引き',
                  'AIが間違えたとき、誰がどこで気づくかの設計',
                  '権限・セキュリティ・既存システムとの接続',
                  '毎日動き続けるための運用と、止まったときの復旧',
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start text-sm text-body leading-relaxed">
                    <span className="text-accent mr-3 flex-shrink-0 font-bold">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-bold text-accent">
                → 業務設計とシステム設計の、両方が要る
              </p>
            </div>
          </div>

          {/* 結論 */}
          <div className="bg-accent-soft border border-accent/20 rounded-xl px-8 py-14 md:px-14 md:py-20 text-center mb-24 shadow-card">
            <p className="text-2xl md:text-5xl font-black text-ink leading-[1.4] mb-8">
              AIに詳しいだけでは、
              <br />
              業務は変わりません。
            </p>
            <p className="text-sm md:text-base text-body leading-relaxed">
              私たちは実際に業務システムを作り続けてきた会社です。
              <br className="hidden md:block" />
              だから、業務の中にAIを置けます。
            </p>
          </div>

          {/* 既製品の限界 */}
          <div className="mb-24">
            <p className="text-xs font-bold tracking-eyebrow text-muted mb-6">
              そして、既製品のツールでは
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-ink leading-snug mb-10">
              自社の業務を、ツールのやり方に
              <br className="md:hidden" />
              合わせることになります
            </h3>
            <div className="grid md:grid-cols-3 border-t border-line">
              {[
                '使わない機能が並び、欲しい機能はない',
                '入力の順番も呼び方も、自社のやり方と違う',
                '現場が「使いにくい」と言って、元のExcelに戻る',
              ].map((text, idx) => (
                <p
                  key={idx}
                  className="text-sm text-body leading-relaxed py-6 md:py-8 md:px-6 md:first:pl-0 border-b md:border-b-0 md:border-r md:last:border-r-0 border-line"
                >
                  {text}
                </p>
              ))}
            </div>
            <p className="text-base font-bold text-alert mt-8">
              → 合わせるのは、いつも現場のほう
            </p>
          </div>

          {/* オーダーメイドの答え */}
          <div>
            <p className="text-xs font-bold tracking-eyebrow text-accent mb-6">
              だから、オーダーメイド
            </p>
            <h3 className="text-2xl md:text-5xl font-black text-ink leading-[1.35] mb-16">
              御社が使いやすいように、
              <br />
              御社専用に作ります。
            </h3>

            <div className="grid md:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden shadow-card">
              {orderMadePoints.map((item, index) => (
                <div key={index} className="bg-white p-8 md:p-10">
                  <p className="font-black text-lg text-ink mb-4">{item.title}</p>
                  <p className="text-sm text-body leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-3xl md:text-5xl font-black text-ink mt-20">
              使いやすいから、使われる。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderMadeSection;
