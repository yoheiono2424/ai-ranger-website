type DramaHeadingProps = {
  eyebrow: string;
  /** 見出し。JSXで改行や強調を含められる */
  heading: React.ReactNode;
  lead?: React.ReactNode;
  /** 黒背景（dark）か、明るい背景（light）か */
  tone?: 'dark' | 'light';
};

const DramaHeading = ({ eyebrow, heading, lead, tone = 'dark' }: DramaHeadingProps) => {
  const isDark = tone === 'dark';

  return (
    <div className="mb-12 md:mb-16">
      <p className={`text-xs font-bold tracking-eyebrow mb-5 ${isDark ? 'text-drama-gold' : 'text-drama-brown'}`}>
        {eyebrow}
      </p>
      <h2
        className={`font-mincho font-bold text-[1.75rem] leading-[1.5] md:text-[2.6rem] md:leading-[1.4] ${
          isDark ? 'text-white' : 'text-drama-bg'
        }`}
      >
        {heading}
      </h2>
      {lead && (
        <p className={`text-base md:text-lg leading-loose mt-6 max-w-3xl ${isDark ? 'text-drama-sand' : 'text-body'}`}>
          {lead}
        </p>
      )}
    </div>
  );
};

export default DramaHeading;
