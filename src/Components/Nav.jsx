import React from 'react'
import bar from '../assets/bar.png'
const Nav = () => {
  return (
    <nav className='nav-bar' id='home'>
        <div className="logo">Minions</div>
        <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
        </ul>
        <img src={bar} alt="none" className="bar" />
    </nav>
  )
}

export default Nav
