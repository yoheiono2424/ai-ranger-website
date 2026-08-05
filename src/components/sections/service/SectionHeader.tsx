type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  /** 見出し。JSXで改行や強調を含められる */
  heading: React.ReactNode;
  lead?: React.ReactNode;
  /** 失敗・課題を扱うセクションでラベルを赤にする */
  tone?: 'accent' | 'alert';
};

const SectionHeader = ({ index, eyebrow, heading, lead, tone = 'accent' }: SectionHeaderProps) => {
  const toneClass = tone === 'alert' ? 'text-alert' : 'text-accent';
  const ruleClass = tone === 'alert' ? 'bg-alert' : 'bg-accent';

  return (
    <div className="mb-16 md:mb-20">
      {/* インデックス＋ラベル */}
      <div className="flex items-center gap-4 mb-8">
        <span className={`text-xs font-black tabular-nums ${toneClass}`}>{index}</span>
        <span className={`h-px w-8 ${ruleClass}`} />
        <span className={`text-xs font-bold tracking-eyebrow ${toneClass}`}>{eyebrow}</span>
      </div>

      <h2 className="text-3xl md:text-[2.75rem] md:leading-[1.35] font-black text-ink tracking-tight leading-[1.4]">
        {heading}
      </h2>

      {lead && (
        <p className="text-base md:text-lg text-body leading-loose mt-7 max-w-3xl">{lead}</p>
      )}
    </div>
  );
};

export default SectionHeader;
