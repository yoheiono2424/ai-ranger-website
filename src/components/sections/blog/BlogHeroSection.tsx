export default function BlogHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            開発ブログ
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            システム開発・AI活用・DX推進に関する最新情報をお届けします。
            <br />
            御社の業務改善・コスト削減に役立つ情報を定期的に発信中。
          </p>
        </div>
      </div>
    </section>
  );
}
