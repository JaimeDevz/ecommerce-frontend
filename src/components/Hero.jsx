import React, { use } from "react";
import HeroImg from "../assets/image (12).jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      duration: 3,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="" ref={heroRef}>
      <img src={HeroImg} alt="Hero" className="mb-20 w-full h-auto" />
      <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
      <p className="mt-4">Discover the best Coffee at unbeatable prices.</p>
    </div>
  );
};

export default Hero;
