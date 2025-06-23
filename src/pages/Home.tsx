import { Link } from 'react-router-dom'
import { ArrowRight, Grape, Heart, Leaf, Award } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-green-800/80 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/organic-farm.jpg')`,
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            雲霧嘉寶果莊園
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            時間，在此放慢腳步，只為釀一瓶好酒
          </p>
          <p className="text-lg md:text-xl mb-12 text-purple-100">
            在廣州從化的雲霧深處，用自然農法種植珍貴的嘉寶果，
            <br />
            與您分享大自然最純粹的饋贈
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-medium transition-colors"
            >
              探索產品
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 rounded-full text-lg font-medium transition-colors"
            >
              了解莊園
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-12">
            <img
              src="/images/host-woman.jpg"
              alt="莊園主"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              莊主的話
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                親愛的朋友，歡迎來到雲霧嘉寶果莊園。作為一位曾經在話筒前傳遞聲音的廣播主持人，
                如今我選擇在這片土地上培育生命，用同樣的真誠與熱情，與您分享自然的美好。
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                在這200畝的莊園裡，100多畝的嘉寶果樹在自然農法的呵護下茁壯成長。
                我們不使用農藥、不施化肥，只用時間和耐心，讓每一顆果實都擁有最純粹的味道。
              </p>
              <div className="flex items-center justify-center text-purple-600 font-semibold">
                <Heart className="h-5 w-5 mr-2" />
                <span>用心種植，真誠分享</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              明星產品
            </h2>
            <p className="text-xl text-gray-600">
              雲霧深處的珍貴饋贈
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-900">
                雲霧·醇釀嘉寶果酒
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Grape className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">獨特風味</h4>
                    <p className="text-gray-600">
                      融合山竹、釋迦、番石榴等多種熱帶水果香氣，口感甜美順滑，餘味悠長
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Leaf className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">自然發酵</h4>
                    <p className="text-gray-600">
                      採用天然酵母菌群進行發酵，經過長時間陳釀，風味層次豐富醇厚
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">珍貴原料</h4>
                    <p className="text-gray-600">
                      選用自然農法種植的完全成熟嘉寶果，富含花青素等珍貴營養成分
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors"
              >
                了解更多
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8">
                <img
                  src="/images/jaboticaba-wine.jpeg"
                  alt="嘉寶果酒"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jaboticaba Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8">
                <img
                  src="/images/jaboticaba-fruit.jpg"
                  alt="嘉寶果"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                神奇的"樹葡萄"
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                嘉寶果，又稱樹葡萄，是一種極其珍貴的熱帶水果。
                最神奇的是它的果實直接從樹幹和主枝上長出，
                成熟時呈現迷人的深紫色，猶如一顆顆黑寶石掛滿枝幹。
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">花青素豐富</h4>
                  <p className="text-sm text-purple-700">強效抗氧化，延緩衰老</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">營養密度高</h4>
                  <p className="text-sm text-green-700">維生素C、礦物質豐富</p>
                </div>
              </div>

              <Link
                to="/knowledge"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-colors"
              >
                探索知識
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Farming */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            自然農法
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            與自然共生，培育純淨果實
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">無農藥種植</h3>
              <p className="text-gray-600">
                不使用任何化學農藥，依靠生態系統的自我調節能力，
                讓果實保持最純淨的品質
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">土壤培育</h3>
              <p className="text-gray-600">
                通過綠肥作物覆蓋，模擬原始森林環境，
                持續培養健康、充滿活力的土壤生態
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">生態和諧</h3>
              <p className="text-gray-600">
                創造生物多樣性的果園環境，益蟲益鳥繁衍，
                形成良性循環的自然生態系統
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-green-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            品味雲霧深處的珍貴饋贈
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            每一滴嘉寶果酒，都承載著我們對品質的堅持和對自然的敬畏
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-900 hover:bg-purple-50 rounded-full text-lg font-medium transition-colors"
            >
              立即聯繫
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/owner-story"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 rounded-full text-lg font-medium transition-colors"
            >
              莊主故事
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
