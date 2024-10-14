import React from 'react'
import './Campus.css'
import galley_1 from '../../assets/gallery-1.png'
import galley_2 from '../../assets/gallery-2.png'
import galley_3 from '../../assets/gallery-3.png'
import galley_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={galley_1} alt="" />
        <img src={galley_2} alt="" />
        <img src={galley_3} alt="" />
        <img src={galley_4} alt="" />
      </div>
      <button className='btn dark-btn'>See More Here<img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
