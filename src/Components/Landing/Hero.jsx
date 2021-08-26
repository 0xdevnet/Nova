import WindowDimensions from '../Hooks/WindowDimension'
import './Hero.css'

const Hero = () => {
    // eslint-disable-next-line no-unused-vars
    const {width, height} = WindowDimensions()

    const universalContainerViewPortStyle = {
        width: '100vw', height: '90%',
        display: 'flex', alignItems: 'center', 
        margin: '0 0 0 5vw', border: '1px solid black', 
        borderRadius: '15px', background: 'white', 
        boxShadow:  '2vw 2vw 0px 0px #FFFFFF'
    }, 
    heroContainerStyles = width => {
        if (width > 900) 
            return {
                ...universalContainerViewPortStyle,
                padding: '0 0 0 5vw', flexDirection: 'row'
            }
        else if (width <= 900) 
            return  {
                ...universalContainerViewPortStyle,
                padding: '0 0 0 0', flexDirection: 'column',
                justifyContent: 'center'
            }
    }

    const universalH1Style = {
        color: 'black', fontFamily: 'Montserrat', 
        fontWeight: '600', letterSpacing: '1px'
    },
    h1Styles = width => {
        if (width > 900)
            return {
                ...universalH1Style,
                margin: '0 0 30px 0', width: '40vw',
                fontSize: '2.5rem'
            }
        else if (width <= 900 && width > 610)
            return  {
                ...universalH1Style,
                margin: '50px 0 0 0', width: '80vw',
                fontSize: '2.5rem'
            }
        else return {
            ...universalH1Style,
            margin: '50px 0 0 0', width: '80vw',
            fontSize: '2rem'
        }
    }

    const universalPStyle = {
        margin: '30px 0 0 0', fontWeight: '500',
        fontFamily: 'Montserrat', letterSpacing: '2px',
        color: 'black'
    },
    pStyles = width => {
        if(width > 900)
            return {
                ...universalPStyle,
                width: '30vw', fontSize: '1.25rem'
            }
        else if (width <= 900 && width > 610)
            return {
                ...universalPStyle,
                width: '70vw', fontSize: '1.2rem'
            }
        else return {
            ...universalPStyle,
            width: '70vw', fontSize: '1rem'
        }
    }

    const universalButtonContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '40vw',
        // height: '60%',
        margin: '0 0 0 30px',
        padding: '0',
        transform: 'rotate(30deg)',
        // background: 'red',
        border: '3px dashed gold',
        borderRadius: '500px'
    },
    buttonContainerStyle = width => {

        if(width > 900) 
            return universalButtonContainerStyle
        else return {
                ...universalButtonContainerStyle,
                transform: 'rotate(0deg)',
                justifyContent: 'left',
                width: '80vw',
                margin: '0', padding: '50px',
                border: 'none', borderRadius: 'none'
        }
    }

    const universalButtonStyle = {
        cursor: 'pointer', transform: 'rotate(-30deg)',
        fontSize: '1.5rem', fontFamily: 'Nova Square',
        padding: '20px 30px', borderRadius: '50px', color: 'white',
        background: 'black', border: '1px solid transparent'
    },
    buttonStyle = width => {

        if(width > 900)
            return universalButtonStyle
        else return {
            ...universalButtonStyle,
            transform: 'rotate(0deg)',
            padding: '10px 20px', borderRadius: '15px'
        }
    }

    return (
        <div style={{
            height: '80vh', width: '100vw', 
            background: 'linear-gradient(#ffffff 50%, #292929 50%)',
        }}>
            <div style={heroContainerStyles(width)}>
                    <div>
                        <h1 style={h1Styles(width)}>
                        Create and consume contents with DeFi. Where you have <span style={{color: 'crimson'}}>Complete Control</span>.
                        </h1>
                        <p style={pStyles(width)}>
                            Lossless Subscriptions. NFT Content Drops. Exclusive content marketplace.
                        </p>
                    </div>
                    <div style={buttonContainerStyle(width)}>
                        <button className="getstarted-button" style={buttonStyle(width)}>Get Started</button>
                    </div>
            </div>
        </div>
    )
}

export default Hero