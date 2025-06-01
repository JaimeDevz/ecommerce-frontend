import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dark = useSelector((state) => state.theme.dark);

  const product = products.find((item) => item.id === Number(id));
  if (!product) return <p>Product not found.</p>;

  const handleAddToCart = () => {
    dispatch(
      addToCart({ id: product.id, title: product.title, price: product.price })
    );
    navigate("/cart");
  };

  return (
    <div
      className={`p-6 max-w-md mx-auto top-0 left-0 w-full h-full ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="mb-4">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
