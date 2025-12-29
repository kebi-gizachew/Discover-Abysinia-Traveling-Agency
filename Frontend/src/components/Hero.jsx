import '../styles/Hero.css';
import {NavLink} from 'react-router-dom'


function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Discover Your Ethiopian<br />
                        Story
                    </h1>
                    
                    <p className="hero-subtitle">
                        Journey through rich heritage and create unforgettable moments with<br />
                        Ethiopia's most trusted travel experts.
                    </p>
                    
                    <div className="hero-buttons">
                        <button className="hero-btn primary-btn">
                            <NavLink to='/destination'style={{color:'white',textDecoration:'none'}}>Explore Destinations</NavLink>
                        </button>
                        <button className="hero-btn secondary-btn">
                            <NavLink to='/contact' style={{color:'white',textDecoration:'none'}}>Contact Us</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;