import { motion } from "framer-motion";
import "./InstagramPreview.css"

const reels = [
  "https://www.instagram.com/reel/DUQr-AwEq4N/embed",
  "https://www.instagram.com/reel/DUD2VYzkuEg/embed", // yahan dusri reel ID
  "https://www.instagram.com/reel/DT95gQuEl9g/embed", // yahan teesri reel ID  
];

const InstagramPreview = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">

        {/* Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold">
            Latest <span className="text-gold">Instagram Reels</span>
          </h2>
          <p className="text-muted mt-2">
            Our latest designs & styling ideas ✨
          </p>
        </motion.div>

        {/* REELS GRID */}
        <div className="row justify-content-center g-4">
          {reels.map((src, index) => (
            <motion.div
              className="col-12 col-md-4 d-flex justify-content-center"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="reel-box">
                <iframe
                  src={src}
                  frameBorder="0"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <a
            href="https://www.instagram.com/dhanniboutique"
            target="_blank"
            className="btn btn-dark btn-lg"
          >
            Follow on Instagram
          </a>
        </div>

      </div>
    </section>
  );
};

export default InstagramPreview;
