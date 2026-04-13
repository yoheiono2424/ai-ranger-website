'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SolutionSection = () => {
  const solutions = [
    {
      number: '01',
      title: '開発費用',
      value: '500万円',
      description: 'AIの力で開発コストを大幅削減',
      icon: <svg className="w-10 h-10 md:w-12 md:h-12 text-ai-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      color: 'text-ai-blue',
      bgColor: 'bg-ai-blue/10',
    },
    {
      number: '02',
      title: '開発期間',
      value: '2〜6ヶ月',
      description: '超高速開発で素早く実現',
      icon: <svg className="w-10 h-10 md:w-12 md:h-12 text-hope-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      color: 'text-hope-green',
      bgColor: 'bg-hope-green/10',
    },
    {
      number: '03',
      title: '要件定義',
      value: '対話のみ',
      description: '対話だけで要件が明確に',
      icon: <svg className="w-10 h-10 md:w-12 md:h-12 text-challenge-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth={1.5} /><circle cx="12" cy="12" r="6" strokeWidth={1.5} /><circle cx="12" cy="12" r="2" strokeWidth={1.5} /></svg>,
      color: 'text-challenge-orange',
      bgColor: 'bg-challenge-orange/10',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            私たちの
            <span className="text-ai-blue">ソリューション</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            5レンジャーで、あなたの会社に
            <span className="text-hope-green font-bold">「Return青春」</span>
            を
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                className={`${solution.bgColor} w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center mx-auto mb-4`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {solution.icon}
              </motion.div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {solution.title}
              </h3>
              
              <div className={`text-3xl md:text-4xl font-black ${solution.color} mb-2`}>
                {solution.value}
              </div>
              
              <p className="text-sm text-gray-600">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/service"
            className="inline-flex items-center justify-center px-8 py-4 bg-ai-blue text-white font-bold rounded-full hover:bg-sky-blue transition-all duration-300 transform hover:scale-105"
          >
            5レンジャーの詳細を見る
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
};

export default SolutionSection;