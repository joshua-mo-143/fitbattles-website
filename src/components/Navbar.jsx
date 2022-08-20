import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-top">
        <div className="left">
        </div>
        <div className="center">
        <Link to="/" className='link'><h1>FitBattles</h1></Link>
        </div>
        <div className="right">
        </div>
        </div>
        <div className="navbar-bot">
        <ul className="linklist">
                <li className="linkitem">
                <Link to="/entercompetition" className="link">Enter Competition</Link>
                </li>
                <div className="divider"/>
                <li className="linkitem">
                <Link to="/login" className="link">Sign in</Link>
                </li>
                <div className="divider"/>
                <li className="linkitem">
                <Link to="/submitfit" className="link">Submit Outfit</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar