import SectionHeader from './SectionHeader';

const InfraSection = () => {
  const servers = [
    { name: 'データサーバー', service: 'Supabase', role: 'データの保存・ログインなど、裏側の仕組み', usd: '$25〜／月', jpy: '約3,750円〜' },
    { name: '公開サーバー', service: 'Vercel', role: 'システムをインターネット上で使えるようにする', usd: '$20〜／月', jpy: '約3,000円〜' },
    { name: 'AIサーバー', service: 'AI機能を使う場合', role: '＋従量：日本語1,000文字あたり約0.12〜6円', usd: '$59〜／月', jpy: '約8,850円〜' },
  ];

  const points = [
    '初期のほとんどのシステムは、基本料金の範囲で足ります',
    '月の利用上限を設定できるので、高額請求を防げます',
    'Re.haruが立て替えて、毎月明細を付けてご請求します',
  ];

  return (
    <section className="py-16 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="07"
            eyebrow="インフラ費（実費）について"
            heading={
              <>
                システムを動かすサーバー代は、
                <br />
                月7,000円ほどから。
              </>
            }
          />

          <div className="grid md:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden shadow-card mb-4">
            {servers.map((item) => (
              <div key={item.name} className="bg-white p-6 md:p-8 flex flex-col">
                <p className="text-base md:text-lg font-black text-ink">{item.name}</p>
                <p className="text-xs font-bold text-accent mb-3">{item.service}</p>
                <p className="text-sm text-body leading-relaxed mb-6">{item.role}</p>
                <p className="mt-auto text-2xl font-black text-ink tabular-nums">{item.usd}</p>
                <p className="text-xs text-muted">{item.jpy}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mb-10 md:mb-14">※ 1ドル＝150円で計算した目安です。為替や利用量により変わります。</p>

          <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-10 items-center bg-accent-soft rounded-xl px-6 py-8 md:px-12 md:py-10">
            <div>
              <p className="text-xs font-bold tracking-eyebrow text-accent mb-3">目安</p>
              <p className="text-ink font-black leading-none mb-3">
                <span className="text-lg md:text-xl mr-1">月</span>
                <span className="text-5xl md:text-6xl tabular-nums">6,750</span>
                <span className="text-lg md:text-xl ml-1">円〜</span>
              </p>
              <p className="text-xs md:text-sm text-body">AI機能を使う場合は ＋月 約8,850円〜（＋従量）</p>
            </div>
            <ul className="space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm md:text-base font-bold text-ink">
                  <svg className="w-5 h-5 text-accent flex-none mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 12.5l3 3 6-6.5" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfraSection;
