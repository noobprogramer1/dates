
import React from 'react';
import { Phone, MapPin, MessageCircle, Mail } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#FFF8E8] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#3B2A1E] font-heading mb-4">تواصل معنا</h1>
            <p className="text-[#5A3B2A]">نحن هنا للإجابة على جميع استفساراتكم وتلبية طلباتكم</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6 order-2 lg:order-1">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#E9D8B4] text-right">
                    <div className="flex items-center gap-4 justify-end mb-6">
                        <h3 className="text-xl font-bold text-[#3B2A1E]">معلومات التواصل</h3>
                        <div className="bg-[#C9A227] p-2 rounded-lg text-white"><Phone size={20} /></div>
                    </div>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4 justify-end text-[#5A3B2A]">
                            <span>+20 100 000 0000</span>
                            <Phone size={18} className="text-[#C9A227]" />
                        </li>
                        <li className="flex items-center gap-4 justify-end text-[#5A3B2A]">
                            <span>info@dahabdates.com</span>
                            <Mail size={18} className="text-[#C9A227]" />
                        </li>
                        <li className="flex items-center gap-4 justify-end text-[#5A3B2A]">
                            <span>القاهرة، جمهورية مصر العربية</span>
                            <MapPin size={18} className="text-[#C9A227]" />
                        </li>
                    </ul>
                    <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        className="mt-8 flex items-center justify-center gap-3 bg-[#2F6B4F] text-white py-4 rounded-xl font-bold hover:bg-[#25523d] transition-colors"
                    >
                        <MessageCircle /> واتساب سريع
                    </a>
                </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-[#E9D8B4] text-right">
                    <h3 className="text-2xl font-bold text-[#3B2A1E] mb-8 font-heading">أرسل لنا رسالة</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-bold text-[#3B2A1E]">الاسم</label>
                                <input type="text" className="bg-[#FFF8E8] border border-[#E9D8B4] p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#C9A227]" placeholder="أدخل اسمك" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-bold text-[#3B2A1E]">رقم الهاتف</label>
                                <input type="tel" className="bg-[#FFF8E8] border border-[#E9D8B4] p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#C9A227]" placeholder="01000000000" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-[#3B2A1E]">الموضوع</label>
                            <input type="text" className="bg-[#FFF8E8] border border-[#E9D8B4] p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#C9A227]" placeholder="سبب التواصل" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-[#3B2A1E]">الرسالة</label>
                            <textarea className="bg-[#FFF8E8] border border-[#E9D8B4] p-4 rounded-xl h-40 outline-none focus:ring-2 focus:ring-[#C9A227]" placeholder="كيف يمكننا مساعدتك؟"></textarea>
                        </div>
                        <button className="w-full bg-[#3B2A1E] text-white py-4 rounded-xl font-bold text-xl hover:bg-black transition-transform active:scale-95 shadow-lg">
                            إرسال الرسالة
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
