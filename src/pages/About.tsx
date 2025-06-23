import { MapPin, Users, Leaf, Award, Heart, TreePine } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            關於雲霧嘉寶果莊園
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            在廣州從化的雲霧山間，我們用自然農法的智慧，
            培育著這片珍貴的嘉寶果園，與自然和諧共生
          </p>
        </div>
      </section>

      {/* Location & Scale */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                地理位置與規模
              </h2>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">廣州從化</h3>
                  <p className="text-gray-600">
                    坐落於廣州從化雲霧繚繞的山區，這裡氣候溫和濕潤，
                    四季如春，是嘉寶果生長的理想環境。從化素有"廣州後花園"之稱，
                    山清水秀，空氣清新，為我們的果園提供了得天獨厚的自然條件。
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-900">200畝</div>
                    <p className="text-gray-600">莊園總面積</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-900">100+畝</div>
                    <p className="text-gray-600">嘉寶果種植面積</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8">
                <img
                  src="/images/organic-farm.jpg"
                  alt="莊園景色"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Farming Philosophy */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              自然農法理念
            </h2>
            <p className="text-xl text-gray-600">
              遵循"無為而治"的智慧，與自然和諧共生
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">無農藥</h3>
              <p className="text-gray-600">
                不使用任何化學農藥，依靠天然的生態平衡來防治病蟲害，
                讓每一顆果實都保持最純淨的品質
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TreePine className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">無化肥</h3>
              <p className="text-gray-600">
                拒絕化學肥料，通過有機堆肥和綠肥作物來培養土壤，
                讓果樹在最自然的環境中茁壯成長
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">無除草劑</h3>
              <p className="text-gray-600">
                採用人工除草和生物覆蓋的方式管理雜草，
                維護土壤生態系統的完整性和生物多樣性
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              土壤是生命之本
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  我們深信，健康的土壤是產出優質果實的基礎。
                  通過覆蓋豆科、禾本科等綠肥作物，我們模擬原始森林的地表環境，
                  不僅能防止水土流失、抑制雜草，更重要的是通過植物的自然固氮和腐解過程，
                  持續不斷地培肥地力。
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    <p className="text-gray-600">豐富的有機質含量，提供充足的營養</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    <p className="text-gray-600">良好的土壤結構，促進根系發育</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    <p className="text-gray-600">豐富的微生物群落，增強植物抗病能力</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-purple-100 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">生態循環</h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs mr-3">1</span>
                    綠肥作物覆蓋土壤
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs mr-3">2</span>
                    植物殘體自然腐解
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs mr-3">3</span>
                    土壤有機質增加
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs mr-3">4</span>
                    嘉寶果品質提升
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecological Harmony */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              生態和諧
            </h2>
            <p className="text-xl text-gray-600">
              創造生物多樣性的果園環境
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                完整的生態系統
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                在我們的果園裡，您可以看到各種鳥類在樹枝間飛舞，
                益蟲在花叢中穿梭，蚯蚓在土壤中辛勤工作。
                這不僅僅是一個果園，更是一個完整的生態系統。
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <Users className="h-6 w-6 text-green-600 mb-2" />
                  <h4 className="font-semibold text-green-900 mb-1">益蟲繁衍</h4>
                  <p className="text-sm text-green-700">天敵昆蟲自然控制害蟲</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <Award className="h-6 w-6 text-purple-600 mb-2" />
                  <h4 className="font-semibold text-purple-900 mb-1">鳥類棲息</h4>
                  <p className="text-sm text-purple-700">鳥類幫助控制蟲害和傳播種子</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-purple-100 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">良性循環的形成</h4>
                <p className="text-gray-600 text-sm">
                  通過生物多樣性的建立，我們的果園形成了一個自我調節的生態系統。
                  病蟲害得到自然抑制，土壤健康不斷改善，
                  嘉寶果的品質也因此得到了最大程度的保證。
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  生態效益
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white rounded-lg p-4">
                    <span className="text-gray-700">水土保持</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white rounded-lg p-4">
                    <span className="text-gray-700">生物多樣性</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white rounded-lg p-4">
                    <span className="text-gray-700">土壤健康</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white rounded-lg p-4">
                    <span className="text-gray-700">碳足跡減少</span>
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
                      ))}
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-green-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            我們的願景與使命
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Heart className="h-12 w-12 text-purple-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">願景</h3>
              <p className="text-purple-100 leading-relaxed">
                成為中國優質嘉寶果及其製品的領導品牌，
                讓更多人了解和品嚐到這種珍貴水果的獨特魅力，
                同時推廣自然農法的可持續發展理念。
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Award className="h-12 w-12 text-green-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">使命</h3>
              <p className="text-green-100 leading-relaxed">
                以最自然的方式種植最優質的嘉寶果，
                用心釀造每一瓶嘉寶果酒，
                將健康、自然、品質的生活理念傳遞給每一位消費者。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
