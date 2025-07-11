import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"

const Contact = () => {
    return (
        <div id='Contact' className='flex justify-around bg-[#465697] text-white mt-30 rounded-4xl p-10 md:p-12 item-center'>
            <div>
                <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
                <h3 className='text-sm md:text-2xl font-normal'> Fell Free to reach out!</h3>
            </div>
            <ul className='text-sm md:text-xl'>
                <li className='flex gap-1 items-center'><MdOutlineEmail size={20} />
                    <a href="mailto:nagalankush0@gmail.com"
                        className='hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
                        Gmail
                    </a></li>
                <li className='flex gap-1 items-center'><CiLinkedin />
                    <a href="https://www.linkedin.com/in/ankush-nagal-750571293" target="_blank" rel="noopener noreferrer"
                        className='hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
                        LinkDin
                    </a></li>

                <li className='flex gap-1 items-center'><FaGithub />
                    <a href="https://github.com/ankush-nagal"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className='hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
                        GitHub
                    </a></li>

            </ul>

        </div>
    )
}

export default Contact
