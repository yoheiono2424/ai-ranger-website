import SectionHeader from './SectionHeader';

const ProblemSolutionSection = () => {
  const removed = [
    {
      before: '見積もり',
      after: '一律 300万円',
      description: '機能を何個作っても、金額は変わりません',
    },
    {
      before: '追加請求',
      after: '0円',
      description: '契約したあとに金額が増えることは、一度もありません',
    },
    {
      before: '作って終わり',
      after: '月10万円で無制限',
      description: '納品後も機能を追加し続けられます',
    },
  ];

  const problems = [
    {
      title: 'いくらかかるのか分からない',
      description: '見積もりを取るまで読めず、何社も取るのも手間',
    },
    {
      title: '契約したあとに増えるのが怖い',
      description: '31.2%のプロジェクトで、追加の開発費が発生している',
    },
    {
      title: '作ったあとに直せない',
      description: '少し変えたいだけでも、毎回見積もりと請求が出る',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="07"
            eyebrow="OUR PRICE"
            heading={
              <>
                システム開発が
                <br />
                <span className="text-alert">「頼みにくいもの」</span>になっている。
              </>
            }
            lead="それを変えるのが、私たちの仕事です。"
          />

          {/* 頼みにくい3つの理由 */}
          <div className="grid md:grid-cols-3 border-t border-line mb-24">
            {problems.map((item, index) => (
              <div
                key={index}
                className="py-8 md:py-10 md:px-6 md:first:pl-0 md:last:pr-0 border-b md:border-b-0 md:border-r md:last:border-r-0 border-line"
              >
                <p className="text-base md:text-lg font-bold text-ink mb-3 leading-snug">
                  {item.title}
                </p>
                <p className="text-sm text-body leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* なくしたもの */}
          <div className="mb-24">
            <h3 className="text-2xl md:text-4xl font-black text-ink leading-snug mb-4">
              私たちが、なくしたもの
            </h3>
            <p className="text-base text-body mb-12">
              開発を頼みにくくしていた3つを、やめました。
            </p>

            <div className="border-t border-line">
              {removed.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-line py-8 md:py-10 grid md:grid-cols-[13rem_1fr] gap-y-3 md:gap-x-10 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base md:text-lg font-bold text-muted line-through decoration-alert decoration-2">
                      {item.before}
                    </span>
                    <span className="text-muted">→</span>
                  </div>
                  <div>
                    <p className="text-xl md:text-3xl font-black text-accent mb-2">{item.after}</p>
                    <p className="text-sm md:text-base text-body">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 締め */}
          <div className="text-center">
            <p className="text-2xl md:text-5xl font-black text-ink leading-[1.4] mb-10">
              一律300万円。
              <br />
              これが、システム開発の&quot;百均&quot;です。
            </p>
            <p className="text-base md:text-lg text-body leading-loose max-w-2xl mx-auto">
              私たちがお渡ししたいのは、安さではありません。
              <br />
              <strong className="text-ink">3年後の総額まで、最初から読める</strong>という確かさです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
