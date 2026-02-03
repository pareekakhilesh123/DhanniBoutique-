import { NavLink } from "react-router-dom";

import logo from "../assets/images/collections/logo/logo1.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Brand */}
        <NavLink className="navbar-brand fw-bold fs-3" to="/">
            <img src={logo} alt="logo" style={{height:"64px", borderRadius:"50%" }} ></img>
        </NavLink>
     

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
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
              <NavLink className="nav-link d-none" to="/gallery">Gallery</NavLink>
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
  );
};

export default Navbar;
