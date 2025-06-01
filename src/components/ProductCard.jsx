import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border text-center rounded-xl p-4 product hover:shadow-lg transition-all duration-300 ease-in-out">
      {" "}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full min-h-fit object-cover mb-2 rounded"
        />
        <h2 className="text-lg underline underline-offset-4  font-semibold">
          {product.title}
        </h2>

        <p className="text-sm text-center my-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 transition">
            View Product
          </p>
          <p className="text-xl font-semibold">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
