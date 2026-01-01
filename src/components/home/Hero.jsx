import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gbg2 from "../../pictures/gbg2.jpg";
import heropix1 from "../../pictures/heropix1.png";
import heropix2 from "../../pictures/heropix2.png";
import heropix3 from "../../pictures/heropix3.png";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "TASTE THE ARTISTRY",
      subtitle: "Bold, Unforgettable Tastes",
      description:
        "Delight in expertly crafted dishes that transport you to a world of exquisite flavor.",
      buttonText: "Reserve Your Table",
      imageSrc: heropix1,
    },
    {
      title: "CULINARY MASTERPIECE",
      subtitle: "Where Passion Meets Perfection",
      description:
        "Every dish is a work of art, thoughtfully prepared by chefs who pour their soul into every bite.",
      buttonText: "Order Your Favorites",
      imageSrc: heropix2,
    },
    {
      title: "A JOURNEY THROUGH FLAVOR",
      subtitle: "Crafted with Love, Served with Passion",
      description:
        "Embark on a unique gastronomic adventure that will leave you craving more. A taste experience like no other.",
      buttonText: "Explore Our Menu",
      imageSrc: heropix3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative -mt-20">
      <div className="relative h-screen">
        <img
          className="absolute inset-0 w-full h-full object-cover z-[-2]"
          src={gbg2}
          alt="Background image showcasing a restaurant or food ambiance"
        />

        <div className="flex flex-col md:flex-row items-center justify-center mx-5 md:mx-20 text-white relative h-full">
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
                to="tel:+2349160002472"
                className="border-2 border-gray-500 font-semibold mt-10 p-3 w-full md:w-44 hover:bg-orange-500 hover:text-white transition-colors duration-300 button-animate cursor-pointer z-10"
              >
                {slides[currentIndex].buttonText}
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
            <img
              className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain transition-opacity duration-500 ease-in-out opacity-100 image-animate"
              src={slides[currentIndex].imageSrc}
              alt="A delicious meal prepared by passionate chefs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}