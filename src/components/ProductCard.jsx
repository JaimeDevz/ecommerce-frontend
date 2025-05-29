import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 product hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover mb-2 rounded"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="text-blue-500 mt-2 inline-block"
      >
        View Product
      </Link>
    </div>
  );
}
