import React from 'react'
import './possibility.css'
import PossibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='pos section__padding' id='possibility'>
      <div className='pos-image'>
        <img src={PossibilityImage} alt="girl Wearing Headset" />
      </div>
      
      <div className='pos-content'>
        <h4>Request Early Access to get Started</h4>
        <h1 className='gradient__text'>The possibilites are beyond your imagination</h1>
        <p>Yet bed any for traveling assistance</p>
        <h4>Request Early Access to get Started</h4>
      </div>

    </div>
  )
}

export default Possibility