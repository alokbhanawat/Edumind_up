import React, { useState } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const stories = [
  {
    image: user_1,
    name: 'Sakshi Jain',
    location: 'Business student',
    quote: "Choosing to pursue my degree at Edumind was one of the best decisions I've ever made. The supportive community helped me find my confidence and direction.",
  },
  {
    image: user_2,
    name: 'Harshit Singh',
    location: 'Computer science student',
    quote: 'At Edumind my fundamentals became stronger, and I found the right path for my future. The mentors made every step feel possible.',
  },
  {
    image: user_3,
    name: 'Siddharth Vyas',
    location: 'Arts & humanities student',
    quote: 'I found a place where curiosity is encouraged and new ideas are welcomed. My experience here has opened doors I never expected.',
  },
  {
    image: user_4,
    name: 'Shreya Gehlot',
    location: 'Graduate student',
    quote: 'The people, opportunities, and hands-on learning at Edumind helped me grow into a more thoughtful and confident version of myself.',
  },
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + stories.length) % stories.length)
  }

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % stories.length)
  }

  return (
    <div className="testimonials">
      <div className="testimonial-heading">
        <p>REAL PEOPLE, REAL PROGRESS</p>
        <div className="carousel-controls">
          <button className="carousel-btn" type="button" onClick={showPrevious} aria-label="Previous testimonial">
            <img src={back_icon} alt="" />
          </button>
          <button className="carousel-btn" type="button" onClick={showNext} aria-label="Next testimonial">
            <img src={next_icon} alt="" />
          </button>
        </div>
      </div>
      <div className="testimonial-window" aria-live="polite">
        <div className="testimonial-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {stories.map((story) => (
            <article className="testimonial-slide" key={story.name}>
              <div className="testimonial-quote-mark" aria-hidden="true">“</div>
              <p className="testimonial-quote">{story.quote}</p>
              <div className="testimonial-person">
                <img src={story.image} alt={story.name} />
                <div>
                  <h3>{story.name}</h3>
                  <span>{story.location}</span>
                </div>
                <span className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="carousel-dots" role="group" aria-label="Choose a testimonial">
        {stories.map((story, index) => (
          <button
            key={story.name}
            className={`carousel-dot${index === activeIndex ? ' is-active' : ''}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show testimonial from ${story.name}`}
            aria-current={index === activeIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
