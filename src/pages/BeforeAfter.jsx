import { motion } from "framer-motion";
import { useState, useRef } from "react";
import col1 from "../assets/images/new/col1.jpg";
import col2 from "../assets/images/new/col2.jpg";
import col3 from "../assets/images/new/col3.jpg";
import col4 from "../assets/images/new/col4.jpg";
import col5 from "../assets/images/new/col5.jpg";
import col6 from "../assets/images/new/col6.jpg";
import hero from "../assets/images/new/hero_main.jpg";

const transformations = [
  { before: col1, after: col2, name:"Priya's Bridal Look", desc:"Simple cotton suit → Stunning bridal lehenga", tag:"Bridal" },
  { before: col3, after: col4, name:"Ritu's Festive Makeover", desc:"Plain fabric → Designer festive suit with embroidery", tag:"Festive" },
  { before: col5, after: col6, name:"Meera's Party Outfit", desc:"Basic kurti → Elegant party wear with sequins", tag:"Party" },
  { before: col6, after: hero, name:"Anjali's Wedding Look", desc:"Ready-made → Custom stitched wedding sharara", tag:"Wedding" },
];

const SliderCard = ({ item }) => {
  const [pos, setPos] = useState(50);
  const boxRef = useRef(null);

  const move = (e) => {
    const el = boxRef.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.type==="touchmove" ? e.touches[0].clientX : e.clientX) - rect.left;
    const pct = Math.min(100, Math.max(0, (x/rect.width)*100));
    setPos(pct);
  };

  return (
    <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(201,148,74,0.15)", borderRadius:20, overflow:"hidden", transition:"all 0.35s" }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow="0 20px 50px rgba(0,0,0,0.5)"; e.currentTarget.style.borderColor="rgba(201,148,74,0.3)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow=""; e.currentTarget.style.borderColor="rgba(201,148,74,0.15)"; }}
    >
      {/* Slider */}
      <div ref={boxRef} style={{ position:"relative", height:320, cursor:"ew-resize", userSelect:"none" }}
        onMouseMove={move} onTouchMove={move}
      >
        {/* Before image (full) */}
        <img src={item.before} alt="Before" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }} />
        {/* After image (clipped) */}
        <div style={{ position:"absolute", inset:0, clipPath:`inset(0 0 0 ${pos}%)` }}>
          <img src={item.after} alt="After" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
        </div>
        {/* Divider line */}
        <div style={{ position:"absolute", top:0, bottom:0, left:`${pos}%`, width:2, background:"var(--gold)", transform:"translateX(-50%)", zIndex:3 }}>
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:36, height:36, borderRadius:"50%", background:"var(--gold)", display:"grid", placeItems:"center", boxShadow:"0 4px 16px rgba(0,0,0,0.4)", fontSize:"0.8rem", color:"var(--ink)", fontWeight:700, cursor:"ew-resize" }}>⟺</div>
        </div>
        {/* Labels */}
        <div style={{ position:"absolute", bottom:10, left:10, background:"rgba(26,10,16,0.8)", padding:"4px 10px", borderRadius:"50px", fontSize:"0.62rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--muted)" }}>Before</div>
        <div style={{ position:"absolute", bottom:10, right:10, background:"rgba(201,148,74,0.85)", padding:"4px 10px", borderRadius:"50px", fontSize:"0.62rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--ink)", fontWeight:700 }}>After</div>
        {/* Tag */}
        <div style={{ position:"absolute", top:10, left:10, background:"rgba(201,148,74,0.9)", padding:"3px 10px", borderRadius:"50px", fontSize:"0.6rem", fontWeight:600, color:"var(--ink)", letterSpacing:"0.1em" }}>{item.tag}</div>
      </div>
      <div style={{ padding:"18px 20px" }}>
        <h5 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1rem", color:"var(--cream)", fontStyle:"italic", marginBottom:4 }}>{item.name}</h5>
        <p style={{ fontSize:"0.78rem", color:"var(--muted)", margin:0, fontWeight:300 }}>{item.desc}</p>
      </div>
    </div>
  );
};

const BeforeAfter = () => (
  <section style={{ padding:"90px 5% 110px", background:"linear-gradient(160deg,var(--ink) 0%,var(--deep) 55%,var(--ink) 100%)", minHeight:"80vh", position:"relative", overflow:"hidden" }}>
    <div style={{ position:"absolute", width:600, height:600, background:"radial-gradient(circle,rgba(92,30,53,0.22) 0%,transparent 70%)", borderRadius:"50%", top:-120, right:-80, pointerEvents:"none" }} />
    <div className="container" style={{ position:"relative" }}>
      <motion.div className="text-center mb-5" initial={{ opacity:0, y:-24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
        <span className="section-label">Transformations</span>
        <h2 className="section-title" style={{ color:"var(--cream)" }}>
          Before &{" "}
          <span style={{ fontStyle:"italic", background:"linear-gradient(135deg,var(--gold),var(--gold-l))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>After</span>
        </h2>
        <div className="gold-line center" />
        <p className="section-sub" style={{ margin:"0 auto", textAlign:"center" }}>
          Slide to reveal the magical transformation ✨ Drag the divider left or right
        </p>
      </motion.div>

      <div className="row g-4">
        {transformations.map((item, i) => (
          <motion.div className="col-md-6" key={i}
            initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6, delay:i*0.1 }} viewport={{ once:true }}
          >
            <SliderCard item={item} />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-5">
        <p style={{ color:"var(--muted)", marginBottom:20, fontSize:"0.9rem", fontStyle:"italic" }}>Ready to start your transformation? ✨</p>
        <a href="https://instagram.com/dhanniboutique" target="_blank" rel="noreferrer" className="btn-gold">
          DM to Book Your Transformation
        </a>
      </div>
    </div>
  </section>
);

export default BeforeAfter;
