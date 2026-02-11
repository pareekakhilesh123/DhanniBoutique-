import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxXP-zM1w3o4F54jW6yRrrZdheuu5ZYt4LeI6UZEAHqvBpK7L1koP4uABCiE2s2p422BA/exec";

const CACHE_KEY = "featuredCollections";
const CACHE_TIME_KEY = "featuredCollectionsTime";
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

const FeaturedCollections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const text = await res.text();
        const json = JSON.parse(text);

        const activeOnly = json.filter(
          (item) => item.active?.toLowerCase() === "yes"
        );

        setCollections(activeOnly);

        // Save fresh data
        localStorage.setItem(CACHE_KEY, JSON.stringify(activeOnly));
        localStorage.setItem(CACHE_TIME_KEY, Date.now());

      } catch (err) {
        setError("Failed to load data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(CACHE_TIME_KEY);

    if (cachedData && cachedTime) {
      const isExpired =
        Date.now() - cachedTime > CACHE_DURATION;

      if (!isExpired) {
        setCollections(JSON.parse(cachedData));
        setLoading(false);

        // Background me fresh data bhi fetch kar lo
        fetchData();
        return;
      }
    }

    // Agar cache nahi hai ya expire ho gaya
    fetchData();
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Featured <span className="text-gold">Collections</span>
        </h2>

        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-dark"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-danger">
            {error}
          </div>
        )}

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
