import { motion } from "framer-motion";
import bgImg from "../assets/images/new/bg_dark.jpg";

const HomeCTA = () => (
  <section style={{
    padding: "130px 5%", position: "relative", overflow: "hidden",
    textAlign: "center", background: "var(--ink)"
  }}>
    {/* Background image overlay */}
    <div style={{
      position: "absolute", inset: 0, zIndex: 0,
      backgroundImage: `url(${bgImg})`,
      backgroundSize: "cover", backgroundPosition: "center",
      opacity: 0.15
    }} />
    {/* Gradient overlay */}
    <div style={{
      position: "absolute", inset: 0, zIndex: 1,
      background: "linear-gradient(145deg, rgba(26,10,16,0.8) 0%, rgba(92,30,53,0.6) 50%, rgba(26,10,16,0.85) 100%)"
    }} />
    {/* Concentric rings */}
    {[400, 600, 800].map((s, i) => (
      <div key={i} style={{
        position: "absolute", zIndex: 1,
        width: s, height: s,
        border: `1px solid rgba(201,148,74,${0.08 - i * 0.02})`,
        borderRadius: "50%", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)", pointerEvents: "none"
      }} />
    ))}

    <div className="container" style={{ position: "relative", zIndex: 2 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }} viewport={{ once: true }}
      >
        <span className="section-label" style={{ display: "block", textAlign: "center" }}>
          Ready to Order?
        </span>
        <h2 className="section-title" style={{
          color: "var(--cream)", fontSize: "clamp(2.8rem, 6vw, 4.5rem)", marginBottom: 20
        }}>
          Create your{" "}
          <span style={{
            fontStyle: "italic",
            background: "linear-gradient(135deg, var(--gold), var(--gold-l))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>perfect outfit</span>
        </h2>
        <div className="gold-line center" />
        <p style={{
          color: "var(--muted)", margin: "20px auto 48px",
          maxWidth: 420, fontSize: "0.95rem", lineHeight: 1.9, fontWeight: 300
        }}>
          DM us on Instagram or WhatsApp — we'll help you design something beautiful ✨
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://instagram.com/dhanniboutique" target="_blank" rel="noreferrer" className="btn-gold">
            ✨ DM on Instagram
          </a>
          <a href="https://wa.me/919057255829" target="_blank" rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              padding: "0.9rem 2.4rem", borderRadius: "50px",
              background: "transparent", border: "1px solid rgba(37,211,102,0.4)",
              color: "#25d366", fontFamily: "'Jost',sans-serif",
              fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
              transition: "all 0.3s"
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(37,211,102,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = ""; }}
          >
            📲 WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HomeCTA;
