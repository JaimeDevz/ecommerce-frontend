import { useSelector } from "react-redux";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useDispatch } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../features/cart/cartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useGSAP(() => {
    gsap.from(".cart-item", {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [items]);

  if (items.length === 0) {
    return <p className="p-6 text-center text-gray-600">Your cart is empty.</p>;
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul>
        {items.map(({ id, title, price, quantity }) => (
          <li key={id} className="cart-item border rounded p-4 mb-3">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold">{title}</h2>
                <p>
                  ${price} x {quantity} = ${(price * quantity).toFixed(2)}
                </p>
                <div className="flex gap-2 mt-2">
                  <button
                    className="px-2 bg-gray-200 rounded"
                    onClick={() => dispatch(decreaseQty(id))}
                  >
                    ➖
                  </button>
                  <button
                    className="px-2 bg-gray-200 rounded"
                    onClick={() => dispatch(increaseQty(id))}
                  >
                    ➕
                  </button>
                  <button
                    className="px-2 bg-red-500 text-white rounded"
                    onClick={() => dispatch(removeFromCart(id))}
                  >
                    🗑️ Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
