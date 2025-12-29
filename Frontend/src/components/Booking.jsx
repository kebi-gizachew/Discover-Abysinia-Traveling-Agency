import '../styles/Booking.css'
function Booking(){
    return(
         <section class="booking-section">
        <div class="container">
          <div class="booking-card">
            <h2 class="booking-title">Plan Your Ethiopian Adventure</h2>
            <p class="booking-subtitle">Book your journey with ease and confidence</p>
            
            <form class="booking-form">
              <div class="form-grid">
                <div class="form-group">
                  <label for="full-name">
                    <i class="ri-user-line"></i>
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="full-name" 
                    placeholder="Enter your full name"
                    required
                    aria-required="true"
                  />
                </div>
                
                <div class="form-group">
                  <label for="email">
                    <i class="ri-mail-line"></i>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="your.email@example.com"
                    required
                    aria-required="true"
                  />
                </div>
                
                <div class="form-group">
                  <label for="destination">
                    <i class="ri-map-pin-line"></i>
                    Destination
                  </label>
                  <select id="destination" required aria-required="true">
                    <option value="" disabled selected>Select your destination</option>
                    <option value="northern">Northern Historical Route</option>
                    <option value="central">Central Ethiopia</option>
                    <option value="southern">Southern Cultural Route</option>
                    <option value="eastern">Eastern Ethiopia</option>
                    <option value="western">Western Ethiopia</option>
                    <option value="custom">Custom Itinerary</option>
                  </select>
                  <i class="ri-arrow-down-s-line select-arrow"></i>
                </div>
                
                <div class="form-group">
                  <label for="travelers">
                    <i class="ri-group-line"></i>
                    Number of Travelers
                  </label>
                  <select id="travelers" required aria-required="true">
                    <option value="" disabled selected>Select travelers</option>
                    <option value="1">1 Traveler</option>
                    <option value="2">2 Travelers</option>
                    <option value="3-4">3-4 Travelers</option>
                    <option value="5-6">5-6 Travelers</option>
                    <option value="7+">7+ Travelers</option>
                  </select>
                  <i class="ri-arrow-down-s-line select-arrow"></i>
                </div>
                
                <div class="form-group">
                  <label for="check-in">
                    <i class="ri-calendar-line"></i>
                    Check-in Date
                  </label>
                  <input 
                    type="date" 
                    id="check-in" 
                    required
                    aria-required="true"
                  />
                </div>
                
                <div class="form-group">
                  <label for="check-out">
                    <i class="ri-calendar-line"></i>
                    Check-out Date
                  </label>
                  <input 
                    type="date" 
                    id="check-out" 
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              
              <button type="submit" class="submit-btn">
                <i class="ri-search-line"></i>
                Search Available Trips
              </button>
            </form>
            
            <p class="booking-note">
              <i class="ri-information-line"></i>
              We'll contact you within 24 hours to discuss your itinerary
            </p>
          </div>
        </div>
      </section>

    )
}
export default Booking