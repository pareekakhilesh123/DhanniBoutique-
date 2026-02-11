import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const API_URL =
  "YOUR_COLLECTIONS_API_URL";

const CACHE_KEY = "collectionsData";
const CACHE_TIME_KEY = "collectionsData_time";
const CACHE_DURATION = 10 * 60 * 1000;

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(CACHE_TIME_KEY);

    if (cached && cachedTime) {
      const isExpired = Date.now() - Number(cachedTime) > CACHE_DURATION;
      if (!isExpired) {
        setCollections(JSON.parse(cached));
        setLoading(false);
        return;
      }
    }

    fetch(API_URL)
      .then(res => res.text())
      .then(txt => {
        try {
          const json = JSON.parse(txt);
          const active = json.filter(
            item => item.active?.toLowerCase() === "yes"
          );

          setCollections(active);
          localStorage.setItem(CACHE_KEY, JSON.stringify(active));
          localStorage.setItem(CACHE_TIME_KEY, Date.now());
        } catch {
          setError("Invalid JSON response");
        } finally {
          setLoading(false);
        }
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our <span style={{ color: "#c9a24d" }}>Collections</span>
        </motion.h2>

        {loading && <div className="text-center py-5">
          <div className="spinner-border"></div>
        </div>}

        {error && <div className="text-danger text-center">{error}</div>}

        {!loading && !error &&
          <div className="row g-4">
            {collections.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="card shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{ height: "440px", objectFit: "contain" }}
                  />
                  <div className="card-body text-center">
                    <h5>{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }

      </div>
    </section>
  );
};

export default Collections;
