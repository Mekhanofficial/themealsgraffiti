import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fx21 from "../pictures/fx21.jpg";
import logoskin from "../pictures/logoskin.png";
import { faSpoon } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faPinterest,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion"; // Import motion

export default function FooterPage() {
  return (
    <>
      <motion.footer
        className="text-center p-4 bg-black"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${fx21})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Trigger only once when the section is in view
      >
        <motion.section
          className="flex flex-col lg:flex-row justify-between items-start gap-10 p-6 lg:p-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div
            className="w-full lg:w-1/4 flex flex-col items-start gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <img className="w-14 h-14 " src={logoskin} alt="Logo" />
              <h1 className="text-2xl -ml-2 font-semibold">
                <span className="text-purple-600">Meal</span>
                <span className="text-orange-400">sGraff</span>
                <span className="text-yellow-400">iti</span>
              </h1>
            </div>
            <p className="text-gray-200 text-sm lg:text-base font-semibold">
              The Mealsgraffiti is one of the most popular restaurants, offering
              a special menu crafted by our passionate chefs.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="h-6 text-orange-600 hover:text-orange-800"
                  icon={faFacebook}
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="h-6 text-orange-600 hover:text-orange-800"
                  icon={faInstagram}
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="h-6 text-orange-600 hover:text-orange-800"
                  icon={faTwitter}
                />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="h-6 text-orange-600 hover:text-orange-800"
                  icon={faPinterest}
                />
              </a>
            </div>
          </motion.div>

          {/* Links Sections */}
          <motion.div
            className="w-full lg:w-1/4 text-sm lg:text-base text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-xl text-white mb-2">Restaurant</h2>
            <ul className="space-y-2 font-semibold">
              <li>
                <a
                  href="/About"
                  className="text-gray-200 hover:text-orange-500"
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="/Menu" className="text-gray-200 hover:text-orange-500">
                  Our Menu
                </a>
              </li>
              <li>
                <a
                  href="tel:+2349160002472"
                  className="text-gray-200 hover:text-orange-500"
                >
                  Book a Table
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-200 hover:text-orange-500">
                  Blog Post
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-200 hover:text-orange-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/4 text-sm lg:text-base text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-xl text-white mb-2">Information</h2>
            <ul className="space-y-2 font-semibold">
              <li>
                <a href="/" className="text-gray-200 hover:text-orange-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-200 hover:text-orange-500">
                  24/7 Service
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-200 hover:text-orange-500">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-200 hover:text-orange-500">
                  Licenses
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-200 hover:text-orange-500">
                  Change Log
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/4 text-sm lg:text-base text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-xl text-white mb-2">Contact</h2>
            <ul className="space-y-2 font-semibold">
              <li>
                <a
                  href="https://www.google.com/maps?q=245+D,+South+City,+Mixed+Tower+Main+Town,+New+York,+USA"
                  className="text-gray-200 hover:text-orange-500"
                >
                  245 D, South City, Mixed Tower Main Town, New York, USA
                </a>
              </li>
              <li>
                <a
                  href="mailto:Themealsgraffiti@gmail.com"
                  className="text-gray-200 hover:text-orange-500"
                >
                  Themealsgraffiti@gmail.com
                </a>
              </li>

              {/* <li>
                <a
                  href="mailto:infoadmin@examplesite.com"
                  className="text-gray-200 hover:text-orange-500"
                >
                  infoadmin@examplesite.com
                </a>
              </li> */}
              <li>
                <a
                  href="tel:+2349160002471"
                  className="text-gray-200 hover:text-orange-500"
                >
                  +2349160002471
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.h3
          className="text-sm lg:text-base mt-6 text-center bg-zinc-900 p-3 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          &copy; <span className="text-orange-700 font-bold">Mealsgraffiti</span>.
          All Rights Reserved -
          <a href="/privacy-policy" className="text-orange-500 hover:underline">
            Privacy Policy
          </a>
        </motion.h3>
      </motion.footer>
    </>
  );
}
