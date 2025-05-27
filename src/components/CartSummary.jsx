import React, { useMemo } from "react";
import { Trash2 } from "lucide-react";

function CartItem({ item, onQtyChange, onRemove }) {
  const handleChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (val >= 1) onQtyChange(item.id, val);
  };

  return (
    <li
      key={item.id}
      className="flex items-center justify-between text-sm"
      aria-label={`${item.name}, quantity ${item.qty}`}
    >
      <div>
        <p className="font-semibold">{item.name}</p>
        <p className="text-gray-600">₦{item.price.toLocaleString()} × {item.qty}</p>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="number"
          min="1"
          value={item.qty}
          onChange={handleChange}
          className="w-16 px-2 py-1 rounded-md border text-center"
          aria-label={`Change quantity for ${item.name}`}
        />
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700"
          aria-label={`Remove ${item.name} from cart`}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
}

export default function CartSummary({ cart, updateQuantity, removeFromCart }) {
  // Memoize total price calculation
  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [cart]);

  // Memoize WhatsApp message to avoid recalculating every render
  const whatsappMessage = useMemo(() => {
    if (cart.length === 0) return "";

    return encodeURIComponent(
      `Hello Oma Glamour, I’d like to order:\n\n${cart
        .map(
          (item, i) =>
            `${i + 1}. ${item.name} (x${item.qty}) - ₦${(
              item.price * item.qty
            ).toLocaleString()}`
        )
        .join("\n")}\n\nTotal: ₦${total.toLocaleString()}`
    );
  }, [cart, total]);

  return (
    <div className="bg-gray-100 p-6 rounded-xl h-fit">
      <h4 className="text-xl font-bold mb-4">Your Cart</h4>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQtyChange={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </ul>

          <p className="mt-4 font-semibold text-lg">
            Total: ₦{total.toLocaleString()}
          </p>

          <a
            href={`https://wa.me/2347040884968?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-full transition"
            aria-label="Order via WhatsApp"
          >
            Order via WhatsApp
          </a>
        </>
      )}
    </div>
  );
}
