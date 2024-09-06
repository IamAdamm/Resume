import React from 'react';
import '../styles/Portfolio.css';
import Pizza from '../assets/pizza.png';
import SfP from '../assets/SfP2.png';
import WeightTracker from '../assets/WeightTracker.png';
import MakeaMeal from '../assets/MakeaMeal.png';
import useIntersectionObserver from '../helpers/IntersectionObserver';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Portfolio() {

    useIntersectionObserver('.portfolioTitle', 'portfolioPhaseInFromRight');
    useIntersectionObserver('.projectBox', 'portfolioPhaseInFromRight');
    useIntersectionObserver('.projectBoxReverse', 'portfolioPhaseInFromLeft');

  return (
    <div className='portfolio' id='portfolio'>
        <div className='portfolioTitle'>
            <h5>PORTFOLIO</h5>
            <h2>Each Project is a step towards Mastery ✅</h2>
        </div>
        <div className='projectBox'>
            <img src={SfP} alt='Project 1' id='SfP'/>
            <div className='projectText'>
                <h3>Strife for Peace 🌿</h3>
                <p>
                A dynamic Painting Ecommerce Website with intuitive and responsive design enhancing user experience with seamless browsing and checkout.
                </p>
                <div className='projectTextLinks'>
                    <a href='https://github.com/IamAdamm/Pizza-Restaurant-Website' target="_blank">Code <GitHubIcon/>(WIP)</a>
                    <a href='https://github.com/IamAdamm/Pizza-Restaurant-Website' target="_blank">Live Demo<OpenInNewIcon/> (WIP)</a>
                </div>
            </div>
        </div>
        <div className='projectBoxReverse'>
            <img className='WeightTrackerImage' src={WeightTracker} alt='Project 2'/>
            <div className='projectText'>
                <h3>Weight Tracker 🏋️</h3>
                <p>
                    A Weight Tracker App that allows 
                    users to set their goal weight and 
                    monitor their progress accurately. 
                    It accounts for daily weight 
                    fluctuations and provides valuable 
                    insights, including daily 
                    maintenance calorie recommendations.
                </p>
                <div className='projectTextLinks'>
                    <a href='https://github.com/IamAdamm/MakeAMeal' target="_blank">Code <GitHubIcon/></a>
                    <a href='https://github.com/IamAdamm/MakeAMeal' target="_blank">Live Demo<OpenInNewIcon/> (WIP)</a>
                </div>
            </div>
        </div>
        <div className='projectBox'>
            <img src={MakeaMeal} alt='Project 3'/>
            <div className='projectText'>
                <h3>Make-a-Meal 👨‍🍳</h3>
                <p>
                    Make-a-Meal allows users to input their
                     desired macro nutrients and diet restrictions, 
                    to then find a suitable Meal choosen by 
                    AI in conjunction with an API. 

                </p>
                <div className='projectTextLinks'>
                    <a href='https://github.com/IamAdamm/Weight-Tracker/tree/main' target="_blank">Code <GitHubIcon/></a>
                    <a href='https://github.com/IamAdamm/Weight-Tracker/tree/main' target="_blank">Live Demo<OpenInNewIcon/> (WIP)</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio