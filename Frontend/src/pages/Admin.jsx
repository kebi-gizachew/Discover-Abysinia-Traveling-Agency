import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import "../styles/Admin.css";
import AdminMessages from '../components/messages'
const Admin = () => {
  const [image, setImage] = useState(""); // base64 string
  const [highlight, setHighlight] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [aria, setAria] = useState("");
  const [data, setData] = useState("");
  const [duration, setDuration] = useState("");

  // Compress & convert image to Base64
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const options = {
        maxSizeMB: 0.5, // compress to 0.5MB max
        maxWidthOrHeight: 800,
        useWebWorker: true,
      };

      const compressedFile = await imageCompression(file, options);
      const base64 = await imageCompression.getDataUrlFromFile(compressedFile);
      setImage(base64);
    } catch (err) {
      console.error("Error compressing image:", err);
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!image) {
    alert("Please upload an image");
    return;
  }

  const destinationData = {
    image,
    highlight,
    price,
    category,
    location,
    title,
    description,
    aria,
    data,
    duration,
  };

  try {
    const response = await fetch("http://localhost:5000/api/destinations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(destinationData),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.message || "Failed to add destination");
      return;
    }
    setImage("");
    setHighlight("");
    setPrice("");
    setCategory("");
    setLocation("");
    setTitle("");
    setDescription("");
    setAria("");
    setData("");
    setDuration("");
    alert("Destination added successfully!");
    console.log(result);
  } catch (err) {
    console.error(err);
    alert("Server error");
  }
};


  return (
    <>
    <div className="a-container">
      <h2>Add New Destination</h2>
      <form className="destination-f" onSubmit={handleSubmit}>
        <div className="f-group">
        <div className="f-group">
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
        </div>
        <div className="f-group">
          <label>Category</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category" />
        </div>
          <label>Image</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <div className="f-group">
          <label>Location</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" />
        </div>

        <div className="f-group">
          <label>Highlight</label>
          <input type="text" value={highlight} onChange={(e) => setHighlight(e.target.value)} placeholder="Enter highlight" />
        </div>

        <div className="f-group">
          <label>Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" />
        </div>
        <div className="f-group">
          <label>Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" />
        </div>

        <div className="f-group">
          <label>Aria</label>
          <input type="text" value={aria} onChange={(e) => setAria(e.target.value)} placeholder="Enter aria" />
        </div>

        <div className="f-group">
          <label>Data</label>
          <input type="text" value={data} onChange={(e) => setData(e.target.value)} placeholder="Enter data" />
        </div>

        <div className="f-group">
          <label>Duration</label>
          <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Enter duration" />
        </div>

        <button type="submit" className="submit-btn">Add Destination</button>
      </form>
    </div>
      <AdminMessages/>
      </>
  );
};

export default Admin;
