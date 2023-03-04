
import  React from "react"
import { Link } from "react-router-dom"
import './Nav.css'

const Nav=()=>{
    const [active, setActive] = React.useState(true)
    window.addEventListener('scroll',()=>{
        console.log(scrollY)
    scrollY >= 30 ? setActive(true) : setActive(false)
    })
    return (
        <div className={`NavWrapper ${active && 'active'}`}>
<Link to="/">
    <img src="/media/logo.svg" className="w-[8rem]" alt="" /> 
</Link> 
<span className="flex-grow-[1]"></span>
<Link to="/purpose">purpose</Link>
<Link to="/community">Community</Link>
<Link to="/career">Careers</Link>
<Link to="/learn" target="blank">Learn</Link> 
<Link to="/united">United Kingdom</Link>
<img src="/media/logo2.svg" alt="" />
        </div>
    )
}
export default Nav