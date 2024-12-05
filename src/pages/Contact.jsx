import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
        <div className='contact-page'>
            <h1>Contact</h1>
            <div className='page-content'>
                <h2>Contact me for any questions you ma have</h2>
                <ContactForm/>
            </div>
        </div>
    </>
  )
}

export default Contact
