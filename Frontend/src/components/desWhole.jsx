import DesFront from './desFront'
import DesCard from './desCard'
import Footer from './Footer'
import Header from './Header'
import {useState,useEffect} from 'react'
// northern
import aksumImg from '../assets/northern/aksum.jpg'
import gondarImg from '../assets/northern/gondar.jpg'
import simienImg from '../assets/northern/seimon park.jpg'
import bahirDarImg from '../assets/northern/bahirdar.jpg'
import laliImg from '../assets/northern/laliblea.jpg'

// central
import addisImg from '../assets/centeral/addis ababa.jpg'
import debreLibanosImg from '../assets/centeral/dbrelibanos.jpg'
import entotoImg from '../assets/centeral/entoto.jpg' // ⚠️ FIX .jgp → .jpg
import zuquallaImg from '../assets/centeral/zqualla.jpg'

// southern
import konsoImg from '../assets/southern/konso.jpg'
import arbaMinchImg from '../assets/southern/arbaminch.jpg'
import nechisarImg from '../assets/southern/nechisarpark.jpg'
import omoImg from '../assets/southern/omo.jpg'

// eastern
import hararImg from '../assets/eastern/jegole.jpg'
import direDawaImg from '../assets/eastern/diredawa.jpg'
import awashImg from '../assets/eastern/awash.jpg'

// western
import gambellaImg from '../assets/western/gambelapark.jpg'
import benishangulImg from '../assets/western/benishangul.jpg'

import '../styles/desWhole.css'
 function DesWhole(){
    const [places,setPlaces]=useState([])
    const [t,setT]=useState([])
useEffect(()=>{
  const fetchData=async()=>{
    try{
      const response = await fetch("http://localhost:5000/api/destinations", {
      method: "GET",
      credentials: "include",
    });
    const json = await response.json();
    console.log("Fetched destinations:", json);
    const m=json.destinations.map((item) => ({
      image: item.image, // URL or base64 from DB
      highlight: item.highlight,
      price: `From ${item.price} ETB`,
      category: item.category.split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" "),
      location: item.location,
      title: item.title,
      description: item.description,
      aria: item.aria,
      data: item.data,
      duration: item.duration,
      id: item._id, 
    }))
    console.log("Mapped destinations:", m);
    setT(m);
    setPlaces(m);
    }catch(err){
      console.error("Error fetching destinations:", err);
    }
  };
  fetchData();
},[])
useEffect(() => {
  console.log("Updated t state:", t);
}, [t]);

useEffect(() => {
  console.log("Updated places state:", places);
}, [places]);

   const tempo = [
   {
     image: laliImg,
     highlight: "Lalibela Rock Churches - ancient rock-hewn churches in Ethiopia",
     price: "From 8,500 ETB",
     category: "Cultural Heritage",
     location: "Amhara Region, Northern Ethiopia",
     title: "Lalibela Rock Churches",
     description:
       "A holy town famous for its 12th-century rock-hewn churches, a major UNESCO World Heritage pilgrimage site.",
     aria: "Explore Lalibela region",
     data: "cultural",
   },
   {
     image: aksumImg,
     highlight: "Ancient ruins and obelisks in Axum, Ethiopia",
     price: "From 5,500 ETB",
     category: "Historical Sites",
     location: "Tigray Region, Northern Ethiopia",
     title: "Axum",
     description:
       "Ancient capital of a powerful kingdom, known for towering stone stelae and important archaeological remains.",
     aria: "Explore Axum region",
     data: "historical",
   },
   {
     image: gondarImg,
     highlight: "Castles and palaces in Gondar, Ethiopia",
     price: "From 8,900 ETB",
     category: "Cultural Heritage",
     location: "Amhara Region, Northern Ethiopia",
     title: "Gondar",
     description:
       "Historic city with royal castles and old churches, often called the 'Camelot of Africa.'",
     aria: "Explore Gondar region",
     data: "cultural",
   },
   {
     image: simienImg,
     highlight: "Dramatic mountain landscapes in Simien Mountains",
     price: "From 9,000 ETB",
     category: "Mountains & Nature",
     location: "Amhara Region, Northern Ethiopia",
     title: "Simien Mountains National Park",
     description:
       "Dramatic highland scenery with deep cliffs, ideal for trekking and home to endemic wildlife.",
     aria: "Explore Simien Mountains",
     data: "mountains",
   },
   {
     image: bahirDarImg,
     highlight: "Lake Tana and Blue Nile Falls in Bahir Dar",
     price: "From 8,300 ETB",
     category: "Natural Wonders",
     location: "Amhara Region, Northern Ethiopia",
     title: "Bahir Dar",
     description:
       "Lakeside city on Lake Tana, gateway to island monasteries and the nearby Blue Nile Falls.",
     aria: "Explore Bahir Dar region",
     data: "natural",
   },
   {
     image: addisImg,
     highlight: "Modern buildings and traditional markets in Addis Ababa",
     price: "From 5,300 ETB",
     category: "Cultural Heritage",
     location: "Highland, Central Ethiopia",
     title: "Addis Ababa",
     description:
       "Lively capital with museums, markets, and viewpoints that showcase Ethiopia's modern life and deep history.",
     aria: "Explore Addis Ababa",
     data: "cultural",
   },
   {
     image: debreLibanosImg,
     highlight: "Debre Libanos Monastery and surrounding canyon",
     price: "From 8,300 ETB",
     category: "Religious Sites",
     location: "Oromia Region, Central Ethiopia",
     title: "Debre Libanos",
     description:
       "Mountain monastery overlooking a vast gorge, combining spiritual heritage with impressive canyon views.",
     aria: "Explore Debre Libanos",
     data: "religious",
   },
   {
     image: entotoImg,
     highlight: "Forested hills and panoramic views from Entoto Hills",
     price: "From 8,300 ETB",
     category: "Mountains & Nature",
     location: "North of Addis Ababa, Central Ethiopia",
     title: "Entoto Hills",
     description:
       "Forested highlands above Addis offering cool air, panoramic city views, and historic churches.",
     aria: "Explore Entoto Hills",
     data: "mountains",
   },
   {
     image: zuquallaImg,
     highlight: "Volcanic landscape and crater lake of Mount Zuqualla",
     price: "From 8,300 ETB",
     category: "Mountains & Nature",
     location: "Oromia Region, Central Ethiopia",
     title: "Mount Zuqualla",
     description:
       "Dormant volcano with a crater lake and monastery, popular for peaceful hikes and pilgrimages.",
     aria: "Explore Mount Zuqualla",
     data: "mountains",
   },
   {
     image: konsoImg,
     highlight: "Terraced hills and traditional villages in Konso",
     price: "From 8,300 ETB",
     category: "Cultural Heritage",
     location: "Konso Zone, Southern Ethiopia",
     title: "Konso",
     description:
       "Terraced hills and fortified villages that reflect centuries-old agricultural and cultural practices.",
     aria: "Explore Konso region",
     data: "cultural",
   },
   {
     image: arbaMinchImg,
     highlight: "Twin lakes and scenic landscapes in Arba Minch",
     price: "From 8,300 ETB",
     category: "Natural Wonders",
     location: "Gamo Zone, Southern Ethiopia",
     title: "Arba Minch",
     description:
       "Relaxed town by twin lakes, famous for boat trips to see crocodiles and local fishing life.",
     aria: "Explore Arba Minch region",
     data: "natural",
   },
   {
     image: nechisarImg,
     highlight: "Savanna landscape and wildlife in Nechisar National Park",
     price: "From 8,300 ETB",
     category: "National Parks",
     location: "Near Arba Minch, Southern Ethiopia",
     title: "Nechisar National Park",
     description:
       "Park of lakes and savanna landscapes, good for spotting birds, mammals, and beautiful sunsets.",
     aria: "Explore Nechisar National Park",
     data: "national-parks",
   },
   {
     image: omoImg,
     highlight: "Indigenous cultures and traditional villages in Omo Valley",
     price: "From 8,300 ETB",
     category: "Cultural Heritage",
     location: "Omo Zone, Southern Ethiopia",
     title: "Omo Valley",
     description:
       "Remote region known for diverse ethnic groups, unique cultural traditions, and colorful weekly markets.",
     aria: "Explore Omo Valley",
     data: "cultural",
   },
   {
     image: hararImg,
     highlight: "Walled city and traditional architecture of Harar",
     price: "From 8,300 ETB",
     category: "Cultural Heritage",
     location: "Harari Region, Eastern Ethiopia",
     title: "Harar",
     description:
       "Ancient walled city with narrow alleys, coffee culture, and unique traditions like feeding hyenas at night.",
     aria: "Explore Harar",
     data: "cultural",
   },
   {
     image: direDawaImg,
     highlight: "Historic railway town and architecture in Dire Dawa",
     price: "From 8,300 ETB",
     category: "Historical Sites",
     location: "Addis–Djibouti corridor, Eastern Ethiopia",
     title: "Dire Dawa",
     description:
       "Historic railway town and commercial hub with lively streets and a mix of old and new architecture.",
     aria: "Explore Dire Dawa",
     data: "historical",
   },
   {
     image: awashImg,
     highlight: "Savanna landscape and wildlife in Awash National Park",
     price: "From 8,300 ETB",
     category: "National Parks",
     location: "Afar–Oromia border area, Eastern Ethiopia",
     title: "Awash National Park",
     description:
       "Rift Valley park with savanna, hot springs, waterfalls, and chances to see wildlife.",
     aria: "Explore Awash National Park",
     data: "national-parks",
   },
   {
     image: gambellaImg,
     highlight: "Wetlands and wildlife in Gambella National Park",
     price: "From 8,300 ETB",
     category: "National Parks",
     location: "Gambella Region, Western Ethiopia",
     title: "Gambella National Park",
     description:
       "Wetland and grassland wilderness, important for migratory wildlife and birdlife.",
     aria: "Explore Gambella National Park",
     data: "national-parks",
   },
   {
     image: benishangulImg,
     highlight: "River gorges and rugged landscapes in Benishangul-Gumuz",
     price: "From 8,300 ETB",
     category: "Natural Wonders",
     location: "Western Ethiopia",
     title: "Benishangul-Gumuz",
     description:
       "Little-visited area of river gorges and rugged landscapes along the Blue Nile.",
     aria: "Explore Benishangul-Gumuz",
     data: "natural",
   },
 ]
    return(
        <>
        <Header/>
    <main className="main-content">
      <div className="container">
        <DesFront places={places} tempo={t} setPlaces={setPlaces}/>
        <section className="destinations-grid">
            <div className="grid-container">
              {places.map((a, index) => (
                <DesCard
                  key={a.id}  
                  id={a.id}         
                  image={a.image}
                  highlight={a.highlight}
                  price={a.price}
                  category={a.category}
                  location={a.location}
                  title={a.title}
                  description={a.description}
                  aria={a.aria}
                  data={a.data}
                />
              ))}
            </div>
          </section>
      </div>
      </main>
      <Footer/>
      </>
    )
}
export default DesWhole;