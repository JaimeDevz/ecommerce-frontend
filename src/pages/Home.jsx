import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Home = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const products = containerRef.current.querySelectorAll(".product");
    gsap.fromTo(
      products,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="p-6" ref={containerRef}>
      <h1 className="text-2xl font-bold mb-4">🛍️ Shop Now</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
