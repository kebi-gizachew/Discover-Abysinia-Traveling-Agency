import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Destination from './pages/Destination';
import Login from './pages/login';
import Signup from './pages/signup'
import {useContext,useEffect, useState} from 'react';
import PropContext from './Hooks/PropContext';
import Admin from './pages/Admin';
import Adminlogin from './pages/Adminlogin';
import BookingId from './pages/BookId';
import DestinationId from './pages/DestinationId';
function App() {
  const [data,setData]=useState(null);
    useEffect(() => {
      const fetched=async()=>{
        try{
      const tempo=await fetch("http://localhost:5000/api/destinations", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
      });
      const d = await tempo.json();
      setData(d);
    }catch(err){
      console.error("Error fetching destinations:", err);
    }
  } 
  fetched()
}, []);
  return (
    <PropContext.Provider value={{data,setData}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/:id" element={<DestinationId />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminAuth" element={<Adminlogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/booking" element={<BookingId />} />
      </Routes>
    </BrowserRouter>
    </PropContext.Provider>
  );
}

export default App;
