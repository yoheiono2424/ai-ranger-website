import SectionHeader from '@/components/sections/service/SectionHeader';

const ReturnSeishunVisionSection = () => {
  const values = [
    {
      title: '挑戦',
      description:
        '予算や技術の壁で諦めていたことに、もう一度手を伸ばせる状態をつくります。「できない」を「できる」に変えることが、私たちの仕事です。',
    },
    {
      title: '成長',
      description:
        '規模の大小に関係なく、新しい技術を手にして前に進める。大手にしかできなかったことを、誰もが選べるようにします。',
    },
    {
      title: '希望',
      description:
        '毎日が作業の消化で終わらず、次にやりたいことが浮かんでくる。そんな状態を、仕事にも人生にも取り戻します。',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="OUR PHILOSOPHY"
            heading={
              <>
                <span className="text-accent">Return青春</span>
                <br />
                挑戦できる状態を、もう一度。
              </>
            }
            lead="青春とは、年齢のことではありません。夢中になれるものがあり、まだやれると思えている状態のことです。私たちはその状態を、企業にも個人にも取り戻したいと考えています。"
          />

          <div className="grid md:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden shadow-card mb-20">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 md:p-10">
                <p className="text-2xl font-black text-accent mb-5">{value.title}</p>
                <p className="text-sm text-body leading-loose">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-line pt-16">
            <p className="text-xl md:text-3xl font-black text-ink leading-[1.5] mb-8">
              だから私たちは、
              <br className="md:hidden" />
              一見まったく違う2つの事業をやっています。
            </p>
            <p className="text-base md:text-lg text-body leading-loose max-w-3xl">
              会社の仕事をAIで変えることも、友達と過ごす時間を取り戻すことも、私たちにとっては同じことです。
              どちらも「もうこんなものだ」と諦めていた状態から抜け出すための手段でしかありません。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnSeishunVisionSection;
