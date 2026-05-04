import { motion } from "framer-motion";
import Reviews from "../components/Reviews";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutStrip from "../components/AboutStrip";

const About = () => (
  <>
    <section style={{
      padding: "90px 5% 80px",
      background: "linear-gradient(160deg, var(--ink) 0%, var(--deep) 50%, var(--ink) 100%)",
      position: "relative", overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", width: 600, height: 600,
        background: "radial-gradient(circle, rgba(92,30,53,0.3) 0%, transparent 70%)",
        borderRadius: "50%", top: -150, right: -100, pointerEvents: "none"
      }} />
      <div className="container" style={{ position: "relative" }}>
        <motion.div className="text-center"
          initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Our Story</span>
          <h2 className="section-title" style={{ color: "var(--cream)" }}>
            About{" "}
            <span style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, var(--gold), var(--gold-l))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>Dhanni Boutique</span>
          </h2>
          <div className="gold-line center" />
          <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>
            Creating beautiful, elegant, and perfectly fitted outfits for women who love fashion ✨
          </p>
        </motion.div>
      </div>
    </section>
    <AboutStrip />
    <Reviews />
    <WhyChooseUs />
  </>
);

export default About;
