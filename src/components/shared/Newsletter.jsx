import { motion } from "framer-motion";
import fx22 from "../../pictures/fx22.jpg";

export default function NewsletterSection() {
  return (
    <motion.div
      className="flex flex-col md:flex-row relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.img
        className="w-full md:w-1/2 h-48 md:h-72"
        src={fx22}
        alt="Newsletter Background"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      {/* Only changed this line: added gradient background */}
      <motion.div
        className="w-full md:w-1/2 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-center p-4 md:p-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-orange-500 text-lg md:text-2xl font-mono font-semibold mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          NEWSLETTER
        </motion.h2>
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-white mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Subscribe to Our Newsletter
        </motion.h1>
        <motion.h3
          className="text-sm md:text-lg text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          To get the latest updates, offers, and promotions
        </motion.h3>
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <input
            className="w-full md:w-3/4 p-3 bg-transparent border-2 border-zinc-600 text-white placeholder-zinc-400 mb-4 md:mb-0 md:mr-4"
            type="email"
            placeholder="Enter your email"
          />
          <button className="w-full md:w-auto px-5 py-2 text-zinc-800 font-semibold bg-white hover:bg-orange-500 hover:text-white transition">
            Subscribe
          </button>
        </motion.div>
        <motion.h3
          className="text-lg md:text-xl mt-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          Call for Reservation
          <a href="tel:+2349160002472">
            <span className="text-orange-500 underline ml-2">
              +234 916 000 2472
            </span>
          </a>
        </motion.h3>
      </motion.div>
    </motion.div>
  );
}