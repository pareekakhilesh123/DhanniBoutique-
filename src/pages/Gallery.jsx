import { motion } from "framer-motion";
import col1 from "../assets/images/new/col1.jpg";
import col2 from "../assets/images/new/col2.jpg";
import col3 from "../assets/images/new/col3.jpg";
import col4 from "../assets/images/new/col4.jpg";
import col5 from "../assets/images/new/col5.jpg";
import col6 from "../assets/images/new/col6.jpg";

const images = [col1, col2, col3, col4, col5, col6];
const labels = ["Bridal Lehenga","Anarkali Suit","Ethnic Fusion","Festive Saree","Party Wear","Festive Kurti"];

const Gallery = () => (
  <section style={{
    padding: "90px 5% 110px",
    background: "linear-gradient(160deg, var(--ink) 0%, var(--deep) 50%, var(--ink) 100%)",
    minHeight: "60vh", position: "relative", overflow: "hidden"
  }}>
    <div style={{
      position: "absolute", width: 550, height: 550,
      background: "radial-gradient(circle, rgba(92,30,53,0.2) 0%, transparent 70%)",
      borderRadius: "50%", top: -100, right: -100, pointerEvents: "none"
    }} />
    <div className="container" style={{ position: "relative" }}>
      <motion.div className="text-center mb-5"
        initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-label">Gallery</span>
        <h2 className="section-title" style={{ color: "var(--cream)" }}>
          Our{" "}
          <span style={{
            fontStyle: "italic",
            background: "linear-gradient(135deg, var(--gold), var(--gold-l))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
          }}>Designs</span>
        </h2>
        <div className="gold-line center" />
        <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>
          A glimpse into our craftsmanship ✦
        </p>
      </motion.div>

      <div className="row g-3">
        {images.map((img, i) => (
          <motion.div className="col-sm-6 col-md-4" key={i}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}
          >
            <div className="gallery-box">
              <img src={img} alt={labels[i]} />
              <div className="g-overlay">
                <span style={{ color:"#fff", fontFamily:"'Playfair Display',serif", fontStyle:"italic", fontSize:"1rem" }}>{labels[i]}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-5">
        <a href="https://instagram.com/dhanniboutique" target="_blank" rel="noreferrer" className="btn-gold">
          Follow on Instagram
        </a>
      </div>
    </div>
  </section>
);

export default Gallery;
