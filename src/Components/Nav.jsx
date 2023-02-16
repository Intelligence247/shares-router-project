
import React from "react"
import { Link } from "react-router-dom"

const Nav=()=>{
    return (
        <div>
<Link to="/">Shares</Link> <br />
<Link to="/learn">Learn</Link> <br />
<Link to="/purpose">purpose</Link><br />
<Link to="/united">United</Link><br />
<Link to="/community">Community</Link><br />
<Link to="/career">Careers</Link><br />
          
        </div>
    )
}
export default Nav