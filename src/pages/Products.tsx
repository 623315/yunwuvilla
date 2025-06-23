import { Grape, Award, Heart, Thermometer, Clock, Star } from 'lucide-react'

const Products = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            我們的產品
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            每一款產品都承載著我們對品質的執著追求，
            從果園到您的餐桌，我們用心呵護每一個細節
          </p>
        </div>
      </section>

      {/* Main Product - Wine */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8">
                <img
                  src="/images/jaboticaba-wine.jpeg"
                  alt="雲霧·醇釀嘉寶果酒"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="text-yellow-600 font-semibold">旗艦產品</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900">
                雲霧·醇釀嘉寶果酒
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                採用莊園內自然農法種植的完全成熟嘉寶果，經過精心挑選，
                運用傳統發酵工藝與現代釀造技術相結合，呈現出獨特的風味層次。
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">風味特色</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Grape className="h-6 w-6 text-purple-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">香氣</p>
                    <p className="text-xs text-gray-600">熱帶水果複合香氣</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">口感</p>
                    <p className="text-xs text-gray-600">甜美順滑，餘味悠長</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wine Details */}
          <div className="bg-gradient-to-br from-purple-50 to-green-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">釀造工藝</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-purple-900">自然發酵系列</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Grape className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900">原料選擇</h5>
                      <p className="text-sm text-gray-600">手工採摘完全成熟的嘉寶果，確保每顆果實品質</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900">天然發酵</h5>
                      <p className="text-sm text-gray-600">依賴果皮天然酵母菌群，發酵過程緩慢而充分</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900">風土表達</h5>
                      <p className="text-sm text-gray-600">最能體現從化雲霧山區的獨特風土特色</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-green-900">控溫發酵系列</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Thermometer className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900">精選酵母</h5>
                      <p className="text-sm text-gray-600">使用適合水果酒的商業酵母，品質穩定</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900">恆溫發酵</h5>
                      <p className="text-sm text-gray-600">恆溫環境下發酵，確保風味純淨一致</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Heart className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900">果香怡人</h5>
                      <p className="text-sm text-gray-600">突出嘉寶果天然果香，口感清新順滑</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              其他精選產品
            </h2>
            <p className="text-xl text-gray-600">
              從鮮果到果醬，每一款都是自然的饋贈
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fresh Fruit */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="p-6">
                <img
                  src="/images/jaboticaba-fruit.jpg"
                  alt="新鮮嘉寶果"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  新鮮嘉寶果
                </h3>
                <p className="text-gray-600 mb-6">
                  樹上成熟，當日採摘，讓您品嚐到最新鮮、風味最佳的嘉寶果。
                  每一顆都飽含豐富的花青素和維生素，是大自然珍貴的營養寶庫。
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">樹上成熟，當日採摘</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">富含花青素和維生素C</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">冷鏈配送，保持新鮮</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Jam */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="p-6">
                <img
                  src="/images/wine-glass.jpg"
                  alt="嘉寶果果醬"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  手工嘉寶果醬
                </h3>
                <p className="text-gray-600 mb-6">
                  採用傳統工藝手工熬製，不添加過多糖分和人工添加劑，
                  完整保留嘉寶果的天然風味和豐富營養，是早餐和下午茶的完美伴侶。
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">傳統工藝手工熬製</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">不添加人工添加劑</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">保留天然風味和營養</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Tasting Notes */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              品鑑指南
            </h2>
            <p className="text-xl text-gray-600">
              如何品味嘉寶果酒的獨特魅力
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">觀色</h3>
                <p className="text-gray-600">
                  酒體呈現迷人的寶石紅色或深紫紅色，
                  澄清透亮，散發著誘人的光澤
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">👃</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">聞香</h3>
                <p className="text-gray-600">
                  複合香氣層次豐富，可聞到山竹、釋迦、
                  番石榴、荔枝等多種熱帶水果的芬芳
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">👅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">品味</h3>
                <p className="text-gray-600">
                  入口甜美順滑，酸甜平衡，
                  餘味悠長，果香在口中久久不散
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">最佳品鑑溫度</h4>
              <p className="text-gray-600 mb-6">
                建議在12-16°C下品鑑，可充分展現其優雅的香氣和豐富的口感層次
              </p>
              
              <div className="inline-flex items-center px-6 py-3 bg-purple-100 rounded-full">
                <Thermometer className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-purple-900 font-semibold">12-16°C</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
