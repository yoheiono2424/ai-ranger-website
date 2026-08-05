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
    {
      category: 'スマホアプリ',
      title: 'タレント農家コミュニティアプリ',
      description: '地図から商品購入、チャット機能まで',
      features: ['会員登録', '地図から商品購入', '商品登録', 'プッシュ通知'],
    },
    {
      category: 'スマホアプリ',
      title: 'キャンプフリマアプリ',
      description: 'キャンプ用品専門のフリマアプリ',
      features: ['会員登録', '商品購入', '商品掲載', 'プッシュ通知'],
    },
    {
      category: 'スマホアプリ',
      title: 'ショート動画型採用マッチングアプリ',
      description: 'ショート動画で求職者と企業をマッチング',
      features: ['会員登録', 'ショート動画', '企業求人掲載', 'プッシュ通知'],
    },
  ];

  return (
    <section id="results" className="py-24 md:py-32 bg-white border-t border-line">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            index="06"
            eyebrow="WORKS"
            heading="開発実績"
            lead="これまでに開発してきたシステムです。すべて一律300万円、機能数の制限はありません。"
          />

          {/* 実績グリッド */}
          <div className="grid md:grid-cols-2 gap-px bg-line border border-line rounded-xl overflow-hidden shadow-card">
            {allProjects.map((project, index) => (
              <div key={index} className="bg-white p-8 md:p-10 transition-colors duration-200 hover:bg-accent-soft/40">
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

          <p className="text-sm text-muted leading-relaxed mt-8">
            ※ 上記はすべて開発費用 一律300万円（AI機能込み・機能数の制限なし）です。スマホアプリとしてストア公開する場合のみ、ネイティブアプリ化 +300万円（合計600万円）となります。
          </p>

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
