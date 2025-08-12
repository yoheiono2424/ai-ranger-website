'use client';

import { motion } from 'framer-motion';

const ContactInfoSection = () => {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: '電話でのお問い合わせ',
      content: '096-327-9339',
      description: '営業時間: 平日 9:00 - 18:00',
      action: 'tel:096-327-9339',
      actionText: '電話する'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'メールでのお問い合わせ',
      content: 'info@re-haru.com',
      description: '24時間受付（2営業日以内にご返信）',
      action: 'mailto:info@re-haru.com',
      actionText: 'メール送信'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'オフィス所在地',
      content: '熊本県熊本市西区春日1-14-3',
      description: 'ザ・熊本タワー2901',
      action: 'https://maps.google.com/?q=熊本県熊本市西区春日1-14-3',
      actionText: '地図を見る'
    }
  ];

  const businessHours = [
    { day: '営業日', hours: '平日（月〜金）' },
    { day: '営業時間', hours: '9:00 - 18:00' },
    { day: '定休日', hours: '土日祝日' },
    { day: '対応方法', hours: '電話・メール・オンライン会議' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            その他のお問い合わせ方法
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            お急ぎの方やご相談内容によって、最適なお問い合わせ方法をお選びください
          </p>
        </motion.div>

        {/* お問い合わせ方法 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-ai-blue to-sky-blue rounded-full flex items-center justify-center text-white mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-lg font-semibold text-ai-blue mb-2">
                {method.content}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {method.description}
              </p>
              <a
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : undefined}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center px-4 py-2 bg-ai-blue text-white font-bold rounded-full hover:bg-sky-blue transition-colors"
              >
                {method.actionText}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* 営業時間情報 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              営業時間・対応について
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {businessHours.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-bold text-gray-700">{item.day}</span>
                  <span className="text-gray-600">{item.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-ai-blue/5 to-sky-blue/5 rounded-lg border-l-4 border-ai-blue">
              <p className="text-sm text-gray-700">
                <span className="font-bold">※ ご注意</span><br />
                営業時間外のお電話は留守番電話となります。メールまたはお問い合わせフォームをご利用いただくと、より確実にご連絡いただけます。
              </p>
            </div>
          </div>
        </motion.div>

        {/* よくある質問への誘導 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-ai-blue to-sky-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              お問い合わせ前にご確認ください
            </h3>
            <p className="mb-6">
              よくいただくご質問をまとめました。<br />
              お急ぎの方は、まずこちらをご確認ください。
            </p>
            <a
              href="/service#faq"
              className="inline-flex items-center px-6 py-3 bg-white text-ai-blue font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              よくある質問を見る
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfoSection;