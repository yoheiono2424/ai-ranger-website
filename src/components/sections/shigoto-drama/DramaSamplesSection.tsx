import DramaHeading from './DramaHeading';
import SampleVideo from './SampleVideo';

const DramaSamplesSection = () => {
  const samples = [
    {
      kicker: '採用ドラマ　九州の建設会社',
      title: '『現場の神様』',
      video: '/shigoto-drama/kensetsu.mp4',
      poster: '/shigoto-drama/poster-kensetsu.webp',
      duration: '約50秒',
      story:
        '入社初日、無口なベテラン職人に「やり直せ」と言われた新人。夕方、コーヒーを手に隣に座ったベテランは、谷の向こうの古い橋を指さした。',
      quote: '「お前が作っとるこの橋も、30年後残っとるぞ」',
    },
    {
      kicker: 'PRドラマ　佐賀の酒蔵',
      title: '『しずく』',
      video: '/shigoto-drama/sake.mp4',
      poster: '/shigoto-drama/poster-sake.webp',
      duration: '約70秒',
      story:
        '午前四時、麹に手を当てる杜氏の父。娘は問う、なんでそこまでするのかと。急かさずに待った一滴が、春、毎年待っている人に届く。',
      quote: '「飲む人の顔が、浮かぶけんたい」',
    },
    {
      kicker: '私たちの物語　シゴトドラマ',
      title: '『求人票には書けないこと』',
      video: '/shigoto-drama/jisha.mp4',
      poster: '/shigoto-drama/poster-jisha.webp',
      duration: '約60秒',
      story:
        '応募ゼロが続く工務店の社長。行きつけの定食屋で出会ったのは、会社のドラマを作る担当者だった。ドラマが届いた朝、門の前に一人の若者が立っている。',
      quote: '「ドラマを見て、来ました」',
    },
  ];

  return (
    <section id="samples" className="py-16 md:py-28 bg-drama-bg border-t border-drama-line scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <DramaHeading
            eyebrow="作品例"
            heading="まずは、1本ご覧ください"
            lead="架空の会社と人物で作った見本です。音声つきでご覧ください。"
          />

          <div className="grid md:grid-cols-3 gap-10 md:gap-6">
            {samples.map((sample) => (
              <div key={sample.title} className="flex flex-col">
                <div className="relative mx-auto w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden border border-drama-line bg-black mb-6">
                  <SampleVideo src={sample.video} poster={sample.poster} title={sample.title} />
                </div>
                <p className="text-xs font-bold tracking-wide text-drama-gold mb-2">{sample.kicker}</p>
                <h3 className="font-mincho font-bold text-2xl text-white mb-1">{sample.title}</h3>
                <p className="text-xs text-drama-sand mb-4">{sample.duration}</p>
                <p className="text-sm text-drama-paper/85 leading-loose mb-4">{sample.story}</p>
                <p className="font-mincho font-bold text-base text-white leading-relaxed">{sample.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DramaSamplesSection;
