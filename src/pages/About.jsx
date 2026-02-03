import { motion } from "framer-motion";

const About = () => {
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
          About <span style={{ color: "#c9a24d" }}>Dhanni Boutique</span>
        </motion.h2>

        <div className="row align-items-center mt-5">
          {/* Text */}
          <motion.div
            className="col-md-6 mb-4 mb-md-0"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="lead">
              <strong>Dhanni Boutique</strong> is all about creating
              beautiful, elegant, and perfectly fitted outfits for women.
            </p>

            <p className="text-muted">
              We believe every outfit should reflect confidence, culture,
              and comfort. From daily wear to festive and bridal designs,
              each piece is crafted with care and attention to detail.
            </p>

            <p className="text-muted">
              ✂ Custom stitching • 👗 Trendy designs • 💎 Premium finishing
            </p>

            <a
              href="https://instagram.com/dhanniboutique"
              target="_blank"
              className="btn btn-dark mt-3"
            >
              ✨ DM to Order
            </a>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="row g-3">
              <div className="col-6">
                <div className="p-4 shadow-sm text-center rounded">
                  <h5 className="fw-bold">Custom Fit</h5>
                  <p className="small text-muted">
                    Perfect stitching for every body type
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="p-4 shadow-sm text-center rounded">
                  <h5 className="fw-bold">Premium Fabric</h5>
                  <p className="small text-muted">
                    Quality material & finishing
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="p-4 shadow-sm text-center rounded">
                  <h5 className="fw-bold">Latest Trends</h5>
                  <p className="small text-muted">
                    Modern & ethnic fusion styles
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="p-4 shadow-sm text-center rounded">
                  <h5 className="fw-bold">Easy Order</h5>
                  <p className="small text-muted">
                    Order easily via Instagram & WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
