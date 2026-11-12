/**
 * 社長の別班（/service）の共通部品
 * 色は tailwind の bettan-*（営業資料と同じ黒と赤）
 */

type BettanHeadingProps = {
  /** 例: "FILE 01 ／ 対象" */
  file: string;
  heading: React.ReactNode;
  lead?: React.ReactNode;
  /** 黒背景のセクションで使う */
  dark?: boolean;
};

export const BettanHeading = ({ file, heading, lead, dark = false }: BettanHeadingProps) => (
  <div className="mb-12 md:mb-16">
    <div className="flex items-center gap-4 mb-6">
      <span className="h-px w-8 bg-bettan-red" />
      <span className="text-xs font-bold tracking-eyebrow text-bettan-red">{file}</span>
    </div>
    <h2
      className={`text-[1.75rem] leading-[1.45] md:text-[2.6rem] md:leading-[1.35] font-black tracking-tight ${
        dark ? 'text-bettan-text' : 'text-ink'
      }`}
    >
      {heading}
    </h2>
    {lead && (
      <p className={`text-base md:text-lg leading-loose mt-6 max-w-3xl ${dark ? 'text-bettan-muted' : 'text-body'}`}>
        {lead}
      </p>
    )}
  </div>
);

export const CheckIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export const CrossIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const ArrowIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

/** 赤い枠のハンコ（TOP SECRET など） */
export const Stamp = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span
    className={`inline-block border-2 border-bettan-red text-bettan-red font-black tracking-[0.15em] px-3 py-1 -rotate-6 select-none ${className}`}
  >
    {children}
  </span>
);
