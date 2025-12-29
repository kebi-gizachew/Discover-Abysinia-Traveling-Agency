import lali from '../assets/northern/laliblea.jpg'
import addis from '../assets/centeral/addis ababa.jpg'
import hyena from '../assets/eastern/hyena.jpg'
import coffee from '../assets/western/coffee.jpg'
import hamer from '../assets/southern/hamer.jpg'
import ExploreCard from './exploreCard' 
import ExploreFront from './exploreFront'
import '../styles/exploreWhole.css'
function ExploreWhole(){
    const cur=[
        {
            img:lali,
            alt:"Ancient rock-hewn churches in Northern Ethiopia",
            count:"5",
            loc:"Northern Ethiopia",
            des:"Historical Route • UNESCO Sites",
            content:" Walk through ancient kingdoms and marvel at architectural wonders carved from solid rock centuries ago."
        },{
            img:addis,
            alt:"Modern Addis Ababa skyline in Central Ethiopia",
            count:"4",
            loc:"Central Ethiopia",
            des:"Capital Region • Mountain Escapes",
            content:"Experience the vibrant energy of Addis Ababa and the serene beauty of surrounding highlands."
            
        },
        {
            img:hamer,
            alt:"Cultural tribes and landscapes in Southern Ethiopia",
            count:"4",
            loc:"Southern Ethiopia",
            des:"Cultural Diversity • Natural Beauty",
            content:" Immerse yourself in ancient traditions and explore stunning lakes, rivers, and national parks."
        },
        {
            img:hyena,
            alt:"Hyena feeding tradition in Eastern Ethiopia",
            count:"3",
            loc:"Eastern Ethiopia",
            des:"Ancient Cities • Desert Landscapes",
            content:" Discover walled cities, coffee traditions, and unique wildlife in this culturally rich region."
        },
        {
            img:coffee,
            alt:"Coffee plantations in Western Ethiopia",
            count:"3",
            loc:"Western Ethiopia",
            des:"Coffee Origin • Rainforests",
            content:"Journey to the birthplace of coffee and explore lush forests, waterfalls, and wildlife reserves."

        }
    ]
    return(
        <section class="destinations-section" id="destinations">
    <div class="container">
        <ExploreFront/>
         <div class="destinations-grid">
        {
            cur.map(a=>{
                return(
                    <ExploreCard img={a.img} alt={a.alt} count={a.count} loc={a.loc} des={a.des} content={a.content}/>
                )
            })
        }
        </div>
    </div>
    </section>
    )

}
export default ExploreWhole;