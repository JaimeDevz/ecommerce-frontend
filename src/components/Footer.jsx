import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Footer() {
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.from(footerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="py-10 px-6 mt-20 rounded-t-3xl border-t-2 border-[#6f4e37] shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl font-semibold">Solstice Brews</h2>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Solstice Brews. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
