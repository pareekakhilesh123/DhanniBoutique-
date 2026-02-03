import React from 'react'
import { motion } from "framer-motion";
import heroImg from "../assets/images/hero.jpg";
import './Hero.css'

function Hero() {
  return (
    <div>
        <section className="boutique-hero">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className="col-md-6 hero-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>
              Make outfits <br />
              <span>you’ll always remember</span>
            </h1>

            <p>
              Beautifully crafted dresses, custom stitching  
              & elegant designs just for you ✨
            </p>

            <a
              href="https://instagram.com/dhanniboutique"
              target="_blank"
              className="hero-btn"
            >
              ✨ DM to Order
            </a>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="col-md-6 text-center hero-right"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="image-blob">
              <img src={heroImg} alt="Dhanni Boutique" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    </div>
  )
}

export default Hero