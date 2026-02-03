import { motion } from "framer-motion";

const galleryImages = Array.from({ length: 9 }).map(
  (_, i) => `https://source.unsplash.com/500x600/?indian,boutique,fashion,${i}`
);

const Gallery = () => {
  return (
    <section className="py-5">
      <div className="container">

        {/* Heading */}
        <motion.h2
          className="text-center fw-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Instagram <span style={{ color: "#c9a24d" }}>Gallery</span>
        </motion.h2>

        <p className="text-center text-muted mb-5">
          Latest designs from Dhanni Boutique ✨
        </p>

        {/* Grid */}
        <div className="row g-3">
          {galleryImages.map((img, index) => (
            <motion.div
              className="col-6 col-md-4"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href="https://instagram.com/dhanniboutique"
                target="_blank"
                className="gallery-box"
              >
                <img src={img} alt="Boutique Design" />
                <div className="overlay">
                  <span>✨ DM to Order</span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <a
            href="https://instagram.com/dhanniboutique"
            target="_blank"
            className="btn btn-dark btn-lg"
          >
            View More on Instagram 📸
          </a>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
