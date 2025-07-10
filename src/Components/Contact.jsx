import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"

const Contact = () => {
  return (
          <div id='Contact' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 item-center'>
              <div>
                  <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
                  <h3 className='text-sm md:text-2xl font-normal'> Fell Free to reach out!</h3>
              </div>
              <ul className='text-sm md:text-xl'>
                  <li className='flex gap-1 items-center'><MdOutlineEmail size={20} />
                  nagalankush@gmail.com</li>
                  <li className='flex gap-1 items-center'><CiLinkedin />
                  linkedin.com/ankush-nagal</li>
                  <li className='flex gap-1 items-center'><FaGithub />
                  github.com/ankush-nagal </li>
                  
              </ul>
  
          </div>
      )
}

export default Contact
