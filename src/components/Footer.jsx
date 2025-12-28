import '../styles/Footer.css'
function Footer(){
    return(
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">Discover Abysinia</h3>
            <p class="footer-description">
              Your trusted guide to Ethiopia's most spectacular destinations. 
              We specialize in creating authentic travel experiences that connect you with Ethiopia's rich cultural heritage.
            </p>
            <div class="trust-badges">
              <span class="badge"><i class="ri-shield-check-fill"></i> Trusted Travel Agency</span>
              <span class="badge"><i class="ri-award-fill"></i> Certified Guides</span>
            </div>
          </div>

          <div class="footer-section">
            <h3 class="footer-title">Quick Links</h3>
            <ul class="footer-links">
              <li><a href="../html/index.html">Home</a></li>
              <li><a href="../html/destination.html">Destinations</a></li>
              <li><a href="#" class="active">Contact Us</a></li>
              
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-title">Contact Details</h3>
            <ul class="contact-details">
              <li>
                <i class="ri-map-pin-fill"></i>
                <span>Bole Road, Addis Ababa, Ethiopia</span>
              </li>
              <li>
                <i class="ri-phone-fill"></i>
                <span>+251 911 234 567</span>
              </li>
              <li>
                <i class="ri-mail-fill"></i>
                <span>contact@DiscoverAbysinia.com</span>
              </li>
              <li>
                <i class="ri-time-fill"></i>
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-title">Travel Updates</h3>
            <p class="newsletter-text">
              Subscribe to receive travel tips and exclusive offers for Ethiopian destinations.
            </p>
            <form class="newsletter-form">
              <div class="newsletter-input">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  aria-label="Email for newsletter subscription"
                />
                <button type="submit" aria-label="Subscribe to newsletter">
                  <i class="ri-send-plane-fill"></i>
                </button>
              </div>
              <p class="privacy-note">
                By subscribing, you agree to our Privacy Policy
              </p>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; <span id="current-year">2025</span> Discover Abysinia Travel. All rights reserved.</p>
          <div class="footer-legal">
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