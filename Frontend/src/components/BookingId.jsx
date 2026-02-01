import { useState } from "react";
import "../styles/BookingId.css";
function BookingForm(props) {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
  const [destinationId, setdestinationId] = useState(props.destinationId || "")
  const [travelDate, setTravelDate] = useState("")
  const [travelers, setTravelers] = useState(1)
  const [transport, setTransport] = useState("Bus")
  const handleSubmit=async (e) => {
  e.preventDefault()
  const bookingData={
    fullName,
    email,
    transport,
    destinationId,
    travelDate,
    travelers,
  };

  console.log("Booking Data:", bookingData);

  try {
    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // ✅ important for cookies
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Booking failed");
    }

    alert("Booking successful!");
    setFullName("")
    setEmail("")
    setdestinationId("")
    setTransport("")
    setTravelDate("")
    setTravelers("")

    console.log("Server response:", data);

  } catch (error) {
    console.error("Booking error:", error);
    alert(error.message);
  }
};


  return (
    <section className="booking-section">   
         
      <form className="booking-card" onSubmit={handleSubmit}>
        <h2 className="booking-title">Plan Your Ethiopian Adventure</h2>
            <p className="booking-subtitle">Book your journey with ease and confidence</p>
             <div className="form-group">
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
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  </div>
                  <div className="form-group">
<label for="email">
                    <i class="ri-email-line"></i>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email address"
                    required
                    aria-required="true"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  </div>

        <div className="form-group">
          <label>Destination</label>
          <input
            type="text"
            placeholder="Destination"
            value={props.destination}
            onChange={(e) => setTo(e.target.value)}
            disabled
          />
        </div>

        <div className="form-group">
          <label>Travel Date</label>
          <select
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            required
          >
            <option value="">Select date</option>
            <option value="Monday, 2am">Monday, 2am</option>
            <option value="Friday, 2am">Friday, 2am</option>
            <option value="Saturday, 2am">Saturday, 2am</option>
          </select>
        </div>

        <div className="form-group">
          <label>Number of Travelers</label>
          <input
            type="number"
            min="1"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            required
          />
        </div>

        {/* Transport Type */}
        <div className="form-group">
          <label>Transport Type</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="Bus"
                checked={transport === "Bus"}
                onChange={(e) => setTransport(e.target.value)}
              />
              Bus
            </label>

            <label>
              <input
                type="radio"
                value="Plane"
                checked={transport === "Plane"}
                onChange={(e) => setTransport(e.target.value)}
              />
              Plane
            </label>
          </div>
        </div>

        <button type="submit" className="booking-btn">
          Book Now
        </button>
      </form>
    </section>
  );
}

export default BookingForm;
