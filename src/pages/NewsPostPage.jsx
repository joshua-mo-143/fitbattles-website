import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { NewsPost } from '../components/NewsPost'

export const NewsPostPage = () => {
  return (
  <>
    <Navbar/>
    <div className="push-footer">
    <NewsPost/>
    <Footer/>
    </div>
    </>
  )
}
