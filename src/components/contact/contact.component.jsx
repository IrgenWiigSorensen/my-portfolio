import './contact.styles.scss'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;

const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

const emailjsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;





const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(emailjsServiceId, emailjsTemplateId , form.current, emailjsPublicKey)
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          // alert('Email sent');
      }, (error) => {
          console.log(error.text);
          alert('Error - could not send email. Try again later');
      });
  }

  return (
    <section id='contact'>
    <div className="contact-section">
      <div  className='section-header'>
        <h1>Contact</h1>
      </div>
      <div className="contact-container">
        <div className='left-inner-container'>
          <h3>Get in touch</h3>
          <h5>Email: irgenws@icloud.com</h5>
          <h5>Phone: +47 48 36 36 81</h5>
          <p>I would be delighted to collaborate with you on creating an application that aligns with your business goals and delivers an exceptional user experience. If you are looking for a dedicated partner to help elevate your web projects, I would be very interested in connecting with you. Please feel free to reach out, and we can explore the possibilities together.</p>
        </div>
        <div className='right-inner-container'>
          <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <input className='input-box input' placeholder='Name' type="text" name="from_name"/>
            <input className='input-box input' placeholder='Email' type="email" name="from_email" />
            <textarea className='input-box text' placeholder='Message' name="message" />
            <button className='btn-one' type="submit" value="Send" >Send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact; 