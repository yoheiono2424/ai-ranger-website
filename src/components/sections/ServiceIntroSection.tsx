'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ServiceIntroSection = () => {
  const services = [
    {
      name: '5レンジャー',
      tagline: '一律料金システム開発',
      description: '日本初の安心百均価格設計。一律500万円で機能数制限なく、あなたの理想のシステムを開発します。',
      price: '500万円〜',
      priceNote: '一律料金',
      features: ['機能数制限なし', '2〜6ヶ月で完成', '所有権あり'],
      href: '/service',
      gradient: 'from-ai-blue to-sky-blue',
      iconBg: 'bg-ai-blue',
    },
    {
      name: 'SysSuc',
      tagline: 'サブスク型システム開発',
      description: '初期費用ゼロ、月額定額でシステム開発。保守・改修も込みで、持たない時代の新しい選択肢。',
      price: '月額10万円〜',
      priceNote: '初期費用ゼロ',
      features: ['初期費用なし', '保守・改修込み', '月額定額制'],
      href: '/syssuc',
      gradient: 'from-[#1B3A5F] to-[#5BB7D3]',
      iconBg: 'bg-[#1B3A5F]',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-ai-blue bg-ai-blue/10 px-4 py-2 rounded-full">
              SERVICE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            私たちのサービス
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            お客様のニーズに合わせて、2つのサービスをご用意しています
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link href={service.href} className="block h-full">
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full group">
                  {/* ヘッダー部分 */}
                  <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white`}>
                    <h3 className="text-2xl font-black mb-1">{service.name}</h3>
                    <p className="text-white/90 text-sm">{service.tagline}</p>
                  </div>

                  {/* コンテンツ部分 */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* 価格 */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">{service.priceNote}</p>
                        <p className="text-3xl font-black text-gray-900">{service.price}</p>
                      </div>
                    </div>

                    {/* 特徴 */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <svg className="w-5 h-5 text-hope-green mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* リンク */}
                    <div className="flex items-center justify-center text-ai-blue font-bold group-hover:translate-x-2 transition-transform duration-300">
                      詳細を見る
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 補足 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            どちらのサービスが最適か分からない場合は、お気軽にご相談ください
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceIntroSection;
