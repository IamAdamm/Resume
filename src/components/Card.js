import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Card.css';

function Card() {
  return (
        <div className='card' id='home'>
            <div className='profileImage'>
            </div>
            <div className='cardText'>
                React & Python Developer  <span className='wavingEmoji'>👋</span>
                <div>
                    <p>Hello, I'm Adam Astamir. A passionate Front-end <br/>React & Backend Python Developer based in Hamburg, Germany 📍</p>
                </div>
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
        </div>

  )
}

export default Card