import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BookId.css";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
const deleteBooking = async (bookingId) => {
  try {
    const res = await fetch(
      `http://localhost:5000/api/bookings/${bookingId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to delete booking");
    }
    setBookings((prev) =>
      prev.filter((booking) => booking._id !== bookingId)
    );

    alert("Booking cancelled successfully");
    window.location.reload()
  } catch (error) {
    console.error("Delete error:", error);
    alert(error.message);
  }
};

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bookings", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        setBookings(data.bookings || []);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <p className="booking-loading">Loading your bookings...</p>;
  }

  if (bookings.length === 0) {
    return <p className="booking-empty">You have no bookings yet.</p>;
  }

  return (
    <div className="bookings-page">
      <h1 className="bookings-title">My Bookings</h1>

      <div className="bookings-grid">
        {bookings.map((booking) => (
          <div className="booking-card" key={booking._id}>
            <div className="booking-image">
              <img
                src={booking.destination.image}
                alt={booking.destination.title}
                onError={(e) => {
                  e.target.src = "/fallback.jpg";
                }}
              />
            </div>

            <div className="booking-content">
              <h3>{booking.destination.title}</h3>
              <p className="location">{booking.destination.location}</p>

              <div className="booking-info">
                <span>
                  <strong>Travelers:</strong> {booking.travelers}
                </span>
                <span>
                  <strong>Date: </strong>{booking.travelDate}
                </span>
                 <span>
                  <strong>Travel By:</strong> {booking.transport}
                </span>
                <span>
                  <strong>Duration:</strong>{" "}
                  {booking.destination.duration}
                </span>
                <span>
                  <strong>Total Price:</strong> ${booking.travelers*booking.destination.price}
                </span>
              </div>

              <button
                className="details-btn"
                onClick={() => navigate(`/destination/${booking.destination._id}`)}
              >
                View Details
              </button>
              <p onClick={()=>deleteBooking(booking._id)} className="delete">Cancel Booking</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
