import React, { useEffect, useRef, useState } from 'react';
import '../../styles/navigation.css'

type Props = {}

export default function Navigation({}: Props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navState, setNavState] = useState('navigation--top');
  const [isOpen, setIsOpen] = useState(false);

  const navbarRef = useRef(null);

  const toggleMenu = () => {
    console.log('toggled', isOpen);
    setIsOpen(!isOpen);
  };

  const scrollHandler = () => {
    if (window.scrollY > 90) {
      setNavState('navigation--middle');
    } else {
      setNavState('navigation--top');
    }
  }

  // Save current scroll position
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navigation ${navState}`} ref={navbarRef} style={{
      display: 'flex',
    }}>
      <div className="navigation--container">
        <div className="navigation--logo">
          <span style={{fontWeight: 400, fontSize: '42px', transform: 'translateY(-2px)'}}>P</span>
          <span style={{fontWeight: 400}}>ULSE</span>
          <span style={{fontWeight: 300}}>WEB</span>
        </div>

        <div className="navigation--menu">
          <div className="navigation--menu-item">Home</div>
          <div className="navigation--menu-item">About Us</div>
          <div className="navigation--menu-item">Services +</div>
          <div className="navigation--menu-item">Our Work</div>
          <div className="navigation--menu-item">Contact Us</div>
        </div>

        <div className="navigation--get-started-button">Pulse your project</div>
        
        <div className="navigation--hamburger" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </div>
      </div>
      {/* {isOpen && <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />} */}
    </div>
  )
}

type HamburgerProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HamburgerMenu = ({ isOpen, setIsOpen}: HamburgerProps) => {
  return (
    <div className={`hamburger--menu humburger--menu-${isOpen ? 'open' : 'closed'}`}>
      <div className="navigation">
        <div className="navigation--logo">PulseWeb</div> 
        <div className="hamburger-menu--close-button" onClick={() => setIsOpen(false)}>X</div>
      </div>

      <div className="hamburger-menu--item-section">
        <div className="hamburger-menu--item">Home</div>
        <div className="hamburger-menu--item">About Us</div>
        <div className="hamburger-menu--item">Services +</div>
        <div className="hamburger-menu--item">Our Work</div>
        <div className="hamburger-menu--item">Contact Us</div>
        <div className="hamburger-menu--item">Pulse your project</div>
      </div>

      <div className="hamburger-menu--contact-section">
        Contact
      </div>      
    </div>
  )
}