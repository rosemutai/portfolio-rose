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
        <div className="tech flex my-2 md:absolute z-30 opacity-0 top-[50%] group-hover:opacity-100">
          { techBtns }
        </div>
        <p className="description font-normal text-xs tracking-wide text-primary">{description}</p>
        <div className='links flex justify-between mt-6'>
          <a href={sourceCode} className='btn text-lightBlue py-2 px-6 rounded-md border border-lightBlue'>See Project
          </a>
          {/* <a href={sourceCode} className='underline mt-4 text-navyBlue font-semibold pb-3'>Source Code</a> */}
          {/* <a href={liveDemo} className='underline mt-4 text-navyBlue font-semibold pb-3'>Demo</a> */}
        </div>
      </div>
    </div>
  )
}

export default SingleProject