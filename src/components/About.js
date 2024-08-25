import React from 'react';
import '../styles/About.css';
import AboutImage from '../assets/aboutImg.png';
import useIntersectionObserver from '../helpers/IntersectionObserver';

function About() {

  useIntersectionObserver('.aboutImage, .aboutText', 'aboutPhaseInFromRight');

  return (
    <div className='about' id='about'>
        <div className='aboutImage'>
            <img src={AboutImage}/>
        </div>
        <div className='aboutText'>
            <h5>ABOUT ME</h5>
            <h3>A dedicated Front-end React Developer based in Germany 📍</h3>
            <p>
                As a Junior Front-End Developer, 
                I bring an impressive skill set 
                in HTML, CSS, JavaScript, React, 
                and Shopify. <br/><br/> I specialize in 
                designing, building, and maintaining 
                responsive websites that provide 
                seamless user experiences. My 
                proficiency includes crafting 
                dynamic, engaging interfaces 
                through clean, optimized code 
                and the use of the latest development 
                tools and techniques. <br/><br/> I excel in 
                collaborative environments, working 
                with cross-functional teams to create 
                outstanding web applications.
            </p>
        </div>
    </div>
  )
}

export default About
