import React from 'react'
import {Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Footer from './pages/components/footer'
import Header from './pages/components/header'
import Contact from './pages/contact'
import Home from './pages/home'
import NoPage from './pages/noPage'
import Project from './pages/project'
import Skill from './pages/skill'


function App() {
    return (
      <>
      <div>
        <Header/>
        <div className='my-16'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/skill' element={<Skill/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<NoPage/>}/>
          </Routes>
        </div>
        
      </div>
      <Footer/>
      </>
      
    )
}

export default App