
import HeaderPage from "../../components/layout/Header";
import BlogHero from "../../components/blog/BlogHero";
import BlogGrid from "../../components/blog/BlogGrid";
import NewsletterSection from "../../components/shared/Newsletter";

export default function BlogPage() {
  

  return (
    <div className="overflow-x-hidden bg-black">
      <HeaderPage />
      <BlogHero />
      <BlogGrid />
      <NewsletterSection />
    </div>
  );
}