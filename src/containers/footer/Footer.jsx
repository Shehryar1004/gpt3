import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className='footer-heading'>
        <h1 className='gradient__text'>Do you want to ???</h1>
      </div>

      <div className='footer-button'>
        <p>Request Early Access</p>
      </div>

      <div className='footer-links'>
        <div className='footer-links_logo'>
          <img src ={logo}/>
          <p>Well hello there, tis is where the address will be</p>
        </div>

        <div className='footer-links_div'>
          <h4>Links</h4>
          <p>Link1</p>
          <p>Link2</p>
          <p>Link3</p>
          <p>Link4</p>
        </div>

        <div className='footer-links_div'>
          <h4>Links</h4>
          <p>Link1</p>
          <p>Link2</p>
          <p>Link3</p>
          <p>Link4</p>
        </div>  
      </div>

      <div className='footer-copyright'>
        <p>All rights not reserved... :(</p>
      </div>
    </div>
  )
}

export default Footer