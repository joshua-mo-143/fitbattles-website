import React from 'react'
import {News} from '../data'
import { Link } from 'react-router-dom'

export const NewsList = () => {
  return (
    <>
    <div className="news-container">
      <h1>Site News and Updates</h1>
        {News.slice(-2).map(item => (
            <div className="news-item" key={item.id}>
                <h1>{item.title}</h1>
                <h4 style={{marginTop: "-20px"}}>Date published: {item.publishDate}</h4>
                <p>{item.content.length > 100 ? item.content.slice(0,100)+"..." : item.content}</p>
                <Link to={`/news/${item.id}`} className="link" style={{color: '#e8175d'}}>Read more</Link>
            </div>
        ))}
    </div>
    </>
  )
}
