import '../styles/contactSocial.css'
function ContactSocial(){
    return(
        <div className="contact-method">
                <div className="method-icon">
                  <i className="ri-chat-3-fill"></i>
                </div>
                <div className="method-content">
                  <h3>Social Media</h3>
                  <div className="social-links">
                    <a href="#" aria-label="Facebook">
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="#" aria-label="Instagram">
                      <i className="ri-instagram-line"></i>
                    </a>
                    <a href="#" aria-label="Twitter">
                      <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="#" aria-label="WhatsApp">
                      <i className="ri-whatsapp-line"></i>
                    </a>
                  </div>
                </div>
              </div>
    )
}
export default ContactSocial;
   