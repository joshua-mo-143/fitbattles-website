import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { userData, RecentSubmissions } from '../data';

export const User = () => {
    const params = useParams();
    const username = params.user;

  return (
    <div className="user-container">
    {userData.filter(user => user.username == username).map(user => (
        <div className="user-info" key={user.id}>
    <h1>{user.username}</h1>
    <h3>Total submissions: {user.submissions}</h3>
    </div>
    ))}
    <h1>Submissions:</h1>
    {RecentSubmissions.filter(pic => pic.author == username).map(pic => (
        <div className="profile-pic-container" key={pic.id}>
        <img src={pic.img}/>
        </div>
    ))}
    </div>
  )
}
