import ReactPlayer from 'react-player'
import './Hero.css'

const Hero = () => {

    return (
        <div style={{
            height: '100vh', 
            width: '100vw', 
            background: 'linear-gradient(#ffffff 50%, #292929 50%)',
            display: 'grid',
            placeItems: 'center'
        }}>
            <div style={{ 
                width: '100vw', 
                height: '70%',
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                margin: '0 0 0 5vw',
                padding: '0 0 0 75px',
                border: '1px solid black',
                borderRadius: '15px',
                background: 'white',
                boxShadow:  '30px 30px 0px 0px #FFFFFF'
                }}>
                    <div>
                        <h1 style={{
                        margin: '0 0 30px 0',
                        width: '45vw',
                        fontSize: '2.75rem',
                        color: 'black',
                        fontFamily: 'Montserrat',
                        fontWeight: '600',
                        letterSpacing: '1px'
                        }}>
                        Create and consume contents on DeFi. <span style={{color: 'crimson'}}>Without interference</span>.
                        </h1>
                        <p style={{
                            margin: '30px 0 0 0',
                            width: '30vw',
                            fontWeight: '500',
                            fontSize: '1.25rem',
                            fontFamily: 'Montserrat',
                            letterSpacing: '2px',
                            color: 'black'
                        }}>
                            Lossless Subscriptions. NFT Content Drops. Exclusive content marketplace.
                        </p>
                    </div>
                    <div style={{
                        width: '35vw',
                        height: '60%',
                        margin: '0 0 0 20px',
                        padding: '0'
                    }}>
                        <ReactPlayer playing={true} loop={true} url='videos/rapping.mp4' 
                        width='100%' height='100%'/>
                    </div>
            </div>
        </div>
    )
}

export default Hero