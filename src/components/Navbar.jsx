import { NavLink } from "react-router-dom";
import logo from "../assets/images/collections/logo/logo1.jpg";
import {
  House,
  Grid,
  Camera,
  Info,
  Whatsapp,
} from "react-bootstrap-icons";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      {/* TOP NAVBAR (Logo only on mobile, full on desktop) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">

          {/* Logo */}
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              alt="logo"
              style={{ height: "56px", borderRadius: "50%" }}
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="d-none d-lg-flex ms-auto">
            <ul className="navbar-nav gap-3 align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/collections">Collections</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="btn btn-dark px-3" to="/contact">
                  ✨ Order Now
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      {/* BOTTOM NAVBAR – MOBILE ONLY */}
      <div className="bottom-nav d-lg-none">
        <NavLink to="/" className="bottom-nav-item">
          <House />
          <span>Home</span>
        </NavLink>

        <NavLink to="/collections" className="bottom-nav-item">
          <Grid />
          <span>Shop</span>
        </NavLink>

        <NavLink to="/gallery" className="bottom-nav-item d-none">
          <Camera />
          <span>Gallery</span>
        </NavLink>

        <NavLink to="/about" className="bottom-nav-item">
          <Info />
          <span>About</span>
        </NavLink>

        <a
          href="https://wa.me/919057255829"
          target="_blank"
          rel="noreferrer"
          className="bottom-nav-item whatsapp"
        >
          <Whatsapp />
          <span>Chat</span>
        </a>
      </div>
    </>
  );
};

export default Navbar;
