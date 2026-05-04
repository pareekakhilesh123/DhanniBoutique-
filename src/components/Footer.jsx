import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-wrap">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <span className="footer-brand-name">Dhanni <span>Boutique</span></span>
            <p>Grace in every stitch ✨<br />Custom stitching & premium designs crafted with love from Rajasthan.</p>
            <div className="footer-socials">
              <a href="https://instagram.com/dhanniboutique" target="_blank" rel="noreferrer" className="f-soc" title="Instagram">📸</a>
              <a href="https://wa.me/919057255829" target="_blank" rel="noreferrer" className="f-soc" title="WhatsApp">💬</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/collections">Collections</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div className="footer-col">
            <h4>Our Tools</h4>
            <ul>
              <li><Link to="/price-list">💰 Price List</Link></li>
              <li><Link to="/size-guide">📐 Size Guide</Link></li>
              <li><Link to="/fabric-picker">🎨 Fabric Picker</Link></li>
              {/* <li><Link to="/track-order">⏳ Track Order</Link></li> */}
              <li><Link to="/appointment">📅 Book Appointment</Link></li>
              <li><Link to="/before-after">📸 Before & After</Link></li>
              <li><Link to="/referral">⭐ Refer & Earn</Link></li>
              {/* <li><Link to="/notify-me">🔔 Notify Me</Link></li> */}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul>
              <li style={{ color:"rgba(255,255,255,0.35)", fontSize:"0.82rem" }}>📍 Rajasthan, India</li>
              <li style={{ color:"rgba(255,255,255,0.35)", fontSize:"0.82rem" }}>📱 +91 90572 55829</li>
              <li style={{ color:"rgba(255,255,255,0.35)", fontSize:"0.82rem" }}>⏰ Mon–Sat, 10am–7pm</li>
              <li style={{ marginTop:10 }}><a href="https://wa.me/919057255829" target="_blank" rel="noreferrer">📲 WhatsApp Us</a></li>
              <li><a href="https://instagram.com/dhanniboutique" target="_blank" rel="noreferrer">📸 Instagram DM</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Dhanni Boutique. All Rights Reserved. Made with ♥ in India.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
