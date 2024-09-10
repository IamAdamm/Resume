import React from 'react'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

const scrollToSection = (id) => {
    const yOffset = -230;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    if (document.getElementById('reorderLinks').classList.contains('display')) {
      document.getElementById('reorderLinks').classList.toggle('display');
    }
}

function toggleNavbarLinks() {
  document.getElementById('reorderLinks').classList.toggle('display');
  document.getElementById('reorderIcon').classList.toggle('reorderIconAnim');
}

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <h3 onClick ={() => scrollToSection('home')}>Adam A.</h3>
        </div>
        <div className='rightSide'>
            <a onClick ={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('portfolio')}>Projects</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
        <div className='reorder' id='reorder'>
          <ReorderIcon className='reorderIcon' id='reorderIcon' onClick={toggleNavbarLinks}/>
          <div className='reorderLinks' id='reorderLinks'>
            <a onClick ={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('portfolio')}>Projects</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
        </div>
    </div>
  )
}

export default Navbar