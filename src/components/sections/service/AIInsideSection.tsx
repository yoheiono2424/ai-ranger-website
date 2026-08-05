import SectionHeader from './SectionHeader';

const AIInsideSection = () => {
  const workflows = [
    { task: '受注を登録', ai: 'AIが紙・FAXを読む' },
    { task: '顧客を管理', ai: 'AIが返信文を書く' },
    { task: '請求書を出す', ai: 'AIが自動で作成' },
    { task: '日報を書く', ai: 'AIが報告書に変換' },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="02"
            eyebrow="OUR ANSWER"
            heading={
              <>
                うちは<span className="text-alert">AI単体は売りません。</span>
                <br />
                使われないので。
              </>
            }
            lead={
              <span className="text-lg md:text-2xl font-bold text-ink">
                業務システムを作って、その中にAIを入れます。だから毎日使われます。
              </span>
            }
          />

          {/* 対比：罫線のみで構成 */}
          <div className="grid md:grid-cols-2 border-t border-line mb-24">
            <div className="py-10 md:pr-12 border-b md:border-b-0 md:border-r border-line">
              <p className="text-xs font-bold tracking-eyebrow text-muted mb-6">
                AI単体（チャットボット等）
              </p>
              <p className="text-2xl md:text-3xl font-black text-muted leading-snug mb-6">
                使わなくても
                <br />
                仕事は回る
              </p>
              <p className="text-sm font-bold text-alert">→ 3ヶ月後には開かれない</p>
            </div>

            <div className="py-10 md:pl-12">
              <p className="text-xs font-bold tracking-eyebrow text-accent mb-6">
                業務システム ＋ AI
              </p>
              <p className="text-2xl md:text-3xl font-black text-ink leading-snug mb-6">
                使わないと
                <br />
                仕事が回らない
              </p>
              <p className="text-sm font-bold text-accent">→ 意識せずに毎日使われる</p>
            </div>
          </div>

          {/* 図解 */}
          <div className="mb-10">
            <h3 className="text-2xl md:text-4xl font-black text-ink mb-4">
              AIは、システムの&quot;中&quot;にあります
            </h3>
            <p className="text-base text-body">
              社員が毎日開く画面のなかで、AIが勝手に働いています。
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-line bg-white shadow-panel">
            <div className="bg-accent px-6 py-4">
              <p className="text-white font-bold text-sm">
                御社専用の業務システム（毎日開く画面）
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-line">
              {workflows.map((item, index) => (
                <div key={index} className="p-6 md:p-8">
                  <p className="font-bold text-ink mb-4 text-sm md:text-base">{item.task}</p>
                  <span className="inline-block bg-accent-soft text-accent text-[11px] font-black px-2.5 py-1 rounded mb-4">
                    AI
                  </span>
                  <p className="text-xs md:text-sm text-body leading-relaxed">{item.ai}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-line px-6 py-6 bg-surface">
              <p className="text-sm md:text-base font-bold text-ink text-center">
                システムを使うだけで、AIが裏側で動きます。「AIを使おう」と意識する必要がありません。
              </p>
            </div>
          </div>

          <p className="text-2xl md:text-4xl font-black text-ink text-center mt-20">
            だから、<span className="text-alert">使われないAI</span>になりません。
          </p>

          <p className="text-base md:text-lg text-body leading-loose text-center mt-12 max-w-3xl mx-auto">
            研修で使い方を教えても、現場は「使わなくてもいい理由」を見つけてしまいます。
            <br className="hidden md:block" />
            私たちは
            <strong className="text-ink">「使わないと仕事が回らない場所」にAIを置く</strong>
            ことで、定着の問題そのものをなくします。
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIInsideSection;
