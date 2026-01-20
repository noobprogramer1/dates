
import React, { useState } from 'react';
import { Truck, ShieldCheck, Heart, ShoppingCart, MessageCircle, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { SAMPLE_PRODUCTS, WHATSAPP_NUMBER } from '../constants';
import ProductCard from '../components/ProductCard';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  setActivePage: (p: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart, setActivePage }) => {
  const [qty, setQty] = useState(1);
  const upsellProducts = SAMPLE_PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-[#FFF8E8] py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button 
            onClick={() => setActivePage('shop')}
            className="flex items-center gap-2 text-[#C9A227] font-bold mb-8 hover:gap-4 transition-all"
        >
            <ArrowRight size={20} /> العودة للمتجر
        </button>

        {/* Product Info */}
        <div className="bg-white rounded-3xl p-6 lg:p-12 shadow-xl border border-[#E9D8B4]/50 flex flex-col lg:flex-row gap-12">
            {/* Gallery */}
            <div className="lg:w-1/2">
                <div className="aspect-square rounded-2xl overflow-hidden bg-[#FDFBF7] mb-4">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="aspect-square rounded-xl bg-gray-100 border border-gray-200 cursor-pointer overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
                            <img src={`https://picsum.photos/seed/thumb${i}/200/200`} alt="Thumbnail" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 text-right flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2">
                        <button className="p-3 bg-gray-50 rounded-full text-[#3B2A1E] hover:bg-red-50 hover:text-red-500 transition-colors">
                            <Heart size={24} />
                        </button>
                    </div>
                    <div>
                        <span className="bg-[#C9A227]/10 text-[#C9A227] text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                            {product.category}
                        </span>
                        <h1 className="text-3xl lg:text-4xl font-bold text-[#3B2A1E] font-heading">{product.name}</h1>
                    </div>
                </div>

                <div className="text-3xl font-bold text-[#3B2A1E] mb-6">
                    {product.price} جنيه
                    <span className="text-sm text-gray-400 font-normal mr-2">/ {product.weight}</span>
                </div>

                <p className="text-[#5A3B2A] text-lg leading-relaxed mb-8">
                    {product.description}
                </p>

                <div className="bg-[#FFF8E8] p-6 rounded-2xl mb-8 space-y-4 border border-[#E9D8B4]">
                    <div className="flex items-center gap-3 text-[#2F6B4F]">
                        <Truck size={20} />
                        <span className="font-bold">توصيل سريع خلال 24–48 ساعة</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#3B2A1E]">
                        <ShieldCheck size={20} />
                        <span className="font-bold">الدفع عند الاستلام متاح</span>
                    </div>
                </div>

                <div className="mt-auto space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex items-center border border-[#E9D8B4] rounded-xl overflow-hidden bg-white">
                            <button onClick={() => setQty(q => q + 1)} className="px-6 py-4 hover:bg-gray-100 text-xl">+</button>
                            <span className="px-8 font-bold text-xl">{qty}</span>
                            <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-6 py-4 hover:bg-gray-100 text-xl">-</button>
                        </div>
                        <button 
                            onClick={() => onAddToCart({...product})}
                            className="flex-grow bg-[#C9A227] text-white py-4 px-8 rounded-xl font-bold text-xl flex items-center justify-center gap-3 shadow-lg hover:bg-[#B08D20] active:scale-95"
                        >
                            <ShoppingCart /> إضافة للسلة
                        </button>
                    </div>
                    
                    <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=أريد طلب ${product.name} كمية ${qty}`}
                        className="w-full bg-[#2F6B4F] text-white py-4 rounded-xl font-bold text-xl flex items-center justify-center gap-3 shadow-lg hover:bg-[#25523d]"
                    >
                        <MessageCircle /> اطلب عبر واتساب
                    </a>
                    
                    <p className="text-center text-sm text-[#5A3B2A]">
                        عايز طلب كبير؟ <button onClick={() => setActivePage('wholesale')} className="text-[#C9A227] underline font-bold">اطلب عرض سعر جملة</button>
                    </p>
                </div>
            </div>
        </div>

        {/* Upsell */}
        <div className="mt-20">
            <h2 className="text-2xl font-bold text-[#3B2A1E] text-right mb-10 font-heading">الناس اشترت كمان</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {upsellProducts.map(p => (
                    <ProductCard 
                        key={p.id} 
                        product={p} 
                        onAddToCart={onAddToCart} 
                        onViewDetails={(prod) => { window.scrollTo(0,0); setActivePage('product-detail'); }} 
                    />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
