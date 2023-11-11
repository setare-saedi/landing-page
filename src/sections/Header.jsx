import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header({navLink}) {
    return (
        <header className='  px-4 items-center  py-2  my-2 absolute z-50 top-0 left-0 right-0 w-full'>
        <nav className=' flex justify-between items-center'>
          <div className='flex text-lg  max-lg:hidden'>
            <a href='#' className='pl-5'>ورود</a>
            <a href='#'>ثبت نام</a>
          </div>
          <div className='hidden max-lg:block'>
            <GiHamburgerMenu className=' w-6 h-6 ' />
          </div>
          <ul className='flex flex-1 flex-row text-lg justify-center items-center gap-10 max-lg:hidden'>
            {navLink.map(item => <div key={item.id}><a href={item.href}>{item.label}</a></div>)}
          </ul>
          <a href="#" className='flex items-center cursor-pointer'>
            <span>Setare</span>
            <img src='./logo/star.png' width={40} height={40} alt='logo' />
          </a>
        </nav>
      </header>
    );
}

export default Header;