import React from 'react'
import '../styles/Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const scrollToSection = (id) => {
    const yOffset = -230;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

function Footer() {
  return (
    <div className='footer'>
        <div className='footerSocials'>
            <a href='https://github.com/IamAdamm' target='_blank' rel='noopener noreferrer'>
                <span role='img' aria-label='Github' className='githubIcon'>
                    <GitHubIcon style={{fontSize: 30}}/>
                </span>
            </a>
            <a href='https://www.linkedin.com/in/astamir/' target='_blank' rel='noopener noreferrer'>
                <span role='img' aria-label='LinkedIn' className='linkedInIcon'>
                    <LinkedInIcon style={{fontSize: 30, margin:'0 5px' }}/>
                </span>
            </a>
        </div>
        <div className='footerLinks'>
            <a onClick ={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('portfolio')}>Projects</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
        <div className='copyright'>
            <h4>Copyright © 2024. All rights are reserved</h4>
        </div>
    </div>
  )
}

export default Footer