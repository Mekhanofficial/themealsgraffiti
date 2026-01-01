import { useState, useEffect } from "react";
import ContactForm from "../../components/contact/ContactForm";
import ContactHero from "../../components/contact/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo";
import HeaderPage from "../../components/layout/Header";
import NewsletterSection from "../../components/shared/Newsletter";
import blogpx from "../../pictures/blogpx.jpg";
import contactpic from "../../pictures/contactpix.jpg";
import fx22 from "../../pictures/fx22.jpg";

export default function ContactPage() {

  return (
    <div className="overflow-x-hidden bg-black">
      <HeaderPage />
      <ContactHero backgroundImage={blogpx} />
      <ContactInfo backgroundImage={contactpic} />
      <ContactForm />
      <NewsletterSection backgroundImage={fx22} />

    </div>
  );
}