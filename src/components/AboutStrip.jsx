import { motion } from "framer-motion";
import ownerImg from "../assets/images/new/owner.jpg";
// import accentImg from "../assets/images/new/hero_accent.jpg";
import "./AboutStrip.css";

const AboutStrip = () => {
  return (
    <section className="about-section" style={{
      padding: "110px 5%",
      background: "var(--deep)", position: "relative", overflow: "hidden"
    }}>
      {/* Background orb */}
      <div style={{
        position: "absolute", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(92,30,53,0.3) 0%, transparent 70%)",
        borderRadius: "50%", top: -150, right: -80, pointerEvents: "none"
      }} />

      <div className="container">
        <div className="about-grid">
          {/* Visual */}
          <motion.div className="about-visual-wrap"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }} viewport={{ once: true }}
          >
            <div className="about-main-img" >
              <img src={ownerImg} alt="Dhanni Boutique Owner"  />
            </div>
            {/* <div className="about-float-img">
              <img src={accentImg} alt="Boutique" />
            </div> */}
            <div className="about-gold-badge">
              <span className="n">500+</span>
              <span className="l">Happy Clients</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }} viewport={{ once: true }}
          >
            <span className="section-label">Our Story</span>
            <h2 className="section-title" style={{ color: "var(--cream)", marginBottom: 12 }}>
              Meet the{" "}
              <span style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, var(--gold), var(--gold-l))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>Creator</span>
            </h2>
            <div className="gold-line" />

            <p style={{ fontSize: "1.05rem", marginBottom: 14, color: "var(--cream)", fontWeight: 300, lineHeight: 1.8 }}>
              Hii, I'm the heart behind{" "}
              <strong style={{ color: "var(--gold)", fontFamily: "'Playfair Display',serif" }}>
                Dhanni Boutique
              </strong> ✨
            </p>
            <p style={{ color: "var(--muted)", marginBottom: 14, lineHeight: 1.95, fontWeight: 300, fontSize: "0.92rem" }}>
              Fashion has always been my passion. With Dhanni Boutique, my goal is to create
              outfits that celebrate tradition while embracing modern elegance. Every design
              is stitched with care, love, and attention to detail.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.95, fontWeight: 300, fontSize: "0.92rem" }}>
              I personally ensure that each outfit fits perfectly and makes you feel confident,
              beautiful, and special — just the way you deserve.
            </p>

            <div className="about-features">
              {[
                { ic: "✂️", t: "Custom Fit",     d: "Tailored to your exact measurements" },
                { ic: "💎", t: "Premium Fabric", d: "Sourced for quality & elegance" },
                { ic: "🌸", t: "Latest Trends",  d: "Modern & ethnic fusion designs" },
                { ic: "📱", t: "Easy Ordering",  d: "Order via Instagram & WhatsApp" },
              ].map((f, i) => (
                <div key={i} className="about-feat">
                  <div className="ic" style={{ fontSize: "1.5rem", marginBottom: 6 }}>{f.ic}</div>
                  <h4 style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.95rem", color: "var(--cream)", marginBottom: 4 }}>{f.t}</h4>
                  <p style={{ fontSize: "0.76rem", color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>{f.d}</p>
                </div>
              ))}
            </div>

            <a href="https://instagram.com/dhanniboutique" target="_blank" rel="noreferrer" className="btn-gold">
              ✨ DM to Order
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStrip;
