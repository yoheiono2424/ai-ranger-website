import Link from 'next/link';
import SectionHeader from './SectionHeader';

const ProjectResultsSection = () => {
  const allProjects = [
    {
      category: '社内DX',
      title: 'カタログギフト自動連携システム',
      description: '複数システムを一元化、収益計算を自動化',
      features: ['自動収支計算', 'クロネコヤマト連携', 'ギフト自動発送', 'EC連携'],
    },
    {
      category: '社内DX',
      title: '現場向け勤怠管理システム',
      description: '直行直帰でも正確な勤怠情報の管理と社内共有',
      features: ['勤怠管理', '社内共有', '日報投稿', 'データ蓄積'],
    },
    {
      category: '社内DX',
      title: '在庫管理システム',
      description: '複数拠点の在庫を一元管理し、発注を自動化',
      features: ['在庫一元管理', '自動発注', 'バーコード管理', '売上分析'],
    },
    {
      category: 'AI業務システム',
      title: 'AI自動会計管理システム',
      description: '領収書画像をAIが自動解析し、自動仕分け',
      features: ['AI-OCR', 'AIデータ解析', '顧客管理', '会計ソフト連携'],
    },
    {
      category: 'AI業務システム',
      title: '人材派遣スタッフAI管理システム',
      description: 'AIが派遣先を自動選定。31社が導入',
      features: ['AI自動選定', '報酬自動計算', '請求書自動作成', 'CF管理'],
    },
  ];

  return (
    <section id="results" className="py-16 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="06"
            eyebrow="WORKS"
            heading="開発実績"
            lead="これまでに開発してきたシステムです。"
          />

          {/* 実績グリッド */}
          <div className="grid md:grid-cols-2 gap-px bg-line border border-line rounded-xl overflow-hidden shadow-card">
            {allProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 md:p-10">
                <p className="text-xs font-bold tracking-eyebrow text-muted mb-5">
                  {project.category}
                </p>
                <h3 className="text-lg md:text-xl font-black text-ink mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-body leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-body border border-line rounded px-2.5 py-1"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-xl md:text-3xl font-black text-ink mb-10 leading-relaxed">
              御社の業務に合わせて、
              <br className="md:hidden" />
              専用のシステムをお作りします。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-4 bg-accent text-white font-bold rounded-lg hover:bg-sky-blue transition-colors duration-200"
            >
              無料で相談する
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectResultsSection;
