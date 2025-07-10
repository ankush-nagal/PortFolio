import React from 'react'
import { IoArrowForward } from "react-icons/io5";


const About = () => {
   return (
          <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
              
              <div>
                  <h2 className='text-2xl md:text-4xl font-bold '>About</h2>
                  <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                      {/* <img className='md:h-80' src={Aboutimg} alt="about img" /> */}
                      <ul>
                          <div className='flex gap-3 py-4'>
                              <IoArrowForward size={30} className='mt-1' />
                              <span className='w-96'>
                                  <h1 className='text-xl md:text-2xl font-bold leading-normal'>About Me</h1>
                                  <p className='text-sm md:text-md leading-tight'>Results-oriented Electronic Instrumenta on and Control engineering student  seeking opportuni es to apply
                                      academic knowledge and contribute to real-world projects. Skilled in strategic project management and team
                                      leadership. Seeking a challenging role to leverage technical exper se and drive engineering excellence. </p>
                              </span>
  
                          </div>
                          <div className='flex gap-3 py-4'>
                              <IoArrowForward size={30} className='mt-1' />
                              <span className='w-96'>
                                  <h1 className='text-xl md:text-2xl font-bold leading-normal'>Skills</h1>
                                  <p className='text-sm md:text-md leading-tight'>Programming Languages: Python, Java Web Technologies: HTML5, CSS3 Tools & Frameworks: VS Code, Git, Bootstrap (optional)</p>
                              </span>
  
                          </div>
                          <div className='flex gap-3 py-4'>
                              <IoArrowForward size={30} className='mt-1' />
                              <span className='w-96'>
                                  <h1 className='text-xl md:text-2xl font-bold leading-normal'>Education</h1>
                                  <p className='text-sm md:text-md leading-tight'>Bachelor of Technology (B.Tech) in Electronic Instrumentation and Control  Engineering  Rajasthan Technical University, Kota, Rajasthan 3rd Year (CGPA: 7.5) Expected Graduation: [April, 2027]</p>
                              </span>
  
                          </div>
                      </ul>
                  </div>
              </div>
  
          </div>
      )
}

export default About
