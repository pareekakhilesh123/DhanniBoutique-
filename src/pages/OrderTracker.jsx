import { motion } from "framer-motion";
import { useState } from "react";

const SHEET_URL = "https://script.google.com/macros/s/AKfycbz-XDNHGT7YdOlxroL6jJhDvCPs_zqOluuM8JkieDPUKAD4eXRJckZa00pE3AuYyQtXrQ/exec?sheet=orders";

const steps = [
  { label:"Order Received",    emoji:"📥", color:"#C9944A" },
  { label:"Fabric Sourcing",   emoji:"🪡", color:"#B87A8A" },
  { label:"Cutting & Stitching",emoji:"✂️",color:"#8A5A9E" },
  { label:"Embellishment",     emoji:"✨", color:"#6A8AAE" },
  { label:"Quality Check",     emoji:"🔍", color:"#4A9A7E" },
  { label:"Ready to Dispatch", emoji:"📦", color:"#5A8A4E" },
  { label:"Delivered",         emoji:"🎉", color:"#C9944A" },
];

// Map status string -> step index
const STATUS_MAP = {
  "received": 0, "order received": 0,
  "fabric": 1, "fabric sourcing": 1,
  "stitching": 2, "cutting": 2,
  "embellishment": 3, "work": 3,
  "quality": 4, "check": 4,
  "ready": 5, "dispatch": 5,
  "delivered": 6,
};

const demoOrders = {
  "DB001": { customerName:"Priya Sharma",  item:"Bridal Lehenga",     status:"stitching",  est:"3 days" },
  "DB002": { customerName:"Ritu Agarwal",  item:"Anarkali Suit",       status:"ready",      est:"Ready!" },
  "DB003": { customerName:"Meera Joshi",   item:"Wedding Sharara Set", status:"embellishment", est:"5 days" },
};

const OrderTracker = () => {
  const [orderId, setOrderId]   = useState("");
  const [result, setResult]     = useState(null);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  const track = async () => {
    if (!orderId.trim()) return;
    setLoading(true); setError(""); setResult(null);
    try {
      // Try Google Sheet first
      const res = await fetch(`${SHEET_URL}&orderId=${orderId.trim().toUpperCase()}`);
      const data = await res.json();
      if (data && data.orderId) {
        setResult(data);
      } else if (demoOrders[orderId.trim().toUpperCase()]) {
        setResult({ orderId: orderId.trim().toUpperCase(), ...demoOrders[orderId.trim().toUpperCase()] });
      } else {
        setError("Order not found. Please check your Order ID or contact us on WhatsApp.");
      }
    } catch {
      // Fallback to demo
      const demo = demoOrders[orderId.trim().toUpperCase()];
      if (demo) setResult({ orderId: orderId.trim().toUpperCase(), ...demo });
      else setError("Order not found. Please check your Order ID or contact us on WhatsApp.");
    }
    setLoading(false);
  };

  const stepIdx = result ? (STATUS_MAP[result.status?.toLowerCase()] ?? 0) : 0;

  return (
    <section style={{ padding:"90px 5% 110px", background:"linear-gradient(160deg,var(--ink) 0%,var(--deep) 55%,var(--ink) 100%)", minHeight:"80vh", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", width:500, height:500, background:"radial-gradient(circle,rgba(201,148,74,0.08) 0%,transparent 70%)", borderRadius:"50%", bottom:-80, right:-80, pointerEvents:"none" }} />
      <div className="container" style={{ position:"relative" }}>
        <motion.div className="text-center mb-5" initial={{ opacity:0, y:-24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
          <span className="section-label">Live Status</span>
          <h2 className="section-title" style={{ color:"var(--cream)" }}>
            Track Your{" "}
            <span style={{ fontStyle:"italic", background:"linear-gradient(135deg,var(--gold),var(--gold-l))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Order</span>
          </h2>
          <div className="gold-line center" />
          <p className="section-sub" style={{ margin:"0 auto", textAlign:"center" }}>Enter your Order ID to see real-time status of your outfit ✦</p>
        </motion.div>

        {/* Search Box */}
        <div style={{ maxWidth:480, margin:"0 auto 48px" }}>
          <div style={{ display:"flex", gap:10 }}>
            <input
              value={orderId} onChange={e => setOrderId(e.target.value)}
              onKeyDown={e => e.key==="Enter" && track()}
              placeholder="Enter Order ID (e.g. DB001)"
              style={{
                flex:1, padding:"14px 18px", borderRadius:"50px",
                background:"rgba(255,255,255,0.05)", border:"1px solid rgba(201,148,74,0.25)",
                color:"var(--cream)", fontFamily:"'Jost',sans-serif", fontSize:"0.9rem",
                outline:"none"
              }}
            />
            <button onClick={track} className="btn-gold" style={{ whiteSpace:"nowrap" }}>
              {loading ? "⏳" : "Track →"}
            </button>
          </div>
          <p style={{ fontSize:"0.72rem", color:"var(--muted)", textAlign:"center", marginTop:10 }}>
            Try demo IDs: <span style={{ color:"var(--gold)", cursor:"pointer" }} onClick={()=>setOrderId("DB001")}>DB001</span>, <span style={{ color:"var(--gold)", cursor:"pointer" }} onClick={()=>setOrderId("DB002")}>DB002</span>, <span style={{ color:"var(--gold)", cursor:"pointer" }} onClick={()=>setOrderId("DB003")}>DB003</span>
          </p>
        </div>

        {error && (
          <div style={{ background:"rgba(200,60,60,0.1)", border:"1px solid rgba(200,60,60,0.25)", borderRadius:16, padding:"18px 24px", maxWidth:480, margin:"0 auto 32px", textAlign:"center" }}>
            <p style={{ color:"#FF8A8A", margin:0, fontSize:"0.88rem" }}>{error}</p>
            <a href="https://wa.me/919057255829" target="_blank" rel="noreferrer" style={{ color:"var(--gold)", fontSize:"0.82rem", marginTop:8, display:"block" }}>Contact us on WhatsApp →</a>
          </div>
        )}

        {result && (
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
            {/* Order Info */}
            <div style={{ background:"rgba(201,148,74,0.08)", border:"1px solid rgba(201,148,74,0.25)", borderRadius:20, padding:"24px 28px", maxWidth:600, margin:"0 auto 40px" }}>
              <div className="row g-3">
                {[
                  { l:"Order ID",  v:result.orderId },
                  { l:"Customer",  v:result.customerName },
                  { l:"Item",      v:result.item },
                  { l:"Est. Ready",v:result.est || "TBD" },
                ].map((r,i) => (
                  <div className="col-6" key={i}>
                    <div style={{ fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--muted)", marginBottom:4 }}>{r.l}</div>
                    <div style={{ fontFamily:"'Playfair Display',serif", color:"var(--cream)", fontSize:"0.95rem" }}>{r.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Steps */}
            <div style={{ maxWidth:700, margin:"0 auto" }}>
              {steps.map((step, i) => {
                const done    = i < stepIdx;
                const current = i === stepIdx;
                const future  = i > stepIdx;
                return (
                  <div key={i} style={{ display:"flex", gap:20, marginBottom: i<steps.length-1 ? 0 : 0 }}>
                    {/* Line + Circle */}
                    <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
                      <div style={{
                        width:48, height:48, borderRadius:"50%", flexShrink:0,
                        background: done ? step.color : current ? "rgba(201,148,74,0.2)" : "rgba(255,255,255,0.04)",
                        border: current ? `2px solid ${step.color}` : done ? "none" : "1px solid rgba(255,255,255,0.1)",
                        display:"grid", placeItems:"center", fontSize:"1.2rem",
                        boxShadow: current ? `0 0 20px ${step.color}44` : "none",
                        transition:"all 0.4s"
                      }}>
                        {done ? "✓" : step.emoji}
                      </div>
                      {i < steps.length-1 && (
                        <div style={{ width:2, flex:1, minHeight:32, background: done ? "var(--gold)" : "rgba(255,255,255,0.08)", margin:"4px 0" }} />
                      )}
                    </div>
                    {/* Content */}
                    <div style={{ paddingTop:10, paddingBottom: i<steps.length-1 ? 24 : 0 }}>
                      <div style={{
                        fontFamily:"'Playfair Display',serif", fontSize:"1rem",
                        color: done ? "var(--gold-l)" : current ? "var(--cream)" : "rgba(255,255,255,0.3)",
                        fontStyle: current ? "italic" : "normal", fontWeight: current ? 600 : 400
                      }}>
                        {step.label} {current && "← Current"}
                      </div>
                      {current && <div style={{ fontSize:"0.76rem", color:"var(--muted)", marginTop:4, fontWeight:300 }}>Your outfit is at this stage right now ✨</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OrderTracker;
