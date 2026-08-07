import SectionHeader from './SectionHeader';

const AIRangerDetailSection = () => {
  const steps = [
    {
      no: '01',
      title: 'ヒアリング＆プロトタイプ開発',
      lead: 'やりたいことを話すだけでOK',
      description:
        'まずは「やりたいこと」「解決したい課題」を、普段の言葉でお聞かせください。ヒアリングを基にAIが即座に試作品を開発します。実際の画面を見ながら、一緒にイメージを具体化していきます。技術的な知識は一切不要です。',
    },
    {
      no: '02',
      title: '開発内容の確定＆ご契約',
      lead: '一律300万円・AI機能込み',
      description:
        '試作品で確認した内容をもとに、開発する機能や範囲を明確化します。一律300万円（機能数の制限なし＋AI機能込み）で、契約後の追加請求はありません。ご納得いただけた場合のみ、ご契約いただけます。',
    },
    {
      no: '03',
      title: '開発・テスト',
      lead: '2〜4ヶ月',
      description:
        '開発範囲が明確なので、AIが迷うことなく開発を進めます。完成後は実際に操作していただきながら動作確認を実施。使いにくい箇所をフィードバックいただき、現場が毎日使える状態に仕上げます。',
    },
    {
      no: '04',
      title: '納品・保守',
      lead: '納品後もずっと',
      description:
        '合意した内容どおりにシステムを納品し、その後の保守も対応します。月額プランは2つだけ。安定稼働とサポートのプランと、機能追加が無制限のプランからお選びいただけます。',
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="05"
            eyebrow="FLOW"
            heading="導入までの流れ"
            lead="たった4ステップ。専門知識は必要ありません。"
          />

          {/* 4ステップ */}
          <div className="border-t border-line mb-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className="border-b border-line py-10 md:py-14 grid md:grid-cols-[5rem_1fr] gap-y-5 md:gap-x-10"
              >
                <span className="text-2xl md:text-3xl font-black text-accent tabular-nums">
                  {step.no}
                </span>
                <div>
                  <h3 className="text-xl md:text-3xl font-black text-ink mb-2">{step.title}</h3>
                  <p className="text-sm md:text-base font-bold text-accent mb-5">{step.lead}</p>
                  <p className="text-sm md:text-base text-body leading-loose max-w-3xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* プロトタイプ無料の約束 */}
          <div className="bg-surface rounded-xl px-8 py-14 md:px-16 md:py-20 border border-line shadow-card">
            <p className="text-xs font-bold tracking-eyebrow text-accent mb-6">OUR PROMISE</p>
            <h3 className="text-2xl md:text-5xl font-black text-ink leading-[1.35] mb-10">
              まず<span className="text-accent">試作品を見て</span>から、
              <br />
              決めてください。
            </h3>
            <p className="text-base md:text-lg text-body leading-loose mb-12 max-w-3xl">
              資料やお見積書では、イメージが湧きません。だからご契約の前に、こちらで実物をお作りします。
              触ってみて「これは違う」と思われたら、契約していただかなくて結構です。
            </p>

            <div className="grid md:grid-cols-3 gap-px bg-line border border-line rounded-lg overflow-hidden">
              {[
                { title: '無料', text: '試作品の制作費はいただきません' },
                { title: '実物', text: '画面を触れる状態まで作ってお見せします' },
                { title: '無リスク', text: '気に入らなければ契約不要です' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8">
                  <p className="text-xl font-black text-accent mb-3">{item.title}</p>
                  <p className="text-sm text-body leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRangerDetailSection;
