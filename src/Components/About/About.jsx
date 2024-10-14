import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
         <img src={about_img} alt="" className='about-img'/>
         <img src={play_icon} alt="" className='play-icon'/>

      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Leaders Today</h2>
         
         <p>We exist as a University for Public Good. Our founding values of excellence, equality and opportunity for all are as true today as they were when we opened our doors to 230 students in 1963.

Today we're home to more than 20,000 students and 5,000 staff. Our diverse community fosters a sense of belonging and operates at the highest academic and ethical standards..</p>
         
         <p>In times of uncertainty and global unrest, the achievements of our staff and students continue to inspire us and have a positive impact on local, national and global scales.</p>
      </div>
    </div>
  )
}

export default About
