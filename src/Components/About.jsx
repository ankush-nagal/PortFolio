import React from 'react'
import { IoArrowForward } from "react-icons/io5";


const About = () => {
    return (
        <div id='About' className=' md:flex items-center md:flex-wrap md:justify-center mx-0 md:mx-20  p-12  flex flex-wrap'>
            <div className='flex flex-col items-center gap-9 w-250 flex-wrap'>
                <h1 className='text-green-700 text-3xl md:text-5xl  font-bold'>About Me</h1>
                <p className='text-white text-sm md:text-2xl tracking-wide leading-relaxed text-center flex flex-wrap'>
                   I am a motivated and results-driven Electronic Instrumentation and Control Engineering student currently in my third year of B.Tech at Rajasthan Technical University, Kota, with a CGPA of 7.5. My academic background has equipped me with a solid understanding of electronics, instrumentation, and control systems, along with hands-on exposure to various technical tools and concepts. I have developed skills in strategic project management and team leadership through academic projects and collaborative work, and I enjoy applying my knowledge to solve real-world engineering challenges. Passionate about innovation and continuous learning, I am eager to contribute to dynamic projects that combine creativity with technology. I am expected to graduate in April 2027 and look forward to opportunities where I can grow professionally while making a meaningful impact.
                </p>
            </div>



        </div>
    )
}

export default About
