import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import col1 from "../assets/images/new/col1.jpg";
import col2 from "../assets/images/new/col2.jpg";
import col3 from "../assets/images/new/col3.jpg";
import col4 from "../assets/images/new/col4.jpg";

const API_URL = "https://script.google.com/macros/s/AKfycbxXP-zM1w3o4F54jW6yRrrZdheuu5ZYt4LeI6UZEAHqvBpK7L1koP4uABCiE2s2p422BA/exec";
const CACHE_KEY = "featuredCollections";
const CACHE_TIME_KEY = "featuredCollectionsTime";
const CACHE_DURATION = 60 * 60 * 1000;

const fallbackItems = [
  { title: "Bridal Lehenga", image: col1, tag: "Bridal" },
  { title: "Anarkali Suit",  image: col2, tag: "Festive" },
  { title: "Ethnic Fusion",  image: col3, tag: "Trending" },
  { title: "Festive Saree",  image: col4, tag: "Party" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }
  })
};

const FeaturedCollections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const text = await res.text();
        const json = JSON.parse(text);
        const active = json.filter(item => item.active?.toLowerCase() === "yes");
        if (active.length) {
          setCollections(active);
          localStorage.setItem(CACHE_KEY, JSON.stringify(active));
          localStorage.setItem(CACHE_TIME_KEY, Date.now());
        } else {
          setCollections(fallbackItems);
        }
      } catch {
        setCollections(fallbackItems);
      } finally {
        setLoading(false);
      }
    };
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
    if (cachedData && cachedTime && Date.now() - cachedTime < CACHE_DURATION) {
      const parsed = JSON.parse(cachedData);
      setCollections(parsed.length ? parsed : fallbackItems);
      setLoading(false);
      fetchData(); return;
    }
    fetchData();
  }, []);

  return (
    <section id="collections" style={{
      padding: "110px 5%",
      background: "linear-gradient(170deg, var(--ink) 0%, var(--deep) 55%, var(--ink) 100%)",
      position: "relative", overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", width: 700, height: 700,
        background: "radial-gradient(circle, rgba(201,148,74,0.07) 0%, transparent 65%)",
        borderRadius: "50%", right: -150, top: -100, pointerEvents: "none"
      }} />

      <div className="container">
        <motion.div className="text-center mb-5"
          initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
        >
          <span className="section-label">Our Catalog</span>
          <h2 className="section-title" style={{ color: "var(--cream)" }}>
            Featured{" "}
            <span style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, var(--gold), var(--gold-l))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>Collections</span>
          </h2>
          <div className="gold-line center" />
          <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>
            Handpicked designs crafted with love & tradition ✨
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-5"><div className="spinner-border" /></div>
        ) : (
          <div className="row g-4">
            {collections.map((item, i) => (
              <motion.div className="col-md-3 col-sm-6" key={i}
                custom={i} initial="hidden" whileInView="visible"
                variants={cardVariants} viewport={{ once: true }}
              >
                <div className="cat-card">
                  <div className="cat-bg">
                    <img src={item.image} alt={item.title} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                  </div>
                  <div className="cat-overlay" />
                  {item.tag && <span className="cat-tag">{item.tag}</span>}
                  <div className="cat-info">
                    <h3>{item.title}</h3>
                    <p>Custom stitching available</p>
                    <a href="https://instagram.com/dhanniboutique" target="_blank" rel="noreferrer">
                      <div className="cat-arrow">→</div>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-5">
          <a href="/collections" className="btn-ghost">View All Collections →</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
