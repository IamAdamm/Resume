import React from 'react'
import '../styles/Contact.css'
import MailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NumberIcon from '@mui/icons-material/Call';
import Swal from 'sweetalert2';
import useIntersectionObserver from '../helpers/IntersectionObserver';

function Contact() {

    useIntersectionObserver('.contactTitle', 'contactPhaseInFromRight');
    useIntersectionObserver('.contactTitleh5', 'contacth5PhaseInFromRight');
    useIntersectionObserver('.contactFormTitleText', 'contactFormTitleTypingAnim');
    useIntersectionObserver('.contactForm', 'contactFormScaleAnim');
    useIntersectionObserver('.contactMail', 'contactEmailIconPhaseInFromRight');
    useIntersectionObserver('.contactLocation', 'contactLocationIconPhaseInFromRight');
    useIntersectionObserver('.contactNumber', 'contactNumberIconPhaseInFromRight');


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "fc239067-4ea2-4e4d-b5b2-de1f67534bbe");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Message sent successfully!",
                icon: "success"
              });
        }
      };

  return (
    <div className='contact' id='contact'>
        <div className='contactTitle'>
            <h5 className='contactTitleh5'>CONTACT</h5>
            <h2>Feel free to get in touch! <span className='pointingDownEmoji'>👇</span></h2>
        </div>
        <div className='contactContainer'>
            <div className='contactRightSide'>
                <div className='contactIcons'>
                    <div className='contactMail'>
                        <div className='mailIcon'>
                            <MailIcon style={{fontSize: 30}}/>
                        </div>
                        <div className='mailText'>
                            <h3>Email</h3>
                            <a href='' target='_blank' rel='noopener noreferrer'>adam.astamir@hotmail.de</a>
                        </div>
                    </div>
                    <div className='contactLocation'>
                        <div className='locationIcon'>
                            <LocationOnIcon style={{fontSize: 30}}/>
                        </div>
                        <div className='locationText'>
                            <h3>Location</h3>
                            <a href='https://www.google.com/maps/place/Hamburg/' target='_blank' rel='noopener noreferrer'>Hamburg, Germany</a>
                        </div>
                    </div>
                    <div className='contactNumber'>
                        <div className='numberIcon'>
                            <NumberIcon style={{fontSize: 30}}/>
                        </div>
                        <div className='numberText'>
                            <h3>Number</h3>
                            <p>+49 173 4814577</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contactFormLeftSide'>
                <div className='contactForm'>
                    <form onSubmit={onSubmit}>
                        <div className='contactFormTitle'>
                            <h3 className='contactFormTitleText'>...or just leave a Message!</h3>
                        </div>
                        <div className='contactFormInput'>
                            <label className='contactFormInputEmail'>Email:</label>
                            <input type='email' className='field' placeholder='Enter your Email' name='Email' required/>
                        </div>
                        <div className='contactFormInput'>
                            <label className='contactFormInputMessage'>Your Message:</label>
                            <textarea className='field-Mess' placeholder='Enter your Message' name='Message' required/>
                        </div>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact