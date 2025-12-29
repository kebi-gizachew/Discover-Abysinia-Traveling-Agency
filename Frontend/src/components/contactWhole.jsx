import ContactInfo from "./contactInfo"
import '../styles/contactWhole.css'
import ContactForm from "./contactForm"
function ContactWhole(){
    return(
        <main className="contact-section">
      <div className="container">
        <div className="contact-grid">
            <ContactInfo/>
            <ContactForm/>
        </div>
        </div>
    </main>
    )
}
export default ContactWhole