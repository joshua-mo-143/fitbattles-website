import { FavoriteRounded } from "@material-ui/icons";
import React from "react"
import { useParams } from 'react-router-dom'
import { RecentSubmissions } from "../data";
import { Link } from "react-router-dom";
export const Outfit = () => {
    
  const params = useParams();
  const outfitId = params.id;

  return (
    <div className="outfit-container">
        {RecentSubmissions.filter(pic => pic.id == outfitId).map(pic => (
          <div className="outfitinfo-container">
          <img src={pic.img}/>
          <div className="outfit-info">
            <h3>Submitted by: <Link to={`/user/${pic.author}`}>{pic.author}</Link></h3>
            <p>Date published: {pic.datePublished}</p>
            <button className="likeBtn"><FavoriteRounded/>{pic.likes}</button>
            <h3>Description:</h3>
            <p>{pic.desc}</p>
          </div>
          </div>
        ))}

    </div>
  )
}
