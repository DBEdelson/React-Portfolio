import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <section className='m-4 contactHeading' id='Contact'>
        <h2>Contact Me</h2>
        <hr />
        <div className='container contact_container pt-'>
          <form action=''>
            <input type='text' name='name' placeholder='Name' required />
            <input type='email' name='email' placeholder='Email' required />
            <textarea
              name='message'
              rows='2'
              placeholder='Message'
              required
            ></textarea>
            <button type='submit' className='btn btnCustom'>
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
}
