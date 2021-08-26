import WindowDimensions from "../Hooks/WindowDimension"

const CustomerCard = props => {

    const {width,} = WindowDimensions()

    const universalCardContentContainerStyles = {
        width: '70%',
        height: '65%',
        top: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center'
    },
    cardContentContainerStyles = width => {
        if(width > 900)
            return universalCardContentContainerStyles
        else return {
            ...universalCardContentContainerStyles,
            margin: '50px 0 0 0'
        }
    }

    return (
        <div style={cardContentContainerStyles(width)}>
            <img src={props.image} alt="terra" 
            style={{width: '75px', marginBottom: '10px'}}/>
            <p style={{
                fontFamily: 'Montserrat', 
                fontSize: '1rem',
                fontWeight: '600',
                letterSpacing: '1px'
            }}>{props.paragraph}</p>
        </div>
    )
}

export default CustomerCard