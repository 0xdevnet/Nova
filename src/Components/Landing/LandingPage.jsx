// import Nav from '../Navbar/Nav'
import Hero from './Hero'
import Creators from './Creators'
import Customers from './Customers'

const LandingPage = () => {
    return (
        <div style={{overflow: 'hidden', width: '100vw'}}> 
            <Hero/>
            <Creators/>
            <Customers/>
        </div>
    )
}

export default LandingPage