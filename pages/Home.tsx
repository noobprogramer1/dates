
import React, { useEffect, useState } from 'react';
import { Truck, ShieldCheck, Package, Award, ArrowLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { SAMPLE_PRODUCTS } from '../constants';
import { Product } from '../types';

interface HomeProps {
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
  setActivePage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart, onViewDetails, setActivePage }) => {
  const [scrollY, setScrollY] = useState(0);
  const bestSellers = SAMPLE_PRODUCTS.slice(0, 3);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Cinematic Hero with Parallax Elements */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#E9D8B4]">
        {/* Animated Background Blobs with Parallax */}
        <div 
          className="absolute top-20 right-[-10%] w-[40rem] h-[40rem] bg-white/30 rounded-full blur-[120px] animate-pulse transition-transform duration-75"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-[#C9A227]/20 rounded-full blur-[100px] transition-transform duration-75"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        ></div>

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center relative z-10 py-20">
          <div className="text-right space-y-10 animate-fade-in-up">
            <div className="space-y-4">
                <span className="text-[#C9A227] font-black uppercase tracking-[0.4em] text-sm block">التميز المصري الأصيل</span>
                <h1 className="text-6xl lg:text-8xl font-bold text-[#3B2A1E] leading-[1.1] font-heading">
                    فخامة التمر <br />
                    <span className="text-white drop-shadow-2xl">في كل حبة</span>
                </h1>
            </div>
            <p className="text-2xl text-[#5A3B2A]/80 max-w-xl ml-auto leading-relaxed font-light">
                ننتقي لك أجود أنواع السكري والمجدول والعجوة من قلب المزارع المصرية مباشرة إلى باب منزلك في تغليف ملكي يليق بك.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-start pt-6">
                <button 
                  onClick={() => setActivePage('shop')}
                  className="bg-[#3B2A1E] text-white px-14 py-6 rounded-[2rem] font-bold text-2xl shadow-[0_25px_50px_rgba(59,42,30,0.3)] hover:bg-black transition-all hover:-translate-y-3 active:scale-95 btn-shine"
                >
                    تسوق الآن
                </button>
                <button 
                  onClick={() => setActivePage('wholesale')}
                  className="bg-transparent border-2 border-[#3B2A1E] text-[#3B2A1E] px-14 py-6 rounded-[2rem] font-bold text-2xl hover:bg-[#3B2A1E] hover:text-white transition-all hover:-translate-y-3 active:scale-95"
                >
                    طلبات الجملة
                </button>
            </div>
          </div>
          
          <div className="relative group animate-page-reveal" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
             <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-1000 ease-out">
               <img 
                  src="https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?auto=format&fit=crop&q=80&w=1000" 
                  alt="تمور دهب الفاخرة" 
                  className="rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.2)] object-cover w-full aspect-[4/5] lg:aspect-auto border-[16px] border-white/40"
               />
               <div className="absolute -bottom-10 -right-10 bg-[#C9A227] text-white p-10 rounded-[3rem] shadow-2xl hidden md:block animate-float">
                  <span className="block font-black text-4xl font-heading mb-2">5kg</span>
                  <span className="text-lg opacity-80">الكرتونة الملكية</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Modern Value Strip */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
                {[
                    { icon: <Award className="text-[#C9A227]" size={48} />, title: 'جودة ملكية', desc: 'فرز يدوي دقيق لكل حبة تمر لضمان الكمال.' },
                    { icon: <Package className="text-[#C9A227]" size={48} />, title: 'تغليف فاخر', desc: 'علب مصممة خصيصاً للحفاظ على الطراوة والأناقة.' },
                    { icon: <Truck className="text-[#C9A227]" size={48} />, title: 'شحن صاروخي', desc: 'نصل إليك في أي مكان في مصر خلال 48 ساعة.' },
                    { icon: <ShieldCheck className="text-[#C9A227]" size={48} />, title: 'ضمان كامل', desc: 'استبدال فوري أو استرداد نقدي في حال عدم الرضا.' }
                ].map((item, idx) => (
                    <div key={idx} className="group text-right space-y-6 animate-fade-in-up" style={{animationDelay: `${idx * 200}ms`}}>
                        <div className="w-20 h-20 bg-[#FFF8E8] rounded-[2rem] flex items-center justify-center group-hover:bg-[#C9A227] group-hover:scale-110 transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:text-white">
                            {item.icon}
                        </div>
                        <h4 className="font-bold text-2xl text-[#3B2A1E] font-heading">{item.title}</h4>
                        <p className="text-[#5A3B2A]/60 leading-loose text-lg">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-32 bg-[#FFF8E8]/40 border-y border-[#E9D8B4]/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 gap-10">
            <button 
                onClick={() => setActivePage('shop')}
                className="group order-2 md:order-1 bg-white px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-4 text-[#C9A227] font-black"
            >
                اكتشف كل المنتجات <ArrowLeft size={24} className="group-hover:translate-x-[-8px] transition-transform" />
            </button>
            <div className="order-1 md:order-2 text-right space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-[#3B2A1E] font-heading">الأكثر مبيعاً</h2>
              <div className="h-2 w-24 bg-[#C9A227] mr-auto md:mr-0 rounded-full"></div>
              <p className="text-2xl text-[#5A3B2A]/60">التشكيلة المختارة بعناية لإرضاء ذوقكم الرفيع</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {bestSellers.map((product, i) => (
              <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${(i + 1) * 200}ms` }}>
                <ProductCard 
                  product={product} 
                  onAddToCart={onAddToCart} 
                  onViewDetails={onViewDetails}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Split Screen with Parallax Background */}
      <section className="relative h-[650px] flex items-center overflow-hidden group">
        <div 
          className="absolute inset-0 parallax-bg transition-transform duration-300 ease-out"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1511229089470-90602841bb25?auto=format&fit=crop&q=80&w=1600')",
            transform: `translateY(${(scrollY - 2000) * 0.15}px) scale(1.1)`
          }}
        >
          {/* Green Overlay */}
          <div className="absolute inset-0 bg-[#2F6B4F]/70 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2">
            <div className="lg:col-start-2 text-right space-y-8 animate-page-reveal">
                <h2 className="text-5xl lg:text-7xl font-bold text-white font-heading leading-tight">توريد الجملة <br /><span className="text-[#E9D8B4]">بمعايير عالمية</span></h2>
                <p className="text-2xl text-[#E9D8B4]/80 leading-relaxed max-w-xl mr-auto">نوفر لشركائنا من المحلات والفنادق كميات ضخمة بأسعار تنافسية وجودة ثابتة طوال العام.</p>
                <button 
                  onClick={() => setActivePage('wholesale')}
                  className="bg-white text-[#2F6B4F] px-16 py-6 rounded-full font-black text-2xl hover:bg-[#E9D8B4] transition-all hover:-translate-y-2 shadow-2xl btn-shine"
                >
                    اطلب عرض سعر الآن
                </button>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 text-center space-y-20">
            <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-5xl font-bold text-[#3B2A1E] font-heading">ثقة تتوارثها الأجيال</h2>
                <p className="text-xl text-[#5A3B2A]/60">نحن لا نبيع التمر فقط، نحن نبيع تجربة غنية بالتفاصيل والجودة التي تستحقونها.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
                {[
                    { label: 'عام من الخبرة', val: '+15' },
                    { label: 'شحنة شهرياً', val: '+5000' },
                    { label: 'محافظة نغطيها', val: '27' }
                ].map((stat, i) => (
                    <div key={i} className="p-16 rounded-[3rem] bg-[#FFF8E8] border border-[#E9D8B4]/40 hover:scale-105 transition-transform duration-500 shadow-sm">
                        <div className="text-7xl font-black text-[#C9A227] mb-4 font-heading">{stat.val}</div>
                        <div className="text-xl text-[#3B2A1E] font-bold">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
