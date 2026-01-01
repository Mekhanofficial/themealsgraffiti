
import AboutContent from "../../components/about/AboutContent";
import AboutHero from "../../components/about/Hero";
import HeaderPage from "../../components/layout/Header";
import NewsletterSection from "../../components/shared/Newsletter";
import TestimonialsSection from "../../components/shared/Testimonials";
import px21 from "../../pictures/px21.jpg";


export default function AboutPage() {


  return (
    <section className="overflow-x-hidden bg-black">
      <HeaderPage />
      <AboutHero backgroundImage={px21} />
      <AboutContent />
      <TestimonialsSection />
      <NewsletterSection />
    </section>
  );
}