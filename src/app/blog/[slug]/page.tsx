import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase/client';
import ArticleContent from '@/components/sections/blog/ArticleContent';
import RelatedArticles from '@/components/sections/blog/RelatedArticles';
import SystemMockScreen from '@/components/common/SystemMockScreen';
import type { Article } from '@/types/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    // ビルド時やSupabase未設定時はnullを返す
    if (!supabase) {
      console.log('Supabase client not initialized, returning null');
      return null;
    }

    const isDevelopment = process.env.NODE_ENV === 'development';
    const now = new Date().toISOString();
    const maxDate = '9999-12-31T23:59:59.999Z'; // ISO 8601形式で最大日時
    const filterValue = isDevelopment ? maxDate : now;

    console.log('========== getArticle DEBUG ==========');
    console.log('slug:', slug);
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('isDevelopment:', isDevelopment);
    console.log('filterValue (scheduled_at <=):', filterValue);

    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .lte('scheduled_at', filterValue) // 開発環境では全記事、本番環境では公開日時判定
      .single();

    console.log('Supabase error:', error);
    console.log('Supabase data:', data ? 'Found' : 'Not found');
    console.log('======================================');

    if (error || !data) {
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in getArticle:', error);
    return null;
  }
}

async function getRelatedArticles(article: Article): Promise<Article[]> {
  try {
    // ビルド時やSupabase未設定時は空配列を返す
    if (!supabase) {
      console.log('Supabase client not initialized, returning empty array');
      return [];
    }

    const isDevelopment = process.env.NODE_ENV === 'development';
    const now = new Date().toISOString();
    const maxDate = '9999-12-31T23:59:59.999Z'; // ISO 8601形式で最大日時
    const filterValue = isDevelopment ? maxDate : now;

    console.log('========== getRelatedArticles DEBUG ==========');
    console.log('category:', article.category);
    console.log('exclude article id:', article.id);
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('isDevelopment:', isDevelopment);
    console.log('filterValue (scheduled_at <=):', filterValue);

    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('category', article.category)
      .neq('id', article.id)
      .lte('scheduled_at', filterValue) // 開発環境では全記事、本番環境では公開日時判定
      .order('scheduled_at', { ascending: false })
      .limit(3);

    console.log('Supabase error:', error);
    console.log('Related articles count:', data?.length || 0);
    console.log('==============================================');

    if (error || !data) {
      return [];
    }

    return data;
  } catch (error) {
    console.error('Error in getRelatedArticles:', error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.slug);

  if (!article) {
    return {
      title: '記事が見つかりません | AIレンジャー',
    };
  }

  return {
    title: `${article.title} | AIレンジャー - 株式会社Re.haru`,
    description: article.summary,
    keywords: article.seo_keywords || [],
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      url: `https://reharu.com/blog/${article.slug}`,
      images: article.thumbnail_url ? [{ url: article.thumbnail_url }] : [],
      publishedTime: article.scheduled_at,
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(article);
  const categoryLabel = article.category === 'ai-dx-system' ? 'AI付きDXシステム' : 'DXシステム';
  const categoryColor = article.category === 'ai-dx-system' ? 'bg-purple-600' : 'bg-blue-600';

  // 構造化データ（JSON-LD）
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    datePublished: article.scheduled_at,
    dateModified: article.updated_at || article.scheduled_at,
    author: {
      '@type': 'Organization',
      name: '株式会社Re.haru',
      url: 'https://reharu.com',
    },
    publisher: {
      '@type': 'Organization',
      name: '株式会社Re.haru',
      url: 'https://reharu.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://reharu.com/logo.png',
      },
    },
    image: article.thumbnail_url || 'https://reharu.com/og-image.png',
    description: article.summary,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://reharu.com/blog/${article.slug}`,
    },
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'トップ',
        item: 'https://reharu.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '開発事例',
        item: 'https://reharu.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://reharu.com/blog/${article.slug}`,
      },
    ],
  };

  return (
    <>
      {/* 構造化データ（JSON-LD） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      {/* パンくずリスト */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600">
                トップ
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600">
                開発事例
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-900 truncate">{article.title}</li>
          </ol>
        </div>
      </nav>

      {/* 記事ヘッダー */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* カテゴリと業種 */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`${categoryColor} text-white text-sm px-4 py-1 rounded-full`}>
              {categoryLabel}
            </span>
            {article.industries.map((industry) => (
              <span key={industry} className="bg-gray-100 text-gray-700 text-sm px-4 py-1 rounded-full">
                {industry}
              </span>
            ))}
          </div>

          {/* 公開日 */}
          <p className="text-gray-500 mb-4">
            {new Date(article.scheduled_at).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          {/* タイトル */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {article.title}
          </h1>

          {/* サムネイル */}
          {article.thumbnail_url && (
            <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden">
              <Image
                src={article.thumbnail_url}
                alt={`${article.industries.join('・')}のDXシステム開発事例 - ${article.title.replace(/【.*?】/, '').trim()} | AIレンジャー導入による業務効率化・コスト削減の実績`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          )}

          {/* システムMock画面 - 製造業（在庫管理）の場合 */}
          {article.slug === 'manufacturing-inventory-dx-case-001' && (
            <div className="mb-8">
              <p className="text-gray-600 text-sm mb-3">▼ システム画面抜粋</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                実際に開発した在庫管理システムの管理画面です。Excelでの手動管理から脱却し、リアルタイムで在庫状況を確認できるようになりました。安全在庫を下回ると自動でアラートが表示され、発注漏れを防ぎます。
              </p>
              <SystemMockScreen
                type="inventory"
                title="在庫管理システム画面"
                features={['リアルタイム在庫確認', '自動発注アラート', '入出庫履歴追跡']}
              />
            </div>
          )}

          {/* システムMock画面 - 製造業（生産管理）の場合 */}
          {article.slug === 'manufacturing-production-dx-case-008' && (
            <div className="mb-8">
              <p className="text-gray-600 text-sm mb-3">▼ システム画面抜粋</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                実際に開発した生産管理システムの管理画面です。生産ラインの稼働状況をリアルタイムで可視化し、ボトルネックを自動分析します。不良品の早期検知により、品質向上と生産効率の改善を同時に実現できます。
              </p>
              <SystemMockScreen
                type="production"
                title="生産管理システム画面"
                features={['リアルタイム稼働状況', 'ボトルネック自動分析', '不良品早期検知']}
              />
            </div>
          )}

          {/* システムMock画面 - 建設業（工程管理）の場合 */}
          {article.slug === 'construction-schedule-dx-case-001' && (
            <div className="mb-8">
              <p className="text-gray-600 text-sm mb-3">▼ システム画面抜粋</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                実際に開発した工程管理システムの画面です。紙の工程表やExcelから脱却し、現場と本社がリアルタイムで進捗を共有できるようになりました。遅延リスクを早期に発見し、手戻りを大幅に削減できます。
              </p>
              <SystemMockScreen
                type="construction"
                title="工程管理システム画面"
                features={['リアルタイム進捗確認', '遅延自動アラート', '工程履歴追跡']}
              />
            </div>
          )}

          {/* システムMock画面 - 建設業（安全管理）の場合 */}
          {article.slug === 'construction-safety-dx-case-009' && (
            <div className="mb-8">
              <p className="text-gray-600 text-sm mb-3">▼ システム画面抜粋</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                実際に開発した安全管理システムの画面です。現場で発見した危険箇所を写真付きで即座に報告でき、本社と現場がリアルタイムで情報を共有します。対応状況を追跡し、事故の未然防止を実現できます。
              </p>
              <SystemMockScreen
                type="safety"
                title="安全管理システム画面"
                features={['危険箇所の写真報告', 'リアルタイム共有', '対応状況追跡']}
              />
            </div>
          )}

          {/* システムMock画面 - 飲食業（AI食材管理）の場合 */}
          {article.slug === 'restaurant-ingredient-ai-dx-case-002' && (
            <div className="mb-8">
              <p className="text-gray-600 text-sm mb-3">▼ システム画面抜粋</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                実際に開発したAI食材管理システムの画面です。賞味期限が近づくと自動でアラートを表示し、AI需要予測により適切な発注量を提案します。食材ロスを半減し、欠品による機会損失もほぼゼロになりました。
              </p>
              <SystemMockScreen
                type="ingredient"
                title="AI食材管理システム画面"
                features={['AI賞味期限アラート', 'AI需要予測', '自動発注提案']}
              />
            </div>
          )}

          {/* システムMock画面 - 飲食業（予約・仕込み管理）の場合 */}
          {article.slug === 'restaurant-reservation-dx-case-001' && (
            <div className="mb-8">
              <p className="text-gray-600 text-sm mb-3">▼ システム画面抜粋</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                実際に開発したAI予約・仕込み管理システムの画面です。過去の予約データからAIが需要を予測し、最適な仕込み量を自動提案します。食材ロスを削減しながら、欠品リスクも最小限に抑えることができます。
              </p>
              <SystemMockScreen
                type="reservation"
                title="AI予約・仕込み管理システム画面"
                features={['AI需要予測', '自動仕込み量提案', '予約管理']}
              />
            </div>
          )}

          {/* システムMock画面 - 小売業（AI顧客管理）の場合 */}
          {article.slug === 'retail-customer-ai-dx-case-003' && (
            <div className="mb-8">
              <p className="text-gray-600 text-sm mb-3">▼ システム画面抜粋</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                実際に開発したAI顧客管理システムの画面です。AIが顧客の購買履歴を分析し、次回購入商品を予測します。顧客ランクを自動分類し、パーソナライズドメールを配信することで、売上とリピート率を大幅に向上できます。
              </p>
              <SystemMockScreen
                type="customer"
                title="AI顧客管理システム画面"
                features={['AI購買予測', '顧客ランク自動分類', 'パーソナライズドメール配信']}
              />
            </div>
          )}

          {/* システムMock画面 - 小売業（販売管理）の場合 */}
          {article.slug === 'retail-sales-dx-case-001' && (
            <div className="mb-8">
              <p className="text-gray-600 text-sm mb-3">▼ システム画面抜粋</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                実際に開発した販売管理システムの画面です。リアルタイムで売上状況を確認でき、在庫不足時には自動でアラートを表示します。時間別の売上分析により、適切な人員配置と商品陳列の最適化を実現できます。
              </p>
              <SystemMockScreen
                type="sales"
                title="販売管理システム画面"
                features={['リアルタイム売上確認', '在庫不足アラート', '時間別売上分析']}
              />
            </div>
          )}

          {/* システムMock画面 - 医療（患者管理）の場合 */}
          {article.slug === 'medical-patient-dx-case-004' && (
            <div className="mb-8">
              <p className="text-gray-600 text-sm mb-3">▼ システム画面抜粋</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                実際に開発した患者管理システムの画面です。オンライン予約により患者の利便性が向上し、電子カルテで診察履歴を一元管理できます。待ち時間の可視化により、患者満足度の向上とクリニック運営の効率化を実現できます。
              </p>
              <SystemMockScreen
                type="patient"
                title="患者管理システム画面"
                features={['オンライン予約', '電子カルテ', '診察待ち状況表示']}
              />
            </div>
          )}

          {/* システムMock画面 - 教育（AI学習管理）の場合 */}
          {article.slug === 'education-learning-ai-dx-case-005' && (
            <div className="mb-8">
              <p className="text-gray-600 text-sm mb-3">▼ システム画面抜粋</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                実際に開発したAI学習管理システムの画面です。AIが生徒の理解度を自動分析し、個別最適化された課題を自動生成します。保護者向けレポートも自動作成され、学習状況の共有と成績向上を効率的に実現できます。
              </p>
              <SystemMockScreen
                type="course"
                title="AI学習管理システム画面"
                features={['AI理解度分析', 'AI課題自動生成', '保護者向けレポート自動作成']}
              />
            </div>
          )}

          {/* システムMock画面 - 物流（配送管理）の場合 */}
          {article.slug === 'logistics-delivery-dx-case-006' && (
            <div className="mb-8">
              <p className="text-gray-600 text-sm mb-3">▼ システム画面抜粋</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                実際に開発した配送管理システムの画面です。リアルタイムGPS追跡により配送状況を可視化し、AIが最適な配送ルートを自動提案します。顧客への配送通知も自動化され、配送効率とCS向上を同時に実現できます。
              </p>
              <SystemMockScreen
                type="delivery"
                title="配送管理システム画面"
                features={['リアルタイムGPS追跡', '最適ルート提案', '顧客向け配送通知']}
              />
            </div>
          )}

          {/* システムMock画面 - 不動産業（AI物件管理）の場合 */}
          {article.slug === 'realestate-property-ai-dx-case-007' && (
            <div className="mb-8">
              <p className="text-gray-600 text-sm mb-3">▼ システム画面抜粋</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                実際に開発したAI物件管理システムの画面です。AIが顧客の希望条件から最適な物件をマッチングし、顧客ランクを自動分類します。パーソナライズドメール配信により、成約率の向上と業務効率化を実現できます。
              </p>
              <SystemMockScreen
                type="property"
                title="AI物件管理システム画面"
                features={['AI物件マッチング', '顧客ランク自動分類', 'パーソナライズドメール配信']}
              />
            </div>
          )}

          {/* 記事本文 */}
          <ArticleContent content={article.content} />

          {/* 記事内画像 */}
          {article.image_urls && article.image_urls.length > 0 && (
            <div className="mt-12 space-y-8">
              {article.image_urls.map((imageUrl, index) => (
                <div key={index} className="relative w-full h-96 rounded-lg overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`${article.title} - 画像${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </div>
              ))}
            </div>
          )}

          {/* 関連ページ（内部リンク強化） */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">関連ページ</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* サービス詳細へのリンク */}
              <Link
                href="/service"
                className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-3">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    サービス詳細
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  AIレンジャーの開発プロセスや開発実績をご紹介
                </p>
              </Link>

              {/* 料金プランへのリンク */}
              <Link
                href="/service#price"
                className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-3">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    料金プラン
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  機能数ベースの明確な料金体系をご確認ください
                </p>
              </Link>

              {/* お問い合わせへのリンク */}
              <Link
                href="/contact"
                className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-3">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    無料相談
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  御社の課題をお聞かせください。最適なソリューションをご提案します
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">類似の課題をお持ちの企業様へ</h2>
          <p className="text-lg text-blue-100 mb-8">
            御社に最適なDXソリューションをご提案いたします。
            <br />
            まずはお気軽にご相談ください。
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            無料相談する
          </Link>
        </div>
      </section>

      {/* 関連記事 */}
      {relatedArticles.length > 0 && <RelatedArticles articles={relatedArticles} />}

      {/* 一覧に戻る */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/blog"
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← 開発事例一覧に戻る
          </Link>
        </div>
      </div>
    </>
  );
}
