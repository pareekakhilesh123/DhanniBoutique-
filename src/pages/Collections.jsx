import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const API_URL =
  "https://script.google.com/macros/s/AKfycbzmfqVPXB7aXhA3ppCzbx33TCcxiMRqP5A-s3JxPkrh69hacHTzYn4LTJvbHI9MKP4x/exec?sheet=collections_page";

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedData = localStorage.getItem("collectionsData");

    // ✅ If cached data exists → use it (fast load)
    if (cachedData) {
      setCollections(JSON.parse(cachedData));
      setLoading(false);
      return;
    }

    // ✅ Otherwise fetch from API
    fetch(API_URL)
      .then((res) => res.text())
      .then((txt) => {
        try {
          const json = JSON.parse(txt);

          const active = json.filter(
            (item) => item.active?.toLowerCase() === "yes"
          );

          setCollections(active);

          // ✅ Save to localStorage
          localStorage.setItem("collectionsData", JSON.stringify(active));
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

        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our <span style={{ color: "#c9a24d" }}>Collections</span>
        </motion.h2>

        {/* ✅ Loading Spinner */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-dark"></div>
          </div>
        )}

        {/* ✅ Error Message */}
        {error && (
          <div className="text-center text-danger">
            {error}
          </div>
        )}

        {/* ✅ Collections */}
        {!loading && !error && (
          <div className="row g-4">
            {collections.map((item, index) => (
              <motion.div
                key={index}
                className="col-sm-6 col-md-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{
                      height: "440px",
                      objectFit: "contain",
                    }}
                  />

                  <div className="card-body text-center">
                    <h5>{item.title}</h5>

                    <a
                      href="https://instagram.com/dhanniboutique"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-dark btn-sm mt-2"
                    >
                      DM to Order ✨
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
