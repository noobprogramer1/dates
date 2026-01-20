
import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  return (
    <div 
      onClick={() => onViewDetails(product)}
      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_30px_rgba(59,42,30,0.05)] hover:shadow-[0_40px_80px_rgba(59,42,30,0.12)] transition-all duration-700 border border-[#E9D8B4]/30 relative cursor-pointer flex flex-col h-full active:scale-[0.96] transform-gpu"
    >
      {product.isBestSeller && (
        <div className="absolute top-6 right-6 z-10 bg-[#C9A227] text-white text-[10px] uppercase tracking-[0.2em] font-black px-5 py-2 rounded-full shadow-2xl animate-float">
          الأكثر مبيعًا
        </div>
      )}
      
      <div className="aspect-[4/5] overflow-hidden bg-[#FDFBF7] relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-[1.5s] ease-out"
        />
        
        {/* Cinematic Immersive Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A1E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-full shadow-2xl transform translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <Eye size={32} className="text-[#C9A227]" />
            </div>
        </div>
      </div>

      <div className="p-10 text-right flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[#2F6B4F] text-[11px] font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-opacity">{product.category}</span>
          <div className="w-8 h-[1px] bg-[#E9D8B4]"></div>
        </div>
        <h3 className="text-2xl font-bold text-[#3B2A1E] mb-4 font-heading group-hover:text-[#C9A227] transition-colors leading-tight">
          {product.name}
        </h3>
        <p className="text-base text-[#5A3B2A]/60 mb-10 line-clamp-2 leading-relaxed italic group-hover:text-[#5A3B2A] transition-colors">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-8 border-t border-[#F7EFE0]/80">
          <div className="text-right">
            <span className="block text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">الاستثمار</span>
            <span className="text-3xl font-bold text-[#3B2A1E] tabular-nums tracking-tighter">{product.price} <small className="text-sm font-medium mr-1">جنيه</small></span>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-[#C9A227] text-white p-6 rounded-3xl hover:bg-[#3B2A1E] transition-all duration-500 shadow-xl active:scale-90 hover:shadow-[#C9A227]/30 btn-shine"
            aria-label="إضافة إلى السلة"
          >
            <ShoppingCart size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
