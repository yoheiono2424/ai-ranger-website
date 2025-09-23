import Image from 'next/image';
import SmoothScrollLink from '@/components/common/SmoothScrollLink';

const ServiceOverviewSection = () => {
  
  const features = [
    {
      title: '開発スピードの革命',
      value: '従来の 1/3',
      description: '独自のAI開発技術で常識を覆す開発スピード',
      icon: '⚡',
      details: [
        '独自のAIによる開発技術の確立',
        '従来の常識を覆す開発スピード',
        '最短2ヶ月での納品を実現'
      ],
      color: 'from-ai-blue to-sky-blue',
    },
    {
      title: '価格の革命',
      value: '従来の 1/5',
      description: '開発相場の価格破壊を起こす透明な料金体系',
      icon: '💰',
      details: [
        '開発相場の価格破壊を起こす',
        '機能数ベースの明確な料金体系で不透明な見積もりを撤廃',
        'オプション機能も明確な価格設定'
      ],
      color: 'from-hope-green to-emerald-400',
    },
    {
      title: 'プロセスの革命',
      value: '従来の 1/10',
      description: 'お客様は「やりたいこと」を伝えるだけ',
      icon: '🎯',
      details: [
        '複雑な要件定義はAIが機能数として明確化します',
        '専門知識不要で即座に開発開始',
        '柔軟な変更対応も可能'
      ],
      color: 'from-challenge-orange to-amber-400',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* メインタイトルセクション */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <h2 className="relative text-3xl md:text-5xl font-black text-gray-900">
              <span className="inline-block">なぜ<span className="text-ai-blue">AIレンジャー</span>が</span>
              <span className="block md:inline">選ばれるのか</span>
            </h2>
          </div>
          
          {/* 独自AI技術の強調 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 max-w-4xl mx-auto border-2 border-ai-blue/20">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-ai-blue to-sky-blue rounded-full p-6">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black mb-4 bg-gradient-to-r from-ai-blue to-sky-blue text-transparent bg-clip-text">
              独自のAIシステム開発技術
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              従来の開発会社にはない、<strong className="inline-block">完全独自開発のAI技術</strong>により
              「高額な開発相場を成敗する!!」を実現します
            </p>
          </div>
        </div>

        {/* 3つの革命セクション */}
        <div className="relative mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              <span className="inline-block">独自AI技術が起こす</span>
              <span className="text-ai-blue block md:inline">3つの革命</span>
            </h3>
            <p className="text-lg text-gray-600">
              我々にお任せください！
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ai-blue/5 to-transparent rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  
                  {/* アイコンと値 */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-4xl">{feature.icon}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 font-medium">
                        {feature.value.split(' ')[0]}
                      </div>
                      <div className="text-4xl font-black bg-gradient-to-r from-ai-blue to-sky-blue text-transparent bg-clip-text">
                        {feature.value.split(' ')[1]}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* 常に表示される詳細 */}
                  <div className="pt-4 border-t border-gray-100">
                    <ul className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-ai-blue to-sky-blue flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700 leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAセクション */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-ai-blue to-sky-blue rounded-3xl blur-3xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-ai-blue to-sky-blue rounded-3xl p-10 md:p-16 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-8">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-black mb-6">
                <span className="block">独自のAI開発技術で</span>
                <span className="inline-block">あなたの「諦め」を</span>
                <span className="block md:inline">「実現」に</span>
              </h3>
              
              <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                従来の1/5の費用、1/3の期間で、
                理想のシステムを開発します
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SmoothScrollLink 
                  href="#price"
                  className="px-10 py-5 bg-white text-ai-blue font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 inline-block text-center"
                >
                  料金プランを見る
                </SmoothScrollLink>
                <SmoothScrollLink 
                  href="#results"
                  className="px-10 py-5 bg-transparent text-white font-bold text-lg rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300 inline-block text-center"
                >
                  開発実績を見る
                </SmoothScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverviewSection;