import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-3">
      <div className="container text-center">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p className="text">
              We provide the best quality products at the best prices. Your satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/account" className="text-light text-decoration-none">Account</Link></li>
              <li><Link to="/cart" className="text-light text-decoration-none">Cart</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a  className="text-light me-3 fs-4"><i className="fab fa-github"></i></a>
              <a  className="text-light me-3 fs-4"><i className="fab fa-linkedin"></i></a>
              <a  className="text-light me-3 fs-4"><i className="fab fa-instagram"></i></a>
              <a  className="text-light me-3 fs-4"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
