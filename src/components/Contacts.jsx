import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 border-0" style={{ width: "400px", background: "#f8f9fa" }}>
        <h2 className="text-center text-primary mb-3">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control border-0 shadow-sm"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control border-0 shadow-sm"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-control border-0 shadow-sm"
              rows="4"
              placeholder="Your message..."
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 shadow-sm">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
