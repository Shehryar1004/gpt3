import React from 'react'
import {Feature} from '../../components'
import './features.css'

const featuresData = [
  {
    title: 'Title1',
    text: 'Text1 for the first feature'
  },
  {
    title: 'Title2',
    text: 'Text2 for the first feature'
  },
  {
    title: 'Title3',
    text: 'Text3 for the first feature'
  },
  {
    title: 'Title4',
    text: 'Text4 for the first feature'
  },
]

const Features = () => {
  return (
    <div className='features section__padding' id='features'>
      <div className='features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It </h1>
        <p>Early Access to Get Started</p>
      </div>

      <div className='features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Features