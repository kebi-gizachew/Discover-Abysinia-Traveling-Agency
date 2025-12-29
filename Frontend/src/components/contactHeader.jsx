import '../styles/contactHeader.css'
function ContactHero(){
    return(
         <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Get In Touch</h1>
          <p className="hero-subtitle">
            Ready to plan your next adventure? Contact our travel experts to create the perfect Ethiopian itinerary tailored just for you.
          </p>
          <a href="#contact-form" className="cta-button">
            Start Planning <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
    
    )
}
export default ContactHero;