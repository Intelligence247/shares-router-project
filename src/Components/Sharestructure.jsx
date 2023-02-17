import React from 'react'
import Cookies from './Cookies'

const Sharestructure = () => {
  return (
    <div className='w-screen px-[5rem] mt-[4rem] flex gap-[4rem] text-[#16002c] text-[1.2rem] font-[600]'> 
        <div className="left w-[50%] flex flex-col gap-8">
        <h1 className='text-[4.5rem] font-bold leading-[4rem] pt-[5rem]'>Invest. Learn. Grow.</h1>
        <p>Invest in over 1,000 stocks, learn from current investors and grow your market knowledge. All in one easy to use app.</p>
        <p>As with all investing, your capital will be at risk.</p>
    
 <div className="qr flex items-center w-[80%] gap-8 font-[900]">
<img src="/media/QR code.svg" alt="" />
    <p>Scan this QR code to download Shares</p>
 </div>
 </div>
 <img src="/media/investing.avif"className='w-[48%]' alt="" />
 {/* <img src="/media/harmburger.svg" alt="" /> */}
 {/* <img src="/media/harmburger2.svg" alt="" /> */}
 {/* <img src="/media/logo.svg" alt="" /> */}

 <Cookies/>
    </div>
  )
}

export default Sharestructure