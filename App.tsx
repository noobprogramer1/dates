
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Wholesale from './pages/Wholesale';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import { Product, CartItem } from './types';
import { SAMPLE_PRODUCTS } from './constants';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartBump, setCartBump] = useState(false);

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activePage]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    setCartBump(true);
    setTimeout(() => setCartBump(false), 500);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const viewDetails = (product: Product) => {
    setSelectedProduct(product);
    setActivePage('product-detail');
  };

  const renderPageContent = () => {
    switch (activePage) {
      case 'home':
        return <Home 
          onAddToCart={addToCart} 
          onViewDetails={viewDetails} 
          setActivePage={setActivePage} 
        />;
      case 'shop':
        return <Shop 
          onAddToCart={addToCart} 
          onViewDetails={viewDetails} 
        />;
      case 'wholesale':
        return <Wholesale />;
      case 'about':
        return <About />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      case 'cart':
        return <Cart 
          items={cart} 
          onRemove={removeFromCart} 
          onUpdateQuantity={updateQuantity} 
          onCheckout={() => alert('تم استلام طلبك! سيقوم فريقنا بالتواصل معك لتأكيد البيانات.')}
        />;
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onAddToCart={addToCart} 
            setActivePage={setActivePage}
          />
        ) : <Home onAddToCart={addToCart} onViewDetails={viewDetails} setActivePage={setActivePage} />;
      default:
        return <Home onAddToCart={addToCart} onViewDetails={viewDetails} setActivePage={setActivePage} />;
    }
  };

  return (
    <Layout 
        activePage={activePage} 
        setActivePage={setActivePage} 
        cartCount={cart.reduce((acc, curr) => acc + curr.quantity, 0)}
        cartBump={cartBump}
    >
      {/* 
        This wrapper is the heart of the cinematic experience. 
        The key={activePage} ensures that React re-mounts this div whenever 
        the page changes, triggering the 'animate-page-reveal' shutter effect 
        from our CSS.
      */}
      <div key={activePage} className="animate-page-reveal overflow-hidden">
        {renderPageContent()}
      </div>
    </Layout>
  );
};

export default App;
