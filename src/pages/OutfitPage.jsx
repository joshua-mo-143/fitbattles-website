import React from 'react'
import Navbar from '../components/Navbar'
import { Outfit } from '../components/Outfit'

export const OutfitPage = () => {

  return (<>
    <Navbar/>
    <div className="push-footer">
    <Outfit/>
    </div>
    </>
  )
}
