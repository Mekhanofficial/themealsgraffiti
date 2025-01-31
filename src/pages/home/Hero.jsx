import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import dp1 from "../../pictures/dp1.jpg";
import dp2 from "../../pictures/dp2.jpg";
import dp3 from "../../pictures/dp3.jpg";
import dp4 from "../../pictures/dp4.jpg";
import dp5 from "../../pictures/dp5.jpg";
import dp6 from "../../pictures/dp6.jpg";
import heropix1 from "../../pictures/heropix1.png";
import heropix2 from "../../pictures/heropix2.png";
import heropix3 from "../../pictures/heropix3.png";
import fx2 from "../../pictures/fx2.png";
import fx5 from "../../pictures/fx5.jpg";
import fx10 from "../../pictures/fx10.jpg";
import fx11 from "../../pictures/fx11.jpg";
import fx12 from "../../pictures/fx12.jpg";
import fx13 from "../../pictures/fx13.jpg";
import homeMenuChef from "../../pictures/homeMenuChef.jpg";
import fx14 from "../../pictures/fx14.jpg";
import fx15 from "../../pictures/fx15.png";
import fx16 from "../../pictures/fx16.jpg";
import px22 from "../../pictures/px22.jpg";
import px23 from "../../pictures/px23.jpg";
import px28 from "../../pictures/px28.jpg";
import fx20 from "../../pictures/fx20.jpg";
import fx21 from "../../pictures/fx21.jpg";
import fx22 from "../../pictures/fx22.jpg";
import quote from "../../pictures/quote.png";
import gbg2 from "../../pictures/gbg2.jpg";
import bg from "../../pictures/bg.jpg";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import HeaderPage from "../../components/Header";

export default function HomeHeroSection() {
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
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "SAVOR THE FLAVOR",
      subtitle: "Bold, Unforgettable Tastes",
      description:
        "Delight in expertly crafted dishes that transport you to a world of exquisite flavor.",
      buttonText: "Reserve Your Table",
      imageSrc: heropix1, // You can replace this with the correct image path
    },
    {
      title: "CULINARY MASTERPIECE",
      subtitle: "Where Passion Meets Perfection",
      description:
        "Every dish is a work of art, thoughtfully prepared by chefs who pour their soul into every bite.",
      buttonText: "Order Your Favorites",
      imageSrc: heropix2, // Replace with another image
    },
    {
      title: "A JOURNEY THROUGH FLAVOR",
      subtitle: "Crafted with Love, Served with Passion",
      description:
        "Embark on a unique gastronomic adventure that will leave you craving more. A taste experience like no other.",
      buttonText: "Explore Our Menu",
      imageSrc: heropix3, // Replace with another image
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4200); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  const [selectedMenu, setSelectedMenu] = useState("breakfast");

const menuItems = {
  breakfast: [
    {
      name: "Banana Bread",
      extra: "RECOMMENDED",
      price: "#2500",
      description:
        "Freshly baked banana bread, soft and delicious with a hint of sweetness.",
    },
    {
      name: "Long Bun Chicken Sandwich",
      price: "#3000",
      description:
        "A juicy, crispy chicken fillet served in a long, soft bun with all the toppings.",
    },
    {
      name: "Party Jollof Rice",
      price: "#1000",
      description:
        "A hearty serving of flavorful Jollof rice, perfect for sharing at parties.",
    },
    {
      name: "Plain Fried Rice",
      extra: "CHEF CHOICE",
      price: "#1000",
      description:
        "A simple yet delicious fried rice made with fresh vegetables and seasoned to perfection.",
    },
    {
      name: "Plantain",
      price: "#1000",
      description:
        "Golden fried plantain slices, crispy on the outside and tender on the inside.",
    },
    {
      name: "Peppered Chicken",
      price: "#4000",
      description:
        "Spicy grilled chicken seasoned with peppers and herbs, served with a kick.",
    },
    {
      name: "Burgers",
      price: "#5000",
      description:
        "Juicy beef burger served with lettuce, tomato, and a special sauce.",
    },
  ],
  brunch: [
    {
      name: "Banana Bread Medium",
      extra: "RECOMMENDED",
      price: "#2000",
      description:
        "A larger portion of our signature banana bread, perfect for sharing.",
    },
    {
      name: "Chicken Sandwich",
      price: "#2000",
      description:
        "A crispy chicken fillet served with fresh lettuce, tomato, and mayo in a soft bun.",
    },
    {
      name: "Meat Pie",
      price: "#1000",
      description:
        "Flaky pastry filled with a savory mix of seasoned meat and vegetables.",
    },
    {
      name: "Chicken Pie",
      price: "#1200",
      description:
        "Flaky pastry filled with tender chicken and a rich, creamy filling.",
    },
    {
      name: "Chicken Sandwich",
      price: "#2000",
      description:
        "A crispy chicken sandwich served with lettuce, tomato, and mayo.",
    },
    {
      name: "Long Bun Chicken Sandwich",
      extra: "CHEF CHOICE",
      price: "#3000",
      description:
        "A juicy chicken fillet served in a long bun, with fresh toppings and a savory sauce.",
    },
  ],
  lunch: [
    {
      name: "Pineapple Shrimps Fried Rice",
      extra: "RECOMMENDED",
      price: "#2500",
      description:
        "A delightful mix of shrimps, fried rice, and tangy pineapple chunks.",
    },
    {
      name: "Jambalaya Rice",
      price: "#2200",
      description:
        "A spiced rice dish with a mix of chicken, sausage, and shrimp, all cooked together.",
    },
    {
      name: "Party Jollof Rice",
      price: "#1000",
      description:
        "A rich and flavorful Jollof rice, cooked to perfection and perfect for lunch gatherings.",
    },
    {
      name: "Special Shrimps Fried Rice",
      extra: "SEASONAL",
      price: "#2000",
      description:
        "Shrimps fried rice, a seasonal favorite with an extra dose of flavor.",
    },
    {
      name: "Asun Coconut Rice",
      price: "#1700",
      description:
        "A fusion of coconut rice served with tender grilled beef, perfect for a tropical touch.",
    },
    {
      name: "White Rice x Stew",
      price: "#1000",
      description:
        "Simple and classic white rice served with a rich, flavorful stew.",
    },
    {
      name: "Coleslaw",
      price: "#1000",
      description:
        "A refreshing side of creamy coleslaw, perfect to balance any meal.",
    },
  ],
  dinner: [
    {
      name: "Grilled Chicken",
      extra: "RECOMMENDED",
      price: "#4000",
      description:
        "Juicy grilled chicken with a smoky flavor, served with your choice of sides.",
    },
    {
      name: "Peppered Turkey",
      price: "#5000",
      description:
        "Tender turkey grilled with pepper and seasoning, served hot.",
    },
    {
      name: "Crispy Chicken",
      price: "#3000",
      description:
        "Crispy fried chicken, golden brown on the outside, juicy on the inside.",
    },
    {
      name: "Peppered Snail",
      price: "#5000",
      description:
        "Tender snails cooked in a rich, spicy pepper sauce, a delicacy served seasonally.",
    },
    {
      name: "Peppered Fried Cracker Fish",
      price: "#4000",
      description:
        "Crispy fried fish served with a spicy pepper sauce, perfect for seafood lovers.",
    },
    {
      name: "Peppered Fried Hake Fish",
      price: "#4000",
      description:
        "Fried hake fish seasoned with spicy pepper sauce, served crispy and hot.",
    },
    {
      name: "Stewed Titus",
      extra: "SEASONAL",
      price: "#3000",
      description:
        "A classic stew made with tender Titus fish, cooked in a rich, flavorful sauce.",
    },
  ],
};




  // Select the appropriate image based on the selected menu
  const getMenuImage = () => {
    switch (selectedMenu) {
      case "breakfast":
        return homeMenuChef;
      case "brunch":
        return fx11;
      case "lunch":
        return fx12;
      case "dinner":
        return fx13;
      default:
        return fx10;
    }
  };

 const testimonials = [
   {
     text: "The Mealsgraffiti is my go-to place for celebrating special occasions. Their food is always delightful and full of flavor.",
     name: "Michael Williamson",
     position: "Food Critic, Local Eats",
     image: dp1,
     rightImage: quote,
   },
   {
     text: "The dining experience at The Mealsgraffiti is unmatched! The chefs truly outdo themselves with every dish.",
     name: "david Johnson",
     position: "Restaurant Owner, Taste Haven",
     image: dp2,
     rightImage: quote,
   },
   {
     text: "I love the cozy atmosphere and the excellent service at The Mealsgraffiti. Perfect for a relaxed evening with amazing food.",
     name: "sarah Doe",
     position: "Chef, Gourmet Bistro",
     image: dp3,
     rightImage: quote,
   },
   {
     text: "The Mealsgraffiti delivers exceptional quality food with a unique taste that keeps me coming back for more.",
     name: "Bill Watson",
     position: "Food Stylist, Elegant Plates",
     image: dp4,
     rightImage: quote,
   },
   {
     text: "A hidden gem for food lovers! The Mealsgraffiti's unique menu surprises me in the best way possible every time.",
     name: "Jason Brown",
     position: "Food Blogger, The Flavor Journey",
     image: dp5,
     rightImage: quote,
   },
   {
     text: "Every meal at The Mealsgraffiti feels like a celebration of flavors. Truly an unforgettable dining experience.",
     name: "Jessica Adams",
     position: "Gastronomy Enthusiast, Taste Explorers",
     image: dp6,
     rightImage: quote,
   },
 ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default: show 2 slides
    slidesToScroll: 2, // Default: scroll 2 slides at a time
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    customPaging: (i) => <div className="custom-dot"></div>, // Customize the dots
    appendDots: (dots) => (
      <ul className="slick-dots mt-2">
        {dots.slice(0, 2)} {/* Display only two dots */}
      </ul>
    ),
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };

  return (
    <>
      <section style={{ overflowX: "hidden" }}>
        <HeaderPage />
        <div className="relative  -mt-20 ">
          {/* First Section */}
          <div className="relative h-screen">
            {/* Background Image */}
            <img
              className="absolute inset-0 w-full h-full object-cover z-[-2]"
              src={gbg2}
              alt="Background image showcasing a restaurant or food ambiance"
            />

            {/* Container for Image and Text */}
            <div className="flex flex-col md:flex-row items-center justify-center mx-5 md:mx-20 text-white relative h-full">
              {/* Content Section (Left Side) */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="flex flex-col justify-center space-y-5 text-center md:text-left">
                  <h1 className="text-orange-500 text-4xl md:text-4xl font-mono transition-transform duration-500 ease-in-out translate-y-0 title-animate">
                    {slides[currentIndex].title}
                  </h1>
                  <h1 className="text-4xl md:text-6xl font-semibold transition-transform duration-500 ease-in-out translate-y-0 subtitle-animate">
                    {slides[currentIndex].subtitle}
                  </h1>
                  <h3 className="text-xl md:text-xl transition-transform duration-500 ease-in-out translate-y-0 description-animate">
                    {slides[currentIndex].description}
                  </h3>

                  <Link
                    to="tel:+2349160002471"
                    className="border-2 border-gray-500 font-semibold mt-10 p-3 w-full md:w-44 hover:bg-orange-500 hover:text-white transition-colors duration-300 button-animate cursor-pointer z-10"
                    onClick={() => console.log("Button clicked!")} // Debugging click event
                  >
                    {slides[currentIndex].buttonText}
                  </Link>
                </div>
              </div>

              {/* Image Section (Right Side) */}
              <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
                <img
                  className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain transition-opacity duration-500 ease-in-out opacity-100 image-animate"
                  src={slides[currentIndex].imageSrc}
                  alt="A delicious meal prepared by passionate chefs"
                />
              </div>
            </div>
          </div>

          <div
            className="relative px-5 sm:px-8 md:px-16 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 "
            style={{
              backgroundImage: `url(${fx5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh", // Keeps height consistent
              maxHeight: "100vh", // Prevents background from becoming too long
              color: "white",
            }}
          >
            {/* Image Section (Left Side) */}
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

            {/* Text Section (Right Side) */}
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
                The Mealsgraffiti isn't just a restaurant; it's a celebration of
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

              {/* Button linking to the menu page */}
              <Link to="/menu">
                <button className="border-2 border-gray-500 font-semibold mt-4 md:mt-8 p-2 md:p-3 w-full md:w-auto md:px-6 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out">
                  Explore the Full Menu
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="relative w-full"
          style={{
            backgroundImage: `url(${fx14})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingBottom: "100px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Transparent Background Overlay */}
          <motion.div
            className="absolute inset-0 bg-zinc-950 bg-opacity-90 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1 }}
          ></motion.div>

          {/* Top Section */}
          <motion.div
            className="text-center px-4 sm:px-8 md:px-16 lg:px-32 absolute top-16 left-0 w-full z-10"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-orange-500 text-lg sm:text-xl mb-4 sm:mb-5">
              TASTE THE MAGIC
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-5">
              Explore Our Menu
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 md:gap-7 mt-4 sm:mt-5 justify-center items-center mb-8 sm:mb-12">
              {["breakfast", "brunch", "lunch", "dinner"].map((menu) => (
                <motion.button
                  key={menu}
                  className={`border-2 p-2 sm:p-3 font-semibold w-full rounded-lg transition-all duration-300 ease-in-out ${
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

          {/* Menu Section */}
          <div className="relative mx-3 sm:mx-6 md:mx-10 flex flex-col gap-5 md:gap-7 lg:flex-row items-center justify-center text-white px-3 sm:px-5 md:px-6 pt-40 sm:pt-48 mb-24 sm:mb-32">
            {/* Image */}
            <motion.img
              className="relative top-24 sm:top-32 max-w-full w-full md:w-[550px] lg:w-[650px] h-[500px] sm:h-[600px] md:h-[700px] object-cover order-1 lg:order-2"
              src={getMenuImage()}
              alt="Food Image"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />

            <motion.div
              className="flex flex-col relative top-16 sm:top-24 gap-3 sm:gap-5 md:gap-7 w-full md:w-2/3 order-2 lg:order-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {menuItems[selectedMenu].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col mt-4 sm:mt-6"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex items-center w-full md:w-auto">
                      <h2 className="font-bold text-lg sm:text-xl">
                        {item.name}
                      </h2>
                      {item.extra && (
                        <h2 className="font-bold text-xs sm:text-sm bg-orange-700 p-1 sm:p-2 md:text-lg mx-2 sm:mx-4">
                          {item.extra}
                        </h2>
                      )}
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center">
                      <h2 className="font-semibold text-gray-400 hidden md:block mx-2 sm:mx-4">
                        {item.dash}
                      </h2>
                      <h2 className="font-semibold text-lg sm:text-xl">
                        {item.price}
                      </h2>
                    </div>
                  </div>
                  <p className="font-light text-sm sm:text-base mt-1 sm:mt-2">
                    {item.description}
                  </p>
                </motion.div>
              ))}
              {/* Arrow Icon */}
              <motion.div
                className="relative top-10 flex"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Link to="/Menu">
                  <button className="bg-orange-700 p-2">
                    <FontAwesomeIcon
                      className="h-5 sm:h-6 w-5 sm:w-6 text-gray-300 cursor-pointer hover:text-orange-500"
                      icon={faLongArrowRight}
                    />
                    <span className="text-gray-300 sm:text-xl ml-2">
                      View More
                    </span>
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col bg-zinc-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <motion.img
              className="h-auto w-full object-cover sm:h-[500px] lg:h-[730px] lg:w-1/2"
              src={fx14}
              alt="Background Image"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />

            {/* Text Section with Background Image */}
            <motion.div
              className="p-4 sm:p-6 h-auto lg:p-8 w-full lg:w-1/2 bg-cover bg-center relative min-h-screen"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Overlay Section */}
              <motion.div
                className="absolute inset-0 bg-zinc-950 bg-opacity-90 p-4 sm:p-6 lg:p-8 flex flex-col justify-between"
                style={{ height: "100%" }}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                {/* Text and Rotating Image Section */}
                <div className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-start text-center sm:text-left justify-between gap-6">
                  {/* Text Section */}
                  <motion.div
                    className="w-full sm:w-[60%] lg:w-[60%] mb-6 sm:mb-8 lg:mb-10"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <h1 className="text-orange-500 text-xl sm:text-2xl lg:text-3xl mb-4 font-mono">
                      QUALITY & BALANCE
                    </h1>
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl text-white font-semibold leading-tight">
                      An Extraordinary <br /> Experience for all
                    </h2>
                  </motion.div>

                  {/* Rotating Image Section */}
                  <motion.div
                    className="w-full sm:w-[40%] lg:w-[30%] flex justify-center lg:ml-6"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <img
                      className="mt-6 sm:mt-8 lg:mt-0 max-w-[150px] sm:max-w-[200px] lg:max-w-[250px] h-auto object-contain"
                      src={fx15}
                      alt="Rotating Image"
                    />
                  </motion.div>
                </div>

                {/* Features Section */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-16 sm:mt-8 lg:mt-10"
                  initial="hidden"
                  whileInView="visible"
                  transition={{ staggerChildren: 0.9 }}
                  viewport={{ once: true }}
                >
                  {[
                    {
                      title: "Passionate Chef",
                      text: "Our chefs pour their heart into every dish, crafting flavors that leave you craving more.",
                    },
                    {
                      title: "100% Fresh Food",
                      text: "Only the freshest ingredients make it to your plate—because you deserve the best.",
                    },
                    {
                      title: "Memorable Ambience",
                      text: "Step into a vibe that’s as unforgettable as the food. Perfect for every occasion.",
                    },
                    {
                      title: "Flavor Masterpiece",
                      text: "Discover our signature creations—unique, bold, and made to wow your taste buds.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="text-white"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">
                        {feature.title}
                      </h3>
                      <p className="font-semibold text-sm sm:text-base lg:text-lg break-words">
                        {feature.text}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="text-white flex flex-col lg:flex-row items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >
          {/* Left Section */}
          <motion.div
            className="w-full lg:w-1/2 px-6 lg:px-16 lg:mb-0 relative"
            style={{
              backgroundImage: `url(${fx11})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "725px",
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-80 p-6">
              <motion.h1
                className="text-orange-500 text-xl font-mono font-semibold mt-20 mb-5"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                EVENT BOOKING
              </motion.h1>
              <motion.h2
                className="text-3xl lg:text-5xl font-semibold mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Do you have any plan <br /> for any Party or Events?
              </motion.h2>
              <motion.h3
                className="text-lg lg:text-xl mt-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Call for Reservation
                <a href="tel:+2349160002472">
                  <span className="text-orange-500 underline ml-2">
                    +234 916 000 2472
                  </span>
                </a>
              </motion.h3>
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <h2 className="text-xl font-bold mb-2">Opening Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between text-lg lg:text-xl">
                    <h2>Monday - Saturday</h2>
                    <h2>8.00 am - 11.00 pm</h2>
                  </div>
                  <div className="flex justify-between text-lg lg:text-xl">
                    <h2>Sunday</h2>
                    <h2>8.00 am - 11.00 pm</h2>
                  </div>
                  <div className="flex justify-between text-lg lg:text-xl">
                    <h2 className="text-orange-500">Happy Hour</h2>
                    <h2>5.30 pm - 09.00 pm</h2>
                  </div>
                </div>
                <a href="tel:+2349160002471">
                  <motion.button
                    className="border-x-2 border-gray-500 font-semibold mt-10 p-2 w-44 hover:bg-orange-500 hover:text-white transition duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    Book a Table
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              className="h-auto object-cover w-full sm:h-[500px] lg:h-[725px] shadow-lg"
              src={fx16}
              alt="Event Image"
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="relative text-white font-semibold py-10"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Trigger only once when the section is in view
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-zinc-950 bg-opacity-80"></div>

          {/* Header */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-orange-500 mb-5 text-lg md:text-xl">
              TESTIMONIALS
            </h1>
            <h3 className="text-2xl md:text-4xl mb-10 md:mb-20">
              Reviews about our test
            </h3>
          </motion.div>

          {/* Slider */}
          <Slider
            {...settings}
            className="max-w-6xl text-left mx-auto slider-with-gap"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-zinc-950 text-white p-5 md:p-8 font-semibold flex flex-col justify-between"
                style={{
                  minHeight: "300px",
                  margin: "0 15px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: index * 0.2 }} // Stagger effect for slides
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-5">
                  <h4 className="text-lg md:text-xl flex-grow">
                    {testimonial.text}
                  </h4>
                  <img
                    className="flex-shrink-0 ml-3"
                    style={{
                      height: "35px",
                      width: "35px",
                    }}
                    src={testimonial.rightImage}
                    alt={`${testimonial.name} - Quote Icon`}
                  />
                </div>
                <div className="flex items-center gap-5">
                  <img
                    className="flex-shrink-0"
                    style={{
                      height: "80px",
                      width: "80px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="flex-grow">
                    <h5 className="text-orange-500 text-lg md:text-xl">
                      {testimonial.name}
                    </h5>
                    <h5 className="text-sm md:text-base">
                      {testimonial.position}
                    </h5>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
        <motion.div
          className="relative"
          style={{
            backgroundImage: `url(${fx21})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-zinc-950 bg-opacity-95"></div>

          <motion.div
            className="text-center py-10 relative z-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-orange-500 text-xl font-mono font-semibold">
              OUR BLOG
            </h1>
            <h3 className="text-4xl md:text-6xl mb-10 font-semibold text-white">
              Latest Post
            </h3>
            <motion.div
              className="grid gap-5 px-5 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 text-left text-white font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                {
                  image: px28,
                  date: "January 9, 2025",
                  author: "Rose",
                  title: "New menu added. You can exchange your taste",
                },
                {
                  image: fx20,
                  date: "November 29, 2024",
                  author: "Abraham",
                  title:
                    "Explore our exciting menu updates for a new experience",
                },
                {
                  image: px23,
                  date: "July 1, 2024",
                  author: "Shady",
                  title: "Discover our chef's specials crafted with love",
                },
              ].map((post, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="overflow-hidden">
                    <img
                      className="w-full h-[200px] md:h-[300px] object-cover transition-transform duration-500 transform group-hover:scale-110 group-hover:skew-y-3"
                      src={post.image}
                      alt={` post ${index + 1}`}
                    />
                  </div>
                  <div className="bg-teal-950 p-5">
                    <h3 className="text-orange-500 mb-2">
                      Date: {post.date} / By: {post.author}
                    </h3>
                    <h2 className="text-lg md:text-2xl mb-2">{post.title}</h2>
                    <h2>
                      Read more{" "}
                      <span>
                        <FontAwesomeIcon
                          className="h-4 w-5 text-gray-300"
                          icon={faLongArrowRight}
                        />
                      </span>
                    </h2>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
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

          <motion.div
            className="w-full md:w-1/2 bg-zinc-950 text-center p-4 md:p-6"
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
      </section>

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
