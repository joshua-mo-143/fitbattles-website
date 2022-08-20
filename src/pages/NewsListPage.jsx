import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { NewsList } from '../components/NewsList'

export const NewsListPage = () => {
  return (
    <>
    <Navbar/>
    <NewsList/>
    <Footer/>
    </>
  )
}
