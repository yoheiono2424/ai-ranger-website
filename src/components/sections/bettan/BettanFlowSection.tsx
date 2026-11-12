import { BettanHeading } from './BettanParts';

const BettanFlowSection = () => {
  return (
    <section className="py-16 md:py-28 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <BettanHeading file="FILE 03 ／ 頼み方" heading="何を頼めばいいか、分からなくて大丈夫" />

          <ol className="grid md:grid-cols-4 gap-4 md:gap-5">
            {/* STEP 1 */}
            <li className="rounded-xl border-2 border-bettan-red bg-white p-6 shadow-card">
              <p className="text-xs font-black tracking-eyebrow text-bettan-red mb-3">STEP 1</p>
              <h3 className="text-xl font-black text-ink mb-2">まず話す</h3>
              <p className="text-sm font-bold text-bettan-red mb-3">作戦会議 60分（無料）</p>
              <p className="text-sm text-body leading-relaxed">やりたいことも困りごとも、そのまま話すだけ。</p>
            </li>

            {/* STEP 2 */}
            <li className="rounded-xl border border-line bg-white p-6 shadow-card">
              <p className="text-xs font-black tracking-eyebrow text-bettan-red mb-3">STEP 2</p>
              <h3 className="text-xl font-black text-ink mb-4">「やりたい」を確かめる</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-lg font-black text-bettan-red leading-none">A</span>
                  <p className="text-sm text-body leading-relaxed">
                    <span className="font-bold text-ink">やりたいが決まっている</span>
                    <br />→ そのまま聞き取る
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-lg font-black text-bettan-red leading-none">B</span>
                  <p className="text-sm text-body leading-relaxed">
                    <span className="font-bold text-ink">何をすればいいか分からない</span>
                    <br />→ 話の中から「やりたい」を引き出す
                  </p>
                </div>
              </div>
            </li>

            {/* STEP 3 */}
            <li className="rounded-xl border border-line bg-white p-6 shadow-card">
              <p className="text-xs font-black tracking-eyebrow text-bettan-red mb-3">STEP 3</p>
              <h3 className="text-xl font-black text-ink mb-3">形にして見せる</h3>
              <p className="text-sm text-body leading-relaxed">試作を作り、目で見て確かめてもらう。</p>
            </li>

            {/* STEP 4 */}
            <li className="rounded-xl border border-line bg-white p-6 shadow-card">
              <p className="text-xs font-black tracking-eyebrow text-bettan-red mb-3">STEP 4</p>
              <h3 className="text-xl font-black text-ink mb-3">世に出して、支え続ける</h3>
              <p className="text-sm text-body leading-relaxed">使いながら直し、裏でずっと支える。</p>
            </li>
          </ol>

          <p className="mt-12 text-lg md:text-2xl font-black text-ink leading-relaxed">
            答えは社長の中にある。
            <br className="md:hidden" />
            別班は、それを形に変える係です。
          </p>
        </div>
      </div>
    </section>
  );
};

export default BettanFlowSection;
