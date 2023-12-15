import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr'
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";


function Header({ navLink, toggleDarkMode, darkMode }) {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <header className='header '>
      <nav className='nav'>

        <a href="#" className='logo '>
          <img src={darkMode ? './logo/star2.png' : './logo/star.png'} width={40} height={40} alt='logo' />
          <span className=' logo-name'>ستاره</span>
        </a>

        <div className='hidden max-lg:block'>
          {
            showMenu ? <></>
              : <button onClick={() => { setShowMenu(!showMenu) }}>
                <GiHamburgerMenu className=' w-6 h-6 ' />
              </button >
          }
        </div>

        <ul className='nav-items'>
          {navLink.map(item => <div key={item.id}><a href={item.href}>{item.label}</a></div>)}
        </ul>

        <div className={`${showMenu ? 'fixed top-0 right-0 z-50' : 'hidden'} p-6 min-h-screen lg:hidden  bg-violet-200 w-full rounded-xl`}>
          <div className=' flex flex-col '>
            <div className='nav-divide '>
              <div className=' flex justify-between items-center mb-4'>

                <span><img src='./logo/star.png' width={36} height={36} /></span>
                <button onClick={() => { setShowMenu(!showMenu) }}>
                  <GrClose className=' w-6 h-6 ' />
                </button>
              </div>
              <div >
                <button onClick={toggleDarkMode} className=' btn-darkMode' >
                  {
                    darkMode ? <MdOutlineLightMode /> :
                      <MdOutlineNightlight />

                  }

                </button>
                <ul className='list-none flex flex-col space-y-4 pt-4'>
                  {navLink.map(item => <li className=' nav-link' key={item.id}><a href={item.href}>{item.label}</a></li>)}
                </ul>

              </div>
            </div>
          </div>
        </div>


        <button onClick={toggleDarkMode} className='btn-darkMode max-lg:hidden' >
          {
            darkMode ? <MdOutlineLightMode /> :
              <MdOutlineNightlight />

          }

        </button>
      </nav>
    </header>




  );
}

export default Header;