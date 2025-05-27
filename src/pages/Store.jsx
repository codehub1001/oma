import React, { useState } from "react";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import CartSummary from "../components/CartSummary";

export default function Store() {
  const [cart, setCart] = useState([]);

  // Add product or increase qty if already in cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        // update qty
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        // add new item with qty 1
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  // Update quantity of a cart item
  const updateQuantity = (id, qty) => {
    if (qty < 1) return; // prevent invalid quantities
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  // Remove item from cart by id
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold text-center text-pink-700 mb-12">
        Shop Our Styles
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} />
          ))}
        </div>

        <CartSummary
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      </div>
    </section>
  );
}
