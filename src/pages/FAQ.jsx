import React from 'react'
import AccordionContainer from '../components/AccordionContainer'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export const FAQ = () => {
  return (<>
    <Navbar/>
    <div className="push-footer">
    <AccordionContainer/>
    <Footer/>
    </div>
    </>
  )
}
