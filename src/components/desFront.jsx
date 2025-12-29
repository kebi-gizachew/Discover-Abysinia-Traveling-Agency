import '../styles/desFront.css'
function DesFront(){
    return(
        <>
         <section className="hero-sec">
          <h1 className="page-title">Explore Ethiopian Destinations</h1>
          <p className="page-subtitle">
            Discover Ethiopia's amazing historical sites, natural wonders, and cultural treasures. 
            From ancient rock-hewn churches to breathtaking mountain landscapes.
          </p>
        </section>
        <section className="filters-section">
          <div className="filters-container">
            <div className="search-wrapper">
              <i className="ri-search-line search-icon"></i>
              <input
                type="text"
                id="search-bar"
                className="search-input"
                placeholder="Search destinations, locations..."
                aria-label="Search destinations"
              />
            </div>
            
            <div className="filter-wrapper">
              <i className="ri-filter-line filter-icon"></i>
              <select
  id="filtering-type"
  className="filter-select"
  aria-label="Filter by category"
  defaultValue="all"
>
  <option value="all">All Categories</option>
  <option value="cultural">Cultural Heritage</option>
  <option value="mountains">Mountains & Nature</option>
  <option value="historical">Historical Sites</option>
  <option value="national-parks">National Parks</option>
</select>

            </div>
          </div>
          
          <div className="results-count">
            <span className="count">18</span> destinations found
          </div>
        </section>
        </>
    )
}
export default DesFront