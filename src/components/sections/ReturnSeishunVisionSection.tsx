const ReturnSeishunVisionSection = () => {
  const values = [
    {
      title: '挑戦',
      en: 'Challenge',
      description:
        '予算や技術の壁で諦めていたことに、もう一度手を伸ばせる状態をつくります。「できない」を「できる」に変えることが、私たちの仕事です。',
      gradient: 'from-seishun-sky to-seishun-deep',
    },
    {
      title: '成長',
      en: 'Growth',
      description:
        '規模の大小に関係なく、新しい技術を手にして前に進める。大手にしかできなかったことを、誰もが選べるようにします。',
      gradient: 'from-seishun-aqua to-seishun-sky',
    },
    {
      title: '希望',
      en: 'Hope',
      description:
        '毎日が作業の消化で終わらず、次にやりたいことが浮かんでくる。そんな状態を、仕事にも人生にも取り戻します。',
      gradient: 'from-seishun-pink to-seishun-aqua',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* 淡い青春グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-seishun-sky/10 to-white" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-seishun-aqua/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 -right-32 h-[420px] w-[420px] rounded-full bg-seishun-pink/20 blur-[130px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 md:mb-20">
            <p className="text-xs font-bold tracking-eyebrow text-seishun-deep mb-6">
              OUR PHILOSOPHY
            </p>
            <h2 className="text-2xl md:text-5xl font-black text-ink leading-[1.45] mb-8">
              あの頃、
              <br className="md:hidden" />
              できない理由を探さなかった。
            </h2>
            <p className="text-sm md:text-lg text-body leading-loose max-w-3xl">
              いつからか、予算が、時間が、人が足りないと言うようになった。
              <br className="hidden md:block" />
              でも本当に足りなかったのは、たぶんそれじゃない。
            </p>
          </div>

          {/* 3つの価値 */}
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-14 md:mb-20">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur rounded-2xl p-7 md:p-9 shadow-card border border-white"
              >
                <div
                  className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${value.gradient} mb-6`}
                />
                <p className="text-[11px] font-bold tracking-eyebrow text-muted mb-2">{value.en}</p>
                <p className="text-2xl md:text-3xl font-black text-ink mb-4">{value.title}</p>
                <p className="text-sm text-body leading-loose">{value.description}</p>
              </div>
            ))}
          </div>

          {/* 2事業をつなぐメッセージ */}
          <div className="bg-white/70 backdrop-blur border border-white rounded-2xl p-8 md:p-12 shadow-card">
            <p className="text-xl md:text-3xl font-black text-ink leading-[1.5] mb-6">
              だから私たちは、
              <br className="md:hidden" />
              まったく違う2つの事業をやっています。
            </p>
            <p className="text-sm md:text-base text-body leading-loose max-w-3xl">
              会社の仕事をAIで変えることも、友達と過ごす時間を取り戻すことも、私たちにとっては同じことです。
              どちらも「もうこんなものだ」と諦めていた状態から抜け出すための、手段でしかありません。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnSeishunVisionSection;
