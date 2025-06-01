import React, { use } from "react";
import HeroImg from "../assets/image (12).jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import StaggerText from "../components/Stagger";

const Hero = () => {
  const container = useRef();
  const imageRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative h-screen w-full object-cover overflow-hidden"
    >
      <img
        src={HeroImg}
        alt="Hero"
        className=" absolute inset-0 w-full h-full object-cover"
        ref={imageRef}
      />

      <div className="relative z-10 flex items-center justify-center h-full bg-white/10 backdrop-blur-sm shadow-lg text-center">
        <div>
          <StaggerText
            text="Solstice Brews"
            className="text-white text-shadow-lg text-shadow-black text-4xl md:text-6xl font-bold mb-4"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
