'use client';

interface SystemMockScreenProps {
  type: 'inventory' | 'construction' | 'reservation' | 'sales' | 'safety' | 'ingredient' | 'customer' | 'patient' | 'course' | 'delivery' | 'property' | 'production';
  title?: string;
  features?: string[];
}

export default function SystemMockScreen({ type, title }: SystemMockScreenProps) {

  // 在庫管理システムの画面
  const InventoryScreen = () => (
    <div className="space-y-4">
      {/* 検索・フィルタエリア */}
      <div className="flex gap-3 flex-wrap">
        <input
          type="text"
          placeholder="商品名で検索..."
          className="px-4 py-2 border border-gray-300 rounded-lg flex-1 min-w-[200px]"
          disabled
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg" disabled>
          <option>すべてのカテゴリ</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg" disabled>
          <option>在庫状況</option>
        </select>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg cursor-default">
          検索
        </button>
      </div>

      {/* 統計カード */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-gray-500 text-sm">総在庫数</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">1,234</div>
          <div className="text-green-600 text-sm mt-1">↑ 12% 前月比</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-gray-500 text-sm">在庫金額</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">¥8.5M</div>
          <div className="text-green-600 text-sm mt-1">↑ 8% 前月比</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-gray-500 text-sm">要発注</div>
          <div className="text-2xl font-bold text-orange-600 mt-1">23</div>
          <div className="text-orange-600 text-sm mt-1">⚠ 確認が必要</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-gray-500 text-sm">欠品</div>
          <div className="text-2xl font-bold text-red-600 mt-1">3</div>
          <div className="text-red-600 text-sm mt-1">⚠ 至急対応</div>
        </div>
      </div>

      {/* テーブル */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">商品コード</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">商品名</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">カテゴリ</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">現在庫</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">安全在庫</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">状態</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-900">P-001</td>
              <td className="px-4 py-3 text-sm text-gray-900">ステンレス部品 A型</td>
              <td className="px-4 py-3 text-sm text-gray-600">部品</td>
              <td className="px-4 py-3 text-sm text-gray-900 text-right">450</td>
              <td className="px-4 py-3 text-sm text-gray-600 text-right">200</td>
              <td className="px-4 py-3 text-center">
                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">適正</span>
              </td>
              <td className="px-4 py-3 text-center">
                <span className="text-blue-600 text-sm font-medium cursor-default">詳細</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">P-002</td>
              <td className="px-4 py-3 text-sm text-gray-900">アルミ板材 B型</td>
              <td className="px-4 py-3 text-sm text-gray-600">素材</td>
              <td className="px-4 py-3 text-sm text-gray-900 text-right">180</td>
              <td className="px-4 py-3 text-sm text-gray-600 text-right">150</td>
              <td className="px-4 py-3 text-center">
                <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">注意</span>
              </td>
              <td className="px-4 py-3 text-center">
                <span className="text-blue-600 text-sm font-medium cursor-default">詳細</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">P-003</td>
              <td className="px-4 py-3 text-sm text-gray-900">ボルトセット M8</td>
              <td className="px-4 py-3 text-sm text-gray-600">部品</td>
              <td className="px-4 py-3 text-sm text-gray-900 text-right">85</td>
              <td className="px-4 py-3 text-sm text-gray-600 text-right">100</td>
              <td className="px-4 py-3 text-center">
                <span className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">要発注</span>
              </td>
              <td className="px-4 py-3 text-center">
                <span className="text-blue-600 text-sm font-medium cursor-default">詳細</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">P-004</td>
              <td className="px-4 py-3 text-sm text-gray-900">樹脂パーツ C型</td>
              <td className="px-4 py-3 text-sm text-gray-600">部品</td>
              <td className="px-4 py-3 text-sm text-red-600 text-right font-semibold">0</td>
              <td className="px-4 py-3 text-sm text-gray-600 text-right">50</td>
              <td className="px-4 py-3 text-center">
                <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">欠品</span>
              </td>
              <td className="px-4 py-3 text-center">
                <span className="text-blue-600 text-sm font-medium cursor-default">詳細</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">P-005</td>
              <td className="px-4 py-3 text-sm text-gray-900">鋼材 D型</td>
              <td className="px-4 py-3 text-sm text-gray-600">素材</td>
              <td className="px-4 py-3 text-sm text-gray-900 text-right">320</td>
              <td className="px-4 py-3 text-sm text-gray-600 text-right">200</td>
              <td className="px-4 py-3 text-center">
                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">適正</span>
              </td>
              <td className="px-4 py-3 text-center">
                <span className="text-blue-600 text-sm font-medium cursor-default">詳細</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ページネーション */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          全234件中 1-5件を表示
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 cursor-default">
            前へ
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm cursor-default">
            1
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 cursor-default">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 cursor-default">
            3
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 cursor-default">
            次へ
          </button>
        </div>
      </div>
    </div>
  );

  // 建設業 - 工程管理システムの画面（ガントチャート風）
  const ConstructionScreen = () => (
    <div className="space-y-6">
      {/* カレンダーヘッダー（今週の日付） */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-bold text-gray-900">2024年10月 第2週</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm border border-gray-300 rounded cursor-default">今週</button>
            <button className="px-3 py-1 text-sm border border-gray-300 rounded cursor-default">来週</button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          <div className="text-xs text-gray-500 font-semibold">月<br/>14</div>
          <div className="text-xs text-gray-500 font-semibold">火<br/>15</div>
          <div className="text-xs text-gray-500 font-semibold">水<br/>16</div>
          <div className="text-xs text-gray-500 font-semibold">木<br/>17</div>
          <div className="text-xs text-gray-500 font-semibold">金<br/>18</div>
          <div className="text-xs text-gray-400 font-semibold">土<br/>19</div>
          <div className="text-xs text-gray-400 font-semibold">日<br/>20</div>
        </div>
      </div>

      {/* プロジェクトガントチャート */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-slate-700 text-white px-4 py-3 font-semibold">進行中のプロジェクト</div>

        {/* プロジェクト1 */}
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="font-semibold text-gray-900">熊本市オフィスビル新築</div>
              <div className="text-sm text-gray-600">熊本市中央区 | 責任者: 佐藤</div>
            </div>
            <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">順調</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-600 w-20">基礎工事</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{width: '100%'}}></div>
              </div>
              <div className="text-xs text-gray-900 font-semibold w-12 text-right">完了</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-600 w-20">躯体工事</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{width: '85%'}}></div>
              </div>
              <div className="text-xs text-gray-900 font-semibold w-12 text-right">85%</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-600 w-20">仕上げ</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-gray-400 h-3 rounded-full" style={{width: '10%'}}></div>
              </div>
              <div className="text-xs text-gray-600 w-12 text-right">予定</div>
            </div>
          </div>
        </div>

        {/* プロジェクト2 */}
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="font-semibold text-gray-900">菊陽町マンション基礎工事</div>
              <div className="text-sm text-gray-600">菊陽町 | 責任者: 田中</div>
            </div>
            <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">最終段階</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-600 w-20">杭打ち</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{width: '100%'}}></div>
              </div>
              <div className="text-xs text-gray-900 font-semibold w-12 text-right">完了</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-600 w-20">基礎配筋</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{width: '92%'}}></div>
              </div>
              <div className="text-xs text-gray-900 font-semibold w-12 text-right">92%</div>
            </div>
          </div>
        </div>

        {/* プロジェクト3 */}
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="font-semibold text-gray-900">益城町公民館改修</div>
              <div className="text-sm text-gray-600">益城町 | 責任者: 高橋</div>
            </div>
            <span className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">遅延</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-600 w-20">解体</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{width: '100%'}}></div>
              </div>
              <div className="text-xs text-gray-900 font-semibold w-12 text-right">完了</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-600 w-20">改修工事</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-orange-500 h-3 rounded-full" style={{width: '32%'}}></div>
              </div>
              <div className="text-xs text-orange-600 font-semibold w-12 text-right">32%</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-orange-600 bg-orange-50 p-2 rounded">
            進捗遅延：資材納期遅れにより2週間の遅延が発生
          </div>
        </div>

        {/* プロジェクト4 */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="font-semibold text-gray-900">大津町道路舗装工事</div>
              <div className="text-sm text-gray-600">大津町 | 責任者: 鈴木</div>
            </div>
            <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">進行中</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-600 w-20">下地工事</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{width: '45%'}}></div>
              </div>
              <div className="text-xs text-gray-900 font-semibold w-12 text-right">45%</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-600 w-20">舗装</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-gray-400 h-3 rounded-full" style={{width: '0%'}}></div>
              </div>
              <div className="text-xs text-gray-600 w-12 text-right">予定</div>
            </div>
          </div>
        </div>
      </div>

      {/* サマリー統計 */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-blue-700">12</div>
          <div className="text-sm text-blue-600 mt-1">進行中の案件</div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-green-700">68%</div>
          <div className="text-sm text-green-600 mt-1">平均完了率</div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-orange-700">2</div>
          <div className="text-sm text-orange-600 mt-1">要対応案件</div>
        </div>
      </div>
    </div>
  );

  // 飲食業 - 予約・仕込み管理システムの画面（AI付き・予約台帳形式）
  const ReservationScreen = () => (
    <div className="space-y-6">
      {/* AI予測の大型カード */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <div className="text-2xl font-bold">AI需要予測システム</div>
            <div className="text-purple-100 text-sm">過去3年間のデータから来客数・食材使用量を自動予測</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white/20 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-purple-100 text-sm mb-1">今日の予測来客数</div>
            <div className="text-3xl font-bold">32組</div>
            <div className="text-sm text-purple-100 mt-1">予測精度 95%</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-purple-100 text-sm mb-1">推奨仕込み量</div>
            <div className="text-3xl font-bold">85人分</div>
            <div className="text-sm text-purple-100 mt-1">ロス削減率 18%</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-4 border border-white/30">
            <div className="text-purple-100 text-sm mb-1">今月のロス削減額</div>
            <div className="text-3xl font-bold">¥85K</div>
            <div className="text-sm text-purple-100 mt-1">目標達成</div>
          </div>
        </div>
      </div>

      {/* 予約台帳（本日） */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 font-semibold flex items-center justify-between">
          <span>本日の予約台帳 - 2024年10月14日（月）</span>
          <span className="text-sm font-normal">全28組</span>
        </div>

        {/* タイムスロット表示 */}
        <div className="divide-y divide-gray-200">
          {/* 17:00 */}
          <div className="p-4 hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="text-lg font-bold text-gray-700 w-20">17:00</div>
              <div className="flex-1 grid grid-cols-4 gap-2">
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-3">
                  <div className="font-semibold text-blue-900">テーブル1</div>
                  <div className="text-sm text-blue-700">山本様 4名</div>
                  <div className="text-xs text-blue-600 mt-1">特選コース</div>
                </div>
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-3">
                  <div className="font-semibold text-blue-900">テーブル3</div>
                  <div className="text-sm text-blue-700">伊藤様 2名</div>
                  <div className="text-xs text-blue-600 mt-1">アラカルト</div>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 bg-gray-50">
                  <div className="text-gray-400 text-sm">空席</div>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 bg-gray-50">
                  <div className="text-gray-400 text-sm">空席</div>
                </div>
              </div>
            </div>
          </div>

          {/* 18:00 */}
          <div className="p-4 hover:bg-gray-50 bg-purple-50/30">
            <div className="flex items-center gap-4">
              <div className="text-lg font-bold text-purple-700 w-20">18:00</div>
              <div className="flex-1 grid grid-cols-4 gap-2">
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-3">
                  <div className="font-semibold text-blue-900">テーブル1</div>
                  <div className="text-sm text-blue-700">田中様 4名</div>
                  <div className="text-xs text-blue-600 mt-1">特選コース</div>
                </div>
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-3">
                  <div className="font-semibold text-blue-900">テーブル2</div>
                  <div className="text-sm text-blue-700">中村様 3名</div>
                  <div className="text-xs text-blue-600 mt-1">季節のコース</div>
                </div>
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-3">
                  <div className="font-semibold text-blue-900">テーブル4</div>
                  <div className="text-sm text-blue-700">小林様 2名</div>
                  <div className="text-xs text-blue-600 mt-1">アラカルト</div>
                </div>
                <div className="bg-purple-100 border-2 border-purple-400 rounded-lg p-3">
                  <div className="font-semibold text-purple-900">個室A</div>
                  <div className="text-sm text-purple-700">佐藤様 6名</div>
                  <div className="text-xs text-purple-600 mt-1">AI推奨：宴会コース</div>
                </div>
              </div>
            </div>
          </div>

          {/* 19:00 */}
          <div className="p-4 hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="text-lg font-bold text-gray-700 w-20">19:00</div>
              <div className="flex-1 grid grid-cols-4 gap-2">
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-3">
                  <div className="font-semibold text-blue-900">テーブル2</div>
                  <div className="text-sm text-blue-700">佐藤様 2名</div>
                  <div className="text-xs text-blue-600 mt-1">季節のコース</div>
                </div>
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-3">
                  <div className="font-semibold text-blue-900">テーブル5</div>
                  <div className="text-sm text-blue-700">加藤様 4名</div>
                  <div className="text-xs text-blue-600 mt-1">飲み放題付き</div>
                </div>
                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-3">
                  <div className="font-semibold text-yellow-900">テーブル6</div>
                  <div className="text-sm text-yellow-700">鈴木様 3名</div>
                  <div className="text-xs text-yellow-600 mt-1">仮予約</div>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 bg-gray-50">
                  <div className="text-gray-400 text-sm">空席</div>
                </div>
              </div>
            </div>
          </div>

          {/* 20:00 */}
          <div className="p-4 hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="text-lg font-bold text-gray-700 w-20">20:00</div>
              <div className="flex-1 grid grid-cols-4 gap-2">
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-3">
                  <div className="font-semibold text-blue-900">テーブル3</div>
                  <div className="text-sm text-blue-700">山田様 6名</div>
                  <div className="text-xs text-blue-600 mt-1">飲み放題付き</div>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 bg-gray-50">
                  <div className="text-gray-400 text-sm">空席</div>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 bg-gray-50">
                  <div className="text-gray-400 text-sm">空席</div>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 bg-gray-50">
                  <div className="text-gray-400 text-sm">空席</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI仕込み量提案 */}
      <div className="bg-white rounded-lg border border-purple-200 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-3 font-semibold text-purple-800 flex items-center gap-2">
          <span>AI推奨仕込み量（本日分）</span>
        </div>
        <div className="p-4 grid grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-3">
            <div className="text-sm text-gray-600 mb-2">お肉</div>
            <div className="flex items-end gap-2 mb-2">
              <div className="text-2xl font-bold text-gray-900">8.5kg</div>
              <div className="text-sm text-purple-600 mb-1">推奨</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">現在庫: 9.2kg（適正）</div>
          </div>
          <div className="border border-gray-200 rounded-lg p-3">
            <div className="text-sm text-gray-600 mb-2">お魚</div>
            <div className="flex items-end gap-2 mb-2">
              <div className="text-2xl font-bold text-gray-900">6.2kg</div>
              <div className="text-sm text-purple-600 mb-1">推奨</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{width: '62%'}}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">現在庫: 7.0kg（適正）</div>
          </div>
          <div className="border border-orange-200 rounded-lg p-3 bg-orange-50">
            <div className="text-sm text-gray-600 mb-2">野菜類</div>
            <div className="flex items-end gap-2 mb-2">
              <div className="text-2xl font-bold text-gray-900">12kg</div>
              <div className="text-sm text-orange-600 mb-1">推奨</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{width: '35%'}}></div>
            </div>
            <div className="text-xs text-orange-600 mt-1">現在庫: 4.2kg（要発注）</div>
          </div>
        </div>
      </div>
    </div>
  );

  // 小売業 - 販売管理システムの画面（ダッシュボード型）
  const SalesScreen = () => (
    <div className="space-y-6">
      {/* リアルタイム売上カウンター */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-blue-100 text-sm mb-2">本日の売上（リアルタイム）</div>
            <div className="text-5xl font-bold">¥426,890</div>
            <div className="text-blue-100 text-sm mt-2">最終更新: 2分前</div>
          </div>
          <div className="text-right">
            <div className="bg-white/20 backdrop-blur rounded-lg p-4 border border-white/30 mb-2">
              <div className="text-sm text-blue-100">来客数</div>
              <div className="text-3xl font-bold">87人</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-4 border border-white/30">
              <div className="text-sm text-blue-100">客単価</div>
              <div className="text-3xl font-bold">¥4,897</div>
            </div>
          </div>
        </div>
      </div>

      {/* グラフエリア（2列） */}
      <div className="grid grid-cols-2 gap-6">
        {/* 時間別売上推移（折れ線風） */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="text-lg font-bold text-gray-900 mb-4">時間別売上推移</div>
          <div className="relative h-48">
            {/* グリッドライン */}
            <div className="absolute inset-0 flex flex-col justify-between border-l border-b border-gray-200">
              <div className="border-t border-dashed border-gray-300"></div>
              <div className="border-t border-dashed border-gray-300"></div>
              <div className="border-t border-dashed border-gray-300"></div>
            </div>
            {/* 折れ線グラフ風の棒グラフ */}
            <div className="absolute inset-0 flex items-end justify-between gap-2 px-2">
              <div className="relative flex flex-col items-center flex-1">
                <div className="absolute -top-6 text-xs font-semibold text-blue-600">¥32K</div>
                <div className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t" style={{height: '45%'}}></div>
                <div className="text-xs text-gray-600 mt-2">10時</div>
              </div>
              <div className="relative flex flex-col items-center flex-1">
                <div className="absolute -top-6 text-xs font-semibold text-blue-600">¥48K</div>
                <div className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t" style={{height: '65%'}}></div>
                <div className="text-xs text-gray-600 mt-2">11時</div>
              </div>
              <div className="relative flex flex-col items-center flex-1">
                <div className="absolute -top-6 text-xs font-semibold text-blue-600">¥68K</div>
                <div className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t" style={{height: '85%'}}></div>
                <div className="text-xs text-gray-600 mt-2">12時</div>
              </div>
              <div className="relative flex flex-col items-center flex-1">
                <div className="absolute -top-6 text-xs font-semibold text-blue-600">¥82K</div>
                <div className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t" style={{height: '100%'}}></div>
                <div className="text-xs text-gray-600 mt-2">13時</div>
              </div>
              <div className="relative flex flex-col items-center flex-1">
                <div className="absolute -top-6 text-xs font-semibold text-blue-600">¥58K</div>
                <div className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t" style={{height: '72%'}}></div>
                <div className="text-xs text-gray-600 mt-2">14時</div>
              </div>
              <div className="relative flex flex-col items-center flex-1">
                <div className="absolute -top-6 text-xs font-semibold text-blue-600">¥44K</div>
                <div className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t" style={{height: '55%'}}></div>
                <div className="text-xs text-gray-600 mt-2">15時</div>
              </div>
              <div className="relative flex flex-col items-center flex-1">
                <div className="absolute -top-6 text-xs font-semibold text-blue-600">¥38K</div>
                <div className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t" style={{height: '48%'}}></div>
                <div className="text-xs text-gray-600 mt-2">16時</div>
              </div>
              <div className="relative flex flex-col items-center flex-1">
                <div className="absolute -top-6 text-xs font-semibold text-gray-400">予測中</div>
                <div className="w-full bg-gradient-to-t from-gray-300 to-gray-200 rounded-t" style={{height: '35%'}}></div>
                <div className="text-xs text-gray-400 mt-2">17時</div>
              </div>
            </div>
          </div>
        </div>

        {/* カテゴリ別売上構成（円グラフ風） */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="text-lg font-bold text-gray-900 mb-4">カテゴリ別売上構成</div>
          <div className="flex items-center gap-6">
            {/* 円グラフ風の視覚表現 */}
            <div className="relative w-40 h-40">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                {/* コーヒー豆 42% */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="20" strokeDasharray="105 251" strokeDashoffset="0" />
                {/* 器具類 28% */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="20" strokeDasharray="70 251" strokeDashoffset="-105" />
                {/* 紅茶類 18% */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" strokeWidth="20" strokeDasharray="45 251" strokeDashoffset="-175" />
                {/* その他 12% */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#6B7280" strokeWidth="20" strokeDasharray="30 251" strokeDashoffset="-220" />
              </svg>
            </div>
            {/* 凡例 */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-blue-500"></div>
                  <span className="text-sm text-gray-700">コーヒー豆</span>
                </div>
                <div className="text-sm font-bold text-gray-900">42% (¥179K)</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-green-500"></div>
                  <span className="text-sm text-gray-700">器具・道具</span>
                </div>
                <div className="text-sm font-bold text-gray-900">28% (¥119K)</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-amber-500"></div>
                  <span className="text-sm text-gray-700">紅茶・茶葉</span>
                </div>
                <div className="text-sm font-bold text-gray-900">18% (¥77K)</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gray-500"></div>
                  <span className="text-sm text-gray-700">その他</span>
                </div>
                <div className="text-sm font-bold text-gray-900">12% (¥51K)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 売れ筋商品カード */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <div className="text-lg font-bold text-gray-900 mb-4">本日の売れ筋トップ5</div>
        <div className="grid grid-cols-5 gap-3">
          <div className="border-2 border-red-300 rounded-lg p-3 bg-red-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">1位</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">プレミアムコーヒー豆</div>
              <div className="text-xs text-gray-600 mb-2">¥1,980</div>
              <div className="bg-red-100 rounded px-2 py-1">
                <div className="text-xs text-red-700 font-bold">15個</div>
                <div className="text-xs text-red-600">¥29,700</div>
              </div>
            </div>
          </div>
          <div className="border-2 border-orange-300 rounded-lg p-3 bg-orange-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">2位</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">焙煎豆ギフトセット</div>
              <div className="text-xs text-gray-600 mb-2">¥5,400</div>
              <div className="bg-orange-100 rounded px-2 py-1">
                <div className="text-xs text-orange-700 font-bold">6個</div>
                <div className="text-xs text-orange-600">¥32,400</div>
              </div>
            </div>
          </div>
          <div className="border-2 border-yellow-300 rounded-lg p-3 bg-yellow-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-1">3位</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">ハンドドリップセット</div>
              <div className="text-xs text-gray-600 mb-2">¥8,800</div>
              <div className="bg-yellow-100 rounded px-2 py-1">
                <div className="text-xs text-yellow-700 font-bold">3個</div>
                <div className="text-xs text-yellow-600">¥26,400</div>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg p-3 bg-gray-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600 mb-1">4位</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">オーガニック紅茶セット</div>
              <div className="text-xs text-gray-600 mb-2">¥2,500</div>
              <div className="bg-gray-100 rounded px-2 py-1">
                <div className="text-xs text-gray-700 font-bold">8個</div>
                <div className="text-xs text-gray-600">¥20,000</div>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg p-3 bg-gray-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600 mb-1">5位</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">ラテアート用ミルク</div>
              <div className="text-xs text-gray-600 mb-2">¥680</div>
              <div className="bg-gray-100 rounded px-2 py-1">
                <div className="text-xs text-gray-700 font-bold">22個</div>
                <div className="text-xs text-gray-600">¥14,960</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* アラート・注意事項 */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-bold text-orange-800">在庫不足アラート</span>
          </div>
          <div className="text-sm text-orange-700">
            5品目が発注ラインを下回っています。至急発注処理を実施してください。
          </div>
        </div>
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-bold text-green-800">本日の目標達成率</span>
          </div>
          <div className="text-sm text-green-700">
            目標売上: ¥400K → 現在: ¥426K（<strong>106.7%達成</strong>）
          </div>
        </div>
      </div>
    </div>
  );

  // 建設業 - 安全管理システムの画面（チェックリスト形式）
  const SafetyScreen = () => (
    <div className="space-y-6">
      {/* 本日の安全ステータス */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-bold text-green-800">点検完了</span>
          </div>
          <div className="text-3xl font-bold text-green-600">8現場</div>
        </div>
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-bold text-yellow-800">点検中</span>
          </div>
          <div className="text-3xl font-bold text-yellow-600">3現場</div>
        </div>
        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-bold text-orange-800">要是正</span>
          </div>
          <div className="text-3xl font-bold text-orange-600">2件</div>
        </div>
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="font-bold text-blue-800">今月点検数</span>
          </div>
          <div className="text-3xl font-bold text-blue-600">142件</div>
        </div>
      </div>

      {/* 現場別安全チェックリスト */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-slate-700 text-white px-4 py-3 font-semibold">熊本市オフィスビル新築現場 - 本日の安全点検</div>
        <div className="p-6 space-y-4">
          {/* チェック項目 */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 mb-2">1. 作業員の安全装備確認</div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    ヘルメット着用
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    安全靴着用
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    安全帯装着
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    手袋着用
                  </div>
                </div>
                <div className="text-xs text-gray-500">点検者: 高橋 | 点検時刻: 08:30</div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 mb-2">2. 足場の安全確認</div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    手すり設置
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    固定確認
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    ネット設置
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    点検済み表示
                  </div>
                </div>
                <div className="text-xs text-gray-500">点検者: 佐藤 | 点検時刻: 09:00</div>
              </div>
            </div>
          </div>

          <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 mb-2">3. 重機の始業前点検</div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    油圧確認
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    ブレーキ確認
                  </div>
                  <div className="flex items-center gap-2 text-sm text-orange-700">
                    <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    警報装置（要修理）
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    燃料確認
                  </div>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded p-2 mb-2">
                  <div className="text-sm text-orange-800 font-semibold">是正指示：警報装置の修理を本日中に完了すること</div>
                </div>
                <div className="text-xs text-gray-500">点検者: 田中 | 点検時刻: 09:30</div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-600 mb-2">4. 電気設備の点検（未実施）</div>
                <div className="text-sm text-gray-500">点検予定時刻: 10:30</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 是正処置の進捗 */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <div className="text-lg font-bold text-gray-900 mb-4">今週の是正処置進捗</div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">菊陽町現場 - 消火器期限切れ</span>
                <span className="text-sm font-semibold text-green-600">完了</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">益城町現場 - 警告標識破損</span>
                <span className="text-sm font-semibold text-blue-600">対応中</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">大津町現場 - 手すり不足</span>
                <span className="text-sm font-semibold text-orange-600">未着手</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{width: '0%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 飲食業 - AI食材管理システムの画面（カレンダー形式 + AI警告パネル）
  const IngredientScreen = () => (
    <div className="space-y-6">
      {/* AI賞味期限警告パネル */}
      <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">AI賞味期限アラート</div>
              <div className="text-yellow-100 text-sm">賞味期限が近い食材を自動検知しました</div>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 border border-white/30">
            <div className="text-3xl font-bold">7品目</div>
            <div className="text-sm text-yellow-100">至急対応</div>
          </div>
        </div>
      </div>

      {/* 賞味期限カレンダー */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-5 py-3 font-semibold">
          今週の賞味期限カレンダー（10月14日〜10月20日）
        </div>
        <div className="p-5">
          <div className="grid grid-cols-7 gap-3">
            {/* 月曜日 */}
            <div className="border-2 border-blue-300 rounded-lg p-3 bg-blue-50">
              <div className="text-center font-bold text-blue-900 mb-3">月 14</div>
              <div className="space-y-2">
                <div className="bg-green-100 border border-green-300 rounded p-2">
                  <div className="text-xs font-semibold text-green-800">鮮魚 3kg</div>
                  <div className="text-xs text-green-600">残り7日</div>
                </div>
              </div>
            </div>

            {/* 火曜日 */}
            <div className="border-2 border-blue-300 rounded-lg p-3 bg-blue-50">
              <div className="text-center font-bold text-blue-900 mb-3">火 15</div>
              <div className="space-y-2">
                <div className="bg-green-100 border border-green-300 rounded p-2">
                  <div className="text-xs font-semibold text-green-800">牛肉 5kg</div>
                  <div className="text-xs text-green-600">残り6日</div>
                </div>
                <div className="bg-yellow-100 border border-yellow-400 rounded p-2">
                  <div className="text-xs font-semibold text-yellow-800">野菜セット</div>
                  <div className="text-xs text-yellow-600">残り3日</div>
                </div>
              </div>
            </div>

            {/* 水曜日 */}
            <div className="border-2 border-blue-300 rounded-lg p-3 bg-blue-50">
              <div className="text-center font-bold text-blue-900 mb-3">水 16</div>
              <div className="space-y-2">
                <div className="bg-orange-100 border border-orange-400 rounded p-2">
                  <div className="text-xs font-semibold text-orange-800">豚肉 4kg</div>
                  <div className="text-xs text-orange-600">残り2日</div>
                </div>
              </div>
            </div>

            {/* 木曜日 */}
            <div className="border-2 border-blue-300 rounded-lg p-3 bg-blue-50">
              <div className="text-center font-bold text-blue-900 mb-3">木 17</div>
              <div className="space-y-2">
                <div className="bg-red-100 border border-red-400 rounded p-2">
                  <div className="text-xs font-semibold text-red-800">鶏肉 6kg</div>
                  <div className="text-xs text-red-600">残り1日</div>
                </div>
                <div className="bg-red-100 border border-red-400 rounded p-2">
                  <div className="text-xs font-semibold text-red-800">牛乳 2L</div>
                  <div className="text-xs text-red-600">残り1日</div>
                </div>
              </div>
            </div>

            {/* 金曜日 */}
            <div className="border-2 border-blue-300 rounded-lg p-3 bg-blue-50">
              <div className="text-center font-bold text-blue-900 mb-3">金 18</div>
              <div className="space-y-2">
                <div className="bg-red-100 border border-red-400 rounded p-2">
                  <div className="text-xs font-semibold text-red-800">魚介類</div>
                  <div className="text-xs text-red-600">当日</div>
                </div>
              </div>
            </div>

            {/* 土曜日 */}
            <div className="border border-gray-300 rounded-lg p-3 bg-gray-50">
              <div className="text-center font-bold text-gray-500 mb-3">土 19</div>
              <div className="text-xs text-gray-400 text-center">該当なし</div>
            </div>

            {/* 日曜日 */}
            <div className="border border-gray-300 rounded-lg p-3 bg-gray-50">
              <div className="text-center font-bold text-gray-500 mb-3">日 20</div>
              <div className="text-xs text-gray-400 text-center">該当なし</div>
            </div>
          </div>
        </div>
      </div>

      {/* 在庫一覧テーブル */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-slate-700 text-white px-5 py-3 font-semibold">食材在庫一覧</div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">食材名</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">カテゴリ</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">在庫量</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">賞味期限</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">ステータス</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">AI推奨アクション</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-red-50">
              <td className="px-4 py-3 text-sm font-semibold text-gray-900">魚介類（サーモン）</td>
              <td className="px-4 py-3 text-sm text-gray-600">鮮魚</td>
              <td className="px-4 py-3 text-sm text-gray-900 text-right">2.5kg</td>
              <td className="px-4 py-3 text-sm text-red-600 font-semibold">2024/10/18</td>
              <td className="px-4 py-3 text-center">
                <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">当日</span>
              </td>
              <td className="px-4 py-3 text-sm text-red-700 font-semibold">本日中に使用</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">鶏肉（もも肉）</td>
              <td className="px-4 py-3 text-sm text-gray-600">肉類</td>
              <td className="px-4 py-3 text-sm text-gray-900 text-right">6kg</td>
              <td className="px-4 py-3 text-sm text-orange-600">2024/10/17</td>
              <td className="px-4 py-3 text-center">
                <span className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">残り1日</span>
              </td>
              <td className="px-4 py-3 text-sm text-orange-700">明日までに使用推奨</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">豚肉（ロース）</td>
              <td className="px-4 py-3 text-sm text-gray-600">肉類</td>
              <td className="px-4 py-3 text-sm text-gray-900 text-right">4kg</td>
              <td className="px-4 py-3 text-sm text-yellow-600">2024/10/16</td>
              <td className="px-4 py-3 text-center">
                <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">残り2日</span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">通常範囲</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">牛肉（カルビ）</td>
              <td className="px-4 py-3 text-sm text-gray-600">肉類</td>
              <td className="px-4 py-3 text-sm text-gray-900 text-right">5kg</td>
              <td className="px-4 py-3 text-sm text-green-600">2024/10/15</td>
              <td className="px-4 py-3 text-center">
                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">適正</span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">問題なし</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* AI自動発注提案 */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span className="font-bold text-blue-800">AI自動発注提案</span>
          </div>
          <div className="text-sm text-blue-700 mb-2">来週の需要予測に基づき、以下の発注を推奨します：</div>
          <div className="space-y-1 text-sm text-blue-800">
            <div>・鮮魚類: 12kg（通常の1.5倍）</div>
            <div>・野菜セット: 8kg</div>
            <div>・牛肉: 10kg</div>
          </div>
        </div>
        <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="font-bold text-purple-800">今月のロス削減実績</span>
          </div>
          <div className="text-3xl font-bold text-purple-700 mb-2">¥142,000</div>
          <div className="text-sm text-purple-600">前月比 -28% 削減達成</div>
        </div>
      </div>
    </div>
  );

  // 小売業 - AI顧客管理システムの画面（顧客カード形式 + AIレコメンデーション）
  const CustomerScreen = () => (
    <div className="space-y-6">
      {/* AI購買予測パネル */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">AI顧客購買予測システム</div>
              <div className="text-blue-100 text-sm">購買履歴から自動でアプローチ提案を生成</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 border border-white/30 text-center">
              <div className="text-2xl font-bold">58名</div>
              <div className="text-xs text-blue-100">購買可能性高</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 border border-white/30 text-center">
              <div className="text-2xl font-bold">92%</div>
              <div className="text-xs text-blue-100">予測精度</div>
            </div>
          </div>
        </div>
      </div>

      {/* 顧客カード一覧 */}
      <div className="grid grid-cols-3 gap-4">
        {/* 優先度高 - 顧客1 */}
        <div className="bg-white rounded-lg border-2 border-red-300 overflow-hidden">
          <div className="bg-red-500 text-white px-4 py-2 text-sm font-bold">優先度: 高</div>
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                田中
              </div>
              <div>
                <div className="font-bold text-gray-900">田中 美咲 様</div>
                <div className="text-xs text-gray-500">会員ID: C-10234</div>
              </div>
            </div>
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">購買履歴</span>
                <span className="font-semibold text-gray-900">¥342,500</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">来店頻度</span>
                <span className="font-semibold text-gray-900">月8回</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">最終来店</span>
                <span className="text-orange-600 font-semibold">7日前</span>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded p-3 mb-3">
              <div className="text-xs font-bold text-red-800 mb-1">AI購買予測</div>
              <div className="text-sm text-red-700">コーヒー豆購入確率: 85%</div>
              <div className="text-xs text-red-600 mt-1">推奨アクション: 新商品案内メール</div>
            </div>
            <button className="w-full bg-red-500 text-white py-2 rounded font-semibold text-sm cursor-default">
              自動メール送信
            </button>
          </div>
        </div>

        {/* 優先度中 - 顧客2 */}
        <div className="bg-white rounded-lg border-2 border-orange-300 overflow-hidden">
          <div className="bg-orange-500 text-white px-4 py-2 text-sm font-bold">優先度: 中</div>
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                佐藤
              </div>
              <div>
                <div className="font-bold text-gray-900">佐藤 健太 様</div>
                <div className="text-xs text-gray-500">会員ID: C-10187</div>
              </div>
            </div>
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">購買履歴</span>
                <span className="font-semibold text-gray-900">¥182,400</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">来店頻度</span>
                <span className="font-semibold text-gray-900">月5回</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">最終来店</span>
                <span className="text-gray-600">3日前</span>
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded p-3 mb-3">
              <div className="text-xs font-bold text-orange-800 mb-1">AI購買予測</div>
              <div className="text-sm text-orange-700">器具購入確率: 62%</div>
              <div className="text-xs text-orange-600 mt-1">推奨アクション: セール情報配信</div>
            </div>
            <button className="w-full bg-orange-500 text-white py-2 rounded font-semibold text-sm cursor-default">
              セール案内送信
            </button>
          </div>
        </div>

        {/* 優先度低 - 顧客3 */}
        <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
          <div className="bg-gray-500 text-white px-4 py-2 text-sm font-bold">優先度: 低</div>
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                鈴木
              </div>
              <div>
                <div className="font-bold text-gray-900">鈴木 優子 様</div>
                <div className="text-xs text-gray-500">会員ID: C-09842</div>
              </div>
            </div>
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">購買履歴</span>
                <span className="font-semibold text-gray-900">¥89,200</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">来店頻度</span>
                <span className="font-semibold text-gray-900">月2回</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">最終来店</span>
                <span className="text-gray-600">1日前</span>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 mb-3">
              <div className="text-xs font-bold text-gray-800 mb-1">AI購買予測</div>
              <div className="text-sm text-gray-700">紅茶購入確率: 35%</div>
              <div className="text-xs text-gray-600 mt-1">推奨アクション: 様子見</div>
            </div>
            <button className="w-full bg-gray-400 text-white py-2 rounded font-semibold text-sm cursor-default">
              次回アプローチ予定
            </button>
          </div>
        </div>
      </div>

      {/* 顧客セグメント分析 */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="text-lg font-bold text-gray-900 mb-4">顧客ランク別分布</div>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">プラチナ会員（¥300K以上）</span>
                <span className="text-sm font-bold text-gray-900">12名</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{width: '15%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">ゴールド会員（¥100K〜）</span>
                <span className="text-sm font-bold text-gray-900">48名</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">シルバー会員（¥50K〜）</span>
                <span className="text-sm font-bold text-gray-900">82名</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-gray-400 to-gray-500 h-3 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">一般会員</span>
                <span className="text-sm font-bold text-gray-900">134名</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-3 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="text-lg font-bold text-gray-900 mb-4">AIメール配信実績（今月）</div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <div className="text-3xl font-bold text-blue-600">1,240</div>
              <div className="text-sm text-blue-700 mt-1">送信数</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <div className="text-3xl font-bold text-green-600">42%</div>
              <div className="text-sm text-green-700 mt-1">開封率</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">クリック率</span>
              <span className="font-semibold text-gray-900">18.5%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">コンバージョン率</span>
              <span className="font-semibold text-green-600">8.2%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">配信経由売上</span>
              <span className="font-semibold text-gray-900">¥820,400</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 医療 - 患者管理システムの画面（予約カレンダー + 電子カルテ）
  const PatientScreen = () => (
    <div className="space-y-6">
      {/* 本日の予約状況 */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-300 rounded-lg p-4">
          <div className="text-teal-700 font-semibold text-sm mb-2">予約総数</div>
          <div className="text-4xl font-bold text-teal-900">24人</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-4">
          <div className="text-blue-700 font-semibold text-sm mb-2">診察済み</div>
          <div className="text-4xl font-bold text-blue-900">18人</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-lg p-4">
          <div className="text-yellow-700 font-semibold text-sm mb-2">待機中</div>
          <div className="text-4xl font-bold text-yellow-900">4人</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-lg p-4">
          <div className="text-purple-700 font-semibold text-sm mb-2">キャンセル</div>
          <div className="text-4xl font-bold text-purple-900">2人</div>
        </div>
      </div>

      {/* 本日の予約リスト */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-5 py-3 font-semibold">
          本日の予約リスト - 2024年10月14日（月）
        </div>
        <div className="divide-y divide-gray-200">
          {/* 予約1 */}
          <div className="p-5 hover:bg-gray-50 flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">09:30</div>
              <div className="text-xs text-gray-500">30分</div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              山田
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="font-bold text-gray-900 text-lg">山田 太郎 様</div>
                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">診察済み</span>
              </div>
              <div className="text-sm text-gray-600 mb-1">診療科目: 内科 | 患者ID: P-08234</div>
              <div className="text-sm text-gray-700">症状: 発熱・咳 | 担当医: 佐藤医師</div>
            </div>
            <button className="px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold cursor-default">
              カルテ表示
            </button>
          </div>

          {/* 予約2 */}
          <div className="p-5 hover:bg-gray-50 flex items-center gap-6 bg-blue-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700">10:00</div>
              <div className="text-xs text-blue-600">60分</div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              田中
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="font-bold text-gray-900 text-lg">田中 花子 様</div>
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">診察中</span>
              </div>
              <div className="text-sm text-gray-600 mb-1">診療科目: 整形外科 | 患者ID: P-09812</div>
              <div className="text-sm text-gray-700">症状: 膝の痛み | 担当医: 高橋医師</div>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold cursor-default">
              カルテ入力
            </button>
          </div>

          {/* 予約3 */}
          <div className="p-5 hover:bg-gray-50 flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">11:00</div>
              <div className="text-xs text-gray-500">30分</div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              鈴木
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="font-bold text-gray-900 text-lg">鈴木 一郎 様</div>
                <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">待機中</span>
              </div>
              <div className="text-sm text-gray-600 mb-1">診療科目: 内科 | 患者ID: P-10234</div>
              <div className="text-sm text-gray-700">症状: 定期健診 | 担当医: 佐藤医師</div>
            </div>
            <button className="px-6 py-2 bg-gray-400 text-white rounded-lg font-semibold cursor-default">
              待機中
            </button>
          </div>
        </div>
      </div>

      {/* 電子カルテプレビュー */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="text-lg font-bold text-gray-900 mb-4">電子カルテシステム - 山田 太郎 様</div>
          <div className="space-y-3">
            <div className="border-b border-gray-200 pb-2">
              <div className="text-xs text-gray-500 mb-1">患者基本情報</div>
              <div className="text-sm text-gray-700">生年月日: 1985/03/15 (39歳) | 血液型: A型</div>
            </div>
            <div className="border-b border-gray-200 pb-2">
              <div className="text-xs text-gray-500 mb-1">既往歴</div>
              <div className="text-sm text-gray-700">高血圧症（2020年〜）</div>
            </div>
            <div className="border-b border-gray-200 pb-2">
              <div className="text-xs text-gray-500 mb-1">アレルギー</div>
              <div className="text-sm text-gray-700">ペニシリン系抗生物質</div>
            </div>
            <div className="border-b border-gray-200 pb-2">
              <div className="text-xs text-gray-500 mb-1">本日の診察内容</div>
              <div className="text-sm text-gray-700">発熱（38.2℃）・咳 → インフルエンザ疑い</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">処方薬</div>
              <div className="text-sm text-gray-700">
                ・タミフル 75mg 1日2回 5日分<br/>
                ・解熱剤 必要時
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <div className="text-lg font-bold text-gray-900 mb-4">今週の統計データ</div>
          <div className="space-y-4">
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
              <div className="text-sm text-teal-700 mb-1">診察件数（今週）</div>
              <div className="text-3xl font-bold text-teal-900">142件</div>
              <div className="text-xs text-teal-600 mt-1">前週比 +12件</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="text-sm text-blue-700 mb-1">新規患者</div>
              <div className="text-3xl font-bold text-blue-900">18名</div>
              <div className="text-xs text-blue-600 mt-1">前週比 +3名</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <div className="text-sm text-purple-700 mb-1">平均待ち時間</div>
              <div className="text-3xl font-bold text-purple-900">12分</div>
              <div className="text-xs text-purple-600 mt-1">前週比 -3分</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 教育 - AI学習管理システムの画面（学習進捗 + AI推奨課題）
  const CourseScreen = () => (
    <div className="space-y-6">
      {/* AI学習分析パネル */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">AI学習分析システム</div>
              <div className="text-indigo-100 text-sm">生徒の理解度を分析し、最適な課題を自動配信</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 border border-white/30 text-center">
              <div className="text-2xl font-bold">32名</div>
              <div className="text-xs text-indigo-100">課題対象者</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 border border-white/30 text-center">
              <div className="text-2xl font-bold">88%</div>
              <div className="text-xs text-indigo-100">平均理解度</div>
            </div>
          </div>
        </div>
      </div>

      {/* クラス全体の進捗 */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <div className="text-lg font-bold text-gray-900 mb-4">高校1年A組 - 数学Ⅰ 単元別進捗</div>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="font-semibold text-gray-900">第1章: 数と式</span>
                <span className="text-sm text-green-600 ml-3">完了率 95%</span>
              </div>
              <span className="text-sm text-gray-600">38/40人</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-4 rounded-full" style={{width: '95%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="font-semibold text-gray-900">第2章: 2次関数</span>
                <span className="text-sm text-blue-600 ml-3">完了率 72%</span>
              </div>
              <span className="text-sm text-gray-600">29/40人</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full" style={{width: '72%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="font-semibold text-gray-900">第3章: 図形と計量</span>
                <span className="text-sm text-orange-600 ml-3">完了率 48%</span>
              </div>
              <span className="text-sm text-gray-600">19/40人</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-4 rounded-full" style={{width: '48%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="font-semibold text-gray-900">第4章: データの分析</span>
                <span className="text-sm text-gray-600 ml-3">完了率 12%</span>
              </div>
              <span className="text-sm text-gray-600">5/40人</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-gradient-to-r from-gray-400 to-gray-500 h-4 rounded-full" style={{width: '12%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* AI推奨課題 */}
      <div className="grid grid-cols-3 gap-4">
        {/* 生徒1 */}
        <div className="bg-white rounded-lg border-2 border-red-300 overflow-hidden">
          <div className="bg-red-500 text-white px-4 py-2 text-sm font-bold">要支援: 優先度高</div>
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                田中
              </div>
              <div>
                <div className="font-bold text-gray-900">田中 太郎</div>
                <div className="text-xs text-gray-500">出席番号: 12</div>
              </div>
            </div>
            <div className="mb-3">
              <div className="text-xs text-gray-600 mb-1">理解度スコア</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '42%'}}></div>
                </div>
                <span className="text-sm font-bold text-red-600">42%</span>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded p-3 mb-3">
              <div className="text-xs font-bold text-red-800 mb-1">AI推奨課題</div>
              <div className="text-sm text-red-700">基礎問題集 P.24-28</div>
              <div className="text-xs text-red-600 mt-1">2次関数の基礎を復習</div>
            </div>
            <button className="w-full bg-red-500 text-white py-2 rounded font-semibold text-sm cursor-default">
              課題自動配信
            </button>
          </div>
        </div>

        {/* 生徒2 */}
        <div className="bg-white rounded-lg border-2 border-blue-300 overflow-hidden">
          <div className="bg-blue-500 text-white px-4 py-2 text-sm font-bold">標準: 順調</div>
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                佐藤
              </div>
              <div>
                <div className="font-bold text-gray-900">佐藤 花子</div>
                <div className="text-xs text-gray-500">出席番号: 18</div>
              </div>
            </div>
            <div className="mb-3">
              <div className="text-xs text-gray-600 mb-1">理解度スコア</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '76%'}}></div>
                </div>
                <span className="text-sm font-bold text-blue-600">76%</span>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-3">
              <div className="text-xs font-bold text-blue-800 mb-1">AI推奨課題</div>
              <div className="text-sm text-blue-700">応用問題集 P.45-48</div>
              <div className="text-xs text-blue-600 mt-1">図形と計量の応用</div>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded font-semibold text-sm cursor-default">
              課題自動配信
            </button>
          </div>
        </div>

        {/* 生徒3 */}
        <div className="bg-white rounded-lg border-2 border-green-300 overflow-hidden">
          <div className="bg-green-500 text-white px-4 py-2 text-sm font-bold">上級: 優秀</div>
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                鈴木
              </div>
              <div>
                <div className="font-bold text-gray-900">鈴木 優子</div>
                <div className="text-xs text-gray-500">出席番号: 25</div>
              </div>
            </div>
            <div className="mb-3">
              <div className="text-xs text-gray-600 mb-1">理解度スコア</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '94%'}}></div>
                </div>
                <span className="text-sm font-bold text-green-600">94%</span>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded p-3 mb-3">
              <div className="text-xs font-bold text-green-800 mb-1">AI推奨課題</div>
              <div className="text-sm text-green-700">発展問題集 P.68-72</div>
              <div className="text-xs text-green-600 mt-1">入試レベル問題</div>
            </div>
            <button className="w-full bg-green-500 text-white py-2 rounded font-semibold text-sm cursor-default">
              課題自動配信
            </button>
          </div>
        </div>
      </div>

      {/* 今月の配信実績 */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-purple-700">842</div>
          <div className="text-sm text-purple-600 mt-1">AI自動配信課題数</div>
        </div>
        <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-indigo-700">85%</div>
          <div className="text-sm text-indigo-600 mt-1">課題提出率</div>
        </div>
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-blue-700">+12pt</div>
          <div className="text-sm text-blue-600 mt-1">平均点向上</div>
        </div>
      </div>
    </div>
  );

  // 物流 - 配送管理システムの画面（ルートトラッキング + リアルタイムステータス）
  const DeliveryScreen = () => (
    <div className="space-y-6">
      {/* リアルタイム配送状況 */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">リアルタイム配送トラッキング</div>
              <div className="text-orange-100 text-sm">全車両のGPS位置情報を自動更新・最適ルート提案</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 border border-white/30 text-center">
              <div className="text-2xl font-bold">12台</div>
              <div className="text-xs text-orange-100">配送中</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 border border-white/30 text-center">
              <div className="text-2xl font-bold">94%</div>
              <div className="text-xs text-orange-100">時間厳守率</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 border border-white/30 text-center">
              <div className="text-2xl font-bold">158</div>
              <div className="text-xs text-orange-100">本日配送数</div>
            </div>
          </div>
        </div>
      </div>

      {/* 配送車両リスト */}
      <div className="grid grid-cols-3 gap-4">
        {/* 車両1 */}
        <div className="bg-white rounded-lg border-2 border-green-300 overflow-hidden">
          <div className="bg-green-500 text-white px-4 py-3 flex items-center justify-between">
            <span className="font-bold">車両01 - 熊本1号</span>
            <span className="px-2 py-1 bg-white/20 rounded text-xs">配送中</span>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm text-gray-700">運転手: 山田 太郎</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-700">現在地: 熊本市中央区</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="text-sm text-gray-700">積荷: 8件/10件</span>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="bg-green-50 border border-green-200 rounded p-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-green-800">次の配送先</span>
                  <span className="text-xs text-green-600">3.2km先</span>
                </div>
                <div className="text-sm text-green-700 mt-1">熊本市東区健軍 | 到着予定: 14:30</div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">進捗</span>
                <span className="font-semibold text-green-600">80% (8/10)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
              </div>
            </div>
            <button className="w-full bg-green-500 text-white py-2 rounded font-semibold text-sm cursor-default">
              ルート詳細
            </button>
          </div>
        </div>

        {/* 車両2 */}
        <div className="bg-white rounded-lg border-2 border-blue-300 overflow-hidden">
          <div className="bg-blue-500 text-white px-4 py-3 flex items-center justify-between">
            <span className="font-bold">車両02 - 熊本2号</span>
            <span className="px-2 py-1 bg-white/20 rounded text-xs">配送中</span>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm text-gray-700">運転手: 佐藤 次郎</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-700">現在地: 菊陽町</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="text-sm text-gray-700">積荷: 5件/12件</span>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="bg-blue-50 border border-blue-200 rounded p-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-800">次の配送先</span>
                  <span className="text-xs text-blue-600">1.8km先</span>
                </div>
                <div className="text-sm text-blue-700 mt-1">菊陽町光の森 | 到着予定: 14:15</div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">進捗</span>
                <span className="font-semibold text-blue-600">42% (5/12)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '42%'}}></div>
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded font-semibold text-sm cursor-default">
              ルート詳細
            </button>
          </div>
        </div>

        {/* 車両3 */}
        <div className="bg-white rounded-lg border-2 border-orange-300 overflow-hidden">
          <div className="bg-orange-500 text-white px-4 py-3 flex items-center justify-between">
            <span className="font-bold">車両03 - 熊本3号</span>
            <span className="px-2 py-1 bg-white/20 rounded text-xs">遅延あり</span>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm text-gray-700">運転手: 田中 三郎</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-700">現在地: 益城町</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="text-sm text-gray-700">積荷: 3件/8件</span>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="bg-orange-50 border border-orange-300 rounded p-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-orange-800">次の配送先</span>
                  <span className="text-xs text-orange-600">5.4km先</span>
                </div>
                <div className="text-sm text-orange-700 mt-1">益城町惣領 | 到着予定: 15:30 (+20分)</div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">進捗</span>
                <span className="font-semibold text-orange-600">38% (3/8)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{width: '38%'}}></div>
              </div>
            </div>
            <button className="w-full bg-orange-500 text-white py-2 rounded font-semibold text-sm cursor-default">
              代替ルート提案
            </button>
          </div>
        </div>
      </div>

      {/* 本日の配送統計 */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-3xl font-bold text-green-600">124</div>
          <div className="text-sm text-gray-600 mt-1">完了</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-3xl font-bold text-blue-600">34</div>
          <div className="text-sm text-gray-600 mt-1">配送中</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-3xl font-bold text-orange-600">3</div>
          <div className="text-sm text-gray-600 mt-1">遅延</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-3xl font-bold text-gray-600">18</div>
          <div className="text-sm text-gray-600 mt-1">待機</div>
        </div>
      </div>
    </div>
  );

  // 不動産業 - AI物件管理システムの画面（物件カード + AIマッチング）
  const PropertyScreen = () => (
    <div className="space-y-6">
      {/* AIマッチングエンジン */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">AI物件マッチングシステム</div>
              <div className="text-pink-100 text-sm">顧客の希望条件から最適物件を自動提案</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 border border-white/30 text-center">
              <div className="text-2xl font-bold">48件</div>
              <div className="text-xs text-pink-100">マッチング成功</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 border border-white/30 text-center">
              <div className="text-2xl font-bold">89%</div>
              <div className="text-xs text-pink-100">マッチ精度</div>
            </div>
          </div>
        </div>
      </div>

      {/* 物件カード一覧 */}
      <div className="grid grid-cols-3 gap-4">
        {/* 物件1 */}
        <div className="bg-white rounded-lg border-2 border-red-300 overflow-hidden">
          <div className="relative h-48 bg-gradient-to-br from-red-100 to-pink-100">
            <div className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
              AIマッチ度: 95%
            </div>
            <div className="absolute bottom-3 left-3 right-3">
              <div className="bg-white/90 backdrop-blur rounded-lg p-3">
                <div className="font-bold text-gray-900 text-lg">ファミリー向けマンション</div>
                <div className="text-sm text-gray-600">熊本市中央区</div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="text-sm">
                <span className="text-gray-600">家賃:</span>
                <span className="font-bold text-gray-900 ml-1">¥120,000</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">間取り:</span>
                <span className="font-bold text-gray-900 ml-1">3LDK</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">面積:</span>
                <span className="font-bold text-gray-900 ml-1">75㎡</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">築年:</span>
                <span className="font-bold text-gray-900 ml-1">5年</span>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded p-3 mb-3">
              <div className="text-xs font-bold text-red-800 mb-1">顧客マッチング</div>
              <div className="text-sm text-red-700">山田様 (ファミリー3人)</div>
              <div className="text-xs text-red-600 mt-1">希望条件: 中央区・3LDK・駐車場2台</div>
            </div>
            <button className="w-full bg-red-500 text-white py-2 rounded font-semibold text-sm cursor-default">
              自動提案メール送信
            </button>
          </div>
        </div>

        {/* 物件2 */}
        <div className="bg-white rounded-lg border-2 border-blue-300 overflow-hidden">
          <div className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100">
            <div className="absolute top-3 right-3 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
              AIマッチ度: 82%
            </div>
            <div className="absolute bottom-3 left-3 right-3">
              <div className="bg-white/90 backdrop-blur rounded-lg p-3">
                <div className="font-bold text-gray-900 text-lg">駅近ワンルーム</div>
                <div className="text-sm text-gray-600">熊本市東区</div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="text-sm">
                <span className="text-gray-600">家賃:</span>
                <span className="font-bold text-gray-900 ml-1">¥48,000</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">間取り:</span>
                <span className="font-bold text-gray-900 ml-1">1K</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">面積:</span>
                <span className="font-bold text-gray-900 ml-1">25㎡</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">築年:</span>
                <span className="font-bold text-gray-900 ml-1">3年</span>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-3">
              <div className="text-xs font-bold text-blue-800 mb-1">顧客マッチング</div>
              <div className="text-sm text-blue-700">佐藤様 (単身・学生)</div>
              <div className="text-xs text-blue-600 mt-1">希望条件: 駅5分以内・1K・¥5万以下</div>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded font-semibold text-sm cursor-default">
              自動提案メール送信
            </button>
          </div>
        </div>

        {/* 物件3 */}
        <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
          <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="absolute top-3 right-3 px-3 py-1 bg-gray-500 text-white text-xs font-bold rounded-full">
              AIマッチ度: 65%
            </div>
            <div className="absolute bottom-3 left-3 right-3">
              <div className="bg-white/90 backdrop-blur rounded-lg p-3">
                <div className="font-bold text-gray-900 text-lg">広々2LDK</div>
                <div className="text-sm text-gray-600">菊陽町</div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="text-sm">
                <span className="text-gray-600">家賃:</span>
                <span className="font-bold text-gray-900 ml-1">¥68,000</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">間取り:</span>
                <span className="font-bold text-gray-900 ml-1">2LDK</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">面積:</span>
                <span className="font-bold text-gray-900 ml-1">60㎡</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">築年:</span>
                <span className="font-bold text-gray-900 ml-1">12年</span>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 mb-3">
              <div className="text-xs font-bold text-gray-800 mb-1">顧客マッチング</div>
              <div className="text-sm text-gray-700">鈴木様 (カップル)</div>
              <div className="text-xs text-gray-600 mt-1">希望条件: 郊外・2LDK・ペット可</div>
            </div>
            <button className="w-full bg-gray-400 text-white py-2 rounded font-semibold text-sm cursor-default">
              条件要確認
            </button>
          </div>
        </div>
      </div>

      {/* 今月の実績 */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-rose-50 border-2 border-rose-300 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-rose-700">42件</div>
          <div className="text-sm text-rose-600 mt-1">AI自動提案</div>
        </div>
        <div className="bg-pink-50 border-2 border-pink-300 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-pink-700">18件</div>
          <div className="text-sm text-pink-600 mt-1">内見予約</div>
        </div>
        <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-purple-700">12件</div>
          <div className="text-sm text-purple-600 mt-1">成約</div>
        </div>
        <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-indigo-700">28%</div>
          <div className="text-sm text-indigo-600 mt-1">成約率</div>
        </div>
      </div>
    </div>
  );

  // 製造業 - 生産管理システムの画面（生産ライン + リアルタイム進捗）
  const ProductionScreen = () => (
    <div className="space-y-6">
      {/* 生産ライン全体状況 */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-300 rounded-lg p-4">
          <div className="text-green-700 font-semibold text-sm mb-2">ライン稼働率</div>
          <div className="text-4xl font-bold text-green-900">92%</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-100 border-2 border-blue-300 rounded-lg p-4">
          <div className="text-blue-700 font-semibold text-sm mb-2">本日生産数</div>
          <div className="text-4xl font-bold text-blue-900">1,842</div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-amber-100 border-2 border-orange-300 rounded-lg p-4">
          <div className="text-orange-700 font-semibold text-sm mb-2">遅延ライン</div>
          <div className="text-4xl font-bold text-orange-900">1本</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-violet-100 border-2 border-purple-300 rounded-lg p-4">
          <div className="text-purple-700 font-semibold text-sm mb-2">不良品率</div>
          <div className="text-4xl font-bold text-purple-900">0.8%</div>
        </div>
      </div>

      {/* 生産ライン詳細 */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-slate-700 to-gray-800 text-white px-5 py-3 font-semibold">
          生産ライン - リアルタイム進捗
        </div>
        <div className="p-6 space-y-4">
          {/* ライン1 */}
          <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="font-bold text-gray-900 text-lg">ライン1 - 精密部品A</div>
                <div className="text-sm text-gray-600">担当: 山田班 | 目標: 500個/日</div>
              </div>
              <span className="px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full">順調</span>
            </div>
            <div className="grid grid-cols-5 gap-3 mb-3">
              <div className="bg-white border border-green-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">投入</div>
                <div className="text-2xl font-bold text-gray-900">520</div>
              </div>
              <div className="bg-white border border-green-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">加工中</div>
                <div className="text-2xl font-bold text-blue-600">142</div>
              </div>
              <div className="bg-white border border-green-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">完成</div>
                <div className="text-2xl font-bold text-green-600">485</div>
              </div>
              <div className="bg-white border border-green-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">不良</div>
                <div className="text-2xl font-bold text-red-600">3</div>
              </div>
              <div className="bg-white border border-green-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">達成率</div>
                <div className="text-2xl font-bold text-green-600">97%</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700 font-semibold">進捗:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{width: '97%'}}></div>
              </div>
              <span className="text-sm font-bold text-green-600">97%</span>
            </div>
          </div>

          {/* ライン2 */}
          <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="font-bold text-gray-900 text-lg">ライン2 - 電子基板B</div>
                <div className="text-sm text-gray-600">担当: 佐藤班 | 目標: 800個/日</div>
              </div>
              <span className="px-4 py-2 bg-blue-500 text-white text-sm font-bold rounded-full">稼働中</span>
            </div>
            <div className="grid grid-cols-5 gap-3 mb-3">
              <div className="bg-white border border-blue-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">投入</div>
                <div className="text-2xl font-bold text-gray-900">820</div>
              </div>
              <div className="bg-white border border-blue-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">加工中</div>
                <div className="text-2xl font-bold text-blue-600">238</div>
              </div>
              <div className="bg-white border border-blue-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">完成</div>
                <div className="text-2xl font-bold text-green-600">672</div>
              </div>
              <div className="bg-white border border-blue-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">不良</div>
                <div className="text-2xl font-bold text-red-600">6</div>
              </div>
              <div className="bg-white border border-blue-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">達成率</div>
                <div className="text-2xl font-bold text-blue-600">84%</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700 font-semibold">進捗:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{width: '84%'}}></div>
              </div>
              <span className="text-sm font-bold text-blue-600">84%</span>
            </div>
          </div>

          {/* ライン3 */}
          <div className="border-2 border-orange-300 rounded-lg p-4 bg-orange-50">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="font-bold text-gray-900 text-lg">ライン3 - 組立品C</div>
                <div className="text-sm text-gray-600">担当: 田中班 | 目標: 300個/日</div>
              </div>
              <span className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full">遅延</span>
            </div>
            <div className="grid grid-cols-5 gap-3 mb-3">
              <div className="bg-white border border-orange-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">投入</div>
                <div className="text-2xl font-bold text-gray-900">320</div>
              </div>
              <div className="bg-white border border-orange-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">加工中</div>
                <div className="text-2xl font-bold text-blue-600">88</div>
              </div>
              <div className="bg-white border border-orange-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">完成</div>
                <div className="text-2xl font-bold text-green-600">185</div>
              </div>
              <div className="bg-white border border-orange-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">不良</div>
                <div className="text-2xl font-bold text-red-600">12</div>
              </div>
              <div className="bg-white border border-orange-200 rounded p-2 text-center">
                <div className="text-xs text-gray-600">達成率</div>
                <div className="text-2xl font-bold text-orange-600">62%</div>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm text-gray-700 font-semibold">進捗:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-orange-500 h-3 rounded-full" style={{width: '62%'}}></div>
              </div>
              <span className="text-sm font-bold text-orange-600">62%</span>
            </div>
            <div className="bg-orange-100 border border-orange-300 rounded p-2">
              <div className="text-sm text-orange-800 font-semibold">アラート: 設備故障により2時間遅延</div>
            </div>
          </div>
        </div>
      </div>

      {/* 今月の統計 */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-3xl font-bold text-green-600">38,420</div>
          <div className="text-sm text-gray-600 mt-1">今月生産数</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-3xl font-bold text-blue-600">96.2%</div>
          <div className="text-sm text-gray-600 mt-1">平均稼働率</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-3xl font-bold text-red-600">0.9%</div>
          <div className="text-sm text-gray-600 mt-1">平均不良率</div>
        </div>
      </div>
    </div>
  );

  const getScreenComponent = () => {
    switch (type) {
      case 'inventory':
        return <InventoryScreen />;
      case 'construction':
        return <ConstructionScreen />;
      case 'reservation':
        return <ReservationScreen />;
      case 'sales':
        return <SalesScreen />;
      case 'safety':
        return <SafetyScreen />;
      case 'ingredient':
        return <IngredientScreen />;
      case 'customer':
        return <CustomerScreen />;
      case 'patient':
        return <PatientScreen />;
      case 'course':
        return <CourseScreen />;
      case 'delivery':
        return <DeliveryScreen />;
      case 'property':
        return <PropertyScreen />;
      case 'production':
        return <ProductionScreen />;
      default:
        return <InventoryScreen />;
    }
  };

  return (
    <div className="my-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
      {/* ヘッダー */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">
            {title || 'システム管理画面'}
          </h3>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
              稼働中
            </span>
            <span className="text-sm text-gray-500">最終更新: 2分前</span>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      {getScreenComponent()}
    </div>
  );
}
