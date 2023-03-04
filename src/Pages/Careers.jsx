import React from "react"
import Careerstructure from "../Components/Careerstructure"
import Cookies from "../Components/Cookies"
import Nav from "../Components/Nav"
const Careers=()=>{
return(
    <div className="h-screen bg-[#e4dfff] overflow-x-hidden">
        <Nav/>
        <Careerstructure
        name={'Careers'}
        title={'Ready to make investing social with us?'}
        desc={'We’re on a mission to give every human fair access to the stock market and the social connectedness and support to build a strong financial future – in community.'}
        img={'media/joincrew.png'}
        />
        <Cookies/>
    </div>
)
}
export default Careers

// npm install react-router
// npm i react-router
