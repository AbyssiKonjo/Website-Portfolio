import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAIL_JS_USER_ID;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(
        (response) => {
          toast.success("Message Sent successfully! Thank you for your message :)");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit}>
        <h2>Contact me for any questions you may have</h2>
        <div className="all-filters">
          <div className="name-email-subject-filter">
            <div className="filter">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="filter">
              <label htmlFor="email">Contact Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="filter">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                autoComplete="off" // Optional: If you don't want to suggest autofill for subject.
              />
            </div>
          </div>

          <div className="filter" id="messageFilter">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
