import Image from 'next/image';
import DramaHeading from './DramaHeading';

const DramaFlowSection = () => {
  const steps = [
    ['取材', '社長・社員から、本当の話を聞く'],
    ['世界観', '登場人物と舞台を設計する'],
    ['脚本', '心が動く1本の物語にまとめる'],
    ['制作', '映像・声・音楽を仕上げる'],
    ['ご確認と納品', '御社のOKが出たら、完成データをお渡し'],
  ];

  return (
    <section className="py-16 md:py-28 bg-drama-paper border-t border-drama-sand/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[0.8fr_1fr] gap-10 md:gap-14 items-center">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              src="/shigoto-drama/interview.webp"
              alt="取材で、笑顔で話す社長"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div>
            <DramaHeading
              tone="light"
              eyebrow="進め方"
              heading={
                <>
                  ご負担は、
                  <br />
                  最初の取材1時間だけ。
                </>
              }
            />
            <ol className="space-y-5 mb-8">
              {steps.map(([title, description], index) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-drama-bg text-sm font-bold text-drama-gold">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-lg font-bold text-drama-bg">{title}</p>
                    <p className="text-sm text-body">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-sm font-bold text-drama-brown">公開や広告の配信は、オプションでお手伝いします。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DramaFlowSection;
