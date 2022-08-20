import React from 'react'
import { Announcement } from '../components/Announcement'
import { Divider } from '../components/Divider'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { NewsList } from '../components/NewsList'
import { Slider } from '../components/Slider'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="wrapper">
    <Navbar/>
    <div className="push-footer">
    <Announcement/>
    <Slider/>
    <Divider/>
    <NewsList/>
    <Link to="/newslist" style={{zIndex: '2', marginTop: '-150px', textAlign: 'center', marginBottom: '50px'}}><button>View more news</button></Link>
    <Footer/>
    </div>
    </div>
  )
}

export default Home
