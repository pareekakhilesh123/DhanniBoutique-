import { motion } from "framer-motion";
import { useState } from "react";

const TIERS = [
  { referrals:1, reward:"₹100 discount on next order", badge:"🥉 Bronze", color:"#CD7F32" },
  { referrals:3, reward:"₹250 discount or free blouse stitching", badge:"🥈 Silver", color:"#C0C0C0" },
  { referrals:5, reward:"₹500 discount or free dupatta hemming + pico", badge:"🥇 Gold", color:"#C9944A" },
  { referrals:10,reward:"₹1000 OFF or custom design consultation FREE", badge:"💎 Diamond", color:"#A8D8EA" },
];

const Referral = () => {
  const [name, setName]       = useState("");
  const [phone, setPhone]     = useState("");
  const [refName, setRefName] = useState("");
  const [refPhone, setRefPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied]   = useState(false);

  const referralCode = name.trim() ? `DB-${name.trim().toUpperCase().replace(/\s+/g,"").slice(0,6)}-${phone.slice(-3)||"000"}` : "DB-YOURNAME-000";

  const msg = `Hi Dhanni Boutique! 🌸\n\nI want to refer a friend:\n\n👤 My Name: ${name}\n📱 My Phone: ${phone}\n🔖 My Code: ${referralCode}\n\n👤 Friend's Name: ${refName}\n📱 Friend's Phone: ${refPhone}\n\nPlease register this referral. Thank you! ✨`;

  const copyCode = () => {
    navigator.clipboard.writeText(referralCode).then(() => { setCopied(true); setTimeout(()=>setCopied(false), 2000); });
  };

  const handleSubmit = () => {
    if (!name || !phone || !refName || !refPhone) return;
    setSubmitted(true);
    setTimeout(() => window.open(`https://wa.me/919057255829?text=${encodeURIComponent(msg)}`, "_blank"), 600);
  };

  if (submitted) return (
    <section style={{ padding:"90px 5%", background:"var(--ink)", minHeight:"80vh", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ type:"spring", duration:0.7 }} style={{ textAlign:"center", maxWidth:460 }}>
        <div style={{ fontSize:"4rem", marginBottom:16 }}>🎉</div>
        <h2 style={{ fontFamily:"'Playfair Display',serif", color:"var(--cream)", fontSize:"2rem", fontStyle:"italic", marginBottom:12 }}>Referral Submitted!</h2>
        <p style={{ color:"var(--muted)", marginBottom:24, fontWeight:300, lineHeight:1.8 }}>Your WhatsApp has opened. We'll verify and apply your reward once your friend places their first order ✨</p>
        <button onClick={() => { setSubmitted(false); setName(""); setPhone(""); setRefName(""); setRefPhone(""); }} className="btn-ghost">Refer Another Friend →</button>
      </motion.div>
    </section>
  );

  return (
    <section style={{ padding:"90px 5% 110px", background:"linear-gradient(160deg,var(--ink) 0%,var(--deep) 55%,var(--ink) 100%)", minHeight:"80vh", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", width:600, height:600, background:"radial-gradient(circle,rgba(201,148,74,0.1) 0%,transparent 70%)", borderRadius:"50%", bottom:-150, left:-100, pointerEvents:"none" }} />
      <div className="container" style={{ position:"relative" }}>
        <motion.div className="text-center mb-5" initial={{ opacity:0, y:-24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
          <span className="section-label">Earn Rewards</span>
          <h2 className="section-title" style={{ color:"var(--cream)" }}>
            Refer &{" "}
            <span style={{ fontStyle:"italic", background:"linear-gradient(135deg,var(--gold),var(--gold-l))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Earn</span>
          </h2>
          <div className="gold-line center" />
          <p className="section-sub" style={{ margin:"0 auto", textAlign:"center" }}>Share Dhanni Boutique with your friends & earn exclusive rewards ✦</p>
        </motion.div>

        {/* Rewards Tiers */}
        <div className="row g-3 mb-5">
          {TIERS.map((t,i) => (
            <motion.div className="col-md-3 col-sm-6" key={i}
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.5, delay:i*0.1 }} viewport={{ once:true }}
            >
              <div style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${t.color}33`, borderRadius:18, padding:"24px 16px", textAlign:"center", height:"100%", transition:"all 0.35s" }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.borderColor=`${t.color}66`; e.currentTarget.style.boxShadow=`0 16px 40px rgba(0,0,0,0.35)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.borderColor=`${t.color}33`; e.currentTarget.style.boxShadow=""; }}
              >
                <div style={{ fontSize:"1.6rem", marginBottom:8 }}>{t.badge.split(" ")[0]}</div>
                <div style={{ fontFamily:"'Playfair Display',serif", color:t.color, fontSize:"0.85rem", fontWeight:700, marginBottom:4 }}>{t.badge.split(" ").slice(1).join(" ")}</div>
                <div style={{ fontSize:"0.68rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--muted)", marginBottom:10 }}>{t.referrals} Referral{t.referrals>1?"s":""}</div>
                <div style={{ fontSize:"0.8rem", color:"var(--cream)", fontWeight:300, lineHeight:1.55 }}>{t.reward}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="row g-5 justify-content-center">
          {/* Form */}
          <div className="col-lg-6">
            <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(201,148,74,0.15)", borderRadius:20, padding:"32px 28px" }}>
              <h5 style={{ fontFamily:"'Playfair Display',serif", color:"var(--cream)", marginBottom:24, fontStyle:"italic" }}>✦ Submit a Referral</h5>

              <div style={{ marginBottom:20 }}>
                <p style={{ fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--gold)", marginBottom:12, fontWeight:600 }}>Your Details</p>
                {[{l:"Your Name",v:name,s:setName,p:"e.g. Priya Sharma"},{l:"Your Phone",v:phone,s:setPhone,p:"e.g. 9876543210"}].map((f,i) => (
                  <div key={i} style={{ marginBottom:12 }}>
                    <label style={{ display:"block", fontSize:"0.68rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--muted)", marginBottom:6 }}>{f.l}</label>
                    <input value={f.v} onChange={e=>f.s(e.target.value)} placeholder={f.p} style={{ width:"100%", padding:"12px 16px", borderRadius:10, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(201,148,74,0.2)", color:"var(--cream)", fontFamily:"'Jost',sans-serif", fontSize:"0.87rem", outline:"none" }} />
                  </div>
                ))}
              </div>

              {name && phone && (
                <div style={{ background:"rgba(201,148,74,0.1)", border:"1px solid rgba(201,148,74,0.25)", borderRadius:12, padding:"14px 16px", marginBottom:20 }}>
                  <div style={{ fontSize:"0.68rem", color:"var(--muted)", marginBottom:4 }}>Your Referral Code</div>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.1rem", color:"var(--gold-l)", fontWeight:700, letterSpacing:"0.08em" }}>{referralCode}</span>
                    <button onClick={copyCode} style={{ fontSize:"0.72rem", color:"var(--gold)", background:"none", border:"none", cursor:"pointer", padding:"4px 8px" }}>{copied ? "✅ Copied!" : "📋 Copy"}</button>
                  </div>
                </div>
              )}

              <p style={{ fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--gold)", marginBottom:12, fontWeight:600 }}>Friend's Details</p>
              {[{l:"Friend's Name",v:refName,s:setRefName,p:"e.g. Ritu Agarwal"},{l:"Friend's Phone",v:refPhone,s:setRefPhone,p:"e.g. 9876543210"}].map((f,i) => (
                <div key={i} style={{ marginBottom:12 }}>
                  <label style={{ display:"block", fontSize:"0.68rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--muted)", marginBottom:6 }}>{f.l}</label>
                  <input value={f.v} onChange={e=>f.s(e.target.value)} placeholder={f.p} style={{ width:"100%", padding:"12px 16px", borderRadius:10, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(201,148,74,0.2)", color:"var(--cream)", fontFamily:"'Jost',sans-serif", fontSize:"0.87rem", outline:"none" }} />
                </div>
              ))}

              <button onClick={handleSubmit} className="btn-gold" style={{ width:"100%", justifyContent:"center", marginTop:8, opacity: name&&phone&&refName&&refPhone?1:0.4 }}>
                📲 Submit via WhatsApp
              </button>
            </div>
          </div>

          {/* How it works */}
          <div className="col-lg-5">
            <h5 style={{ fontFamily:"'Playfair Display',serif", color:"var(--gold-l)", marginBottom:24, fontStyle:"italic" }}>How It Works</h5>
            {[
              { n:"01", t:"Refer a Friend", d:"Share your unique referral code with friends & family" },
              { n:"02", t:"Friend Orders",  d:"Your friend places their first order at Dhanni Boutique" },
              { n:"03", t:"Both Get Rewarded", d:"You get a discount; your friend gets ₹50 OFF their first order too!" },
              { n:"04", t:"More Referrals = Bigger Rewards", d:"Unlock Silver, Gold & Diamond tiers for bigger discounts" },
            ].map((s,i) => (
              <motion.div key={i} initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:0.5, delay:i*0.1 }} viewport={{ once:true }}
                style={{ display:"flex", gap:16, marginBottom:24 }}
              >
                <div style={{ width:40, height:40, borderRadius:"50%", background:"linear-gradient(135deg,var(--gold),var(--gold-l))", display:"grid", placeItems:"center", fontFamily:"'Playfair Display',serif", fontWeight:700, color:"var(--ink)", fontSize:"0.85rem", flexShrink:0 }}>{s.n}</div>
                <div>
                  <h6 style={{ color:"var(--cream)", marginBottom:4, fontFamily:"'Playfair Display',serif", fontSize:"0.95rem" }}>{s.t}</h6>
                  <p style={{ fontSize:"0.8rem", color:"var(--muted)", margin:0, fontWeight:300, lineHeight:1.65 }}>{s.d}</p>
                </div>
              </motion.div>
            ))}

            <div style={{ background:"rgba(201,148,74,0.08)", border:"1px solid rgba(201,148,74,0.2)", borderRadius:14, padding:"18px 20px", marginTop:8 }}>
              <p style={{ margin:0, fontSize:"0.8rem", color:"var(--cream)", lineHeight:1.75, fontWeight:300 }}>
                <span style={{ color:"var(--gold)", fontWeight:600 }}>💡 Terms:</span> Rewards apply after referred friend's first order is completed. Multiple referrals accumulate. Code valid for 6 months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referral;
