import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const StaggerText = ({ text, className = "", delay = 0.5 }) => {
  const container = useRef();

  useGSAP(
    () => {
      const q = gsap.utils.selector(container);
      gsap.from(q(".letter"), {
        y: 40,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
        delay,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className={`${className} inline-block`}>
      {text.split("").map((char, i) => (
        <span key={i} className="letter inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default StaggerText;
