import React from 'react'
import Cookies from './Cookies'

const PurposeStructure = () => {
  return (
    <div className='flex w-screen px-[5rem] text-[1.3rem] font-[600] mt-[4rem] text-[#16002c]'>
        <div className="ourpurpose flex flex-col gap-8 w-[50%] pt-[5rem]">
<p className='font-bold'>Our purpose</p>
<h1 className='font-bold text-[4rem] leading-[4rem]'>To build a world where together, we’re more than investors.</h1>
<p>We’re putting an end to investing alone or thinking “the financial market isn’t for me”. Shares brings connecting with friends and Investing together – in one app. Because we believe investing is for everyone, not just the top dogs.</p>
        </div>
        <img src="/media/thebomb.avif"className='w-[50%]' alt="" />
        <Cookies/>
    </div>
  )
}

export default PurposeStructure