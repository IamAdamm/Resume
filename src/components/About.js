import React from 'react';
import '../styles/About.css';
import AboutImage from '../assets/Aboutpic.png';
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
            <h3>A dedicated Developer based in Germany 📍</h3>
            <p>
            As a Junior Developer, 
            I bring a strong skill set 
            in HTML, CSS, JavaScript/Typescript, React, 
            and Python. <br/><br/> I specialize in 
            designing, building, and maintaining 
            responsive front-end applications as well as 
            developing back-end solutions with Python. 
            My experience mostly includes working with 
            PyTorch, giving me exposure to machine 
            learning and data-driven applications. <br/><br/> 
            I focus on writing clean, optimized code 
            and leveraging modern frameworks, tools, 
            and techniques. I thrive in collaborative 
            environments, contributing to cross-functional 
            teams to deliver outstanding web applications 
            and innovative solutions.

            </p>
        </div>
    </div>
  )
}

export default About
