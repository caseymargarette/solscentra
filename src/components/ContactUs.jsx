import { useState } from "react";

export default function ContactUs() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mvzjrppk", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contactUs" className="contact-us">
      <h2>We'd love to hear your thoughts</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {status && <p className="status">{status}</p>}
    </section>
  );
}