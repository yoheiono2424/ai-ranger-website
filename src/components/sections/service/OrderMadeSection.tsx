import SectionHeader from './SectionHeader';

const OrderMadeSection = () => {
  const orderMadePoints = [
    {
      title: '画面も、デザインも',
      description: '使わない機能は載せません。毎日使う画面が、いちばん押しやすい場所にあります。',
    },
    {
      title: '呼び方も、順番も',
      description: '御社が普段使っている言葉と順番のまま。現場が覚え直す必要がありません。',
    },
    {
      title: '会社ごとに、違っていい',
      description: '同じ業種でも仕事の流れは違います。だから既製品ではなく、御社専用に。',
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-white border-t border-line">
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

          {/* 難しさの階層：スマホでも横2列のカード */}
          <div className="grid grid-cols-2 gap-3 md:gap-6 mb-10 md:mb-14">
            <div className="bg-surface border border-line rounded-xl p-5 md:p-8">
              <p className="text-[11px] md:text-xs font-bold text-muted mb-4 md:mb-6">
                AIツールを使う
              </p>
              <p className="text-lg md:text-2xl font-black text-body leading-snug mb-5 md:mb-8">
                日常の延長で
                <br />
                できること
              </p>
              <ul className="space-y-2 mb-5 md:mb-8">
                {['チャットに質問する', '文章を書かせる', '簡単なツールを作る'].map((point, idx) => (
                  <li key={idx} className="text-xs md:text-sm text-body leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-xs md:text-sm font-bold text-body leading-snug">
                → 便利にはなるが、
                <br className="md:hidden" />
                業務は変わらない
              </p>
            </div>

            <div className="bg-accent-soft border-2 border-accent rounded-xl p-5 md:p-8">
              <p className="text-[11px] md:text-xs font-bold text-accent mb-4 md:mb-6">
                業務をAIに任せる
              </p>
              <p className="text-lg md:text-2xl font-black text-ink leading-snug mb-5 md:mb-8">
                専門知識が
                <br />
                必要になる領域
              </p>
              <ul className="space-y-2 mb-5 md:mb-8">
                {[
                  'どこまで任せ、どこから人が判断するか',
                  'AIが間違えたとき、誰が気づくか',
                  '権限・セキュリティ・既存システム連携',
                  '止まったときの復旧',
                ].map((point, idx) => (
                  <li key={idx} className="text-xs md:text-sm text-body leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-xs md:text-sm font-bold text-accent leading-snug">
                → 業務設計とシステム設計、
                <br className="md:hidden" />
                両方が要る
              </p>
            </div>
          </div>

          {/* 結論 */}
          <div className="bg-accent-soft border border-accent/20 rounded-xl px-6 py-10 md:px-14 md:py-16 text-center mb-14 md:mb-24 shadow-card">
            <p className="text-xl md:text-4xl font-black text-ink leading-[1.45] mb-5">
              AIに詳しいだけでは、
              <br />
              業務は変わりません。
            </p>
            <p className="text-xs md:text-base text-body leading-relaxed">
              実際に業務システムを作り続けてきたから、業務の中にAIを置けます。
            </p>
          </div>

          {/* オーダーメイドの答え */}
          <div>
            <p className="text-xs font-bold tracking-eyebrow text-accent mb-5">
              だから、オーダーメイド
            </p>
            <h3 className="text-2xl md:text-5xl font-black text-ink leading-[1.4] mb-10 md:mb-16">
              御社が使いやすいように、
              <br />
              御社専用に作ります。
            </h3>

            <div className="grid md:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden shadow-card">
              {orderMadePoints.map((item, index) => (
                <div key={index} className="bg-white p-6 md:p-10">
                  <p className="font-black text-base md:text-lg text-ink mb-3">{item.title}</p>
                  <p className="text-sm text-body leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-2xl md:text-5xl font-black text-ink mt-14 md:mt-20">
              使いやすいから、使われる。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderMadeSection;
