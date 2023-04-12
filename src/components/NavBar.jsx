import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

  const [ isShowing, setIsShowing] = useState(false);

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
          <li className="mr-8 text-lg"><a className="menu-link" href="#">Home</a></li>
          <li className="mr-8 text-lg"><a className="menu-link" href="#">About</a></li>
          <li className="mr-8 text-lg"><a className="menu-link" href="#">Portfolio</a></li>
          <li className="mr-8 text-lg"><a className="menu-link" href="#">Contact</a></li>
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
            pl-12 mt-11 text-white bg-lightBlue">
            <li className="mr-8 text-xl"><a className="menu-link" href="#">Home</a></li>
            <li className="mr-8 text-xl"><a className="menu-link" href="#">About</a></li>
            <li className="mr-8 text-xl"><a className="menu-link" href="#">Portfolio</a></li>
            <li className="mr-8 text-xl"><a className="menu-link" href="#">Contact</a></li>
          </ul>
        </Transition>
        
      </nav>
    </div>
  )
}

export default NavBar