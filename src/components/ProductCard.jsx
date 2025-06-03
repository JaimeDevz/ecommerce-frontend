import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border border-[#6f4e37] text-center rounded-xl product p-4 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.03] ">
      <Link to={`/product/${product.id}`} className="group block">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-3 transition-transform duration-300 group-hover:scale-105"
        />
        <h2 className="text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300 underline underline-offset-4">
          {product.title}
        </h2>

        <p className="text-sm my-2 line-clamp-3">{product.description}</p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-base font-medium text-blue-500 group-hover:underline group-hover:underline-offset-2 transition">
            View Product
          </p>
          <p className="text-lg font-bold">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
