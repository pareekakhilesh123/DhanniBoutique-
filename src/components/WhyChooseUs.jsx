import { motion } from "framer-motion";
import { Scissors, Gem, Heart, Truck } from "react-bootstrap-icons";
import "./WhyChooseUs.css"

const WhyChooseUs = () => {
  const points = [
    {
      icon: <Scissors />,
      title: "Custom Stitching",
      text: "Perfect fitting according to your measurements",
    },
    {
      icon: <Gem />,
      title: "Premium Fabric",
      text: "High-quality fabrics with elegant finishing",
    },
    {
      icon: <Heart />,
      title: "Personal Care",
      text: "Every order handled with personal attention",
    },
    {
      icon: <Truck />,
      title: "Easy Ordering",
      text: "Order easily via Instagram & WhatsApp",
    },
  ];

  return (
    <section className="why-choose-section">
      <div className="container">
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose <span className="text-gold">Dhanni Boutique</span>
        </motion.h2>

        <div className="row g-4">
          {points.map((item, i) => (
            <motion.div
              className="col-md-3 col-sm-6"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h6 className="fw-bold mt-3">{item.title}</h6>
                <p className="small text-muted">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
