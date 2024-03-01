import React from 'react'

const Nav = () => {
  return (
    <nav className='nav-bar' id='home'>
        <div className="logo">Minons</div>
        <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Nav