import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Contact = () => (
  <section style={{
    padding: "90px 5% 110px",
    background: "linear-gradient(160deg, var(--ink) 0%, var(--deep) 55%, var(--ink) 100%)",
    minHeight: "60vh", position: "relative", overflow: "hidden"
  }}>
    <div style={{
      position: "absolute", width: 500, height: 500,
      background: "radial-gradient(circle, rgba(201,148,74,0.08) 0%, transparent 70%)",
      borderRadius: "50%", bottom: -100, left: -100, pointerEvents: "none"
    }} />
    <div className="container" style={{ position: "relative" }}>
      <motion.div className="text-center mb-5"
        initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-label">Get in Touch</span>
        <h2 className="section-title" style={{ color: "var(--cream)" }}>
          Contact{" "}
          <span style={{
            fontStyle: "italic",
            background: "linear-gradient(135deg, var(--gold), var(--gold-l))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
          }}>Dhanni Boutique</span>
        </h2>
        <div className="gold-line center" />
        <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>
          Order your perfect outfit with a simple message ✦
        </p>
      </motion.div>

      {/* Order channels */}
      <div className="row justify-content-center g-4 mb-5">
        {[
          { icon: "📸", title: "Instagram DM", desc: "View designs & place order directly",
            href: "https://instagram.com/dhanniboutique", btnText: "DM on Instagram",
            bg: "linear-gradient(45deg,#f58529,#dd2a7b,#8134af)" },
          { icon: "📲", title: "WhatsApp Order", desc: "Quick chat & measurements support",
            href: "https://wa.me/919057255829", btnText: "Chat on WhatsApp", bg: "#25d366" }
        ].map((item, i) => (
          <motion.div className="col-md-4" key={i}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
          >
            <div className="glass-card" style={{
              padding: "44px 30px", textAlign: "center", height: "100%",
              transition: "transform 0.35s, box-shadow 0.35s, border-color 0.35s"
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 24px 56px rgba(0,0,0,0.4)"; e.currentTarget.style.borderColor = "rgba(201,148,74,0.25)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; e.currentTarget.style.borderColor = ""; }}
            >
              <div style={{ fontSize: "2.2rem", marginBottom: 16 }}>{item.icon}</div>
              <h5 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.3rem", fontStyle:"italic", marginBottom:10, color:"var(--cream)" }}>
                {item.title}
              </h5>
              <p style={{ color:"var(--muted)", fontSize:"0.85rem", marginBottom:26, fontWeight:300, lineHeight:1.7 }}>{item.desc}</p>
              <a href={item.href} target="_blank" rel="noreferrer"
                style={{ padding:"9px 24px", background:item.bg, color:"#fff", borderRadius:"50px", fontFamily:"'Jost',sans-serif", fontSize:"0.72rem", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", display:"inline-block", transition:"all 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >{item.btnText}</a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Form */}
      <motion.div className="glass-card"
        style={{ padding:"52px 44px", maxWidth:560, margin:"0 auto" }}
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.8rem", fontStyle:"italic", textAlign:"center", marginBottom:6, color:"var(--cream)" }}>
          Send a Message
        </h3>
        <p style={{ textAlign:"center", color:"var(--muted)", fontSize:"0.84rem", marginBottom:30, fontWeight:300 }}>
          We'll get back to you within 24 hours ✦
        </p>
        <ContactForm />
      </motion.div>
    </div>
  </section>
);

export default Contact;
