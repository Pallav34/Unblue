import React from 'react'
import "./contact.css"
import Button from './Button'
const Contact = () => {
  return (
    <section className='contact_section sm:px16 sm:py12 sm:flex-row bg-black-gradient-2 box-shadow' id='contact'>
        <div className='contact_wrapper'>
            <h2>Let's Talk</h2>
            <p className='contact_para'>Get an Expert's advice today! A single conversation can shape your business in a better way. Register today and get a 1:1 session with team Unblue. See you soon!</p>
        </div>
        <div className='contact_btn'>
            <Button/>
        </div>

    </section>
  )
}

export default Contact





{/* <div className='widget'>
        <a href="https://calendly.com/bgpalv/30min" target="_blank">
            <button className='primary_btn'>Schedule a Meet Now</button>
        </a>
    </div> */}