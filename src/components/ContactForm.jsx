import { useState } from "react";
import "./ContactForm.css"

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch(
      "https://script.google.com/macros/s/AKfycbyjhEdzlo4pLfcqF_pnV6Tpf21llX-sYPLbJrKzbH0Gav5DJoZJNEeWI6g2WlBInuBkwg/exec",
      {
        method: "POST",
        body: JSON.stringify({
          ...form,
          page: "Contact Page",
        }),
      }
    );

    setSuccess(true);
    setLoading(false);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        value={form.phone}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Your Requirement"
        rows="4"
        value={form.message}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading} style={{backgroundColor:"rebeccapurple"}}>
        {loading ? "Sending..." : "Submit"}
      </button>

      {success && (
        <p className="success-text">
          ✅ Thank you! We will contact you soon.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
