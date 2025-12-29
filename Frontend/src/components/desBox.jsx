import '../styles/desBox.css'
import QualityBox from './qualityBox'
function DesBox(){
    const tempo=[
        {
            title:"Expert Local Guides",
            icon:"ri-user-star-fill",
            des:"Certified Ethiopian guides with deep cultural knowledge and years of experience."
            
        },
        {
            title:"Safe & Secure Travel",
            icon:"ri-shield-check-fill",
            des:"Comprehensive safety protocols and 24/7 support throughout your journey."
            
        },
        {
            title:"Authentic Experiences",
            icon:"ri-award-fill",
            des:"Genuine cultural interactions and responsible tourism practices."
            
        },
        {
            title:"Best Value Guarantee",
            icon:"ri-wallet-3-fill",
            des:"Competitive pricing with no hidden fees and flexible payment options."
            
        }
    ]
    return(
        <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Discover Abysinia Ethiopia</h2>
          <p class="section-description">
            Experience Ethiopia through the eyes of local experts who are passionate about sharing our country's beauty and culture.
          </p>
        </div>
        
        <div class="features-grid">
            {
                tempo.map(a=>{
                    return(
                        <QualityBox title={a.title} icon={a.icon} des={a.des}/>
                    )
                })
            }
          </div>
          </div>
    </section>
    )
}
export default DesBox;