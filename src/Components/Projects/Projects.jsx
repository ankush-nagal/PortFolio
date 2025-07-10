import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white '>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5 justify-center'>
        <ProjectCard 
        image = "https://images.klipfolio.com/website/public/7eab5172-6fe0-4304-9e9d-4750646a9791/powermetrics-dashboard_0.png"
        title="DashBoard Website" 
        main="This is a basic dashboard website using react js" />
        <ProjectCard 
         image = "https://i.pinimg.com/736x/6e/b8/c5/6eb8c54cf4981851c812b2ac10efeafd.jpg"
        title="ShopCart" 
        main="Basic shoping website" />
        <ProjectCard 
        image = "https://media2.themorningcontext.com/media/posts_images/thibault-penin-AWOl7qqsffM-unsplash.jpeg"
        title="Netflix clon" 
        main="This is a clon of netflix login page" />
      </div>

    </div>
  )
}

export default Projects
