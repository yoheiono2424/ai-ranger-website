import SectionHeader from './SectionHeader';

const AIInsideSection = () => {
  const workflows = [
    { task: '受注を登録', ai: 'AIが紙・FAXを読む' },
    { task: '顧客を管理', ai: 'AIが返信文を書く' },
    { task: '請求書を出す', ai: 'AIが自動で作成' },
    { task: '日報を書く', ai: 'AIが報告書に変換' },
  ];

  return (
    <section className="py-16 md:py-32 bg-white border-t border-line">
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
            lead="業務システムを作って、その中にAIを入れます。だから毎日使われます。"
          />

          {/* 対比：スマホでも横2列のカード */}
          <div className="grid grid-cols-2 gap-3 md:gap-6 mb-14 md:mb-24">
            <div className="bg-surface border border-line rounded-xl p-5 md:p-8">
              <p className="text-[11px] md:text-xs font-bold text-muted mb-4 md:mb-6 leading-snug">
                AI単体
                <span className="hidden md:inline">（チャットボット等）</span>
              </p>
              <p className="text-lg md:text-3xl font-black text-body leading-snug mb-4 md:mb-6">
                使わなくても
                <br />
                仕事は回る
              </p>
              <p className="text-xs md:text-sm font-bold text-alert leading-snug">
                → 3ヶ月後には
                <br className="md:hidden" />
                開かれない
              </p>
            </div>

            <div className="bg-accent-soft border-2 border-accent rounded-xl p-5 md:p-8">
              <p className="text-[11px] md:text-xs font-bold text-accent mb-4 md:mb-6 leading-snug">
                業務システム ＋ AI
              </p>
              <p className="text-lg md:text-3xl font-black text-ink leading-snug mb-4 md:mb-6">
                使わないと
                <br />
                仕事が回らない
              </p>
              <p className="text-xs md:text-sm font-bold text-accent leading-snug">
                → 意識せずに
                <br className="md:hidden" />
                毎日使われる
              </p>
            </div>
          </div>

          {/* 図解 */}
          <div className="mb-8">
            <h3 className="text-xl md:text-4xl font-black text-ink mb-3">
              AIは、システムの&quot;中&quot;にあります
            </h3>
            <p className="text-sm md:text-base text-body">
              社員が毎日開く画面のなかで、AIが勝手に働いています。
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-line bg-white shadow-panel">
            <div className="bg-accent px-5 py-3 md:px-6 md:py-4">
              <p className="text-white font-bold text-xs md:text-sm">
                御社専用の業務システム（毎日開く画面）
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-line">
              {workflows.map((item, index) => (
                <div key={index} className="p-5 md:p-8">
                  <p className="font-bold text-ink mb-3 text-sm md:text-base">{item.task}</p>
                  <span className="inline-block bg-accent-soft text-accent text-[11px] font-black px-2.5 py-1 rounded mb-3">
                    AI
                  </span>
                  <p className="text-xs md:text-sm text-body leading-relaxed">{item.ai}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-line px-5 py-5 md:px-6 md:py-6 bg-surface">
              <p className="text-xs md:text-base font-bold text-ink text-center leading-relaxed">
                システムを使うだけで、AIが裏側で動きます。
                <br className="md:hidden" />
                「AIを使おう」と意識する必要がありません。
              </p>
            </div>
          </div>

          <p className="text-2xl md:text-4xl font-black text-ink text-center mt-14 md:mt-20">
            だから、<span className="text-alert">使われないAI</span>になりません。
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIInsideSection;
