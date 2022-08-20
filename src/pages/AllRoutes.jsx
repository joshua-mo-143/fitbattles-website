import Home from "./Home";
import RegisterPage from "./RegisterPage";
import SeasontwoIntro from "./SeasontwoIntro";
import { SubmitFit } from "./SubmitFit";
import { OutfitsPage } from "./OutfitsPage";
import { OutfitPage } from "./OutfitPage";
import { LoginPage } from "./LoginPage";
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { EnterCompetition } from "./EnterCompetition";
import { NewsPostPage } from './NewsPostPage'
import { FAQ } from "./FAQ";
import { UserPage } from "./UserPage";
import { NewsListPage } from "./NewsListPage";
export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/entercompetition" element={<EnterCompetition/>}/>
        <Route path="/submit" element={<SubmitFit/>} />
        <Route path="/outfits" element={<OutfitsPage/>} />
        <Route path="/outfits/:id" element={<OutfitPage/>}/>
        <Route path="/news/:id" element={<NewsPostPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/submitfit" element={<SubmitFit/>}/>
        <Route path="/legal/faq" element={<FAQ/>}/>
        <Route path="/user/:user" element={<UserPage/>}/>
        <Route path="/newslist" element={<NewsListPage/>}/>

    </Routes>
  )
}

export default AllRoutes