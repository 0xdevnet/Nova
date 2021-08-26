import WindowDimensions from "../Hooks/WindowDimension"

const Contact = () => {

    const {width, } = WindowDimensions()

    const contactContainerStyle = {
        width: '100vw',
        height: '500px',
        background: '#292929',
        display: 'grid',
        placeItems: 'center'
    },
    dynamicContainerStyle = width => {
        if (width > 900) 
            return contactContainerStyle
        else return {
            ...contactContainerStyle,
            height: '500px'
        }
    }

    const h1Styles = {
        fontSize: '3rem',
        color: '#f0f0f0',
        width: '80%'
    },
    dynamicH1Style = width => {
        if (width > 900) 
            return h1Styles
        else return {
            ...h1Styles,
            fontSize: '2rem',
            marginBottom: '25px'
        }
    }

    const h3Styles = {
        ...h1Styles,
        fontSize: '2rem',
        marginBottom: '50px'
    },
    dynamicH3Style = width => {
        if (width > 900) 
            return h3Styles
        else return {
            ...h3Styles,
            fontSize: '1.75rem'
        }
    }

    const inputStyles = {
        width: '500px',
        height: '50px',
        outline: 'none',
        border: 'none',
        borderRadius: '10px',
        fontSize: '1.5rem',
        paddingLeft: '15px'
    }

    return (
        <div style={dynamicContainerStyle(width)}>
            <div style={{width: '80%', height: '80%'}}>
                <h1 style={dynamicH1Style(width)}>
                    We are building a free, uncensored content platform for all.
                </h1>
                <h3 style={dynamicH3Style(width)}>
                    Reach out to us:
                </h3>
                <input style={inputStyles} type="email" placeholder="Enter your email" required/>
            </div>
        </div>
    )
}

export default Contact