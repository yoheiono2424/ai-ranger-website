import Image from 'next/image';

const BettanBaseSection = () => {
  return (
    <section className="relative bg-bettan-bg overflow-hidden">
      <div className="relative min-h-[460px] md:min-h-[520px] flex items-end md:items-center">
        <Image
          src="/bettan/kumamoto.webp"
          alt="夜の熊本の街と熊本城"
          fill
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bettan-bg via-bettan-bg/50 to-transparent md:bg-gradient-to-r md:from-bettan-bg/85 md:via-bettan-bg/30 md:to-transparent" />

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-lg">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-8 bg-bettan-red" />
                <span className="text-xs font-bold tracking-eyebrow text-bettan-red">FILE 08 ／ 拠点</span>
              </div>
              <h2 className="text-[1.75rem] leading-[1.45] md:text-[2.6rem] md:leading-[1.35] font-black text-bettan-text mb-6">
                熊本・九州だから、
                <br />
                すぐ会いに行ける。
              </h2>
              <p className="text-base text-bettan-text/90 leading-loose">
                熊本を拠点に、九州全域へ。画面越しだけでなく、顔を合わせて話せる距離にいます。思い立ったら、すぐ呼んでください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BettanBaseSection;
