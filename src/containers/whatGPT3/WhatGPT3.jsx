import React from 'react'
import './whatgpt3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className="whatgpt3 section__margin" id="gpt3">
      <div className='whatgpt3-feature'>
        <Feature title="What is GPT3" text="Some text to test out the functionality"/>
      </div>
      <div className="whatgpt3-heading">
        <h1 className='gradient__text'>Beyond Your Imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3-container'>
        <Feature title="Chatbots" text="Some text to test out the functionality"/>
        <Feature title="KnowledgeBase" text="Some text to test out the functionality"/>
        <Feature title="Education" text="Some text to test out the functionality"/>
      </div>
    </div>
  )
}

export default WhatGPT3