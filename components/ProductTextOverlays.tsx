"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { Product } from "@/data/products";

interface ProductTextOverlaysProps {
  product: Product;
  scrollYProgress: MotionValue<number>;
}

export default function ProductTextOverlays({ product, scrollYProgress }: ProductTextOverlaysProps) {
  // Section 1 Fades (Initial Hero)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, -50, -100]);

  // Section 2 Fades (About Fruit)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [50, 0, -50]);

  // Section 3 Fades (Revitalization)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [50, 0, -50]);

  // Section 4 Fades (Ending)
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [50, 0, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Section 1: Hero */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
      >
        <h1 className="text-7xl md:text-9xl font-black mb-4 uppercase tracking-tighter">
          {product.section1.title}
        </h1>
        <p className="text-xl md:text-2xl font-light text-white/60">
          {product.section1.subtitle}
        </p>
      </motion.div>

      {/* Section 2: About Fruit */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl leading-tight">
          {product.section2.title}
        </h2>
        <p className="text-lg md:text-xl font-medium text-white/70 max-w-2xl">
          {product.section2.subtitle}
        </p>
      </motion.div>

      {/* Section 3: Revitalization */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl leading-tight">
          {product.section3.title}
        </h2>
        <p className="text-lg md:text-xl font-medium text-white/70 max-w-2xl">
          {product.section3.subtitle}
        </p>
      </motion.div>

      {/* Section 4: Ending */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-auto"
      >
        <h2 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
          {product.section4.title}
        </h2>
        <p className="text-xl md:text-2xl font-light text-white/60">
          {product.section4.subtitle}
        </p>
        
        {/* Features Chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {product.features.map((feature, i) => (
            <span key={i} className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold border border-white/10 uppercase tracking-widest">
              {feature}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
