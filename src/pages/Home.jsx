import React from "react";
import Hero from "../components/Hero";
import AboutStrip from "../components/AboutStrip";
import FeaturedCollections from "../components/FeaturedCollections";
import InstagramPreview from "../components/InstagramPreview";
import HomeCTA from "../components/HomeCTA";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <FeaturedCollections />
        <Reviews />
      <WhyChooseUs />
      
        
      <InstagramPreview />
      
    
    </>
  );
}

export default Home;
