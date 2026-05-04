import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  {
    name: "Lehenga",
    icon: "👗",
    items: [
      { name: "Simple Lehenga", price: "₹1,500 – ₹2,500", note: "Plain fabric, basic embroidery" },
      { name: "Designer Lehenga", price: "₹3,000 – ₹6,000", note: "Heavy work, premium fabric" },
      { name: "Bridal Lehenga", price: "₹8,000 – ₹20,000", note: "Full bridal, zari + stone work" },
      { name: "Party Wear Lehenga", price: "₹2,500 – ₹5,000", note: "Sequence, georgette options" },
    ]
  },
  {
    name: "Suits & Salwar",
    icon: "👘",
    items: [
      { name: "Simple Salwar Suit", price: "₹800 – ₹1,500", note: "Cotton/lawn, casual wear" },
      { name: "Anarkali Suit", price: "₹1,500 – ₹3,500", note: "Flared, embroidered" },
      { name: "Palazzo Set", price: "₹1,200 – ₹2,500", note: "Trendy wide-leg cut" },
      { name: "Sharara Set", price: "₹2,000 – ₹4,500", note: "Festive & wedding ready" },
    ]
  },
  {
    name: "Kurti",
    icon: "🧣",
    items: [
      { name: "Simple Kurti", price: "₹400 – ₹800", note: "Daily wear, cotton" },
      { name: "Embroidered Kurti", price: "₹900 – ₹1,800", note: "Chikankari / thread work" },
      { name: "Long Kurti", price: "₹700 – ₹1,400", note: "With side slits" },
      { name: "Co-ord Set", price: "₹1,200 – ₹2,200", note: "Kurti + pant matching set" },
    ]
  },
  {
    name: "Saree Blouse",
    icon: "🎀",
    items: [
      { name: "Simple Blouse", price: "₹300 – ₹600", note: "Basic stitching" },
      { name: "Designer Blouse", price: "₹800 – ₹2,000", note: "Backless / heavy work" },
      { name: "Readymade Alteration", price: "₹200 – ₹500", note: "Fitting adjustments" },
    ]
  },
  {
    name: "Extras",
    icon: "✨",
    items: [
      { name: "Dupatta Hemming", price: "₹100 – ₹200", note: "Lace / mirror work edges" },
      { name: "Alteration (Any Dress)", price: "₹150 – ₹400", note: "Shortening, waist fit" },
      { name: "Fall & Pico (Saree)", price: "₹150 – ₹300", note: "Per saree" },
      { name: "Urgent Delivery", price: "+₹300 – ₹500", note: "Ready in 24–48 hrs" },
    ]
  }
];

const PriceList = () => {
  const [active, setActive] = useState(0);

  return (
    <section style={{
      padding: "90px 5% 110px",
      background: "linear-gradient(160deg, var(--ink) 0%, var(--deep) 55%, var(--ink) 100%)",
      minHeight: "80vh", position: "relative", overflow: "hidden"
    }}>
      <div style={{ position:"absolute", width:600, height:600, background:"radial-gradient(circle,rgba(92,30,53,0.25) 0%,transparent 70%)", borderRadius:"50%", top:-150, right:-100, pointerEvents:"none" }} />

      <div className="container" style={{ position:"relative" }}>
        <motion.div className="text-center mb-5"
          initial={{ opacity:0, y:-24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}
        >
          <span className="section-label">Transparent Pricing</span>
          <h2 className="section-title" style={{ color:"var(--cream)" }}>
            Our <span style={{ fontStyle:"italic", background:"linear-gradient(135deg,var(--gold),var(--gold-l))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Price List</span>
          </h2>
          <div className="gold-line center" />
          <p className="section-sub" style={{ margin:"0 auto", textAlign:"center" }}>
            All prices include stitching charges. Fabric cost is separate. Final price depends on design complexity ✦
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div style={{ display:"flex", gap:10, flexWrap:"wrap", justifyContent:"center", marginBottom:40 }}>
          {categories.map((cat, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding:"10px 22px", borderRadius:"50px", border:"none", cursor:"pointer",
              background: active===i ? "linear-gradient(135deg,var(--gold),var(--gold-l))" : "rgba(255,255,255,0.05)",
              color: active===i ? "var(--ink)" : "rgba(255,255,255,0.55)",
              fontFamily:"'Jost',sans-serif", fontSize:"0.78rem", fontWeight:600,
              letterSpacing:"0.08em", transition:"all 0.3s",
              border: active!==i ? "1px solid rgba(201,148,74,0.2)" : "none"
            }}>
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Price Cards */}
        <motion.div key={active} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4 }}>
          <div className="row g-4 justify-content-center">
            {categories[active].items.map((item, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div style={{
                  background:"rgba(255,255,255,0.04)", border:"1px solid rgba(201,148,74,0.15)",
                  borderRadius:20, padding:"28px 22px", textAlign:"center", height:"100%",
                  transition:"all 0.35s"
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.borderColor="rgba(201,148,74,0.35)"; e.currentTarget.style.boxShadow="0 20px 50px rgba(0,0,0,0.4)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.borderColor="rgba(201,148,74,0.15)"; e.currentTarget.style.boxShadow=""; }}
                >
                  <div style={{ fontSize:"2rem", marginBottom:12 }}>{categories[active].icon}</div>
                  <h5 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.05rem", color:"var(--cream)", marginBottom:8, fontStyle:"italic" }}>{item.name}</h5>
                  <div style={{ fontSize:"1.4rem", fontFamily:"'Playfair Display',serif", fontWeight:700, color:"var(--gold-l)", marginBottom:8 }}>{item.price}</div>
                  <p style={{ fontSize:"0.76rem", color:"var(--muted)", fontWeight:300, lineHeight:1.6 }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-5">
          <p style={{ color:"var(--muted)", marginBottom:20, fontSize:"0.9rem" }}>Prices may vary based on fabric & design complexity. DM for exact quote ✨</p>
          <a href="https://wa.me/919057255829" target="_blank" rel="noreferrer" className="btn-gold">
            📲 Get Custom Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
