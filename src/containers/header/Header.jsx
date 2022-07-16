import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='header section__padding' id="home">
      <div className='header-content'>
        <h1 className='gradient__text'>Let's Build Something Amazing</h1>
        <p>Some lorem epsum nonsense</p>

        <div className='header-content__input'>
          <input type="email" placeholder='Your Email Address'/>
          <button type="button">Get Started</button>
        </div>

        <div className='header-content__people'>
          <img src={people} />
          <p>1600 people have access to this service</p>
        </div>

      </div>

      <div className='header-image'>
          <img src={ai} alt='ai'/>
        </div>
    </div>
  )
}

export default Header