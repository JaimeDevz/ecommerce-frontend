import { useSelector, useDispatch } from "react-redux";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
      x: -40,
      scale: 0.95,
      stagger: 0.15,
      duration: 0.5,
      ease: "power3.out",
    });
  }, []);

  if (items.length === 0) {
    return (
      <p className="p-6 text-center text-gray-600 text-lg animate-fadeIn">
        Your cart is empty.
      </p>
    );
  }

  return (
    <div className="p-4 sm:p-6 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Your Cart
      </h1>

      <ul className="space-y-4">
        {items.map(({ id, title, price, quantity }) => (
          <li
            key={id}
            className="cart-item border border-gray-200 rounded-xl p-4 shadow-md bg-white dark:bg-gray-800"
          >
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
              <div>
                <h2 className="text-lg font-semibold dark:text-white">
                  {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  ${price} x {quantity} ={" "}
                  <span className="font-medium">
                    ${(price * quantity).toFixed(2)}
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-2 mt-2 sm:mt-0">
                <button
                  className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                  onClick={() => dispatch(decreaseQty(id))}
                >
                  ➖
                </button>
                <button
                  className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                  onClick={() => dispatch(increaseQty(id))}
                >
                  ➕
                </button>
                <button
                  className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
                  onClick={() => dispatch(removeFromCart(id))}
                >
                  🗑️ Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
