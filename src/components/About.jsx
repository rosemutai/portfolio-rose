import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import Accordion from './Accordion';
import languages from './Languages';
import frameworks from './Frameworks';



const About = () => {

  return (
    <section id='aboutMe' className='about-me px-12 md:px-48 w-full h-scre py-24 mt-8 bg-white rounded-tr-[6rem] pt-6
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
        <Accordion title='Languages' content={languages} />
        <Accordion title='Frameworks' content={frameworks} />
        <hr className='hidden md:block border border-b-[#DFE1E6] border-t-0 border-x-0 my-4 '/>

        <Accordion title='Skills' content={frameworks} />
        <hr className='hidden md:block border border-b-[#DFE1E6] border-t-0 border-x-0 my-4 '/>

      </div>
    </section>
  )
}

export default About