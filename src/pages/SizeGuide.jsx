import { motion } from "framer-motion";
import { useState } from "react";

const sizes = [
  { label:"XS", bust:"30–31", waist:"24–25", hips:"33–34", shoulder:"13.5" },
  { label:"S",  bust:"32–33", waist:"26–27", hips:"35–36", shoulder:"14" },
  { label:"M",  bust:"34–35", waist:"28–29", hips:"37–38", shoulder:"14.5" },
  { label:"L",  bust:"36–37", waist:"30–31", hips:"39–40", shoulder:"15" },
  { label:"XL", bust:"38–39", waist:"32–33", hips:"41–42", shoulder:"15.5" },
  { label:"2XL",bust:"40–41", waist:"34–35", hips:"43–44", shoulder:"16" },
  { label:"3XL",bust:"42–44", waist:"36–38", hips:"45–47", shoulder:"16.5" },
];

const measurePoints = [
  { emoji:"📏", name:"Bust / Chest", how:"Measure around the fullest part of your chest, keeping tape parallel to the floor." },
  { emoji:"📏", name:"Waist", how:"Measure around your natural waistline — the narrowest part of your torso." },
  { emoji:"📏", name:"Hips", how:"Measure around the fullest part of your hips, about 7–9 inches below your waist." },
  { emoji:"📏", name:"Shoulder", how:"Measure from one shoulder tip to the other, across the back." },
  { emoji:"📏", name:"Length", how:"From top of shoulder down to desired hemline. Specify in inches or cm." },
  { emoji:"📏", name:"Sleeve Length", how:"From shoulder tip to wrist bone, arm slightly bent." },
];

const SizeGuide = () => {
  const [unit, setUnit] = useState("inches");

  return (
    <section style={{
      padding:"90px 5% 110px",
      background:"linear-gradient(160deg, var(--ink) 0%, var(--deep) 55%, var(--ink) 100%)",
      minHeight:"80vh", position:"relative", overflow:"hidden"
    }}>
      <div style={{ position:"absolute", width:500, height:500, background:"radial-gradient(circle,rgba(201,148,74,0.08) 0%,transparent 70%)", borderRadius:"50%", bottom:-100, left:-100, pointerEvents:"none" }} />

      <div className="container" style={{ position:"relative" }}>
        <motion.div className="text-center mb-5"
          initial={{ opacity:0, y:-24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}
        >
          <span className="section-label">Perfect Fit Guide</span>
          <h2 className="section-title" style={{ color:"var(--cream)" }}>
            Size Guide &{" "}
            <span style={{ fontStyle:"italic", background:"linear-gradient(135deg,var(--gold),var(--gold-l))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Measurements</span>
          </h2>
          <div className="gold-line center" />
          <p className="section-sub" style={{ margin:"0 auto", textAlign:"center" }}>
            All our outfits are custom stitched. Send us your measurements for a perfect fit ✦
          </p>
        </motion.div>

        {/* Unit Toggle */}
        <div style={{ display:"flex", justifyContent:"center", gap:10, marginBottom:36 }}>
          {["inches","cm"].map(u => (
            <button key={u} onClick={() => setUnit(u)} style={{
              padding:"8px 24px", borderRadius:"50px", cursor:"pointer",
              background: unit===u ? "linear-gradient(135deg,var(--gold),var(--gold-l))" : "rgba(255,255,255,0.05)",
              color: unit===u ? "var(--ink)" : "rgba(255,255,255,0.55)",
              border: unit!==u ? "1px solid rgba(201,148,74,0.2)" : "none",
              fontFamily:"'Jost',sans-serif", fontWeight:600, fontSize:"0.78rem", transition:"all 0.3s"
            }}>{u.toUpperCase()}</button>
          ))}
        </div>

        {/* Size Table */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }} style={{ marginBottom:60 }}>
          <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(201,148,74,0.15)", borderRadius:20, overflow:"hidden" }}>
            <div style={{ overflowX:"auto" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", minWidth:500 }}>
                <thead>
                  <tr style={{ background:"rgba(201,148,74,0.12)" }}>
                    {["Size","Bust","Waist","Hips","Shoulder"].map(h => (
                      <th key={h} style={{ padding:"14px 20px", fontFamily:"'Jost',sans-serif", fontSize:"0.7rem", fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--gold)", textAlign:"center", borderBottom:"1px solid rgba(201,148,74,0.15)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((s, i) => (
                    <tr key={i} style={{ borderBottom:"1px solid rgba(255,255,255,0.05)", transition:"background 0.25s" }}
                      onMouseEnter={e => e.currentTarget.style.background="rgba(201,148,74,0.06)"}
                      onMouseLeave={e => e.currentTarget.style.background="transparent"}
                    >
                      <td style={{ padding:"14px 20px", textAlign:"center" }}>
                        <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"1rem", fontWeight:700, color:"var(--gold-l)" }}>{s.label}</span>
                      </td>
                      {["bust","waist","hips","shoulder"].map(k => (
                        <td key={k} style={{ padding:"14px 20px", textAlign:"center", color:"var(--cream)", fontSize:"0.88rem", fontWeight:300 }}>
                          {unit==="inches" ? s[k] : s[k].split("–").map(v => Math.round(parseFloat(v)*2.54)).join("–")} {unit==="inches" ? '"' : " cm"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* How to Measure */}
        <div className="text-center mb-4">
          <span className="section-label">How to Measure Yourself</span>
          <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.8rem", color:"var(--cream)", fontStyle:"italic" }}>Measurement Guide</h3>
          <div className="gold-line center" />
        </div>
        <div className="row g-3 mb-5">
          {measurePoints.map((m,i) => (
            <motion.div className="col-md-4" key={i}
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.5, delay:i*0.08 }} viewport={{ once:true }}
            >
              <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(201,148,74,0.12)", borderRadius:16, padding:"22px 20px", height:"100%", transition:"all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(201,148,74,0.3)"; e.currentTarget.style.transform="translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(201,148,74,0.12)"; e.currentTarget.style.transform=""; }}
              >
                <div style={{ fontSize:"1.4rem", marginBottom:8 }}>📐</div>
                <h6 style={{ fontFamily:"'Playfair Display',serif", color:"var(--gold-l)", marginBottom:6, fontSize:"0.95rem" }}>{m.name}</h6>
                <p style={{ fontSize:"0.8rem", color:"var(--muted)", lineHeight:1.7, margin:0, fontWeight:300 }}>{m.how}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pro Tip */}
        <div style={{ background:"rgba(201,148,74,0.08)", border:"1px solid rgba(201,148,74,0.25)", borderRadius:16, padding:"24px 28px", marginBottom:36 }}>
          <p style={{ margin:0, color:"var(--cream)", fontSize:"0.92rem", lineHeight:1.8, fontWeight:300 }}>
            <span style={{ color:"var(--gold)", fontWeight:600 }}>💡 Pro Tip:</span> Always measure over fitted clothing or undergarments. Add 1–2 inches for comfort. If you're between sizes, go for the larger one and we'll tailor it to fit perfectly ✨
          </p>
        </div>

        <div className="text-center">
          <a href="https://wa.me/919057255829?text=Hi! I want to share my measurements for a custom outfit" target="_blank" rel="noreferrer" className="btn-gold">
            📲 Send Measurements on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;
