
import React from 'react'
import { Announcement } from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { OutfitList } from '../components/OutfitList'

export const OutfitsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="push-footer">
    <Announcement/>
    <OutfitList/>
    <Footer/>
    </div>
    </>
  )
}
