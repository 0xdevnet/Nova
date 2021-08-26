import CreatorsCard from "./CreatorsCard"
import { SiGraphcool } from "react-icons/si"
import { GiFreedomDove, GiReceiveMoney } from "react-icons/gi"
import WindowDimensions from "../Hooks/WindowDimension"

const Creators = () => {

    const {width, } = WindowDimensions()

    const CreatorContainerStyle = {
        width: '100vw',
        backgroundColor: '#292929',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }

    const universalH1Style = {
        width: '80%',
        margin: '7.5vw 0 0 0',
        fontSize: '3rem',
        fontFamily: 'Montserrat',
        letterSpacing: '1px',
        color: 'white'
    },
    h1Styles = width => {
        if (width > 900) 
            return universalH1Style
        else return {
            ...universalH1Style,
            margin: '7.5vw 0 25px 0',
            fontSize: '2.5rem'
        }
    }

    const pcViewCardLayout = {
        margin: '75px 0 10vw 0',
        width: '80vw',
        height: '32.5vw',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        placeItems: 'center'
    },
    cardLayoutStyles = width => {
        if (width > 900) 
            return pcViewCardLayout
        else return {
            ...pcViewCardLayout,
            display: 'flex',
            width: '100vw', height: 'auto',
            margin: '50px 0 10vw 0',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }

    return (
        <div style={CreatorContainerStyle}>
            <h1 style={h1Styles(width)}>For Creators:</h1>
            <div style={cardLayoutStyles(width)}>
                <CreatorsCard image={<GiFreedomDove/>} paragraph="Freedom without censorship – to create what you want to create."/>
                <CreatorsCard image={<SiGraphcool/>} paragraph="Decentralized platform that aims to always represent your artistry."/>
                <CreatorsCard image={<GiReceiveMoney/>} paragraph="We open to you the financial innovations and benifits of DeFi."/>
            </div>
        </div>
    )
}

export default Creators