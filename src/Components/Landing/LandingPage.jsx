// import Nav from '../Navbar/Nav'
import Hero from './Hero'
import Creators from './Creators'
import Customers from './Customers'
import Contact from './Contact'

const LandingPage = () => {
    return (
        <div style={{overflow: 'hidden', width: '100vw'}}> 
            <Hero/>
            <Creators/>
            <Customers/>
            <Contact/>
        </div>
    )
}

export default LandingPage