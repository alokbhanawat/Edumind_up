import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='Hero container' id='Hero'>
        <div className="hero-text">
            <h1>Ensure better Education</h1>
            <p>Ensuring better education is essential for fostering individual growth, societal development, and global progress. </p>
            <Link to='program' smooth offset={-70} duration={500} className='btn'>Explore More <img src={dark_arrow} alt="" /></Link>
        </div>
      
    </div>
  )
}

export default Hero
