import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxXP-zM1w3o4F54jW6yRrrZdheuu5ZYt4LeI6UZEAHqvBpK7L1koP4uABCiE2s2p422BA/exec";

const FeaturedCollections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cached = localStorage.getItem("featuredCollections");

    //  Use cache if available
    if (cached) {
      setCollections(JSON.parse(cached));
      setLoading(false);
      return;
    }

    // ✅ Otherwise fetch from API
    fetch(API_URL)
      .then((res) => res.text())
      .then((txt) => {
        try {
          const json = JSON.parse(txt);

          const activeOnly = json.filter(
            (item) => item.active?.toLowerCase() === "yes"
          );

          setCollections(activeOnly);

          // Save to cache
          localStorage.setItem(
            "featuredCollections",
            JSON.stringify(activeOnly)
          );
        } catch {
          setError("Invalid JSON response");
        } finally {
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Featured <span className="text-gold">Collections</span>
        </h2>

        {/* ✅ Loading */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-dark"></div>
          </div>
        )}

        {/* ✅ Error */}
        {error && (
          <div className="text-center text-danger">
            {error}
          </div>
        )}

        {/* ✅ Data */}
        {!loading && !error && (
          <div className="row g-3">
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
                      width: "60%",
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
        )}
      </div>
    </section>
  );
};

export default FeaturedCollections;
