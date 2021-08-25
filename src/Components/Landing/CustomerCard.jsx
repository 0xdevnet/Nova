const CustomerCard = props => {
    return (
        <div style={{
            width: '70%',
            height: '65%',
            top: '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <img src={props.image} alt="terra" 
            style={{width: '75px'}}/>
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