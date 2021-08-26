import WindowDimensions from "../Hooks/WindowDimension"

const CreatorsCard = props => {

    const {width, } = WindowDimensions()

    const pcViewCard = {
        display: 'grid',
        placeItems: 'center',
        color: 'white',
        width: '80%',
        height: '100%',
        // border: '1px solid white',
        borderRadius: '20px',
        border: '1px solid white',
        boxShadow: '10px 10px 0 0 #bb85fc'
    },
    cardStyles = width =>{
        if (width > 900) 
            return pcViewCard
        else return {
            ...pcViewCard,
            height: '37.5vh',
            marginBottom: '50px',
            boxShadow: '0 10px 0 0 #bb85fc'
        }
    }

    const innerContainerStyles = {
        width: '80%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    }

    const h1Styles = width => {
        if(width > 900)
            return {
                fontSize: '7vw', color: 'gold'
            }
        else return {
            fontSize: '75px', color: 'gold',
            margin: '0', padding: '0'
        }
    }

    const universalPStyle = {
        fontFamily: 'Montserrat', 
        fontSize: '1.25vw',
        fontWeight: '600',
        letterSpacing: '1px'
    },
    pStyles = width => {
        if(width > 900) 
            return universalPStyle
        else return {
            ...universalPStyle,
            fontSize: '20px'
        }
    }

    return (
        <div style={cardStyles(width)}>
            <div style={innerContainerStyles}>
                <h1 style={h1Styles(width)}>{props.image}</h1>
                <p style={pStyles(width)}>{props.paragraph}</p>
            </div>
        </div>
    )
}

export default CreatorsCard