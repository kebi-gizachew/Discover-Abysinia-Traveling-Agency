import {NavLink} from 'react-router-dom'
import '../styles/exploreCard.css'
function ExploreCard(props){
    return(
         <article className="destination-card">
          <div className="destination-image">
            <img 
              src={props.img} 
              alt={props.alt}
              loading="lazy"
            />
            <div className="destination-badge">{props.count} Destinations</div>
          </div>
          <div className="destination-content">
            <h3>{props.loc}</h3>
            <p className="destination-count">{props.des}</p>
            <p className="destination-description">
              {props.content}
            </p>
            <NavLink to='/destination'className="explore-btn">
              Explore Region <i className="ri-arrow-right-line"></i>
            </NavLink>
          </div>
        </article>
    )
}
export default ExploreCard;