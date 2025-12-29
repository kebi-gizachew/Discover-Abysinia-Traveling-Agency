import '../styles/desCard.css'

function DesCard(props){
    return(
        <article className="destination-card" data-category={props.data}>
              <div className="card-image">
                <img 
                  src={props.image}
                  alt={props.highlight}
                />
                <span className="price-tag">{props.price}</span>
                <div className="category-tag">{props.category}</div>
              </div>
              <div className="card-content">
                <div className="location">
                  <i className="ri-map-pin-line"></i>
                  <span>{props.location}</span>
                </div>
                <h3 className="card-title">{props.title}</h3>
                <p className="card-description">
                 {props.description}
                </p>
                <div className="card-footer">
                  <a href="#" className="explore-btn" aria-label={props.aria}>
                    Explore Region <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </article>

    )
}
export default DesCard