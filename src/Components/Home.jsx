import React from 'react'
import Profileimg from "../assets/1706008829314~2.jpg"

const Home = () => {
  return (
    <div className='text-white flex flex-col w-full  justify-between items-start p-10 md:p-20'>
      <div><img className='  rounded-full w-50  md:h-70  md:w-70' src={Profileimg} alt="profile img" /></div>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-4xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
          Hi, I'm Ankush Nagal
        </h1>
        <p className='text-2xl md:text-2xl tracking-tight pb-6'>Hi! I'm a Full Stack Web Developer passionate about creating user-friendly and scalable web applications </p>
        {/* <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact Me</button> */}
        <a
          href="/ankush resume.pdf"
          download
          className='mt-5 md:md-10  text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'
        >
           Resume
        </a>


      </div>
    </div>
  )
}

export default Home
