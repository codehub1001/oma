import React, { useState, useEffect } from "react";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import CartSummary from "../components/CartSummary";
import { ShoppingCart } from "lucide-react";

export default function Store() {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const [showMobileCart, setShowMobileCart] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 relative">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-extrabold text-pink-700">
          Shop Our Styles
        </h2>

        <div className="hidden md:block relative">
          <button
            onClick={() => setShowMobileCart(!showMobileCart)}
            className="text-pink-700 hover:text-pink-900 transition"
            aria-label="Toggle Cart"
          >
            <ShoppingCart size={28} />
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
                {totalQty}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={addToCart}
              onImageClick={() => setActiveImage(product.image)}
            />
          ))}
        </div>

        <div className="hidden md:block">
          <CartSummary
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>

      <div className="md:hidden sticky bottom-4 z-50 flex justify-end pointer-events-none">
        <button
          onClick={() => setShowMobileCart(!showMobileCart)}
          className="bg-pink-600 text-white rounded-full p-4 shadow-lg hover:bg-pink-700 transition relative pointer-events-auto mr-4"
          aria-label="Toggle cart"
        >
          <ShoppingCart size={24} />
          {totalQty > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-pink-700 text-xs font-bold px-2 py-0.5 rounded-full shadow">
              {totalQty}
            </span>
          )}
        </button>
      </div>

      {showMobileCart && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-50 p-4 max-h-[70vh] overflow-y-auto animate-slideUp rounded-t-2xl">
          <CartSummary
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        </div>
      )}

      {/* Fullscreen Image Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative">
            <img
              src={activeImage}
              alt="Product Fullscreen"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow hover:bg-gray-100"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
