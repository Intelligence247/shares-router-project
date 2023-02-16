
import React from "react"
import { Link } from "react-router-dom"

const Nav=()=>{
    return (
        <div className="flex gap-[3rem] w-screen px-[5rem] h-[5rem] bg-transparent justify-center items-center text-[1.2rem]">
<Link to="/">Shares</Link> 
<span className="flex-grow-[1]"></span>
<Link to="/purpose">purpose</Link>
<Link to="/community">Community</Link>
<Link to="/career">Careers</Link>
<Link to="/learn">Learn</Link> 
<Link to="/united">United Kingdom</Link>
          
        </div>
    )
}
export default Nav