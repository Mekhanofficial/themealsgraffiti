import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fx21 from "../pictures/fx21.jpg";
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
              <FontAwesomeIcon className="h-6 text-orange-500" icon={faSpoon} />
              <h1 className="text-2xl font-bold">Meals Graffiti</h1>
            </div>
            <p className="text-gray-200 text-sm lg:text-base">
              Meals Graffiti is one of the most popular restaurants, offering a
              special menu crafted by our passionate chefs.
            </p>
            <div className="flex gap-4">
              <FontAwesomeIcon
                className="h-6 text-orange-600 hover:text-orange-800"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="h-6 text-orange-600 hover:text-orange-800"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="h-6 text-orange-600 hover:text-orange-800"
                icon={faTwitter}
              />
              <FontAwesomeIcon
                className="h-6 text-orange-600 hover:text-orange-800"
                icon={faPinterest}
              />
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
            <h2 className="font-bold text-white mb-2">Restaurant</h2>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Our Menu</li>
              <li>Book a Table</li>
              <li>Blog Post</li>
              <li>Contact</li>
            </ul>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/4 text-sm lg:text-base text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-white mb-2">Information</h2>
            <ul className="space-y-2">
              <li>Terms & Conditions</li>
              <li>24/7 Service</li>
              <li>Style Guide</li>
              <li>Licenses</li>
              <li>Change Log</li>
            </ul>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/4 text-sm lg:text-base text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-white mb-2">Contact</h2>
            <ul className="space-y-2">
              <li>245 D, South City, Mixed Tower Main Town, New York, USA</li>
              <li>info@examplesite.com</li>
              <li>infoadmin@examplesite.com</li>
              <li>+12345 678 910</li>
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
          &copy; <span className="text-orange-700 font-bold">MekhanPro</span>.
          All Rights Reserved - Privacy Policy
        </motion.h3>
      </motion.footer>
    </>
  );
}
