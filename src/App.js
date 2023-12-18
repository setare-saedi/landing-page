import React, { useState } from 'react';

import { navLinks, statistics, slideImg, cards, managers } from './constants';
import Header from './sections/Header/Header';
import Footer from './sections/Footer/Footer';
import Cards from './sections/Card/Cards';
import ContactUs from './sections/ContactUs/ContactUs';
import AboutUs from './sections/AboutUs/AboutUs';
import Banner from './sections/Banner/Banner';
import Samples from './sections/Samples/Samples';
import Services from './sections/Services/Services';
import SectionVerticalSlider from './sections/SectionVerticalSlider/SectionVerticalSlider';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import ScrollToTop from "react-scroll-to-top";

import './index.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <div className={` transition duration-1000 ease-in-out 
    ${darkMode ? "dark" : "light"}`}>

      <Header navLink={navLinks} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <section  >
          <Banner statistics={statistics} slideImg={slideImg} />
        </section>

        <section >
          <SectionVerticalSlider cards={cards} />
        </section>
        <section id='services'>
          <Services />
        </section>
        <section className=' relative overflow-hidden' id='courses'>
          <Cards cardInfo={cards} />
        </section>
        <section id='samples'>  
          <Samples />
        </section>
        <section id='about-us'>
          <AboutUs infos={managers} />
        </section>
        <section id='contact-us'>
          <ContactUs />
        </section>

      </main>
      <Footer />
      <span >
        <ScrollToTop component={<MdKeyboardDoubleArrowUp />} className=' text-white text-2xl ' color='blueViolet' top={800} smooth />
      </span>
    </div>
  );
}

export default App;
