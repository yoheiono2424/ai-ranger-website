import Link from 'next/link';

const DramaCTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-drama-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-eyebrow text-drama-gold mb-6">次の一歩</p>
          <h2 className="font-mincho font-bold text-white text-[2rem] leading-[1.45] md:text-[3rem] md:leading-[1.35] mb-8">
            まずは、御社の1本を。
          </h2>
          <p className="text-base md:text-lg text-drama-sand leading-loose mb-12">
            料金は、ドラマの長さと内容に合わせてお見積もりします。
            <br className="hidden md:block" />
            「うちの会社でも物語になるか」から、お気軽にご相談ください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-12 py-5 bg-drama-gold text-drama-bg text-lg font-bold rounded-lg hover:bg-white transition-colors duration-200"
          >
            無料で相談する
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DramaCTASection;
