import { motion } from "framer-motion";
import { useState } from "react";

const slots = ["10:00 AM","11:00 AM","12:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM"];
const services = [
  { id:"measurement", label:"📐 Measurement Session",  desc:"30 mins — Take all measurements" },
  { id:"fitting",     label:"👗 Fitting Appointment",  desc:"45 mins — Try & adjust your outfit" },
  { id:"design",      label:"🎨 Design Consultation",  desc:"30 mins — Discuss design & fabric" },
  { id:"alteration",  label:"✂️ Alteration Drop-off",  desc:"15 mins — Drop off for alterations" },
];

const Appointment = () => {
  const [step, setStep]         = useState(1);
  const [service, setService]   = useState("");
  const [date, setDate]         = useState("");
  const [slot, setSlot]         = useState("");
  const [name, setName]         = useState("");
  const [phone, setPhone]       = useState("");
  const [submitted, setSubmitted] = useState(false);

  const minDate = new Date(); minDate.setDate(minDate.getDate()+1);
  const minDateStr = minDate.toISOString().split("T")[0];

  const buildMsg = () =>
    `Hi Dhanni Boutique! 🌸\n\nI want to book an appointment:\n📋 Service: ${services.find(s=>s.id===service)?.label||service}\n📅 Date: ${date}\n⏰ Time: ${slot}\n👤 Name: ${name}\n📱 Phone: ${phone}\n\nPlease confirm my booking. Thank you!`;

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/919057255829?text=${encodeURIComponent(buildMsg())}`, "_blank");
    }, 800);
  };

  if (submitted) return (
    <section style={{ padding:"90px 5%", background:"var(--ink)", minHeight:"80vh", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.6, type:"spring" }} style={{ textAlign:"center", maxWidth:480 }}>
        <div style={{ fontSize:"4rem", marginBottom:20 }}>🎉</div>
        <h2 style={{ fontFamily:"'Playfair Display',serif", color:"var(--cream)", fontSize:"2rem", fontStyle:"italic", marginBottom:12 }}>Appointment Requested!</h2>
        <p style={{ color:"var(--muted)", marginBottom:24, fontWeight:300, lineHeight:1.8 }}>Your WhatsApp has opened with the booking details. We'll confirm your slot shortly ✨</p>
        <div style={{ background:"rgba(201,148,74,0.1)", border:"1px solid rgba(201,148,74,0.25)", borderRadius:16, padding:"20px 24px", marginBottom:28 }}>
          <p style={{ margin:0, color:"var(--cream)", fontSize:"0.88rem", lineHeight:1.9 }}>
            📋 {services.find(s=>s.id===service)?.label}<br/>
            📅 {date} at {slot}<br/>
            👤 {name}
          </p>
        </div>
        <button onClick={() => { setSubmitted(false); setStep(1); setService(""); setDate(""); setSlot(""); setName(""); setPhone(""); }} className="btn-ghost">
          Book Another →
        </button>
      </motion.div>
    </section>
  );

  return (
    <section style={{ padding:"90px 5% 110px", background:"linear-gradient(160deg,var(--ink) 0%,var(--deep) 55%,var(--ink) 100%)", minHeight:"80vh", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", width:500, height:500, background:"radial-gradient(circle,rgba(92,30,53,0.2) 0%,transparent 70%)", borderRadius:"50%", top:-100, right:-80, pointerEvents:"none" }} />
      <div className="container" style={{ maxWidth:640, position:"relative" }}>
        <motion.div className="text-center mb-5" initial={{ opacity:0, y:-24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
          <span className="section-label">Book a Visit</span>
          <h2 className="section-title" style={{ color:"var(--cream)" }}>
            Book an{" "}
            <span style={{ fontStyle:"italic", background:"linear-gradient(135deg,var(--gold),var(--gold-l))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Appointment</span>
          </h2>
          <div className="gold-line center" />
          <p className="section-sub" style={{ margin:"0 auto", textAlign:"center" }}>Schedule a fitting, consultation, or measurement session ✦</p>
        </motion.div>

        {/* Progress */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:0, marginBottom:40 }}>
          {[1,2,3].map((s,i) => (
            <>
              <div key={s} style={{
                width:36, height:36, borderRadius:"50%",
                background: step>=s ? "linear-gradient(135deg,var(--gold),var(--gold-l))" : "rgba(255,255,255,0.06)",
                border: step<s ? "1px solid rgba(201,148,74,0.2)" : "none",
                display:"grid", placeItems:"center",
                fontSize:"0.78rem", fontWeight:700,
                color: step>=s ? "var(--ink)" : "rgba(255,255,255,0.3)",
                transition:"all 0.4s"
              }}>{s}</div>
              {i<2 && <div style={{ width:60, height:1, background: step>s+1 ? "var(--gold)" : "rgba(255,255,255,0.1)", transition:"background 0.4s" }} />}
            </>
          ))}
        </div>

        {step===1 && (
          <motion.div initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.4 }}>
            <h5 style={{ fontFamily:"'Playfair Display',serif", color:"var(--gold-l)", marginBottom:20, fontStyle:"italic" }}>Choose Service</h5>
            <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:32 }}>
              {services.map(s => (
                <div key={s.id} onClick={() => setService(s.id)} style={{
                  padding:"18px 20px", borderRadius:14, cursor:"pointer",
                  background: service===s.id ? "rgba(201,148,74,0.12)" : "rgba(255,255,255,0.03)",
                  border: service===s.id ? "1px solid var(--gold)" : "1px solid rgba(255,255,255,0.07)",
                  transition:"all 0.25s"
                }}>
                  <div style={{ fontWeight:600, color: service===s.id ? "var(--gold-l)" : "var(--cream)", marginBottom:4 }}>{s.label}</div>
                  <div style={{ fontSize:"0.78rem", color:"var(--muted)", fontWeight:300 }}>{s.desc}</div>
                </div>
              ))}
            </div>
            <button onClick={() => service && setStep(2)} className="btn-gold" style={{ width:"100%", justifyContent:"center", opacity:service?1:0.4 }}>
              Next: Choose Date & Time →
            </button>
          </motion.div>
        )}

        {step===2 && (
          <motion.div initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.4 }}>
            <h5 style={{ fontFamily:"'Playfair Display',serif", color:"var(--gold-l)", marginBottom:20, fontStyle:"italic" }}>Pick Date & Time</h5>
            <div style={{ marginBottom:24 }}>
              <label style={{ display:"block", fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--muted)", marginBottom:8 }}>Select Date</label>
              <input type="date" min={minDateStr} value={date} onChange={e=>setDate(e.target.value)} style={{
                width:"100%", padding:"14px 18px", borderRadius:12,
                background:"rgba(255,255,255,0.05)", border:"1px solid rgba(201,148,74,0.25)",
                color:"var(--cream)", fontFamily:"'Jost',sans-serif", fontSize:"0.9rem", outline:"none",
                colorScheme:"dark"
              }} />
            </div>
            <div style={{ marginBottom:32 }}>
              <label style={{ display:"block", fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--muted)", marginBottom:12 }}>Select Time Slot</label>
              <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
                {slots.map(s => (
                  <button key={s} onClick={() => setSlot(s)} style={{
                    padding:"9px 16px", borderRadius:"50px", cursor:"pointer",
                    background: slot===s ? "linear-gradient(135deg,var(--gold),var(--gold-l))" : "rgba(255,255,255,0.04)",
                    border: slot!==s ? "1px solid rgba(201,148,74,0.2)" : "none",
                    color: slot===s ? "var(--ink)" : "rgba(255,255,255,0.6)",
                    fontFamily:"'Jost',sans-serif", fontSize:"0.78rem", fontWeight:500, transition:"all 0.25s"
                  }}>{s}</button>
                ))}
              </div>
            </div>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={() => setStep(1)} className="btn-ghost" style={{ flex:1, justifyContent:"center" }}>← Back</button>
              <button onClick={() => date && slot && setStep(3)} className="btn-gold" style={{ flex:2, justifyContent:"center", opacity: date&&slot?1:0.4 }}>Next: Your Details →</button>
            </div>
          </motion.div>
        )}

        {step===3 && (
          <motion.div initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.4 }}>
            <h5 style={{ fontFamily:"'Playfair Display',serif", color:"var(--gold-l)", marginBottom:20, fontStyle:"italic" }}>Your Details</h5>
            <div style={{ display:"flex", flexDirection:"column", gap:14, marginBottom:28 }}>
              {[
                { label:"Your Name", val:name, set:setName, placeholder:"e.g. Priya Sharma", type:"text" },
                { label:"Phone Number", val:phone, set:setPhone, placeholder:"e.g. 9876543210", type:"tel" },
              ].map((f,i) => (
                <div key={i}>
                  <label style={{ display:"block", fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--muted)", marginBottom:8 }}>{f.label}</label>
                  <input type={f.type} value={f.val} onChange={e=>f.set(e.target.value)} placeholder={f.placeholder} style={{
                    width:"100%", padding:"14px 18px", borderRadius:12,
                    background:"rgba(255,255,255,0.05)", border:"1px solid rgba(201,148,74,0.25)",
                    color:"var(--cream)", fontFamily:"'Jost',sans-serif", fontSize:"0.9rem", outline:"none"
                  }} />
                </div>
              ))}
            </div>
            {/* Summary */}
            <div style={{ background:"rgba(201,148,74,0.08)", border:"1px solid rgba(201,148,74,0.2)", borderRadius:14, padding:"18px 20px", marginBottom:24 }}>
              <p style={{ margin:0, color:"var(--cream)", fontSize:"0.84rem", lineHeight:2, fontWeight:300 }}>
                <strong style={{ color:"var(--gold)" }}>Summary</strong><br/>
                📋 {services.find(s=>s.id===service)?.label}<br/>
                📅 {date} at {slot}
              </p>
            </div>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={() => setStep(2)} className="btn-ghost" style={{ flex:1, justifyContent:"center" }}>← Back</button>
              <button onClick={() => name && phone && handleSubmit()} className="btn-gold" style={{ flex:2, justifyContent:"center", opacity: name&&phone?1:0.4 }}>
                📲 Confirm via WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Appointment;
