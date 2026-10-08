import SectionHeader from './SectionHeader';

const ConditionsSection = () => {
  const conditions = [
    { label: '契約期間', value: '最低6か月', note: '以降は3か月ごとの更新' },
    { label: 'お支払い', value: '最初の3か月分（60万円）を前払い', note: '4か月目以降は毎月払い' },
    { label: 'データ', value: '御社のもの', note: 'AIの学習には使いません' },
    { label: 'インフラ費', value: 'サーバー等は実費', note: '目安は次でご説明します' },
  ];

  return (
    <section id="conditions" className="py-16 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader index="06" eyebrow="契約条件" heading="条件は、最初にすべてお伝えします。" />

          <div className="border-t-2 border-ink">
            {conditions.map((item) => (
              <div
                key={item.label}
                className="border-b border-line py-6 md:py-8 grid grid-cols-[6rem_1fr] md:grid-cols-[10rem_1.5fr_1fr] gap-x-4 md:gap-x-10 gap-y-1 items-baseline"
              >
                <p className="text-xs md:text-sm font-bold text-accent">{item.label}</p>
                <p className="text-lg md:text-[1.4rem] font-black text-ink leading-snug">{item.value}</p>
                <p className="col-start-2 md:col-start-3 text-sm md:text-base text-body">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
