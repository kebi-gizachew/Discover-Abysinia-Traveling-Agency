import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/destinationId.css";
import BookingForm from "../components/BookingId";
import { NavLink } from "react-router-dom";

function DestinationId() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/destinations/${id}`,
          { credentials: "include" }
        );

        if (res.status === 401 || res.status === 403) {
          alert("Login first!!!");
          window.location.href = "/";
          return;
        }
        const json = await res.json();
        console.log(json);
        if (!res.ok) {
          // backend may return { message } or { error }
          setError(json.message || json.error || "Failed to fetch destination");
          setLoading(false);
          return;
        }

        // Some APIs return the object directly, others wrap it as { destination: {...} }
        const fetchedDest = json.destination ? json.destination : json;
        setDestination(fetchedDest);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [id]);
  
  // ✅ Show loading until data is fetched
  if (loading) {
    return <p className="loading">Loading destination...</p>;
  }
  
  if (error) {
    return <p className="error">{error}</p>;
  }

  // ✅ Now we can safely render with destination data
 
  return (
    <section className="destination-profile">
      <div className="explore-more">
        <h1 className="dest-title">Explore More</h1>
        <p className="Back">
          Go Back to <NavLink to="/destination">Destinations</NavLink>
        </p>
      </div>
      <div className="profile-card">
        <img
          src={destination.image}
          alt={destination.highlight}
          className="profile-image"
        />

        <div className="profile-content">
          <h1 className="profile-title">{destination.title}</h1>
          <p className="profile-location">📍 {destination.location}</p>

          <p className="profile-description">{destination.description}</p>

          <div className="profile-meta">
            <span className="meta-item">Category: {destination.category}</span>
            <span className="meta-item">Duration: {destination.duration}</span>
            <span className="meta-item price">{destination.price} ETB</span>
          </div>
        </div>
      </div>
      <BookingForm destination={destination?.title} destinationId={id} />
    </section>
  );
}
export default DestinationId;
