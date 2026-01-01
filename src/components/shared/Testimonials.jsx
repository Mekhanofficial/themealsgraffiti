import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles, Award, Heart } from "lucide-react";
import bg from "../../pictures/bg.jpg";
import dp1 from "../../pictures/dp1.jpg";
import dp2 from "../../pictures/dp2.jpg";
import dp3 from "../../pictures/dp3.jpg";
import dp4 from "../../pictures/dp4.jpg";
import dp5 from "../../pictures/dp5.jpg";
import dp6 from "../../pictures/dp6.jpg";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);
  const autoSlideRef = useRef(null);

  const testimonials = [
    {
      text: "The Mealsgraffiti is my go-to place for celebrating special occasions. Their food is always delightful and full of flavor.",
      name: "Michael Williamson",
      position: "Food Critic, Local Eats",
      image: dp1,
      rating: 5,
      highlight: "Best Dining Experience",
      color: "from-orange-500/20 to-amber-500/20",
    },
    {
      text: "The dining experience at The Mealsgraffiti is unmatched! The chefs truly outdo themselves with every dish.",
      name: "David Johnson",
      position: "Restaurant Owner, Taste Haven",
      image: dp2,
      rating: 5,
      highlight: "Exceptional Quality",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      text: "I love the cozy atmosphere and the excellent service at The Mealsgraffiti. Perfect for a relaxed evening with amazing food.",
      name: "Sarah Doe",
      position: "Chef, Gourmet Bistro",
      image: dp3,
      rating: 4,
      highlight: "Perfect Ambience",
      color: "from-violet-500/20 to-purple-500/20",
    },
    {
      text: "The Mealsgraffiti delivers exceptional quality food with a unique taste that keeps me coming back for more.",
      name: "Bill Watson",
      position: "Food Stylist, Elegant Plates",
      image: dp4,
      rating: 5,
      highlight: "Unique Flavors",
      color: "from-rose-500/20 to-pink-500/20",
    },
    {
      text: "A hidden gem for food lovers! The Mealsgraffiti's unique menu surprises me in the best way possible every time.",
      name: "Jason Brown",
      position: "Food Blogger, The Flavor Journey",
      image: dp5,
      rating: 5,
      highlight: "Hidden Gem",
      color: "from-amber-500/20 to-yellow-500/20",
    },
    {
      text: "Every meal at The Mealsgraffiti feels like a celebration of flavors. Truly an unforgettable dining experience.",
      name: "Jessica Adams",
      position: "Gastronomy Enthusiast, Taste Explorers",
      image: dp6,
      rating: 5,
      highlight: "Unforgettable Experience",
      color: "from-blue-500/20 to-cyan-500/20",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    if (isAutoPlaying) {
      autoSlideRef.current = setInterval(nextSlide, 5000);
    }
  };

  // Touch handling for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto slide effect
  useEffect(() => {
    if (isAutoPlaying) {
      autoSlideRef.current = setInterval(nextSlide, 5000);
    }
    
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlaying(!isAutoPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAutoPlaying]);

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.img
          src={bg}
          alt="Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/90 to-black" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-4"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500/30 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Award className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-mono text-sm tracking-widest">
              TRUSTED REVIEWS
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 px-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Delight</span>
          </motion.h2>
          
          <motion.p
            className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real stories from our cherished guests
          </motion.p>
        </motion.div>

        {/* Main Testimonial Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-3 bg-gradient-to-r from-black/80 to-transparent backdrop-blur-sm rounded-r-lg border border-orange-500/30 hover:border-orange-500/60 transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <ChevronLeft className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 p-3 bg-gradient-to-l from-black/80 to-transparent backdrop-blur-sm rounded-l-lg border border-orange-500/30 hover:border-orange-500/60 transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <ChevronRight className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors" />
          </motion.button>

          {/* Testimonial Cards - Stacked Layout for Mobile */}
          <div className="relative h-[500px] sm:h-[450px]">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentSlide;
              const isNext = index === (currentSlide + 1) % testimonials.length;
              const isPrev = index === (currentSlide - 1 + testimonials.length) % testimonials.length;
              
              return (
                <motion.div
                  key={index}
                  className={`absolute inset-0 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 p-6 sm:p-8 lg:p-10 rounded-2xl backdrop-blur-sm border mx-4 ${
                    isActive
                      ? `bg-gradient-to-br from-zinc-900/90 to-black/90 border-orange-500/40 shadow-2xl shadow-orange-500/10 z-10`
                      : "bg-zinc-900/30 border-zinc-800/50 opacity-0 pointer-events-none"
                  }`}
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : isNext || isPrev ? 0.95 : 0.9,
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : index < currentSlide ? -100 : 100,
                    y: isActive ? 0 : 20,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                >
                  {/* Quote Icon */}
                  <motion.div
                    className="absolute top-4 right-4 lg:static lg:mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isActive ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <div className={`inline-flex p-2 lg:p-3 bg-gradient-to-r ${testimonial.color} rounded-xl`}>
                      <Quote className="w-6 h-6 lg:w-8 lg:h-8 text-orange-400" />
                    </div>
                  </motion.div>

                  {/* Content Layout */}
                  <div className="w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                    {/* Text Content */}
                    <div className="w-full lg:w-2/3">
                      {/* Highlight Badge */}
                      <motion.div
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-orange-500/20 mb-4"
                        initial={{ x: -20, opacity: 0 }}
                        animate={isActive ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 text-amber-300" />
                        <span className="text-amber-300 text-xs lg:text-sm font-medium">{testimonial.highlight}</span>
                      </motion.div>

                      {/* Testimonial Text */}
                      <motion.p
                        className="text-lg sm:text-xl lg:text-2xl font-medium text-white mb-4 lg:mb-6 leading-relaxed"
                        initial={{ y: 20, opacity: 0 }}
                        animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {testimonial.text}
                      </motion.p>

                      {/* Rating */}
                      <motion.div
                        className="flex items-center gap-1.5 mb-4"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 lg:w-5 lg:h-5 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-zinc-700 text-zinc-700"}`}
                          />
                        ))}
                        <span className="text-zinc-400 text-sm ml-2">{testimonial.rating}.0</span>
                      </motion.div>
                    </div>

                    {/* Profile Section */}
                    <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end">
                      {/* Profile Image */}
                      <motion.div
                        className="relative mb-4"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={isActive ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                        transition={{ delay: 0.6, type: "spring" }}
                      >
                        {/* Glow Effect */}
                        <motion.div
                          className={`absolute -inset-3 lg:-inset-4 bg-gradient-to-r ${testimonial.color} rounded-full blur-lg lg:blur-xl`}
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        
                        {/* Image */}
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-3 lg:border-4 border-amber-500/30 shadow-xl">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Verified Badge */}
                        <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-orange-500 to-amber-500 p-1.5 lg:p-2 rounded-full border-2 border-black">
                          <Heart className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                        </div>
                      </motion.div>

                      {/* Profile Info */}
                      <motion.div
                        className="text-center lg:text-right"
                        initial={{ y: 20, opacity: 0 }}
                        animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">{testimonial.name}</h3>
                        <p className="text-orange-400 font-medium text-sm lg:text-base mb-2">{testimonial.position}</p>
                        <div className="inline-flex items-center gap-1 text-zinc-400">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-xs">Verified Customer</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex sm:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-3 bg-gradient-to-r from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-full border border-orange-500/30 hover:border-orange-500/60 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-orange-400" />
            </button>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-gradient-to-l from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-full border border-orange-500/30 hover:border-orange-500/60 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-orange-400" />
            </button>
          </div>

          {/* Progress Indicator */}
          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs text-zinc-400">
                {String(currentSlide + 1).padStart(2, '0')}
              </span>
              <div className="w-32 sm:w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  key={currentSlide}
                />
              </div>
              <span className="text-xs text-zinc-400">
                {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}