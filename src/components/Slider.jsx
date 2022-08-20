import React, {useState} from 'react'
import {RecentSubmissions} from '../data.js'
import {Link} from 'react-router-dom'

export const Slider = () => {
  
  const [visible, setVisible] = useState(false);

  return (
  <>
    <h1 style={{textAlign: 'center'}}>Recent Submissions</h1>
    <div className="allfits-container">
    
        {RecentSubmissions.sort((a,b)=>{return b.id - a.id}).map(pic => (
          <div className="pic-container" key={pic.id}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}>
            <div className="pic-info" style={{height: '100%', fontSize: '24px'}}>
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
            <img src={pic.img} style={{height: '500px'}}/>
            </div>
        ))}
    </div>
        <Link to="/Outfits" style={{textAlign: 'center', margin: '50px 0px'}}><button className="all-outfits">View more outfits</button></Link>
    </>
  )
}

export default Slider