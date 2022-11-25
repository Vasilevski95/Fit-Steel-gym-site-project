import React, { useRef } from 'react'
import './Join.css'
import emailJs from '@emailjs/browser'

const Join = () => {

    const form = useRef() 
    //To implement the logic for receiving an email, we make reference for our form

    const sendEmail = (e) => {
      e.preventDefault();
      //Prevents to reload a page after submitting
  
      emailJs.sendForm('service_yi3z9ct', 'template_0in1j0m', form.current, '3cc3gKFmh1iAClJ2A')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    //This is send email function that accepts event to send email (this code is copied from emailjs.com)

  return (
    <div className='Join' id='join us'>
      <div className='left-j'>
        <hr />
        <div>
          <span className='stroke-text'>ready to </span>
          <span>level up</span>
        </div>
        <div>
          <span>your body </span>
          <span className='stroke-text'>with us?</span>
        </div>
      </div>
      <div className='right-j'>
        <form ref={form} onSubmit={sendEmail} className='email-container'>
          <input type='email' name='user_email' placeholder='Enter your Email adress here'/>
          <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join