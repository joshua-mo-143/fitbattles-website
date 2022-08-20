import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Register from '../components/Register'

export const RegisterPage = () => {

  return (
    <div className="wrapper">
      <Navbar/>
    <Register/>
    </div>
  )
}

export default RegisterPage