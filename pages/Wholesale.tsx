
import React, { useState } from 'react';
import { Package, Truck, CheckCircle2, TrendingUp, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Wholesale: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    businessType: 'سوبرماركت',
    location: '',
    estimatedQuantity: '',
    phone: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('تم استلام طلبك، سنتواصل معك خلال أقل من 12 ساعة.');
  };

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-[#3B2A1E] text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-heading">توريد تمور درجة أولى للجملة</h1>
            <p className="text-xl text-[#E9D8B4] leading-relaxed">
                نحن شركاء النجاح للمحلات التجارية والشركات. نوفر لكم توريداً منتظماً، أسعاراً منافسة، وتعبئة احترافية تضمن رضا عملائكم.
            </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { icon: <TrendingUp className="text-[#C9A227]" size={40} />, title: 'سعر جملة حقيقي', desc: 'أفضل هامش ربح لنشاطك التجاري.' },
                { icon: <CheckCircle2 className="text-[#2F6B4F]" size={40} />, title: 'توريد منتظم', desc: 'لن تواجه أي نقص في المخزون معنا.' },
                { icon: <Package className="text-[#C9A227]" size={40} />, title: 'تعبئة ممتازة', desc: 'تغليف احترافي يجذب العملاء فوراً.' },
                { icon: <Truck className="text-[#2F6B4F]" size={40} />, title: 'شحن سريع', desc: 'شحن مبرد لكل محافظات مصر.' }
            ].map((benefit, idx) => (
                <div key={idx} className="bg-[#FFF8E8] p-8 rounded-2xl text-right">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-[#3B2A1E] mb-2">{benefit.title}</h3>
                    <p className="text-[#5A3B2A]">{benefit.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Main Funnel Form */}
      <section className="py-20 bg-[#FFF8E8]">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-[#E9D8B4]">
                {/* Info Part */}
                <div className="lg:w-1/3 bg-[#3B2A1E] text-white p-12 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-6 font-heading">تواصل معنا الآن</h2>
                    <p className="text-[#E9D8B4] mb-8">
                        سواء كنت سوبرماركت، عطارة، أو شركة تموين، لدينا الحل الأمثل لاحتياجاتك.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#5A3B2A] p-2 rounded-lg"><Package /></div>
                            <span>الحد الأدنى للطلب: حسب نوع المنتج</span>
                        </div>
                        <a 
                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                            className="bg-[#2F6B4F] text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#25523d] transition-colors"
                        >
                            <MessageCircle /> تواصل واتساب للجملة
                        </a>
                    </div>
                </div>

                {/* Form Part */}
                <div className="lg:w-2/3 p-12 text-right">
                    <h2 className="text-3xl font-bold text-[#3B2A1E] mb-8 font-heading">اطلب عرض سعر</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-[#3B2A1E]">الاسم بالكامل</label>
                            <input 
                                required
                                type="text" 
                                className="bg-[#FFF8E8] border border-[#E9D8B4] p-3 rounded-xl focus:ring-2 focus:ring-[#C9A227] outline-none"
                                placeholder="مثال: أحمد محمد"
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-[#3B2A1E]">اسم النشاط التجاري</label>
                            <input 
                                required
                                type="text" 
                                className="bg-[#FFF8E8] border border-[#E9D8B4] p-3 rounded-xl focus:ring-2 focus:ring-[#C9A227] outline-none"
                                placeholder="مثال: سوبرماركت الخير"
                                value={formData.businessName}
                                onChange={e => setFormData({...formData, businessName: e.target.value})}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-[#3B2A1E]">نوع النشاط</label>
                            <select 
                                className="bg-[#FFF8E8] border border-[#E9D8B4] p-3 rounded-xl focus:ring-2 focus:ring-[#C9A227] outline-none"
                                value={formData.businessType}
                                onChange={e => setFormData({...formData, businessType: e.target.value})}
                            >
                                <option>سوبرماركت</option>
                                <option>عطارة</option>
                                <option>تموين</option>
                                <option>أخرى</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-[#3B2A1E]">رقم الموبايل</label>
                            <input 
                                required
                                type="tel" 
                                className="bg-[#FFF8E8] border border-[#E9D8B4] p-3 rounded-xl focus:ring-2 focus:ring-[#C9A227] outline-none text-right"
                                placeholder="01000000000"
                                value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="font-bold text-[#3B2A1E]">الكمية المتوقعة شهرياً</label>
                            <input 
                                type="text" 
                                className="bg-[#FFF8E8] border border-[#E9D8B4] p-3 rounded-xl focus:ring-2 focus:ring-[#C9A227] outline-none"
                                placeholder="مثال: 100 كرتونة"
                                value={formData.estimatedQuantity}
                                onChange={e => setFormData({...formData, estimatedQuantity: e.target.value})}
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="font-bold text-[#3B2A1E]">ملاحظات إضافية</label>
                            <textarea 
                                className="bg-[#FFF8E8] border border-[#E9D8B4] p-3 rounded-xl h-32 focus:ring-2 focus:ring-[#C9A227] outline-none"
                                placeholder="أي تفاصيل أخرى تود إضافتها..."
                                value={formData.notes}
                                onChange={e => setFormData({...formData, notes: e.target.value})}
                            ></textarea>
                        </div>
                        <button 
                            type="submit"
                            className="md:col-span-2 bg-[#C9A227] text-white py-4 rounded-xl font-bold text-xl shadow-lg hover:bg-[#B08D20] transition-transform active:scale-95"
                        >
                            اطلب عرض سعر
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Wholesale;
