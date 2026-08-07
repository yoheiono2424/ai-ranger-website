import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center shadow-card border border-white bg-gradient-to-br from-seishun-sky/30 via-seishun-aqua/18 to-seishun-pink/28">
            <p className="text-xs font-bold tracking-eyebrow text-seishun-deep mb-8">CONTACT</p>

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
                className="inline-flex items-center justify-center px-9 py-4 bg-accent text-white font-bold rounded-full hover:bg-seishun-deep transition-colors duration-200"
              >
                無料で相談する
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/service"
                className="inline-flex items-center justify-center px-9 py-4 bg-white/80 backdrop-blur text-ink font-bold rounded-full border border-white hover:bg-white transition-colors duration-200"
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
