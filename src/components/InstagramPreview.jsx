import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./InstagramPreview.css";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxtl1DoLLSwvejXbnq2E59-teXZKyfYGc8miNHIs3MXIukQglzb0lD7EV0PRLGrHuc80w/exec?sheet=instagram";

const InstagramPreview = () => {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const active = data.filter(
          (item) => item.active?.toLowerCase() === "yes"
        );
        setReels(active);
      });
  }, []);

  // 🔥 Instagram official embed script load
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [reels]);

  return (
    <section className="py-5 bg-white">
      <div className="container">

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold">
            Latest <span className="text-gold">Instagram Reels</span>
          </h2>
          <p className="text-muted mt-2">
            Our latest designs & styling ideas ✨
          </p>
        </motion.div>

        <div className="row justify-content-center g-4">
          {reels.map((item, i) => (
            <div
              className="col-12 col-md-4 d-flex justify-content-center"
              key={i}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={item.embed.replace("/embed", "")}
                data-instgrm-version="14"
                style={{ width: "100%" }}
              ></blockquote>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href="https://www.instagram.com/dhanniboutique"
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark btn-lg"
          >
            Follow on Instagram
          </a>
        </div>

      </div>
    </section>
  );
};

export default InstagramPreview;
