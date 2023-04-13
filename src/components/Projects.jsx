import React, { useState } from 'react';
import MyProjects from '../../MyProjects'
import SingleProject from './SingleProject';

const Projects = () => {

  const [projects, setprojects ] = useState([]);
  
  return (
    <section className='my-projects px-12 md:px-48 w-full mt-8 bg-bodyColor'>
      <h3 className='text-2xl text-navyBlue text-center font-bold my-3'>My Projects</h3>
      <div className="projects md:grid md:grid-cols-3 gap-4">
        {MyProjects.map((project, index) => (
          <div key={index}>
            <SingleProject
              name = {project.name}
              featuredImage={project.featuredImage}
              sourceCode = {project.sourceCode}
              liveDemo = {project.liveDemo}
              technologies={project.technologies}
              description = {project.description}
            />
          </div>
          
        ))}

      </div>

    </section>
  )
}

export default Projects