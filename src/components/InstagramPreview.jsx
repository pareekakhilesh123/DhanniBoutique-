import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./InstagramPreview.css";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxtl1DoLLSwvejXbnq2E59-teXZKyfYGc8miNHIs3MXIukQglzb0lD7EV0PRLGrHuc80w/exec?sheet=instagram";

const CACHE_KEY = "instagramReels";
const CACHE_TIME = 5 * 60 * 1000; //

const InstagramPreview = () => {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);

        //Use cache if valid
        if (cached) {
          const parsed = JSON.parse(cached);

          if (Date.now() - parsed.timestamp < CACHE_TIME) {
            setReels(parsed.data);
            setLoading(false);
            return;
          }
        }

        //  Fetch fresh data
        const res = await fetch(API_URL);
        const data = await res.json(); // direct JSON

        const active = data.filter(
          (item) => item.active?.toLowerCase() === "yes"
        );

        setReels(active);

        // Save with timestamp
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            data: active,
          })
        );

      } catch (err) {
        console.error(err);
        setError("Failed to load Instagram reels");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 
  useEffect(() => {
    if (!loading && reels.length > 0) {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => {
          window.instgrm?.Embeds.process();
        };
        document.body.appendChild(script);
      }
    }
  }, [loading, reels]);

  return (
    <section style={{ padding: "90px 0", background: "linear-gradient(160deg, var(--deep) 0%, var(--ink) 100%)", position: "relative" }}>
      <div className="container">

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-label" style={{ display: "block", textAlign: "center" }}>Instagram</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,4.5vw,3.2rem)", color: "var(--cream)", fontWeight: 400 }}>
            Latest <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, var(--gold), var(--gold-light))", WebkitBackgroundClip: "text", backgroundClip: "text" }}>Instagram Reels</span>
          </h2>
          <p style={{ color: "var(--muted)", marginTop: 10, fontWeight: 300, fontSize: "0.9rem" }}>
            Our latest designs & styling ideas ✨
          </p>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-dark"></div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center text-danger">
            {error}
          </div>
        )}

        {/* Reels */}
        {!loading && !error && reels.length > 0 && (
          <div className="row justify-content-center g-4">
            {reels.map((item, i) => (
              <div
                className="col-12 col-md-4 d-flex justify-content-center"
                key={i}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={
                    item.embed?.replace("/embed", "")
                  }
                  data-instgrm-version="14"
                  style={{ width: "100%" }}
                ></blockquote>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-5">
          <a
            href="https://www.instagram.com/dhanniboutique"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "13px 32px",
              background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
              color: "white", borderRadius: 4, textDecoration: "none",
              fontFamily: "'Cinzel', serif",
              fontWeight: 700, fontSize: "0.7rem",
              letterSpacing: "0.15em", textTransform: "uppercase",
              display: "inline-block",
              boxShadow: "0 8px 24px rgba(212,175,106,0.3)",
              transition: "all 0.3s"
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(212,175,106,0.45)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 24px rgba(212,175,106,0.3)"; }}
          >
            Follow on Instagram
          </a>
        </div>

      </div>
    </section>
  );
};

export default InstagramPreview;
