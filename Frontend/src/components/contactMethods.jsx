import '../styles/contactMethods.css'
function ContactMethods(props){
    return(
        <div className="contact-method">
                <div className="method-icon">
                  <i className={props.icon}></i>
                </div>
                <div className="method-content">
                  <h3>{props.title}</h3>
                  <p>{props.des1}</p>
                  <p>{props.des2}</p>
                </div>
              </div>
    )
}
export default ContactMethods;
