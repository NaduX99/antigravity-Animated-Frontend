"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";
import { Product } from "@/data/products";
import ProductTextOverlays from "@/components/ProductTextOverlays";

interface ProductBottleScrollProps {
  product: Product;
}

export default function ProductBottleScroll({ product }: ProductBottleScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Frame count from spec
  const frameCount = product.frameCount || 120;
  
  // Use scroll progress (0 to 1) over the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map progress to frame index (0-119)
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    // Reset loading state for new product
    setIsLoaded(false);
    setImages([]);

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Note: Using .jpg because provided assets are jpg. 
      // If user replaces with webp, they should update this.
      img.src = `${product.folderPath}/${i}.jpg`; 
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [product.folderPath, frameCount]);

  // Draw to canvas
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx || images.length < frameCount) return;

      // Clamp index to prevent overshooting from spring bounce
      const rawIndex = Math.floor(frameIndex.get());
      const currentIndex = Math.max(0, Math.min(frameCount - 1, rawIndex));
      
      const img = images[currentIndex];
      if (!img) return;

      // Use dynamic viewport height
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      
      // Handle high DPI displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvasWidth * dpr;
      canvas.height = canvasHeight * dpr;
      ctx.scale(dpr, dpr);

      const imgWidth = img.width;
      const imgHeight = img.height;
      
      // Orientation-aware scaling (filling 95% of available height/width)
      const ratio = Math.min(canvasWidth / imgWidth, canvasHeight / imgHeight) * 0.95;
      
      const nw = imgWidth * ratio;
      const nh = imgHeight * ratio;
      const nx = (canvasWidth - nw) / 2;
      const ny = (canvasHeight - nh) / 2;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, nx, ny, nw, nh);
    };

    const unsubscribe = frameIndex.on("change", () => {
      requestAnimationFrame(render);
    });

    render();
    window.addEventListener("resize", render);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", render);
    };
  }, [images, frameIndex, isLoaded]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 left-0 w-full h-[100dvh] overflow-hidden flex items-center justify-center bg-transparent pointer-events-none">
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
        
        {/* Loading State Overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-white font-medium">Brewing Freshness...</p>
            </div>
          </div>
        )}
        
        <ProductTextOverlays product={product} scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
