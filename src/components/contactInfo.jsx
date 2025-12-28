import ContactMethods from "./contactMethods"
import OfficeHours from "./officeHours"
import ContactSocial from "./contactSocial"
import '../styles/contactInfo.css'
function ContactInfo(){
    const tempo=[
        {
            title:"Email Us",
            icon:"ri-mail-fill",
            des1:"info@DiscoverAbysinia.com",
            des2:"support@DiscoverAbysinia.com"
            
        },
        {
            title:"Call Us",
            icon:"ri-phone-fill",
            des1:"+251 911 234 567 (Ethiopia)",
            des2:"+1 (555) 123-4567 (International)"
            
        },
        {
            title:"Visit Our Office",
            icon:"ri-map-pin-fill",
            des1:"Bole Road, Addis Ababa",
            des2:"Ethiopia"
            
        }
       
    ]
    const office=[
        {
            day:"Monday - Friday",
            time:"9:00 AM - 6:00 PM"

        },
        {
            day:"Saturday",
            time:"10:00 AM - 4:00 PM"


        },
        {
            day:"Sunday",
            time:"Closed"

        }
    ]
    return(

          <div className="contact-info">
            <div className="section-header">
              <h2 className="section-title">Contact Information</h2>
              <p className="section-description">
                Have questions about Ethiopian travel? Our knowledgeable team is here to help you plan an unforgettable journey through Ethiopia's rich cultural heritage and stunning landscapes.
              </p>
            </div>
            <div className="contact-methods">
              {
                tempo.map(a=>{
                  return(
                    <ContactMethods title={a.title} icon={a.icon} des1={a.des1} des2={a.des2}/>
                  )
                })
              } 
              <ContactSocial/>
            </div>

            <div className="office-hours">
              <h3><i className="ri-time-fill"></i> Office Hours</h3>
              <div className="hours-grid">
                {
                    office.map(a=>{
                      return(
                        <OfficeHours day={a.day} time={a.time}/>
                      )
                    })
                }
              </div>
            </div>
          </div>
    )
}
export default ContactInfo;