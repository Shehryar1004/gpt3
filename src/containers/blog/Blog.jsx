import React from 'react'
import {Article} from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports'
import './blog.css'

const Blog = () => {
  return (
    <div className='blog section__padding' id='blog'>
      <div className='blog-heading'>
        <h1 className='gradient__text'>Hello there</h1>
      </div>

      <div className='blog-container'>
        <div className='blog-container_groupA'>
          <Article imageURL={blog01} date='7 June 2022' title='title for blog'/>
        </div>

        <div className='blog-container_groupB'>
          <Article imageURL={blog02} date='7 June 2022' title='title for blog'/>
          <Article imageURL={blog03} date='7 June 2022' title='title for blog'/>
          <Article imageURL={blog04} date='7 June 2022' title='title for blog'/>
          <Article imageURL={blog05} date='7 June 2022' title='title for blog'/>
        </div>
      </div>
    </div>
  )
}

export default Blog