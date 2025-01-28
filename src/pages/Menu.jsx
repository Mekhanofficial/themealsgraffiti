import fx21 from "../pictures/fx21.jpg";
import fx11 from "../pictures/fx11.jpg";
import fx12 from "../pictures/fx12.jpg";
import fx10 from "../pictures/fx10.jpg";
import fx14 from "../pictures/fx14.jpg";
import fx15 from "../pictures/fx15.png";
import fx19 from "../pictures/fx19.jpg";
import fx20 from "../pictures/fx20.jpg";
import fx22 from "../pictures/fx22.jpg";
import px27 from "../pictures/px28.jpg";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderPage from "../components/Header";
import FooterPage from "../components/Footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MenuPage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Show or hide the button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [selectedMenu, setSelectedMenu] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const menuItems = {
    all: [
      {
        name: "Pancakes",
        price: "$10.50",
        description: "Fluffy pancakes with maple syrup",
        image: fx15,
      },
      {
        name: "Eggs Benedict",
        price: "$12.00",
        description: "Poached eggs, hollandaise sauce, and English muffin",
        image: fx15,
      },
      {
        name: "French Toast",
        price: "$9.99",
        description: "With cinnamon, powdered sugar, and maple syrup",
        image: fx15,
      },
      {
        name: "Avocado Toast",
        price: "$12.99",
        description: "Avocado, eggs, and sourdough",
        image: fx15,
      },
      {
        name: "Grilled Salmon",
        price: "$20.85",
        description: "Soft and juicy, with garlic & ginger",
        image: fx15,
      },
      {
        name: "Pancakes",
        price: "$10.50",
        description: "With maple syrup and butter",
        image: fx15,
      },
      {
        name: "Omelette",
        price: "$14.00",
        description: "With spinach, cheese, and mushrooms",
        image: fx15,
      },
      {
        name: "Eggs and Bacon",
        price: "$9.99",
        description: "Two eggs cooked to your liking with crispy bacon",
        image: fx15,
      },
      {
        name: "Shakshuka",
        price: "$13.50",
        description: "Poached eggs in a spicy tomato sauce with peppers",
        image: fx15,
      },
      {
        name: "Bagel with Cream Cheese",
        price: "$5.99",
        description: "Toasted bagel with cream cheese spread",
        image: fx15,
      },
      {
        name: "Summer Salad",
        price: "$15.99",
        description: "Crisp greens, seasonal vegetables",
        image: fx15,
      },
      {
        name: "Grilled Chicken Sandwich",
        price: "$18.50",
        description: "Grilled chicken, lettuce, tomato, mayo",
        image: fx15,
      },
      {
        name: "Veggie Burger",
        price: "$14.99",
        description: "Grilled veggie patty with lettuce and tomato",
        image: fx15,
      },
    ],
    breakfast: [
      {
        name: "Pancakes",
        price: "$10.50",
        description: "Fluffy pancakes with maple syrup",
        image: fx15,
      },
      {
        name: "Eggs Benedict",
        price: "$12.00",
        description: "Poached eggs, hollandaise sauce, and English muffin",
        image: fx15,
      },
    ],
    brunch: [
      {
        name: "Avocado Toast",
        price: "$12.99",
        description: "Avocado, eggs, and sourdough",
        image: fx15,
      },
      {
        name: "Omelette",
        price: "$14.00",
        description: "With spinach, cheese, and mushrooms",
        image: fx15,
      },
    ],
    lunch: [
      {
        name: "Grilled Salmon",
        price: "$20.85",
        description: "Soft and juicy, with garlic & ginger",
        image: fx15,
      },
      {
        name: "Summer Salad",
        price: "$15.99",
        description: "Crisp greens, seasonal vegetables",
        image: fx15,
      },
    ],
    dinner: [
      {
        name: "BBQ Ribs",
        price: "$27.85",
        description: "Chicken ribs, garlic & ginger, green sauce",
        image: fx15,
      },
      {
        name: "Lobster Tail",
        price: "$35.99",
        description: "Grilled lobster tail with butter and lemon",
        image: fx15,
      },
    ],
  };

  const totalPages = Math.ceil(menuItems[selectedMenu].length / itemsPerPage);
  const paginatedItems = menuItems[selectedMenu].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {}, [selectedMenu, currentPage]);

  return (
    <>
      <section className="overflow-x-hidden">
        <HeaderPage />
        <div
          className="relative -mt-24 top-1 flex items-center justify-center text-center"
          style={{ height: "100vh" }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full bg-zinc-950 opacity-80"
            style={{ zIndex: "-1" }}
          ></div>

          <img
            style={{
              height: "100vh",
              width: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "-2",
              objectFit: "cover",
            }}
            src={px27}
            alt="Background image showcasing a restaurant or food ambiance"
          />

          <motion.div
            className="z-10"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Our Menu
            </h1>
            <h3 className="text-orange-700 font-semibold text-xl mt-2">
              HOME-MENU
            </h3>
          </motion.div>
        </div>

        <motion.div
          className="relative w-full"
          style={{
            backgroundImage: `url(${fx14})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingBottom: "350px",
            paddingTop: "50px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-zinc-950 bg-opacity-90 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1 }}
          ></motion.div>

          <motion.div
            className="text-center px-6 sm:px-12 md:px-24 lg:px-48 absolute left-0 w-full z-10"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-orange-500 text-xl mb-5">TEST A LITTLE BIT</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
              Our Special Menu
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-7 mt-5 justify-center items-center mb-12">
              {["all", "breakfast", "brunch", "lunch", "dinner"].map((menu) => (
                <motion.button
                  key={menu}
                  className={`border-2 p-3 font-semibold text-center ${
                    selectedMenu === menu
                      ? "text-orange-500 border-orange-500"
                      : "text-white border-white"
                  }`}
                  onClick={() => setSelectedMenu(menu)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {menu.charAt(0).toUpperCase() + menu.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="relative min-h-screen top-60 z-10 text-zinc-400">
            <motion.div
              className="flex flex-wrap gap-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {paginatedItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900 rounded-lg shadow-lg p-4 flex flex-col items-center gap-4"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  style={{
                    width: "280px",
                    height: "330px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-44 h-44 rounded-lg"
                  />
                  <div className="text-left">
                    <h2 className="font-bold text-xl">{item.name}</h2>
                    <p className="font-light text-sm mt-2">
                      {item.description}
                    </p>
                    <h2 className="font-semibold text-lg mt-4">{item.price}</h2>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                className="px-4 py-2 bg-orange-500 text-white rounded shadow disabled:bg-gray-500"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="text-white font-semibold">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="px-4 py-2 bg-orange-500 text-white rounded shadow disabled:bg-gray-500"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row relative z-10 bg-zinc-900">
          <motion.img
            className="w-full md:w-1/2 h-48 md:h-72"
            src={fx22}
            alt="Newsletter Background"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="w-full md:w-1/2 bg-zinc-950 text-center p-4 md:p-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-orange-500 text-lg md:text-2xl font-mono font-semibold mb-3">
              NEWSLETTER
            </h2>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Subscribe to Our Newsletter
            </h1>
            <h3 className="text-sm md:text-lg text-white mb-4">
              To get the latest updates, offers, and promotions
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <input
                className="w-full md:w-3/4 p-3 bg-transparent border-2 border-zinc-600 text-white placeholder-zinc-400 mb-4 md:mb-0 md:mr-4"
                type="email"
                placeholder="Enter your email"
              />
              <button className="w-full md:w-auto px-5 py-2 text-zinc-800 font-semibold bg-white hover:bg-orange-500 hover:text-white transition">
                Subscribe
              </button>
            </div>
            <h3 className="text-lg md:text-xl mt-4 text-white">
              Call for Reservation
              <span className="text-orange-500 underline ml-2">
                +234 905 576 5770
              </span>
            </h3>
          </motion.div>
        </div>
      </section>
      <FooterPage />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-10 bg-orange-500 text-white p-3 w-10 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
        >
          ↑
        </button>
      )}
    </>
  );
}
