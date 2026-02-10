import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-4">

          {/* BRAND */}
          <div className="col-md-4">
            <h4 className="footer-brand">Dhanni Boutique</h4>
            <p className="footer-text">
              Make beautiful outfit for you ✨ <br />
              Custom stitching & premium designs made with love.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-4">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/collections">Collections</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* CONTACT / SOCIAL */}
          <div className="col-md-4">
            <h6 className="footer-title">Order With Us</h6>

            <div className="footer-buttons">
              <a
                href="https://instagram.com/dhanniboutique"
                target="_blank"
                rel="noreferrer"
                className="footer-btn instagram"
              >
                Instagram DM
              </a>

              <a
                href="https://wa.me/919057255829"
                target="_blank"
                rel="noreferrer"
                className="footer-btn whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        <hr className="footer-divider" />

        <p className="footer-copy">
          © {new Date().getFullYear()} Dhanni Boutique. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
