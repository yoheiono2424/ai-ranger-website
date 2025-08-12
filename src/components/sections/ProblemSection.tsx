'use client';

import { motion } from 'framer-motion';

const ProblemSection = () => {
  const problems = [
    {
      number: '01',
      title: '夢を諦めた経営者たち',
      description: '高額な開発費用の前に、新しい挑戦を断念',
      detail: 'システム開発の見積もりを見て、青春時代の夢や情熱を思い出しながらも、現実的な判断として諦めざるを得ない経営者が多数存在します。',
      icon: '💔',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      number: '02',
      title: '成長の機会を失う若手社員',
      description: '手作業に追われ、創造的な仕事ができない日々',
      detail: 'システム化されていない業務に時間を取られ、本来の能力を発揮できず、成長の機会を失っている若手社員。彼らの青春は効率の悪い作業に消えています。',
      icon: '⏰',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      number: '03',
      title: '希望を見出せない中小企業',
      description: 'DXの波に乗れず、競争力を失う恐怖',
      detail: '大企業との技術格差は広がるばかり。デジタル化の必要性は理解しているものの、その第一歩を踏み出すことができない中小企業が増えています。',
      icon: '📉',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            なぜ、多くの企業が
            <span className="text-challenge-orange block mt-2">青春を失ってしまうのか</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            高額な開発費用という壁に阻まれ、
            挑戦する勇気と成長への希望を失う企業たち
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`${problem.bgColor} rounded-2xl p-8 h-full relative overflow-hidden group hover:shadow-lg transition-all duration-300`}>
                <motion.div
                  className="absolute -top-10 -right-10 text-8xl opacity-10"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {problem.icon}
                </motion.div>
                
                <div className="relative z-10">
                  <div className={`text-6xl font-black ${problem.color} opacity-20 mb-4`}>
                    {problem.number}
                  </div>
                  
                  <h3 className={`text-xl font-bold ${problem.color} mb-3`}>
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-700 font-bold mb-4">
                    {problem.description}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {problem.detail}
                  </p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100"
                  style={{ color: problem.color.replace('text-', '') }}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 1.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;