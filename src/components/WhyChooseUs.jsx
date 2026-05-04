import { motion } from "framer-motion";
import { Scissors, Gem, Heart, Truck } from "react-bootstrap-icons";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const points = [
    { icon: <Scissors />, title: "Custom Stitching", text: "Perfect fitting according to your measurements" },
    { icon: <Gem />,      title: "Premium Fabric",   text: "High-quality fabrics with elegant finishing" },
    { icon: <Heart />,    title: "Personal Care",    text: "Every order handled with personal attention" },
    { icon: <Truck />,    title: "Easy Ordering",    text: "Order easily via Instagram & WhatsApp" },
  ];
  return (
    <section className="why-choose-section">
      <div className="container">
        <motion.div className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
        >
          <span className="section-label">Why Us</span>
          <h2 className="section-title" style={{ color: "var(--ink)" }}>
            Why Choose{" "}
            <span style={{ fontStyle: "italic", color: "var(--wine)" }}>Dhanni Boutique</span>
          </h2>
          <div className="gold-line center" style={{ background: "linear-gradient(90deg,transparent,var(--wine),transparent)" }} />
        </motion.div>
        <div className="row g-4">
          {points.map((item, i) => (
            <motion.div className="col-md-3 col-sm-6" key={i}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }} viewport={{ once: true }}
            >
              <div className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h6>{item.title}</h6>
                <p className="small">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
