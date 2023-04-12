import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({title, content}) => {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className='accordion mt-8'>
      <div className="flex justify-between">
        <h4 className='text-primary font-bold md:font-medium text-lg mb-3 mt-12 md:mt-0'>{title}</h4>
        {isActive ? (
          <FontAwesomeIcon
            icon={faChevronDown}
            className='text-[#ACB7C3] cursor-pointer'
            onClick={() => setIsActive(!isActive)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronRight}
            className='text-[#ACB7C3] cursor-pointer' 
            onClick={() => setIsActive(!isActive)}
          />
        )
        }
      </div>
      {isActive &&
        <div className="skills flex flex-col md:flex-row gap-3 mt-4 transition ease-in duration-200">
          {content.map((skill, index) => (
            <div key={index} className="small-card bg-[#f7f7f9] w-full flex flex-row md:flex-col md:w-28 
                items-center md:items-start h-20 md:h-28 rounded-md md:p-3">

              <img src={skill.imageUrl} className={`w-12 h-12 rounded-[50%] object-cover shadow-md p-3 ${skill.style}`}
                alt={skill.name} />
              <p className='text-darkBlue font-medium mt-3 text-sm ml-3 md:ml-0'>{skill.name}</p>
            </div>
          ))}
        </div>
      }

    </div>
  )
}

export default Accordion