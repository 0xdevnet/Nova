import CustomerCard from "./CustomerCard"

const Customers = () => {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1 style={{
                margin: '75px 0 0 0',
                fontSize: '3rem',
                fontFamily: 'montserrat',
                letterSpacing: '1px',
                color: 'black'
            }}>
                For Customers:
            </h1>
            <div style={{
                margin: '75px 0 0 0',
                width: '80vw',
                height: '60%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                placeItems: 'center',
                borderRadius: '30px',
                background: '#ffffff',
                boxShadow:  '11px 11px 40px #e0e0e0, -11px -11px 40px #ffffff'
            }}>
                <CustomerCard image="https://paganresearch.io/images/terraformlabs.png" paragraph="Leverage the Terra Ecosystem to make lossless subscriptions for all your contents."/>
                <CustomerCard image="https://miro.medium.com/max/1400/1*w1ZgjY_U0NyoEVlh9vFfXA.png" paragraph="Stake MINE token for a chance to win NFT content drops from your favorite creators."/>
                <CustomerCard image="https://s2.coinmarketcap.com/static/img/coins/200x200/4172.png" paragraph="Bid LUNA token to buy exclusive videos and photos from your subscriptions." />
            </div>
        </div>
    )
}

export default Customers