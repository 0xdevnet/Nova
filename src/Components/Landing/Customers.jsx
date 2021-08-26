import CustomerCard from "./CustomerCard"
import WindowDimensions from "../Hooks/WindowDimension"

const Customers = () => {

    const {width, } = WindowDimensions()

    const customerSectionContainerStyle = {
        marginBottom: '100px',
        width: '100vw',
        height: 'auto',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    }

    const universalH1Style = {
        width: '80%',
        margin: '75px 0 0 0',
        fontSize: '3rem',
        fontFamily: 'Montserrat',
        letterSpacing: '1px',
        color: 'black'
    },
    h1Styles = width => {
        if (width > 900) 
            return universalH1Style
        else return {
            ...universalH1Style,
            fontSize: '2.5rem'
        }
    }

    const universalCustomerStepContainerStyle = {
        margin: '25px 0 0 0',
        display: 'grid',
        width: '80vw',
    },
    customerStepContainerStyles = width => {
        if(width > 900)
            return {
                ...universalCustomerStepContainerStyle, 
                gridTemplateColumns: '1fr 1fr 1fr',
                placeItems: 'center'
            }
        else return {
            ...universalCustomerStepContainerStyle,
            display: 'grid',
            gridTemplateRows: '1fr 1fr 1fr',
            placeItems: 'center'
        }
    }

    return (
        <div style={customerSectionContainerStyle}>
            <h1 style={h1Styles(width)}>
                For Customers:
            </h1>
            <div style={customerStepContainerStyles(width)}>
                <CustomerCard image="https://miro.medium.com/max/1400/1*w1ZgjY_U0NyoEVlh9vFfXA.png" paragraph="1. Leverage the Terra Ecosystem to enjoy lossless subscriptions for all your contents."/>
                <CustomerCard image="https://paganresearch.io/images/terraformlabs.png" paragraph="2. Stake NOVA token for a chance to win NFT content drops from your favorite creators."/>
                <CustomerCard image="https://s2.coinmarketcap.com/static/img/coins/200x200/4172.png" paragraph="3. Bid LUNA token to buy exclusive videos and photos on special occasions." />
            </div>
        </div>
    )
}

export default Customers