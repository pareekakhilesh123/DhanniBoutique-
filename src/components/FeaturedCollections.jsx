import { motion } from "framer-motion";


import suitsImg from "../assets/images/collections/suits.jpg";
import sareesImg from "../assets/images/collections/sarees.jpg";
import lehengasImg from "../assets/images/collections/lehengas.jpg";

const collections = [
  {
    title: "Suits",
    image: suitsImg,
  },
  {
    title: "Sarees",
    image: sareesImg,
  },
  {
    title: "Lehengas",
    image: lehengasImg,
  },
  
];

const FeaturedCollections = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Featured <span className="text-gold">Collections</span>
        </h2>

        <div className="row g-1">
          {collections.map((item, i) => (
            <motion.div
              className="col-md-4"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="collection-card text-center">
                <img src={item.image} alt={item.title}  style={{height:"350px", borderTopLeftRadius:"110px", borderTopRightRadius:"110px", borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px"}}/>
                <div className="collection-overlay">
                  <h5>{item.title}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
