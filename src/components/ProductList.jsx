import React, { useRef } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductList = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const productEls = containerRef.current.querySelectorAll(".product");
    gsap.fromTo(
      productEls,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="p-6" ref={containerRef}>
      <h1 className="text-2xl text-center font-bold mb-10">Coffee's</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
