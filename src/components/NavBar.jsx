import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link, animateScroll as scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

  const [ isShowing, setIsShowing] = useState(false);
   const [ isBlurred, setIsBlurred] = useState(true);

  return (
    <div className="navbar w-full bg-white">
      <nav className="w-full md:flex md:justify-between md:items-center py-3 px-12
       relative">
        <div className="logo flex justify-between">
          <h2 className="text-secondary text-lg font-bold"><a 
            href="#" className='no-underline'>ROSE MUTAI</a></h2>

          { isShowing ? (
            <FontAwesomeIcon icon={faTimes} 
              className='md:hidden font-bold text-secondary text-xl'
              onClick={() => setIsShowing((isShowing) => !isShowing)}
            />
          ) : (
            <FontAwesomeIcon icon={faBars} 
              className='md:hidden font-bold text-secondary text-xl'
              onClick={() => setIsShowing((isShowing) => !isShowing)}
            />
          )}
        </div>

        <ul className="hidden menu-links md:flex text-primary">
          <li className="mr-8 text-lg">
            <Link
              className="menu-link"
              to="/">Home
            </Link>
          </li>
          <li className="mr-8 text-lg">
            <Link
              className="menu-link" 
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >About
            </Link>
          </li>
          <li className="mr-8 text-lg">
            <Link
              className="menu-link" 
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Portfolio
            </Link>
          </li>
          <li className="mr-8 text-lg">
            <Link
              className="menu-link"
              to="contactMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Contact</Link>
          </li>
        </ul>
        <Transition 
          as="ul"
          show={isShowing}
          enter="transition-opacity duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          
          <ul className="md:hidden absolute top-0 left-0 z-20 menu-links flex flex-col h-screen w-[100vw] gap-y-16
            pl-12 mt-11 text-white bg-lightBlue/80 backdrop-blur pt-16">
            <li className="mr-8 text-xl">
            <Link
              className="menu-link"
              to="/">Home
            </Link>
          </li>
          <li className="mr-8 text-xl">
            <Link
              className="menu-link" 
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >About
            </Link>
          </li>
          <li className="mr-8 text-xl">
            <Link
              className="menu-link" 
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Portfolio
            </Link>
          </li>
          <li className="mr-8 text-xl">
            <Link
              className="menu-link"
              to="contactMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Contact</Link>
          </li>
          </ul>
        </Transition>
        
      </nav>
    </div>
  )
}

export default NavBar