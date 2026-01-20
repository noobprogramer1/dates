
import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { SAMPLE_PRODUCTS } from '../constants';
import { Product, Category } from '../types';

interface ShopProps {
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onAddToCart, onViewDetails }) => {
  const [filter, setFilter] = useState<Category | 'الكل'>('الكل');

  const filteredProducts = filter === 'الكل' 
    ? SAMPLE_PRODUCTS 
    : SAMPLE_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="py-12 bg-[#FFF8E8]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#3B2A1E] font-heading mb-4">متجر دهب للتمور</h1>
            <p className="text-[#5A3B2A]">تصفح تشكيلتنا الفاخرة من أجود التمور المصرية</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button 
                onClick={() => setFilter('الكل')}
                className={`px-8 py-2 rounded-full font-bold transition-all ${filter === 'الكل' ? 'bg-[#C9A227] text-white shadow-lg' : 'bg-white text-[#3B2A1E] border border-[#E9D8B4]'}`}
            >
                الكل
            </button>
            {['سكري', 'مجدول', 'عجوة'].map((cat) => (
                <button 
                    key={cat}
                    onClick={() => setFilter(cat as Category)}
                    className={`px-8 py-2 rounded-full font-bold transition-all ${filter === cat ? 'bg-[#C9A227] text-white shadow-lg' : 'bg-white text-[#3B2A1E] border border-[#E9D8B4]'}`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={onAddToCart} 
                    onViewDetails={onViewDetails}
                />
            ))}
        </div>

        {filteredProducts.length === 0 && (
            <div className="text-center py-20">
                <p className="text-xl text-gray-500">لا توجد منتجات مطابقة لهذا التصنيف حالياً.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
