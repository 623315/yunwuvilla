import { Mic, Heart, Grape, TreePine, Star, Clock } from 'lucide-react'

const OwnerStory = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            莊主故事
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            從話筒前的聲音傳播者，到土地上的生命培育者，
            不變的是對美好的追求和分享
          </p>
        </div>
      </section>

      {/* Owner Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8">
                <img
                  src="/images/host-woman.jpg"
                  alt="莊園主"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white rounded-xl p-4 shadow-lg">
                <Mic className="h-6 w-6 mb-2" />
                <p className="text-sm font-semibold">前廣播主持人</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                從聲音到土地的守護者
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                我是雲霧嘉寶果莊園的主人，小鶴。
                多年來在話筒前傳遞聲音、分享故事的經歷，
                讓我深深理解真誠溝通和品質分享的重要性。
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">我的信念</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">用心傳遞每一份美好</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">品質源於對細節的堅持</span>
                  </div>
                  <div className="flex items-center">
                    <Grape className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">自然農法是對土地的敬畏</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              我的人生軌跡
            </h2>
            <p className="text-xl text-gray-600">
              從媒體人到莊園主的轉變之路
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-300 to-green-300 rounded-full"></div>

            <div className="space-y-16">
              {/* Broadcasting Career */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <Mic className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">廣播生涯</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      多年來在廣播台擔任主持人，用聲音連接聽眾，
                      分享生活的美好和智慧。這段經歷讓我學會了如何用真誠的心與人溝通，
                      也培養了我對品質和真實的執著追求。
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center z-10 mx-auto md:mx-0">
                  <span className="text-purple-700 font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              {/* Discovery */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center z-10 mx-auto md:mx-0">
                  <span className="text-green-700 font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <Heart className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">尋覓與回歸</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      隨著年齡的增長，我開始思考生活的本質，
                      渴望一種更貼近自然、更有意義的生活方式。
                      一個偶然的機會，讓我決定離開都市的喧囂，回歸土地的懷抱。
                    </p>
                  </div>
                </div>
              </div>

              {/* Meeting Jaboticaba */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <Grape className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">結緣嘉寶果</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      第一次見到嘉寶果樹時，我被它獨特的"干生果"現象深深震撼。
                      果實直接從樹干上長出，如同一顆顆紫色寶石，
                      這種神奇的景象讓我瞬間愛上了這種珍貴的水果。
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center z-10 mx-auto md:mx-0">
                  <span className="text-purple-700 font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              {/* Farm Establishment */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center z-10 mx-auto md:mx-0">
                  <span className="text-green-700 font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <TreePine className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">雲霧莊園誕生</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      我選擇了廣州從化這片好山好水的土地，
                      創建了雲霧嘉寶果莊園。"雲霧"之名，
                      既描述了這裡的自然景觀，也象徵著我心中的田園夢想。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              我的莊園哲學
            </h2>
            <p className="text-xl text-gray-600">
              從廣播台到果園，不變的是對品質的堅持
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-purple-900">從聲音到味覺的傳遞</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  在廣播台工作時，我用聲音傳遞情感和故事；
                  如今在莊園裡，我用嘉寶果和果酒傳遞自然的美好。
                  雖然媒介不同，但初心未變 - 
                  都是為了與人分享生活中最珍貴的東西。
                </p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">用時間成就品質</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">用真誠連接心靈</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">用專業創造價值</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-900">與自然和諧共生</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  選擇自然農法，不僅是對環境的保護，
                  更是對生命的尊重。我相信，
                  只有與自然和諧共生，才能獲得最純淨、最珍貴的果實。
                  這種理念，正如我在廣播中追求的真實和自然。
                </p>

                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">我的承諾</h4>
                  <p className="text-gray-600 text-sm">
                    "每一瓶嘉寶果酒，都承載著我對品質的承諾。
                    就像當年在話筒前的每一個字，都經過深思熟慮一樣，
                    莊園裡的每一個細節，都凝聚著我的用心和堅持。"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              與朋友分享的美好時光
            </h2>
            <p className="text-xl text-gray-600">
              莊園不僅是我的事業，更是與朋友分享生活美好的地方
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">莊園聚會</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  週末時光，我最喜歡邀請朋友們來到莊園，
                  在嘉寶果樹下品酒聊天，分享彼此的生活故事。
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-purple-700 text-sm font-medium">
                    "在這裡，時間變得緩慢而美好，
                    每一杯酒都是我們友誼的見證。"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">品酒時光</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  作為前主持人，我擅長用語言描述嘉寶果酒的獨特風味，
                  每次品鑑都是一次美妙的感官之旅。
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-green-700 text-sm font-medium">
                    "當酒液在口中綻放時，我彷彿又回到了話筒前，
                    用心描述著每一個細膩的感受。"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery Placeholder */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              莊園生活剪影
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden relative group">
                <img 
                  src="/images/wine-friends-toast.jpg" 
                  alt="與朋友品酒時光" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white text-sm font-medium text-center">與朋友<br />品酒時光</p>
                </div>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden relative group">
                <img 
                  src="/images/vineyard-landscape.jpg" 
                  alt="莊園日常管理" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white text-sm font-medium text-center">莊園<br />日常管理</p>
                </div>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden relative group">
                <img 
                  src="/images/jaboticaba-fruit.jpg" 
                  alt="採摘嘉寶果" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white text-sm font-medium text-center">採摘<br />嘉寶果</p>
                </div>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden relative group">
                <img 
                  src="/images/jaboticaba-wine.jpeg" 
                  alt="釀酒過程" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white text-sm font-medium text-center">釀酒<br />過程</p>
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
            歡迎來到我的莊園
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            每一次相遇都是緣分，每一瓶酒都是我們友誼的見證。
            期待與您分享這份來自雲霧深處的美好。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-900 hover:bg-purple-50 rounded-full text-lg font-medium transition-colors"
            >
              預約探訪莊園
            </a>
            <a
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 rounded-full text-lg font-medium transition-colors"
            >
              品嚐我的作品
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OwnerStory
