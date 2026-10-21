import DramaHeading from './DramaHeading';

const DramaScopeSection = () => {
  const included = ['取材・企画・脚本', '映像・声・音楽の制作と編集', '完成したドラマの納品'];
  const options = [
    '広告の配信・運用とレポート',
    'SNSの投稿・運用の代行',
    'LP・採用ページの制作',
    '業務の仕組み・システムの開発',
    '説明会用の長尺版',
  ];

  return (
    <section className="py-16 md:py-28 bg-drama-paper border-t border-drama-sand/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <DramaHeading tone="light" eyebrow="サービス範囲" heading="私たちは、御社専属のドラマ制作チームです" />

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="rounded-xl bg-drama-bg px-7 py-9 md:px-10 md:py-11">
              <h3 className="text-xl font-bold text-drama-gold mb-6">基本に含むもの</h3>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-base md:text-lg text-white">
                    <span className="mt-[0.75em] h-1 w-1 shrink-0 rounded-full bg-drama-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-white border border-drama-sand/40 px-7 py-9 md:px-10 md:py-11">
              <h3 className="text-xl font-bold text-drama-bg mb-6">オプション</h3>
              <ul className="space-y-4 mb-6">
                {options.map((item) => (
                  <li key={item} className="flex gap-3 text-base md:text-lg text-body">
                    <span className="mt-[0.75em] h-1 w-1 shrink-0 rounded-full bg-drama-sand" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted">オプションは、すべて個別にお見積もりします</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DramaScopeSection;
