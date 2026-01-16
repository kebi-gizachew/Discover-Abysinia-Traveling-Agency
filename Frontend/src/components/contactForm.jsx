import "../styles/contactForm.css";
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [messages, setMessages] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      country,
      travelDate:dates,
      destination,
      message:messages,
    };

    try {
      const res = await fetch(
        "http://localhost:5000/api/contacts/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      // reset form
      setName("");
      setEmail("");
      setPhone("");
      setCountry("");
      setDestination("");
      setDates("");
      setMessages("");

      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-form" id="contact-form">
      <div className="form-header">
        <h3>Send Us a Message</h3>
        <p>Fill out the form below and we'll get back to you within 24 hours.</p>
      </div>

      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullname" className="required">
              Full Name
            </label>
            <div className="input-wrapper">
              <i className="ri-user-line"></i>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your full name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="required">
              Email Address
            </label>
            <div className="input-wrapper">
              <i className="ri-mail-line"></i>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="input-wrapper">
              <i className="ri-phone-line"></i>
              <input
                type="tel"
                id="phone"
                placeholder="+251 911 234 567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <div className="input-wrapper">
              <i className="ri-globe-line"></i>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="" disabled>
                  Select your country
                </option>
                <option value="ethiopia">Ethiopia</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="other">Other</option>
              </select>
              <i className="ri-arrow-down-s-line select-arrow"></i>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="destination">Destination Interest</label>
          <div className="input-wrapper">
            <i className="ri-map-pin-line"></i>
            <select
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="" disabled>
                Select preferred destination
              </option>
              <option value="northern">Northern Historical Route</option>
              <option value="southern">Southern Cultural Route</option>
              <option value="eastern">Eastern Ethiopia</option>
              <option value="western">Western Ethiopia</option>
              <option value="all">All of Ethiopia</option>
            </select>
            <i className="ri-arrow-down-s-line select-arrow"></i>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="travel-date">Preferred Travel Dates</label>
          <div className="input-wrapper">
            <i className="ri-calendar-line"></i>
            <input
              type="text"
              id="travel-date"
              placeholder="e.g., December 2024 - January 2025"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="required">
            Your Message
          </label>
          <div className="textarea-wrapper">
            <i className="ri-chat-3-line"></i>
            <textarea
              id="message"
              placeholder="Tell us about your dream Ethiopian adventure..."
              required
              rows="6"
              value={messages}
              onChange={(e) => setMessages(e.target.value)}
            ></textarea>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          <i className="ri-send-plane-fill"></i>
          Send Message
        </button>

        <p className="form-note">
          <i className="ri-information-line"></i>
          We respect your privacy and will never share your information with
          third parties.
        </p>
      </form>
    </div>
  );
}

export default ContactForm;
