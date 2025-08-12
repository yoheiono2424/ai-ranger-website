import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 株式会社Re.haru',
  description: '株式会社Re.haruのプライバシーポリシー。個人情報の取り扱いについて説明しています。',
  openGraph: {
    title: 'プライバシーポリシー | 株式会社Re.haru',
    description: '個人情報の取り扱いについて',
    images: ['/①Re.haru青ロゴ.png'],
  },
};

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            プライバシーポリシー
          </h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-8">
                株式会社Re.haru（以下「当社」といいます）は、お客様の個人情報の重要性を認識し、
                以下のプライバシーポリシーに基づき、適切に取り扱います。
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. 個人情報取扱事業者の名称
                </h2>
                <p className="text-gray-700">
                  株式会社Re.haru<br />
                  代表取締役：小野 陽平
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. 個人情報の利用目的
                </h2>
                <p className="text-gray-700 mb-3">
                  当社は、お客様からご提供いただいた個人情報を、以下の目的で利用いたします。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>お問い合わせへの回答及び対応</li>
                  <li>当社サービスに関する情報のご案内</li>
                  <li>サービス改善のための統計データとしての利用（個人を特定しない形式）</li>
                  <li>その他、お客様に事前にお知らせし、同意いただいた目的</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. 個人情報の取得項目
                </h2>
                <p className="text-gray-700 mb-3">
                  当社は、以下の個人情報を取得することがあります。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>お名前</li>
                  <li>会社名</li>
                  <li>メールアドレス</li>
                  <li>電話番号</li>
                  <li>お問い合わせ内容</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. 個人情報の第三者提供
                </h2>
                <p className="text-gray-700 mb-3">
                  当社は、以下の場合を除き、お客様の個人情報を第三者に提供いたしません。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>お客様の同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合であって、お客様の同意を得ることが困難である場合</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. 個人情報の安全管理措置
                </h2>
                <p className="text-gray-700">
                  当社は、個人情報の紛失、破壊、改ざん及び漏洩等を防止するため、
                  適切な安全管理措置を講じます。また、個人情報を取り扱う従業員に対し、
                  適切な監督を行います。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. 個人情報の開示・訂正・削除
                </h2>
                <p className="text-gray-700 mb-3">
                  お客様は、当社に対し、以下の請求を行うことができます。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-3">
                  <li>個人情報の開示</li>
                  <li>個人情報の訂正、追加または削除</li>
                  <li>個人情報の利用停止</li>
                  <li>個人情報の第三者提供の停止</li>
                </ul>
                <p className="text-gray-700">
                  これらの請求を行う場合は、下記のお問い合わせ窓口までご連絡ください。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Cookieの使用について
                </h2>
                <p className="text-gray-700">
                  当社のウェブサイトでは、サービス向上のためCookieを使用することがあります。
                  Cookieは、お客様のコンピュータを識別することはできますが、
                  お客様個人を特定することはできません。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. プライバシーポリシーの変更
                </h2>
                <p className="text-gray-700">
                  当社は、法令の変更等に伴い、本プライバシーポリシーを変更することがあります。
                  変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. お問い合わせ窓口
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2">
                    <strong>株式会社Re.haru</strong>
                  </p>
                  <p className="text-gray-700">
                    〒860-0047<br />
                    熊本県熊本市西区春日1-14-3 ザ・熊本タワー2901<br />
                    電話: 096-327-9339
                  </p>
                </div>
              </section>

              <section>
                <p className="text-gray-600 text-sm text-right">
                  制定日：2025年8月12日<br />
                  最終更新日：2025年8月12日
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;