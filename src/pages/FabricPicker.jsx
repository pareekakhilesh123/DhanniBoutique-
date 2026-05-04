import { motion } from "framer-motion";
import { useState } from "react";

const fabrics = [
  { name:"Georgette",    color:"#D4A0B0", note:"Flowy, lightweight, perfect for lehengas" },
  { name:"Silk",         color:"#C8956A", note:"Luxurious sheen, great for bridal wear" },
  { name:"Cotton",       color:"#F0E0C8", note:"Breathable, ideal for daily wear kurtis" },
  { name:"Chiffon",      color:"#E8D0E0", note:"Sheer & elegant, perfect for dupattas" },
  { name:"Velvet",       color:"#6B2D5E", note:"Rich texture, perfect for winter festive" },
  { name:"Crepe",        color:"#B8889A", note:"Smooth drape, great for suits & salwars" },
  { name:"Net",          color:"#F5EDF0", note:"Sheer overlay, used in bridal layers" },
  { name:"Raw Silk",     color:"#C8A860", note:"Textured, ideal for ethnic occasions" },
];

const colors = [
  { name:"Royal Wine",   hex:"#6B1A2E" },
  { name:"Midnight Navy",hex:"#1A2B5E" },
  { name:"Emerald",      hex:"#1A5E3A" },
  { name:"Dusty Rose",   hex:"#C47E8E" },
  { name:"Gold",         hex:"#C9944A" },
  { name:"Ivory",        hex:"#F5EDD8" },
  { name:"Plum Purple",  hex:"#5C2B7A" },
  { name:"Teal",         hex:"#1A6B6E" },
  { name:"Coral Red",    hex:"#CC4444" },
  { name:"Forest Green", hex:"#2D5A2D" },
  { name:"Peach",        hex:"#E8B090" },
  { name:"Charcoal",     hex:"#3A3A3A" },
];

const works = [
  { name:"Zari Work",       emoji:"✨" },
  { name:"Mirror Work",     emoji:"🪞" },
  { name:"Embroidery",      emoji:"🌸" },
  { name:"Sequence",        emoji:"💫" },
  { name:"Thread Work",     emoji:"🧵" },
  { name:"Gota Patti",      emoji:"🎀" },
  { name:"Stone Work",      emoji:"💎" },
  { name:"Plain / No Work", emoji:"◻️" },
];

const occasions = ["Bridal","Wedding Guest","Festive / Diwali","Casual Daily","Party / Reception","Office / Formal","Engagement","Baby Shower"];

const FabricPicker = () => {
  const [selFabric, setFabric] = useState(null);
  const [selColor, setColor]   = useState(null);
  const [selWork, setWork]     = useState([]);
  const [selOcc, setOcc]       = useState(null);
  const [copied, setCopied]    = useState(false);

  const toggleWork = (w) => setWork(prev => prev.includes(w) ? prev.filter(x=>x!==w) : [...prev, w]);

  const buildMessage = () => {
    return `Hi Dhanni Boutique! 🌸\n\nI want to customize an outfit:\n👗 Fabric: ${selFabric||"Not selected"}\n🎨 Color: ${selColor||"Not selected"}\n✨ Work: ${selWork.length ? selWork.join(", ") : "Not selected"}\n📅 Occasion: ${selOcc||"Not selected"}\n\nPlease share the available designs & price quote. Thank you!`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(buildMessage()).then(() => { setCopied(true); setTimeout(()=>setCopied(false), 2500); });
  };

  const isReady = selFabric && selColor && selWork.length && selOcc;

  return (
    <section style={{ padding:"90px 5% 110px", background:"linear-gradient(160deg,var(--ink) 0%,var(--deep) 55%,var(--ink) 100%)", minHeight:"80vh", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", width:600, height:600, background:"radial-gradient(circle,rgba(92,30,53,0.25) 0%,transparent 70%)", borderRadius:"50%", top:-120, right:-80, pointerEvents:"none" }} />
      <div className="container" style={{ position:"relative" }}>
        <motion.div className="text-center mb-5" initial={{ opacity:0, y:-24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
          <span className="section-label">Customise Your Look</span>
          <h2 className="section-title" style={{ color:"var(--cream)" }}>
            Fabric &{" "}
            <span style={{ fontStyle:"italic", background:"linear-gradient(135deg,var(--gold),var(--gold-l))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Color Picker</span>
          </h2>
          <div className="gold-line center" />
          <p className="section-sub" style={{ margin:"0 auto", textAlign:"center" }}>Build your dream outfit and send the details directly to us ✨</p>
        </motion.div>

        <div className="row g-5">
          {/* LEFT: Pickers */}
          <div className="col-lg-8">

            {/* Fabric */}
            <div style={{ marginBottom:40 }}>
              <h5 style={{ fontFamily:"'Playfair Display',serif", color:"var(--gold-l)", marginBottom:18, fontStyle:"italic" }}>① Choose Fabric</h5>
              <div className="row g-3">
                {fabrics.map((f,i) => (
                  <div className="col-6 col-md-3" key={i}>
                    <div onClick={() => setFabric(f.name)} style={{
                      padding:"16px 12px", borderRadius:14, textAlign:"center", cursor:"pointer",
                      background: selFabric===f.name ? "rgba(201,148,74,0.18)" : "rgba(255,255,255,0.03)",
                      border: selFabric===f.name ? "1px solid var(--gold)" : "1px solid rgba(255,255,255,0.07)",
                      transition:"all 0.25s"
                    }}>
                      <div style={{ width:36, height:36, borderRadius:"50%", background:f.color, margin:"0 auto 8px", border:"2px solid rgba(255,255,255,0.15)" }} />
                      <div style={{ fontSize:"0.78rem", fontWeight:600, color: selFabric===f.name ? "var(--gold-l)" : "var(--cream)", marginBottom:4 }}>{f.name}</div>
                      <div style={{ fontSize:"0.65rem", color:"var(--muted)", lineHeight:1.4 }}>{f.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Color */}
            <div style={{ marginBottom:40 }}>
              <h5 style={{ fontFamily:"'Playfair Display',serif", color:"var(--gold-l)", marginBottom:18, fontStyle:"italic" }}>② Choose Color</h5>
              <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
                {colors.map((c,i) => (
                  <div key={i} onClick={() => setColor(c.name)} style={{ cursor:"pointer", textAlign:"center" }}>
                    <div style={{
                      width:44, height:44, borderRadius:"50%", background:c.hex,
                      border: selColor===c.name ? "3px solid var(--gold)" : "2px solid rgba(255,255,255,0.15)",
                      boxShadow: selColor===c.name ? "0 0 0 4px rgba(201,148,74,0.25)" : "none",
                      transition:"all 0.25s", marginBottom:6
                    }} />
                    <div style={{ fontSize:"0.6rem", color: selColor===c.name ? "var(--gold)" : "var(--muted)", lineHeight:1.2, maxWidth:52 }}>{c.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work */}
            <div style={{ marginBottom:40 }}>
              <h5 style={{ fontFamily:"'Playfair Display',serif", color:"var(--gold-l)", marginBottom:18, fontStyle:"italic" }}>③ Choose Embellishment Work</h5>
              <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
                {works.map((w,i) => (
                  <button key={i} onClick={() => toggleWork(w.name)} style={{
                    padding:"9px 18px", borderRadius:"50px", cursor:"pointer",
                    background: selWork.includes(w.name) ? "linear-gradient(135deg,var(--gold),var(--gold-l))" : "rgba(255,255,255,0.04)",
                    border: !selWork.includes(w.name) ? "1px solid rgba(201,148,74,0.2)" : "none",
                    color: selWork.includes(w.name) ? "var(--ink)" : "rgba(255,255,255,0.6)",
                    fontFamily:"'Jost',sans-serif", fontSize:"0.78rem", fontWeight:500,
                    transition:"all 0.25s"
                  }}>
                    {w.emoji} {w.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Occasion */}
            <div>
              <h5 style={{ fontFamily:"'Playfair Display',serif", color:"var(--gold-l)", marginBottom:18, fontStyle:"italic" }}>④ Occasion</h5>
              <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
                {occasions.map((o,i) => (
                  <button key={i} onClick={() => setOcc(o)} style={{
                    padding:"9px 18px", borderRadius:"50px", cursor:"pointer",
                    background: selOcc===o ? "linear-gradient(135deg,var(--wine),var(--rose))" : "rgba(255,255,255,0.04)",
                    border: selOcc!==o ? "1px solid rgba(201,148,74,0.2)" : "none",
                    color: selOcc===o ? "#fff" : "rgba(255,255,255,0.6)",
                    fontFamily:"'Jost',sans-serif", fontSize:"0.78rem", fontWeight:500, transition:"all 0.25s"
                  }}>{o}</button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Preview Card */}
          <div className="col-lg-4">
            <div style={{ position:"sticky", top:90 }}>
              <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(201,148,74,0.2)", borderRadius:20, padding:"28px 24px" }}>
                <h5 style={{ fontFamily:"'Playfair Display',serif", color:"var(--cream)", marginBottom:20, fontStyle:"italic" }}>✦ Your Selection</h5>

                {[
                  { label:"Fabric",    val:selFabric, icon:"🪡" },
                  { label:"Color",     val:selColor,  icon:"🎨" },
                  { label:"Work",      val:selWork.join(", ") || null, icon:"✨" },
                  { label:"Occasion",  val:selOcc,    icon:"📅" },
                ].map((item,i) => (
                  <div key={i} style={{ display:"flex", gap:12, marginBottom:14, alignItems:"flex-start" }}>
                    <span style={{ fontSize:"1rem" }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--muted)", marginBottom:2 }}>{item.label}</div>
                      <div style={{ fontSize:"0.88rem", color: item.val ? "var(--cream)" : "rgba(255,255,255,0.25)", fontStyle: item.val ? "normal" : "italic" }}>
                        {item.val || "Not selected yet"}
                      </div>
                    </div>
                  </div>
                ))}

                <div style={{ borderTop:"1px solid rgba(201,148,74,0.15)", paddingTop:20, marginTop:8, display:"flex", flexDirection:"column", gap:10 }}>
                  <a
                    href={isReady ? `https://wa.me/919057255829?text=${encodeURIComponent(buildMessage())}` : "#"}
                    target={isReady ? "_blank" : "_self"} rel="noreferrer"
                    className="btn-gold"
                    style={{ opacity: isReady ? 1 : 0.4, pointerEvents: isReady ? "auto" : "none", justifyContent:"center", textAlign:"center" }}
                  >
                    📲 Send to WhatsApp
                  </a>
                  <button onClick={handleCopy} disabled={!isReady} style={{
                    padding:"10px", borderRadius:"50px", border:"1px solid rgba(201,148,74,0.3)",
                    background:"transparent", color: isReady ? "var(--gold-l)" : "rgba(255,255,255,0.25)",
                    fontFamily:"'Jost',sans-serif", fontSize:"0.78rem", cursor: isReady ? "pointer" : "default",
                    transition:"all 0.3s"
                  }}>
                    {copied ? "✅ Copied!" : "📋 Copy Message"}
                  </button>
                </div>
                {!isReady && <p style={{ fontSize:"0.72rem", color:"var(--muted)", textAlign:"center", marginTop:10, fontStyle:"italic" }}>Complete all steps to unlock ✦</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FabricPicker;
