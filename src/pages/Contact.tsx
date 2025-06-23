import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Car, Calendar } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
    visitDate: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 處理表單提交
    console.log('表單數據:', formData)
    // 這裡可以添加實際的提交邏輯
    alert('感謝您的留言！我們會盡快與您聯繫。')
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            聯繫我們
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            歡迎聯繫雲霧嘉寶果莊園，我們期待與您分享這份來自自然的珍貴饋贈，
            也歡迎您親自來莊園體驗田園生活的美好
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                聯繫資訊
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">莊園地址</h3>
                    <p className="text-gray-600">
                      廣東省廣州市從化區溫泉大道新園街99號<br />
                      雲霧嘉寶果莊園<br />
                      <span className="text-sm text-purple-600">
                        （具體地址請聯繫我們獲取，方便為您提供導航指引）
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">聯繫電話</h3>
                    <p className="text-gray-600">
                      莊主手機：<span className="font-semibold">+86-13352801111</span><br />
                      <span className="text-sm text-green-600">
                        營業時間內隨時為您服務
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Wechat</h3>
                    <p className="text-gray-600">
                    Dream2016136<br />
                      <span className="text-sm text-purple-600">
                      歡迎加入莊主好友
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">營業時間</h3>
                    <p className="text-gray-600">
                      週一至週日：9:00 - 18:00<br />
                      莊園探訪：需提前預約<br />
                      <span className="text-sm text-green-600">
                        節假日照常營業，歡迎來訪
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">關注我們</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-red-600 text-sm font-bold">小</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">小紅書</p>
                    <p className="text-xs text-gray-600">@雲霧嘉寶果莊園</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 text-sm font-bold">微</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">微信</p>
                    <p className="text-xs text-gray-600">掃碼添加莊主</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-purple-50 to-green-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                聯繫表單
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="請輸入您的姓名"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      聯繫電話 *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="請輸入您的電話號碼"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    電子郵箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="請輸入您的郵箱地址"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    感興趣的產品/服務
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  >
                    <option value="">請選擇</option>
                    <option value="wine">嘉寶果酒</option>
                    <option value="fresh-fruit">新鮮嘉寶果</option>
                    <option value="jam">嘉寶果果醬</option>
                    <option value="visit">莊園探訪</option>
                    <option value="wholesale">批發合作</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700 mb-2">
                    期望探訪日期
                  </label>
                  <input
                    type="date"
                    id="visitDate"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    留言內容
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                    placeholder="請告訴我們您的需求或想法..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-green-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  提交留言
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              莊園探訪指南
            </h2>
            <p className="text-xl text-gray-600">
              歡迎親自來到雲霧嘉寶果莊園，體驗田園生活的美好
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">預約參觀</h3>
              <p className="text-gray-600 mb-6">
                為了給您提供更好的服務，
                請提前1-2天預約參觀時間，
                我們會安排專人為您介紹莊園
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-purple-700 text-sm font-medium">
                  建議參觀時間：2-3小時
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">交通指引</h3>
              <p className="text-gray-600 mb-6">
                莊園位於廣州從化區，
                建議自駕前往，我們提供免費停車位。
                也可搭乘地鐵到從化客運站轉乘接駁車
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-green-700 text-sm font-medium">
                  從廣州市區車程約1.5小時
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">特色體驗</h3>
              <p className="text-gray-600 mb-6">
                參觀嘉寶果園、了解自然農法、
                品嚐新鮮果實、嘉寶果酒品鑑、
                與莊主交流種植心得
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-purple-700 text-sm font-medium">
                  季節性採摘體驗（4-5月）
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              溫馨提示
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">建議穿著舒適的休閒服裝和運動鞋</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">莊園內提供遮陽帽和防蚊水</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">歡迎攜帶相機記錄美好時光</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">莊園內備有簡單茶點和飲用水</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">可預訂農家午餐（需提前告知）</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">參觀免費，產品品嚐和採摘另計</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            購買渠道
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            多種便捷的購買方式，讓您輕鬆品嚐到雲霧嘉寶果的美味
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="font-bold text-purple-900 mb-2">莊園直銷</h3>
              <p className="text-purple-700 text-sm">
                直接聯繫莊園購買，
                享受最優惠的價格
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <h3 className="font-bold text-green-900 mb-2">線上商城</h3>
              <p className="text-green-700 text-sm">
                即將開通官方商城，
                敬請期待
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="font-bold text-purple-900 mb-2">合作商店</h3>
              <p className="text-purple-700 text-sm">
                精選零售合作夥伴，
                就近購買
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <h3 className="font-bold text-green-900 mb-2">定制服務</h3>
              <p className="text-green-700 text-sm">
                企業團購、禮品定制
                等特殊需求
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
