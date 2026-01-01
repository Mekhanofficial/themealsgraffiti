import { motion } from "framer-motion";
import { Phone, Calendar, Clock, PartyPopper, Sparkles, ChevronRight } from "lucide-react";
import fx11 from "../../pictures/fx11.jpg";
import fx27 from "../../pictures/fx29.jpg";

export default function EventsSection() {
  const openingHours = [
    { day: "Monday - Saturday", time: "8:00 AM - 11:00 PM", icon: Calendar },
    { day: "Sunday", time: "8:00 AM - 11:00 PM", icon: Clock },
    { day: "Happy Hour", time: "5:30 PM - 9:00 PM", highlight: true, icon: PartyPopper },
  ];

  return (
    <motion.div
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/20 rounded-full"
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
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Left Content Panel */}
      <motion.div
        className="w-full lg:w-1/2 relative p-6 sm:p-8 lg:p-12 flex flex-col justify-center min-h-[60vh] lg:min-h-screen"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.img
            src={fx11}
            alt="Event Background"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-2xl mx-auto w-full">
          {/* Animated Title Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500/30 mb-6"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-mono text-sm tracking-widest">
              EVENT BOOKING
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl text-white lg:text-5xl font-bold mb-6 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Planning an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Unforgettable
            </span>{" "}
            <br />
            Event or Party?
          </motion.h2>

          {/* Phone Number Callout */}
          <motion.div
            className="flex items-center gap-4 mb-8 p-4 bg-gradient-to-r from-zinc-900/50 to-black/50 backdrop-blur-sm rounded-xl border border-zinc-800"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-zinc-400 text-sm">Call for Reservation</p>
              <a href="tel:+2349160002472" className="group">
                <motion.p
                  className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  +234 916 000 2472
                  <ChevronRight className="inline-block w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.p>
              </a>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4 flex text-white items-center gap-2">
              <Clock className="w-5 h-5 text-orange-400" />
              Opening Hours
            </h3>
            <div className="space-y-3">
              {openingHours.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg backdrop-blur-sm border ${
                      item.highlight
                        ? "bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-orange-500/30"
                        : "bg-zinc-900/30 border-zinc-800"
                    }`}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${item.highlight ? "text-orange-400" : "text-zinc-400"}`} />
                      <span className={`font-medium ${item.highlight ? "text-orange-300" : "text-white"}`}>
                        {item.day}
                      </span>
                    </div>
                    <span className={`font-semibold ${item.highlight ? "text-amber-300" : "text-zinc-300"}`}>
                      {item.time}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Book Table Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <a href="tel:+2349160002471">
              <motion.button
                className="group relative overflow-hidden w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl shadow-2xl shadow-orange-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Button Content */}
                <div className="relative flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg">Book a Table Now</span>
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </div>
                
                {/* Button Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </a>
            
            <p className="mt-4 text-zinc-400 text-sm text-center sm:text-left">
              Limited tables available. Book in advance to secure your spot!
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Image Panel */}
      <motion.div
        className="w-full lg:w-1/2 relative min-h-[40vh] lg:min-h-screen"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Main Image with Parallax Effect */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          whileInView={{ scale: 1 }}
          initial={{ scale: 1.1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.img
            src={fx27}
            alt="Elegant Dining Event"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.8 }}
          />
          
          {/* Image Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Floating Text Badge */}
          <motion.div
            className="absolute top-8 right-8 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-500/30"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-white font-semibold text-sm">🎉 Perfect for Events</p>
          </motion.div>

          {/* Bottom Text Overlay */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Experience Luxury Dining
            </h3>
            <p className="text-zinc-300">
              Elegant ambiance, exquisite cuisine, and impeccable service for your special occasions
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}