// import Nav from '../Navbar/Nav'
import Hero from './Hero'
import Creators from './Creators'
import Customers from './Customers'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className="landing-container"> 
            <Hero/>
            <Creators/>
            <Customers/>
        </div>
    )
}

export default LandingPage