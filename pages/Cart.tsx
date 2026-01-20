
import React from 'react';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, q: number) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onUpdateQuantity, onCheckout }) => {
  const subtotal = items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="py-24 text-center">
        <div className="inline-block p-8 bg-[#FFF8E8] rounded-full mb-6">
            <ShoppingBag size={64} className="text-[#E9D8B4]" />
        </div>
        <h2 className="text-3xl font-bold text-[#3B2A1E] font-heading mb-4">سلة المشتريات فارغة</h2>
        <p className="text-[#5A3B2A] mb-8">لم تقم بإضافة أي منتجات للسلة بعد.</p>
        <button className="bg-[#C9A227] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg">
            ابدأ التسوق الآن
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF8E8] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold text-[#3B2A1E] text-right mb-12 font-heading">سلة المشتريات</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
            {/* Summary */}
            <div className="lg:w-1/3 order-2 lg:order-1">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#E9D8B4] text-right">
                    <h3 className="text-xl font-bold text-[#3B2A1E] mb-6 border-b border-[#F7EFE0] pb-4">ملخص الطلب</h3>
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center font-medium">
                            <span>{subtotal} جنيه</span>
                            <span>إجمالي المنتجات</span>
                        </div>
                        <div className="flex justify-between items-center font-medium">
                            <span className={shipping === 0 ? "text-[#2F6B4F]" : ""}>
                                {shipping === 0 ? 'مجاني' : `${shipping} جنيه`}
                            </span>
                            <span>تكلفة الشحن</span>
                        </div>
                        <div className="pt-4 border-t border-[#F7EFE0] flex justify-between items-center text-2xl font-bold text-[#3B2A1E]">
                            <span>{total} جنيه</span>
                            <span>الإجمالي</span>
                        </div>
                    </div>
                    <button 
                        onClick={onCheckout}
                        className="w-full bg-[#C9A227] text-white py-4 rounded-xl font-bold text-xl shadow-lg hover:bg-[#B08D20] transition-transform active:scale-95"
                    >
                        إتمام الطلب
                    </button>
                    <p className="text-center text-xs text-[#5A3B2A] mt-4">
                        بمتابعة الطلب فأنت توافق على شروط الخدمة وسياسة الخصوصية
                    </p>
                </div>
            </div>

            {/* List */}
            <div className="lg:w-2/3 order-1 lg:order-2 space-y-6">
                {items.map(item => (
                    <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-[#E9D8B4] flex items-center gap-6">
                        <button 
                            onClick={() => onRemove(item.id)}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <Trash2 size={20} />
                        </button>
                        
                        <div className="flex-grow text-right pr-6 border-r border-[#F7EFE0]">
                            <h4 className="text-lg font-bold text-[#3B2A1E] mb-1">{item.name}</h4>
                            <div className="text-[#C9A227] font-bold">{item.price} جنيه</div>
                        </div>

                        <div className="flex items-center border border-[#E9D8B4] rounded-lg overflow-hidden">
                            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-gray-100 font-bold">+</button>
                            <span className="px-4 font-bold">{item.quantity}</span>
                            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-gray-100 font-bold">-</button>
                        </div>

                        <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                    </div>
                ))}
                
                <div className="text-right pt-6">
                    <button className="text-[#C9A227] font-bold flex items-center gap-2 justify-end ml-auto">
                        متابعة التسوق <ArrowLeft size={20} />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
