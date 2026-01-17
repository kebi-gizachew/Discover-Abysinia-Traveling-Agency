import { useEffect, useState } from "react";
import "../styles/messages.css";

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchMessages = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/contacts/contact-messages",
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await res.json();
      console.log("Fetched data:", data);

      setMessages(data.contactMessages || []);
    } catch (error) {
      console.error("Failed to fetch messages", error);
    } finally {
      setLoading(false);
    }
  };

  fetchMessages();
}, []);

  if (loading) {
    return <p className="msg-loading">Loading messages...</p>;
  }

  if (messages.length === 0) {
    return <p className="msg-empty">No messages found.</p>;
  }

  return (
    <div className="messages-page">
      <h1 className="messages-title">Contact Messages</h1>

      <div className="messages-grid">
        {messages.map((msg) => (
          <div className="message-card" key={msg._id}>
            <div className="message-header">
              <h3>{msg.name}</h3>
              <span className="message-date">
                {new Date(msg.createdAt).toLocaleDateString()}
              </span>
            </div>

            <p className="message-email">{msg.email}</p>
            <p className="message-phone">{msg.phone}</p>

            <div className="message-meta">
              <span>
                <strong>Country:</strong> {msg.country}
              </span>
              <span>
                <strong>Destination:</strong> {msg.destination}
              </span>
              <span>
                <strong>Travel Date:</strong> {msg.travelDate}
              </span>
            </div>

            <div className="message-body">
              <p>{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminMessages;
