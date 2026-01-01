import { motion } from "framer-motion";
import { ChefHat, Leaf, Sparkles, Palette } from "lucide-react";
import fx14 from "../../pictures/fx14.jpg";
import bg from "../../pictures/bg.jpg";
import rotatepx from "../../pictures/rotatepx.png";

// Import your smaller images (add these to your pictures folder)
import ingredient1 from "../../pictures/a.JPG";
import ingredient2 from "../../pictures/b.JPG";
import ingredient3 from "../../pictures/c.JPG";
import ingredient4 from "../../pictures/a.JPG";

export default function FeaturesSection() {
  const features = [
    {
      title: "Passionate Chef",
      text: "Our chefs pour their heart into every dish, crafting flavors that leave you craving more.",
      Icon: ChefHat,
      color: "text-orange-400",
      iconColor: "text-orange-400",
    },
    {
      title: "100% Fresh Food",
      text: "Only the freshest ingredients make it to your plate—because you deserve the best.",
      Icon: Leaf,
      color: "text-emerald-400",
      iconColor: "text-emerald-400",
    },
    {
      title: "Memorable Ambience",
      text: "Step into a vibe that's as unforgettable as the food. Perfect for every occasion.",
      Icon: Sparkles,
      color: "text-amber-300",
      iconColor: "text-amber-300",
    },
    {
      title: "Flavor Masterpiece",
      text: "Discover our signature creations—unique, bold, and made to wow your taste buds.",
      Icon: Palette,
      color: "text-rose-400",
      iconColor: "text-rose-400",
    },
  ];

  // Smaller images for orbiting effect
  const orbitingImages = [
    { src: ingredient1, alt: "Fresh Herb", delay: 0, size: "w-16 h-16 sm:w-20 sm:h-20" },
    { src: ingredient2, alt: "Spice", delay: 0.5, size: "w-14 h-14 sm:w-16 sm:h-16" },
    { src: ingredient3, alt: "Vegetable", delay: 1, size: "w-20 h-20 sm:w-24 sm:h-24" },
    { src: ingredient4, alt: "Garnish", delay: 1.5, size: "w-12 h-12 sm:w-16 sm:h-16" },
  ];

  // Particle effect data
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    angle: (i * 30 * Math.PI) / 180,
    delay: i * 0.1,
  }));

  return (
    <motion.div
      className="relative flex flex-col bg-gradient-to-b from-zinc-900 to-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
            initial={{
              x: Math.cos(particle.angle) * 100 + 50 + "%",
              y: Math.sin(particle.angle) * 100 + 50 + "%",
              opacity: 0,
            }}
            animate={{
              x: [
                Math.cos(particle.angle) * 100 + 50 + "%",
                Math.cos(particle.angle + Math.PI) * 100 + 50 + "%",
              ],
              y: [
                Math.sin(particle.angle) * 100 + 50 + "%",
                Math.sin(particle.angle + Math.PI) * 100 + 50 + "%",
              ],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Image Section - 50% width on desktop */}
        <motion.div
          className="relative h-[400px] sm:h-[500px] lg:h-auto lg:w-1/2 overflow-hidden group"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            className="h-full w-full object-cover"
            src={fx14}
            alt="Gourmet Dish Presentation"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </motion.div>

        {/* Right Content Section - 50% width on desktop */}
        <motion.div
          className="relative p-6 sm:p-8 lg:p-12 w-full lg:w-1/2 lg:min-h-screen flex flex-col"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Header Text - Always at the top */}
          <motion.div
            className="text-center lg:text-center mb-8 lg:mb-12"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h1 className="text-orange-500 text-xl sm:text-2xl lg:text-3xl mb-3 lg:mb-4 font-mono tracking-widest">
              QUALITY & BALANCE
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight">
              An Extraordinary <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Culinary Experience
              </span>
            </h2>
          </motion.div>

          {/* Centered Orbital System Container */}
          <div className="flex-1 flex items-center justify-center relative my-8 lg:my-0">
            <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
              
              {/* Orbital Rings */}
              <motion.div
                className="absolute w-full h-full rounded-full border border-orange-500/20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border border-amber-400/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Orbiting Smaller Images */}
              {orbitingImages.map((img, index) => {
                const radius = 140; // Base radius for mobile
                const smRadius = 200; // Radius for small screens
                const lgRadius = 250; // Radius for large screens
                
                // Calculate positions for each screen size
                const baseX = Math.cos((index * 90 * Math.PI) / 180) * radius;
                const baseY = Math.sin((index * 90 * Math.PI) / 180) * radius;
                const smX = Math.cos((index * 90 * Math.PI) / 180) * smRadius;
                const smY = Math.sin((index * 90 * Math.PI) / 180) * smRadius;
                const lgX = Math.cos((index * 90 * Math.PI) / 180) * lgRadius;
                const lgY = Math.sin((index * 90 * Math.PI) / 180) * lgRadius;
                
                // Create responsive transform strings
                const baseTransform = `translate(${baseX}px, ${baseY}px)`;
                const smTransform = `translate(${smX}px, ${smY}px)`;
                const lgTransform = `translate(${lgX}px, ${lgY}px)`;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute z-10"
                    style={{
                      transform: baseTransform,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0.8, 1, 0.8],
                      opacity: [0.5, 1, 0.5],
                      x: [baseX, -baseX],
                      y: [baseY, -baseY],
                    }}
                    transition={{
                      duration: 8,
                      delay: img.delay,
                      repeat: Infinity,
                      ease: "linear",
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <motion.div
                      className={`relative ${img.size} rounded-full overflow-hidden border-2 border-amber-400/50 shadow-lg`}
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={img.src}
                        alt={img.alt}
                      />
                      {/* Orbital Trail */}
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent rounded-full"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Main Rotating Image with Glow */}
              <motion.div
                className="relative z-20"
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                transition={{
                  duration: 2,
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                }}
                viewport={{ once: true }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <img
                  className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-amber-500/30 shadow-2xl"
                  src={rotatepx}
                  alt="Culinary Centerpiece"
                />
              </motion.div>
            </div>
          </div>

          {/* Features Grid - Only show on mobile and tablet, hidden on desktop */}
          <motion.div
            className="mt-8 lg:mt-12 lg:hidden"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.3, delayChildren: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => {
                const Icon = feature.Icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Feature Icon */}
                    <motion.div
                      className={`mb-3 sm:mb-4 ${feature.iconColor}`}
                      animate={{ rotateY: 360 }}
                      transition={{
                        duration: 2,
                        delay: index * 0.5,
                        repeat: Infinity,
                        repeatDelay: 5,
                      }}
                    >
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </motion.div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-orange-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed">
                      {feature.text}
                    </p>
                    
                    {/* Hover Indicator */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}