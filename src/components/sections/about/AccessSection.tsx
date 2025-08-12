'use client';

import { motion } from 'framer-motion';

const AccessSection = () => {
  const accessInfo = [
    { label: '住所', value: '〒860-0801 熊本県熊本市中央区安政町8-16 村瀬海運ビル 302' },
    { label: '電話番号', value: '096-342-6888' },
    { label: 'メール', value: 'info@re-haru.com' },
    { label: '営業時間', value: '平日 9:00 - 18:00' },
    { label: '定休日', value: '土日祝日' },
  ];

  const transportInfo = [
    { method: '市電', description: '「通町筋」電停から徒歩5分' },
    { method: 'バス', description: '「通町筋」バス停から徒歩5分' },
    { method: '車', description: '近隣のコインパーキングをご利用ください' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            アクセス
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            熊本市中心部の好立地。お気軽にお越しください
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 左側：地図 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.0726751074525!2d130.70525731519677!3d32.79033838096627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f41a2c5d3c6f%3A0x1234567890abcdef!2z54aK5pys55yM54aK5pys5biC5Lit5aSu5Yy65a6J5pS_55S677yY4oiS77yR77yW!5e0!3m2!1sja!2sjp!4v1234567890123"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>

            {/* 右側：アクセス情報 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* 会社情報 */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-ai-blue">
                  オフィス情報
                </h3>
                <dl className="space-y-4">
                  {accessInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex flex-col sm:flex-row"
                    >
                      <dt className="font-bold text-gray-700 sm:w-28 mb-1 sm:mb-0">
                        {info.label}
                      </dt>
                      <dd className="text-gray-600 sm:flex-1">
                        {info.value}
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </div>

              {/* 交通アクセス */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-hope-green">
                  交通アクセス
                </h3>
                <div className="space-y-4">
                  {transportInfo.map((transport, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.25 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-ai-blue to-sky-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">
                          {transport.method === '市電' ? '🚃' : transport.method === 'バス' ? '🚌' : '🚗'}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{transport.method}</p>
                        <p className="text-sm text-gray-600">{transport.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 訪問についての注意 */}
                <div className="mt-6 p-4 bg-gradient-to-r from-ai-blue/5 to-sky-blue/5 rounded-xl border-l-4 border-ai-blue">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">ご来社の際は</span><br />
                    事前にお電話またはメールでご連絡をお願いいたします。
                    オンラインでのご相談も承っております。
                  </p>
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-ai-blue to-sky-blue rounded-2xl p-6 text-white"
              >
                <h4 className="text-xl font-bold mb-3">
                  お気軽にお問い合わせください
                </h4>
                <p className="text-sm mb-4 opacity-90">
                  訪問・オンライン、どちらでもご相談を承っております
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:096-342-6888"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-ai-blue font-bold rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    電話で相談
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white/10 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    メールで相談
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;