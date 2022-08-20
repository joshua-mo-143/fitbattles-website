import React, {useState} from 'react'
import { RecentSubmissions } from '../data'
import {Link} from 'react-router-dom'
export const OutfitList = () => {

  const [visible, setVisible] = useState(false);
  return (
    <>
    <h1 style={{textAlign: 'center'}}>All Outfits</h1>
    <div className="allfits-container" style={{marginBottom: '500px'}}>

        {RecentSubmissions.sort((a,b)=>{return b.id - a.id}).map(pic => (
          <div className="pic-container" key={pic.id} 
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}>
            <div className="pic-info">
              <p>Submitted by:<br/> {pic.author}</p>
              {visible && (
                <>
              <hr/>
              <div className="pic-links">
              <Link to={`/user/${pic.author}`} className="view-user link"><p>View user</p></Link>
              <Link to={`/outfits/${pic.id}`} className="view-outfit link"><p>View fit</p></Link>
              </div>
              </>
              )}
            </div>
            <img src={pic.img}/>
            </div>
        ))}
    </div>
    </>
  )
}
