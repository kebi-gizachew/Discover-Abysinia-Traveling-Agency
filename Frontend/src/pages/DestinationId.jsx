import { useParams } from "react-router-dom";
import{useState,useEffect} from 'react';
import {DestId} from '../components/destId';
import Booking from "../../../Backend/models/Booking";
const DestinationId = () => {
  const { id } = useParams(); // this comes from the URL
const [destination,setDestination]=useState(null);
useEffect(()=>{
    // Fetch destination details based on the id
    fetch(`http://localhost:5000/destinations/${id}`)
    .then((response)=>response.json())
    .then((data)=>setDestination(data))
    .catch((error)=>console.error("Error fetching destination:",error));
},[id]);

if(!destination){
    return <div>Loading...</div>;
}
  return 
  <>
  <DestId destination={destination} />;
  <Booking destinationId={id} />
  </>
};

export default DestinationId;