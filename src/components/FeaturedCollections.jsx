import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxXP-zM1w3o4F54jW6yRrrZdheuu5ZYt4LeI6UZEAHqvBpK7L1koP4uABCiE2s2p422BA/exec";

const FeaturedCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const activeOnly = data.filter(
          item => item.active?.toLowerCase() === "yes"
        );
        setCollections(activeOnly);
      });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Featured <span className="text-gold">Collections</span>
        </h2>

        <div className="row g-1">
          {collections.map((item, i) => (
            <motion.div
              className="col-md-4"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="collection-card text-center">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: "70%",
                    
                    objectFit: "cover",
                    borderTopLeftRadius: "110px",
                    borderTopRightRadius: "110px",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                />

                <div className="collection-overlay">
                  <h5>{item.title}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
