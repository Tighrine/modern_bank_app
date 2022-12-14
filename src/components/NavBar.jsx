import { useState } from 'react';

import { close, github, logo, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <a href='/'>
        <img src={logo} alt="hoobank" className='w-[124px] h-8' />
      </a>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((link, idx) => (
          <li
            key={link.id}
            className={`font-poppins 
            font-normal 
            cursor-pointer 
            text-base text-white ${idx === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${link.id}`}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <a href="https://github.com/Tighrine"  target='_blank' className='absolute top-0 right-0 sm:block hidden' >
        <img src={github} alt="github source" />
      </a>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu}
          className='w-7 h-7 object-contain'
          onClick={() => setToggle(prev => !prev)}
        />
        <div className={`${toggle ? 'block' : 'hidden'} p-6 
          bg-black-gradient 
          absolute top-20 right-0 mx-4 my-2 min-w-[140px] 
          rounded-xl sidebar `}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((link, idx) => (
              <li
                key={link.id}
                className={`font-poppins 
                  font-normal 
                  cursor-pointer 
                  text-base text-white ${idx === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`
                }
              >
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default NavBar
