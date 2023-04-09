import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <div className='hero-section pt-40 md:pt-48 w-full h-screen bg-mobile-herosection
      md:bg-desktop-herosection bg-no-repeat bg-[length:100%] 
      bg-center flex flex-col justif-center itms-center pl-12 md:pl-48 rounded-bl-[6rem]
        bg-white bgred-800'
    >
      <h4 className='text-navyBlue font-bold mb-2 text-xs md:text-sm'>Hello, It's Me</h4>
      <h1 className="my-name font-bold text-base md:text-2xl text-navyBlue leading-none">
        Rose Mutai.
      </h1>

      <h2 className='text-navyBlue font-bold text-xl md:text-5xl mt-3'>And I'm a 
        <span className='frontend text-lightBlue ml-3'>Frontend Developer</span>
        <span className='frontend text-lightBlue ml-3'>Frontend Developer</span>
      </h2>
      <p className='font-normal text-sm md:text-base my-5 leading-6 text-primary md:pr- md:w-8/12'>I specialize in crafting beautiful 
        and responsive web interfaces that deliver outstanding user experiences. 
        I am able to turn complex design concepts into polished, high-performing applications. 
      </p>

      <p className="connect text-lightBlue font-medium my-2 text-sm md:text-base">LET'S CONNECT</p>

      <ul className="social-icons flex gap-4 text-lg text-greyish">
        <li>
          <a href="https://twitter.com/__chepngetich" className='icon'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rosemutai/" className='icon'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>

        <li>
          <a href="https://github.com/rosemutai" className='icon'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/__rosemutai/" className='icon'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        
      </ul>
    </div>
  )
}

export default Header