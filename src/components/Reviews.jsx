import { motion } from "framer-motion";
import './reviews.css'

const reviews = [
  {
    name: "Pooja Sharma",
    text: "Perfect fitting and beautiful design ❤️ Loved the quality!",
  },
  {
    name: "Neha Verma",
    text: "Very elegant stitching, exactly as I wanted ✨",
  },
  {
    name: "Anjali Meena",
    text: "Best boutique experience, highly recommended ⭐⭐⭐⭐⭐",
  },
];

const Reviews = () => {
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

        <div className="row g-4">
          {reviews.map((review, i) => (
            <motion.div
              className="col-md-4"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="review-card">
                <p className="review-text">“{review.text}”</p>
                <h6 className="fw-bold mt-3 mb-0">{review.name}</h6>
                <span className="stars">⭐⭐⭐⭐⭐</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
