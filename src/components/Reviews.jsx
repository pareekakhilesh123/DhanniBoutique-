import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./reviews.css";

const API_URL =
  "https://script.google.com/macros/s/AKfycbz-XDNHGT7YdOlxroL6jJhDvCPs_zqOluuM8JkieDPUKAD4eXRJckZa00pE3AuYyQtXrQ/exec?sheet=reviews";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const activeReviews = data.filter(
          r => r.active?.toLowerCase() === "yes"
        );
        setReviews(activeReviews);
      })
      .catch(err => console.error("Fetch error:", err));
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
      </div>
    </section>
  );
};

export default Reviews;
