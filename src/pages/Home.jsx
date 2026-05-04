import Hero from "../components/Hero";
import AboutStrip from "../components/AboutStrip";
import FeaturedCollections from "../components/FeaturedCollections";
import Reviews from "../components/Reviews";
import WhyChooseUs from "../components/WhyChooseUs";
import InstagramPreview from "../components/InstagramPreview";
import HomeCTA from "../components/HomeCTA";
import FeatureShortcuts from "../components/FeatureShortcuts";

const marqueeItems = ["Custom Stitching", "✦", "Premium Fabrics", "✦", "Bridal Lehenga", "✦", "Anarkali Suits", "✦", "Ethnic Fusion", "✦", "Party Wear", "✦", "Festive Designs", "✦", "Free Customization"];

function Home() {
  return (
    <>
      <Hero />
      {/* Marquee Strip */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={item === "✦" ? "m-dot" : ""}>{item}</span>
          ))}
        </div>
      </div>
      <FeaturedCollections />
      <AboutStrip />
      <Reviews />
      <WhyChooseUs />
      <FeatureShortcuts />
      <InstagramPreview />
      <HomeCTA />
    </>
  );
}

export default Home;
