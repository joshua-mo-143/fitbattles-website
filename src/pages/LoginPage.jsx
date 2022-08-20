import React from 'react'
import Footer from '../components/Footer'
import Login from '../components/Login'
import Navbar from '../components/Navbar'

export const LoginPage = () => {
  return (
    <>
    <Navbar/>
    <div className="push-footer">
    <Login/>
    <Footer/>
    </div>
    </>
  )
}
