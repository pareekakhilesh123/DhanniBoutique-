import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* Heading */}
        <motion.h2
          className="text-center fw-bold mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact <span style={{ color: "#c9a24d" }}>Dhanni Boutique</span>
        </motion.h2>

        <p className="text-center text-muted mb-5">
          Order your perfect outfit with a simple message ✨
        </p>

        <div className="row justify-content-center g-4">

          {/* Instagram */}
          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card border-0 shadow text-center h-100">
              <div className="card-body py-5">
                <h5 className="fw-bold">Instagram DM</h5>
                <p className="small text-muted">
                  View designs & place order directly
                </p>
                <a
                  href="https://instagram.com/dhanniboutique"
                  target="_blank"
                  className="btn btn-dark mt-3"
                >
                  DM on Instagram ✨
                </a>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card border-0 shadow text-center h-100">
              <div className="card-body py-5">
                <h5 className="fw-bold">WhatsApp Order</h5>
                <p className="small text-muted">
                  Quick chat & measurements support
                </p>
                <a
                  href="https://wa.me/9057255829"
                  target="_blank"
                  className="btn btn-success mt-3"
                >
                  Chat on WhatsApp 📲
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Footer CTA */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="fw-semibold">
            ✨ Make beautiful outfit for you ✨
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
