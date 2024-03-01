import React from 'react'
import mypng from "../assets/my.png"
const Home = () => {
  return (
    <div className='home' >
        <div className='left'>
            <h1 className='name'>Hello there! I'm Adithyan,</h1>
            <p className='para1'>A passionate <span className='highlight'>frontend web developer</span>. Welcome to my digital space, where simplicity meets functionality and where I bring ideas to life through design and code.</p>
        </div>
        <div className='right'><img src={mypng} alt="none" className='mypic'/></div>
    </div>
  )
}

export default Home

//  .