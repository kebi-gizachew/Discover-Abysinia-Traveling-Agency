import '../styles/desFront.css'
function DesFront(props){

  const handlePick=(val)=>{
    if (val=="all"){
      props.setPlaces(props.tempo)
    }else{
    const fil= props.tempo.filter(a=>{
      return a.data===val
    
    })
    console.log("Filtered places:", fil);
    props.setPlaces(fil)
  }

  }
  const handleInput = (val) => {
  const query = val.toLowerCase().trim()

  if (query === "") {
    props.setPlaces(props.tempo)
    return
  }

  const filtered = props.tempo.filter(place =>
    place.title.toLowerCase().startsWith(query)
  )

  props.setPlaces(filtered)
}
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
                onChange={(e)=>handleInput(e.target.value)}
              />
            </div>
            
            <div className="filter-wrapper">
              <i className="ri-filter-line filter-icon"></i>
              <select
  id="filtering-type"
  className="filter-select"
  aria-label="Filter by category"
  defaultValue="all"
  onChange={(e)=>handlePick(e.target.value)}
>
  <option value="all" >All Categories</option>
  <option value="cultural" >Cultural Heritage</option>
  <option value="mountains">Mountains & Nature</option>
  <option value="historical" >Historical Sites</option>
  <option value="national-parks" >National Parks</option>
</select>

            </div>
          </div>
          
          <div className="results-count">
            <span className="count">{props.places.length}</span> destinations found
          </div>
        </section>
        </>
    )
}
export default DesFront