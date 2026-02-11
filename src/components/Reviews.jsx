import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./reviews.css";

const API_URL =
  "https://script.google.com/macros/s/AKfycbz-XDNHGT7YdOlxroL6jJhDvCPs_zqOluuM8JkieDPUKAD4eXRJckZa00pE3AuYyQtXrQ/exec?sheet=reviews";

const CACHE_KEY = "reviewsData";
const CACHE_TIME = 5 * 60 * 1000; // 5 minutes

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);

        // ✅ If cache exists
        if (cached) {
          const parsed = JSON.parse(cached);

          // Check expiry
          if (Date.now() - parsed.timestamp < CACHE_TIME) {
            setReviews(parsed.data);
            setLoading(false);
            return;
          }
        }

        // ✅ Fetch fresh data
        const res = await fetch(API_URL);
        const data = await res.json();

        const activeReviews = data.filter(
          (r) => r.active?.toLowerCase() === "yes"
        );

        setReviews(activeReviews);

        // Save with timestamp
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            data: activeReviews,
          })
        );

      } catch (err) {
        console.error(err);
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="reviews-section">
      <div className="container">
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our <span className="text-gold">Customers Say</span>
        </motion.h2>

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

        {!loading && !error && reviews.length > 0 && (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="review-card">
                  <p className="review-text">“{review.text}”</p>
                  <h6 className="fw-bold mt-3 mb-1">
                    {review.name}
                  </h6>
                  <span className="stars">
                    {"⭐".repeat(Number(review.stars || 5))}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Reviews;
