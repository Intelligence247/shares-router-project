import React from 'react'

const Sharestructure = () => {
  return (
    <div className='w-screen px-[5rem] mt-[4rem] flex'> 
        <div className="left w-[50%]">
        <h1 className='text-[4.5rem] font-bold leading-[4rem] pt-[4rem]'>Invest. Learn. Grow.</h1>
        <p>Invest in over 1,000 stocks, learn from current investors and grow your market knowledge. All in one easy to use app.</p>
        <p>As with all investing, your capital will be at risk.</p>
    
 <div className="qr">
    <img src="" alt="" />
    <p>Scan this QR code to download Shares</p>
 </div>
 </div>
 <img src="/media/investing.avif"className='w-[50%]' alt="" />
    </div>
  )
}

export default Sharestructure