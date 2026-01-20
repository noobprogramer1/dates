
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-[#FFF8E8] py-20">
      <div className="container mx-auto px-4 max-w-4xl text-right">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#3B2A1E] mb-12 font-heading">حكاية تمور دهب</h1>
        
        <div className="bg-white p-8 lg:p-16 rounded-3xl shadow-xl border border-[#E9D8B4]">
            <div className="prose prose-lg max-w-none text-[#5A3B2A] leading-loose space-y-8">
                <p>
                    بدأت رحلة <strong>تمور دهب</strong> من قلب الواحات المصرية، حيث الشمس الدافئة والتربة الغنية التي تنتج أفخر أنواع التمور في العالم. نحن لا نبيع مجرد تمر، نحن نقدم قطعة من تراثنا المصري العريق مغلفة بالأناقة والجودة.
                </p>

                <h2 className="text-2xl font-bold text-[#C9A227] font-heading">لماذا "دهب"؟</h2>
                <p>
                    سمينا علامتنا التجارية "دهب" لأننا نعتبر التمور هي الكنز الذهبي لمصر. ولأننا نلتزم بمعايير الجودة التي تليق بقيمة الذهب؛ من اختيار الثمار في وقت الحصاد المثالي، وحتى وصولها لباب منزلك في تغليف يحفظ طعمها وقيمتها الغذائية.
                </p>

                <h2 className="text-2xl font-bold text-[#C9A227] font-heading">مهمتنا</h2>
                <p>
                    مهمتنا هي توفير التمور الفاخرة لكل البيوت والشركات في مصر بأفضل سعر ممكن. نؤمن أن المنتج الفاخر ليس بالضرورة أن يكون باهظ الثمن، ولهذا نعمل مباشرة مع المزارعين لنضمن لك "أعلى جودة بأقل سعر".
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 py-8 border-y border-[#E9D8B4]">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#3B2A1E] mb-2 font-heading">مصدرنا</div>
                        <p className="text-sm">مزارع مصرية منتقاة</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#3B2A1E] mb-2 font-heading">فلسفتنا</div>
                        <p className="text-sm">الجودة لا تقبل المساومة</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#3B2A1E] mb-2 font-heading">وعدنا</div>
                        <p className="text-sm">توصيل سريع وثقة تامة</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
