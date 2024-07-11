import React from 'react'
import '../styles/Navbar.css'

const scrollToSection = (id) => {
    const yOffset = -230;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <h3 onClick ={() => scrollToSection('home')}>Adam.dev</h3>
        </div>
        <div className='rightSide'>
            <a onClick ={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('portfolio')}>Projects</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
    </div>
  )
}

export default Navbar