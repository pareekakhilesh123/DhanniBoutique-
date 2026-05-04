import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./reviews.css";

const API_URL = "https://script.google.com/macros/s/AKfycbz-XDNHGT7YdOlxroL6jJhDvCPs_zqOluuM8JkieDPUKAD4eXRJckZa00pE3AuYyQtXrQ/exec?sheet=reviews";
const CACHE_KEY = "reviewsData";
const CACHE_TIME = 5 * 60 * 1000;

const fallbackReviews = [
  { name: "Priya Sharma",   stars: 5, text: "Absolutely stunning outfit! The fabric quality is exceptional and the fitting was perfect. I've never felt so beautiful. Will definitely order again!" },
  { name: "Ritu Agarwal",   stars: 5, text: "Dhanni Boutique is my go-to for all special occasions. The custom stitching is flawless and delivery was on time. Highly recommended!" },
  { name: "Meera Joshi",    stars: 5, text: "The lehenga I ordered was beyond my expectations. The embroidery details are exquisite. So many compliments at the wedding!" },
  { name: "Anjali Verma",   stars: 5, text: "Ordered a bridal suit and the quality was outstanding. The owner is very helpful and the design suggestions were perfect for my style." },
];

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_TIME) {
            setReviews(parsed.data.length ? parsed.data : fallbackReviews);
            setLoading(false); return;
          }
        }
        const res = await fetch(API_URL);
        const data = await res.json();
        const active = data.filter(r => r.active?.toLowerCase() === "yes");
        const final = active.length ? active : fallbackReviews;
        setReviews(final);
        localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: final }));
      } catch {
        setReviews(fallbackReviews);
      } finally { setLoading(false); }
    };
    fetchData();
  }, []);

  return (
    <section className="reviews-section">
      <div className="container">
        <motion.div className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
        >
          <span className="section-label">Happy Clients</span>
          <h2 className="section-title" style={{ color: "var(--cream)" }}>
            What Our{" "}
            <span style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, var(--gold), var(--gold-l))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>Customers Say</span>
          </h2>
          <div className="gold-line center" />
        </motion.div>

        {loading ? <div className="text-center py-4"><div className="spinner-border" /></div> : (
          <Swiper modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={24} slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={i}>
                <div className="testi-card">
                  <div className="t-stars">{"★".repeat(Number(r.stars || 5))}</div>
                  <p className="t-quote">"{r.text}"</p>
                  <div className="t-author">
                    <div className="t-avatar">{r.name?.[0] || "✨"}</div>
                    <div>
                      <span className="t-name">{r.name}</span>
                      <span className="t-loc">Verified Customer</span>
                    </div>
                  </div>
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
