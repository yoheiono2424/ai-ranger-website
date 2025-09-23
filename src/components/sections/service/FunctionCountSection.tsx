'use client';

const FunctionCountSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-ai-blue/5 to-sky-blue/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 text-center">
            機能数のカウント例
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            実際のシステムでの機能数カウント事例
          </p>

          <div className="space-y-12">
            {/* カウント例 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-ai-blue to-sky-blue p-6">
                <h3 className="text-xl font-bold text-white text-center">
                  カウント例：勤怠管理システム
                </h3>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="space-y-4">
                      <div>
                        <p className="font-bold text-gray-900 mb-2">① ユーザー管理（3個）</p>
                        <ul className="ml-4 text-sm text-gray-600 space-y-1">
                          <li>・認証する（ログイン/アウト）</li>
                          <li>・プロフィール管理する（表示・編集）</li>
                          <li>・設定管理する（パスワード・通知）</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-2">② 勤怠打刻（4個）</p>
                        <ul className="ml-4 text-sm text-gray-600 space-y-1">
                          <li>・打刻する（出勤・退勤・休憩）</li>
                          <li>・打刻履歴を表示する</li>
                          <li>・打刻修正を申請する</li>
                          <li>・勤怠データを出力する</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-2">③ 申請管理（4個）</p>
                        <ul className="ml-4 text-sm text-gray-600 space-y-1">
                          <li>・残業を管理する（申請・編集・削除）</li>
                          <li>・休暇を管理する（申請・編集・削除）</li>
                          <li>・申請一覧を表示する</li>
                          <li>・申請を承認/却下する</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-ai-blue/10 to-sky-blue/10 rounded-lg p-6 text-center">
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      合計機能数: 11個
                    </p>
                    <p className="text-2xl font-black text-ai-blue">
                      開発費用: 300万円
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      （基本料金内で実装可能）
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* もう一つの例：フリマアプリ */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-hope-green to-emerald-400 p-6">
                <h3 className="text-xl font-bold text-white text-center">
                  カウント例：フリマアプリ
                </h3>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <p className="font-bold text-gray-900 mb-2">① 商品管理（5個）</p>
                          <ul className="ml-4 text-sm text-gray-600 space-y-1">
                            <li>・商品を管理する（出品・編集・削除）</li>
                            <li>・商品画像を管理する</li>
                            <li>・商品ステータスを変更する</li>
                            <li>・在庫数を管理する</li>
                            <li>・商品情報を表示する（一覧・詳細）</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 mb-2">② 購入機能（6個）</p>
                          <ul className="ml-4 text-sm text-gray-600 space-y-1">
                            <li>・商品をカートに入れる</li>
                            <li>・購入手続きをする</li>
                            <li>・決済処理をする</li>
                            <li>・配送先を管理する（登録・編集・削除）</li>
                            <li>・購入履歴を表示する</li>
                            <li>・注文をキャンセルする</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 mb-2">③ 評価・レビュー（2個）</p>
                          <ul className="ml-4 text-sm text-gray-600 space-y-1">
                            <li>・評価・レビューを管理する（投稿・編集・削除）</li>
                            <li>・評価・レビューを表示する</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 mb-2">④ ユーザー管理（5個）</p>
                          <ul className="ml-4 text-sm text-gray-600 space-y-1">
                            <li>・ユーザー登録する</li>
                            <li>・認証する（ログイン/ログアウト）</li>
                            <li>・プロフィールを管理する（表示・編集）</li>
                            <li>・本人確認をする</li>
                            <li>・フォロー/ブロックを管理する</li>
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="font-bold text-gray-900 mb-2">⑤ メッセージ（3個）</p>
                          <ul className="ml-4 text-sm text-gray-600 space-y-1">
                            <li>・メッセージを管理する（送信・受信・削除）</li>
                            <li>・メッセージ一覧を表示する</li>
                            <li>・既読/未読を管理する</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 mb-2">⑥ 通知・お知らせ（3個）</p>
                          <ul className="ml-4 text-sm text-gray-600 space-y-1">
                            <li>・通知を送信する（プッシュ・メール）</li>
                            <li>・通知設定を管理する</li>
                            <li>・お知らせを表示する</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 mb-2">⑦ 売上・振込管理（5個）</p>
                          <ul className="ml-4 text-sm text-gray-600 space-y-1">
                            <li>・売上を確認する</li>
                            <li>・振込申請をする</li>
                            <li>・振込履歴を表示する</li>
                            <li>・手数料を計算する</li>
                            <li>・売上レポートを出力する</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 mb-2">⑧ 検索・フィルター（1個）</p>
                          <ul className="ml-4 text-sm text-gray-600 space-y-1">
                            <li>・商品を検索・フィルタリング・ソートする</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 mb-2">⑨ お気に入り（2個）</p>
                          <ul className="ml-4 text-sm text-gray-600 space-y-1">
                            <li>・お気に入りを管理する（登録・削除）</li>
                            <li>・お気に入り一覧を表示する</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 mb-2">⑩ 管理者機能（3個）</p>
                          <ul className="ml-4 text-sm text-gray-600 space-y-1">
                            <li>・ユーザーを管理する</li>
                            <li>・違反商品を管理する</li>
                            <li>・システム設定を管理する</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 mb-2">⑪ その他（3個）</p>
                          <ul className="ml-4 text-sm text-gray-600 space-y-1">
                            <li>・利用規約を表示する</li>
                            <li>・ヘルプを表示する</li>
                            <li>・お問い合わせをする</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-hope-green/10 to-emerald-100 rounded-lg p-6 text-center">
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      合計機能数: 42個
                    </p>
                    <div className="text-sm text-gray-600 mb-2">
                      基本料金300万円（30個まで）+ 追加12個 × 10万円
                    </div>
                    <p className="text-2xl font-black text-hope-green">
                      開発費用: 420万円
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 機能数の定義 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                機能数とは？
              </h3>
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-700 mb-4">
                    機能数は「ユーザーが実行する具体的なアクション」の単位です。
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-ai-blue mr-2">✓</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900">1つの明確な目的を持つ機能</p>
                        <p className="text-xs text-gray-600">例：「商品を登録する」「レポートを出力する」</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-ai-blue mr-2">✓</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900">1クリック/1フォーム送信で完結</p>
                        <p className="text-xs text-gray-600">ボタンクリックやフォーム送信で実行される操作</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-ai-blue mr-2">✓</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900">「〜する」と動詞で表現可能</p>
                        <p className="text-xs text-gray-600">ユーザー視点での具体的なアクション</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              お客様の要件を詳しくお聞きして、正確なお見積もりをご提案いたします
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-ai-blue text-white font-bold rounded-full hover:bg-sky-blue transition-all duration-300"
            >
              無料でカウント診断を受ける
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionCountSection;