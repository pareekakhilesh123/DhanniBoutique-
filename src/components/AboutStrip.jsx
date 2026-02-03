import { motion } from "framer-motion";
import "./AboutStrip.css"
import ownerImg from "../assets/images/owner.jpg"; // 👈 owner photo

const AboutStrip = () => {
  return (
    <section className="about-owner-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* OWNER IMAGE */}
          <motion.div
            className="col-md-5 text-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="owner-img-box">
              <img src={ownerImg} alt="Dhanni Boutique Owner" />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            className="col-md-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold mb-3">
              Meet the <span className="text-gold">Creator</span>
            </h2>

            <p className="lead mb-3">
              Hi, I’m the heart behind <strong>Dhanni Boutique</strong> ✨
            </p>

            <p className="text-muted">
              Fashion has always been my passion. With Dhanni Boutique, my
              goal is to create outfits that celebrate tradition while
              embracing modern elegance. Every design is stitched with care,
              love, and attention to detail.
            </p>

            <p className="text-muted">
              I personally ensure that each outfit fits perfectly and makes
              you feel confident, beautiful, and special — just the way you
              deserve.
            </p>

            {/* Highlights */}
            <div className="row mt-4 g-3">
              <div className="col-sm-4">
                <div className="owner-point">Custom Fit</div>
              </div>
              <div className="col-sm-4">
                <div className="owner-point">Premium Fabric</div>
              </div>
              <div className="col-sm-4">
                <div className="owner-point">Personal Care</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutStrip;
