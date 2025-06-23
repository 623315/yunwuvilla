import { Mail, Phone, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">雲霧嘉寶果莊園</h3>
            <p className="text-purple-100 mb-4">
              在廣州從化的雲霧深處，我們用自然農法種植珍貴的嘉寶果，
              釀造出獨特的嘉寶果酒，與您分享大自然的珍貴饋贈。
            </p>
            <div className="flex items-center text-purple-200">
              <Heart className="h-4 w-4 mr-2" />
              <span>用心種植，真誠分享</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速導航</h4>
            <ul className="space-y-2">
              <li><a href="/products" className="text-purple-200 hover:text-white transition-colors">產品展示</a></li>
              <li><a href="/knowledge" className="text-purple-200 hover:text-white transition-colors">嘉寶果知識</a></li>
              <li><a href="/owner-story" className="text-purple-200 hover:text-white transition-colors">莊主故事</a></li>
              <li><a href="/about" className="text-purple-200 hover:text-white transition-colors">莊園介紹</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">聯繫資訊</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-purple-300" />
                <span className="text-purple-200">廣州市從化區溫泉大道新園街99號</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-purple-300" />
                <span className="text-purple-200">聯繫電話 13352801111</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-purple-300" />
                <span className="text-purple-200">Wechat: Dream2016136</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-8 text-center">
          <p className="text-purple-200">
            © 2025 雲霧嘉寶果莊園 版權所有 | yunwuvilla.com
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
