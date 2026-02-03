import React from "react";
import Hero from "../components/Hero";
import AboutStrip from "../components/AboutStrip";
import FeaturedCollections from "../components/FeaturedCollections";
import InstagramPreview from "../components/InstagramPreview";
import HomeCTA from "../components/HomeCTA";

function Home() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <FeaturedCollections />
      <InstagramPreview />
    
    </>
  );
}

export default Home;
