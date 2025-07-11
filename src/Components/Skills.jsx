import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "@remixicon/react";
import { FaAmazon } from "react-icons/fa";

const Skills = () => {
  return (

        <div id='skills' className='p-10 md:p-24 flex flex-col items-center justify-center '>

            <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills</h1>
            <div className='flex  item-center flex-row justify-around '>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-9 p-6'>
                    <span className='p-3 bg-zinc-950 flex  text-white  flex-col items-center rounded-2xl'>
                        <FaHtml5 color='#E34F26' size={50} />HTML</span>
                    <span className='p-3 bg-zinc-950 flex  text-white  flex-col items-center rounded-2xl'>
                        <FaCss3 color='#1572b6' size={50} />CSS</span>
                    <span className='p-3 bg-zinc-950 flex  text-white  flex-col items-center rounded-2xl'>
                        <FaReact color='#61DAFB' size={50} />React</span>
                    <span className='p-3 bg-zinc-950 flex  text-white  flex-col items-center rounded-2xl'>
                        <FaJs color='#f7Df1E' size={50} />JavaScript</span>
                    <span className='p-3 bg-zinc-950 flex  text-white  flex-col items-center rounded-2xl'>
                        <FaFigma color='#f245E1E' size={50} />Figma</span>
                    <span className='p-3 bg-zinc-950 flex  text-white  flex-col items-center rounded-2xl'>
                        <SiMongodb color='#47A248' size={50} />Mongodb</span>
                    <span className='p-3 bg-zinc-950 flex  text-white  flex-col items-center rounded-2xl'>
                        <SiRedis color='#FF4438' size={50} />Redis</span>
                    <span className='p-3 bg-zinc-950 flex  text-white  flex-col  items-center rounded-2xl'>
                        <FaBootstrap color='#FF67' size={50} />BootStrap</span>
                    <span className='p-3 text-white  flex-col items-center bg-zinc-950 flex  rounded-2xl'>
                        <FaGithub color='#FF6767' size={50} />Github</span>
                </div>
                
            </div>
        </div>

    )
}

export default Skills
