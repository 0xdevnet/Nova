

const CreatorsCard = props => (
    <div style={{
        display: 'grid',
        placeItems: 'center',
        color: 'white',
        width: '80%',
        height: '100%',
        // border: '1px solid white',
        borderRadius: '20px',
        border: '1px solid white',
        boxShadow: '10px 10px 0 0 #bb85fc'
    }}>
        <div style={{
            width: '80%',
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            <h1 style={{fontSize: '75px', color: 'gold'}}>{props.image}</h1>
            <p style={{
                fontFamily: 'Montserrat', 
                fontSize: '15px',
                fontWeight: '600',
                letterSpacing: '1px'
            }}>{props.paragraph}</p>
        </div>
    </div>
)

export default CreatorsCard