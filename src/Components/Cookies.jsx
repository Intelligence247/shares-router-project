import React from 'react'
import {useState} from 'react'
import "./cookies.css"
const Cookies = () => {
    const [first, setfirst] = useState(true)
    const handleClick=()=>{
        setfirst(!first)
    }
  return (
<div className="cookiesWrapper fixed bottom-6">
  <div className={`cookies ${first?"active":''}`}>
    <header>
      <div className="hithere">
        <p className='text-[1.2rem]'>Hi there!</p>
        <h1>We're the cookies</h1>
        <p className='opacity-[0.7]'>We use cookies in line with our cookie notice. We need some cookies for our site to function, these are called “essential” cookies</p>
      </div>
      <img src="/media/cookiesimg.avif" alt="" className='w-[10rem] '/>
    </header>
    <p className='opacity-[0.7] mt-4'>We'd also like to use “analytics and performance” cookies and “advertising cookies”. You can control our use of these cookies in the consent banner below.</p>

    <div className="reason">
      <p className='text-[1.5rem] mb-2'>Why are we using cookies?</p>
<li><a href="">Analytics</a></li>
<li><a href="">Advertising</a></li>
    </div>

<p className='text-center mt-[2rem]'>Consents certified by</p>

<footer>
  <p>No Thanks</p>
<p>I want to choose</p>
<p className='text-[yellow]'>OK!</p>
</footer>

  </div>
    <img src={first ? "/media/harmburger.svg" : "/media/harmburger2.svg"} className='w-[3rem]' onClick={handleClick} alt="" />
</div>
  )
}

export default Cookies