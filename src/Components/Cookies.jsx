import React from 'react'
import {useState} from 'react'
import "./cookies.css"
const Cookies = () => {
    const [first, setfirst] = useState(true)
    const handleClick=()=>{
        setfirst(!first)
    }
  return (
<div className="cookiesWrapper fixed bottom-10">
  <div className={`cookies ${first?"active":''}`}>
    
  </div>
    <img src={first ? "/media/harmburger.svg" : "/media/harmburger2.svg"} className='w-[4rem]' onClick={handleClick} alt="" />
</div>
  )
}

export default Cookies