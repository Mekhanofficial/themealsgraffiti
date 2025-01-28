import HeaderPage from "../components/Header";
import dp1 from "../pictures/dp1.jpg";
import dp2 from "../pictures/dp2.jpg";
import dp3 from "../pictures/dp3.jpg";
import dp4 from "../pictures/dp4.jpg";
import dp5 from "../pictures/dp5.jpg";
import dp6 from "../pictures/dp6.jpg";
import fx5 from "../pictures/fx5.jpg";
import fx14 from "../pictures/fx14.jpg";
import fx11 from "../pictures/fx11.jpg";
import fx16 from "../pictures/fx16.jpg";
import fx1 from "../pictures/bg.jpg";
import fx21 from "../pictures/fx21.jpg";
import fx15 from "../pictures/fx15.png";
import fx17 from "../pictures/fx17.png";
import fx18 from "../pictures/fx18.png";
import fx19 from "../pictures/fx19.jpg";
import fx20 from "../pictures/fx20.jpg";
import fx22 from "../pictures/fx22.jpg";
import px21 from "../pictures/px21.jpg";
import chef from "../pictures/chef.png";
import quote from "../pictures/quote.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FooterPage from "../components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Use useEffect to add and clean up the scroll event listener
  useEffect(() => {
    // Handle the scroll event to toggle the "Scroll to Top" button
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const testimonials = [
    {
      text: "Rosoi is my go-to place for celebrating special occasions. Their food is always delightful.",
      name: "Maichel Williamson",
      position: "CTO, Morlex Group",
      image: dp1,
      rightImage: quote,
    },
    {
      text: "The dining experience here is unmatched! The chefs truly outdo themselves with every dish.",
      name: "Sarah Johnson",
      position: "CEO, TechCorp",
      image: dp2,
      rightImage: quote,
    },
    {
      text: "I love the cozy atmosphere and the excellent service. Perfect for a relaxed evening.",
      name: "John Doe",
      position: "Manager, GlobalTech",
      image: dp3,
      rightImage: quote,
    },
    {
      text: "Rosoi delivers exceptional quality food with a unique taste that keeps me coming back.",
      name: "Emma Watson",
      position: "Designer, Creative Studio",
      image: dp4,
      rightImage: quote,
    },
    {
      text: "A hidden gem for food lovers! Their unique menu surprises me in the best way possible.",
      name: "Michael Brown",
      position: "Freelancer",
      image: dp5,
      rightImage: quote,
    },
    {
      text: "Every meal at Rosoi feels like a celebration of flavors. Truly an unforgettable dining experience.",
      name: "Jessica Adams",
      position: "Blogger",
      image: dp6,
      rightImage: quote,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    customPaging: (i) => <div className="custom-dot"></div>,
    appendDots: (dots) => (
      <ul className="slick-dots mt-2">{dots.slice(0, 2)}</ul>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section>
        <HeaderPage />
        <div
          className="relative flex -mt-24 top-1 items-center justify-center text-center"
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
            src={px21}
            alt="Background image showcasing a restaurant or food ambiance"
          />
          <motion.div
            className="z-10"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-bold text-white text-5xl">About Us</h1>
            <h3 className="text-orange-700 font-semibold text-xl mt-2">
              HOME-ABOUT US
            </h3>
          </motion.div>
        </div>

        <div
          className="relative px-5 sm:px-20 flex flex-col sm:flex-row items-center gap-10"
          style={{
            backgroundImage: `url(${fx5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            color: "white",
          }}
        >
          <motion.img
            src={chef}
            alt="Chef"
            className="w-full sm:w-auto"
            style={{
              height: "auto",
              maxHeight: "650px",
              objectFit: "cover",
            }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />

          <motion.div
            className="relative text-center sm:text-left sm:bottom-0 bottom-5"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl mb-5 text-orange-500 font-mono font-semibold">
              FRESH & TASTY FOOD
            </h2>
            <h1 className="text-4xl sm:text-6xl text-white font-semibold mb-5">
              Multi Cuisine with <br /> the Traditional Cuisine
            </h1>
            <h3 className="text-lg sm:text-2xl mb-5 text-white">
              Rosoi is one of the most popular Restaurants with a unique <br />
              & special menu made by our passionate chefs with love and <br />
              quality that can impress you.
            </h3>
            <h3 className="text-lg sm:text-2xl text-white">
              Call for Reservation
              <span className="text-orange-500 underline ml-2">
                +234 905 576 5770
              </span>
            </h3>
            <button className="border-x-2 border-gray-500 font-semibold mt-10 p-2 w-44 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out">
              View full Menu
            </button>
          </motion.div>
        </div>

        <div
          className="relative text-white font-semibold py-10"
          style={{
            backgroundImage: `url(${fx1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-orange-500 mb-5 text-lg md:text-xl">
              TESTIMONIALS
            </h1>
            <h3 className="text-2xl md:text-4xl mb-10 md:mb-20">
              Reviews about our test
            </h3>
          </div>

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
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-start justify-between mb-5">
                  <h4 className="text-lg md:text-xl flex-grow">
                    {testimonial.text}
                  </h4>
                  <img
                    className="flex-shrink-0 ml-3"
                    style={{ height: "35px", width: "35px" }}
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
        </div>
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
      </section>
    </>
  );
}
