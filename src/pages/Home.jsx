import React from 'react'
import Nav from '../components/Nav'
import Services from '../components/Services'
import Branches from '../components/Branches'
import Contact from '../components/Contact'
import About from '../components/About'
import {Routes, Route, BrowserRouter } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element ={<Nav/>}> 
        <Route path='/services' element={<Services/>}/>
        <Route path='/branches' element={<Branches/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        
        </Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Home



