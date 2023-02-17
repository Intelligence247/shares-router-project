import React from "react"
import Careerstructure from "../Components/Careerstructure"
import Nav from "../Components/Nav"
import "./Community.css"
const Community=()=>{
return(
    <div className="community h-auto bg-[#e4dfff] overflow-x-hidden">
        <Nav/>
        
        <Careerstructure
        name={'Welcome to'}
        title={'Connect, share and learn with your crew'}
        desc={'Whether you’re new to investing or been around the block, level up your money moves with Communities. Speak your mind and ask those burning questions, in a safe space where everybody’s welcome.'}
        img={"/media/newbies.png"}
        />
    </div>
)
}
export default Community