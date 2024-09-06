import React from 'react';
import '../styles/Techstack.css';
import Html from '../assets/html-5.png';
import Css from '../assets/css-3.png';
import Javascript from '../assets/js.png';
import ReactIcon from '../assets/react.png';
import MySQL from '../assets/mysql.png';
import Tailwind from '../assets/tailwind.png';

function Techstack() {
  return (
    <div className='techstack'>
        <h4>Tech Stack</h4>
        <div className='Icons'>
            <img src={Html} alt='Html' className='htmlIcon'/>
            <img src={Css} alt='Css' className='cssIcon'/>
            <img src={Javascript} alt='Javascript' className='javascriptIcon'/>
            <img src={ReactIcon} alt='React' className='reactIcon'/>
            <img src={Tailwind} alt='Tailwind' className='tailwindIcon'/>
            <img src={MySQL} alt='MySQL' className='mySQLIcon'/>
        </div>
    </div>
  )
}

export default Techstack