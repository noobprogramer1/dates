
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Menu, X, Phone } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  setActivePage: (page: string) => void;
  cartCount: number;
  cartBump?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, setActivePage, cartCount, cartBump }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'الرئيسية', id: 'home' },
    { label: 'المنتجات', id: 'shop' },
    { label: 'الجملة B2B', id: 'wholesale' },
    { label: 'من نحن', id: 'about' },
    { label: 'الأسئلة الشائعة', id: 'faq' },
    { label: 'تواصل معنا', id: 'contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#C9A227] selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#3B2A1E] text-[#FFF8E8] text-center py-2 text-[10px] sm:text-sm font-medium tracking-[0.2em] uppercase overflow-hidden">
        <div className="animate-pulse">
            شحن مجاني للطلبات فوق 1000 جنيه | توصيل خلال 24-48 ساعة لكل مصر
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-[100] transition-all duration-700 ${isScrolled ? 'bg-[#FFF8E8]/95 backdrop-blur-xl shadow-2xl py-2' : 'bg-[#FFF8E8] py-5'} border-b border-[#E9D8B4]/40`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button className="lg:hidden p-2 text-[#3B2A1E] hover:bg-[#E9D8B4] rounded-full transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <div 
            className="text-3xl font-bold cursor-pointer flex items-center gap-3 group"
            onClick={() => setActivePage('home')}
          >
            <div className="relative overflow-hidden">
              <span className="text-[#C9A227] font-heading relative z-10 block group-hover:scale-110 transition-transform duration-500">تمور دهب</span>
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#C9A227] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
            </div>
            <span className="text-[#3B2A1E] hidden sm:inline text-xl font-light opacity-30 tracking-tighter">Dahab Dates</span>
          </div>

          <nav className="hidden lg:flex items-center gap-12 font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className="relative py-2 group text-[#3B2A1E] transition-colors overflow-hidden"
              >
                <span className={`relative z-10 transition-colors group-hover:text-[#C9A227] ${activePage === item.id ? 'text-[#C9A227] font-bold' : ''}`}>
                  {item.label}
                </span>
                <span className={`absolute bottom-0 right-0 h-[2px] bg-[#C9A227] transition-all duration-500 ease-out ${activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-6">
            <button className="hidden sm:flex p-3 hover:bg-[#E9D8B4] rounded-full transition-all active:scale-90 group">
              <Heart size={22} className="text-[#3B2A1E] group-hover:fill-[#C9A227] group-hover:text-[#C9A227] transition-all" />
            </button>
            <button 
              className={`p-3 hover:bg-[#E9D8B4] rounded-full transition-all active:scale-90 relative ${cartBump ? 'animate-cart-pop' : ''}`}
              onClick={() => setActivePage('cart')}
            >
              <ShoppingCart size={22} className="text-[#3B2A1E]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C9A227] text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center border-[3px] border-[#FFF8E8] font-black shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setActivePage('shop')}
              className="hidden md:block bg-[#3B2A1E] text-white px-10 py-3 rounded-full font-bold hover:bg-black transition-all active:scale-95 shadow-2xl btn-shine"
            >
              اطلب الآن
            </button>
          </div>
        </div>

        {/* Cinematic Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[110] bg-[#FFF8E8] p-10 flex flex-col justify-center gap-8 animate-page-reveal">
            <button className="absolute top-10 left-10 p-3 bg-white rounded-full shadow-xl" onClick={() => setIsMenuOpen(false)}>
                <X size={32} />
            </button>
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`text-right text-4xl font-heading transition-all duration-500 delay-[${i * 100}ms] ${activePage === item.id ? 'text-[#C9A227] translate-x-[-10px]' : 'text-[#3B2A1E] hover:translate-x-[-10px] hover:text-[#C9A227]'}`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-12 space-y-4">
                <button 
                    onClick={() => {setActivePage('wholesale'); setIsMenuOpen(false);}}
                    className="w-full bg-[#C9A227] text-white py-6 rounded-3xl font-bold text-2xl shadow-2xl btn-shine"
                >
                    عرض سعر الجملة
                </button>
                <button 
                    onClick={() => {setActivePage('contact'); setIsMenuOpen(false);}}
                    className="w-full bg-[#3B2A1E] text-white py-6 rounded-3xl font-bold text-2xl shadow-xl"
                >
                    تواصل معنا
                </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#3B2A1E] text-[#FFF8E8] pt-32 pb-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 border-b border-[#5A3B2A]/30 pb-20">
              <div className="space-y-8">
                <h3 className="text-4xl font-bold text-[#C9A227] font-heading tracking-widest">تمور دهب</h3>
                <p className="text-[#E9D8B4] leading-loose text-lg opacity-60 font-light">
                  تجربة فاخرة تبدأ من المزارع المصرية العريقة لتصل إلى مائدتكم بأعلى معايير الجودة العالمية.
                </p>
                <div className="flex gap-4">
                    {/* Social placeholders */}
                    <div className="w-10 h-10 rounded-full bg-[#5A3B2A] flex items-center justify-center hover:bg-[#C9A227] transition-colors cursor-pointer">FB</div>
                    <div className="w-10 h-10 rounded-full bg-[#5A3B2A] flex items-center justify-center hover:bg-[#C9A227] transition-colors cursor-pointer">IG</div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-10 text-white font-heading relative inline-block">
                    استكشف
                    <span className="absolute -bottom-2 right-0 w-8 h-1 bg-[#C9A227]"></span>
                </h4>
                <ul className="space-y-5 text-[#E9D8B4]">
                  {navItems.map(item => (
                    <li key={item.id}>
                      <button onClick={() => setActivePage(item.id)} className="hover:text-white transition-all hover:pr-4 flex items-center gap-2 group">
                        <span className="w-0 group-hover:w-4 h-[1px] bg-[#C9A227] transition-all"></span>
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-10 text-white font-heading relative inline-block">
                    خدمة العملاء
                    <span className="absolute -bottom-2 right-0 w-8 h-1 bg-[#C9A227]"></span>
                </h4>
                <ul className="space-y-5 text-[#E9D8B4]">
                  <li className="hover:text-white transition-all hover:pr-4 cursor-pointer">سياسة الاستبدال الفوري</li>
                  <li className="hover:text-white transition-all hover:pr-4 cursor-pointer">تتبع شحنتك</li>
                  <li className="hover:text-white transition-all hover:pr-4 cursor-pointer">برنامج الولاء</li>
                  <li className="hover:text-white transition-all hover:pr-4 cursor-pointer">وظائف خالية</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-10 text-white font-heading relative inline-block">
                    كن على اتصال
                    <span className="absolute -bottom-2 right-0 w-8 h-1 bg-[#C9A227]"></span>
                </h4>
                <ul className="space-y-6 text-[#E9D8B4]">
                  <li className="flex items-center gap-4 group">
                    <div className="p-3 rounded-xl bg-[#5A3B2A] group-hover:bg-[#C9A227] transition-colors">
                        <Phone size={20} className="text-white" />
                    </div>
                    <span className="text-lg">+20 100 000 0000</span>
                  </li>
                  <li className="bg-[#5A3B2A]/20 p-8 rounded-[2rem] border border-[#5A3B2A]/40 backdrop-blur-sm">
                    <span className="block text-xs mb-4 text-[#C9A227] font-black uppercase tracking-[0.3em]">المدفوعات الآمنة</span>
                    <div className="flex flex-wrap gap-6 items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
                       <span className="text-sm font-black italic">InstaPay</span>
                       <span className="text-sm font-black italic">Wallet</span>
                       <span className="text-sm font-black italic">COD</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pt-16 flex flex-col md:flex-row justify-between items-center gap-6 text-[#E9D8B4]/40 text-xs font-light tracking-widest">
              <p>تصميم وتطوير تمور دهب &copy; {new Date().getFullYear()}</p>
              <div className="flex gap-10">
                <span className="hover:text-[#C9A227] cursor-pointer transition-colors">سياسة الخصوصية</span>
                <span className="hover:text-[#C9A227] cursor-pointer transition-colors">الشروط والأحكام</span>
              </div>
            </div>
        </div>
      </footer>

      {/* Pulsing WhatsApp CTA */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 left-10 z-[120] bg-[#2F6B4F] text-white p-5 rounded-full shadow-[0_20px_50px_rgba(47,107,79,0.4)] hover:scale-110 transition-transform flex items-center gap-3 group whatsapp-pulse"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 whitespace-nowrap font-bold text-xl px-0 group-hover:px-4">
            نحن متصلون الآن
        </span>
        <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default Layout;
