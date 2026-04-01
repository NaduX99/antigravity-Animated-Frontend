"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <section className="min-h-screen py-24 px-6 md:px-12 flex items-center bg-black/30 backdrop-blur-xl border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: product.themeColor }}>
            The Details
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            {product.detailsSection.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
            {product.detailsSection.description}
          </p>
          
          <div className="pt-8 grid grid-cols-3 gap-6">
            {product.stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl font-bold text-white">{stat.val}</div>
                <div className="text-sm font-medium text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="relative h-[600px] w-full rounded-[3rem] overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center p-12 shadow-2xl"
        >
          {/* Abstract background representation of the juice */}
          <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ background: product.gradient }} />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-[120px] rounded-full opacity-60 pointer-events-none" 
            style={{ background: product.themeColor }} 
          />
          
          <div className="relative z-10 text-center space-y-6 flex flex-col items-center justify-center w-full h-full border border-white/5 rounded-[2rem] bg-white/5 backdrop-blur-sm">
             <div className="text-6xl md:text-8xl font-black text-white/90 drop-shadow-2xl tracking-tighter">
               {product.stats[2].val}
             </div>
             <div className="text-xl md:text-3xl font-light text-white/80 uppercase tracking-[0.2em]">
               {product.stats[2].label}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
