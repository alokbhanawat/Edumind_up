import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='Hero container'>
        <div className="hero-text">
            <h1>Ensure better Education</h1>
            <p>Ensuring better education is essential for fostering individual growth, societal development, and global progress. </p>
            <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
