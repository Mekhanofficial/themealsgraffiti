import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Rocket } from "lucide-react";

export default function ScrollToTopButton() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    setShowScrollToTop(window.scrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showScrollToTop && (
        <div className="fixed right-4 lg:right-6 bottom-6 z-50">
          <motion.button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-14 h-14 flex items-center justify-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.8 }}
            transition={{ type: "spring", damping: 20 }}
          >
            {/* Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-md opacity-30"
              animate={{ 
                scale: isHovered ? [1, 1.1, 1] : 1,
                opacity: isHovered ? [0.3, 0.5, 0.3] : 0.3
              }}
              transition={{ 
                duration: isHovered ? 2 : 0,
                repeat: isHovered ? Infinity : 0 
              }}
            />

            {/* Main Button */}
            <div className="relative w-full h-full bg-gradient-to-br from-orange-500 to-amber-500 rounded-full shadow-lg overflow-hidden">
              {/* Button Content */}
              <div className="absolute inset-1 bg-gradient-to-br from-zinc-900 to-black rounded-full flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <ChevronUp className="w-5 h-5 text-white transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2" />
                  <Rocket className="absolute w-5 h-5 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-12" />
                </div>
              </div>

              {/* Particles on Hover */}
              {isHovered && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      initial={{ 
                        x: 14, 
                        y: 14, 
                        opacity: 0.8,
                        scale: 0 
                      }}
                      animate={{ 
                        x: Math.cos((i * 120 * Math.PI) / 180) * 30 + 14,
                        y: Math.sin((i * 120 * Math.PI) / 180) * 30 + 14,
                        opacity: 0,
                        scale: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 0.8,
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </>
              )}
            </div>

     

            {/* Pulse Effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-orange-500/20 pointer-events-none"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}