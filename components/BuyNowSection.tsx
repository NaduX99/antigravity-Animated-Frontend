"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { ShoppingBag, Star, ShieldCheck, Truck } from "lucide-react";

export default function BuyNowSection({ product }: { product: Product }) {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-black/80 backdrop-blur-3xl relative z-20 border-t border-white/5">
      <div className="max-w-5xl mx-auto space-y-16 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: product.themeColor }}>
             Secure Yours Today
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
             Experience {product.name}
          </h2>
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto">
             Delivered straight to your door, perfectly chilled.
          </p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-16 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="text-left space-y-4">
            <div className="text-7xl font-black text-white tracking-tighter">
               {product.buyNowSection.price}
            </div>
            <div className="text-xl text-white/60 font-medium tracking-wide">
               {product.buyNowSection.unit}
            </div>
            
            <div className="flex flex-wrap gap-3 pt-6">
              {product.buyNowSection.processingParams.map(param => (
                <span key={param} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold tracking-wider text-white/80">
                  {param}
                </span>
              ))}
            </div>
          </div>

          <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-full md:w-auto px-12 py-6 rounded-full text-2xl font-bold text-black shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-shadow hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] flex-shrink-0"
             style={{ background: product.gradient }}
          >
            <span className="flex items-center gap-4 justify-center">
               <ShoppingBag size={28} /> Add to Cart
            </span>
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto pt-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-6 items-start"
          >
             <div className="p-4 bg-white/5 rounded-2xl text-white/80 shrink-0 border border-white/10">
               <Truck size={32} />
             </div>
             <div>
                <h4 className="text-white font-bold text-xl mb-2">Fast Delivery</h4>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                   {product.buyNowSection.deliveryPromise}
                </p>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex gap-6 items-start"
          >
             <div className="p-4 bg-white/5 rounded-2xl text-white/80 shrink-0 border border-white/10">
               <ShieldCheck size={32} />
             </div>
             <div>
                <h4 className="text-white font-bold text-xl mb-2">Our Guarantee</h4>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                   {product.buyNowSection.returnPolicy}
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
