"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "@/data/products";
import { useRef } from "react";

export default function FreshnessSection({ product }: { product: Product }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  
  return (
    <section ref={containerRef} className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden border-t border-white/5 bg-black/50 backdrop-blur-3xl z-20">
      {/* Parallax Background Text */}
      <motion.div 
         style={{ y: y1 }}
         className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-0 select-none"
      >
        <span className="text-[12rem] md:text-[25rem] font-black whitespace-nowrap text-white">
           FRESHNESS
        </span>
      </motion.div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-semibold tracking-widest uppercase mb-8" style={{ color: product.themeColor }}>
             Pure Process
          </div>
          <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            {product.freshnessSection.title}
          </h3>
        </motion.div>
        
        <motion.p 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className="text-2xl md:text-4xl text-white/80 font-light leading-relaxed max-w-4xl mx-auto text-balance"
        >
          {product.freshnessSection.description}
        </motion.p>
      </div>
    </section>
  );
}
