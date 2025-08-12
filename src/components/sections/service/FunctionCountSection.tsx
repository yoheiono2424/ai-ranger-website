'use client';

const FunctionCountSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-ai-blue/5 to-sky-blue/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 text-center">
            機能カウント方法（参考例）
          </h2>
          
          <div className="space-y-12">
            {/* 例1：勤怠管理システム（MINIプラン） */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-ai-blue mb-2 text-center">
                例1：勤怠管理システム
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6">シンプルな業務システム</p>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="text-sm space-y-2">
                    <div className="border-b pb-2">
                      <div className="font-medium text-gray-900 mb-1">① ログイン・ユーザー管理</div>
                      <div className="ml-4 text-gray-600 space-y-1">
                        <div>・ログインする</div>
                        <div>・パスワードを変更する</div>
                        <div>・ユーザー情報を編集する</div>
                      </div>
                    </div>
                    <div className="border-b pb-2">
                      <div className="font-medium text-gray-900 mb-1">② 勤怠打刻</div>
                      <div className="ml-4 text-gray-600 space-y-1">
                        <div>・出勤を打刻する</div>
                        <div>・退勤を打刻する</div>
                        <div>・休憩を開始する</div>
                        <div>・休憩を終了する</div>
                      </div>
                    </div>
                    <div className="border-b pb-2">
                      <div className="font-medium text-gray-900 mb-1">③ シフト申請</div>
                      <div className="ml-4 text-gray-600 space-y-1">
                        <div>・希望シフトを提出する</div>
                        <div>・シフトを確認する</div>
                      </div>
                    </div>
                    <div className="border-b pb-2">
                      <div className="font-medium text-gray-900 mb-1">④ 各種申請</div>
                      <div className="ml-4 text-gray-600 space-y-1">
                        <div>・残業を申請する</div>
                        <div>・休暇を申請する</div>
                        <div>・経費を申請する</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">⑤ データ出力</div>
                      <div className="ml-4 text-gray-600 space-y-1">
                        <div>・月次勤怠データを出力する</div>
                        <div>・残業時間データを出力する</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-4 text-center">
                  <p className="font-bold text-gray-700 mb-1">
                    大分類：5つ、小分類：15個
                  </p>
                  <p className="text-lg font-black text-gray-600">
                    = AIレンジャーMINI（300万円）
                  </p>
                </div>
              </div>
            </div>

            {/* 例2：フリマアプリ（STANDARDプラン） */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-ai-blue mb-2 text-center">
                例2：本格的なフリマアプリ
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6">複雑な機能を持つアプリ</p>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-1 border-b border-gray-100">
                        <span className="font-medium text-gray-900">① 商品管理</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">6個</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-gray-100">
                        <span className="font-medium text-gray-900">② 購入機能</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">4個</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-gray-100">
                        <span className="font-medium text-gray-900">③ 評価・レビュー</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">3個</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-gray-100">
                        <span className="font-medium text-gray-900">④ ユーザー管理</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">4個</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-1 border-b border-gray-100">
                        <span className="font-medium text-gray-900">⑤ メッセージ</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">4個</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-gray-100">
                        <span className="font-medium text-gray-900">⑥ 通知・お知らせ</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">3個</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-gray-100">
                        <span className="font-medium text-gray-900">⑦ 売上・振込管理</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">3個</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-gray-100">
                        <span className="font-medium text-gray-900">⑧ お気に入り</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">3個</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-ai-blue/10 to-sky-blue/20 rounded-lg p-4 text-center">
                  <p className="font-bold text-ai-blue mb-1">
                    大分類：8つ、小分類：30個
                  </p>
                  <p className="text-lg font-black text-ai-blue">
                    = AIレンジャーSTANDARD（500万円）
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              このように機能を大分類・小分類に分けてカウントし、最適なプランをご提案いたします。<br />
              詳しい機能分析は無料ヒアリングで行いますので、お気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionCountSection;