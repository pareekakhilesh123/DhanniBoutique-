import { motion } from "framer-motion";
import ElegantSarees from "../assets/images/collections/collectionpage/1.jpg";
import Suits from "../assets/images/collections/collectionpage/2.jpg";
import BridalLehengas from "../assets/images/collections/collectionpage/6.jpg";
import PartyWear from "../assets/images/collections/collectionpage/3.jpg";
import CustomStitching from "../assets/images/collections/collectionpage/4.jpg";
import FestiveCollection from "../assets/images/collections/collectionpage/5.jpg";

const collectionsData = [
  {
    title: "Designer Suits",
    img: Suits,
  },
  {
    title: "Elegant Sarees",
    img: ElegantSarees,
  },
  {
    title: "Bridal Lehengas",
    img: PartyWear,
  },
  {
    title: "Party Wear",
    img: BridalLehengas,
  },
  {
    title: "Custom Stitching",
    img: CustomStitching,
  },
  {
    title: "Festive Collection",
    img: FestiveCollection,
  },
];

const Collections = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Heading */}
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span style={{ color: "#c9a24d" }}>Collections</span>
        </motion.h2>

        {/* Grid */}
        <div className="row g-4">
          {collectionsData.map((item, index) => (
            <motion.div
              className="col-sm-6 col-md-4"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card border-0 shadow-sm collection-box h-100">
                <div className="img-wrapper">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid"
                  />
                </div>

                <div className="card-body text-center">
                  <h5 className="fw-semibold">{item.title}</h5>
                  <a
                    href="https://instagram.com/dhanniboutique"
                    target="_blank"
                    className="btn btn-outline-dark btn-sm mt-2"
                  >
                    DM to Order ✨
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
