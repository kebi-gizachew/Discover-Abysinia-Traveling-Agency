import '../styles/Footer.css'
function Footer(){
    return(
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Discover Abysinia</h3>
            <p className="footer-description">
              Your trusted guide to Ethiopia's most spectacular destinations. 
              We specialize in creating authentic travel experiences that connect you with Ethiopia's rich cultural heritage.
            </p>
            <div className="trust-badges">
              <span className="badge"><i className="ri-shield-check-fill"></i> Trusted Travel Agency</span>
              <span className="badge"><i className="ri-award-fill"></i> Certified Guides</span>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="../html/index.html">Home</a></li>
              <li><a href="../html/destination.html">Destinations</a></li>
              <li><a href="#" className="active">Contact Us</a></li>
              
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Details</h3>
            <ul className="contact-details">
              <li>
                <i className="ri-map-pin-fill"></i>
                <span>Bole Road, Addis Ababa, Ethiopia</span>
              </li>
              <li>
                <i className="ri-phone-fill"></i>
                <span>+251 911 234 567</span>
              </li>
              <li>
                <i className="ri-mail-fill"></i>
                <span>contact@DiscoverAbysinia.com</span>
              </li>
              <li>
                <i className="ri-time-fill"></i>
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Travel Updates</h3>
            <p className="newsletter-text">
              Subscribe to receive travel tips and exclusive offers for Ethiopian destinations.
            </p>
            <form className="newsletter-form">
              <div className="newsletter-input">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  aria-label="Email for newsletter subscription"
                />
                <button type="submit" aria-label="Subscribe to newsletter">
                  <i className="ri-send-plane-fill"></i>
                </button>
              </div>
              <p className="privacy-note">
                By subscribing, you agree to our Privacy Policy
              </p>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; <span id="current-year">2025</span> Discover Abysinia Travel. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
    )
}
export default Footer