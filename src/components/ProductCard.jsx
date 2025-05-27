import React from "react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-pink-600 font-bold">₦{product.price.toLocaleString()}</p>
        <button
          onClick={() => onAdd(product)}
          className="mt-2 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
