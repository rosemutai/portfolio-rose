import React from 'react'

function SingleProject({ name, experience, description, featuredImage, technologies, liveDemo, sourceCode}) {

  const techBtns = technologies.map((tech, index) => (
    <button key={index} className='text-sm bg-lightGrey text-secondary mr-3 rounded-[8px] px-2
    '>
      {tech}
    </button>
  ));
  return (
    <div>
      <div className='project-card bg-white border-2 border-lightGrey rounded-md 6 mb-4 p-4 
        md:relative group hover:shadow-md hover:transition-all hover:duration-100 hover:ease-in-out'>
          <div className="image-bg bg-lightBlue rounded-lg">
             <img src={featuredImage} alt={name} className='project-image mx-auto w-full group-hover:opacity-20 
              hover:transition-opacity hover:duration-200 hover:ease-in-out'
            />
          </div>
       
         <h3 className='text-navyBlue font-bold text-xl mt-4 mb-0 md:mb-2'>{name}</h3>
        <div className="tech flex my-2 md:absolute z-30 opacity-0 top-[45%] group-hover:opacity-100">
          { techBtns }
        </div>
        <p className="description font-normal text-xs tracking-wide text-primary">{description}</p>
        <div className='links flex justify-between my-6 '>
          <a href={sourceCode} className='btn text-secondary py-2 px-2 rounded-md border 
            border-secondary'>Source Code</a>
          <a href={liveDemo} className='demo border-x-0 border-t-0 border-b-2 mt-4 border-b-secondary
            text-secondary font-semibold'>Demo</a>
        </div>
      </div>
    </div>
  )
}

export default SingleProject