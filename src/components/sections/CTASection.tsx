import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-accent-soft border border-accent/20 rounded-xl px-8 py-16 md:px-16 md:py-20 text-center shadow-card">
            <p className="text-xs font-bold tracking-eyebrow text-accent mb-8">CONTACT</p>

            <p className="text-2xl md:text-5xl font-black text-ink leading-[1.4] mb-8">
              まずは、いちばん面倒な作業を
              <br />
              教えてください。
            </p>

            <p className="text-base md:text-lg text-body leading-loose mb-12">
              その場で、何がどう変わるかをお見せします。
              <br className="hidden md:block" />
              試作品の制作費はいただきません。気に入らなければ契約は不要です。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-9 py-4 bg-accent text-white font-bold rounded-lg hover:bg-sky-blue transition-colors duration-200"
              >
                無料で相談する
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/service"
                className="inline-flex items-center justify-center px-9 py-4 bg-white text-accent font-bold rounded-lg border border-accent/30 hover:border-accent transition-colors duration-200"
              >
                サービス詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
