import '../styles/officeHours.css'
function OfficeHours(props){
    return(
         <div class="day-time">
                  <span class="day">{props.day}</span>
                  <span class="time">{props.time}</span>
                </div>
    )
}
export default OfficeHours