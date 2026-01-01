import AboutSection from "../../components/home/AboutSection";
import BlogSection from "../../components/home/BlogSection";
import EventsSection from "../../components/home/EventsSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import HeroSection from "../../components/home/Hero";
import MenuSection from "../../components/home/MenuSection";
import HeaderPage from "../../components/layout/Header";
import NewsletterSection from "../../components/shared/Newsletter";
import TestimonialsSection from "../../components/shared/Testimonials";



export default function HomePage() {
  return (
    <section style={{ overflowX: "hidden" }}>
      <HeaderPage/>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <FeaturesSection />
      <EventsSection />
      <TestimonialsSection />
      <BlogSection />
      <NewsletterSection />
    </section>
  );
}