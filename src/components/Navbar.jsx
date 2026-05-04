import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/collections/logo/logo1.jpg";
import { House, Grid, Info, Whatsapp, ChevronDown } from "react-bootstrap-icons";
import "./Navbar.css";

const MORE_LINKS = [
  { to:"/price-list",    label:"💰 Price List" },
  { to:"/size-guide",    label:"📐 Size Guide" },
  { to:"/fabric-picker", label:"🎨 Fabric Picker" },
  // { to:"/track-order",   label:"⏳ Track Order" },
  { to:"/appointment",   label:"📅 Book Appointment" },
  { to:"/before-after",  label:"📸 Before & After" },
  { to:"/referral",      label:"⭐ Refer & Earn" },
  // { to:"/notify-me",     label:"🔔 Notify Me" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setMoreOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <nav id="top-navbar" className={scrolled ? "scrolled" : ""}>
        <NavLink to="/" className="nav-logo">
          Dhanni <span>Boutique</span>
        </NavLink>

        {/* Mobile logo center */}
        <NavLink to="/" className="d-lg-none ms-auto me-3">
          <img src={logo} alt="logo" style={{ height:42, width:42, borderRadius:"50%", objectFit:"cover" }} />
        </NavLink>

        {/* Desktop links */}
        <div className="nav-links d-none d-lg-flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/collections">Collections</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>

          {/* More dropdown */}
          <div ref={dropRef} style={{ position:"relative" }}>
            <button onClick={() => setMoreOpen(p=>!p)} style={{
              background:"none", border:"none", cursor:"pointer",
              display:"flex", alignItems:"center", gap:4,
              fontSize:"0.75rem", fontWeight:400, letterSpacing:"0.15em", textTransform:"uppercase",
              color: moreOpen ? "var(--gold-l)" : "rgba(255,255,255,0.6)",
              transition:"color 0.3s", fontFamily:"'Jost',sans-serif"
            }}>
              More <ChevronDown style={{ fontSize:"0.7rem", transition:"transform 0.3s", transform: moreOpen?"rotate(180deg)":"rotate(0)" }} />
            </button>
            {moreOpen && (
              <div style={{
                position:"absolute", top:"calc(100% + 14px)", right:-20,
                background:"rgba(26,10,16,0.96)", backdropFilter:"blur(24px)",
                border:"1px solid rgba(201,148,74,0.2)", borderRadius:16,
                padding:"10px 0", minWidth:210, zIndex:200,
                boxShadow:"0 24px 60px rgba(0,0,0,0.6)",
                animation:"fadeSlideUp 0.25s ease"
              }}>
                {MORE_LINKS.map((l,i) => (
                  <NavLink key={i} to={l.to} onClick={() => setMoreOpen(false)} style={({ isActive }) => ({
                    display:"block", padding:"10px 20px",
                    fontSize:"0.8rem", color: isActive ? "var(--gold-l)" : "rgba(255,255,255,0.65)",
                    transition:"all 0.2s", borderLeft: isActive ? "2px solid var(--gold)" : "2px solid transparent",
                    background: isActive ? "rgba(201,148,74,0.08)" : "transparent"
                  })}
                    onMouseEnter={e => { e.currentTarget.style.background="rgba(201,148,74,0.08)"; e.currentTarget.style.color="var(--cream)"; e.currentTarget.style.paddingLeft="24px"; }}
                    onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="rgba(255,255,255,0.65)"; e.currentTarget.style.paddingLeft="20px"; }}
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <a href="https://instagram.com/dhanniboutique" target="_blank" rel="noreferrer" className="btn-gold nav-cta">
            ✨ Order Now
          </a>
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <div className="bottom-nav d-lg-none">
        <NavLink to="/" className={({isActive}) => "bottom-nav-item"+(isActive?" active":"")}>
          <House /><span>Home</span>
        </NavLink>
        <NavLink to="/collections" className={({isActive}) => "bottom-nav-item"+(isActive?" active":"")}>
          <Grid /><span>Shop</span>
        </NavLink>
        <NavLink to="/appointment" className={({isActive}) => "bottom-nav-item"+(isActive?" active":"")}>
          <span style={{ fontSize:18 }}>📅</span><span>Book</span>
        </NavLink>
        <NavLink to="/about" className={({isActive}) => "bottom-nav-item"+(isActive?" active":"")}>
          <Info /><span>About</span>
        </NavLink>
        <a href="https://wa.me/919057255829" target="_blank" rel="noreferrer" className="bottom-nav-item whatsapp">
          <Whatsapp /><span>Chat</span>
        </a>
      </div>
    </>
  );
};

export default Navbar;
