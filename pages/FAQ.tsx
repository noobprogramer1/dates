
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: 'الشحن بيبقى قد إيه؟',
      a: 'التوصيل يتم خلال 24 إلى 48 ساعة بحد أقصى لكل محافظات مصر. في القاهرة والجيزة غالباً ما يصل الطلب في اليوم التالي.'
    },
    {
      q: 'طرق الدفع المتاحة؟',
      a: 'يمكنك الدفع نقداً عند الاستلام (Cash on Delivery)، أو من خلال المحافظ الإلكترونية (فودافون كاش وغيرها)، أو عبر تطبيق إنستا باي (InstaPay).'
    },
    {
      q: 'هل متاح أسعار جملة؟',
      a: 'نعم بالتأكيد! نحن نوفر أسعاراً خاصة جداً للسوبر ماركت، محلات العطارة، وشركات التموين. يمكنك مراجعة صفحة "الجملة" لطلب عرض سعر.'
    },
    {
      q: 'هل الأسعار بتختلف حسب الكمية؟',
      a: 'نعم، لدينا أسعار خاصة للكرتونة الـ 5 كيلو (توفير)، وأسعار خاصة جداً للطلبات التي تزيد عن 50 كيلو.'
    },
    {
      q: 'سياسة الاستبدال والاسترجاع؟',
      a: 'نضمن لك جودة التمر 100%. في حالة وجود أي ملاحظة على الجودة، يمكنك رفض الاستلام أو التواصل معنا لاستبدال المنتج مجاناً خلال 24 ساعة.'
    },
    {
      q: 'إزاي أطلب كرتونة 5 كيلو؟',
      a: 'ببساطة اختر المنتج من المتجر وأضفه للسلة، أو تواصل معنا مباشرة عبر واتساب بضغطة زر واحدة.'
    }
  ];

  return (
    <div className="bg-[#FFF8E8] py-20">
      <div className="container mx-auto px-4 max-w-3xl text-right">
        <h1 className="text-4xl font-bold text-[#3B2A1E] mb-12 font-heading text-center">الأسئلة الشائعة</h1>
        
        <div className="space-y-6">
            {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-[#E9D8B4]">
                    <h3 className="text-xl font-bold text-[#C9A227] mb-4 font-heading">{faq.q}</h3>
                    <p className="text-[#5A3B2A] leading-relaxed">{faq.a}</p>
                </div>
            ))}
        </div>

        <div className="mt-16 bg-[#3B2A1E] text-white p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4 font-heading">لسه عندك سؤال؟</h3>
            <p className="mb-8 text-[#E9D8B4]">تواصل معنا مباشرة عبر واتساب وسنرد عليك في أسرع وقت.</p>
            <button className="bg-[#2F6B4F] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#25523d] transition-colors">
                تواصل واتساب الآن
            </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
