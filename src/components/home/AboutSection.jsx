import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fx2 from "../../pictures/fx2.png";
import fx5 from "../../pictures/fx5.jpg";

export default function AboutSection() {
  return (
    <div
      className="relative px-5 sm:px-8 md:px-16 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
      style={{
        backgroundImage: `url(${fx5})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        maxHeight: "100vh",
        color: "white",
      }}
    >
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={fx2}
          alt="Restaurant Interior"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 text-orange-500 font-mono font-semibold">
          FRESH FLAVORS, UNLIMITED POSSIBILITIES
        </h2>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-4">
          Experience Culinary Excellence{" "}
          <br className="hidden md:block" /> and Timeless Tradition
        </h1>
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 text-gray-300 leading-relaxed">
          The Mealsgraffiti isn&apos;t just a restaurant; it&apos;s a celebration of
          flavor <br className="hidden md:block" />
          crafted by chefs who pour their soul into every dish. Bold,
          inventive, and unforgettable.
        </h3>
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
          Ready for a taste explosion?{" "}
          <a
            href="tel:+2349160002471"
            className="text-orange-500 underline ml-2"
          >
            Call +234 916 0002 471 for Reservations
          </a>
        </h3>

        <Link to="/menu">
          <button className="border-2 border-gray-500 font-semibold mt-4 md:mt-8 p-2 md:p-3 w-full md:w-auto md:px-6 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out">
            Explore the Full Menu
          </button>
        </Link>
      </motion.div>
    </div>
  );
}