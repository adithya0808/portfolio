import React from 'react'
import Nav from './Nav'
import "../Components/css/Portfolio.css"
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
const Portfolio = () => {
  return (
    <div className='container'>
        <Nav/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Portfolio