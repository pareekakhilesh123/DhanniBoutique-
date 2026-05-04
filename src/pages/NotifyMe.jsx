import { motion } from "framer-motion";
import { useState } from "react";

const collections = ["Bridal Lehenga","Anarkali Suits","Party Wear","Festive Kurtis","Saree Blouses","Winter Collection","Eid Special","Diwali Collection"];

const NotifyMe = () => {
  const [name, setName]     = useState("");
  const [phone, setPhone]   = useState("");
  const [prefs, setPrefs]   = useState([]);
  const [channel, setChannel] = useState("whatsapp");
  const [submitted, setSubmitted] = useState(false);

  const togglePref = (p) => setPrefs(prev => prev.includes(p) ? prev.filter(x=>x!==p) : [...prev, p]);

  const msg = `Hi Dhanni Boutique! 🔔\n\nI want to be notified for new collections:\n\n👤 Name: ${name}\n📱 Phone: ${phone}\n📢 Channel: ${channel==="whatsapp" ? "WhatsApp" : "Instagram"}\n\n🎀 Interested in:\n${prefs.map(p=>`• ${p}`).join("\n")}\n\nPlease add me to your notification list. Thank you! ✨`;

  const handleSubmit = () => {
    if (!name || !phone || !prefs.length) return;
    setSubmitted(true);
    setTimeout(() => window.open(`https://wa.me/919057255829?text=${encodeURIComponent(msg)}`, "_blank"), 600);
  };

  if (submitted) return (
    <section style={{ padding:"90px 5%", background:"var(--ink)", minHeight:"80vh", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <motion.div initial={{ opacity:0, scale:0.85 }} animate={{ opacity:1, scale:1 }} transition={{ type:"spring", duration:0.7 }} style={{ textAlign:"center", maxWidth:460 }}>
        <div style={{ fontSize:"3.5rem", marginBottom:16 }}>🔔</div>
        <h2 style={{ fontFamily:"'Playfair Display',serif", color:"var(--cream)", fontSize:"2rem", fontStyle:"italic", marginBottom:12 }}>You're on the List!</h2>
        <p style={{ color:"var(--muted)", marginBottom:24, fontWeight:300, lineHeight:1.8 }}>We'll notify you as soon as your selected collections drop. Get ready to shop first! ✨</p>
        <button onClick={() => { setSubmitted(false); setName(""); setPhone(""); setPrefs([]); }} className="btn-ghost">Update Preferences →</button>
      </motion.div>
    </section>
  );

  return (
    <section style={{ padding:"90px 5% 110px", background:"linear-gradient(160deg,var(--ink) 0%,var(--deep) 55%,var(--ink) 100%)", minHeight:"80vh", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", width:550, height:550, background:"radial-gradient(circle,rgba(92,30,53,0.22) 0%,transparent 70%)", borderRadius:"50%", top:-100, right:-80, pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:400, height:400, background:"radial-gradient(circle,rgba(201,148,74,0.07) 0%,transparent 70%)", borderRadius:"50%", bottom:-80, left:-60, pointerEvents:"none" }} />

      <div className="container" style={{ maxWidth:680, position:"relative" }}>
        <motion.div className="text-center mb-5" initial={{ opacity:0, y:-24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
          <span className="section-label">Be First to Know</span>
          <h2 className="section-title" style={{ color:"var(--cream)" }}>
            New Collection{" "}
            <span style={{ fontStyle:"italic", background:"linear-gradient(135deg,var(--gold),var(--gold-l))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Alerts</span>
          </h2>
          <div className="gold-line center" />
          <p className="section-sub" style={{ margin:"0 auto", textAlign:"center" }}>
            Never miss a new drop! Get notified on WhatsApp or Instagram when your favourite styles launch ✨
          </p>
        </motion.div>

        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
          style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(201,148,74,0.18)", borderRadius:24, padding:"40px 36px" }}
        >
          {/* Name & Phone */}
          <div className="row g-3 mb-4">
            {[{l:"Your Name",v:name,s:setName,p:"e.g. Priya Sharma",t:"text"},{l:"WhatsApp Number",v:phone,s:setPhone,p:"e.g. 9876543210",t:"tel"}].map((f,i) => (
              <div className="col-sm-6" key={i}>
                <label style={{ display:"block", fontSize:"0.68rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--muted)", marginBottom:8 }}>{f.l}</label>
                <input type={f.t} value={f.v} onChange={e=>f.s(e.target.value)} placeholder={f.p} style={{ width:"100%", padding:"13px 16px", borderRadius:12, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(201,148,74,0.2)", color:"var(--cream)", fontFamily:"'Jost',sans-serif", fontSize:"0.87rem", outline:"none" }} />
              </div>
            ))}
          </div>

          {/* Channel */}
          <div style={{ marginBottom:28 }}>
            <label style={{ display:"block", fontSize:"0.68rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--muted)", marginBottom:12 }}>Notify Me On</label>
            <div style={{ display:"flex", gap:10 }}>
              {[{id:"whatsapp",label:"📲 WhatsApp",color:"#25d366"},{id:"instagram",label:"📸 Instagram",color:"#E1306C"}].map(c => (
                <button key={c.id} onClick={() => setChannel(c.id)} style={{
                  padding:"10px 22px", borderRadius:"50px", cursor:"pointer",
                  background: channel===c.id ? c.color : "rgba(255,255,255,0.04)",
                  border: channel!==c.id ? `1px solid ${c.color}44` : "none",
                  color: channel===c.id ? "#fff" : "rgba(255,255,255,0.55)",
                  fontFamily:"'Jost',sans-serif", fontSize:"0.8rem", fontWeight:600, transition:"all 0.3s"
                }}>{c.label}</button>
              ))}
            </div>
          </div>

          {/* Collection Prefs */}
          <div style={{ marginBottom:32 }}>
            <label style={{ display:"block", fontSize:"0.68rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--muted)", marginBottom:12 }}>
              Notify Me For (Select All That Apply)
            </label>
            <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
              {collections.map((c,i) => (
                <button key={i} onClick={() => togglePref(c)} style={{
                  padding:"8px 16px", borderRadius:"50px", cursor:"pointer",
                  background: prefs.includes(c) ? "linear-gradient(135deg,var(--gold),var(--gold-l))" : "rgba(255,255,255,0.04)",
                  border: !prefs.includes(c) ? "1px solid rgba(201,148,74,0.2)" : "none",
                  color: prefs.includes(c) ? "var(--ink)" : "rgba(255,255,255,0.55)",
                  fontFamily:"'Jost',sans-serif", fontSize:"0.78rem", fontWeight:prefs.includes(c)?600:400,
                  transition:"all 0.25s"
                }}>{c}</button>
              ))}
            </div>
          </div>

          {/* Selected Preview */}
          {prefs.length > 0 && (
            <div style={{ background:"rgba(201,148,74,0.08)", border:"1px solid rgba(201,148,74,0.2)", borderRadius:12, padding:"14px 16px", marginBottom:24 }}>
              <p style={{ margin:0, fontSize:"0.8rem", color:"var(--cream)", fontWeight:300 }}>
                🔔 You'll be notified for: <span style={{ color:"var(--gold-l)" }}>{prefs.join(", ")}</span>
              </p>
            </div>
          )}

          <button onClick={handleSubmit} className="btn-gold" style={{ width:"100%", justifyContent:"center", opacity: name&&phone&&prefs.length?1:0.4 }}>
            🔔 Subscribe to Alerts
          </button>
          <p style={{ fontSize:"0.7rem", color:"var(--muted)", textAlign:"center", marginTop:10, fontWeight:300 }}>No spam. Only new collection alerts. Unsubscribe anytime ✦</p>
        </motion.div>
      </div>
    </section>
  );
};

export default NotifyMe;
