import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr'

function Header({ navLink }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className='  px-4 items-center  py-4   absolute z-50 top-0 left-0 right-0 w-full'>
      <nav className=' flex justify-between items-center'>

        <div className='hidden max-lg:block'>
          {
            showMenu ? <></>
              : <button onClick={() => { setShowMenu(!showMenu) }}>
                <GiHamburgerMenu className=' w-6 h-6 ' />
              </button >
          }
        </div>

        <ul className='flex flex-1 flex-row text-lg justify-center items-center gap-10 max-lg:hidden'>
          {navLink.map(item => <div key={item.id}><a href={item.href}>{item.label}</a></div>)}
        </ul>

        <div className={`${showMenu ? 'flex' : 'hidden'} p-6 h-screen bg-violet-400 absolute top-0 right-0 mx-4 my-2 min-w-[200px] rounded-xl`}>
          <div className=' flex flex-col '>
            <div className='  divide-y-2 divide-violet-200'>
              <div>

                <button className=' flex ' onClick={() => { setShowMenu(!showMenu) }}>
                  <GrClose className=' w-6 h-6 mb-4' /></button>
              </div>
              <div>

                <ul className='list-none flex flex-col space-y-4 pt-4'>
                  {navLink.map(item => <div key={item.id}><a href={item.href}>{item.label}</a></div>)}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <a href="#" className='flex items-center cursor-pointer'>
          <span>Setare</span>
          <img src='./logo/star.png' width={40} height={40} alt='logo' />
        </a>
      </nav>
    </header>
  );
}

export default Header;