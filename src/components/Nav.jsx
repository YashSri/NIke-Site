import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full bg-white z-50 padding-x py-4'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        
        <ul className='hidden lg:flex flex-1 justify-center items-center gap-16'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className='hidden lg:flex gap-2 text-lg leading-normal font-medium font-montserrat wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        
        {/* Hamburger Menu */}
        <div className='lg:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={hamburger} alt='hamburger icon' width={25} height={25} />
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <ul className='absolute top-full left-0 w-full bg-white/50 backdrop-blur-md flex flex-col items-center py-4'>
          {navLinks.map((item) => (
            <li key={item.label} className='py-2'>
              <a href={item.href} className='font-montserrat text-lg text-black'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
