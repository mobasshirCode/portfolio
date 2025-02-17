import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const Home = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
     <RevealOnScroll>
      <div>
        <h1 className='text-3xl text-center md:text-7xl mb-6 font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
            Hi, I'm Mobasshir Rahman
        </h1>
        <p className='text-lg text-gray-400 max-w-lg mx-auto mb-8 text-center'>
        I am a Front-End Developer who specialize in translating creative concepts into responsive and visually
        appealing interfaces. With a keen eye for detail and a passion for user-centric design principles, I am
        dedicated to delivering high-quality, intuitive, and performance-optimized websites.

        </p>
        <div className='flex justify-center space-x-4'>
            <a href="#projects" className='bg-blue-500 text-white py-3 px-6 font-medium rounded transition relative hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>
                View Projects
            </a>
            <a href="#contact" className=' border-blue-500/50 text-blue-500 py-3 px-6 font-medium rounded transition-all duration-200 border hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10'>
                Contact Me
            </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}

export default Home
