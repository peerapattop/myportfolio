import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_zqe39n6', 'template_d1zg3jd', form.current, {
        publicKey: 'dcF3Q2XjKqQ3HJZNU',
      })
      .then(
        () => {
          form.current.reset();
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has been sent successfully!',
            confirmButtonText: 'Close',
            confirmButtonColor: '#3085d6',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  

  return (
    <section className='contact container section' id='contact'>
      <h2 className='section__title'>Get In Touch</h2>

      <div className='contact__container grid'>
        <div className='contact__info'>
          <h3 className='contact__title'>Let's talk about everything!</h3>
          <p className='contact__details'>Don't like forms? Send me an email</p>
        </div>

        <form action='' ref={form} className='contact__form' onSubmit={sendEmail}>
          <div className='contact__form-group'>
            <div className='contact__form-div'>
              <input type='text' className='contact__form-input' placeholder='Insert your name' name='from_name' />
            </div>

            <div className='contact__form-div'>
              <input type='email' className='contact__form-input' placeholder='Insert your email' name='from_email' />
            </div>
          </div>

          <div className='contact__form-div'>
            <input type='text' className='contact__form-input' placeholder='Insert your subject' />
          </div>

          <div className='contact__form-div contact__form-area contact__form-area'>
            <textarea
              name='message'
              id=''
              cols='30'
              rows='10'
              className='contact__form-input'
              placeholder='Write your message'
            ></textarea>
          </div>

          <button className='btn' type='submit' value='Send'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
