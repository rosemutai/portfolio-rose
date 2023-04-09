import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import js from '../assets/javascript.svg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import { useState } from 'react';

const skills = [
  {
    imageUrl: html,
    name: 'HTML',
    bgcolor: 'E34F26',
  },

  {
    imageUrl: css,
    name: 'CSS',
    bgcolor: '0074D9',
  },

  {
    imageUrl: js,
    name: 'JavaSCript',
    bgcolor: 'F7DF1E',
  },
]

const About = () => {

  return (
    <section className='about-me px-12 md:px-48 w-full h-scre py-24 mt-8 bg-white rounded-tr-[6rem] pt-6
      md:flex md:justify-between'>
      <div className="first-column md:w-1/2">
        <h2 className='text-navyBlue font-bold text-2xl'>About Myself</h2>
        <p className="about-description text-primary font-normal text-xs md:text-sm tracking-wide my-4
          leading-5">
          I am able to work and collaborate
          with a team to deliver innovative solutions that meet the business needs as well as the end users. 
          I am always seeking out the best practices and technologies to stay at the forefront of my field.
          Please look through some of my works and If you like what you see and have a project, don’t hesitate to contact me.
        </p>

        <p className="connect text-lightBlue font-medium my-2 text-sm md:text-base">LET'S CONNECT</p>

        <ul className="social-icons flex gap-4 text-lg text-greyish mb-5">
        <li>
          <a href="https://twitter.com/__chepngetich">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rosemutai/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>

        <li>
          <a href="https://github.com/rosemutai">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/__rosemutai/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>

      <a href="#" download className='btn text-lightBlue py-2 px-4 md:px-6 rounded-md border border-lightBlue' 
      >Get my resume</a>
      </div>
      <div className="second-colum pl-0 md:pl-8 md:w-1/2">
        <div className="flex justify-between">
          <h4 className='text-primary font-bold md:font-medium text-lg mb-3 mt-12 md:mt-0'>Languages</h4>
          <FontAwesomeIcon icon={faChevronDown} className='text-[#ACB7C3] mt-12 block md:hidden' />
        </div>
        <div className="skills flex flex-col md:flex-row gap-3 mt-4 md:mt-0">
          {skills.map((skill, index) => (
            <div key={index} className="small-card bg-[#f7f7f9] w-full flex flex-row md:flex-col md:w-28 
              items-center md:items-start h-20 md:h-28 rounded-md md:p-3">
              {console.log `${skill.bgcolor}`}
              <img src={skill.imageUrl} className={`w-12 h-12 rounded-[50%] object-cover bg-${skill.bgcolor}`} 
                alt={skill.name} />
              <p className='text-darkBlue font-medium mt-3 text-sm ml-3 md:ml-0'>{skill.name}</p>
            </div>
          ))}  
        </div>

        <div className="frameworks-skills flex flex-col mt-11">
          <div className="framework flex justify-between border 
            border-b-[#DFE1E6] border-t-0 border-x-0 px-3">
            <h4 className='text-primary font-medium text-lg mb-3'>Frameworks</h4>
            <FontAwesomeIcon icon={faChevronRight} className='text-[#ACB7C3]' />
          </div>

          <div className="skills flex justify-between mt-11 border 
            border-b-[#DFE1E6] border-t-0 border-x-0 px-3">
            <h4 className='text-primary font-medium text-lg mb-3'>Skills</h4>
            <FontAwesomeIcon icon={faChevronRight} className='text-[#ACB7C3]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About