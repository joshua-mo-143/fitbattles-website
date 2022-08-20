import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {News} from '../data.js'

export const NewsPost = () => {

    const params = useParams();
    const newsId = params.id;

    
  return (
    <div className="newspost-container">
        {News.filter(pic => pic.id == newsId).map(newsitem => (
            <div>
                <h1>Newspost #{newsitem.id}: {newsitem.title}</h1>
                <p>{newsitem.content}</p>
          </div>
        ))}
    </div>
  )
}
