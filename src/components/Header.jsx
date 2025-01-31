import { Link } from "react-router-dom"; // Make sure Link is imported
import gbg2 from "../pictures/headbg.jpg";
import logoskin from "../pictures/logoskin.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { motion } from "framer-motion";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";

export default function HeaderPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebarDropdown = () => {
    setIsSidebarDropdownOpen(!isSidebarDropdownOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header>
        {/* Social Media Icons and Discount Notification */}
        <motion.div
          className="flex z-10 relative text-white flex-wrap -top-1 font-semibold justify-between items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex gap-7 mx-5 sm:mx-10 md:mx-20 ml-auto">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="h-4 text-white sm:h-6 md:h-5 hover:text-orange-500"
                icon={faFacebook}
              />
            </a>
            <a
              href="https://www.instagram.com/themealsgraffiti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="h-4 text-white sm:h-6 md:h-5 hover:text-orange-500"
                icon={faInstagram}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="h-4 text-white sm:h-6 md:h-5 hover:text-orange-500"
                icon={faTwitter}
              />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="h-4 text-white sm:h-6 md:h-5 hover:text-orange-500"
                icon={faPinterest}
              />
            </a>
          </div>

          <motion.div
            className="gap-2 items-center mx-5 sm:mx-10 md:mx-20 mt-4 sm:mt-0 md:mt-0 w-full sm:w-auto justify-center hidden sm:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <a href="tel:+2349160002472">
              <FontAwesomeIcon
                className="h-4 text-orange-400 sm:h-6 md:h-5 hover:text-green-500" // Initially orange, hover to green
                icon={faWhatsapp}
              />
            </a>
            <h1 className="text-xs sm:text-sm md:text-base hover:text-green-500">
              Hungry? Order now and satisfy your cravings
            </h1>
          </motion.div>
        </motion.div>

        {/* Main Navbar */}
        <motion.div
          className="flex justify-between items-center mx-5 sm:mx-10 md:mx-20 font-semibold relative text-white z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Logo Section with Link */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* Wrap the logo and text with a Link to make it clickab */}
            <Link to="/" className="flex items-center">
              <img className="w-14 h-14" src={logoskin} alt="Logo" />
              <h1 className="text-2xl -ml-2 font-semibold">
                <span className="text-purple-600">Meal</span>
                <span className="text-orange-400">sGraff</span>
                <span className="text-yellow-400">iti</span>
              </h1>
            </Link>
          </motion.div>

          {/* Navigation Menu */}
          <motion.div
            className="hidden md:flex gap-10 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <ul className="flex gap-10 text-xl">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              {/* Dropdown for Pages */}
              <div className="relative">
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <li>Pages</li>
                  <FontAwesomeIcon
                    className="h-4 text-gray-300"
                    icon={faChevronDown}
                  />
                </div>
                {isDropdownOpen && (
                  <motion.ul
                    className="absolute top-full mt-2 bg-zinc-800 text-white py-2 rounded shadow-lg w-40"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <li className="px-4 py-2 hover:bg-zinc-700">
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-zinc-700">
                      <Link to="/">Chef</Link>
                    </li>
                  </motion.ul>
                )}
              </div>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </motion.div>

          {/* Mobile Hamburger Menu */}
          <motion.div
            className="flex md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button className="text-white" onClick={toggleMobileMenu}>
              <FontAwesomeIcon className="h-6" icon={faBars} />
            </button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Dropdown with Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMobileMenu} // Close sidebar when overlay is clicked
          ></div>
        )}

        <motion.div
          className={`md:hidden fixed top-0 left-0 h-screen w-72 bg-cyan-950 text-white p-5 transition-transform duration-300 ease-in-out z-50 ${
            isMobileMenuOpen
              ? "transform translate-x-0"
              : "transform -translate-x-full"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="flex items-center gap-1 mb-6 text-center">
            <motion.div
              className="flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <img className="w-14 h-14 " src={logoskin} alt="Logo" />
              <h1 className="text-2xl -ml-2 font-semibold">
                <span className="text-purple-600">Meal</span>
                <span className="text-orange-400">sGraff</span>
                <span className="text-yellow-400">iti</span>
              </h1>
            </motion.div>
          </div>
          <ul className="space-y-4 mt-4 font-semibold">
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={closeMobileMenu}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            {/* Dropdown for Pages */}
            <li>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleSidebarDropdown}
              >
                <span>Pages</span>
                <FontAwesomeIcon className="h-4" icon={faChevronDown} />
              </div>
              {isSidebarDropdownOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <Link to="/blog" onClick={closeMobileMenu}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/chef" onClick={closeMobileMenu}>
                      Chef
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Background Image */}
        <img
          style={{
            height: "45px",
            width: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "1",
            objectFit: "cover",
          }}
          src={gbg2}
          alt="Background image showcasing a restaurant or food ambiance"
        />
      </header>
    </>
  );
}
