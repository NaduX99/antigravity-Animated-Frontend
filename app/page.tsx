"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import ProductDetails from "@/components/ProductDetails";
import FreshnessSection from "@/components/FreshnessSection";
import BuyNowSection from "@/components/BuyNowSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const product = products[currentIndex];

  // Scroll Reset on index change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <main className="min-h-screen text-white transition-colors duration-700" style={{ background: product.gradient }}>
      <Navbar />

      {/* Flavor Navigation Arrows */}
      <div className="fixed inset-y-0 left-4 md:left-8 z-10 flex items-center">
        <NavButton onClick={handlePrev} icon={<ChevronLeft />} label="Previous Flavor" />
      </div>
      <div className="fixed inset-y-0 right-4 md:right-8 z-10 flex items-center">
        <NavButton onClick={handleNext} icon={<ChevronRight />} label="Next Flavor" />
      </div>

      {/* Bottom Flavor Switcher */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-10 bg-black/35 backdrop-blur-2xl border border-white/15 rounded-full px-4 py-2 flex items-center gap-2 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
        {products.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setCurrentIndex(i)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              currentIndex === i ? "bg-white text-black scale-110 shadow-[0_8px_18px_rgba(255,255,255,0.25)]" : "text-white/70 hover:text-white"
            }`}
          >
            {p.name.split(" ")[1] || p.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Main Experience: Sticky Canvas + Text Overlays */}
          <ProductBottleScroll product={product} />
          
          <ProductDetails product={product} />
          <FreshnessSection product={product} />
          <BuyNowSection product={product} />
        </motion.div>
      </AnimatePresence>
      
      <Footer />
    </main>
  );
}

function NavButton({ onClick, icon, label }: { onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      aria-label={label}
      className="p-4 bg-white/10 backdrop-blur-2xl border border-white/15 rounded-full text-white shadow-[0_16px_36px_rgba(0,0,0,0.3)] transition-all"
    >
      {icon}
    </motion.button>
  );
}
