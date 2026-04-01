"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.55)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"]);
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ["1px solid rgba(255, 255, 255, 0)", "1px solid rgba(255, 255, 255, 0.14)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur, borderBottom }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 md:px-12 md:py-6"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center relative overflow-hidden">
          {/* Custom SVG Icon (Abstract Lightning/Banana) */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
         Nadux
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#" className="hover:text-orange-500 transition-colors">Products</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Our Process</a>
        <a href="#" className="hover:text-orange-500 transition-colors">About</a>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-orange-500 text-white rounded-full font-bold text-sm shadow-[0_12px_30px_rgba(249,115,22,0.35)] hover:shadow-[0_14px_36px_rgba(249,115,22,0.5)] transition-all flex items-center gap-2"
      >
        <span>Order Now</span>
        <ShoppingCart className="w-4 h-4" />
      </motion.button>
    </motion.nav>
  );
}
