import React from 'react'
import {useState} from 'react'

const Cookies = () => {
    const [first, setfirst] = useState(true)
    const handleClick=()=>{
        setfirst(!first)
    }
  return (
<div className="cookies fixed bottom-10">
    <img src={first ? "/media/harmburger.svg" : "/media/harmburger2.svg"} className='w-[4rem]' onClick={handleClick} alt="" />
</div>
  )
}

export default Cookies