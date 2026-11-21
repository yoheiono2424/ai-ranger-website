/**
 * 社長のAI別班（/service・/lp/ai 共通）
 * 2026/11/21 営業資料v11に合わせて刷新：白×紺(ab-navy)×シアン(ab-cyan)
 * HPには条件を深く書かない（所有権・解約・支払いの細部は商談で）。金額は料金の所で1回だけ。
 */
import Image from 'next/image';

export const Eyebrow = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <p className={`text-xs md:text-sm font-bold tracking-eyebrow mb-4 ${dark ? 'text-[#7FDBF0]' : 'text-ab-cyan-ink'}`}>{children}</p>
);

export const H2 = ({ children, lead, dark = false }: { children: React.ReactNode; lead?: React.ReactNode; dark?: boolean }) => (
  <div className="mb-10 md:mb-14">
    <h2 className={`text-[1.6rem] leading-[1.5] md:text-[2.4rem] md:leading-[1.4] font-black tracking-tight ${dark ? 'text-white' : 'text-ab-navy'}`}>
      {children}
    </h2>
    {lead && <p className={`mt-4 text-base md:text-lg leading-loose max-w-3xl ${dark ? 'text-[#C9D6E8]' : 'text-ab-muted'}`}>{lead}</p>}
  </div>
);

export const Check = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);
export const Minus = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeWidth={3} d="M6 12h12" />
  </svg>
);
export const Arrow = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
  </svg>
);

const Wrap = ({ children }: { children: React.ReactNode }) => (
  <div className="container mx-auto px-5">
    <div className="max-w-5xl mx-auto">{children}</div>
  </div>
);

export const CtaButton = ({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) => (
  <a
    href={href}
    className={`flex w-full sm:inline-flex sm:w-auto items-center justify-center px-8 py-4 text-base md:text-lg font-bold rounded-lg transition-colors duration-200 ${
      light ? 'bg-white text-ab-navy hover:bg-ab-tint' : 'bg-ab-cyan text-white hover:bg-ab-navy'
    }`}
  >
    {children}
    <Arrow className="w-4 h-4 ml-2" />
  </a>
);

/* ── いまの悩み（業種別） ───────────────────── */
const industries = [
  ['建設', '日報まとめ・見積書・資格や車検の期限管理'],
  ['製造', '検査記録・校正期限・ベテラン頼みの作業'],
  ['士業', '書類の作成とチェック・点数計算・連絡'],
  ['小売・飲食', '発注の判断・シフト表・売上の集計'],
];
export const AbPain = ({ no = '01' }: { no?: string }) => (
  <section className="py-16 md:py-24 bg-white">
    <Wrap>
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-center">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image src="/aibettan/paper.webp" alt="書類が山積みになった事務所の机" fill sizes="(min-width:768px) 45vw, 100vw" className="object-cover" />
        </div>
        <div>
          <Eyebrow>{no} ｜ いまの悩み</Eyebrow>
          <H2>その作業、毎月何時間かかっていますか</H2>
          <ul className="space-y-3 -mt-4">
            {industries.map(([k, v]) => (
              <li key={k} className="flex items-center gap-4 rounded-xl bg-ab-gray px-5 py-4">
                <span className="w-24 shrink-0 font-black text-ab-navy">{k}</span>
                <span className="text-sm md:text-base text-ab-text">{v}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-bold text-ab-cyan-ink">人がやらなくていいのに、人がやっている仕事</p>
        </div>
      </div>
    </Wrap>
  </section>
);

/* ── AIは使いこなすのに時間がかかる ─────────── */
export const AbComplex = ({ no = '02' }: { no?: string }) => (
  <section className="py-16 md:py-24 bg-ab-gray">
    <Wrap>
      <Eyebrow>{no} ｜ もう1つの悩み</Eyebrow>
      <H2 lead="機能はどんどん増え、毎月のようにバージョンアップ。覚えることが増え続けています。">AIを使いこなすには、結局時間がかかる</H2>
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-5">
        <div className="rounded-2xl bg-white p-6 md:p-8 shadow-card">
          <p className="font-bold text-ab-navy mb-4">社内でAIを使おうとすると…</p>
          <ul className="space-y-3 text-sm md:text-base">
            {['担当者が、AIを一から勉強する', '社員に使い方を教える（社員教育）', '試して、失敗して、やり直す', 'バージョンアップのたびに、覚え直し'].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ab-cyan shrink-0" />
                {t}
              </li>
            ))}
            <li className="flex gap-3 items-start font-bold text-[#B8761A]">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E39B2D] shrink-0" />
              使い方を誤ると、情報もれの危険も
            </li>
          </ul>
        </div>
        <div className="rounded-2xl bg-ab-navy p-6 md:p-8 flex flex-col justify-center">
          <p className="text-xl md:text-2xl font-black text-white leading-relaxed">
            その時間で、本業ができる。
            <br />
            だったら、任せた方が早くて安心。
          </p>
        </div>
      </div>
    </Wrap>
  </section>
);

/* ── 別班＝AIの専用部署 ─────────────────────── */
export const AbDept = ({ no = '03' }: { no?: string }) => (
  <section className="py-16 md:py-24 bg-white">
    <Wrap>
      <Eyebrow>{no} ｜ 別班とは</Eyebrow>
      <H2 lead="人を雇わず、社外に。社長直属で動くのが「AI別班」です。">御社に、AIの専用部署をつくります</H2>
      <div className="grid md:grid-cols-[1fr_auto_1.2fr] gap-4 md:gap-6 items-center">
        <div className="rounded-2xl bg-ab-gray p-6 text-center">
          <p className="text-xs font-bold text-ab-muted mb-3">御社</p>
          <p className="inline-block rounded-full bg-ab-navy text-white font-bold px-5 py-2 mb-4">社長</p>
          <div className="flex justify-center gap-2 text-sm">
            {['営業', '現場', '経理'].map((t) => (
              <span key={t} className="rounded-lg bg-white border border-ab-line px-3 py-1.5">{t}</span>
            ))}
          </div>
          <p className="mt-3 text-xs font-bold text-ab-cyan-ink">社員さんは、本業に集中</p>
        </div>
        <div className="text-center text-xs font-bold text-ab-cyan-ink leading-relaxed">
          LINEで直接たのむ →<br />← 形にして届ける
        </div>
        <div className="rounded-2xl border-2 border-dashed border-ab-navy p-5">
          <p className="text-xs font-bold text-ab-navy mb-3">社長のAI別班（社外）</p>
          <p className="rounded-lg bg-ab-navy text-white text-sm px-4 py-2 mb-3">担当（人）── 話を聞いて、形を決める</p>
          <div className="grid grid-cols-3 gap-2 text-xs text-center">
            {['見積AI', '経理AI', '書類AI', '分析AI', '期限AI', '次々に'].map((t) => (
              <span key={t} className="rounded-lg bg-ab-tint text-ab-navy font-bold py-2">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-8 text-center font-bold text-ab-navy">雇わない。教えない。でも、御社だけのために動く部署です。</p>
    </Wrap>
  </section>
);

/* ── 作るもの ───────────────────────────── */
const builds = [
  ['自動化', '決まった作業や書類づくりを、AIがこなす'],
  ['書類・データの管理', '散らばった書類をまとめ、すぐ探せる'],
  ['分析・レポート', '数字を読み解き、気づきを届ける'],
  ['御社専用のシステム', '管理画面・予約・顧客管理まで形にする'],
];
export const AbBuild = ({ no = '04' }: { no?: string }) => (
  <section className="py-16 md:py-24 bg-ab-gray">
    <Wrap>
      <Eyebrow>{no} ｜ 作るもの</Eyebrow>
      <H2 lead="御社専用。自動化だけでなく、管理・分析まで。">作るのは「AIエージェントシステム」</H2>
      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6 items-center">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-white">
          <Image src="/aibettan/build.webp" alt="書類・メール・グラフ・予定表とつながるAIのイメージ" fill sizes="(min-width:768px) 35vw, 100vw" className="object-cover" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {builds.map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-white p-6 shadow-card">
              <p className="font-black text-ab-navy mb-2">{t}</p>
              <p className="text-sm text-ab-muted leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 rounded-2xl bg-white overflow-hidden shadow-card">
        <div className="grid grid-cols-[4.5rem_minmax(0,1fr)_minmax(0,1fr)] md:grid-cols-[9rem_minmax(0,1fr)_minmax(0,1fr)] text-sm">
          <div className="p-3 md:p-4" />
          <div className="p-3 md:p-4 font-bold text-ab-muted">ChatGPTなど</div>
          <div className="p-3 md:p-4 font-bold text-white bg-ab-navy">AIエージェントシステム</div>
          {[
            ['使い方', '人が毎回質問する', '渡せば最後まで仕上げる・決まった仕事は自動で'],
            ['御社のこと', '毎回説明が必要', 'やり方・書式を覚えている'],
            ['つながり', '結果を人がコピーして使う', 'メール・LINE・表計算とつながる'],
            ['誰のもの', 'みんな同じ道具', '御社だけの専用品'],
          ].map(([k, a, b]) => (
            <div key={k} className="contents">
              <div className="p-3 md:p-4 border-t border-ab-line font-bold text-ab-navy">{k}</div>
              <div className="p-3 md:p-4 border-t border-ab-line text-ab-muted">{a}</div>
              <div className="p-3 md:p-4 border-t border-ab-line bg-ab-tint font-bold text-ab-navy">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  </section>
);

/* ── 渡す・確かめるだけ ─────────────────────── */
export const AbHandCheck = ({ no = '05' }: { no?: string }) => (
  <section className="py-16 md:py-24 bg-white">
    <Wrap>
      <Eyebrow>{no} ｜ 私たちなら</Eyebrow>
      <H2 lead="たとえば、書類をまとめる仕事の場合。">人がやるのは「渡す」と「確かめる」だけ</H2>
      <div className="space-y-4">
        <div className="grid grid-cols-[3.5rem_minmax(0,1fr)_auto] md:grid-cols-[6rem_minmax(0,1fr)_auto] items-center gap-3">
          <span className="text-sm font-bold text-ab-navy">いま</span>
          <div className="grid grid-cols-4 gap-1 text-[10px] md:text-sm text-center text-white">
            {['資料を集める', '読んで計算する', '書類にまとめる', '見直す'].map((t) => (
              <span key={t} className="bg-[#9AA6B6] rounded py-2.5">{t}</span>
            ))}
          </div>
          <span className="font-black text-ab-navy text-lg md:text-2xl">約2時間</span>
        </div>
        <div className="grid grid-cols-[3.5rem_minmax(0,1fr)_auto] md:grid-cols-[6rem_minmax(0,1fr)_auto] items-center gap-3">
          <span className="text-sm font-bold text-ab-navy">入れた後</span>
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)_minmax(0,2.5fr)] gap-1 text-[10px] md:text-sm text-center leading-tight">
            <span className="bg-ab-navy text-white rounded py-2.5">渡す</span>
            <span className="bg-ab-cyan text-white rounded py-2.5">AIが読んで、まとめる</span>
            <span className="bg-ab-navy text-white rounded py-2.5">確かめる</span>
            <span className="border-2 border-dashed border-ab-cyan text-ab-cyan-ink rounded py-2">空いた時間は、本業へ</span>
          </div>
          <span className="font-black text-ab-cyan-ink text-lg md:text-2xl">約10分</span>
        </div>
      </div>
      <p className="mt-10 mb-4 font-bold text-ab-navy">AIが動くきっかけは、2つ</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-ab-tint p-6">
          <p className="font-black text-ab-navy mb-1">資料を渡したとき・頼んだとき</p>
          <p className="text-sm text-ab-muted">例：領収書を入れる → 仕訳と月次のまとめができる</p>
        </div>
        <div className="rounded-2xl bg-ab-tint p-6">
          <p className="font-black text-ab-navy mb-1">決まった時間に、自動で</p>
          <p className="text-sm text-ab-muted">例：毎朝、期限が近いものを調べて知らせる</p>
        </div>
      </div>
    </Wrap>
  </section>
);

/* ── 画面イメージ ───────────────────────── */
export const AbDemo = ({ no = '06' }: { no?: string }) => (
  <section className="py-16 md:py-24 bg-ab-gray">
    <Wrap>
      <Eyebrow>{no} ｜ 画面イメージ</Eyebrow>
      <H2 lead="見積・請求のAIエージェント（建設会社の例）。1つの画面で全部のAIを管理し、社長はスマホで「OK」を押すだけ。">決まった仕事を、自動で進める</H2>
      <div className="grid md:grid-cols-[1fr_0.28fr] gap-4 items-end">
        <div className="relative aspect-[1600/780] rounded-xl overflow-hidden shadow-panel bg-white">
          <Image src="/aibettan/demo-console.webp" alt="AIエージェントの稼働状況画面。今日の動き、今月の削減時間、週次の分析が並ぶ" fill sizes="(min-width:768px) 70vw, 100vw" className="object-contain" />
        </div>
        <div className="relative aspect-[440/780] hidden md:block">
          <Image src="/aibettan/demo-phone.webp" alt="スマホのトークで見積の下書きを確認し、OKを押す画面" fill sizes="20vw" className="object-contain" />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          ['見積の下書き', '1件60分 →', '4分'],
          ['請求もれ', '見落とし →', '月3件発見'],
          ['減った作業時間', '', '月46時間'],
        ].map(([k, a, b]) => (
          <div key={k} className="rounded-xl bg-ab-navy p-4 md:p-5">
            <p className="text-xs md:text-sm text-[#7FDBF0] font-bold">{k}</p>
            <p className="text-xs text-[#C9D6E8] mt-1 h-4">{a}</p>
            <p className="text-lg md:text-2xl font-black text-white">{b}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-ab-muted">※デモ画面・数字は想定例です</p>
    </Wrap>
  </section>
);

/* ── Re.haru自身 ─────────────────────────── */
export const AbProof = ({ no = '07' }: { no?: string }) => (
  <section className="py-16 md:py-24 bg-white">
    <Wrap>
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
        <div>
          <Eyebrow>{no} ｜ 本当にできるのか</Eyebrow>
          <H2 lead="人を雇わずに、会社の仕事を回しています。">Re.haru自身が、AIエージェントで回っています</H2>
          <ul className="space-y-3 -mt-4">
            {[
              ['営業', '相手探しから最初の連絡まで'],
              ['メール', '大事なものを選んで返信'],
              ['広告', '作る・試す・直す・毎日報告'],
              ['動画', '作る・投稿する'],
            ].map(([k, v]) => (
              <li key={k} className="flex gap-4 items-center border-b border-ab-line pb-3">
                <span className="w-16 font-black text-ab-navy">{k}</span>
                <span className="text-sm md:text-base text-ab-text">{v}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image src="/aibettan/monitors.webp" alt="複数のモニターにAIの稼働画面が並ぶ様子" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-ab-navy/90 px-5 py-4 flex items-baseline gap-3">
            <span className="text-4xl font-black text-white">約20</span>
            <span className="text-sm text-[#C9D6E8]">種類のAIエージェントが毎日動いています</span>
          </div>
        </div>
      </div>
    </Wrap>
  </section>
);

/* ── 進め方 ─────────────────────────────── */
export const AbFlow = ({ no = '08' }: { no?: string }) => (
  <section className="py-16 md:py-24 bg-ab-gray">
    <Wrap>
      <Eyebrow>{no} ｜ 進め方</Eyebrow>
      <H2>まずは話すだけ。試作までは無料です</H2>
      <ol className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          ['話す', '困りごと・やりたいことを聞く'],
          ['試作', '動く画面を作って見てもらう'],
          ['契約', '納得してから申し込み'],
          ['稼働', '最初のシステムが動き出す'],
          ['毎月育てる', '直す・増やす・賢くする'],
        ].map(([t, d], i) => (
          <li key={t} className={`rounded-2xl p-5 ${i < 2 ? 'bg-ab-tint border-2 border-ab-cyan' : 'bg-white'}`}>
            <span className={`inline-flex w-8 h-8 rounded-full items-center justify-center text-sm font-black text-white mb-3 ${i < 2 ? 'bg-ab-cyan' : 'bg-ab-navy'}`}>{i + 1}</span>
            <p className="font-black text-ab-navy mb-1">{t}</p>
            <p className="text-xs md:text-sm text-ab-muted leading-relaxed">{d}</p>
            {i === 1 && <p className="mt-2 text-xs font-black text-ab-cyan-ink">ここまで無料</p>}
          </li>
        ))}
      </ol>
    </Wrap>
  </section>
);

/* ── 安全 ───────────────────────────────── */
export const AbSafety = ({ no = '09' }: { no?: string }) => (
  <section className="py-16 md:py-24 bg-white">
    <Wrap>
      <div className="grid md:grid-cols-[0.6fr_1.4fr] gap-8 items-center">
        <div className="relative aspect-square max-w-[280px] mx-auto w-full">
          <Image src="/aibettan/shield.webp" alt="鍵の付いた盾が書類とデータを守るイメージ" fill sizes="280px" className="object-contain" />
        </div>
        <div>
          <Eyebrow>{no} ｜ 安全への取り組み</Eyebrow>
          <H2>大切な情報を、守る仕組みで動かします</H2>
          <ul className="grid sm:grid-cols-2 gap-3 -mt-4">
            {[
              ['データは御社のもの', 'いつでも持ち出せます'],
              ['AIの学習に使わせない', '学習に使われない設定で動かします'],
              ['見られる人を限定', '権限を分け、通信は暗号化します'],
              ['鍵・パスワードを厳重に管理', '必要な人だけが扱います'],
              ['公開前に安全チェック', '使い始める前に、穴がないか確かめます'],
            ].map(([t, d]) => (
              <li key={t} className="rounded-xl bg-ab-gray p-4">
                <p className="font-black text-ab-navy text-sm md:text-base flex items-center gap-2">
                  <Check className="w-4 h-4 text-ab-cyan" />
                  {t}
                </p>
                <p className="text-xs md:text-sm text-ab-muted mt-1 pl-6">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Wrap>
  </section>
);

/* ── 相場（金額は料金の所で1回だけ出すので、ここでは出さない） ── */
export const AbMarket = ({ no = '10' }: { no?: string }) => (
  <section className="py-16 md:py-24 bg-ab-gray">
    <Wrap>
      <Eyebrow>{no} ｜ 相場</Eyebrow>
      <H2 lead="AIの付いた業務システムを、ふつうに外注した場合。">本来は、数百万円の開発費がかかります</H2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white p-6 md:p-8">
          <p className="font-bold text-ab-muted mb-2">受託開発で作る</p>
          <p className="text-3xl md:text-4xl font-black text-ab-navy mb-1">300〜1,500<span className="text-lg">万円〜</span></p>
          <p className="text-xs text-ab-muted mb-5">開発費をまとめて支払う（目安）</p>
          <ul className="space-y-2 text-sm text-ab-muted">
            {['完成まで数か月', '直すたびに、追加の見積もり', '保守費・サーバー代が、毎年別にかかる'].map((t) => (
              <li key={t} className="flex gap-2 items-center"><Minus className="w-4 h-4 text-[#9AA6B6]" />{t}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-ab-navy p-6 md:p-8">
          <p className="font-bold text-[#7FDBF0] mb-2">社長のAI別班</p>
          <p className="text-3xl md:text-4xl font-black text-white mb-1">月額制</p>
          <p className="text-xs text-[#C9D6E8] mb-5">開発費は、月額の中に込み</p>
          <ul className="space-y-2 text-sm text-white">
            {['まとまった開発費は不要', '直す・足すも月額の中', '保守も込み'].map((t) => (
              <li key={t} className="flex gap-2 items-center"><Check className="w-4 h-4 text-ab-cyan" />{t}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-xs text-ab-muted">※保守費は開発費の年10〜15%程度が一般的な目安。出典：AIエージェント開発の費用相場（AI Picks, 2026）ほか</p>
    </Wrap>
  </section>
);

/* ── 料金（3プラン） ───────────────────────── */
const plans = [
  { name: 'ライト', price: '15', tag: '1つずつ、独立して', lead: '仕事ごとに独立したAIシステム', desc: '見積・経理…と1つずつ作れます。それぞれ単体で、毎月バージョンアップ。画面とデータは仕事ごとに別々です。', hi: false },
  { name: 'スタンダード', price: '30', tag: 'おすすめ｜全部つながる', lead: '全部が1つにつながるAIシステム', desc: '1つの画面で全部を管理。営業・現場・経理のデータがつながり、会社全体の「なぜ」まで分析できます。同時に3つまで作れます。', hi: true },
  { name: 'フル', price: '50', tag: 'スタンダード＋集客', lead: 'つながる仕組みと、集客まで', desc: 'HP・LP・Web広告・動画まで。集客の数字も一緒に分析します。※広告の出稿費は別途', hi: false },
];
export const AbPlans = ({ no = '11' }: { no?: string }) => (
  <section id="pricing" className="py-16 md:py-24 bg-white scroll-mt-24">
    <Wrap>
      <Eyebrow>{no} ｜ 料金</Eyebrow>
      <H2 lead="どのプランも、システム開発・AI・保守まで込み（月額・税別）。">3つのプランから選べます</H2>
      <div className="grid md:grid-cols-3 gap-4 md:gap-5 items-stretch">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-2xl p-6 md:p-7 flex flex-col ${p.hi ? 'bg-ab-navy text-white shadow-panel md:-my-3' : 'bg-white border border-ab-line shadow-card'}`}>
            <p className={`text-xs font-bold mb-3 ${p.hi ? 'text-[#7FDBF0]' : 'text-ab-cyan-ink'}`}>{p.tag}</p>
            <p className={`font-black ${p.hi ? 'text-white' : 'text-ab-navy'}`}>
              <span className="text-lg mr-2">{p.name}</span>
              <span className="text-5xl">{p.price}</span>
              <span className="text-base">万円/月</span>
            </p>
            <hr className={`my-5 ${p.hi ? 'border-[#3A5A85]' : 'border-ab-line'}`} />
            <p className={`text-lg font-black mb-3 ${p.hi ? 'text-white' : 'text-ab-navy'}`}>{p.lead}</p>
            <p className={`text-sm leading-relaxed ${p.hi ? 'text-[#DCE6F2]' : 'text-ab-muted'}`}>{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl bg-ab-tint px-6 py-5 text-sm md:text-base">
        <span className="font-black text-ab-cyan-ink mr-3">全プラン共通</span>
        <span className="text-ab-navy">毎月バージョンアップ・悩みを聞いて次を提案・AIの進化に追いつく・保守・LINE相談</span>
      </div>
      <p className="mt-4 text-xs md:text-sm text-ab-muted">サーバー・AI利用料や、ご利用期間などの条件は、ご相談の際にご説明します。</p>
    </Wrap>
  </section>
);

/* ── プランの違い（独立 vs つながる） ─────────── */
export const AbGrow = ({ no = '12' }: { no?: string }) => (
  <section className="py-16 md:py-24 bg-ab-gray">
    <Wrap>
      <Eyebrow>{no} ｜ プランの違い</Eyebrow>
      <H2 lead="ライトは画面もデータも別々に。スタンダードは1つの画面で、全部つながって育ちます。">続けるほど、会社の仕組みが育っていきます</H2>
      <div className="space-y-5">
        <div className="rounded-2xl bg-white p-5 md:p-6">
          <p className="font-black text-ab-navy mb-4">ライト <span className="text-sm font-bold text-ab-muted ml-2">1つずつ、独立して</span></p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['見積システム', '経理システム', '日報システム'].map((t) => (
              <div key={t} className="rounded-xl border border-ab-line p-4">
                <p className="font-bold text-ab-navy text-sm">{t}</p>
                <p className="text-xs text-ab-muted mt-1">画面もデータも別</p>
              </div>
            ))}
            <div className="rounded-xl bg-ab-gray p-4">
              <p className="font-bold text-ab-navy text-sm">3つが別々に動く</p>
              <p className="text-xs text-ab-muted mt-1">会社全体は見えないまま</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-ab-tint p-5 md:p-6 border-2 border-ab-cyan">
          <p className="font-black text-ab-navy mb-4">スタンダード <span className="text-sm font-bold text-ab-cyan-ink ml-2">全部つながる</span></p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              ['3つを、同時に作る', '見積・経理・日報'],
              ['1つにつなぐ', '1つの画面で全部を管理'],
              ['会社全体を分析', 'どこで利益が消えているか'],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl bg-white border border-ab-cyan p-4">
                <p className="font-bold text-ab-navy text-sm">{t}</p>
                <p className="text-xs text-ab-muted mt-1">{d}</p>
              </div>
            ))}
            <div className="rounded-xl bg-ab-navy p-4">
              <p className="font-bold text-white text-sm">育ち続ける</p>
              <p className="text-xs text-[#C9D6E8] mt-1">「なぜ」が見え、AIの進化でできることも増える</p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-ab-muted">※見積・経理・日報は一例です。作る順番と期間は御社に合わせます。</p>
    </Wrap>
  </section>
);

/* ── よくある質問 ─────────────────────────── */
export const abFaqs = [
  { q: 'AIのことが全く分かりません。それでも大丈夫ですか？', a: '大丈夫です。社長や社員さんに覚えていただく必要はありません。「ここが大変」と話していただければ、何をどう作るかはこちらで考えて形にします。' },
  { q: '何を頼めばいいか決まっていません。', a: '決まっていなくて大丈夫です。最初の60分で今の仕事の流れや困りごとを伺い、どこから作るとよいかを一緒に決めます。' },
  { q: 'ライトとスタンダードは、何が違いますか？', a: 'ライトは仕事ごとに独立したシステムを1つずつ作ります。スタンダードは作ったものが全部つながり、1つの画面で管理でき、会社全体の数字まで分析できます。' },
  { q: '受託開発（システム会社への発注）と何が違いますか？', a: 'まとまった開発費は要りません。月額の中で作り、作ったあとの手直しや保守も続けて引き受けます。' },
  { q: '遠方の会社でも頼めますか？', a: 'はい。打ち合わせはオンラインでも行えるので、全国どこからでもご利用いただけます。' },
];
export const AbFaq = ({ no = '13' }: { no?: string }) => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-5">
      <div className="max-w-3xl mx-auto">
        <Eyebrow>{no} ｜ よくある質問</Eyebrow>
        <div className="space-y-3">
          {abFaqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-ab-line bg-white p-5 md:p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base md:text-lg font-black text-ab-navy">
                <span><span className="text-ab-cyan mr-2">Q.</span>{f.q}</span>
                <span className="text-ab-cyan text-xl leading-none transition-transform group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-4 text-sm md:text-base text-ab-muted leading-loose">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ── 締め ───────────────────────────────── */
export const AbClosing = ({ href, button }: { href: string; button: string }) => (
  <section className="bg-ab-navy">
    <div className="grid md:grid-cols-2 items-stretch">
      <div className="px-5 md:px-12 py-16 md:py-24 flex items-center">
        <div className="max-w-md md:ml-auto">
          <h2 className="text-[2rem] leading-[1.4] md:text-5xl md:leading-[1.3] font-black text-white mb-5">
            まずは、
            <br />
            困りごとを
            <br />
            聞かせてください
          </h2>
          <p className="text-[#C9D6E8] leading-loose mb-8">話すだけでOK。試作までは無料です。</p>
          <CtaButton href={href} light>{button}</CtaButton>
          <p className="mt-4 text-xs text-[#C9D6E8]">初回のご相談 60分 無料 ｜ 株式会社Re.haru</p>
        </div>
      </div>
      <div className="relative min-h-[280px]">
        <Image src="/aibettan/meeting.webp" alt="社長と担当者がタブレットを見ながら話している様子" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
      </div>
    </div>
  </section>
);
