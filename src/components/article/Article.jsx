import React from 'react'
import './article.css'

const Article = ({imageURL, date, title}) => {
  return (
    <div className='blog-container__article'>
      <div className='blog-container__article-image'>
        <img src={imageURL} alt="blog" />
      </div>
      <div className='blog-container__article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>

        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article