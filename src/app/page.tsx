import Image from "next/image";
import Card from "@/components/Card";
import Button from "@/components/Button";
import meta from "@/setting/meta";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 items-start">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Profile Content */}
            <div className="space-y-8 animate-slide-in">
              {/* Profile Header */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-2 animate-pulse-custom"></div>
                  <span className="text-sm font-medium text-gray-700">Available for work</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                  ハチミツ勉強ブログ
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  DEVELOPER
                </p>
                <p className="text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  個人でのシステム開発やAIコーディングを行っています。
                </p>
              </div>
              
              {/* Services Cards */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center lg:text-left mb-6">
                できること
              </h2>
                
                <div className="grid gap-4">
                  <Card
                    title="個人へのご依頼はこちら(作成中)"
                    description="ホームページ作成・公式LINE作成・イベントスタッフ・各種ゲームサーバーやコミュニティ運営などのご相談はこちらから"
                    href="/biz-inquiry"
                    icon={
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    }
                  />
                  
                  <Card
                    title="IT業界向けスキル紹介(作成中)"
                    description="技術スキル、開発経験、プロジェクト実績などを紹介予定です。"
                    href="/skills"
                    icon={
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>
            
            {/* Image Gallery */}
            <aside className="animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gray-200/30 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    実家の猫
                  </h3>
                  
                  <div className="grid gap-6">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gray-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Image
                        src="https://yuta-mi.github.io/public_image/reo.jpg" 
                        alt="愛猫レオ" 
                        height={300} 
                        width={300}
                        className="relative w-full h-auto rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300 animate-float"
                        style={{ animationDelay: '0s' }}
                      />
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-sm font-medium text-gray-700">レオ</span>
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gray-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Image 
                        src="https://yuta-mi.github.io/public_image/left.jpg" 
                        alt="ひだりちゃん" 
                        height={300} 
                        width={300}
                        className="relative w-full h-auto rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300 animate-float"
                        style={{ animationDelay: '1s' }}
                      />
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-sm font-medium text-gray-700">ひー</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-stone-50 via-white to-stone-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            連絡先
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            案件のご相談やお問い合わせは下記のメールアドレスにご連絡ください。
          </p>
          <a href={`mailto:${meta.email.address}`}>
            <Button size="lg" className="rounded-full">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {meta.email.address}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
