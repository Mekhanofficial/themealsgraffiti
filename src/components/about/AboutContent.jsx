import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fx5 from "../../pictures/fx5.jpg";
import chef from "../../pictures/chef.png";

export default function AboutContent() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${fx5})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center min-h-[90vh]">
          {/* Left Side - Image */}
          <motion.div
            className="w-full lg:w-1/2 h-full flex items-center justify-center p-4 lg:p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-lg">
              {/* Decorative border */}
              <div className="absolute -inset-4 border-2 border-orange-500/30 rounded-2xl transform rotate-3"></div>
              
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img
                  src={chef}
                  alt="Master Chef"
                  className="w-full h-auto object-cover rounded-xl shadow-2xl"
                />
                
                {/* Experience badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-orange-500 to-amber-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold">15+ Years</div>
                    <div className="text-xs">Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="w-full lg:w-1/2 h-full flex items-center p-4 lg:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 max-w-lg mx-auto">
              {/* Section Tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase">
                  Our Story
                </span>
                <div className="h-1 w-16 bg-orange-500 mt-2"></div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              >
                Where{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Passion
                </span>{" "}
                Meets{" "}
                <span className="text-white">Plate</span>
              </motion.h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-gray-300 text-lg leading-relaxed">
                  At The Mealsgraffiti, we believe every meal should be a masterpiece. 
                  Our chefs combine traditional techniques with innovative approaches 
                  to create unforgettable dining experiences.
                </p>
                
                <div className="flex items-start space-x-2 text-gray-300">
                  <span className="text-orange-500 mt-1">✓</span>
                  <p className="text-lg">
                    Award-winning culinary team with 15+ years experience
                  </p>
                </div>
                
                <div className="flex items-start space-x-2 text-gray-300">
                  <span className="text-orange-500 mt-1">✓</span>
                  <p className="text-lg">
                    Fresh, locally-sourced ingredients daily
                  </p>
                </div>
              </motion.div>

              {/* Simple Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-3 gap-4 pt-4"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">500+</div>
                  <div className="text-sm text-gray-400">Signature Dishes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">98%</div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">24/7</div>
                  <div className="text-sm text-gray-400">Fresh Prep</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Link to="/menu">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/30">
                    View Our Menu
                  </button>
                </Link>
                
                <a
                  href="tel:+01234567891"
                  className="w-full sm:w-auto border-2 border-orange-500/50 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-500/10 transition-all duration-300 text-center"
                >
                  Book a Table
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}