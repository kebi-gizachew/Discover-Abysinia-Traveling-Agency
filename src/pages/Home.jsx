import Header from '../components/Header'
import Hero from '../components/Hero'
import Booking from '../components/Booking'
import DesBox from '../components/desBox'
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
function Home(){
    return(
        <>
        <Header/>
        <Hero/>
        <Booking/>
        <DesBox/>
        <Testimonials/>
        <FAQ/>
        <Footer/>
        </>
    )
}
export default Home