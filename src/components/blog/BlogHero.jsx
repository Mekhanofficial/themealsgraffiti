import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";
import dx3 from "../../pictures/dx3.jpg";

export default function BlogHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={dx3}
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0,
              }}
              animate={{
                x: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + 50 + "%",
                  Math.random() * 100 + "%",
                ],
                y: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + 50 + "%",
                  Math.random() * 100 + "%",
                ],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 5,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-500/30 mb-6">
            <ChefHat className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-mono text-sm tracking-widest">
              CULINARY INSIGHTS
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Blog</span>
          </h1>
          
          <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Explore stories, recipes, and behind-the-scenes moments from our culinary journey
          </p>
          
          <div className="flex items-center justify-center gap-3 text-orange-500 text-lg">
            <Link 
              to="/" 
              className="hover:text-orange-400 transition-colors duration-300 hover:underline underline-offset-4"
            >
              Home
            </Link>
            <span className="text-white">/</span>
            <span className="text-white font-medium">Pages</span>
            <span className="text-white">/</span>
            <span className="text-white font-medium">Blog</span>
          </div>
        </motion.div>
      </div>

      {/* Optional: Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-orange-400/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-orange-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}