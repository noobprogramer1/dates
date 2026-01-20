
import { Product } from './types';

export const COLORS = {
  sand: '#E9D8B4',
  offWhite: '#FFF8E8',
  dateBrown: '#3B2A1E',
  chocolateBrown: '#5A3B2A',
  palmGreen: '#2F6B4F',
  gold: '#C9A227',
};

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'كرتونة سكري ملكي - 5 كيلو',
    category: 'سكري',
    description: 'تمر سكري مفتل درجة أولى، حبات كبيرة ومنتقاة بعناية. تعبئة فاخرة مناسبة للهدايا والبيوت.',
    price: 450,
    weight: '5 كيلو',
    image: 'https://picsum.photos/seed/dates1/600/600',
    isBestSeller: true,
    features: ['تمر درجة أولى', 'تعبئة ممتازة', 'توصيل خلال 48 ساعة']
  },
  {
    id: '2',
    name: 'مجدول جامبو فاخر - 1 كيلو',
    category: 'مجدول',
    description: 'أفخم أنواع المجدول المصري، حجم جامبو، ملمس طري وطعم لا يقاوم.',
    price: 180,
    weight: '1 كيلو',
    image: 'https://picsum.photos/seed/dates2/600/600',
    features: ['حجم جامبو', 'مصدر مضمون', 'طعم غني']
  },
  {
    id: '3',
    name: 'عجوة المدينة الفاخرة',
    category: 'عجوة',
    description: 'عجوة منتقاة، مفرومة بدقة عالية وبدون أي إضافات صناعية.',
    price: 120,
    weight: '1 كيلو',
    image: 'https://picsum.photos/seed/dates3/600/600',
    features: ['بدون إضافات', 'مثالية للمخبوزات', 'قيمة غذائية عالية']
  },
  {
    id: '4',
    name: 'مجدول درجة أولى - 5 كيلو',
    category: 'مجدول',
    description: 'كرتونة التوفير العائلية من المجدول المصري عالي الجودة.',
    price: 750,
    weight: '5 كيلو',
    image: 'https://picsum.photos/seed/dates4/600/600',
    features: ['سعر توفيري', 'مناسب للمناسبات', 'تغليف محكم']
  }
];

export const WHATSAPP_NUMBER = "201000000000"; // Placeholder
