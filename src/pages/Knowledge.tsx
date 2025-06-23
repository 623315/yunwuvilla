import { Grape, Heart, Shield, Eye, Brain, Star } from 'lucide-react'

const Knowledge = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            嘉寶果知識百科
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            探索神奇的"樹葡萄"，了解這種珍貴水果的營養價值、
            健康功效以及它獨特的生長特性
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                神奇的"樹葡萄"
              </h2>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-bold text-purple-900 mb-2">學名</h3>
                  <p className="text-purple-700"><em>Plinia cauliflora</em>（桃金娘科）</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-bold text-green-900 mb-2">別名</h3>
                  <p className="text-green-700">樹葡萄、木葡萄、珍寶果</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-bold text-purple-900 mb-2">原產地</h3>
                  <p className="text-purple-700">南美洲巴西米納斯吉拉斯州</p>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                嘉寶果最神奇的特征是它的"干生果"現象 - 
                花朵和果實直接從樹干和主枝上長出，成熟時呈現深紫色，
                如同一顆顆黑寶石掛滿枝干，這種奇特的景象在植物界極為罕見。
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8">
                <img
                  src="/images/jaboticaba-fruit.jpg"
                  alt="嘉寶果樹"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white rounded-xl p-4 shadow-lg">
                <Star className="h-6 w-6 mb-2" />
                <p className="text-sm font-semibold">珍稀水果</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutritional Value */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              營養價值寶庫
            </h2>
            <p className="text-xl text-gray-600">
              被譽為"蔓藤上的黑寶石"，富含珍貴營養成分
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Grape className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">花青素</h3>
              <p className="text-gray-600 text-sm">
                含量極高的天然抗氧化劑，
                主要存在於果皮中，
                賦予果實深紫色
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">酚類化合物</h3>
              <p className="text-gray-600 text-sm">
                包括類黃酮、單寧、酚酸等，
                具有強大的抗炎、
                抗氧化生理活性
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">維生素群</h3>
              <p className="text-gray-600 text-sm">
                富含維生素C、維生素B群，
                提供豐富的營養支持，
                增強免疫力
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">礦物質</h3>
              <p className="text-gray-600 text-sm">
                豐富的鈣、鎂、鐵、鉀等
                礦物質，維持身體
                正常生理功能
              </p>
            </div>
          </div>

          {/* Detailed Nutrition Facts */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              營養成分詳解
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-purple-900">核心營養成分</h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-semibold text-gray-900">花青素</span>
                    <span className="text-purple-600 font-bold">極高含量</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-900">維生素C</span>
                    <span className="text-green-600 font-bold">豐富</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-semibold text-gray-900">膳食纖維</span>
                    <span className="text-purple-600 font-bold">高含量</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-900">多酚類</span>
                    <span className="text-green-600 font-bold">豐富</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-green-900">營養密度對比</h4>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">抗氧化能力</span>
                      <span className="text-purple-600 font-semibold">比藍莓高2-3倍</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">維生素C</span>
                      <span className="text-green-600 font-semibold">比柑橘高30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">花青素</span>
                      <span className="text-purple-600 font-semibold">比葡萄高5倍</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              科學驗證的健康功效
            </h2>
            <p className="text-xl text-gray-600">
              基於科學研究的健康益處，為您的健康保駕護航
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">強效抗氧化</h3>
              <p className="text-gray-600 mb-4">
                豐富的花青素和多酚類化合物，具有出色的抗氧化能力，
                能有效對抗自由基，延緩細胞衰老。
              </p>
              <div className="text-sm text-purple-700 font-semibold">
                抗氧化能力比維生素E高50倍
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">心血管健康</h3>
              <p className="text-gray-600 mb-4">
                抗氧化和抗炎特性，結合豐富的鉀元素，
                有助於維持心血管健康，調節血壓。
              </p>
              <div className="text-sm text-green-700 font-semibold">
                降低心血管疾病風險30%
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">保護視力</h3>
              <p className="text-gray-600 mb-4">
                花青素對眼部微血管有特殊保護作用，
                能夠改善視力疲勞，預防眼部疾病。
              </p>
              <div className="text-sm text-purple-700 font-semibold">
                改善夜間視力和眼部疲勞
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">抗炎作用</h3>
              <p className="text-gray-600 mb-4">
                研究表明，嘉寶果提取物能顯著抑制炎症反應，
                對預防慢性炎症疾病有積極作用。
              </p>
              <div className="text-sm text-green-700 font-semibold">
                抗炎效果顯著，緩解慢性炎症
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">腸道健康</h3>
              <p className="text-gray-600 mb-4">
                豐富的膳食纖維促進益生菌生長，
                改善腸道微生態平衡，增強消化功能。
              </p>
              <div className="text-sm text-purple-700 font-semibold">
                促進腸道健康，提升免疫力
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">血糖調節</h3>
              <p className="text-gray-600 mb-4">
                初步研究顯示，嘉寶果中的某些化合物
                可能對調節血糖有積極作用。
              </p>
              <div className="text-sm text-green-700 font-semibold">
                輔助血糖管理，預防糖尿病
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growing Characteristics */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              生長特性
            </h2>
            <p className="text-xl text-gray-600">
              了解嘉寶果的獨特生長習性
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                獨特的生長特性
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-purple-900 mb-2">干生果現象</h4>
                  <p className="text-gray-600">
                    花朵和果實直接從樹干和主枝上長出，
                    這種現象在植物界極為罕見，稱為"cauliflory"
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-green-900 mb-2">生長緩慢</h4>
                  <p className="text-gray-600">
                    從種子到結果需要數年時間，
                    正因如此，每一顆果實都顯得格外珍貴
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-purple-900 mb-2">常綠喬木</h4>
                  <p className="text-gray-600">
                    樹形優美，枝葉濃密，可高達10-15米，
                    既可觀果又可觀賞
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  適宜的生長條件
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                    <span className="font-semibold text-gray-900">氣候</span>
                    <span className="text-purple-600">溫暖濕潤的亞熱帶</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-900">光照</span>
                    <span className="text-green-600">充足陽光</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                    <span className="font-semibold text-gray-900">土壤</span>
                    <span className="text-purple-600">微酸性、排水良好</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-900">水分</span>
                    <span className="text-green-600">穩定供應，避免積水</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-green-100 rounded-lg">
                  <p className="text-center text-gray-700 font-semibold">
                    廣州從化的氣候條件非常適合嘉寶果生長
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-green-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            品嚐珍貴的營養寶庫
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            每一顆嘉寶果都是大自然精心孕育的營養寶庫，
            富含珍貴的抗氧化成分，為您的健康加分
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-900 hover:bg-purple-50 rounded-full text-lg font-medium transition-colors"
            >
              探索產品
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 rounded-full text-lg font-medium transition-colors"
            >
              聯繫我們
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Knowledge
