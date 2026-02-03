import React from 'react'

function Footer() {
  return (
    <div>
         <footer className=" text-light pt-5" style={{backgroundColor:"rgb(17 67 117)"}}>
      <div className="container">
        <div className="row gy-4">

          {/* Brand */}
          <div className="col-md-4">
            <h4 className="fw-bold">Dhanni Boutique</h4>
            <p className="small">
              Make beautiful outfit for you ✨  
              Custom stitching & premium designs.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Collections</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-4">
            <h5>Order Via</h5>
            <a
              href="https://instagram.com/dhanniboutique"
              target="_blank"
              className="btn btn-outline-light btn-sm me-2"
            >
              Instagram DM
            </a>

            <a
              href="https://wa.me/+919057255829"
              target="_blank"
              className="btn btn-outline-light btn-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <hr className="border-secondary mt-4" />

        <p className="text-center small mb-0 pb-3">
          © {new Date().getFullYear()} Dhanni Boutique | All Rights Reserved
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer