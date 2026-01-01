import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MenuItemCard({ item, index, addToCart }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const handleAddToCart = (e) => {
    setIsAnimating(true);
    
    // Generate unique key for each animation
    setAnimationKey(prev => prev + 1);
    
    // Add to cart after a short delay
    setTimeout(() => {
      addToCart(item);
      // Reset animation state after completion
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 100);
  };

  return (
    <>
      {/* Flying Number Animation */}
      <AnimatePresence>
        {isAnimating && (
          <>
            {/* Create multiple number elements for a better effect */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`${animationKey}-${i}`}
                className="fixed z-[100] pointer-events-none"
                initial={{
                  x: 0,
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  rotate: 0,
                }}
                animate={{
                  x: [-30 + Math.random() * 60, -400], // Random start, fly left to cart
                  y: [-50, -50 - Math.random() * 100], // Fly upward with random variation
                  scale: [1, 0.8, 0.6],
                  opacity: [1, 1, 0],
                  rotate: [0, 360],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#f97316',
                  textShadow: '0 2px 10px rgba(249, 115, 22, 0.8)',
                }}
              >
                +1
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Menu Item Card */}
      <motion.div
        className="group relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 border border-zinc-800 hover:border-orange-500/30 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover Effect Background */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}

        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Image Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4">
            <motion.div
              className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              {item.price}
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
              {item.name}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Add to Cart Button */}
          <motion.button
            onClick={handleAddToCart}
            disabled={isAnimating}
            className="w-full relative overflow-hidden group/btn disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Button Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-black rounded-lg group-hover/btn:from-orange-500 group-hover/btn:to-amber-500 transition-all duration-300" />
            
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Button Content */}
            <div className="relative z-10 flex items-center justify-center gap-2 py-3">
              <span className="text-white font-medium">
                {isAnimating ? "✓ Added!" : "Add to Order"}
              </span>
              <motion.svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={isAnimating ? { rotate: 360 } : {}}
                transition={{ duration: 0.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </motion.svg>
            </div>
            
            {/* Button Click Ripple Effect */}
            {isAnimating && (
              <motion.div
                className="absolute inset-0 rounded-lg"
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full h-full bg-gradient-to-r from-orange-400 to-amber-400" />
              </motion.div>
            )}
            
            {/* Button Pulse Effect */}
            {isAnimating && (
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-orange-500"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            )}
          </motion.button>
          
          {/* Button Particles Effect */}
          {isAnimating && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-orange-400 rounded-full"
                  initial={{
                    x: "50%",
                    y: "100%",
                    opacity: 1,
                    scale: 1,
                  }}
                  animate={{
                    x: `${Math.random() * 100}%`,
                    y: `-${50 + Math.random() * 100}%`,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}