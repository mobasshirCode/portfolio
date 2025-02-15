import React from 'react'
import RevealOnScroll from '../RevealOnScroll';

const About = () => {
    const skills = [
        "React",
        "HTML5",
        "CSS",
        "TailwindCSS",
        "Java (Intermediate)",
        "Oracle SQL",
        "JavaScript",
        "Git",
        "Github",
        "C++ (Basics)"
    ];
  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
      <div className='max-w-3xl mx-auto py-4'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to to-cyan-400 bg-clip-text text-transparent text-center'>About Me</h2>
        <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
            <p className='text-gray-300 mb-6 text-center'>
                Passionate developer with expertise in building scalable web applications and creating innovative solutions.
            </p>
            <div className='grid grid-cols-1  gap-6'>
                <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'>Skills</h3>
                    <div className='flex flex-wrap gap-2'>
                        {skills.map((tech,key)=> (
                        <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transtition'>
                            {tech}
                        </span>
                        ))}
                       
                    </div>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                <h3 className='font-bold text-xl mb-4'>Education</h3>
                <ul className='list-disc list-inside text-md text-gray-300 space-y-2'>
                    <li>
                        <strong> B.Tech in Computer Science (8.7 CGPA) </strong> <br /> GGSIP University (2021-2025)
                        <br /> Delhi Institute of Technology and Management (DITM)
                    </li>
                    <li>
                        <strong> Class XIIth (PCM with CS) </strong> <br /> Aligarh Muslim University (2018-2020)
                        
                    </li>
                </ul>
            </div>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                <h3 className='font-bold text-xl mb-4'>Work Experience</h3>
                <div className='space-y-4 text-gray-300'>
                    <div>
                        <h4 className='font-semibold'>
                            Web Development Intern <br /> insiderOne - (Dec 2023 - Jan 2024)
                        </h4>
                        <p className='text-md'>Assisted in replicating their wordpress website using React Js.</p>
                    </div>
                    <div>
                        <h4 className='font-semibold'>
                            Web Development Intern <br /> Ideamotive - (Feb 2024 - Apr 2024)
                        </h4>
                        <p className='text-md'>Collaborated in the design and implementation of responsive user interfaces using HTML, CSS, and JavaScript.</p>
                    </div>

                </div>
            </div>

        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}

export default About
