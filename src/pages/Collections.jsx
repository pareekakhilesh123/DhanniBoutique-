import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import col1 from "../assets/images/new/col1.jpg";
import col2 from "../assets/images/new/col2.jpg";
import col3 from "../assets/images/new/col3.jpg";
import col4 from "../assets/images/new/col4.jpg";
import col5 from "../assets/images/new/col5.jpg";
import col6 from "../assets/images/new/col6.jpg";

const API_URL = "https://script.google.com/macros/s/AKfycbzmfqVPXB7aXhA3ppCzbx33TCcxiMRqP5A-s3JxPkrh69hacHTzYn4LTJvbHI9MKP4x/exec?sheet=collections_page";
const CACHE_KEY = "collectionsData";
const CACHE_TIME = 5 * 60 * 1000;

const fallback = [
  { title: "Bridal Lehenga",  image: col1, active: "yes" },
  { title: "Anarkali Suit",   image: col2, active: "yes" },
  { title: "Ethnic Fusion",   image: col3, active: "yes" },
  { title: "Festive Saree",   image: col4, active: "yes" },
  { title: "Party Wear",      image: col5, active: "yes" },
  { title: "Festive Kurti",   image: col6, active: "yes" },
];

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_TIME) {
            setCollections(parsed.data.length ? parsed.data : fallback);
            setLoading(false); return;
          }
        }
        const res = await fetch(API_URL);
        const data = await res.json();
        const active = data.filter(item => item.active?.toLowerCase() === "yes");
        const final = active.length ? active : fallback;
        setCollections(final);
        localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: final }));
      } catch { setCollections(fallback); }
      finally { setLoading(false); }
    };
    fetchData();
  }, []);

  return (
    <section style={{
      padding: "90px 5% 110px",
      background: "linear-gradient(160deg, var(--ink) 0%, var(--deep) 50%, var(--ink) 100%)",
      minHeight: "60vh", position: "relative", overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", width: 600, height: 600,
        background: "radial-gradient(circle, rgba(92,30,53,0.2) 0%, transparent 70%)",
        borderRadius: "50%", top: -150, right: -100, pointerEvents: "none"
      }} />
      <div className="container" style={{ position: "relative" }}>
        <motion.div className="text-center mb-5"
          initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Our Catalog</span>
          <h2 className="section-title" style={{ color: "var(--cream)" }}>
            Our{" "}
            <span style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, var(--gold), var(--gold-l))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>Collections</span>
          </h2>
          <div className="gold-line center" />
          <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>
            Discover our latest designs, crafted with love ✨
          </p>
        </motion.div>

        {loading ? <div className="text-center py-5"><div className="spinner-border" /></div> : (
          <div className="row g-4">
            {collections.map((item, i) => (
              <motion.div className="col-sm-6 col-md-4" key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }} viewport={{ once: true }}
              >
                <div className="glass-card" style={{ overflow: "hidden", transition: "transform 0.45s, box-shadow 0.45s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.boxShadow = "0 28px 64px rgba(0,0,0,0.5)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <img src={item.image} alt={item.title}
                      style={{ width:"100%", height:400, objectFit:"cover", transition:"transform 0.65s" }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.07)"}
                      onMouseLeave={e => e.currentTarget.style.transform = ""}
                    />
                  </div>
                  <div style={{ padding: "22px 24px 26px", textAlign: "center" }}>
                    <h5 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.2rem", fontStyle:"italic", marginBottom:14, color:"var(--cream)" }}>
                      {item.title}
                    </h5>
                    <a href="https://instagram.com/dhanniboutique" target="_blank" rel="noreferrer" className="btn-gold" style={{ padding:"8px 22px", fontSize:"0.72rem", borderRadius:"50px" }}>
                      DM to Order
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Collections;
