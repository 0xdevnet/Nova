import CreatorsCard from "./CreatorsCard"
import { SiGraphcool } from "react-icons/si"
import { GiFreedomDove, GiReceiveMoney } from "react-icons/gi"

const Creators = () => {

    return (
        <div style={{
            width: '100vw',
            height: '110vh',
            backgroundColor: '#292929',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <h1 style={{
                margin: '25px 0 0 0',
                fontSize: '3rem',
                fontFamily: 'Montserrat',
                letterSpacing: '1px',
                color: 'white'
            }}>
                For Creators:
            </h1>
            <div style={{
                margin: '75px 0 0 0',
                width: '80vw',
                height: '60%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                placeItems: 'center'
            }}>
                <CreatorsCard image={<GiFreedomDove/>} paragraph="We give you the freedom – to create what you want to create."/>
                <CreatorsCard image={<SiGraphcool/>} paragraph="We are decentralized, and ensure longevity in representing your artistry."/>
                <CreatorsCard image={<GiReceiveMoney/>} paragraph="We open to and offer you the financial innovations and benifits of DeFi."/>
            </div>
        </div>
    )
}

export default Creators