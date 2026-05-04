import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  { to:"/price-list",    emoji:"💰", title:"Price List",       desc:"View all stitching prices" },
  { to:"/size-guide",    emoji:"📐", title:"Size Guide",       desc:"Find your perfect fit" },
  { to:"/fabric-picker", emoji:"🎨", title:"Fabric Picker",    desc:"Customise your outfit" },
  // { to:"/track-order",   emoji:"⏳", title:"Track Order",      desc:"Check order status" },
  { to:"/appointment",   emoji:"📅", title:"Book Appointment", desc:"Schedule a fitting" },
  { to:"/before-after",  emoji:"📸", title:"Transformations",  desc:"See our work" },
  { to:"/referral",      emoji:"⭐", title:"Refer & Earn",     desc:"Get rewards" },
  // { to:"/notify-me",     emoji:"🔔", title:"Notify Me",        desc:"New collection alerts" },
];

const FeatureShortcuts = () => (
  <section style={{ padding:"80px 5%", background:"var(--deep)", position:"relative", overflow:"hidden" }}>
    <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 50% at 50% 100%,rgba(201,148,74,0.07) 0%,transparent 70%)", pointerEvents:"none" }} />
    <div className="container" style={{ position:"relative" }}>
      <motion.div className="text-center mb-5"
        initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.7 }} viewport={{ once:true }}
      >
        <span className="section-label">Everything You Need</span>
        <h2 className="section-title" style={{ color:"var(--cream)" }}>
          Quick{" "}
          <span style={{ fontStyle:"italic", background:"linear-gradient(135deg,var(--gold),var(--gold-l))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Features</span>
        </h2>
        <div className="gold-line center" />
      </motion.div>

      <div className="row g-3">
        {features.map((f,i) => (
          <motion.div className="col-6 col-md-4" key={i}
            initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.5, delay:i*0.06 }} viewport={{ once:true }}
          >
            <Link to={f.to} style={{ textDecoration:"none" }}>
              <div style={{
                padding:"24px 16px", borderRadius:18, textAlign:"center",
                background:"rgba(255,255,255,0.03)", border:"1px solid rgba(201,148,74,0.12)",
                transition:"all 0.35s", cursor:"pointer", height:"100%"
              }}
                onMouseEnter={e => { e.currentTarget.style.background="rgba(201,148,74,0.09)"; e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.borderColor="rgba(201,148,74,0.3)"; e.currentTarget.style.boxShadow="0 16px 40px rgba(0,0,0,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.03)"; e.currentTarget.style.transform=""; e.currentTarget.style.borderColor="rgba(201,148,74,0.12)"; e.currentTarget.style.boxShadow=""; }}
              >
                <div style={{ fontSize:"1.8rem", marginBottom:10 }}>{f.emoji}</div>
                <h6 style={{ fontFamily:"'Playfair Display',serif", color:"var(--cream)", fontSize:"0.88rem", marginBottom:4, fontStyle:"italic" }}>{f.title}</h6>
                <p style={{ fontSize:"0.7rem", color:"var(--muted)", margin:0, fontWeight:300 }}>{f.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureShortcuts;
