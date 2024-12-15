import React, { useRef } from 'react'
import fbIcon from '../../assets/fbicon.png'
import instaIcon from '../../assets/instagram.png'
import linkedIcon from '../../assets/linkedinIcon.png'
import './contact.css'
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_v43r0ei', 'template_kx8jygh', form.current, {
            publicKey: 'TXBKoDbbNEyQNtYgs',
          })
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email Sent!")
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    
        <section id="contactPage">
            <div className='contactDiv'>


                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out details below to discuss any work opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>

                    <input type='text' className='name' name="from_name" placeholder='Your Name'/>
                    <input type='email' className='email' name="from_email"  placeholder='Your Email'/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button className='submitBtn' type='submit' value="Send">Submit</button>
                    <div className='links'>

                    <a href='https://www.facebook.com/vallabh.patil.92' target='_blank' rel='noopener noreferrer'>
                        <img src={fbIcon} alt='facebookIcon' className='link'/>
                        </a>
                        <a href='https://www.instagram.com/vallabh_patil_777/' target='_blank' rel='noopener noreferrer'>
                        <img src={instaIcon} alt='instagramIcon' className='link'/>
                        </a>
                        <a href='https://www.linkedin.com/in/vallabh-patil-63248b144' target='_blank' rel='noopener noreferrer'>
                        <img src={linkedIcon} alt='linkedIn' className='link'/>
                        </a>

                    </div>
                </form>
            </div>

            
        </section>
    
  )
}

export default Contact