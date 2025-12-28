import '../styles/qualityBox.css'
function QualityBox(props){
    return(
         <div class="feature-card">
            <div class="feature-icon">
              <i class={props.icon}></i>
            </div>
            <h3>{props.title}</h3>
            <p>{props.des}</p>
          </div>

    )
}
export default QualityBox;