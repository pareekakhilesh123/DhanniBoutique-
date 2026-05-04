import { motion } from "framer-motion";
import heroImg from "../assets/images/new/hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="boutique-hero">
      <div className="hero-mesh" />
      <div className="hero-grid-lines" />

      {/* Floating orbs */}
      <div className="h-orb" style={{ width:400, height:400, background:"rgba(92,30,53,0.35)", top:-100, right:-60, "--t":"11s", "--dx":"-20px", "--dy":"30px" }} />
      <div className="h-orb" style={{ width:300, height:300, background:"rgba(201,148,74,0.12)", bottom:50, left:"10%", "--t":"8s", "--dx":"30px", "--dy":"-15px" }} />

      <div className="hero-inner">
        {/* LEFT */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <div className="eyebrow-dot" />
            <span>New Collection 2025</span>
            <div className="eyebrow-dot" />
          </div>

          <h1 className="hero-h1">
            Grace in<br />
            <span className="word-italic">Every</span><br />
            Stitch
          </h1>

          <div className="hero-divider" />

          <p className="hero-desc">
            Beautifully crafted dresses, custom stitching &amp; elegant designs
            made just for you — where tradition meets modern grace ✨
          </p>

          <div className="hero-ctas">
            <a href="https://instagram.com/dhanniboutique" target="_blank" rel="noreferrer" className="btn-gold">
              ✨ DM to Order
            </a>
            <a href="#collections" className="btn-ghost">
              View Collections →
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat"><span className="n">500+</span><span className="l">Designs</span></div>
            <div className="hero-stat"><span className="n">4.9★</span><span className="l">Rating</span></div>
            <div className="hero-stat"><span className="n">3k+</span><span className="l">Happy Clients</span></div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-visual">
          <div className="hero-frame">
            <div className="hero-ring" />
            <div className="hero-ring-2" />
            <div className="hero-frame-inner">
              <img src={heroImg} alt="Dhanni Boutique" />
            </div>

            <div className="hero-accent hero-accent-1">
              <div className="accent-ic">✨</div>
              <div>
                <span className="accent-lbl">Handcrafted</span>
                <span className="accent-val">Premium Fabrics</span>
              </div>
            </div>

            <div className="hero-accent hero-accent-2">
              <span className="accent-badge">Trusted By</span>
              <span className="accent-num">3000+</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse"><div className="scroll-dot" /></div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
