import React from 'react'

const Careerstructure = (props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 mt-[5rem] pt-[5rem] text-[1.3rem] w-[70%] m-auto text-center text-[#16002c]'>
        <p className='font-[700]'>{props.name}</p>
        <h1 className='font-[900] text-[4rem] leading-[4rem]'>{props.title}</h1>
        <p className='w-[60%] font-[600]'>{props.desc}</p>
        <button className='bg-[blue] px-6 py-3 rounded-[50px] text-white opacity-[0.7] '>See available roles</button>
        <img src={props.img} alt="" />
    </div>
  )
}

export default Careerstructure